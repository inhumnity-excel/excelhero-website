import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tipps-tricks")({
  component: () => <Outlet />,
});
