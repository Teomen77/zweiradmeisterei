"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { heroAlt, repairMailto, site } from "@/lib/site";

export function Hero() {
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const concern = String(new FormData(event.currentTarget).get("concern") ?? "").trim();
    if (!concern) {
      setSent(false);
      setError("Bitte schreiben Sie kurz, was am Rad zu tun ist.");
      return;
    }
    setError(null);
    setSent(true);
    window.location.href = repairMailto(concern);
  }

  return (
    <section className="bg-stucco px-3 pb-3 md:px-4 md:pb-4" aria-labelledby="hero-title">
      <div className="case-shadow mx-auto flex min-h-[calc(100svh-var(--nav-h)-1rem)] max-w-[1440px] flex-col overflow-hidden bg-enamel">
        <div className="relative min-h-[38vh] flex-1">
          <Image
            src="/hero-werkstatt.jpg"
            alt={heroAlt}
            fill
            priority
            sizes="(min-width: 1440px) 1440px, 100vw"
            className="object-cover object-[center_42%]"
          />
          <p className="absolute bottom-3 left-3 max-w-[18rem] bg-enamel/92 px-2.5 py-1.5 text-xs leading-snug text-porcelain">
            Generierte Darstellung, kein Foto der Werkstatt.
          </p>
        </div>
        <div className="shrink-0 px-5 py-5 text-porcelain md:px-10 md:py-6">
          <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12">
            <div>
              <h1
                id="hero-title"
                className="max-w-[16ch] text-[clamp(2.35rem,5vw,4.6rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-balance"
              >
                Reparatur für jedes Rad.
              </h1>
              <p className="mt-4 max-w-[46rem] text-base leading-relaxed text-porcelain/88 md:text-lg">
                Altes Schätzchen, E-Bike oder das Rad dazwischen. In der Meisterwerkstatt
                an der Luxemburger Straße wird persönlich geschraubt.
              </p>
            </div>
            <form onSubmit={onSubmit} className="w-full lg:w-[28rem]" noValidate>
              <label htmlFor="hero-concern" className="sr-only">
                Was sollen wir uns ansehen?
              </label>
              <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
                <input
                  id="hero-concern"
                  name="concern"
                  type="text"
                  autoComplete="off"
                  placeholder="Was sollen wir uns ansehen?"
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? "hero-error" : sent ? "hero-status" : undefined}
                  className="h-12 min-w-0 flex-1 bg-porcelain px-4 text-base text-ink outline-none placeholder:text-ink-soft"
                />
                <div className="flex gap-2">
                  <Button
                    type="submit"
                    className="relative h-12 flex-1 overflow-hidden rounded-sm bg-signal px-4 text-base font-semibold text-signal-ink hover:bg-signal/90"
                  >
                    <motion.span
                      aria-hidden
                      className="pointer-events-none absolute inset-y-0 w-1/3 bg-porcelain/45 motion-reduce:hidden"
                      initial={{ x: "-140%" }}
                      animate={{ x: "380%" }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                    />
                    <span className="relative">Reparatur anfragen</span>
                  </Button>
                  <a
                    href={`tel:${site.phoneTel}`}
                    className="inline-flex h-12 items-center justify-center border border-porcelain/35 px-4 text-base font-semibold"
                  >
                    Anrufen
                  </a>
                </div>
              </div>
              {error ? (
                <p id="hero-error" role="alert" className="mt-2 text-sm text-signal">
                  {error}
                </p>
              ) : null}
              {sent ? (
                <p id="hero-status" role="status" className="mt-2 text-sm text-porcelain/80">
                  Ihr E-Mail-Programm sollte sich öffnen. Sonst schreiben Sie an {site.email}.
                </p>
              ) : null}
            </form>
          </div>
          <p className="mt-4 flex flex-col gap-1 border-t border-porcelain/25 pt-3 text-base font-semibold tabular-nums sm:block md:text-lg">
            <span>{site.hoursLabel}</span>
            <span className="mx-2 hidden font-medium text-porcelain/50 sm:inline" aria-hidden>
              ·
            </span>
            <span className="sm:inline">
              {site.street}, {site.district}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
