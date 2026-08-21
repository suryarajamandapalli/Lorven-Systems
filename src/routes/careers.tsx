import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import engineers from "@/assets/engineers.jpg";
import { createSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/careers")({
  head: () => createSeoMeta({
    title: "Careers | LorVen Systems",
    description: "Careers information currently under update.",
    path: "/careers",
  }),
  component: Careers,
});

function Careers() {
  return (
    <div className="bg-bg text-ink min-h-[70vh] flex flex-col justify-between">
      {/* Header */}
      <PageHero
        eyebrow="CAREERS"
        title="Careers at LorVen"
        lede="This section is currently being updated with new opportunities and role details."
        image={engineers}
      />

      {/* Main Notice */}
      <section className="bg-section border-t border-b border-rule/20 py-20 md:py-28">
        <div className="container-editorial flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto">
          <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">
            PAGE UNDER UPDATE
          </span>
          <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight leading-tight text-ink">
            Careers Section Updating
          </h2>
          <p className="text-base text-ink-muted leading-relaxed font-light">
            We are currently updating our careers portal and role listings. For general career inquiries or resume submissions, please feel free to reach out to our team directly.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-ink text-white hover:bg-steel px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 rounded-sm shadow-md"
            >
              Contact Our Team →
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

/*
// PREVIOUS CAREERS IMPLEMENTATION (RESERVED FOR FUTURE UPDATE):
const OPENINGS = [
  { n: "C/01", role: "Senior Hardware Engineer — Rail electronics", loc: "Hyderabad", type: "Permanent" },
  { n: "C/02", role: "PCB Layout Engineer", loc: "Hyderabad", type: "Permanent" },
  { n: "C/03", role: "Firmware Engineer — RTOS", loc: "Hyderabad", type: "Permanent" },
  { n: "C/04", role: "SMT Process Engineer", loc: "Bengaluru", type: "Permanent" },
  { n: "C/05", role: "Quality Engineer — IPC", loc: "Bengaluru", type: "Permanent" },
  { n: "C/06", role: "Site Installation Engineer", loc: "Pan-India", type: "Permanent" },
  { n: "C/07", role: "Procurement Specialist — Electronics", loc: "Hyderabad", type: "Permanent" },
];
*/
