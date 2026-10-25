import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/power-bi")({
  component: () => <Outlet />,
});
