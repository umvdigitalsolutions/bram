"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function CompanyDataPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [masterData, setMasterData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const term = query.trim();

    if (term.length < 3) {
      return;
    }

    const controller = new AbortController();
    const timer = setTimeout(async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `/api/company-master/search?q=${encodeURIComponent(term)}`,
          { signal: controller.signal },
        );
        const body = await response.json();

        if (!response.ok) {
          throw new Error(body?.error || "Unable to fetch company master data.");
        }

        setResults(body.records || []);
        setMasterData(body.master || null);
      } catch (fetchError) {
        if (fetchError.name !== "AbortError") {
          setResults([]);
          setMasterData(null);
          setError(fetchError.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }, 400);

    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [query]);

  function handleSearchChange(value) {
    setQuery(value);

    if (value.trim().length < 3) {
      setResults([]);
      setMasterData(null);
      setError("");
      setLoading(false);
    }
  }

  async function selectCompany(cin) {
    setQuery(cin);
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `/api/company-master/search?q=${encodeURIComponent(cin)}`,
      );
      const body = await response.json();

      if (!response.ok) {
        throw new Error(body?.error || "Unable to fetch company master data.");
      }

      setResults(body.records || []);
      setMasterData(body.master || null);
    } catch (fetchError) {
      setError(fetchError.message);
    } finally {
      setLoading(false);
    }
  }

  const detailItems = masterData
    ? [
        ["CIN / LLPIN", masterData.cin],
        ["ROC", masterData.rocCode],
        ["Company status", masterData.companyStatus],
        ["Class", masterData.className],
        ["Category", masterData.category],
        ["Sub-category", masterData.subCategory],
        ["Registration date", masterData.registrationDate],
        ["Listing status", masterData.listingStatus],
        ["State", masterData.stateCode],
        ["Origin", masterData.origin],
        ["NIC", masterData.nicCode],
        ["Industrial classification", masterData.industrialClassification],
        ["Authorized capital", masterData.authorizedCapital],
        ["Paid-up capital", masterData.paidupCapital],
      ].filter(([, value]) => value !== "" && value !== null && value !== undefined)
    : [];

  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#17201d]">
      <header className="border-b border-[#d8c08a]/30 bg-[#17201d] text-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="BRAM & Co. home">
            <span className="grid size-11 place-items-center rounded bg-[#c7a15a] text-sm font-black text-[#17201d]">B</span>
            <span>
              <span className="block text-lg font-semibold tracking-wide">BRAM & Co. LLP</span>
              <span className="block text-xs uppercase tracking-[0.22em] text-[#d8d2c5]">Chartered Accountants</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-[#ede7dc] md:flex">
            <Link href="/" className="hover:text-[#c7a15a]">Home</Link>
            <Link href="/about" className="hover:text-[#c7a15a]">About</Link>
            <Link href="/services" className="hover:text-[#c7a15a]">Services</Link>
            <Link href="/tools" className="hover:text-[#c7a15a]">Tools</Link>
            <Link href="/company-data" className="font-semibold text-[#f1d79d] hover:text-[#c7a15a]">Company data</Link>
            <Link href="/contact" className="hover:text-[#c7a15a]">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="bg-[#17201d] px-5 py-24 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f1d79d]">MCA master data</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-normal sm:text-6xl">
            Search live company master data by name, CIN, or LLPIN.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#d8d2c5]">
            Powered by the Sandbox MCA API. Results show public company master data; BRAM engagement history remains separate and confidential.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <label htmlFor="master-search" className="block text-sm font-bold uppercase tracking-[0.18em] text-[#8a6b2f]">
            Search company
          </label>
          <input
            id="master-search"
            value={query}
            onChange={(event) => handleSearchChange(event.target.value)}
            placeholder="Try QUICKO, TATA, RELIANCE, or a CIN..."
            className="mt-3 h-14 w-full border border-[#cfc3ad] bg-white px-4 text-base text-[#17201d] outline-none ring-[#c7a15a] placeholder:text-[#7a847d] focus:ring-2"
          />
          <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em]">
            <span className="border border-[#ddd3c0] bg-white px-3 py-2 text-[#5b665f]">
              {loading ? "Fetching MCA data" : "Live Sandbox MCA API"}
            </span>
            {results.length ? (
              <span className="border border-[#ddd3c0] bg-white px-3 py-2 text-[#5b665f]">
                {results.length} result{results.length === 1 ? "" : "s"}
              </span>
            ) : null}
          </div>

          <div className="mt-6 grid gap-2">
            {results.length ? (
              results.map((company) => (
                <button
                  key={company.cin}
                  onClick={() => selectCompany(company.cin)}
                  className={`border p-4 text-left transition hover:border-[#c7a15a] hover:bg-[#fffaf0] ${
                    masterData?.cin === company.cin
                      ? "border-[#c7a15a] bg-[#fffaf0]"
                      : "border-[#ddd3c0] bg-white"
                  }`}
                >
                  <span className="block font-semibold text-[#17201d]">{company.companyName}</span>
                  <span className="mt-1 block text-sm text-[#5b665f]">{company.cin}</span>
                </button>
              ))
            ) : (
              <p className="border border-[#ddd3c0] bg-white p-4 text-sm leading-6 text-[#5b665f]">
                Enter at least three characters to search MCA company master data.
              </p>
            )}
          </div>

          {error ? (
            <p className="mt-4 border border-[#d7a1a1] bg-[#fff4f4] p-4 text-sm leading-6 text-[#8a2f2f]">
              Sandbox API did not return master data: {error}
            </p>
          ) : null}
        </div>

        <article className="border border-[#ddd3c0] bg-[#17201d] p-7 text-white sm:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f1d79d]">Selected master record</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-normal">
            {masterData?.companyName || "Search and select a company"}
          </h2>
          <p className="mt-3 text-[#d8d2c5]">
            {masterData?.cin || "Company details will appear here."}
          </p>

          {detailItems.length ? (
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {detailItems.map(([label, value]) => (
                <div key={label} className="border border-white/14 bg-white/8 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#f1d79d]">{label}</p>
                  <p className="mt-2 break-words text-sm font-semibold text-[#ede7dc]">{value}</p>
                </div>
              ))}
            </div>
          ) : null}

          {masterData?.registeredOfficeAddress ? (
            <div className="mt-8 border-t border-white/16 pt-6 text-sm leading-6 text-[#d8d2c5]">
              <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#f1d79d]">Registered office</span>
              <span className="mt-3 block">{masterData.registeredOfficeAddress}</span>
            </div>
          ) : null}
        </article>
      </section>
    </main>
  );
}
