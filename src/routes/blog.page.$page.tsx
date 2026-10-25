import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/page/$page")({
  beforeLoad: () => {
    throw redirect({ to: "/blog", statusCode: 301 });
  },
});
