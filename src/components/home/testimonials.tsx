import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { TESTIMONIALS, testimonialAvatar } from "@/lib/testimonials";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = TESTIMONIALS.length;
  const current = TESTIMONIALS[index];

  function go(next: number) {
    setIndex((next + total) % total);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") go(index + 1);
      if (e.key === "ArrowLeft") go(index - 1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  return (
    <section className="bg-paper-2 px-5 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-excel-ink">
          Rückmeldungen & Ergebnisse
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Was Teilnehmer berichten
        </h2>

        <div className="mt-8 rounded-2xl bg-card p-6 shadow-card md:p-10">
          <blockquote className="text-center">
            {current.title ? (
              <p className="font-display text-xl font-semibold leading-snug text-ink md:text-2xl">
                {current.title}
              </p>
            ) : null}
            <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-relaxed text-ink/85">
              „{current.quote}“
            </p>
            <footer className="mt-6">
              <img
                src={testimonialAvatar(current, index)}
                alt=""
                width={72}
                height={72}
                className="mx-auto size-[72px] rounded-full object-cover ring-2 ring-excel"
              />
              <p className="mt-3 font-display text-sm font-semibold text-ink">{current.name}</p>
              {current.role ? <p className="text-xs text-muted">{current.role}</p> : null}
            </footer>
          </blockquote>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Vorherige Rückmeldung"
              className="grid size-11 shrink-0 place-items-center rounded-full border border-line bg-paper text-ink hover:bg-excel-soft"
            >
              <ChevronLeft className="size-5" />
            </button>
            <p className="min-w-[4.5rem] text-center font-display text-xs font-semibold tabular-nums tracking-wide text-muted">
              {index + 1} / {total}
            </p>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Nächste Rückmeldung"
              className="grid size-11 shrink-0 place-items-center rounded-full border border-line bg-paper text-ink hover:bg-excel-soft"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
