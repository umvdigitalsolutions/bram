import Link from "next/link";

const partners = [
  {
    name: "Manish Malik",
    role: "Partner",
    credential: "Gold Medalist, AIR 1",
    office: "Head Office, Noida",
    focus:
      "Leads complex audit, cost accounting, GST, tax assessment, and strategic compliance assignments with a strong command of finance controls.",
    profile:
      "Manish anchors the firm profile and partner-led delivery model. His work spans CA, CMA and GST assignments, with particular strength in cost audit, internal audit, statutory audit, assessments and client advisory for compliance-heavy businesses.",
  },
  {
    name: "Ayush Khandelwal",
    role: "Partner",
    credential: "Gold Medalist",
    office: "Head Office, Noida",
    focus:
      "Works across audit execution, GST compliance, accounting systems, tax documentation, and client coordination for recurring finance operations.",
    profile:
      "Ayush supports the Noida leadership desk with a practical blend of audit, tax and recurring compliance oversight. He helps convert technical requirements into clear work plans, document lists and delivery timelines for business clients.",
  },
  {
    name: "Akshay Sharma",
    role: "Partner",
    credential: "Chartered Accountant",
    office: "Head Office, Noida and Mayur Vihar, Delhi",
    focus:
      "Supports corporate compliance, statutory audit, MCA matters, assessment preparation, and process-driven advisory for business clients.",
    profile:
      "Akshay connects the Noida and Delhi network for statutory, corporate and compliance assignments. His profile is useful for clients that need responsive documentation, MCA coordination, audit support and issue-wise assessment preparation.",
  },
  {
    name: "Rishab Jain",
    role: "Partner",
    credential: "Chartered Accountant",
    office: "Daryaganj, Delhi",
    focus:
      "Focuses on Delhi client relationships, tax audit, GST compliance, bookkeeping oversight, and documentation discipline for growing enterprises.",
    profile:
      "Rishab strengthens the Delhi branch presence and client-facing compliance desk. He works closely with entrepreneurs and operating teams that need structured books, timely filings, audit schedules and tax-ready records.",
  },
  {
    name: "Bhawana Jain",
    role: "Partner",
    credential: "Chartered Accountant",
    office: "Daryaganj, Delhi",
    focus:
      "Works with partner-led compliance delivery across audit, tax, MCA, accounting, and client support from the Delhi office network.",
    profile:
      "Bhawana supports the branch office network with a focus on disciplined compliance execution and client communication. Her role reinforces BRAM's ability to serve clients through both head-office expertise and local branch accessibility.",
  },
  {
    name: "Renu Sehgal",
    role: "Cost Accounting Lead / Associate Partner",
    credential: "Cost Accountant, MM & Co.",
    office: "Sector 63, Noida",
    focus:
      "Leads the cost accountants desk for cost audit, cost records, cost control, CMA reporting and sector-specific cost compliance.",
    profile:
      "Renu Sehgal strengthens the leadership bench with dedicated cost accounting capability through MM & Co. Her role brings focused CMA depth to manufacturing, infrastructure and other regulated sectors where cost records, cost audit and cost control discipline are critical.",
  },
];

const networkPartners = [
  {
    name: "Bharat",
    role: "Branch Partner / Network Lead",
    credential: "Sonipat branch office",
    office: "Kundli, Sonipat",
    profile:
      "Bharat leads the Sonipat branch touchpoint for clients around Kundli and nearby industrial areas. The office supports coordination, document collection, compliance communication and local relationship coverage for BRAM assignments.",
  },
  {
    name: "Ekta Parmar",
    role: "Associate Partner",
    credential: "Company Secretaries",
    office: "Mira Road East, Thane, Mumbai",
    profile:
      "Ekta leads the Mumbai associate company secretarial desk. The association supports corporate law, secretarial, board documentation and filing-linked coordination where clients need specialist company law execution.",
  },
];

const officeNetwork = [
  {
    type: "Head office",
    location: "Noida",
    lead: "Manish Malik, Ayush Khandelwal, Akshay Sharma and Renu Sehgal",
    address: "B-33, First Floor, Sector 63, Noida 201301",
    contact: "+91 9999289826, +91 9910118586, +91 8860930404",
    description:
      "The head office coordinates partner-led audit, tax, GST, cost accounting, MCA, bookkeeping and advisory delivery for the wider office network.",
  },
  {
    type: "Branch office",
    location: "Daryaganj, Delhi",
    lead: "Rishab Jain and Bhawana Jain",
    address: "4732/21, 3rd Floor, Dayanand Marg, Daryaganj, Delhi 110002",
    contact: "Delhi branch desk",
    description:
      "The Daryaganj branch supports Delhi-based client relationships, recurring compliance, documentation, accounting coordination and audit readiness.",
  },
  {
    type: "Branch office",
    location: "Kundli, Sonipat",
    lead: "Bharat",
    address: "15, 1st Floor, Khatri Market, Near Makhan Bhog, Kundli, Sonipat 121028",
    contact: "+91 8295201044",
    description:
      "The Sonipat branch provides local coverage for clients around Kundli, including document coordination, compliance follow-up and branch-level client support.",
  },
  {
    type: "Branch office",
    location: "Mayur Vihar Phase 3, Delhi",
    lead: "Akshay Sharma",
    address: "A 3/217, New Kondli Market, Mayur Vihar Phase 3, Delhi 110091",
    contact: "Delhi branch desk",
    description:
      "The Mayur Vihar branch extends Delhi accessibility for corporate compliance, audit coordination, accounting support and client meetings.",
  },
  {
    type: "Associate office",
    location: "Mira Road East, Thane, Mumbai",
    lead: "Ekta Parmar",
    address: "33, Rohini Complex, Sector 3, Mira Road East, Thane 401107",
    contact: "+91 9768165558",
    description:
      "The Mumbai associate office supports company secretarial and corporate law coordination through a specialist professional network.",
  },
  {
    type: "Associate office",
    location: "Sector 63, Noida",
    lead: "Renu Sehgal, MM & Co.",
    address: "B-33, FF-02, Sector 63, Noida 201301",
    contact: "+91 7290821910 | mmcocma@gmail.com",
    description:
      "The associated cost accountants office strengthens BRAM's CMA bench for cost audit, cost records, cost controls and sector-specific reporting.",
  },
];

