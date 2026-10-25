export function PageHero({
  kicker,
  title,
  lead,
}: {
  kicker: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy px-5 py-12 text-paper md:py-16">
      <div className="grid-navy pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-excel">
          {kicker}
        </p>
        <h1 className="mt-2 max-w-3xl font-display text-3xl font-semibold tracking-tight md:text-5xl">
          {title}
        </h1>
        {lead ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-paper/70 md:text-lg">
            {lead}
          </p>
        ) : null}
      </div>
    </section>
  );
}
