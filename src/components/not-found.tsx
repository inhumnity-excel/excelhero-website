import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <main className="mx-auto flex max-w-lg flex-col items-start px-5 py-24">
      <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-excel-ink">
        404
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">
        Diese Seite gibt es hier nicht.
      </h1>
      <p className="mt-3 text-muted">
        Vielleicht ist der Link veraltet. Zurück zur Startseite, in die Guides
        oder direkt in den Kurs.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild>
          <Link to="/">Zur Startseite</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/guides">Guides</Link>
        </Button>
      </div>
    </main>
  );
}
