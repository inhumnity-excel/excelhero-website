import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/excel-makros")({
  beforeLoad: () => {
    throw redirect({ to: "/makros/excel-makros", statusCode: 301 });
  },
});
