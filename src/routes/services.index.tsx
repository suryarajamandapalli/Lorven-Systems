import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PageIndex } from "@/components/site/PageIndex";
import { CTAStrip } from "@/components/site/CTAStrip";
import { useGsapReveal } from "@/hooks/use-reveal";

// Bespoke High-Resolution Service Assets
import epdImg from "@/assets/Hero Images/Slide_15_Electronic_Product_Development.jpg";
import signallingImg from "@/assets/Hero Images/Slide_16_Signalling_Design_Services.jpg";
import kavachImg from "@/assets/Hero Images/Slide_17_KAVACH_Installation_Commissioning.jpg";
import integrationImg from "@/assets/Hero Images/Slide_18_ST_System_Integration.jpg";
import emsImg from "@/assets/Hero Images/Slide_19_Electronics_Manufacturing_Services.jpg";
import commissioningImg from "@/assets/Hero Images/Slide_20_Installation_Testing_Commissioning.png";
import serviceHeroImg from "@/assets/service-design.png";

import { createSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () => createSeoMeta({
    title: "Engineering Services | LorVen Systems",
    description: "Electronic product development, signalling design, KAVACH installation, S&T system integration, electronics manufacturing (EMS), and turnkey field commissioning for railways.",
    path: "/services",
  }),
  component: ServicesIndex,
});

interface ServiceCardData {
  slug: string;
  title: string;
  blurb: string;
  image: string;
}

const SERVICES: ServiceCardData[] = [
  {
    slug: "product-dev",
    title: "Electronic Product Development",
    blurb: "Embedded hardware design, firmware development, and rapid prototyping for safety-critical railway systems.",
    image: epdImg,
  },
  {
    slug: "signalling-design",
    title: "Signalling Design Services",
    blurb: "Engineering design deliverables including signalling interlocking plans (SIP), wiring diagrams, and layout schematics.",
    image: signallingImg,
  },
  {
    slug: "kavach-installation",
    title: "KAVACH Installation & Commissioning",
    blurb: "Certified onboard locomotive and trackside equipment installation, RFID placement, and verification testing.",
    image: kavachImg,
  },
  {
    slug: "system-integration",
    title: "S&T System Integration",
    blurb: "End-to-end integration across signalling gears, telemetry channels, optical fiber backbones, and power systems.",
    image: integrationImg,
  },
  {
    slug: "ems",
    title: "Electronics Manufacturing Services",
    blurb: "High-precision SMT and THT assembly, conformal coating, automated optical inspection, and stress screening.",
    image: emsImg,
  },
  {
    slug: "testing-commissioning",
    title: "Installation, Testing & Commissioning",
    blurb: "Turnkey field installation, point machine testing, and safety certification under active railway traffic block windows.",
    image: commissioningImg,
  },
];

function ServicesIndex() {
  useGsapReveal();

  return (
    <>
      <PageHero
        eyebrow="SERVICES"
        title="Engineering Services"
        lede="Electronic product development, signalling design, KAVACH installation, S&T system integration, electronics manufacturing (EMS), and turnkey field commissioning."
        image={serviceHeroImg}
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

      {/* Clean 3-Column Minimal Grid */}
      <section className="bg-bg py-12 md:py-16">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="gsap-reveal group/card flex flex-col bg-white rounded-lg border border-rule/15 hover:border-rule/40 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Image Tile */}
                <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105 select-none"
                  />
                </div>

                {/* Card Content (Title + Little Matter) */}
                <div className="p-6 flex flex-col flex-grow justify-between bg-white">
                  <div>
                    <h3 className="text-lg font-semibold text-ink group-hover/card:text-steel transition-colors leading-snug">
                      {s.title}
                    </h3>
                    <p className="mt-2.5 text-xs md:text-sm text-ink-muted leading-relaxed font-light">
                      {s.blurb}
                    </p>
                  </div>

                  {/* Subtle Action Link */}
                  <div className="mt-6 pt-4 flex items-center justify-between border-t border-rule/10">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/40 group-hover/card:text-ink transition-colors">
                      Learn More
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-ink/50 -translate-x-1 opacity-60 group-hover/card:opacity-100 group-hover/card:translate-x-0.5 transition-all duration-200"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip eyebrow="ENGAGE ENGINEERING" title="Bring us in at development, design, manufacturing, or installation." />
    </>
  );
}

