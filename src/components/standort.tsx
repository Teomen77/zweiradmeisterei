import { mapEmbedSrc, mapLink, routeLink, site } from "@/lib/site";

export function Standort() {
  return (
    <section id="standort" className="scroll-mt-28 px-4 pb-20 md:px-6 md:pb-28" aria-labelledby="standort-title">
      <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[minmax(16rem,0.7fr)_minmax(0,1.3fr)] lg:items-stretch">
        <div className="flex flex-col justify-start lg:pt-2">
          <h2
            id="standort-title"
            className="text-[clamp(2.2rem,4vw,3.75rem)] font-extrabold leading-[1.05] tracking-[-0.03em]"
          >
            Standort
          </h2>
          <p className="mt-5 max-w-[36ch] text-lg leading-relaxed">
            {site.street}
            <br />
            {site.postalCode} {site.city}
            <br />
            {site.district}
          </p>
          <p className="mt-4 font-semibold tabular-nums">{site.hoursLabel}</p>
          <div className="mt-6 flex flex-col items-start gap-3">
            <a
              href={routeLink}
              className="inline-flex h-12 items-center bg-enamel px-5 font-semibold text-porcelain"
            >
              Route öffnen
            </a>
            <a href={mapLink} className="text-sm font-semibold underline decoration-enamel/30 underline-offset-4">
              In OpenStreetMap ansehen
            </a>
          </div>
        </div>
        <iframe
          title="Karte: Zweiradmeisterei, Luxemburger Straße 265, Köln"
          src={mapEmbedSrc}
          className="h-[22rem] w-full border border-enamel/20 md:h-[32rem]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
