import Image from "next/image";
import Link from "next/link";
import Footer from "./component/Footer";
import Header from "./component/Header";

const serviceLines = [
  {
    title: "Audit and Assurance",
    detail:
      "Statutory audit, Internal audit, Stock and fixed asset audit, GST audit, Tax audit, Vendor reconciliation, and Cost audit support.",
  },
  {
    title: "Tax and GST",
    detail:
      "Income tax, GST compliances, TDS, Scrutiny, Assessments, Appeals, Return planning, and Practical compliance calendars.",
  },
  {
    title: "Cost Accounting",
    detail:
      "Cost records, Cost audit, MIS reporting, Margin diagnostics, and Controls for manufacturing, Infrastructure, Logistics, and Services.",
  },
  {
    title: "Corporate Compliance",
    detail:
      "MCA filings, Company secretarial coordination, Transfer pricing support, Customs compliances, and Documentation readiness.",
  },
  {
    title: "Accounting Desk",
    detail:
      "Bookkeeping, Periodic closing, Reconciliations, Financial statements, Payroll inputs, and Management reporting for growing teams.",
  },
  {
    title: "Business Advisory",
    detail:
      "Decision support, Process review, Outsourced finance office, Controls, Diligence support, and Founder-friendly financial guidance.",
  },
];

const homeResourceLinks = [
  {
    title: "Client tools",
    detail: "Open calculators, document organizers, compliance links and guided service selection.",
    href: "/tools",
    cta: "Use client tools",
  },
  {
    title: "Company master data",
    detail: "Search public MCA company records by name or CIN on the dedicated company data page.",
    href: "/company-data",
    cta: "Search company data",
  },
  {
    title: "Send an enquiry",
    detail: "Share client and entity details through the contact form with PDF email submission.",
    href: "/contact",
    cta: "Contact BRAM",
  },
];

const clientPathways = [
  {
    title: "Start a new compliance relationship",
    detail:
      "For companies that need recurring GST, TDS, MCA, accounting, audit schedules and monthly closing discipline under one professional desk.",
  },
  {
    title: "Respond to a notice or assessment",
    detail:
      "For income tax, GST, TDS, customs or MCA matters where documents, reconciliations and written submissions need to be pulled together quickly.",
  },
  {
    title: "Prepare for audit or cost records",
    detail:
      "For statutory audit, internal audit, tax audit, cost audit, cost records, stock audit, fixed asset audit and management reporting readiness.",
  },
  {
    title: "Strengthen finance operations",
    detail:
      "For owners and finance teams that need cleaner books, reconciliations, MIS, working capital visibility, payroll inputs and control review.",
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

const leadershipHighlights = [
  "Manish Malik, Ayush Khandelwal and Akshay Sharma coordinate the Noida leadership desk.",
  "Rishab Jain and Bhawana Jain strengthen Delhi audit, tax and compliance delivery.",
  "Renu Sehgal anchors cost accounting, cost audit, cost records and CMA assignments.",
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
        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex border-l-4 border-[#c7a15a] pl-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#f1d79d]">
              CA, CMA, GST and corporate advisory
            </p>
            <h1 className="text-5xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
              Precision finance for companies that cannot afford uncertainty.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#ede7dc]">
              A Noida-headquartered multidisciplinary firm of CA and CMA delivering integrated solutions in Audit, Taxation, GST, Accounting, Company Law, ROC Compliance and Corporate Advisory to businesses across India—ensuring businesses remain compliant before deadlines become challenges.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex h-12 items-center justify-center bg-[#c7a15a] px-6 text-sm font-bold text-[#17201d] transition hover:bg-[#e0bd73]">
                Book a consultation
              </Link>
              <Link href="/company-data" className="inline-flex h-12 items-center justify-center border border-white/40 px-6 text-sm font-bold text-white transition hover:border-[#c7a15a] hover:text-[#f1d79d]">
                Search company data
              </Link>
            </div>
          </div>
          <aside className="mt-12 border border-white/18 bg-white/10 p-6 backdrop-blur-md lg:ml-auto lg:mt-0 lg:w-[420px]">
            <p className="text-sm uppercase tracking-[0.25em] text-[#f1d79d]">Firm at a glance</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                ["2016", "Practice roots"],
                ["17+", "Experienced team members"],
                ["500+", "Corporate clients served"],
                ["7", "Office network"],
              ].map(([value, label]) => (
                <div key={label} className="border border-white/14 bg-[#17201d]/45 p-4">
                  <p className="text-3xl font-semibold text-white">{value}</p>
                  <p className="mt-1 text-sm text-[#d8d2c5]">{label}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-[#ede7dc]">
              A multidisciplinary leadership team comprising CA Manish Malik, CA Ayush Khandelwal, CA Akshay Sharma, CA Rishab Jain, CA Bhawana Jain and CMA Renu Sehgal, offering integrated CA, CS and CMA professional services under one roof.
            </p>
          </aside>
        </div>
      </section>

      <section className="border-b border-[#ded6c6] bg-white py-6">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 text-sm text-[#516057] sm:px-8 md:grid-cols-3">
          {leadershipHighlights.map((item) => (
            <div key={item} className="border-l-4 border-[#c7a15a] bg-[#f7f5ef] px-4 py-3 font-semibold text-[#344039]">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8a6b2f]">What we handle</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-[#17201d] sm:text-5xl">
              Why Businesses Choose BRAM & Co. LLP
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5b665f]">
              BRAM & Co. LLP provides comprehensive audit, taxation, corporate compliance, accounting and advisory services, helping businesses stay compliant, manage risk and build long-term success.
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
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8a6b2f]">Whatever Your Business Challenge, BRAM &amp; Co. LLP Has the Solution</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-normal text-[#17201d] sm:text-5xl">
                Choose Your Route. We&apos;ll Handle the Rest.
              </h2>
              <p className="mt-6 text-base leading-7 text-[#5b665f]">
                <span className="font-semibold text-[#344039]">Find the right route for your business needs.</span>{" "}
                Select the route that best matches your requirements so our first discussion can focus on your business objectives, required documentation, key timelines and the most effective way forward.
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
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8a6b2f]">How work moves</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-[#17201d] sm:text-5xl">
              A simple delivery rhythm from first call to closure.
            </h2>
            <p className="mt-6 text-base leading-7 text-[#5b665f]">
              The process keeps client effort visible: what is needed, who owns it, what has been filed or reviewed, and what remains for the next compliance cycle.
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
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8a6b2f]">Profile experience</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-[#17201d] sm:text-5xl">
              Sector exposure that makes the first conversation sharper.
            </h2>
            <p className="mt-6 text-base leading-7 text-[#5b665f]">
              The firm profile reflects work across manufacturing, infrastructure, logistics, retail technology, education, healthcare, hospitality, media and non-profit organizations. That breadth helps BRAM ask better questions at the start.
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
              Choose the next action.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[#5b665f]">
            Use the client tools, company master data search or enquiry form according to the support required.
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
