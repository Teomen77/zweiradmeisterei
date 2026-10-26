import { hours, site } from "@/lib/site";
import { RepairForm } from "@/components/repair-form";

export function HoursContact() {
  return (
    <section id="zeiten" className="scroll-mt-28 px-4 py-20 md:px-6 md:py-28" aria-labelledby="zeiten-title">
      <div className="mx-auto grid max-w-[1440px] gap-14 border border-enamel/20 bg-porcelain px-5 py-8 md:px-10 md:py-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2
            id="zeiten-title"
            className="text-[clamp(2.2rem,4vw,3.75rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-balance"
          >
            Zeiten und Kontakt
          </h2>
          <p className="mt-5 max-w-[48ch] leading-relaxed text-ink-soft">
            Anruf unter {site.phoneDisplay}. Schreiben Sie an {site.email}.
          </p>
          <table className="mt-8 w-full border-t border-enamel/20 text-left">
            <caption className="sr-only">Veröffentlichte Öffnungszeiten</caption>
            <tbody>
              {hours.map((row) => (
                <tr key={row.day} className="border-b border-enamel/20">
                  <th scope="row" className="py-3 pr-4 font-semibold">
                    {row.day}
                  </th>
                  <td className="py-3 text-right font-medium tabular-nums">
                    {row.time ?? "nicht veröffentlicht"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 max-w-[48ch] text-sm leading-relaxed text-ink-soft">
            Samstag und Sonntag stehen auf der bisherigen Website nicht. Bitte rufen Sie an,
            bevor Sie am Wochenende vorbeikommen.
          </p>
          <address className="mt-8 not-italic leading-relaxed">
            <span className="block font-bold">{site.name}</span>
            {site.street}
            <br />
            {site.postalCode} {site.city}
            <br />
            <a className="mt-3 inline-block font-semibold tabular-nums underline decoration-enamel/30 underline-offset-4" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
            <br />
            <a className="font-semibold underline decoration-enamel/30 underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </address>
        </div>
        <RepairForm />
      </div>
    </section>
  );
}
