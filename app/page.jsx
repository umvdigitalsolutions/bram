"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const serviceLines = [
  {
    title: "Audit and Assurance",
    detail:
      "Statutory audit, internal audit, stock and fixed asset audit, GST audit, tax audit, vendor reconciliation, and cost audit support.",
  },
  {
    title: "Tax and GST",
    detail:
      "Income tax, GST compliances, TDS, scrutiny, assessments, appeals, return planning, and practical compliance calendars.",
  },
  {
    title: "Cost Accounting",
    detail:
      "Cost records, cost audit, MIS reporting, margin diagnostics, and controls for manufacturing, infrastructure, logistics, and services.",
  },
  {
    title: "Corporate Compliance",
    detail:
      "MCA filings, company secretarial coordination, transfer pricing support, custom compliances, and documentation readiness.",
  },
  {
    title: "Accounting Desk",
    detail:
      "Bookkeeping, periodic closing, reconciliations, financial statements, payroll inputs, and management reporting for growing teams.",
  },
  {
    title: "Business Advisory",
    detail:
      "Decision support, process review, outsourced finance office, controls, diligence support, and founder-friendly financial guidance.",
  },
];

const tools = [
  {
    name: "Tax Organizer Center",
    copy: "Collect significant dates, tax information, forms, certificates, statements, and return preparation inputs in one place.",
    cta: "Open organizer",
  },
  {
    name: "Financial Calculators",
    copy: "Use loan, payoff, blended rate, refinance, rent-vs-buy, and finance eligibility calculators as planning starting points.",
    cta: "Browse calculators",
  },
  {
    name: "Tax & Accounting News",
    copy: "Track due dates, tax alerts, accounting changes, GST circulars, MCA updates, and audit reporting developments.",
    cta: "Review alerts",
  },
  {
    name: "Helpful Websites",
    copy: "Access commonly used tax, government, finance, and regulatory websites clients need during compliance work.",
    cta: "Open links",
  },
  {
    name: "Quick Info Guide",
    copy: "Browse high-demand service shortcuts for audit, tax, planning, representation, consulting, CFO, GST, MCA, and cost work.",
    cta: "View guide",
  },
];

const companies = [
  {
    name: "Ryonan Electric India Private Limited",
    sector: "Auto components and manufacturing",
    services: ["Cost records", "GST audit", "Internal audit", "Statutory audit", "TDS", "Transfer pricing", "MCA", "GST compliance", "Customs", "Assessments"],
    status: "Multi-service relationship",
  },
  {
    name: "NX Logistics India Private Limited",
    sector: "Logistics",
    services: ["Management consultancy", "GST compliance", "Customs", "Transfer pricing", "Assessments"],
    status: "Compliance and advisory",
  },
  {
    name: "Vision Group Retail Technologies Private Limited",
    sector: "Retail technology",
    services: ["GST audit", "Tax audit", "Internal audit", "Statutory audit", "MCA", "Management consultancy", "GST compliance", "Customs", "Assessments"],
    status: "End-to-end finance support",
  },
  {
    name: "SPG Shipping Private Limited",
    sector: "Shipping and logistics",
    services: ["GST audit", "Tax audit", "Internal audit", "Statutory audit", "TDS", "MCA", "GST compliance"],
    status: "Audit and compliance",
  },
  {
    name: "Galfar Engineering & Contracting India Pvt Ltd",
    sector: "Engineering and infrastructure",
    services: ["Cost audit", "Internal audit", "Assessments"],
    status: "Audit and assessment support",
  },
  {
    name: "Bansal Wire Industries Ltd.",
    sector: "Manufacturing",
    services: ["Cost audit"],
    status: "Cost audit",
  },
  {
    name: "Delhi Metro Rail Corporation",
    sector: "Metro rail infrastructure",
    services: ["Stock and fixed asset audit"],
    status: "Asset audit",
  },
  {
    name: "Patna Metro Rail Corporation",
    sector: "Metro rail infrastructure",
    services: ["Stock and fixed asset audit"],
    status: "Asset audit",
  },
  {
    name: "CSC E-Governance Services India Limited",
    sector: "Digital governance",
    services: ["GST workshop", "Statutory audit"],
    status: "Training and assurance",
  },
  {
    name: "Taylor and Francis Group",
    sector: "Publishing and knowledge services",
    services: ["Management consultancy"],
    status: "Advisory",
  },
  {
    name: "Nitori Co. Ltd",
    sector: "Retail",
    services: ["GST compliance"],
    status: "GST support",
  },
  {
    name: "Nichirin Imperial Autoparts India Pvt. Ltd.",
    sector: "Auto components",
    services: ["Cost records", "GST audit", "GST workshop", "TDS", "GST compliance", "Assessments"],
    status: "Compliance support",
  },
  {
    name: "Kashipur Sitarganj Highways Pvt. Ltd.",
    sector: "Infrastructure",
    services: ["Cost records", "Internal audit", "Assessments"],
    status: "Audit and assessment",
  },
  {
    name: "Salasar Highways Pvt Ltd",
    sector: "Infrastructure",
    services: ["Cost records", "Internal audit", "Assessments"],
    status: "Audit and assessment",
  },
];

