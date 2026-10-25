import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { COURSE } from "@/lib/content";

export function CtaBand() {
  return (
    <section className="bg-excel px-5 py-14 text-navy-deep">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Jetzt zum Excelhero werden
          </h2>
          <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-navy/80">
            9 Module · 600+ Lektionen · unbegrenzter Zugriff · 30 Tage
            Geld-zurück-Garantie. Präsenzschulungen mit vergleichbarem Umfang
            kosten rund 10.000 €.
          </p>
        </div>
        <Button asChild variant="navy" size="lg">
          <Link to={COURSE.href}>Zum Excel Online Kurs</Link>
        </Button>
      </div>
    </section>
  );
}
