import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArticleView } from "@/components/guides/article-view";
import { getArticle } from "@/lib/articles";

export const Route = createFileRoute("/formeln/wenn-oder")({
  loader: () => {
    const article = getArticle("wenn-oder");
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
