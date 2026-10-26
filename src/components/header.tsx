"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-enamel text-porcelain">
      <a
        href="#inhalt"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-porcelain focus:px-3 focus:py-2 focus:text-ink"
      >
        Zum Inhalt
      </a>
      <div className="mx-auto max-w-[1440px] px-4 md:px-6">
        <div className="flex h-14 items-center gap-3 lg:h-16">
          <Link href="/" className="text-[15px] font-extrabold tracking-[-0.03em] md:text-lg">
            {site.name}
          </Link>
          <nav className="ml-6 hidden items-center gap-6 lg:flex" aria-label="Abschnitte">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-porcelain/90 hover:text-porcelain"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <p className="ml-auto hidden items-center gap-4 text-sm font-semibold lg:flex">
            <span>Luxemburger Str.</span>
            <a href={`tel:${site.phoneTel}`} className="tabular-nums tracking-[-0.02em]">
              {site.phoneDisplay}
            </a>
          </p>
          <button
            type="button"
            className="ml-auto grid size-11 place-items-center lg:hidden"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Menü schließen" : "Menü öffnen"}</span>
            {open ? <X aria-hidden /> : <Menu aria-hidden />}
          </button>
          <span
            className="grid size-11 shrink-0 place-items-center bg-porcelain text-sm font-extrabold tracking-[-0.03em] text-enamel"
            aria-label={`Hausnummer ${site.houseNumber}`}
          >
            {site.houseNumber}
          </span>
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-porcelain/20 py-2 text-sm font-semibold lg:hidden">
          <span>Luxemburger Str.</span>
          <a href={`tel:${site.phoneTel}`} className="tabular-nums tracking-[-0.02em]">
            {site.phoneDisplay}
          </a>
        </div>
      </div>
      {open ? (
        <nav
          id="site-menu"
          className="border-t border-porcelain/20 px-4 py-4 lg:hidden"
          aria-label="Abschnitte"
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-3 text-lg font-semibold"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`tel:${site.phoneTel}`} className="block py-3 text-lg font-semibold tabular-nums">
                {site.phoneDisplay}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
