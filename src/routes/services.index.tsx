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
  number: string;
  badge: string;
  category: string;
  title: string;
  blurb: string;
  image: string;
  highlights: string[];
}

const SERVICES: ServiceCardData[] = [
  {
    slug: "product-dev",
    number: "S/01",
    badge: "Hardware & Firmware",
    category: "Engineering & Design",
    title: "Electronic Product Development",
    blurb: "End-to-end embedded hardware engineering, fail-safe architecture, and rapid prototyping for safety-critical railway applications.",
    image: epdImg,
    highlights: ["Safety Integrity SIL-2/4", "Microcontroller & FPGA", "Ruggedized Thermal Layouts"],
  },
  {
    slug: "signalling-design",
    number: "S/02",
    badge: "RDSO / Railway CAD",
    category: "Engineering & Design",
    title: "Signalling Design Services",
    blurb: "Complete engineering design deliverables including Signalling Interlocking Plans (SIP), wiring diagrams, and track circuit interface circuits.",
    image: signallingImg,
    highlights: ["SIP & Table of Control", "Route Relay Interlocking", "Electronic Interlocking (EI)"],
  },
  {
    slug: "kavach-installation",
    number: "S/03",
    badge: "Onboard & Trackside",
    category: "Turnkey Installations",
    title: "KAVACH Installation & Commissioning",
    blurb: "Certified locomotive and wayside installation per RDSO/SPN/196/2020 specifications, including RFID track profiling and brake interface testing.",
    image: kavachImg,
    highlights: ["Loco Cab Fitting (WAP/WAG)", "Trackside RFID Programming", "Station Vital Unit Interface"],
  },
  {
    slug: "system-integration",
    number: "S/04",
    badge: "Telecom & Power",
    category: "Turnkey Installations",
    title: "S&T System Integration",
    blurb: "Seamless integration across disparate signalling, telemetry, OFC networks, and uninterrupted power supply infrastructures.",
    image: integrationImg,
    highlights: ["Data Logger & RTU Networks", "OFC Telemetry Backbones", "Dual-Redundant Power Racks"],
  },
  {
    slug: "ems",
    number: "S/05",
    badge: "IPC Class 3 SMT",
    category: "Manufacturing & Field",
    title: "Electronics Manufacturing Services",
    blurb: "High-precision SMT and THT assembly, conformal coating, automated optical inspection (AOI), and environmental stress testing.",
    image: emsImg,
    highlights: ["Automated Pick & Place", "100% AOI & X-Ray Inspection", "Burn-in Environmental Chambers"],
  },
  {
    slug: "testing-commissioning",
    number: "S/06",
    badge: "Field Safety & Block",
    category: "Manufacturing & Field",
    title: "Installation, Testing & Commissioning",
    blurb: "Full-lifecycle turnkey execution under active railway traffic block windows with complete CRS safety documentation.",
    image: commissioningImg,
    highlights: ["Traffic Block Night Works", "Point Machine & Track Circuits", "Joint Acceptance Inspections"],
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

      {/* Sleek 3-Column Modern Engineering Grid */}
      <section className="bg-bg py-12 md:py-16">
        <div className="container-editorial">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-rule/20 gap-4">
            <div>
              <span className="text-[11px] font-mono font-semibold tracking-[0.2em] text-accent uppercase block mb-1">
                Capability Matrix
              </span>
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-ink">
                Turnkey Railway Engineering & Manufacturing
              </h2>
            </div>
            <p className="text-xs md:text-sm text-ink-muted max-w-md font-normal leading-relaxed">
              From embedded design and IPC Class 3 SMT assembly to turnkey trackside installation under active traffic blocks.
            </p>
          </div>

          {/* 3-Column Compact Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="gsap-reveal group/card flex flex-col bg-white rounded-lg border border-rule/15 hover:border-accent/40 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Cinematic Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105 select-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-black/70 text-white backdrop-blur-xs border border-white/10">
                      {s.number}
                    </span>
                    <span className="text-[9px] font-mono font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-accent text-white shadow-xs">
                      {s.badge}
                    </span>
                  </div>

                  {/* Bottom Category Tag */}
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[11px] font-medium text-white/90 drop-shadow-xs">
                      {s.category}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 md:p-6 flex flex-col flex-grow justify-between bg-white">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-ink group-hover/card:text-accent transition-colors leading-snug">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-xs md:text-sm text-ink-muted leading-relaxed line-clamp-3">
                      {s.blurb}
                    </p>

                    {/* Technical Highlights */}
                    <div className="mt-4 pt-3 border-t border-rule/10 space-y-1.5">
                      {s.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-center text-[11px] text-ink/75">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mr-2 shrink-0" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="mt-5 pt-3.5 flex items-center justify-between border-t border-rule/10">
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink/50 group-hover/card:text-accent transition-colors">
                      View Service Spec
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-accent -translate-x-1 opacity-70 group-hover/card:opacity-100 group-hover/card:translate-x-0.5 transition-all duration-200"
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

