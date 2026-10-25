import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/funktionen/excel-funktionen")({
  beforeLoad: () => {
    throw redirect({ to: "/excel-funktionen", statusCode: 301 });
  },
});
