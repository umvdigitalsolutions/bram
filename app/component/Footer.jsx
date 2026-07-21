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
            <a href="mailto:infobramcollp@gmail.com" className="transition hover:text-[#f1d79d]">
              infobramcollp@gmail.com
            </a>
            <a href="tel:+919718324334" className="transition hover:text-[#f1d79d]">
              +91 9718324334
            </a>
            <div className="mt-1 flex gap-3">
              <a
                href="https://www.instagram.com/bram_and_co?igsh=Y3g5anhhcXV4dnlq"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow BRAM & Co. LLP on Instagram"
                className="inline-flex size-10 items-center justify-center border border-white/20 text-[#d8d2c5] transition hover:border-[#c7a15a] hover:bg-[#c7a15a] hover:text-[#17201d]"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/bram-co-llp/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow BRAM & Co. LLP on LinkedIn"
                className="inline-flex size-10 items-center justify-center border border-white/20 text-[#d8d2c5] transition hover:border-[#c7a15a] hover:bg-[#c7a15a] hover:text-[#17201d]"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="currentColor">
                  <path d="M6.94 8.98H3.77V20h3.17V8.98ZM5.35 4a1.84 1.84 0 1 0 0 3.68 1.84 1.84 0 0 0 0-3.68Zm14.88 9.8c0-3.27-1.75-4.79-4.08-4.79a3.5 3.5 0 0 0-3.15 1.73V8.98H9.96V20h3.17v-5.45c0-1.44.27-2.84 2.06-2.84 1.76 0 1.78 1.65 1.78 2.93V20h3.26v-6.2Z" />
                </svg>
              </a>
              <a
                href="https://wa.me/919718324334"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with BRAM & Co. LLP on WhatsApp"
                className="inline-flex size-10 items-center justify-center border border-white/20 text-[#d8d2c5] transition hover:border-[#c7a15a] hover:bg-[#c7a15a] hover:text-[#17201d]"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="currentColor">
                  <path d="M12.03 3a8.93 8.93 0 0 0-7.66 13.54L3.2 20.99l4.56-1.09A8.92 8.92 0 1 0 12.03 3Zm0 1.62a7.3 7.3 0 1 1-3.72 13.58l-.3-.18-2.55.61.66-2.47-.2-.32a7.3 7.3 0 0 1 6.11-11.22Zm-3.18 3.7c-.16 0-.42.06-.64.3-.22.25-.84.82-.84 2 0 1.17.86 2.31.98 2.47.12.16 1.66 2.66 4.09 3.63 2.01.8 2.43.64 2.86.6.44-.04 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.46-.39-.4-.54-.4h-.47Z" />
                </svg>
              </a>
            </div>
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
