"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const tools = [
  {
    id: "tax-organizer",
    name: "Tax Organizer Center",
    shortName: "Organizer",
    eyebrow: "Prepare",
    copy: "Build a clean document pack for tax, audit, GST, MCA, and assessment work.",
    cta: "Prepare tax pack",
    items: [
      "PAN, GSTIN, TAN, CIN/LLPIN and registration details",
      "Bank statements and loan statements",
      "Sales, purchase, expense and payroll summaries",
      "TDS/TCS certificates and challans",
      "GST returns, ledgers and reconciliations",
      "Investment, deduction and exemption proofs",
      "Assessment notices and prior year orders",
      "Financial statements and audit reports",
    ],
    note: "Use this as a pre-meeting document pack before sharing records with the BRAM team.",
  },
  {
    id: "financial-calculators",
    name: "Financial Calculators",
    shortName: "Calculators",
    eyebrow: "Estimate",
    copy: "Run a quick loan planning calculation and browse common finance calculators.",
    cta: "Calculate now",
    items: [
      "Fixed rate loan / mortgage calculator",
      "Balloon loan calculator",
      "Bi-weekly payment calculator",
      "Blended rate calculator",
      "Maximum finance eligibility calculator",
      "15 years vs. 30 years comparison",
      "Loan payoff calculator",
      "Refinance break-even calculator",
      "Rent vs. buy calculator",
      "Reverse mortgage style balance calculator",
    ],
    note: "Calculator outputs are planning estimates and should be reviewed with actual loan terms.",
  },
  {
    id: "news-alerts",
    name: "Tax & Accounting News",
    shortName: "News",
    eyebrow: "Stay current",
    copy: "Track the update areas clients should watch before filings or board decisions.",
    cta: "Review alerts",
    items: [
      "Income tax due-date updates",
      "GST circulars and notifications",
      "MCA annual filing updates",
      "Accounting standard changes",
      "Audit reporting changes",
      "TDS/TCS rate and form updates",
      "Transfer pricing and international tax updates",
      "Customs and foreign trade updates",
    ],
    links: [
      {
        category: "Tax alerts",
        entries: [
          ["Income Tax updates", "https://www.incometax.gov.in/iec/foportal/"],
          ["GST news and updates", "https://www.gst.gov.in/newsandupdates"],
          ["CBIC", "https://www.cbic.gov.in/"],
          ["Tax Information Network", "https://www.tin-nsdl.com/"],
        ],
      },
      {
        category: "Accounting and corporate",
        entries: [
          ["MCA notices", "https://www.mca.gov.in/"],
          ["ICAI", "https://www.icai.org/"],
          ["ICMAI", "https://icmai.in/"],
          ["SEBI updates", "https://www.sebi.gov.in/"],
        ],
      },
    ],
    note: "Use this as a watchlist. BRAM can turn relevant updates into action items for your entity.",
  },
  {
    id: "helpful-websites",
    name: "Helpful Websites",
    shortName: "Links",
    eyebrow: "Access",
    copy: "Keep frequently used government and regulatory portals close at hand.",
    cta: "Open links",
    items: [
      "Income Tax e-Filing portal",
      "GST portal",
      "MCA portal",
      "ICEGATE customs portal",
      "EPFO portal",
      "ESIC portal",
      "RBI website",
      "SEBI website",
      "MSME registration portal",
      "Professional tax and state tax portals",
    ],
    links: [
      {
        category: "Tax",
        entries: [
          ["Income Tax e-Filing", "https://eportal.incometax.gov.in/"],
          ["Income Tax Department", "https://www.incometax.gov.in/iec/foportal/"],
          ["GST Portal", "https://www.gst.gov.in/"],
          ["GST Self Service", "https://selfservice.gstsystem.in/"],
        ],
      },
      {
        category: "Corporate and Customs",
        entries: [
          ["MCA Portal", "https://www.mca.gov.in/"],
          ["MCA Corporate Data", "https://www.mcacdm.nic.in/"],
          ["ICEGATE Customs", "https://www.icegate.gov.in/"],
          ["DGFT", "https://www.dgft.gov.in/"],
        ],
      },
      {
        category: "Government and Labour",
        entries: [
          ["EPFO", "https://www.epfindia.gov.in/"],
          ["ESIC", "https://www.esic.gov.in/"],
          ["Udyam MSME Registration", "https://udyamregistration.gov.in/"],
          ["National Portal of India", "https://www.india.gov.in/"],
        ],
      },
      {
        category: "Financial Regulators",
        entries: [
          ["RBI", "https://www.rbi.org.in/"],
          ["SEBI", "https://www.sebi.gov.in/"],
          ["NSE India", "https://www.nseindia.com/"],
          ["BSE India", "https://www.bseindia.com/"],
        ],
      },
    ],
    note: "Links are grouped as a client convenience checklist. Add your login owners internally.",
  },
  {
    id: "quick-info",
    name: "Quick Info Guide",
    shortName: "Guide",
    eyebrow: "Choose",
    copy: "Find the right BRAM service route before sending an enquiry.",
    cta: "View guide",
    items: [
      "Audit, review and assurance",
      "Fractional CFO and finance desk",
      "Tax preparation and tax planning",
      "Representation for assessments and appeals",
      "Business succession and restructuring support",
      "Retirement and owner planning inputs",
      "Business consulting",
      "Cost records and cost audit",
      "GST and MCA compliance",
    ],
    note: "Select the areas that match your requirement and share the selection during consultation.",
  },
];

