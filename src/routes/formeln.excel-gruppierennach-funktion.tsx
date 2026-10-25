import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/formeln/excel-gruppierennach-funktion")({
  beforeLoad: () => {
    throw redirect({ to: "/funktionen/excel-gruppierennach-funktion", statusCode: 301 });
  },
});
