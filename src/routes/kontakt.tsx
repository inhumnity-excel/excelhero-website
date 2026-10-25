import { createFileRoute, Link } from "@tanstack/react-router";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { PageHero } from "@/components/layout/page-hero";
import { SocialLinks } from "@/components/social-links";
import { SITE } from "@/lib/content";

export const Route = createFileRoute("/kontakt")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Kontaktformular | Excelhero" },
      {
        name: "description",
        content:
          "Kontaktanfrage an Daniel Kogan. Schreib an kontakt@excelhero.de oder nutze das Formular. Rückruf auf Wunsch.",
      },
    ],
  }),
});

function ContactPage() {
  return (
    <main>
      <PageHero
        kicker="Kontaktanfrage"
        title="Kontaktformular"
        lead="Sie können mich unter kontakt@excelhero.de erreichen. Für einen Rückruf nutzen Sie bitte den Rückrufservice."
      />
      <section className="bg-paper px-5 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <InquiryForm mode="contact" />
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              So erreichen Sie mich
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              Ich freue mich schon auf Ihre Anfrage,
            </p>
            <p className="mt-2 font-display font-semibold text-ink">Daniel Kogan</p>
            <dl className="mt-6 space-y-3 text-sm">
              <div>
                <dt className="text-muted">E-Mail</dt>
                <dd>
                  <a className="font-medium text-excel-ink hover:underline" href={`mailto:${SITE.email}`}>
                    {SITE.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted">Rückruf</dt>
                <dd>
                  <Link to="/rueckruf" className="font-medium text-excel-ink hover:underline">
                    Rückrufservice
                  </Link>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-[15px] leading-relaxed text-muted">
              PS: Bitte haben Sie Verständnis, dass ich kostenlosen Support nur
              für meine Kursteilnehmer anbiete.
            </p>
            <SocialLinks variant="dark" className="mt-8" />
          </div>
        </div>
      </section>
    </main>
  );
}
