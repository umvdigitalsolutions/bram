"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Tools", "/tools"],
  ["Company data", "/company-data"],
  ["Contact", "/contact"],
];

export default function Header({ fixed = false }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href) {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  }

  return (
    <header
      className={`z-50 border-b border-[#d8c08a]/25 bg-[#17201d]/96 text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl ${
        fixed ? "fixed inset-x-0 top-0" : "relative"
      }`}
    >
      <div className="h-1 bg-[#c7a15a]" />
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="group flex min-w-0 items-center gap-3" aria-label="BRAM & Co. home">
          <span className="grid size-12 shrink-0 place-items-center border border-[#e2c27d]/60 bg-[#c7a15a] text-base font-black text-[#17201d] shadow-[0_10px_24px_rgba(199,161,90,0.24)] transition group-hover:bg-[#f1d79d]">
            B
          </span>
          <span className="min-w-0">
            <span className="block truncate text-lg font-semibold tracking-wide">BRAM & Co. LLP</span>
            <span className="mt-0.5 block truncate text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d8d2c5]">
              Chartered & Cost Accountants
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/7 p-1 text-sm text-[#ede7dc] lg:flex">
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`rounded-full px-4 py-2 font-semibold transition ${
                isActive(href)
                  ? "bg-[#c7a15a] text-[#17201d]"
                  : "hover:bg-white/10 hover:text-[#f1d79d]"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+919999289826"
            className="border border-[#c7a15a]/70 px-4 py-2 text-sm font-bold text-[#f8e8c2] transition hover:bg-[#c7a15a] hover:text-[#17201d]"
          >
            Call office
          </a>
          <Link
            href="/contact"
            className="bg-[#f1d79d] px-4 py-2 text-sm font-bold text-[#17201d] transition hover:bg-white"
          >
            Send enquiry
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="relative inline-flex size-11 items-center justify-center border border-white/18 bg-white/8 text-[#f1d79d] lg:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span
            className={`absolute h-0.5 w-5 bg-current transition ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 bg-current transition ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 bg-current transition ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#17201d] px-5 pb-5 sm:px-8 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2 pt-4 text-sm">
            {navItems.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`border px-4 py-3 font-semibold transition ${
                  isActive(href)
                    ? "border-[#c7a15a] bg-[#c7a15a] text-[#17201d]"
                    : "border-white/12 bg-white/7 text-[#ede7dc] hover:border-[#c7a15a]"
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href="tel:+919999289826"
              className="border border-[#c7a15a]/70 px-4 py-3 text-center font-bold text-[#f8e8c2]"
            >
              Call office
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
