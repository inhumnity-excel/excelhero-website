import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/power-pivot")({
  component: () => <Outlet />,
});
