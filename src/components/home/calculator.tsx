import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { COURSE } from "@/lib/content";
import { formatDeNumber, formatEuro } from "@/lib/utils";

function Field({
  label,
  value,
  min,
  max,
  step,
  suffix,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix: string;
  onChange: (n: number) => void;
}) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between gap-3">
        <span className="text-sm font-medium text-paper/80">{label}</span>
        <span className="font-display text-lg font-semibold tabular-nums text-excel">
          {formatDeNumber(value)} {suffix}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-white/12 accent-excel"
      />
    </label>
  );
}

export function Calculator() {
  const [hours, setHours] = useState(7);
  const [years, setYears] = useState(25);
  const [rate, setRate] = useState(50);

  const stats = useMemo(() => {
    const total = hours * 52 * years;
    const saved = Math.round(total * 0.45);
    const weeks = saved / 40;
    const money = saved * rate;
    return { total, saved, weeks, money };
  }, [hours, years, rate]);

  return (
    <section id="rechner" className="bg-navy px-5 py-16 text-paper md:py-20">
      <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-excel">
            Zeitersparnis ausrechnen
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Wie viele Stunden Excel stehen in deinem Berufsleben?
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-paper/70">
            Bei meinen Kursteilnehmern sind das im Schnitt{" "}
            <strong className="font-semibold text-paper">7 Std. pro Woche bzw. ca. 300 Std. im Jahr</strong>
            . Im Controlling können daraus schnell 20–40 Std. pro Woche werden.
            Ein großer Teil davon lässt sich durch Pivot, Power Query und VBA
            einsparen.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-paper/55">
            Hinweis zur Berechnung: Mit jedem Excel-Tool lassen sich rund 10&nbsp;%
            der Arbeitszeit mit Excel einsparen. Pivot-Tabellen helfen bei großen
            Datensätzen, Power Query beim Abrufen und Transformieren, Makros und
            VBA beim Automatisieren. Dazu kommen noch einmal ~50&nbsp;% der
            wiederkehrenden Arbeitsschritte, die sich abkürzen oder ganz
            automatisieren lassen. Der Rechner zeigt ein realistisches
            Kombipotenzial von 45&nbsp;%.
          </p>
        </div>
        <div className="rounded-2xl bg-navy-mid p-6 shadow-navy lg:col-span-7 lg:p-8">
          <div className="space-y-6">
            <Field
              label="Stunden mit Excel pro Woche"
              value={hours}
              min={1}
              max={40}
              step={1}
              suffix="Std."
              onChange={setHours}
            />
            <Field
              label="Verbleibende Berufsjahre"
              value={years}
              min={5}
              max={40}
              step={1}
              suffix="Jahre"
              onChange={setYears}
            />
            <Field
              label="Wert einer Arbeitsstunde"
              value={rate}
              min={20}
              max={150}
              step={5}
              suffix="€"
              onChange={setRate}
            />
          </div>
          <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat label="Excel-Stunden gesamt" value={formatDeNumber(stats.total)} />
            <Stat label="Einsparpotenzial" value={formatDeNumber(stats.saved)} hint="Std." />
            <Stat label="≈ Arbeitswochen" value={formatDeNumber(stats.weeks, 0)} />
            <Stat label="Geldwert" value={formatEuro(stats.money)} />
          </dl>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild>
              <Link to={COURSE.href}>Genau hier kommt der Excel-Kurs ins Spiel</Link>
            </Button>
            <p className="text-xs text-paper/50">
              Ziel: Schritt für Schritt schneller werden, ohne Jahre Trial-and-Error.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-lg bg-navy-deep/70 px-3 py-3">
      <dt className="text-[11px] leading-tight text-paper/50">{label}</dt>
      <dd className="mt-1 font-display text-lg font-semibold tabular-nums text-excel">
        {value}
        {hint ? <span className="ml-1 text-xs font-medium text-paper/50">{hint}</span> : null}
      </dd>
    </div>
  );
}
