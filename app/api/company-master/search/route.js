const CIN_PATTERN = /^[LU]\d{5}[A-Z]{2}\d{4}[A-Z]{3}\d{6}$/i;

function getApiBaseUrl() {
  if (process.env.COMPANY_MASTER_API_BASE_URL) {
    return process.env.COMPANY_MASTER_API_BASE_URL;
  }

  if (process.env.COMPANY_MASTER_API_KEY?.startsWith("key_live_")) {
    return "https://api.sandbox.co.in";
  }

  return "https://test-api.sandbox.co.in";
}

async function readJson(response) {
  const text = await response.text();

  try {
    return JSON.parse(text);
  } catch {
    return { message: text || response.statusText };
  }
}

async function authenticate() {
  const apiKey = process.env.COMPANY_MASTER_API_KEY;
  const apiSecret = process.env.COMPANY_MASTER_API_SECRET;

  if (!apiKey || !apiSecret) {
    throw new Error("Sandbox API key or secret is missing.");
  }

  if (apiKey.startsWith("key_live_") && apiSecret.startsWith("secret_test_")) {
    throw new Error("Sandbox credential mismatch: key_live requires the matching live secret, not a test secret.");
  }

  if (apiKey.startsWith("key_test_") && apiSecret.startsWith("secret_live_")) {
    throw new Error("Sandbox credential mismatch: key_test requires the matching test secret, not a live secret.");
  }

  const response = await fetch(`${getApiBaseUrl()}/authenticate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "x-api-secret": apiSecret,
      "x-api-version": "1.0.0",
    },
    cache: "no-store",
  });
  const body = await readJson(response);

  if (!response.ok || !body?.data?.access_token) {
    throw new Error(body?.message || "Sandbox authentication failed.");
  }

  return body.data.access_token;
}

async function sandboxFetch(path, token, init = {}) {
  const response = await fetch(`${getApiBaseUrl()}${path}`, {
    ...init,
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
      "x-api-key": process.env.COMPANY_MASTER_API_KEY,
      "x-api-version": "1.0",
      ...(init.headers || {}),
    },
    cache: "no-store",
  });
  const body = await readJson(response);

  if (!response.ok || (body?.code && body.code >= 400)) {
    throw new Error(body?.message || "Sandbox request failed.");
  }

  return body;
}

function normalizeMaster(record) {
  if (!record) return null;

  return {
    cin: record.cin || "",
    companyName: record.company_name || "",
    rocCode: record.company_roc_code || "",
    category: record.company_category || "",
    subCategory: record.company_sub_category || "",
    className: record.company_class || "",
    authorizedCapital: record.authorized_capital ?? "",
    paidupCapital: record.paidup_capital ?? "",
    registrationDate: record.company_registration_date || "",
    registeredOfficeAddress: record.registered_office_address || "",
    listingStatus: record.listing_status || "",
    companyStatus: record.company_status || "",
    stateCode: record.company_state_code || "",
    origin: record.company_origin || "",
    nicCode: record.nic_code || "",
    industrialClassification: record.company_industrial_classification || "",
  };
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.trim();

  if (!query || query.length < 3) {
    return Response.json({ records: [], master: null });
  }

  try {
    const token = await authenticate();
    const params = new URLSearchParams({
      limit: "8",
      offset: "0",
    });

    if (CIN_PATTERN.test(query)) {
      params.set("cin", query.toUpperCase());
    } else {
      params.set("company_name", query);
    }

    const searchBody = await sandboxFetch(
      `/kyc/mca/company/master-data/search?${params.toString()}`,
      token,
      { method: "GET" },
    );
    const records = searchBody?.data?.records || [];
    const firstCin = CIN_PATTERN.test(query)
      ? query.toUpperCase()
      : records[0]?.cin;

    let master = null;

    if (firstCin) {
      const masterBody = await sandboxFetch(
        "/kyc/mca/company/master-data",
        token,
        {
          method: "POST",
          body: JSON.stringify({ cin: firstCin }),
        },
      );
      const masterRecord = Array.isArray(masterBody?.data)
        ? masterBody.data[0]
        : masterBody?.data;
      master = normalizeMaster(masterRecord);
    }

    return Response.json({
      records: records.map((record) => ({
        cin: record.cin,
        companyName: record.company_name,
      })),
      master,
      source: "sandbox-mca",
      transactionId: searchBody?.transaction_id || null,
    });
  } catch (error) {
    return Response.json(
      {
        error: error.message,
        records: [],
        master: null,
        source: "sandbox-mca",
      },
      { status: 502 },
    );
  }
}
