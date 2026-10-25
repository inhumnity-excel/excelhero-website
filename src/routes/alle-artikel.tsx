import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/alle-artikel")({
  beforeLoad: () => {
    throw redirect({ to: "/guides" });
  },
  component: () => null,
});
