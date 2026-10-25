import { PAYMENT_NOTE_HTML, PAYMENT_NOTE_TITLE, thankYouPage } from "@/lib/restored/thank-you";

export function ThankYouPage({ slug }: { slug: string }) {
  const page = thankYouPage(slug);
  return (
    <main>
      <section className="relative overflow-hidden bg-navy px-5 py-14 text-paper md:py-20">
        <div className="grid-navy pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-3xl text-center">
          <img
            src="https://excelhero.de/wp-content/uploads/excelhero-white.png"
            alt="Excelhero"
            className="mx-auto h-16 w-auto"
          />
          <h1 className="mt-8 font-display text-4xl font-semibold tracking-tight md:text-6xl">
            Du hast es <span className="text-excel">Fast Geschafft!</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-paper/80">{page.lead}</p>
        </div>
      </section>
      <section className="bg-paper px-5 py-12">
        <div className="mx-auto max-w-3xl">
          {page.paymentNote ? (
            <div className="mb-8 rounded-xl bg-card p-6 shadow-card">
              <h2 className="font-display text-xl font-semibold text-ink">{PAYMENT_NOTE_TITLE}</h2>
              <p
                className="article-html mt-3 text-[15px]"
                dangerouslySetInnerHTML={{ __html: PAYMENT_NOTE_HTML }}
              />
            </div>
          ) : null}
          {page.introHtml ? (
            <h2
              className="article-html mb-8 font-display text-2xl font-semibold text-ink"
              dangerouslySetInnerHTML={{ __html: page.introHtml }}
            />
          ) : null}
          <ol className="space-y-4">
            {page.steps.map((step, index) => (
              <li key={step.title} className="rounded-xl bg-card p-6 shadow-card">
                <div className="flex gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-excel font-display text-lg font-semibold text-navy-deep">
                    {index + 1}
                  </span>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-ink">{step.title}</h2>
                    <div
                      className="article-html mt-2 text-[15px]"
                      dangerouslySetInnerHTML={{ __html: step.html }}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
