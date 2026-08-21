import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PageIndex } from "@/components/site/PageIndex";
import { CTAStrip } from "@/components/site/CTAStrip";
import { SERVICE_INDEX } from "@/lib/site-data";
import engineers from "@/assets/engineers.jpg";
import depot from "@/assets/depot.jpg";
import pcbMacro from "@/assets/pcb-macro.jpg";
import serviceInstallation from "@/assets/service-installation.png";
import serviceDesign from "@/assets/service-design.png";
import electricalCabinet from "@/assets/electrical-cabinet.jpg";

import { createSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () => createSeoMeta({
    title: "Services | LorVen Systems",
    description: "Engineering design, electronics manufacturing, system integration, and turnkey installation services for railways.",
    path: "/services",
  }),
  component: ServicesIndex,
});

const IMG = [
  pcbMacro,            // Electronic Product Development
  engineers,           // Signalling Design Services
  depot,               // KAVACH Installation & Commissioning
  electricalCabinet,   // S&T System Integration
  serviceDesign,       // Electronics Manufacturing Services
  serviceInstallation  // Installation, Testing & Commissioning
];

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="SERVICES"
        title="Engineering Services"
        lede="Electronic product development, signalling design, KAVACH installation, S&T system integration, electronics manufacturing (EMS), and field testing and commissioning."
        image={serviceDesign}
      />

      <PageIndex
        columns={[
          {
            title: "Engineering & Design",
            items: [
              { label: "Electronic Product Development", to: "/services/product-dev" },
              { label: "Signalling Design Services", to: "/services/signalling-design" },
            ],
          },
          {
            title: "Turnkey Installations",
            items: [
              { label: "KAVACH Installation", to: "/services/kavach-installation" },
              { label: "S&T System Integration", to: "/services/system-integration" },
            ],
          },
          {
            title: "Manufacturing & Field",
            items: [
              { label: "Electronics Manufacturing Services", to: "/services/ems" },
              { label: "Testing & Commissioning", to: "/services/testing-commissioning" },
            ],
          },
        ]}
      />

      <section className="border-t border-rule bg-bg py-20 md:py-28">
        <div className="container-editorial grid grid-cols-12 gap-8 md:gap-12">
          {SERVICE_INDEX.map((s, i) => (
            <a
              key={s.slug}
              href={`/services/${s.slug}`}
              className="reveal group col-span-12 md:col-span-6 flex flex-col justify-between h-full bg-white border border-rule/15 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500"
            >
              <div className="aspect-[5/4] overflow-hidden bg-surface relative">
                <img
                  src={IMG[i]}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03] select-none pointer-events-none"
                />
              </div>
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div className="space-y-4">
                  <span className="num-mono text-[10px] text-ink-muted uppercase tracking-[0.2em] font-semibold block">{s.number}</span>
                  <h2 className="text-3xl font-light text-ink group-hover:text-steel transition-colors uppercase leading-tight">
                    {s.title}
                  </h2>
                  <p className="text-sm md:text-base text-ink-muted font-light leading-relaxed max-w-md">{s.blurb}</p>
                </div>
                <div className="mt-8 pt-4 flex items-center justify-between border-t border-rule/10">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40 group-hover:text-ink transition-colors duration-300">
                    Read Details
                  </span>
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    className="text-ink/60 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <CTAStrip eyebrow="Engage" title="Bring us in at development, design, manufacturing, or installation." />
    </>
  );
}
