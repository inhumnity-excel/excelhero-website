import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import {
  CUSTOMERS,
  CUSTOMER_FILTERS,
  type CustomerCategory,
} from "@/lib/customers";

const PAGE_SIZE = 12;

const CATEGORY_LABEL: Record<CustomerCategory, string> = {
  konzern: "Konzern",
  mittelstand: "Mittelstand",
  beratung: "Beratung",
  ngo: "NGO",
  behoerde: "Behörde",
  bildung: "Bildung",
};

type FilterId = (typeof CUSTOMER_FILTERS)[number]["id"];

export function CustomerList() {
  const [filter, setFilter] = useState<FilterId>("alle");
  const [page, setPage] = useState(0);

  const filtered = useMemo(
    () =>
      filter === "alle"
        ? CUSTOMERS
        : CUSTOMERS.filter((c) => c.category === filter),
    [filter],
  );

  const total = filtered.length;
  const pageCount = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const safePage = Math.min(page, pageCount - 1);
  const start = safePage * PAGE_SIZE;
  const slice = filtered.slice(start, start + PAGE_SIZE);
  const end = Math.min(start + PAGE_SIZE, total);

  function setFilterAndReset(id: FilterId) {
    setFilter(id);
    setPage(0);
  }

  function go(next: number) {
    setPage((next + pageCount) % pageCount);
  }

  const counts = useMemo(() => {
    const map: Record<string, number> = { alle: CUSTOMERS.length };
    for (const c of CUSTOMERS) map[c.category] = (map[c.category] ?? 0) + 1;
    return map;
  }, []);

  return (
    <section className="bg-paper-2 px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
              Kundenliste
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] text-muted">
              Teams und Einzelpersonen aus Konzernen, Mittelstand, Beratung,
              NGOs, Behörden und Bildung — {CUSTOMERS.length} Organisationen.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(safePage - 1)}
              disabled={total === 0}
              className="grid size-10 place-items-center rounded-full bg-card text-ink shadow-card hover:bg-paper disabled:opacity-40"
              aria-label="Vorherige 12 Kunden"
            >
              <ChevronLeft className="size-5" />
            </button>
            <p className="min-w-[9rem] text-center text-sm tabular-nums text-muted">
              {total === 0 ? "0 von 0" : `${start + 1}–${end} von ${total}`}
            </p>
            <button
              type="button"
              onClick={() => go(safePage + 1)}
              disabled={total === 0}
              className="grid size-10 place-items-center rounded-full bg-card text-ink shadow-card hover:bg-paper disabled:opacity-40"
              aria-label="Nächste 12 Kunden"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div
          className="mt-6 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Kunden nach Art filtern"
        >
          {CUSTOMER_FILTERS.map((item) => {
            const active = filter === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilterAndReset(item.id)}
                className={
                  active
                    ? "rounded-full bg-navy px-3.5 py-1.5 font-display text-xs font-semibold text-paper"
                    : "rounded-full bg-card px-3.5 py-1.5 font-display text-xs font-semibold text-ink shadow-card hover:bg-paper"
                }
              >
                {item.label}{" "}
                <span className={active ? "text-excel" : "text-muted"}>
                  {counts[item.id] ?? 0}
                </span>
              </button>
            );
          })}
        </div>

        {slice.length === 0 ? (
          <p className="mt-8 text-sm text-muted">Keine Einträge in dieser Kategorie.</p>
        ) : (
          <ul className="mt-8 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            {slice.map((c) => (
              <li
                key={c.name}
                className="rounded-lg bg-card px-4 py-3 shadow-card"
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-excel-ink">
                  {CATEGORY_LABEL[c.category]}
                </p>
                <p className="mt-0.5 text-sm text-ink">{c.name}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
