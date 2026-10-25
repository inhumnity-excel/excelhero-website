import type { ReactNode } from "react";

function Node({
  title,
  icon,
  className,
}: {
  title: string;
  icon: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-2.5 rounded-lg bg-paper px-3 py-2.5 text-navy shadow-[0_1px_0_rgb(255_255_255/0.5)_inset,0_8px_18px_rgb(10_20_10/0.18)] ${className ?? ""}`}
    >
      <span className="grid size-8 shrink-0 place-items-center rounded-md bg-excel-soft text-excel-ink">
        {icon}
      </span>
      <span className="font-display text-[13px] font-semibold leading-tight">{title}</span>
    </div>
  );
}

export function Flowchart() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-[#3f8a28] p-4 shadow-navy sm:p-5">
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,rgb(255_255_255/0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.18)_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="relative flex gap-3">
        <div className="hidden w-[92px] shrink-0 flex-col justify-between rounded-lg bg-navy/90 p-3 text-[10px] font-semibold uppercase tracking-wide text-paper/80 sm:flex">
          <span>Datenbanken</span>
          <span>SAP</span>
          <span>SQL Server</span>
          <span>Web</span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="mb-3 font-display text-sm font-semibold tracking-wide text-white">
            Excel-Basics
          </p>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
            <Node
              title="Data Clean-Up"
              icon={
                <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M5 20h14M8 16l-2 4M16 16l2 4M7 12h10l1-7H6l1 7Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            />
            <Node
              title="Pivot-Tabellen"
              icon={
                <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="4" width="18" height="16" rx="1.5" />
                  <path d="M3 10h18M9 4v16" />
                </svg>
              }
            />
            <Node
              title="Pivot-Charts"
              className="hidden sm:flex"
              icon={
                <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 19V5M4 19h16" strokeLinecap="round" />
                  <path d="M8 15v-4M12 15V8M16 15v-6" strokeLinecap="round" />
                </svg>
              }
            />
            <Node
              title="Funktionen"
              icon={
                <span className="font-display text-xs font-bold">f(x)</span>
              }
            />
            <Node
              title="Diagramme"
              icon={
                <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M5 19V9M10 19V5M15 19v-7M20 19v-4" strokeLinecap="round" />
                </svg>
              }
            />
            <Node
              title="Dashboards"
              icon={
                <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="4" width="8" height="7" rx="1" />
                  <rect x="13" y="4" width="8" height="7" rx="1" />
                  <rect x="3" y="13" width="18" height="7" rx="1" />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
