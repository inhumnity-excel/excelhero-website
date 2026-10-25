import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArticleView } from "@/components/guides/article-view";
import { getArticle } from "@/lib/articles";

export const Route = createFileRoute("/allgemein/symbole-einfuegen")({
  loader: () => {
    const article = getArticle("symbole-einfuegen");
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
