import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Hinweis zum Datenschutz der Zweiradmeisterei. Der vollständige Text fehlt noch.",
};

export default function DatenschutzPage() {
  return (
    <article className="mx-auto max-w-[70ch] px-4 py-16 md:py-24">
      <h1 className="text-4xl font-extrabold tracking-[-0.03em]">Datenschutz</h1>
      <p className="mt-8 leading-relaxed text-ink-soft">
        Ein vollständiger Datenschutztext liegt noch nicht vor und muss vor einem rechtlich
        abgeschlossenen Auftritt ergänzt werden.
      </p>
      <h2 className="mt-10 text-2xl font-extrabold tracking-[-0.03em]">Was diese Seite tut</h2>
      <p className="mt-4 leading-relaxed">
        Diese Website setzt keine Analysewerkzeuge und keine Werbecookies. „Reparatur anfragen“
        öffnet das E-Mail-Programm auf Ihrem Gerät. Die Nachricht wird nicht in einem Formular
        auf dieser Website gespeichert.
      </p>
      <p className="mt-4 leading-relaxed">
        Die Karte im Abschnitt Standort lädt OpenStreetMap. Dabei kann Ihr Browser den
        Kartendienst direkt kontaktieren.
      </p>
      <h2 className="mt-10 text-2xl font-extrabold tracking-[-0.03em]">Verantwortlich</h2>
      <p className="mt-4 leading-relaxed">
        {site.owner}
        <br />
        {site.street}
        <br />
        {site.postalCode} {site.city}
        <br />
        <a className="underline decoration-enamel/30 underline-offset-4" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </p>
    </article>
  );
}