const formatNumber = new Intl.NumberFormat("en-IN", {
  maximumFractionDigits: 0,
});

const quickInfoRoutes = {
  "Audit, review and assurance": "/services",
  "Fractional CFO and finance desk": "/services",
  "Tax preparation and tax planning": "/services",
  "Representation for assessments and appeals": "/contact",
  "Business succession and restructuring support": "/contact",
  "Retirement and owner planning inputs": "/contact",
  "Business consulting": "/services",
  "Cost records and cost audit": "/services",
  "GST and MCA compliance": "/services",
};

const calculatorOptions = [
  ["fixed", "Fixed rate loan / mortgage calculator"],
  ["balloon", "Balloon loan calculator"],
  ["biweekly", "Bi-weekly payment calculator"],
  ["blended", "Blended rate calculator"],
  ["max-finance", "Maximum finance eligibility calculator"],
  ["term-compare", "15 years vs. 30 years comparison"],
  ["payoff", "Loan payoff calculator"],
  ["refinance", "Refinance break-even calculator"],
  ["rent-buy", "Rent vs. buy calculator"],
  ["reverse", "Reverse mortgage style balance calculator"],
];

function getProgress(done, total) {
  if (!total) return 0;
  return Math.round((done / total) * 100);
}

function getMonthlyPayment(principal, annualRate, years) {
  const months = years * 12;
  const monthlyRate = annualRate / 100 / 12;

  if (!months) return 0;
  if (!monthlyRate) return principal / months;

  return (principal * monthlyRate) / (1 - (1 + monthlyRate) ** -months);
}

function getRemainingBalance(principal, annualRate, years, paidMonths) {
  const monthlyRate = annualRate / 100 / 12;
  const payment = getMonthlyPayment(principal, annualRate, years);

  if (!monthlyRate) {
    return Math.max(principal - payment * paidMonths, 0);
  }

  return Math.max(
    principal * (1 + monthlyRate) ** paidMonths -
      payment * (((1 + monthlyRate) ** paidMonths - 1) / monthlyRate),
    0,
  );
}

function getPayoffMonths(principal, annualRate, monthlyPayment) {
  const monthlyRate = annualRate / 100 / 12;

  if (!monthlyPayment || monthlyPayment <= principal * monthlyRate) return 0;
  if (!monthlyRate) return Math.ceil(principal / monthlyPayment);

  return Math.ceil(
    -Math.log(1 - (principal * monthlyRate) / monthlyPayment) /
      Math.log(1 + monthlyRate),
  );
}

