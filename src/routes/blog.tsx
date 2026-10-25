import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  beforeLoad: ({ location }) => {
    const path = location.pathname.replace(/\/+$/, "") || "/";
    if (/^\/blog\/page\/[^/]+$/.test(path)) {
      throw redirect({ to: "/blog", statusCode: 301 });
    }
    throw redirect({ to: "/guides" });
  },
  component: () => null,
});
