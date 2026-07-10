import Link from "next/link";
import ContactForm from "./ContactForm";

const contacts = [
  ["Email", "bramandcollp@gmail.com", "mailto:bramandcollp@gmail.com"],
  ["Mobile", "+91 9999289826", "tel:+919999289826"],
  ["Mobile", "+91 9910118586", "tel:+919910118586"],
  ["Mobile", "+91 8860930404", "tel:+918860930404"],
];

const offices = [
  "Head office: B-33, First Floor, Sector 63, Noida 201301",
  "Delhi: 4732/21, 3rd Floor, Dayanand Marg, Daryaganj, Delhi 110002",
  "Delhi: A 3/217, New Kondli Market, Mayur Vihar Phase 3, Delhi 110091",
  "Sonipat: 15, 1st Floor, Khatri Market, Near Makhan Bhog, Kundli, Sonipat 121028",
];

export const metadata = {
  title: "Contact BRAM & Co. LLP",
  description:
    "Contact BRAM & Co. LLP for audit, tax, GST, MCA, cost audit, accounting, and advisory services.",
};

export default function ContactPage() {
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
            <Link href="/services" className="hover:text-[#c7a15a]">Services</Link>
            <Link href="/tools" className="hover:text-[#c7a15a]">Tools</Link>
            <Link href="/company-data" className="hover:text-[#c7a15a]">Company data</Link>
            <Link href="/contact" className="font-semibold text-[#f1d79d] hover:text-[#c7a15a]">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="bg-[#17201d] px-5 py-24 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f1d79d]">Contact</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-normal sm:text-6xl">
            Talk to BRAM & Co. LLP about your next compliance or finance requirement.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#d8d2c5]">
            Share your audit, cost accounting, tax, GST, MCA, accounting, assessment, or advisory requirement and the relevant desk can coordinate the next step.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border border-[#ddd3c0] bg-white p-7 shadow-sm">
          <h2 className="text-3xl font-semibold tracking-normal">Direct contact</h2>
          <div className="mt-6 grid gap-3">
            {contacts.map(([label, value, href]) => (
              <a key={`${label}-${value}`} href={href} className="border border-[#ddd3c0] bg-[#f7f5ef] p-4 transition hover:border-[#c7a15a]">
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#8a6b2f]">{label}</span>
                <span className="mt-2 block font-semibold text-[#17201d]">{value}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="border border-[#ddd3c0] bg-white p-7 shadow-sm">
          <h2 className="text-3xl font-semibold tracking-normal">Office network</h2>
          <div className="mt-6 grid gap-3">
            {offices.map((office) => (
              <p key={office} className="border border-[#ddd3c0] bg-[#f7f5ef] p-4 leading-7 text-[#344039]">
                {office}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <ContactForm />
      </section>
    </main>
  );
}
