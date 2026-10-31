import Image from "next/image";
import { facts, photos } from "@/lib/site";

export function Meister() {
  return (
    <section id="werkstatt" className="scroll-mt-28 bg-enamel text-porcelain" aria-labelledby="werkstatt-title">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-20 md:px-6 md:py-28 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] lg:items-center lg:gap-16">
        <div>
          <h2
            id="werkstatt-title"
            className="max-w-[16ch] text-[clamp(2.2rem,4vw,3.75rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-balance"
          >
            Warum eine Meisterwerkstatt
          </h2>
          <p className="mt-6 max-w-[62ch] text-2xl font-semibold leading-snug tracking-[-0.03em] md:text-3xl">
            Every bike is beautiful.
          </p>
          <p className="mt-5 max-w-[66ch] text-lg leading-relaxed text-porcelain/82">
            Simon Schäfer führt die Zweiradmeisterei. Jedes Rad bekommt dieselbe Sorgfalt,
            unabhängig davon, wo Sie es gekauft haben, wie alt es ist oder was es gekostet hat.
          </p>
          <dl className="mt-10 border-t border-porcelain/25">
            {facts.map((fact) => (
              <div key={fact.term} className="grid gap-2 border-b border-porcelain/25 py-5 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-8">
                <dt className="font-bold">{fact.term}</dt>
                <dd className="max-w-[62ch] leading-relaxed text-porcelain/82">{fact.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
        <figure className="border border-porcelain/30">
          <div className="relative aspect-[4/3]">
            <Image
              src={photos.detail.src}
              alt={photos.detail.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="border-t border-porcelain/30 px-4 py-3 text-sm text-porcelain/75">
            Symbolfoto ·{" "}
            <a
              href={photos.detail.creditUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-porcelain/40 underline-offset-2"
            >
              {photos.detail.credit}
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
