import { Link } from "@tanstack/react-router";
import { ArrowRight, Keyboard, Sigma } from "lucide-react";

const ITEMS = [
  {
    href: "/excel-funktionen",
    icon: Sigma,
    kicker: "Kostenlos",
    title: "Top 200+ Excel Funktionen",
    body: "Die häufigsten Funktionen – mit Syntax, Kategorie und Anwendungsbeispiel. Als Nachschlagewerk für den Arbeitsalltag.",
  },
  {
    href: "/excel-tastenkombinationen",
    icon: Keyboard,
    kicker: "PC & Mac",
    title: "Top 200+ Excel Shortcuts",
    body: "Die Tastenkombinationen, mit denen du in Tabellen, Formeln und Pivot spürbar schneller wirst.",
  },
];

export function Resources() {
  return (
    <section className="bg-paper px-5 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-excel-ink">
          Excel Tipps & Tricks
        </p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Neben dem Kurs: viele kostenlose Informationen für den Alltag
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {ITEMS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="group flex gap-5 rounded-xl bg-card p-6 shadow-card transition-[box-shadow,transform] duration-200 hover:shadow-card-hover"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-excel-soft text-excel-ink">
                <item.icon className="size-5" strokeWidth={1.8} />
              </span>
              <span className="min-w-0">
                <span className="text-xs font-semibold uppercase tracking-wider text-excel-ink">
                  {item.kicker}
                </span>
                <span className="mt-1 block font-display text-xl font-semibold text-ink">
                  {item.title}
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-muted">{item.body}</span>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-excel-ink">
                  Zum Inhalt
                  <ArrowRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5" />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
