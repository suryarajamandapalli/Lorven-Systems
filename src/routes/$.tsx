import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [{ title: "404 — LorVen Systems" }, { name: "robots", content: "noindex" }],
  }),
  component: NotFound,
});

function NotFound() {
  return (
    <section className="bg-bg pt-[72px]">
      <div className="container-editorial grid min-h-[80vh] grid-cols-12 items-end gap-8 pb-24">
        <div className="col-span-12 md:col-span-8">
          <span className="eyebrow">Error</span>
          <h1 className="display-mega mt-6 font-light text-ink">404</h1>
        </div>
        <div className="col-span-12 md:col-span-4">
          <p className="text-lg leading-relaxed text-ink">
            This page is not on file. It may have been moved, retired or never existed.
          </p>
          <Link
            to="/"
            className="link-underline mt-8 inline-block text-[12px] font-medium uppercase tracking-[0.16em] text-ink"
          >
            Return to the index →
          </Link>
        </div>
      </div>
    </section>
  );
}
