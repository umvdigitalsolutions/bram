import Image from "next/image";
import Link from "next/link";
import Footer from "./component/Footer";
import Header from "./component/Header";

const serviceLines = [
  {
    title: "Audit & Assurance",
    detail:
      "Statutory, internal, stock, GST, tax and cost audits, backed by partner sign-off, not junior review.",
  },
  {
    title: "Tax and GST",
    detail:
      "End-to-end income tax and GST compliance, from return filing to scrutiny and appeals—with a compliance calendar you can actually plan around.",
  },
  {
    title: "Cost Accounting",
    detail:
      "Cost records, cost audit and margin diagnostics for manufacturing, infrastructure, logistics and services businesses where cost control is the difference between margin and loss.",
  },
  {
    title: "Corporate Compliance",
    detail:
      "MCA filings, secretarial coordination, transfer pricing and customs documentation, handled before they become board-meeting surprises.",
  },
  {
    title: "Accounting Desk",
    detail:
      "Bookkeeping, reconciliations, financial statements and management reporting built for teams that need clean books on a monthly rhythm, not a year-end scramble.",
  },
  {
    title: "Business Advisory",
    detail:
      "Founder-level financial guidance, process review, diligence support and an outsourced finance office for companies not yet ready to hire a full-time CFO.",
  },
];

const homeResourceLinks = [
  {
    title: "Book a consultation",
    detail: "Sit down with a partner and get a clear view of priorities, deadlines and ownership.",
    href: "/contact",
    cta: "Book a consultation",
  },
  {
    title: "Send an enquiry",
    detail: "Share your current requirement and supporting entity details with the relevant BRAM desk.",
    href: "/contact",
    cta: "Send an enquiry",
  },
  {
    title: "Search company data",
    detail: "Search public MCA company records by company name, CIN or LLPIN.",
    href: "/company-data",
    cta: "Search company data",
  },
];

const clientPathways = [
  {
    title: "Starting a new compliance relationship",
    detail:
      "Recurring GST, TDS, MCA, accounting and audit under one desk.",
  },
  {
    title: "Respond to a notice or assessment",
    detail:
      "Income tax, GST, TDS, customs or MCA matters that need fast, accurate documentation.",
  },
  {
    title: "Prepare for audit or cost records",
    detail:
      "Statutory, internal, tax, cost, stock and fixed asset audit readiness.",
  },
  {
    title: "Strengthen finance operations",
    detail:
      "Cleaner books, reconciliations, MIS and control review for scaling teams.",
  },
];

const intakeFocus = [
  "Entity profile and registrations",
  "Open notices, due dates and filings",
  "Audit, tax, GST, MCA or cost-record priority",
  "Documents required before partner review",
];

const deliveryModel = [
  ["1", "Scope", "Understand entity structure, registrations, due dates, open notices, audit status and document availability."],
  ["2", "Prepare", "Create a document list, responsibility matrix and practical timeline for filings, audits, reconciliations or responses."],
  ["3", "Execute", "Run partner-reviewed work across tax, GST, MCA, accounting, audit, cost records or advisory requirements."],
  ["4", "Close", "Share status, filing proof, review points, working papers and next compliance actions for the client team."],
];

const sectorHighlights = [
  "Auto components and manufacturing",
  "Infrastructure and metro projects",
  "Logistics, shipping and transport",
  "Retail, technology and cloud communications",
  "Education, healthcare and diagnostics",
  "Hospitality, media and non-profit organizations",
];

const trustHighlights = [
  ["10+ years", "Experience"],
  ["17+", "Professionals on team"],
  ["500+", "Corporate clients served"],
  ["7", "Office locations across India"],
];

const offices = [
  "Head office: B-33, First Floor, Sector 63, Noida 201301",
  "Delhi: Daryaganj and Mayur Vihar Phase 3",
  "Sonipat: Khatri Market, Kundli",
  "Assam: Guwahati branch desk at Panjabari Main Road",
  "Associates: Mumbai company secretarial office and Noida cost accountants desk",
];

