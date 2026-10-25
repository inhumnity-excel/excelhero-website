import { Link, useNavigate } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { searchContent } from "@/lib/articles";
import { cn } from "@/lib/utils";

export function SiteSearch({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const titleId = useId();
  const navigate = useNavigate();
  const hits = useMemo(() => searchContent(q), [q]);

  useEffect(() => {
    if (open) {
      setQ("");
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const mod = e.metaKey || e.ctrlKey;
      if (mod && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function go(to: string) {
    setOpen(false);
    void navigate({ to });
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "inline-flex items-center gap-2 rounded-md text-paper/80 hover:bg-white/6 hover:text-paper",
          variant === "desktop" ? "h-10 px-2.5" : "h-11 w-full px-3",
        )}
        aria-label="Suchen"
      >
        <Search className="size-4 shrink-0" />
        {variant === "mobile" ? (
          <span className="text-sm font-medium">Guides suchen</span>
        ) : (
          <kbd className="hidden rounded border border-white/15 px-1.5 py-0.5 font-sans text-xs text-paper/50 xl:inline">
            Strg K
          </kbd>
        )}
      </button>
      {open ? (
        <div className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[12vh]">
          <button
            type="button"
            className="absolute inset-0 bg-navy-deep/70"
            aria-label="Suche schließen"
            onClick={() => setOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative w-full max-w-lg overflow-hidden rounded-xl bg-card shadow-navy"
          >
            <div className="flex items-center gap-2 border-b border-line px-3">
              <Search className="size-4 text-muted" />
              <h2 id={titleId} className="sr-only">
                Guides suchen
              </h2>
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && hits[0]) go(hits[0].to);
                }}
                placeholder="SVERWEIS, Pivot, Power Query …"
                className="h-12 flex-1 bg-transparent text-base text-ink outline-none placeholder:text-muted"
              />
              <button
                type="button"
                className="grid size-9 place-items-center rounded-md text-muted hover:text-ink"
                aria-label="Schließen"
                onClick={() => setOpen(false)}
              >
                <X className="size-4" />
              </button>
            </div>
            <ul className="max-h-80 overflow-y-auto py-2">
              {q.trim().length < 2 ? (
                <li className="px-4 py-6 text-sm text-muted">Mindestens zwei Zeichen. Enter öffnet den ersten Treffer.</li>
              ) : hits.length === 0 ? (
                <li className="px-4 py-6 text-sm text-muted">Nichts gefunden. Versuch einen Funktionsnamen oder ein Thema.</li>
              ) : (
                hits.map((hit) => (
                  <li key={hit.to}>
                    <Link
                      to={hit.to}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-2.5 hover:bg-excel-soft"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wider text-excel-ink">
                        {hit.kicker}
                      </p>
                      <p className="text-sm font-medium text-ink">{hit.title}</p>
                    </Link>
                  </li>
                ))
              )}
            </ul>
            <p className="border-t border-line px-4 py-2 text-xs text-muted">
              <Link to="/guides" onClick={() => setOpen(false)} className="font-semibold text-excel-ink hover:underline">
                Alle Guides
              </Link>
              {" · "}Tippe im Menü Strg+K
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
