"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { repairMailto, site } from "@/lib/site";

export function RepairForm() {
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const concern = String(data.get("concern") ?? "").trim();
    if (!name || !concern) {
      setSent(false);
      setError("Bitte nennen Sie Ihren Namen und das Anliegen. Danach öffnet sich Ihr E-Mail-Programm.");
      return;
    }
    const body = [
      `Name: ${name}`,
      phone ? `Telefon: ${phone}` : null,
      email ? `E-Mail: ${email}` : null,
      "",
      concern,
    ]
      .filter((line) => line !== null)
      .join("\n");
    setError(null);
    setSent(true);
    window.location.href = repairMailto(body);
  }

  return (
    <form id="anfrage" onSubmit={onSubmit} noValidate className="scroll-mt-28">
      <h3 className="text-2xl font-extrabold tracking-[-0.03em]">Reparatur anfragen</h3>
      <p className="mt-3 max-w-[48ch] leading-relaxed text-ink-soft">
        Die Anfrage öffnet Ihr E-Mail-Programm an {site.email}. Es gibt kein Formular-Postfach
        auf dieser Seite.
      </p>
      <div className="mt-6 grid gap-4">
        <Field id="name" name="name" label="Name" autoComplete="name" required />
        <Field id="phone" name="phone" label="Telefon" autoComplete="tel" type="tel" />
        <Field id="email" name="email" label="E-Mail" autoComplete="email" type="email" />
        <div>
          <label htmlFor="concern" className="mb-2 block text-sm font-semibold">
            Anliegen
          </label>
          <textarea
            id="concern"
            name="concern"
            rows={5}
            required
            className="w-full border border-enamel/25 bg-porcelain px-3 py-3 text-base outline-none"
          />
        </div>
      </div>
      {error ? (
        <p role="alert" className="mt-4 text-sm font-medium text-enamel-deep">
          {error}
        </p>
      ) : null}
      {sent ? (
        <p role="status" className="mt-4 text-sm text-ink-soft">
          Ihr E-Mail-Programm sollte sich öffnen. Falls nicht, schreiben Sie direkt an {site.email}.
        </p>
      ) : null}
      <Button
        type="submit"
        className="mt-5 h-12 rounded-sm bg-signal px-5 text-base font-semibold text-signal-ink hover:bg-signal/90"
      >
        Reparatur anfragen
      </Button>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  autoComplete,
  required,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="h-12 w-full border border-enamel/25 bg-porcelain px-3 text-base outline-none"
      />
    </div>
  );
}
