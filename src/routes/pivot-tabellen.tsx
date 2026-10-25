import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pivot-tabellen")({
  component: () => <Outlet />,
});