export const metadata = {
  title: {
    absolute: "BRAM & Co. LLP | CA, Cost Accountants, GST & Audit Firm in Noida",
  },
  description:
    "BRAM & Co. LLP is a Noida CA and cost accountants firm for statutory audit, cost audit, GST, income tax, MCA compliance, bookkeeping and finance advisory.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#17201d]">
      <Header fixed />

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
        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex border-l-4 border-[#c7a15a] pl-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#f1d79d]">
              Chartered Accountants · Cost Accountants · Corporate Advisory
            </p>
            <h1 className="text-5xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
              Financial compliance that keeps your business ahead of deadlines—not behind them.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#ede7dc]">
              BRAM & Co. LLP is a Noida-headquartered, multidisciplinary firm of Chartered Accountants and Cost Accountants serving 500+ companies across India in Audit, Taxation, GST, Accounting, Company Law and Corporate Advisory. We work as an extension of your finance team—not a vendor you call once a year.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex h-12 items-center justify-center bg-[#c7a15a] px-6 text-sm font-bold text-[#17201d] transition hover:bg-[#e0bd73]">
                Book a consultation
              </Link>
              <a href="tel:+919718324334" className="inline-flex h-12 items-center justify-center border border-white/40 px-6 text-sm font-bold text-white transition hover:border-[#c7a15a] hover:text-[#f1d79d]">
                Talk to a partner
              </a>
            </div>
          </div>

          <aside className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto" aria-label="BRAM client service commitments">
            <div className="absolute -inset-4 border border-[#c7a15a]/20" />
            <div className="relative border border-white/20 bg-[#17201d]/88 p-6 shadow-2xl backdrop-blur-md sm:p-8">
              <div className="border-b border-white/12 pb-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f1d79d]">Your BRAM desk</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">One team owns the calendar.</h2>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {[
                  ["01", "Partner-reviewed work", "Every filing, audit and submission has accountable oversight."],
                  ["02", "Visible timelines", "Know what is due, what is filed and what comes next."],
                  ["03", "One coordinated desk", "Audit, tax, GST, MCA, cost accounting and advisory stay connected."],
                ].map(([number, title, detail]) => (
                  <div key={title} className="grid grid-cols-[auto_1fr] gap-4 border border-white/12 bg-white/6 p-4">
                    <span className="text-xs font-bold tracking-[0.18em] text-[#f1d79d]">{number}</span>
                    <div>
                      <h3 className="text-sm font-semibold text-white">{title}</h3>
                      <p className="mt-1 text-xs leading-5 text-[#d8d2c5]">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between gap-4 bg-[#c7a15a] px-4 py-3 text-[#17201d]">
                <p className="text-xs font-bold uppercase tracking-[0.18em]">500+ corporate clients served</p>
                <span aria-hidden="true" className="text-xl">→</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-[#ded6c6] bg-white py-8">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:px-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustHighlights.map(([value, label]) => (
            <div key={label} className="border-l-4 border-[#c7a15a] bg-[#f7f5ef] px-5 py-4">
              <p className="text-2xl font-semibold text-[#17201d]">{value}</p>
              <p className="mt-1 text-sm font-semibold text-[#516057]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8a6b2f]">Why BRAM &amp; Co. LLP</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-[#17201d] sm:text-5xl">
              One compliance partner. Every discipline your finance team needs.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5b665f]">
              Growing companies don&apos;t fail compliance because they lack ambition—they fail because audit, tax, GST, MCA filings and cost records live in five different silos with no one owning the calendar. BRAM & Co. LLP consolidates all of it under one partner-reviewed desk, so nothing falls through the cracks between departments, vendors or deadlines.
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
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8a6b2f]">How we start</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-normal text-[#17201d] sm:text-5xl">
                Every engagement starts with one honest conversation.
              </h2>
              <p className="mt-6 text-base leading-7 text-[#5b665f]">
                Tell us where you are, and we&apos;ll tell you exactly what we need from you—no generic onboarding forms, no guesswork.
              </p>
            </div>
            <div className="border border-[#cfc3ad] bg-[#17201d] p-6 text-white shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f1d79d]">Initial review focuses on</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {intakeFocus.map((item) => (
                  <div key={item} className="border border-white/14 bg-white/8 p-4 text-sm font-semibold leading-6 text-[#ede7dc]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {clientPathways.map((pathway, index) => (
              <article key={pathway.title} className="border border-[#d4c9b5] bg-[#f7f5ef] p-6">
                <p className="mb-5 grid size-9 place-items-center bg-[#17201d] text-sm font-bold text-[#f1d79d]">
                  {index + 1}
                </p>
                <h3 className="text-xl font-semibold tracking-normal text-[#17201d]">{pathway.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#5b665f]">{pathway.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8a6b2f]">How we work</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-[#17201d] sm:text-5xl">
              A delivery rhythm that keeps you informed, not chasing.
            </h2>
            <p className="mt-6 text-base leading-7 text-[#5b665f]">
              You should never have to ask &quot;where does this stand?&quot; Our four-stage process keeps ownership, timelines and status visible from day one.
            </p>
            <div className="mt-8 grid gap-4">
              {offices.map((office) => (
                <div key={office} className="border border-[#ddd3c0] bg-[#f7f5ef] p-4 text-sm font-semibold text-[#344039]">
                  {office}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {deliveryModel.map(([step, title, detail]) => (
              <article key={title} className="border border-[#ddd3c0] bg-white p-6 shadow-sm">
                <p className="grid size-10 place-items-center bg-[#17201d] text-sm font-bold text-[#f1d79d]">{step}</p>
                <h3 className="mt-5 text-2xl font-semibold tracking-normal text-[#17201d]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#5b665f]">{detail}</p>
              </article>
            ))}
            <article className="border border-[#ddd3c0] bg-[#17201d] p-6 text-white shadow-sm md:col-span-2">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f1d79d]">BRAM Legal &amp; Registration Details</p>
              <p className="mt-3 text-sm leading-6 text-[#ede7dc]">LLPIN: ABZ-5410 | PAN: ABAFB5010G | GST: 09ABAFB5010G1ZZ</p>
            </article>
          </div>
        </div>
      </section>

      <section id="resources" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="mb-16 grid gap-10 border-b border-[#ddd3c0] pb-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8a6b2f]">Who we work with</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-[#17201d] sm:text-5xl">
              Industry context, built in from the first call.
            </h2>
            <p className="mt-6 text-base leading-7 text-[#5b665f]">
              We&apos;ve worked inside manufacturing plants, metro and infrastructure projects, logistics networks, retail and cloud-tech companies, hospitals, hospitality groups and non-profits. That means the first conversation with us isn&apos;t spent explaining your business—it&apos;s spent solving your problem.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {sectorHighlights.map((sector) => (
              <div key={sector} className="border border-[#ddd3c0] bg-white p-5 text-sm font-semibold leading-6 text-[#344039] shadow-sm">
                {sector}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8a6b2f]">Next steps</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-[#17201d] sm:text-5xl">
              Ready to put your compliance calendar on autopilot?
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[#5b665f]">
            Book a consultation with a partner—not a call-center intake—and get a clear view of what&apos;s due, what&apos;s at risk, and what BRAM will own from day one.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {homeResourceLinks.map((resource) => (
            <article key={resource.title} className="border border-[#ddd3c0] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#17201d]">{resource.title}</h3>
              <p className="mt-3 min-h-20 text-sm leading-6 text-[#5b665f]">{resource.detail}</p>
              <Link href={resource.href} className="mt-5 inline-flex w-full items-center justify-center border border-[#17201d] px-4 py-3 text-sm font-bold text-[#17201d] transition hover:bg-[#17201d] hover:text-white">
                {resource.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
