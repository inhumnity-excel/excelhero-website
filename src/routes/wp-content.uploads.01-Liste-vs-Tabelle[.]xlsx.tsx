import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/wp-content/uploads/01-Liste-vs-Tabelle.xlsx")({
  beforeLoad: () => {
    throw redirect({ href: "/files/01-Liste-vs-Tabelle.xlsx", statusCode: 301 });
  },
});
