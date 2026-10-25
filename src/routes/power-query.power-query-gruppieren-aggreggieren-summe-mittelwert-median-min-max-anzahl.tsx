import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArticleView } from "@/components/guides/article-view";
import { getArticle } from "@/lib/articles";

export const Route = createFileRoute("/power-query/power-query-gruppieren-aggreggieren-summe-mittelwert-median-min-max-anzahl")({
  loader: () => {
    const article = getArticle("power-query-gruppieren-aggreggieren-summe-mittelwert-median-min-max-anzahl");
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.article.title ?? "Guide"} | Excelhero` },
      { name: "description", content: loaderData?.article.excerpt ?? "" },
    ],
  }),
  component: Page,
});

function Page() {
  return <ArticleView article={Route.useLoaderData().article} />;
}
