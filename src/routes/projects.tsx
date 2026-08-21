import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import depot from "@/assets/depot.jpg";
import { createSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/projects")({
  head: () => createSeoMeta({
    title: "Projects | LorVen Systems",
    description: "Projects information currently under update.",
    path: "/projects",
  }),
  component: Projects,
});

function Projects() {
  return (
    <div className="bg-bg text-ink min-h-[70vh] flex flex-col justify-between">
      {/* Header */}
      <PageHero
        eyebrow="PROJECTS"
        title="Featured Projects"
        lede="This section is currently being updated with our latest project case studies and deployment highlights."
        image={depot}
      />

      {/* Main Notice */}
      <section className="bg-section border-t border-b border-rule/20 py-20 md:py-28">
        <div className="container-editorial flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto">
          <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">
            PAGE UNDER UPDATE
          </span>
          <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight leading-tight text-ink">
            Projects Portfolio Updating
          </h2>
          <p className="text-base text-ink-muted leading-relaxed font-light">
            We are currently updating our project case studies and deployment portfolio. For specific project inquiries or technical references, please contact our engineering team directly.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-ink text-white hover:bg-steel px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 rounded-sm shadow-md"
            >
              Contact Engineering Team →
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center border border-ink/40 text-ink hover:border-ink px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 rounded-sm"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
