import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Check, GraduationCap, MessageCircle, ShieldCheck } from "lucide-react";
import { CustomerList } from "@/components/course/customers";
import { PriceCard, TrustCard, type PricePackage } from "@/components/course/price-card";
import { Testimonials } from "@/components/home/testimonials";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { OfferInstructor, OfferModule } from "@/lib/offers";

export type OfferSalesProps = {
  kicker: string;
  title: string;
  lead: string;
  heroPoints: string[];
  ctaLabel: string;
  video?: string;
  videoTitle?: string;
  benefitsTitle: string;
  benefits: { title: string; body: ReactNode; image?: string }[];
  extraSection?: ReactNode;
  modulesTitle?: string;
  modulesLead?: string;
  modules: OfferModule[];
  packages: (PricePackage & { href: string })[];
  instructor: OfferInstructor;
  faq: { q: string; a: string }[];
  closingTitle: string;
  showCustomers?: boolean;
  showTestimonials?: boolean;
  whatIs?: { title: string; paragraphs: string[] };
};

export function OfferSales(props: OfferSalesProps) {
  return (
    <main>
      <section className="relative overflow-hidden bg-navy text-paper">
        <div className="grid-navy pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-5 py-14 md:py-20">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-excel">
            {props.kicker}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-[2.15rem] font-semibold leading-[1.12] tracking-tight sm:text-5xl">
            {props.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-paper/75">{props.lead}</p>
          <div className={`mt-10 grid items-center gap-10 ${props.video ? "md:grid-cols-2" : ""}`}>
            {props.video ? (
              <div className="overflow-hidden rounded-2xl bg-navy-deep shadow-card ring-1 ring-white/10">
                <div className="aspect-video">
                  <iframe
                    src={props.video}
                    title={props.videoTitle ?? props.title}
                    className="h-full w-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ) : null}
            <div>
              <p className="font-display text-sm font-semibold">Deine Vorteile</p>
              <ul className="mt-4 space-y-2.5">
                {props.heroPoints.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-snug text-paper/85">
                    <Check className="mt-0.5 size-4 shrink-0 text-excel" strokeWidth={2.4} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="mt-8">
                <a href="#preise">{props.ctaLabel}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {props.benefitsTitle}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {props.benefits.map((b) => (
              <article key={b.title} className="overflow-hidden rounded-xl bg-card shadow-card">
                {b.image ? (
                  <img src={b.image} alt="" className="h-48 w-full object-cover object-top" />
                ) : null}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-ink">{b.title}</h3>
                  <div className="mt-3 text-[15px] leading-relaxed text-muted">{b.body}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {props.extraSection}

      <section className="bg-paper-2 px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {props.modulesTitle ?? "Kursabschnitte"}
          </h2>
          {props.modulesLead ? (
            <p className="mt-3 max-w-2xl text-[15px] text-muted">{props.modulesLead}</p>
          ) : null}
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {props.modules.map((m) => (
              <li key={m.n} className="flex flex-col overflow-hidden rounded-xl bg-card shadow-card">
                <img src={m.image} alt={m.title} className="aspect-[16/9] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <p className="font-display text-xs font-semibold text-excel-ink">
                    {m.n})
                    {m.hours ? ` ${m.hours}` : ""}
                    {m.lessons ? ` · ${m.lessons} Lektionen` : ""}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-ink">{m.title}</h3>
                  <p className="mt-1 text-sm font-medium text-ink/80">{m.fullTitle}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{m.blurb}</p>
                  {m.points ? (
                    <ul className="mt-3 space-y-1.5 text-sm text-muted">
                      {m.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <Check className="mt-0.5 size-4 shrink-0 text-excel-ink" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {m.href ? (
                    m.href === "/kontakt" ? (
                      <Link
                        to="/kontakt"
                        className="mt-4 text-sm font-semibold text-excel-ink hover:underline"
                      >
                        Zur Anfrage →
                      </Link>
                    ) : (
                      <a
                        href={m.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 text-sm font-semibold text-excel-ink hover:underline"
                      >
                        Inhalte im Detail →
                      </a>
                    )
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="preise" className="scroll-mt-24 bg-paper px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Jetzt in den Kurs einschreiben
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] text-muted">
            Einmaliger Betrag, zeitlich unbegrenzter Zugriff, 30 Tage Geld-zurück-Garantie.
          </p>
          <div
            className={`mt-10 grid gap-5 ${props.packages.length === 2 ? "lg:grid-cols-2 lg:max-w-4xl" : "lg:grid-cols-3"}`}
          >
            {props.packages.map((pkg) => (
              <PriceCard key={pkg.id} pkg={pkg} href={pkg.href} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-2 px-5 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div className="relative mx-auto w-full max-w-md">
            <img
              src={props.instructor.photo}
              alt={props.instructor.alt}
              className="w-full rounded-2xl bg-card object-cover object-top shadow-card"
            />
          </div>
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-excel-ink">
              Dein Dozent
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">
              {props.instructor.name}
            </h2>
            <p className="mt-1 text-sm font-medium text-excel-ink">{props.instructor.role}</p>
            {props.instructor.bio.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 text-[15px] leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {props.whatIs ? (
        <section className="bg-paper px-5 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
              {props.whatIs.title}
            </h2>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted">
              {props.whatIs.paragraphs.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {props.showTestimonials ? <Testimonials /> : null}

      <section className="bg-paper px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          <TrustCard
            icon={GraduationCap}
            title="Zertifikate"
            body="Downloadbar als PDF für den Lebenslauf."
          />
          <TrustCard
            icon={ShieldCheck}
            title="30 Tage Geld-zurück-Garantie"
            body="Risikofrei testen. Falls der Kurs nicht passt, erstattest du den Kauf über den Zahlungsanbieter."
          />
          <TrustCard
            icon={MessageCircle}
            title="Fragen im Lernforum"
            body="Im kursinternen Forum bleiben Fragen nicht liegen – du bekommst eine Antwort vom Dozenten."
          />
        </div>
      </section>

      {props.showCustomers ? <CustomerList /> : null}

      <section className="bg-paper px-5 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            FAQ
          </h2>
          <p className="mt-3 text-[15px] text-muted">Hier ein paar häufig gestellte Fragen:</p>
          <Accordion type="single" collapsible className="mt-8">
            {props.faq.map((item, i) => (
              <AccordionItem key={item.q} value={`oq-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-excel px-5 py-14 text-navy-deep">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight">{props.closingTitle}</h2>
            <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-navy/80">
              Ganz risikofrei mit der 30-Tage-Geld-zurück-Garantie testen.
            </p>
          </div>
          <Button asChild variant="navy" size="lg">
            <a href="#preise">Jetzt in den Kurs einschreiben</a>
          </Button>
        </div>
      </section>
    </main>
  );
}
