import { createFileRoute } from "@tanstack/react-router";
import { redirectCategory } from "@/lib/legacy-redirects";

export const Route = createFileRoute("/category/$slug")({
  beforeLoad: ({ params }) => {
    redirectCategory(params.slug);
  },
});
