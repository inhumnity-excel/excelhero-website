import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/office-script")({
  component: () => <Outlet />,
});
