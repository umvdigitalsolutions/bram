import Link from "next/link";
import Footer from "../component/Footer";
import Header from "../component/Header";

const services = [
  [
    "Audit and Assurance",
    "Statutory audit, internal audit, GST audit, tax audit, stock and fixed asset audit, vendor reconciliation and control review.",
    "Audit-ready records, stronger controls and partner-reviewed reporting.",
  ],
  [
    "Cost Audit and Records",
    "Cost audit, cost records, product group mapping, cost center design, overhead allocation and MIS readiness.",
    "Clearer product economics and cost records that stand up to review.",
  ],
  [
    "GST and Indirect Tax",
    "GST registration support, returns, reconciliations, workshops, notices, scrutiny, appeals and input credit risk review.",
    "Fewer reconciliation gaps and a filing calendar your team can plan around.",
  ],
  [
    "Income Tax and TDS",
    "Tax audit, return support, TDS compliances, challans, certificates, correction work, assessments and appeals.",
    "Fewer surprises at scrutiny and documentation ready when questions arrive.",
  ],
  [
    "MCA and Corporate Compliance",
    "Annual filings, event-based MCA forms, board documentation, company secretarial coordination and statutory registers.",
    "Board and statutory obligations completed before they become urgent.",
  ],
  [
    "Accounting and Bookkeeping",
    "Books, monthly closing, ledger scrutiny, financial statements, reconciliations, payroll inputs and management reports.",
    "Clean monthly books and management information you can make decisions from.",
  ],
  [
    "Transfer Pricing and Customs",
    "Transfer pricing support, customs compliance, import/export documentation support and connected assessment work.",
    "Defensible documentation across cross-border and customs-linked transactions.",
  ],
  [
    "Management Consultancy",
    "Finance process review, outsourced finance desk, reporting systems, working capital review and business advisory.",
    "Better financial visibility without building a full in-house finance office.",
  ],
];

export const metadata = {
  title: "Audit, GST, Tax, MCA and Cost Accounting Services",
  description:
    "Explore BRAM & Co. LLP services for statutory audit, cost audit, GST, income tax, MCA compliance, bookkeeping and finance advisory.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#17201d]">
      <Header />

      <section className="bg-[#17201d] px-5 py-24 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f1d79d]">Services</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-normal sm:text-6xl">
            Every compliance discipline your business needs. One firm to run them.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#d8d2c5]">
            Most companies patch together compliance from multiple vendors—a tax consultant here, a bookkeeper there, a company secretary somewhere else—and pay the price when nobody owns the full picture. BRAM & Co. LLP replaces that patchwork with one partner-led team across audit, tax, GST, cost accounting, corporate compliance and financial advisory.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-5 py-20 sm:px-8 md:grid-cols-2">
        {services.map(([title, detail, outcome]) => (
          <article key={title} className="border border-[#ddd3c0] bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-normal text-[#17201d]">{title}</h2>
            <p className="mt-4 leading-7 text-[#5b665f]">{detail}</p>
            <p className="mt-5 border-l-4 border-[#c7a15a] bg-[#f7f5ef] px-4 py-3 text-sm font-semibold leading-6 text-[#344039]">
              <span className="text-[#8a6b2f]">Outcome:</span> {outcome}
            </p>
            <Link href="/contact" className="mt-6 inline-flex border border-[#17201d] px-5 py-3 text-sm font-bold text-[#17201d] transition hover:bg-[#17201d] hover:text-white">
              Discuss service
            </Link>
          </article>
        ))}
      </section>
      <Footer />
    </main>
  );
}
