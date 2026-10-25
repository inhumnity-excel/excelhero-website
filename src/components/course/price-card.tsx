import { Check, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export type PricePackage = {
  id: string;
  name: string;
  price: string;
  note: string;
  featured?: boolean;
  contentsLabel: string;
  contents: readonly string[];
  scope: readonly string[];
  support: readonly string[];
  cta: string;
  extra?: string;
};

export function PriceCard({ pkg, href }: { pkg: PricePackage; href: string }) {
  const featured = pkg.featured;
  return (
    <article
      className={
        featured
          ? "flex flex-col rounded-2xl bg-navy p-6 text-paper shadow-navy"
          : "flex flex-col rounded-2xl bg-card p-6 shadow-card"
      }
    >
      {featured ? (
        <p className="text-xs font-semibold uppercase tracking-wider text-excel">Empfohlen</p>
      ) : null}
      <h3 className="mt-1 font-display text-xl font-semibold">{pkg.name}</h3>
      <p className="mt-3 font-display text-4xl font-semibold tabular-nums">{pkg.price}</p>
      <p className={featured ? "mt-1 text-sm text-paper/60" : "mt-1 text-sm text-muted"}>{pkg.note}</p>
      <p className="mt-5 font-display text-xs font-semibold uppercase tracking-wider opacity-70">
        {pkg.contentsLabel}
      </p>
      <ul className="mt-2 space-y-1.5 text-sm">
        {pkg.contents.map((item) => (
          <li key={item} className="flex gap-2">
            <Check className={`mt-0.5 size-4 shrink-0 ${featured ? "text-excel" : "text-excel-ink"}`} />
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-4 font-display text-xs font-semibold uppercase tracking-wider opacity-70">
        Umfang
      </p>
      <ul className="mt-2 space-y-1.5 text-sm">
        {pkg.scope.map((item) => (
          <li key={item} className="flex gap-2">
            <Check className={`mt-0.5 size-4 shrink-0 ${featured ? "text-excel" : "text-excel-ink"}`} />
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-4 font-display text-xs font-semibold uppercase tracking-wider opacity-70">
        Support & Garantie
      </p>
      <ul className="mt-2 flex-1 space-y-1.5 text-sm">
        {pkg.support.map((item) => (
          <li key={item} className="flex gap-2">
            <Check className={`mt-0.5 size-4 shrink-0 ${featured ? "text-excel" : "text-excel-ink"}`} />
            {item}
          </li>
        ))}
      </ul>
      <Button asChild className="mt-6" variant={featured ? "default" : "navy"}>
        <a href={href} target="_blank" rel="noreferrer">
          {pkg.cta}
        </a>
      </Button>
      {pkg.extra ? (
        <p className={`mt-2 text-center text-xs ${featured ? "text-paper/55" : "text-muted"}`}>
          {pkg.extra}
        </p>
      ) : null}
    </article>
  );
}

export function TrustCard({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof ShieldCheck;
  title: string;
  body: string;
}) {
  return (
    <article className="rounded-xl bg-card p-6 shadow-card">
      <span className="grid size-10 place-items-center rounded-lg bg-excel-soft text-excel-ink">
        <Icon className="size-5" strokeWidth={1.8} />
      </span>
      <h3 className="mt-4 font-display text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">{body}</p>
    </article>
  );
}
