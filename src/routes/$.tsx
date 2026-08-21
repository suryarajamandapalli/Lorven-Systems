import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [
      { title: "404 — Page Not Found | LorVen Systems" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: NotFound,
});

export function NotFoundView() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-bg text-ink px-6 py-20">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-extralight tracking-tighter text-ink leading-none">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="text-lg sm:text-xl font-light text-ink uppercase tracking-wider">
            Page Not Found
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-light">
            The page you are looking for doesn't exist or may have been moved.
          </p>
        </div>

        <div className="pt-2 flex items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-ink text-white hover:bg-steel text-xs font-mono font-bold uppercase tracking-wider rounded transition-colors shadow-sm cursor-pointer"
          >
            ← Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function NotFound() {
  return <NotFoundView />;
}
