import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { articlePath, FEATURED_SLUGS, getArticle } from "@/lib/articles";

export function PopularArticles() {
  const featured = FEATURED_SLUGS.map((slug) => getArticle(slug)).filter(
    (a): a is NonNullable<typeof a> => Boolean(a),
  );
  return (
    <section className="bg-paper-2 px-5 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-excel-ink">
              Beliebteste Beiträge
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Die Guides, die am häufigsten gelesen werden
            </h2>
          </div>
          <Link
            to="/guides"
            className="hidden items-center gap-1 text-sm font-semibold text-excel-ink hover:underline sm:inline-flex"
          >
            Alle Guides
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {featured.map((a) => (
            <Link
              key={a.slug}
              to={articlePath(a)}
              className="group overflow-hidden rounded-xl bg-card shadow-card transition-[box-shadow,transform] duration-200 hover:shadow-card-hover"
            >
              <img
                src={a.image}
                alt=""
                className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-excel-ink">
                  {a.kicker}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold text-ink">{a.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{a.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
