import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-enamel-deep text-porcelain">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-4 py-10 md:flex-row md:items-end md:justify-between md:px-6">
        <div>
          <p className="text-lg font-extrabold tracking-[-0.03em]">{site.name}</p>
          <p className="mt-2 text-sm leading-relaxed text-porcelain/75">
            {site.legalName}
            <br />
            {site.street}, {site.postalCode} {site.city}
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm font-semibold md:items-end">
          <a href={`tel:${site.phoneTel}`} className="tabular-nums">
            {site.phoneDisplay}
          </a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <nav aria-label="Rechtliches" className="mt-3 flex gap-5">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
