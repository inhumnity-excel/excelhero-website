import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/vba")({
  component: () => <Outlet />,
});
