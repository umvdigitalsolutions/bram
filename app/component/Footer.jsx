import Link from "next/link";

const footerLinks = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Tools", "/tools"],
  ["Company data", "/company-data"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="border-t border-[#d8c08a]/25 bg-[#111815] px-5 py-10 text-sm text-[#d8d2c5] sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center bg-[#c7a15a] text-sm font-black text-[#17201d]">
              B
            </span>
            <div>
              <p className="text-lg font-semibold text-white">BRAM & Co. LLP</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d8d2c5]">
                Chartered & Cost Accountants
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-md leading-6 text-[#bdb5a8]">
            Partner-led audit, tax, GST, cost accounting, MCA compliance, bookkeeping, and advisory support from Noida with an extended office network.
          </p>
        </div>

        <nav>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c7a15a]">Quick links</p>
          <div className="mt-4 grid gap-2">
            {footerLinks.map(([label, href]) => (
              <Link key={href} href={href} className="w-fit text-[#d8d2c5] transition hover:text-[#f1d79d]">
                {label}
              </Link>
            ))}
          </div>
        </nav>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c7a15a]">Contact</p>
          <div className="mt-4 grid gap-2 text-[#d8d2c5]">
            <a href="mailto:umvlegalassociates@gmail.com" className="transition hover:text-[#f1d79d]">
              umvlegalassociates@gmail.com
            </a>
            <a href="tel:+919999289826" className="transition hover:text-[#f1d79d]">
              +91 9999289826
            </a>
            <p className="leading-6 text-[#bdb5a8]">B-33, First Floor, Sector 63, Noida 201301</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 pt-5 text-xs text-[#a9a195] sm:flex-row">
        <p>© 2026 BRAM & Co. LLP. All rights reserved.</p>
        <p>www.bramcollp.com</p>
      </div>
    </footer>
  );
}