const strengths = [
  "Chartered Accountancy, Cost Accountancy, GST, direct tax, and compliance under one coordinated desk.",
  "Experience across manufacturing, infrastructure, logistics, retail technology, hospitality, education, shipping, and non-profit clients.",
  "Noida head office with Delhi, Sonipat, Mumbai, and specialist associate support.",
  "Profile-backed work across cost audit, GST audit, tax audit, internal audit, statutory audit, MCA, TDS, transfer pricing, customs, and assessments.",
];

export const metadata = {
  title: "About BRAM & Co. LLP | Chartered Accountants and Cost Accountants",
  description:
    "About BRAM & Co. LLP, a Noida-headquartered CA and cost accounting firm serving audit, tax, GST, MCA, and advisory clients.",
};

export default function AboutPage() {
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
            <Link href="/about" className="font-semibold text-[#f1d79d] hover:text-[#c7a15a]">About</Link>
            <Link href="/services" className="hover:text-[#c7a15a]">Services</Link>
            <Link href="/tools" className="hover:text-[#c7a15a]">Tools</Link>
            <Link href="/company-data" className="hover:text-[#c7a15a]">Company data</Link>
            <Link href="/contact" className="hover:text-[#c7a15a]">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="bg-[#17201d] px-5 py-24 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f1d79d]">About the firm</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-normal sm:text-6xl">
              CA and cost-accounting leadership for modern Indian businesses.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#d8d2c5]">
              BRAM & Co. LLP was established on 20.12.2022 and has grown as a one-point professional service enterprise for chartered accountancy, cost accountancy, GST, audit, tax, and corporate compliance work.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["6", "Leadership profiles"],
              ["6", "Network offices"],
              ["17+", "Team members"],
              ["18", "Practice areas"],
            ].map(([value, label]) => (
              <div key={label} className="border border-white/14 bg-white/8 p-5">
                <p className="text-3xl font-semibold text-white">{value}</p>
                <p className="mt-2 text-sm text-[#d8d2c5]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8a6b2f]">Leadership</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal">Experienced hands, direct accountability.</h2>
          </div>
          <p className="text-base leading-7 text-[#5b665f]">
            The leadership bench combines head-office technical control, Delhi branch accessibility, and Renu Sehgal&apos;s cost-accounting desk, giving clients clear ownership across audit, tax, GST, MCA, accounting, cost records and advisory assignments.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {partners.map((partner) => (
            <article key={partner.name} className="border border-[#ddd3c0] bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a6b2f]">{partner.role}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-normal text-[#17201d]">{partner.name}</h3>
              <p className="mt-2 font-semibold text-[#516057]">{partner.credential}</p>
              <p className="mt-1 text-sm font-semibold text-[#8a6b2f]">{partner.office}</p>
              <p className="mt-4 leading-7 text-[#5b665f]">{partner.focus}</p>
              <p className="mt-4 border-t border-[#ddd3c0] pt-4 text-sm leading-6 text-[#5b665f]">
                {partner.profile}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8a6b2f]">Office network</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-normal text-[#17201d]">
                Noida-led, Delhi-connected, and supported by specialist associates.
              </h2>
            </div>
            <p className="text-base leading-7 text-[#5b665f]">
              BRAM & Co. LLP operates through a Noida head office, Delhi and Sonipat branch offices, and associate desks for company secretarial and cost accounting work. Clients get local access without losing partner-level technical oversight.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {officeNetwork.map((office) => (
              <article key={`${office.type}-${office.location}`} className="border border-[#ddd3c0] bg-[#f7f5ef] p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a6b2f]">{office.type}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-normal text-[#17201d]">{office.location}</h3>
                <p className="mt-3 font-semibold text-[#344039]">Lead: {office.lead}</p>
                <p className="mt-3 text-sm leading-6 text-[#5b665f]">{office.address}</p>
                <p className="mt-3 text-sm font-semibold text-[#17201d]">{office.contact}</p>
                <p className="mt-4 border-t border-[#ddd3c0] pt-4 text-sm leading-6 text-[#5b665f]">
                  {office.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8a6b2f]">Network partners</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal">Specialist support around the leadership bench.</h2>
          </div>
          <p className="text-base leading-7 text-[#5b665f]">
            The network partner profiles represent branch and associate professionals named in the firm profile. They extend reach, client coordination and specialist execution across locations, while cost accounting leadership is anchored by Renu Sehgal.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {networkPartners.map((partner) => (
            <article key={partner.name} className="border border-[#ddd3c0] bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a6b2f]">{partner.role}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-normal text-[#17201d]">{partner.name}</h3>
              <p className="mt-2 font-semibold text-[#516057]">{partner.credential}</p>
              <p className="mt-1 text-sm font-semibold text-[#8a6b2f]">{partner.office}</p>
              <p className="mt-4 leading-7 text-[#5b665f]">{partner.profile}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#e9e3d6] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8a6b2f]">Firm strengths</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-[#17201d]">A wider bench for recurring and specialist work.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {strengths.map((strength) => (
              <article key={strength} className="border border-[#d4c9b5] bg-[#f7f5ef] p-7">
                <p className="leading-7 text-[#344039]">{strength}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
