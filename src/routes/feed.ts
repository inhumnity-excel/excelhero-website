import { createFileRoute } from "@tanstack/react-router";
import { feedXml } from "@/lib/seo-documents";

function rss() {
  return new Response(feedXml(), {
    headers: {
      "content-type": "application/rss+xml; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}

export const Route = createFileRoute("/feed")({
  server: {
    handlers: {
      GET: () => rss(),
    },
  },
});
