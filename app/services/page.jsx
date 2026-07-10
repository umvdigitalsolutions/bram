import Link from "next/link";
import Footer from "../component/Footer";
import Header from "../component/Header";

const services = [
  ["Audit and Assurance", "Statutory audit, internal audit, GST audit, tax audit, stock and fixed asset audit, vendor reconciliation, and control review."],
  ["Cost Audit and Records", "Cost audit, cost records, product group mapping, cost center design, overhead allocation, and MIS readiness."],
  ["GST and Indirect Tax", "GST registration support, returns, reconciliations, workshops, notices, scrutiny, appeals, and input credit risk review."],
  ["Income Tax and TDS", "Tax audit, return support, TDS compliances, challans, certificates, correction work, assessments, and appeals."],
  ["MCA and Corporate Compliance", "Annual filings, event-based MCA forms, board documentation, company secretarial coordination, and statutory registers."],
  ["Accounting and Bookkeeping", "Books, monthly closing, ledger scrutiny, financial statements, reconciliations, payroll inputs, and management reports."],
  ["Transfer Pricing and Customs", "Transfer pricing support, customs compliance, import/export documentation support, and connected assessment work."],
  ["Management Consultancy", "Finance process review, outsourced finance desk, reporting systems, working capital review, and business advisory."],
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
            Compliance, audit, and advisory services with one accountable finance desk.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#d8d2c5]">
            Choose BRAM & Co. LLP for recurring compliance, specialist cost-accounting work, audits, assessments, or a broader outsourced finance operating rhythm.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-5 py-20 sm:px-8 md:grid-cols-2">
        {services.map(([title, detail]) => (
          <article key={title} className="border border-[#ddd3c0] bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-normal text-[#17201d]">{title}</h2>
            <p className="mt-4 leading-7 text-[#5b665f]">{detail}</p>
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
