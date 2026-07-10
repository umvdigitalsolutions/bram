import Link from "next/link";

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
  title: "Services | BRAM & Co. LLP",
  description:
    "Audit, cost accounting, GST, tax, MCA, bookkeeping, transfer pricing, customs, and advisory services from BRAM & Co. LLP.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#17201d]">
      <header className="border-b border-[#d8c08a]/30 bg-[#17201d] text-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="BRAM & Co. home">
            <span className="grid size-11 place-items-center rounded bg-[#c7a15a] text-sm font-black text-[#17201d]">B</span>
            <span>
              <span className="block text-lg font-semibold tracking-wide">BRAM & Co. LLP</span>
              <span className="block text-xs uppercase tracking-[0.22em] text-[#d8d2c5]">Chartered & Cost Accountants</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-[#ede7dc] md:flex">
            <Link href="/" className="hover:text-[#c7a15a]">Home</Link>
            <Link href="/about" className="hover:text-[#c7a15a]">About</Link>
            <Link href="/services" className="font-semibold text-[#f1d79d] hover:text-[#c7a15a]">Services</Link>
            <Link href="/tools" className="hover:text-[#c7a15a]">Tools</Link>
            <Link href="/company-data" className="hover:text-[#c7a15a]">Company data</Link>
            <Link href="/contact" className="hover:text-[#c7a15a]">Contact</Link>
          </nav>
        </div>
      </header>

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
    </main>
  );
}
