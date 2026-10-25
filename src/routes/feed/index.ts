import { createFileRoute } from "@tanstack/react-router";
import { feedXml } from "@/lib/seo-documents";

export const Route = createFileRoute("/feed/")({
  server: {
    handlers: {
      GET: () =>
        new Response(feedXml(), {
          headers: {
            "content-type": "application/rss+xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        }),
    },
  },
});