const moreCompanies = [
  ["Arkadin Confer India Pvt. Ltd.", "Technology and communications", ["Cost audit"], "Cost audit"],
  ["Polyplex", "Manufacturing", ["Cost audit"], "Cost audit"],
  ["Puri Construction", "Real estate and construction", ["Cost audit"], "Cost audit"],
  ["Azure Power", "Renewable energy", ["Cost audit"], "Cost audit"],
  ["NTT Cloud Voice and Communications India Pvt. Ltd.", "Cloud communications", ["Cost audit"], "Cost audit"],
  ["Best Crop Science Pvt Ltd", "Agri-science", ["Cost audit"], "Cost audit"],
  ["Aakaar Iron Creation Pvt. Ltd.", "Manufacturing", ["Cost audit", "Cost records"], "Cost accounting"],
  ["Rajasthan Flexible Packaging Pvt Ltd", "Packaging", ["Cost audit", "Cost records"], "Cost accounting"],
  ["Moser Baer", "Manufacturing", ["Cost records"], "Cost records"],
  ["CHD Developers", "Real estate", ["Cost records"], "Cost records"],
  ["Schenck Rotec India Limited", "Industrial machinery", ["Cost records"], "Cost records"],
  ["Arata Universal Co.", "Trading and services", ["GST audit", "Tax audit", "Accounting and bookkeeping", "GST compliance"], "Tax and GST support"],
  ["Competitive Exam Preparations", "Education", ["GST audit", "Tax audit", "TDS", "GST compliance"], "Education-sector compliance"],
  ["Agro Tech Foods Ltd", "Food and FMCG", ["GST audit"], "GST audit"],
  ["United Security Solution Private Limited", "Security services", ["GST audit"], "GST audit"],
  ["Institute of Cost Accountants of India Noida Chapter", "Professional institute", ["Financial audit"], "Financial audit"],
  ["Clariant Shines", "Business services", ["Tax audit"], "Tax audit"],
  ["C.P. Industries", "Manufacturing", ["Tax audit"], "Tax audit"],
  ["Green India Overseas", "Exports and trading", ["Tax audit", "TDS", "Accounting and bookkeeping", "GST compliance"], "Recurring compliance"],
  ["Future Packaging", "Packaging", ["Tax audit", "TDS", "Accounting and bookkeeping", "GST compliance"], "Recurring compliance"],
  ["SMG ICB Logistics Private Limited", "Logistics", ["Tax audit", "Statutory audit", "MCA", "GST compliance"], "Audit and compliance"],
  ["Nubestone", "Business services", ["Tax audit", "TDS", "Accounting and bookkeeping", "GST compliance"], "Tax and GST support"],
  ["MM & Co.", "Cost accountants", ["Tax audit"], "Professional firm support"],
  ["Ray Corporate Advisory LLP", "Corporate advisory", ["Tax audit"], "Tax audit"],
  ["NHAI Chitradurga PIU Unit", "Road infrastructure", ["Internal audit"], "Internal audit"],
  ["NHAI Hospet PIU Unit", "Road infrastructure", ["Internal audit"], "Internal audit"],
  ["NHAI Bengaluru Regional Office", "Road infrastructure", ["Internal audit"], "Internal audit"],
  ["Windesign Productions Pvt. Ltd.", "Media and production", ["Internal audit", "MCA", "Accounting and bookkeeping", "GST compliance"], "Compliance and audit"],
  ["Bal Kanya Foundation", "Non-profit", ["Internal audit", "MCA", "Accounting and bookkeeping"], "NGO compliance"],
  ["Avann Buildsys Private Limited", "Construction", ["Stock and fixed asset audit"], "Asset audit"],
  ["Corporation Bank", "Banking", ["Statutory audit"], "Statutory audit"],
  ["Firesky Consultants India Private Limited", "Consulting", ["Statutory audit", "MCA", "Accounting and bookkeeping", "GST compliance"], "Accounting and compliance"],
  ["Eternity Entertainment and Hospitality Pvt Ltd", "Hospitality", ["Statutory audit", "MCA"], "Statutory and MCA support"],
  ["High Q Tech Solutions Private Limited", "Technology", ["Statutory audit", "MCA"], "Statutory and MCA support"],
  ["Cipla Limited", "Pharmaceuticals", ["Vendor reconciliation"], "Vendor reconciliation"],
  ["SMEC India Private Limited", "Engineering consulting", ["Vendor reconciliation", "MCA"], "Reconciliation and MCA support"],
  ["IRCON International Limited", "Infrastructure", ["TDS"], "TDS support"],
  ["Insigma Inc", "Technology", ["TDS"], "TDS support"],
  ["DS Homes Private Limited", "Real estate", ["MCA"], "MCA compliance"],
  ["S3 Securities Services Private Limited", "Security services", ["MCA"], "MCA compliance"],
  ["Hindustan Nirman Limited", "Construction", ["MCA"], "MCA compliance"],
  ["Monetary Finbiz Private Limited", "Finance", ["MCA"], "MCA compliance"],
  ["Gulshan Rai Jain Marketing", "Trading", ["Tax audit", "Accounting and bookkeeping"], "Books and tax"],
  ["Pigmento India", "Manufacturing and trading", ["Accounting and bookkeeping", "GST compliance"], "Accounting and GST"],
  ["Colour and Coating", "Manufacturing and trading", ["Tax audit", "Accounting and bookkeeping", "GST compliance"], "Books, tax, and GST"],
  ["RDB Professionals", "Professional services", ["Tax audit", "Accounting and bookkeeping", "GST compliance"], "Recurring compliance"],
  ["Sahaj Infotech Private Limited", "Technology", ["Management consultancy"], "Management consultancy"],
  ["Healthier India Diagnostics", "Healthcare diagnostics", ["Management consultancy"], "Management consultancy"],
  ["Sikkim Urja Limited", "Power and energy", ["Management consultancy"], "Management consultancy"],
  ["Mercurius Advisory Services Private Limited", "Advisory", ["Management consultancy"], "Management consultancy"],
  ["MPKI Solutions India Private Limited", "Technology services", ["Management consultancy"], "Management consultancy"],
  ["KMI International", "International trade", ["GST compliance"], "GST compliance"],
  ["Nichia Corporation", "Manufacturing", ["GST compliance"], "GST compliance"],
  ["Insigma Technologies Private Limited", "Technology", ["GST compliance"], "GST compliance"],
  ["CBS Technologies India Pvt Ltd", "Technology", ["GST audit", "Assessments"], "GST and assessment support"],
].map(([name, sector, services, status]) => ({
  name,
  sector,
  services,
  status,
}));

