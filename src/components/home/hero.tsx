import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COURSE } from "@/lib/content";

const POINTS = [
  "9 Kurs-Module  ·  600+ Videolektionen  ·  60+ Std. Material",
  "Funktionen  ·  Pivots  ·  Makros & VBA  ·  Power Query  ·  Power Pivot",
  "Zeitlich unbegrenzter Zugriff, im eigenen Tempo",
  "Support bei Fragen & 30 Tage Geld-zurück-Garantie",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-paper">
      <div className="grid-navy pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-excel/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5 py-14 md:py-20">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-excel">
          Excel Online Kurs und Excel Schulung
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-[2.15rem] font-semibold leading-[1.12] tracking-tight text-paper sm:text-5xl">
          <span className="text-excel">Excelhero</span>
          <span className="block text-paper">Mit Excel Online Training zum Erfolg</span>
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-paper/75">
          Schneller und sicherer mit Excel arbeiten. Die ideale Vorbereitung
          für neue Herausforderungen.
        </p>

        <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl bg-navy-deep shadow-card ring-1 ring-white/10">
            <div className="aspect-video">
              <iframe
                src={COURSE.vimeo}
                title="Excelhero – Excel lernen Schritt für Schritt"
                className="h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <div>
            <p className="font-display text-sm font-semibold text-paper">
              Excel lernen Schritt für Schritt
            </p>
            <ul className="mt-4 space-y-2.5">
              {POINTS.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-snug text-paper/85">
                  <Check className="mt-0.5 size-4 shrink-0 text-excel" strokeWidth={2.4} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <Link to={COURSE.href}>Mehr Information zum Excel Online Kurs</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-paper hover:bg-white/8 hover:text-paper">
                <Link to="/guides">Kostenlose Guides</Link>
              </Button>
            </div>
            <p className="mt-3 text-sm text-paper/55">
              Excel Experte {COURSE.price} € · Power BI 399 € · 30 Tage Geld-zurück
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
