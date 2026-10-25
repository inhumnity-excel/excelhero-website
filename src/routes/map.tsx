import { createFileRoute } from "@tanstack/react-router";
import { MapPage } from "@/components/restored/landing-pages";

export const Route = createFileRoute("/map")({
  head: () => ({
    meta: [
      { title: 'Map | Excelhero' },
      { name: "robots", content: 'noindex, follow' },
    ],
  }),
  component: MapPage,
});