export default function ToolsClient() {
  const [activeId, setActiveId] = useState("tax-organizer");
  const [checked, setChecked] = useState({});
  const [organizerInputs, setOrganizerInputs] = useState({
    entityName: "",
    period: "FY 2026-27",
    owner: "",
  });
  const [calculatorMode, setCalculatorMode] = useState("fixed");
  const [loanInputs, setLoanInputs] = useState({
    principal: "5000000",
    rate: "9",
    years: "10",
    extraPayment: "0",
    secondPrincipal: "1000000",
    secondRate: "12",
    balloonYears: "5",
    oldEmi: "75000",
    newEmi: "65000",
    refinanceCost: "120000",
    monthlyRent: "50000",
    propertyPrice: "10000000",
    annualAppreciation: "6",
    monthlyIncome: "300000",
    monthlyObligations: "60000",
    ltv: "80",
    reverseYears: "10",
  });
  const [shareInputs, setShareInputs] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitState, setSubmitState] = useState({
    status: "idle",
    message: "",
  });

  const activeTool = tools.find((tool) => tool.id === activeId) || tools[0];
  const activeChecks = useMemo(() => checked[activeId] || [], [activeId, checked]);
  const progress = getProgress(activeChecks.length, activeTool.items.length);
  const isLinksTool = activeTool.id === "helpful-websites";
  const isNewsTool = activeTool.id === "news-alerts";
  const isQuickInfoTool = activeTool.id === "quick-info";
  const isOrganizerTool = activeTool.id === "tax-organizer";
  const isCalculatorTool = activeTool.id === "financial-calculators";
  const isLinkPanel = isLinksTool || isNewsTool;

  const loanResult = useMemo(() => {
    const principal = Number(loanInputs.principal) || 0;
    const annualRate = Number(loanInputs.rate) || 0;
    const years = Number(loanInputs.years) || 0;
    const extraPayment = Number(loanInputs.extraPayment) || 0;
    const payment = getMonthlyPayment(principal, annualRate, years);
    const months = years * 12;
    const totalPayment = (payment + extraPayment) * months;
    const secondPrincipal = Number(loanInputs.secondPrincipal) || 0;
    const secondRate = Number(loanInputs.secondRate) || 0;
    const oldEmi = Number(loanInputs.oldEmi) || 0;
    const newEmi = Number(loanInputs.newEmi) || 0;
    const refinanceCost = Number(loanInputs.refinanceCost) || 0;
    const monthlyRent = Number(loanInputs.monthlyRent) || 0;
    const propertyPrice = Number(loanInputs.propertyPrice) || 0;
    const annualAppreciation = Number(loanInputs.annualAppreciation) || 0;
    const monthlyIncome = Number(loanInputs.monthlyIncome) || 0;
    const monthlyObligations = Number(loanInputs.monthlyObligations) || 0;
    const ltv = Number(loanInputs.ltv) || 0;
    const balloonYears = Number(loanInputs.balloonYears) || 0;
    const reverseYears = Number(loanInputs.reverseYears) || 0;
    const eligibleEmi = Math.max(monthlyIncome * 0.4 - monthlyObligations, 0);
    const monthlyRate = annualRate / 100 / 12;
    const financeFactor = monthlyRate
      ? (1 - (1 + monthlyRate) ** -(years * 12)) / monthlyRate
      : years * 12;
    const incomeBasedLoan = eligibleEmi * financeFactor;
    const ltvBasedLoan = propertyPrice * (ltv / 100);
    const payoffPayment = payment + extraPayment;
    const payoffMonths = getPayoffMonths(principal, annualRate, payoffPayment);
    const standardInterest = Math.max(payment * months - principal, 0);
    const payoffInterest = Math.max(payoffPayment * payoffMonths - principal, 0);

    return {
      payment: Math.round(payment),
      totalInterest: Math.max(Math.round(totalPayment - principal), 0),
      acceleratedPayment: Math.round(payment + extraPayment),
      balloonPayment: Math.round(
        getRemainingBalance(principal, annualRate, years, balloonYears * 12),
      ),
      biweeklyPayment: Math.round(payment / 2),
      biweeklyAnnualOutflow: Math.round((payment / 2) * 26),
      blendedRate:
        principal + secondPrincipal
          ? (
              (principal * annualRate + secondPrincipal * secondRate) /
              (principal + secondPrincipal)
            ).toFixed(2)
          : "0.00",
      maxFinance: Math.round(Math.min(incomeBasedLoan, ltvBasedLoan || incomeBasedLoan)),
      eligibleEmi: Math.round(eligibleEmi),
      fifteenYearEmi: Math.round(getMonthlyPayment(principal, annualRate, 15)),
      thirtyYearEmi: Math.round(getMonthlyPayment(principal, annualRate, 30)),
      fifteenYearInterest: Math.round(getMonthlyPayment(principal, annualRate, 15) * 180 - principal),
      thirtyYearInterest: Math.round(getMonthlyPayment(principal, annualRate, 30) * 360 - principal),
      payoffMonths,
      payoffInterestSaved: Math.max(Math.round(standardInterest - payoffInterest), 0),
      refinanceBreakEven:
        oldEmi > newEmi
          ? Math.ceil(refinanceCost / (oldEmi - newEmi))
          : 0,
      rentVsBuyYears:
        monthlyRent * 12
          ? (propertyPrice / (monthlyRent * 12)).toFixed(1)
          : "0.0",
      projectedPropertyValue: Math.round(propertyPrice * (1 + annualAppreciation / 100) ** 5),
      reverseBalance: Math.round(propertyPrice * 0.45 * (1 + annualRate / 100) ** reverseYears),
    };
  }, [loanInputs]);

  const organizerSummary = useMemo(() => {
    const missingItems = activeTool.id === "tax-organizer"
      ? activeTool.items.filter((item) => !activeChecks.includes(item))
      : [];

    return [
      `Entity: ${organizerInputs.entityName || "Not entered"}`,
      `Period: ${organizerInputs.period || "Not entered"}`,
      `Owner: ${organizerInputs.owner || "Not entered"}`,
      `Ready items: ${activeChecks.length}/${activeTool.items.length}`,
      `Pending: ${missingItems.length ? missingItems.join("; ") : "None"}`,
    ].join("\n");
  }, [activeChecks, activeTool, organizerInputs]);

  const calculatorFields = {
    fixed: [
      ["principal", "Loan amount"],
      ["rate", "Annual rate %"],
      ["years", "Years"],
    ],
    balloon: [
      ["principal", "Loan amount"],
      ["rate", "Annual rate %"],
      ["years", "Amortization years"],
      ["balloonYears", "Balloon due after years"],
    ],
    biweekly: [
      ["principal", "Loan amount"],
      ["rate", "Annual rate %"],
      ["years", "Years"],
    ],
    blended: [
      ["principal", "First loan amount"],
      ["rate", "First loan rate %"],
      ["secondPrincipal", "Second loan amount"],
      ["secondRate", "Second loan rate %"],
    ],
    "max-finance": [
      ["monthlyIncome", "Monthly income"],
      ["monthlyObligations", "Existing monthly obligations"],
      ["rate", "Annual rate %"],
      ["years", "Years"],
      ["propertyPrice", "Property price"],
      ["ltv", "Loan-to-value %"],
    ],
    "term-compare": [
      ["principal", "Loan amount"],
      ["rate", "Annual rate %"],
    ],
    payoff: [
      ["principal", "Loan amount"],
      ["rate", "Annual rate %"],
      ["years", "Original years"],
      ["extraPayment", "Extra monthly payment"],
    ],
    refinance: [
      ["oldEmi", "Current EMI"],
      ["newEmi", "New EMI"],
      ["refinanceCost", "Refinance cost"],
    ],
    "rent-buy": [
      ["monthlyRent", "Monthly rent"],
      ["propertyPrice", "Property price"],
      ["annualAppreciation", "Expected appreciation %"],
    ],
    reverse: [
      ["propertyPrice", "Property value"],
      ["rate", "Annual growth / interest %"],
      ["reverseYears", "Years"],
    ],
  };

  const calculatorOutputs = {
    fixed: [
      ["Monthly EMI", formatNumber.format(loanResult.payment)],
      ["Total interest", formatNumber.format(loanResult.totalInterest)],
      ["Total outflow", formatNumber.format(loanResult.payment * (Number(loanInputs.years) || 0) * 12)],
    ],
    balloon: [
      ["Monthly EMI", formatNumber.format(loanResult.payment)],
      ["Balloon amount", formatNumber.format(loanResult.balloonPayment)],
    ],
    biweekly: [
      ["Bi-weekly payment", formatNumber.format(loanResult.biweeklyPayment)],
      ["Annual outflow", formatNumber.format(loanResult.biweeklyAnnualOutflow)],
    ],
    blended: [["Blended rate", `${loanResult.blendedRate}%`]],
    "max-finance": [
      ["Eligible EMI", formatNumber.format(loanResult.eligibleEmi)],
      ["Estimated finance", formatNumber.format(loanResult.maxFinance)],
    ],
    "term-compare": [
      ["15-year EMI", formatNumber.format(loanResult.fifteenYearEmi)],
      ["30-year EMI", formatNumber.format(loanResult.thirtyYearEmi)],
      ["Interest saved in 15-year", formatNumber.format(Math.max(loanResult.thirtyYearInterest - loanResult.fifteenYearInterest, 0))],
    ],
    payoff: [
      ["Payoff time", `${loanResult.payoffMonths} months`],
      ["Interest saved", formatNumber.format(loanResult.payoffInterestSaved)],
    ],
    refinance: [["Break-even", `${loanResult.refinanceBreakEven} months`]],
    "rent-buy": [
      ["Price / annual rent", `${loanResult.rentVsBuyYears} years`],
      ["Projected value in 5 years", formatNumber.format(loanResult.projectedPropertyValue)],
    ],
    reverse: [["Projected balance", formatNumber.format(loanResult.reverseBalance)]],
  };

  const activeCalculatorLabel =
    calculatorOptions.find(([mode]) => mode === calculatorMode)?.[1] ||
    "Financial calculator";

  const selectedShareItems = activeChecks.length ? activeChecks.join("; ") : "None";
  const calculatorShareText = isCalculatorTool
    ? `${activeCalculatorLabel}: ${(calculatorOutputs[calculatorMode] || [])
        .map(([label, value]) => `${label} ${value}`)
        .join(", ")}`
    : "";
  const shareSummary = [
    `Name: ${shareInputs.name || "Not entered"}`,
    `Email: ${shareInputs.email || "Not entered"}`,
    `Phone: ${shareInputs.phone || "Not entered"}`,
    `Company: ${shareInputs.company || "Not entered"}`,
    `Tool: ${activeTool.name}`,
    `Selected items: ${selectedShareItems}`,
    isOrganizerTool ? organizerSummary : "",
    calculatorShareText,
    `Message: ${shareInputs.message || "Not entered"}`,
  ]
    .filter(Boolean)
    .join("\n");

  function toggleItem(toolId, item) {
    setChecked((current) => {
      const currentItems = current[toolId] || [];
      const nextItems = currentItems.includes(item)
        ? currentItems.filter((value) => value !== item)
        : [...currentItems, item];

      return {
        ...current,
        [toolId]: nextItems,
      };
    });
  }

  function clearActiveSelection() {
    setChecked((current) => ({
      ...current,
      [activeId]: [],
    }));
  }

  async function handleShareSubmit(event) {
    event.preventDefault();
    setSubmitState({
      status: "loading",
      message: "Creating PDF and sending your selected details to BRAM...",
    });

    try {
      const response = await fetch("/api/tools-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...shareInputs,
          toolId: activeTool.id,
          toolName: activeTool.name,
          selectedItems: activeChecks,
          calculatorMode: isCalculatorTool ? calculatorMode : "",
          summary: shareSummary,
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send the form right now.");
      }

      setSubmitState({
        status: "success",
        message: "Your selected details were converted to PDF and sent to BRAM.",
      });
    } catch (error) {
      setSubmitState({
        status: "error",
        message: error.message,
      });
    }
  }

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
            <Link href="/tools" className="font-semibold text-[#f1d79d] hover:text-[#c7a15a]">Tools</Link>
            <Link href="/company-data" className="hover:text-[#c7a15a]">Company data</Link>
            <Link href="/contact" className="hover:text-[#c7a15a]">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="bg-[#17201d] px-5 py-20 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f1d79d]">Client tools</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-normal sm:text-6xl">
              A cleaner resource center for faster client preparation.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#d8d2c5]">
              Organizers, calculators, alerts, links, and service shortcuts in a premium workspace built for scanning, selecting, and acting.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {[
              ["5", "Resource areas"],
              ["45+", "Selectable prompts"],
              ["1", "Live calculator"],
            ].map(([value, label]) => (
              <div key={label} className="border border-white/14 bg-white/8 p-5">
                <p className="text-3xl font-semibold">{value}</p>
                <p className="mt-1 text-sm text-[#d8d2c5]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:px-8 lg:grid-cols-[360px_1fr]">
        <aside className="self-start border border-[#ddd3c0] bg-white p-3 shadow-sm lg:sticky lg:top-6">
          <div className="px-3 py-3">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a6b2f]">Choose resource</p>
          </div>
          <div className="grid gap-2">
            {tools.map((tool) => {
              const selectedCount = checked[tool.id]?.length || 0;
              const linkCount = tool.links?.reduce(
                (count, group) => count + group.entries.length,
                0,
              );

              return (
                <button
                  key={tool.id}
                  onClick={() => setActiveId(tool.id)}
                  className={`border p-4 text-left transition ${
                    activeId === tool.id
                      ? "border-[#c7a15a] bg-[#fffaf0]"
                      : "border-transparent bg-white hover:border-[#ddd3c0] hover:bg-[#f7f5ef]"
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a6b2f]">{tool.eyebrow}</span>
                  <span className="mt-2 block text-base font-semibold text-[#17201d]">{tool.shortName}</span>
                  <span className="mt-2 block text-sm leading-5 text-[#5b665f]">{tool.copy}</span>
                  <span className="mt-3 inline-flex border border-[#ddd3c0] px-2 py-1 text-xs font-semibold text-[#5b665f]">
                    {linkCount ? `${linkCount} links` : `${selectedCount}/${tool.items.length} selected`}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        <section className="border border-[#ddd3c0] bg-white shadow-sm">
          <div className="border-b border-[#ddd3c0] bg-[#17201d] p-7 text-white sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f1d79d]">{activeTool.eyebrow}</p>
            <div className="mt-4 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <h2 className="text-4xl font-semibold tracking-normal">{activeTool.name}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#d8d2c5]">{activeTool.copy}</p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:min-w-64">
                <div className="border border-white/14 bg-white/8 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#f1d79d]">
                    {isLinkPanel ? "Groups" : "Ready"}
                  </p>
                  <p className="mt-2 text-2xl font-semibold">
                    {isLinkPanel ? activeTool.links.length : `${progress}%`}
                  </p>
                </div>
                <div className="border border-white/14 bg-white/8 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#f1d79d]">
                    {isLinkPanel ? "Links" : "Selected"}
                  </p>
                  <p className="mt-2 text-2xl font-semibold">
                    {isLinkPanel
                      ? activeTool.links.reduce((count, group) => count + group.entries.length, 0)
                      : `${activeChecks.length}/${activeTool.items.length}`}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {isOrganizerTool ? (
              <div className="mb-8 grid gap-4 border border-[#ddd3c0] bg-[#f7f5ef] p-6 md:grid-cols-3">
                {[
                  ["entityName", "Entity name"],
                  ["period", "Financial year / period"],
                  ["owner", "Internal owner"],
                ].map(([key, label]) => (
                  <label key={key} className="text-sm font-semibold text-[#344039]">
                    {label}
                    <input
                      value={organizerInputs[key]}
                      onChange={(event) =>
                        setOrganizerInputs((current) => ({
                          ...current,
                          [key]: event.target.value,
                        }))
                      }
                      className="mt-2 h-12 w-full border border-[#cfc3ad] bg-white px-4 text-[#17201d] outline-none ring-[#c7a15a] focus:ring-2"
                    />
                  </label>
                ))}
              </div>
            ) : null}

            {activeTool.id === "financial-calculators" ? (
              <div className="mb-8 border border-[#ddd3c0] bg-[#f7f5ef] p-6">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a6b2f]">Loan calculator</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-normal">{activeCalculatorLabel}</h3>
                  </div>
                  <p className="max-w-md text-sm leading-6 text-[#5b665f]">
                    Select a calculator, adjust the inputs, and use the result as a planning conversation starter.
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {calculatorOptions.map(([mode, label]) => (
                    <button
                      key={mode}
                      onClick={() => setCalculatorMode(mode)}
                      className={`border px-4 py-2 text-sm font-bold ${
                        calculatorMode === mode
                          ? "border-[#17201d] bg-[#17201d] text-white"
                          : "border-[#ddd3c0] bg-white text-[#344039]"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-4">
                  {calculatorFields[calculatorMode].map(([key, label]) => (
                    <label key={key} className="text-sm font-semibold text-[#344039]">
                      {label}
                      <input
                        type="number"
                        min="0"
                        value={loanInputs[key]}
                        onChange={(event) =>
                          setLoanInputs((current) => ({
                            ...current,
                            [key]: event.target.value,
                          }))
                        }
                        className="mt-2 h-12 w-full border border-[#cfc3ad] bg-white px-4 text-[#17201d] outline-none ring-[#c7a15a] focus:ring-2"
                      />
                    </label>
                  ))}
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {calculatorOutputs[calculatorMode].map(([label, value]) => (
                    <div key={label} className="border border-[#ddd3c0] bg-white p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a6b2f]">{label}</p>
                      <p className="mt-2 text-2xl font-semibold text-[#17201d]">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {isLinkPanel ? (
              <div>
                <div className="border-b border-[#ddd3c0] pb-5">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a6b2f]">
                    {isNewsTool ? "Open update sources" : "Open official resources"}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#5b665f]">{activeTool.note}</p>
                </div>
                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  {activeTool.links.map((group) => (
                    <article key={group.category} className="border border-[#ddd3c0] bg-[#f7f5ef] p-5">
                      <h3 className="text-lg font-semibold tracking-normal text-[#17201d]">{group.category}</h3>
                      <div className="mt-4 grid gap-2">
                        {group.entries.map(([label, href]) => (
                          <a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex min-h-12 items-center justify-between gap-4 border border-[#ddd3c0] bg-white px-4 py-3 text-sm font-semibold text-[#344039] transition hover:border-[#c7a15a] hover:bg-[#fffaf0]"
                          >
                            <span>{label}</span>
                            <span className="shrink-0 text-xs uppercase tracking-[0.18em] text-[#8a6b2f]">Open</span>
                          </a>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ) : isQuickInfoTool ? (
              <div>
                <div className="border-b border-[#ddd3c0] pb-5">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a6b2f]">Choose service route</p>
                  <p className="mt-2 text-sm leading-6 text-[#5b665f]">{activeTool.note}</p>
                </div>
                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  {activeTool.items.map((item) => (
                    <Link
                      key={item}
                      href={quickInfoRoutes[item] || "/contact"}
                      className="border border-[#ddd3c0] bg-[#f7f5ef] p-4 text-sm font-semibold text-[#344039] transition hover:border-[#c7a15a] hover:bg-[#fffaf0]"
                    >
                      <span className="block">{item}</span>
                      <span className="mt-2 block text-xs uppercase tracking-[0.18em] text-[#8a6b2f]">
                        {quickInfoRoutes[item] === "/contact" ? "Discuss" : "View services"}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <div className="flex flex-col justify-between gap-4 border-b border-[#ddd3c0] pb-5 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a6b2f]">Select what applies</p>
                    <p className="mt-2 text-sm leading-6 text-[#5b665f]">{activeTool.note}</p>
                  </div>
                  <button
                    onClick={clearActiveSelection}
                    className="h-11 border border-[#17201d] px-4 text-sm font-bold text-[#17201d] transition hover:bg-[#17201d] hover:text-white"
                  >
                    Clear selection
                  </button>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {activeTool.items.map((item) => {
                    const selected = activeChecks.includes(item);

                    return (
                      <button
                        key={item}
                        onClick={() => toggleItem(activeTool.id, item)}
                        className={`border px-4 py-3 text-left text-sm font-semibold leading-5 transition ${
                          selected
                            ? "border-[#c7a15a] bg-[#17201d] text-white"
                            : "border-[#ddd3c0] bg-[#f7f5ef] text-[#344039] hover:border-[#c7a15a] hover:bg-[#fffaf0]"
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            <form onSubmit={handleShareSubmit} className="mt-8 border border-[#ddd3c0] bg-[#f7f5ef] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a6b2f]">Next action</p>
              <p className="mt-2 text-sm leading-6 text-[#5b665f]">
                {isLinkPanel
                  ? "Open the relevant official portal in a new tab. Keep entity login credentials and OTP ownership ready before starting filings."
                  : isOrganizerTool
                  ? "Review the generated preparation summary below before sending documents to BRAM."
                  : isQuickInfoTool
                  ? "Open the relevant service route or contact BRAM for a scoped consultation."
                  : activeChecks.length
                  ? `You selected ${activeChecks.length} item${activeChecks.length === 1 ? "" : "s"}. Share this selection with BRAM to prepare the next working list.`
                  : `Choose items from ${activeTool.name} to build a practical preparation list.`}
              </p>
              {isOrganizerTool ? (
                <pre className="mt-4 whitespace-pre-wrap border border-[#ddd3c0] bg-white p-4 text-xs leading-5 text-[#344039]">
                  {organizerSummary}
                </pre>
              ) : null}
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {[
                  ["name", "Your name"],
                  ["email", "Email"],
                  ["phone", "Phone"],
                  ["company", "Company / entity"],
                ].map(([key, label]) => (
                  <label key={key} className="text-sm font-semibold text-[#344039]">
                    {label}
                    <input
                      type={key === "email" ? "email" : key === "phone" ? "tel" : "text"}
                      value={shareInputs[key]}
                      required={key === "name" || key === "email" || key === "phone"}
                      onChange={(event) =>
                        setShareInputs((current) => ({
                          ...current,
                          [key]: event.target.value,
                        }))
                      }
                      className="mt-2 h-12 w-full border border-[#cfc3ad] bg-white px-4 text-[#17201d] outline-none ring-[#c7a15a] focus:ring-2"
                    />
                  </label>
                ))}
              </div>
              <label className="mt-4 block text-sm font-semibold text-[#344039]">
                Message
                <textarea
                  value={shareInputs.message}
                  onChange={(event) =>
                    setShareInputs((current) => ({
                      ...current,
                      message: event.target.value,
                    }))
                  }
                  rows={4}
                  className="mt-2 w-full border border-[#cfc3ad] bg-white px-4 py-3 text-[#17201d] outline-none ring-[#c7a15a] focus:ring-2"
                />
              </label>
              <label className="mt-4 block text-sm font-semibold text-[#344039]">
                PDF preview
                <textarea
                  value={shareSummary}
                  readOnly
                  rows={8}
                  className="mt-2 w-full border border-[#cfc3ad] bg-white px-4 py-3 text-xs leading-5 text-[#17201d] outline-none"
                />
              </label>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  disabled={submitState.status === "loading"}
                  className="inline-flex min-h-12 items-center justify-center border border-[#17201d] bg-[#17201d] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#c7a15a] hover:text-[#17201d] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitState.status === "loading" ? "Sending PDF..." : "Send PDF to BRAM"}
                </button>
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center border border-[#17201d] px-5 py-3 text-sm font-bold text-[#17201d] transition hover:bg-[#17201d] hover:text-white"
                >
                  Contact page
                </Link>
              </div>
              {submitState.message ? (
                <p
                  className={`mt-4 border px-4 py-3 text-sm font-semibold ${
                    submitState.status === "success"
                      ? "border-[#7c9b67] bg-[#f0f7ec] text-[#2f5c2e]"
                      : submitState.status === "error"
                      ? "border-[#c58b83] bg-[#fff2f0] text-[#8c3028]"
                      : "border-[#ddd3c0] bg-white text-[#344039]"
                  }`}
                >
                  {submitState.message}
                </p>
              ) : null}
            </form>
          </div>
        </section>
      </section>
    </main>
  );
}
