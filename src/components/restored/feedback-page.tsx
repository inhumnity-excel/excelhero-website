import { PageHero } from "@/components/layout/page-hero";
import reviews from "@/data/feedback-reviews.json";

export function FeedbackPage() {
  return (
    <main>
      <PageHero kicker="" title="Feedback" />
      <section className="bg-paper px-5 py-12">
        <div className="mx-auto max-w-3xl space-y-4">
          {reviews.map((review) => (
            <article key={`${review.name}-${review.date}-${review.text.slice(0, 24)}`} className="rounded-xl bg-card p-5 shadow-card">
              <h2 className="font-display text-base font-semibold text-ink">
                {review.name} – {review.date} – Bewertung {review.rating}
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/85">{review.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
