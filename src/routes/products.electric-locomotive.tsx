import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/products/electric-locomotive")({
  component: () => <Outlet />,
});
