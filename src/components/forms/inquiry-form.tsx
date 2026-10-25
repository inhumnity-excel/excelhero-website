import { Link } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/content";
import { cn } from "@/lib/utils";

const TIMES = ["09:00–12:00", "12:00–15:00", "15:00–18:00", "nach 18:00"];
const TOPICS = [
  "Excel Online Kurs",
  "Power BI & SQL",
  "VBA-Kurs",
  "Firmenlizenzen / Schulung",
  "Auftragsprogrammierung",
  "Partnerprogramm",
  "Sonstiges",
];

export function InquiryForm({ mode }: { mode: "contact" | "callback" }) {
  const [sent, setSent] = useState(false);
  const isCallback = mode === "callback";

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const topic = String(data.get("topic") ?? "");
    const date = String(data.get("date") ?? "");
    const slot = String(data.get("slot") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = isCallback
      ? `Rückruf erbeten: ${name}`
      : `Kontaktanfrage Excelhero: ${name}`;
    const body = [
      `Name: ${name}`,
      `E-Mail: ${email}`,
      phone ? `Telefon: ${phone}` : "",
      topic ? `Thema: ${topic}` : "",
      date ? `Wunschdatum: ${date}` : "",
      slot ? `Uhrzeit: ${slot}` : "",
      "",
      message,
    ]
      .filter((line) => line !== "")
      .join("\n");
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-xl bg-card p-6 shadow-card">
      <Field label="Name" name="name" required />
      <Field label="E-Mail" name="email" type="email" required />
      <Field
        label={isCallback ? "Telefon" : "Telefon (optional)"}
        name="phone"
        type="tel"
        required={isCallback}
      />
      {isCallback ? (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Wunschdatum" name="date" type="date" />
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink">Uhrzeitfenster</span>
              <select
                name="slot"
                required
                className="h-11 w-full rounded-lg border border-line bg-paper px-3 text-ink outline-none ring-excel focus:ring-2"
                defaultValue=""
              >
                <option value="" disabled>
                  Bitte wählen
                </option>
                {TIMES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">Thema</span>
            <select
              name="topic"
              className="h-11 w-full rounded-lg border border-line bg-paper px-3 text-ink outline-none ring-excel focus:ring-2"
              defaultValue="Excel Online Kurs"
            >
              {TOPICS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>
        </>
      ) : null}
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-ink">Nachricht</span>
        <textarea
          name="message"
          required
          rows={isCallback ? 4 : 6}
          placeholder={
            isCallback
              ? "Worum soll es im Gespräch gehen?"
              : "Deine Frage oder Nachricht …"
          }
          className="w-full rounded-lg border border-line bg-paper px-3 py-2.5 text-ink outline-none ring-excel placeholder:text-muted focus:ring-2"
        />
      </label>
      <label className="flex items-start gap-3 text-sm leading-relaxed text-muted">
        <input
          type="checkbox"
          required
          className="mt-1 size-4 shrink-0 accent-excel"
        />
        <span>
          Ich habe die{" "}
          <Link to="/datenschutzerklaerung" className="font-medium text-excel-ink hover:underline">
            Datenschutzerklärung
          </Link>{" "}
          gelesen und bin mit der Verarbeitung meiner Angaben zur Bearbeitung
          dieser Anfrage einverstanden.
        </span>
      </label>
      <Button type="submit">{isCallback ? "Rückruf anfordern" : "Nachricht senden"}</Button>
      {sent ? (
        <p className={cn("text-sm text-excel-ink")}>
          Dein E-Mail-Programm sollte sich öffnen. Falls nicht, schreib direkt an{" "}
          {SITE.email}.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="h-11 w-full rounded-lg border border-line bg-paper px-3 text-ink outline-none ring-excel focus:ring-2"
      />
    </label>
  );
}
