import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/allgemein/pivot-tabelle-formatierungen")({
  beforeLoad: () => {
    throw redirect({ to: "/pivot-tabellen/pivot-tabelle-formatierungen", statusCode: 301 });
  },
});
