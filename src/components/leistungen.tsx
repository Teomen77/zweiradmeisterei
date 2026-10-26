import { services, serviceMailto } from "@/lib/site";

export function Leistungen() {
  return (
    <section id="leistungen" className="scroll-mt-28 px-4 py-20 md:px-6 md:py-28" aria-labelledby="leistungen-title">
      <div className="mx-auto max-w-[1440px]">
        <h2
          id="leistungen-title"
          className="max-w-[14ch] text-[clamp(2.2rem,4vw,3.75rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-balance"
        >
          Leistungen
        </h2>
        <p className="mt-5 max-w-[68ch] text-lg leading-relaxed text-ink-soft">
          In der Meisterwerkstatt liegen die kleinen Handgriffe neben der aufwendigen
          Instandsetzung. Die Liste ist ein Auszug, die Vielfalt ist größer.
        </p>
        <ul className="mt-12 border-t border-enamel/20">
          {services.map((service) => (
            <li key={service.name} className="border-b border-enamel/20">
              <a
                href={serviceMailto(service.name)}
                className="grid gap-1 py-5 transition-colors hover:bg-porcelain sm:grid-cols-[16rem_minmax(0,1fr)_auto] sm:items-baseline sm:gap-8 md:py-6"
              >
                <span className="text-xl font-bold tracking-[-0.03em]">{service.name}</span>
                <span className="max-w-[62ch] text-ink-soft">{service.detail}</span>
                <span className="text-sm font-semibold text-enamel sm:text-right">Anfragen</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-[68ch] leading-relaxed text-ink-soft">
          Auch abseits des Fahrrads: Bereifung am Kinderwagen, Arbeiten an Rollstuhl und
          Anhänger, die Feststellbremse am Rollator.
        </p>
      </div>
    </section>
  );
}
