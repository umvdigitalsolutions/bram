"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Blogs", "/blog"],
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
      className={`z-50 border-b border-white/60 bg-white/78 text-[#17201d] shadow-[0_18px_45px_rgba(23,32,29,0.10)] backdrop-blur-2xl ${
        fixed ? "fixed inset-x-0 top-0" : "relative"
      }`}
    >
      <div className="h-1 bg-gradient-to-r from-[#17201d] via-[#c7a15a] to-[#17201d]" />
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-5 py-2 sm:px-8">
        <Link href="/" className="group flex min-w-0 items-center" aria-label="BRAM & Co. home">
          <span className="relative block h-20 w-52 shrink-0 overflow-visible transition duration-300 group-hover:brightness-110 sm:h-[88px] sm:w-60">
            <Image
              src="/bramco.png"
              alt="BRAM & Co. LLP logo"
              fill
              priority
              sizes="240px"
              className="object-contain"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-[#17201d]/10 bg-white/62 p-1 text-sm text-[#34413b] shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_10px_28px_rgba(23,32,29,0.08)] lg:flex">
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`rounded-full px-4 py-2 font-semibold transition ${
                isActive(href)
                  ? "bg-[#17201d] text-white shadow-[0_8px_18px_rgba(23,32,29,0.18)]"
                  : "hover:bg-[#f3ead7] hover:text-[#17201d]"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+919718324334"
            className="border border-[#c7a15a]/80 bg-white/45 px-4 py-2 text-sm font-bold text-[#17201d] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] transition hover:bg-[#f1d79d]"
          >
            Call office
          </a>
          <Link
            href="/contact"
            className="bg-[#17201d] px-4 py-2 text-sm font-bold text-white shadow-[0_12px_24px_rgba(23,32,29,0.18)] transition hover:bg-[#c7a15a] hover:text-[#17201d]"
          >
            Send enquiry
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="relative inline-flex size-11 items-center justify-center border border-[#17201d]/12 bg-white/65 text-[#17201d] shadow-[0_8px_22px_rgba(23,32,29,0.10)] lg:hidden"
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
        <div className="border-t border-[#17201d]/10 bg-white/88 px-5 pb-5 shadow-[0_18px_38px_rgba(23,32,29,0.10)] backdrop-blur-2xl sm:px-8 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2 pt-4 text-sm">
            {navItems.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`border px-4 py-3 font-semibold transition ${
                  isActive(href)
                    ? "border-[#17201d] bg-[#17201d] text-white"
                    : "border-[#17201d]/10 bg-white/65 text-[#34413b] hover:border-[#c7a15a] hover:text-[#17201d]"
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href="tel:+919718324334"
              className="border border-[#c7a15a]/80 bg-[#f1d79d]/50 px-4 py-3 text-center font-bold text-[#17201d]"
            >
              Call office
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