const companyRecords = [...companies, ...moreCompanies];

const offices = [
  "Head office: B-33, First Floor, Sector 63, Noida 201301",
  "Delhi: Daryaganj and Mayur Vihar Phase 3",
  "Sonipat: Khatri Market, Kundli",
  "Associates: Mumbai company secretarial office and Noida cost accountants desk",
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(companyRecords[0]);
  const [masterData, setMasterData] = useState(null);
  const [masterResults, setMasterResults] = useState([]);
  const [masterLoading, setMasterLoading] = useState(false);
  const [masterError, setMasterError] = useState("");

  const matches = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return companyRecords.slice(0, 8);

    return companyRecords.filter((company) => {
      const haystack = [
        company.name,
        company.sector,
        company.status,
        ...company.services,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(term);
    });
  }, [query]);
  const activeCompany = query.trim() && matches.length ? matches[0] : selected;
  const visibleResults = masterResults.length
    ? masterResults.map((record) => ({
        cin: record.cin,
        name: record.companyName,
        sector: record.cin,
        isMasterRecord: true,
      }))
    : matches;

  useEffect(() => {
    const term = query.trim();

    if (term.length < 3) {
      return;
    }

    const controller = new AbortController();
    const timer = setTimeout(async () => {
      setMasterLoading(true);
      setMasterError("");

      try {
        const response = await fetch(
          `/api/company-master/search?q=${encodeURIComponent(term)}`,
          { signal: controller.signal },
        );
        const body = await response.json();

        if (!response.ok) {
          throw new Error(body?.error || "Unable to fetch company master data.");
        }

        setMasterResults(body.records || []);
        setMasterData(body.master || null);
      } catch (error) {
        if (error.name !== "AbortError") {
          setMasterResults([]);
          setMasterData(null);
          setMasterError(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setMasterLoading(false);
        }
      }
    }, 450);

    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [query]);

  async function loadMasterByCin(cin) {
    setQuery(cin);
    setMasterLoading(true);
    setMasterError("");

    try {
      const response = await fetch(
        `/api/company-master/search?q=${encodeURIComponent(cin)}`,
      );
      const body = await response.json();

      if (!response.ok) {
        throw new Error(body?.error || "Unable to fetch company master data.");
      }

      setMasterResults(body.records || []);
      setMasterData(body.master || null);
    } catch (error) {
      setMasterError(error.message);
    } finally {
      setMasterLoading(false);
    }
  }

  function handleCompanySearchChange(value) {
    setQuery(value);

    if (value.trim().length < 3) {
      setMasterData(null);
      setMasterResults([]);
      setMasterError("");
      setMasterLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#17201d]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-[#17201d]/90 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="BRAM & Co. home">
            <span className="grid size-11 place-items-center rounded bg-[#c7a15a] text-sm font-black text-[#17201d]">
              B
            </span>
            <span>
              <span className="block text-lg font-semibold tracking-wide">BRAM & Co. LLP</span>
              <span className="block text-xs uppercase tracking-[0.22em] text-[#d8d2c5]">
                Chartered & Cost Accountants
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-[#ede7dc] md:flex">
            <Link href="/" className="font-semibold text-[#f1d79d] hover:text-[#c7a15a]">Home</Link>
            <Link href="/about" className="hover:text-[#c7a15a]">About</Link>
            <Link href="/services" className="hover:text-[#c7a15a]">Services</Link>
            <Link href="/tools" className="hover:text-[#c7a15a]">Tools</Link>
            <Link href="/company-data" className="hover:text-[#c7a15a]">Company data</Link>
            <Link href="/contact" className="hover:text-[#c7a15a]">Contact</Link>
          </nav>
          <a
            href="tel:+919999289826"
            className="hidden rounded border border-[#c7a15a] px-4 py-2 text-sm font-semibold text-[#f8e8c2] transition hover:bg-[#c7a15a] hover:text-[#17201d] sm:inline-flex"
          >
            Call office
          </a>
        </div>
      </header>

      <section id="top" className="relative min-h-[760px] overflow-hidden bg-[#17201d] pt-20 text-white">
        <Image
          src="/bram-hero.png"
          alt="Premium finance office desk with accounting documents"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#17201d_0%,rgba(23,32,29,0.96)_34%,rgba(23,32,29,0.52)_68%,rgba(23,32,29,0.18)_100%)]" />
        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex border-l-4 border-[#c7a15a] pl-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#f1d79d]">
              CA, CMA, GST and corporate advisory
            </p>
            <h1 className="text-5xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
              Precision finance for companies that cannot afford uncertainty.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#ede7dc]">
              BRAM & Co. LLP is a Noida-headquartered firm of Chartered Accountants and Cost Accountants, led by a CA and CMA-focused bench including Renu Sehgal for cost-accounting assignments, advising businesses on audit, tax, GST, cost records, MCA compliance, bookkeeping, transfer pricing, customs, and assessments.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="inline-flex h-12 items-center justify-center bg-[#c7a15a] px-6 text-sm font-bold text-[#17201d] transition hover:bg-[#e0bd73]">
                Book a consultation
              </a>
              <Link href="/company-data" className="inline-flex h-12 items-center justify-center border border-white/40 px-6 text-sm font-bold text-white transition hover:border-[#c7a15a] hover:text-[#f1d79d]">
                Search company data
              </Link>
            </div>
          </div>
          <aside className="mt-12 border border-white/18 bg-white/10 p-6 backdrop-blur-md lg:ml-auto lg:mt-0 lg:w-[420px]">
            <p className="text-sm uppercase tracking-[0.25em] text-[#f1d79d]">Firm profile</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                ["2022", "Established"],
                ["17+", "Team members"],
                ["18", "Practice areas"],
                ["4", "Office network"],
              ].map(([value, label]) => (
                <div key={label} className="border border-white/14 bg-[#17201d]/45 p-4">
                  <p className="text-3xl font-semibold text-white">{value}</p>
                  <p className="mt-1 text-sm text-[#d8d2c5]">{label}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-[#ede7dc]">
              Led by Manish Malik, Ayush Khandelwal, Akshay Sharma, Rishab Jain, Bhawana Jain, and Renu Sehgal, the firm combines profile-level rigor, cost-accounting depth, and hands-on client service.
            </p>
          </aside>
        </div>
      </section>

      <section className="border-b border-[#ded6c6] bg-white py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-3 px-5 text-sm text-[#516057] sm:px-8">
          <strong className="text-[#17201d]">Practice experience includes:</strong>
          <span>Cost audit</span>
          <span>GST and tax audit</span>
          <span>Internal audit</span>
          <span>Statutory audit</span>
          <span>MCA compliance</span>
          <span>Assessments and appeals</span>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8a6b2f]">What we handle</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-[#17201d] sm:text-5xl">
              A practical finance office for compliance-heavy businesses.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5b665f]">
              Inspired by mature CPA firm service models, the site gives clients a clear route to tax, accounting, consulting, and self-service tools while keeping the India-focused CA and CMA capabilities of BRAM & Co. LLP visible.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {serviceLines.map((service) => (
              <article key={service.title} className="border border-[#ddd3c0] bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#17201d]">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#5b665f]">{service.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e9e3d6] py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1fr]">
          <div className="bg-[#17201d] p-8 text-white sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f1d79d]">Why BRAM</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal">
              Built for modern challenges, sustained capacity, and one-point accountability.
            </h2>
            <p className="mt-6 leading-8 text-[#ede7dc]">
              The firm profile describes BRAM & Co. LLP as a growing one-point solution enterprise, strengthened by manpower, professional collaboration, technology adoption, and broad client exposure across private companies, infrastructure, retail, logistics, education, hospitality, and non-profit organizations.
            </p>
          </div>
          <div className="grid gap-4">
            {offices.map((office) => (
              <div key={office} className="border border-[#d4c9b5] bg-[#f7f5ef] p-5 text-[#344039]">
                {office}
              </div>
            ))}
            <div className="border border-[#d4c9b5] bg-white p-5">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8a6b2f]">Registrations</p>
              <p className="mt-3 text-[#344039]">PAN: ABAFB5010G | GST: 09ABAFB5010G1ZZ</p>
            </div>
          </div>
        </div>
      </section>

      <section id="tools" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8a6b2f]">Client service tools</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-[#17201d] sm:text-5xl">
              Useful tools clients expect before they call.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[#5b665f]">
            These resources follow the MM & Company-style client utility center: organizers, calculators, alerts, links, and quick service guidance.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <article key={tool.name} className="border border-[#ddd3c0] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#17201d]">{tool.name}</h3>
              <p className="mt-3 min-h-24 text-sm leading-6 text-[#5b665f]">{tool.copy}</p>
              <Link href="/tools" className="mt-5 inline-flex w-full items-center justify-center border border-[#17201d] px-4 py-3 text-sm font-bold text-[#17201d] transition hover:bg-[#17201d] hover:text-white">
                {tool.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section id="companies" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8a6b2f]">Company data search</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-normal text-[#17201d] sm:text-5xl">
                Search a company and see the available engagement data.
              </h2>
              <p className="mt-6 text-base leading-7 text-[#5b665f]">
                Type a company name or CIN to fetch MCA master data from Sandbox. If the API is unavailable, the BRAM profile dataset remains available as a local fallback.
              </p>
              <label htmlFor="company-search" className="mt-8 block text-sm font-bold text-[#17201d]">
                Search company data
              </label>
              <input
                id="company-search"
                value={query}
                onChange={(event) => handleCompanySearchChange(event.target.value)}
                placeholder="Try QUICKO, Ryonan, Cipla, or a CIN..."
                className="mt-3 h-14 w-full border border-[#cfc3ad] bg-[#f7f5ef] px-4 text-base text-[#17201d] outline-none ring-[#c7a15a] placeholder:text-[#7a847d] focus:ring-2"
              />
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em]">
                <span className="border border-[#ddd3c0] bg-[#f7f5ef] px-3 py-2 text-[#5b665f]">
                  {masterLoading ? "Fetching MCA data" : "Sandbox MCA API"}
                </span>
                {masterError ? (
                  <span className="border border-[#d7a1a1] bg-[#fff4f4] px-3 py-2 text-[#8a2f2f]">
                    API fallback active
                  </span>
                ) : null}
              </div>
              <div className="mt-5 grid gap-2">
                {visibleResults.length ? (
                  visibleResults.map((company) => (
                    <button
                      key={company.cin || company.name}
                      onClick={() => {
                        if (company.isMasterRecord) {
                          loadMasterByCin(company.cin);
                          return;
                        }

                        setSelected(company);
                        setQuery(company.name);
                      }}
                      className={`border p-4 text-left transition hover:border-[#c7a15a] hover:bg-[#fffaf0] ${
                        masterData?.cin === company.cin || activeCompany.name === company.name
                          ? "border-[#c7a15a] bg-[#fffaf0]"
                          : "border-[#ddd3c0] bg-[#f7f5ef]"
                      }`}
                    >
                      <span className="block font-semibold text-[#17201d]">{company.name}</span>
                      <span className="mt-1 block text-sm text-[#5b665f]">{company.sector}</span>
                    </button>
                  ))
                ) : (
                  <p className="border border-[#ddd3c0] bg-[#f7f5ef] p-4 text-sm text-[#5b665f]">
                    No company found. Try a longer company name or a valid CIN/LLPIN.
                  </p>
                )}
              </div>
              {masterError ? (
                <p className="mt-4 border border-[#d7a1a1] bg-[#fff4f4] p-4 text-sm leading-6 text-[#8a2f2f]">
                  Sandbox API did not return master data: {masterError}
                </p>
              ) : null}
            </div>
            <article className="border border-[#ddd3c0] bg-[#17201d] p-7 text-white sm:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f1d79d]">
                {masterData ? "MCA master data" : "Selected record"}
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-normal">
                {masterData?.companyName || activeCompany.name}
              </h3>
              <p className="mt-3 text-[#d8d2c5]">
                {masterData?.cin || activeCompany.sector}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="border border-white/14 bg-white/8 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#f1d79d]">Status</p>
                  <p className="mt-3 text-lg font-semibold">{masterData?.companyStatus || activeCompany.status}</p>
                </div>
                <div className="border border-white/14 bg-white/8 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#f1d79d]">
                    {masterData ? "Registration date" : "Service count"}
                  </p>
                  <p className="mt-3 text-lg font-semibold">
                    {masterData?.registrationDate || `${activeCompany.services.length} mapped services`}
                  </p>
                </div>
              </div>
              <div className="mt-5 border border-white/14 bg-white/8 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[#f1d79d]">
                  {masterData ? "ROC / class" : "Matched records"}
                </p>
                <p className="mt-3 text-lg font-semibold">
                  {masterData
                    ? [masterData.rocCode, masterData.className].filter(Boolean).join(" / ")
                    : `${matches.length} result${matches.length === 1 ? "" : "s"} in the BRAM profile dataset`}
                </p>
              </div>
              <div className="mt-8">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f1d79d]">
                  {masterData ? "Company details" : "Available data"}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {(masterData
                    ? [
                        masterData.category,
                        masterData.subCategory,
                        masterData.listingStatus,
                        masterData.stateCode,
                        masterData.origin,
                        masterData.industrialClassification,
                        masterData.nicCode ? `NIC ${masterData.nicCode}` : "",
                        masterData.authorizedCapital ? `Authorized capital: ${masterData.authorizedCapital}` : "",
                        masterData.paidupCapital ? `Paid-up capital: ${masterData.paidupCapital}` : "",
                      ].filter(Boolean)
                    : activeCompany.services
                  ).map((item) => (
                    <span key={item} className="border border-white/18 bg-white/10 px-3 py-2 text-sm text-[#ede7dc]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              {masterData?.registeredOfficeAddress ? (
                <div className="mt-8 border-t border-white/16 pt-6 text-sm leading-6 text-[#d8d2c5]">
                  <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#f1d79d]">
                    Registered office
                  </span>
                  <span className="mt-3 block">{masterData.registeredOfficeAddress}</span>
                </div>
              ) : null}
              <div className="mt-8 border-t border-white/16 pt-6 text-sm leading-6 text-[#d8d2c5]">
                {masterData
                  ? "Showing live MCA master data returned by Sandbox. BRAM engagement history remains separate from MCA public records."
                  : "Showing profile-seeded engagement categories only. Enter a company name or CIN to request live MCA master data."}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#17201d] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f1d79d]">Contact</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal sm:text-5xl">
              Speak to a partner-led team.
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-[#d8d2c5]">
              For audit, tax, GST, cost records, corporate compliance, or finance operations, share your requirement and the right desk can respond with a clear next step.
            </p>
          </div>
          <div className="grid gap-4 text-[#ede7dc]">
            <a href="mailto:bramandcollp@gmail.com" className="border border-white/14 bg-white/8 p-5 transition hover:border-[#c7a15a]">
              Email: bramandcollp@gmail.com
            </a>
            <a href="tel:+919999289826" className="border border-white/14 bg-white/8 p-5 transition hover:border-[#c7a15a]">
              Mobile: +91 9999289826
            </a>
            <a href="tel:+919910118586" className="border border-white/14 bg-white/8 p-5 transition hover:border-[#c7a15a]">
              Mobile: +91 9910118586
            </a>
            <a href="tel:+918860930404" className="border border-white/14 bg-white/8 p-5 transition hover:border-[#c7a15a]">
              Mobile: +91 8860930404
            </a>
            <p className="border border-white/14 bg-white/8 p-5">
              B-33, First Floor, Sector 63, Noida 201301
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#d8c08a]/30 bg-[#111815] px-5 py-8 text-sm text-[#c7c1b6] sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 sm:flex-row">
          <p>BRAM & Co. LLP, Chartered Accountants and Cost Accountants</p>
          <p>Professional website concept built from the firm profile and public CPA service patterns.</p>
        </div>
      </footer>
    </main>
  );
}
