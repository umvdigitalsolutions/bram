import ContactForm from "./ContactForm";
import Footer from "../component/Footer";
import Header from "../component/Header";

const contacts = [
  ["Email", "infobramcollp@gmail.com", "mailto:infobramcollp@gmail.com"],
  ["Mobile", "+91 9718324334", "tel:+919718324334"],
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
    "Contact BRAM & Co. LLP in Noida for audit, GST, income tax, cost audit, MCA compliance, bookkeeping and advisory support.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#17201d]">
      <Header />

      <section className="bg-[#17201d] px-5 py-24 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f1d79d]">Contact</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-normal sm:text-6xl">
            Let&apos;s talk about what&apos;s actually due.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#d8d2c5]">
            Whether you&apos;re starting fresh, responding to a notice, or getting audit-ready—tell us where things stand and we&apos;ll tell you exactly what we need. No generic forms, no waiting on a call-center queue.
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
      <Footer />
    </main>
  );
}
