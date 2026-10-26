import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Zweiradmeisterei, Inhaber Simon Schäfer, Köln.",
};

export default function ImpressumPage() {
  return (
    <article className="mx-auto max-w-[70ch] px-4 py-16 md:py-24">
      <h1 className="text-4xl font-extrabold tracking-[-0.03em]">Impressum</h1>
      <p className="mt-8 leading-relaxed">
        {site.legalName}
        <br />
        {site.street}
        <br />
        {site.postalCode} {site.city}
      </p>
      <p className="mt-6 leading-relaxed">
        Telefon:{" "}
        <a className="underline decoration-enamel/30 underline-offset-4" href={`tel:${site.phoneTel}`}>
          {site.phoneDisplay}
        </a>
        <br />
        E-Mail:{" "}
        <a className="underline decoration-enamel/30 underline-offset-4" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <br />
        USt-IdNr.: {site.vatId}
      </p>
      <p className="mt-8 leading-relaxed text-ink-soft">
        Diese Angaben entsprechen dem veröffentlichten Impressum. Ein vollständiger Rechtstext,
        darunter die Angaben zur Verantwortlichkeit für den Inhalt und zur Verbraucherstreitbeilegung,
        liegt noch nicht vor und muss ergänzt werden.
      </p>
    </article>
  );
}
