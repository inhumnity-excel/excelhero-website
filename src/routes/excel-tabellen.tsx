import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/excel-tabellen")({
  component: () => <Outlet />,
});
