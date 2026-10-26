import Link from "next/link";

export default function NotFound() {
  return (
    <article className="mx-auto max-w-[40rem] px-4 py-24">
      <h1 className="text-4xl font-extrabold tracking-[-0.03em]">Diese Seite gibt es nicht.</h1>
      <p className="mt-4 leading-relaxed text-ink-soft">
        Die Adresse ist unbekannt. Die Werkstatt finden Sie auf der Startseite.
      </p>
      <Link href="/" className="mt-8 inline-flex h-12 items-center bg-enamel px-5 font-semibold text-porcelain">
        Zur Startseite
      </Link>
    </article>
  );
}
