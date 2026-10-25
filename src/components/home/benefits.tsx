import { BENEFITS } from "@/lib/content";

export function Benefits() {
  return (
    <section className="bg-paper px-5 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-excel-ink">
          Deine Vorteile als Excelhero
        </p>
        <h2 className="mt-2 max-w-xl font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Weniger Klicken. Mehr Ergebnis.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {BENEFITS.map((item) => (
            <article
              key={item.title}
              className="rounded-xl bg-card p-6 text-center shadow-card transition-[box-shadow,transform] duration-200 ease-out hover:shadow-card-hover"
            >
              <img
                src={item.image}
                alt=""
                width={257}
                height={257}
                className="mx-auto size-40 object-contain"
              />
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
