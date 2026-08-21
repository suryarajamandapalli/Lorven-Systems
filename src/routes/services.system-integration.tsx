import { createFileRoute, Link } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Assets
import factoryHall from "@/assets/factory-hall.jpg";
import smtLine from "@/assets/smt-line.jpg";
import depot from "@/assets/depot.jpg";

import { createSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/services/system-integration")({
  head: () => createSeoMeta({
    title: "S&T System Integration | LorVen Systems",
    description: "Electronics Manufacturing Services (EMS), multi-vendor S&T integration engineering, and turnkey installation, testing & commissioning for railway systems.",
    path: "/services/system-integration",
  }),
  component: SystemIntegrationRoute,
});

function SystemIntegrationRoute() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // GSAP ScrollTrigger reveals
    gsap.utils.toArray(".gsap-reveal").forEach((elem: any) => {
      gsap.fromTo(
        elem,
        { y: 25, opacity: 0 },
        {
          scrollTrigger: {
            trigger: elem,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        }
      );
    });
  }, { scope: containerRef });

  const capabilities = [
    {
      num: "01",
      title: "Electronics Manufacturing Services",
      bullets: [
        "SMT and through-hole assembly at our Hyderabad facility.",
        "Box-build and cable/harness assembly.",
        "Workmanship to IPC-A-610; in-circuit and functional testing.",
        "ISO 9001:2015-aligned QMS with full material traceability."
      ]
    },
    {
      num: "02",
      title: "S&T System Integration",
      bullets: [
        "Requirements capture, interface definition and architecture across multi-vendor S&T equipment.",
        "Integration engineering — interlocking, KAVACH, IPS, data loggers, MSDAC and telecom subsystems.",
        "FAT/SAT planning and execution; documentation to railway inspection requirements.",
        "Correlation, wiring verification and installation-conformance checking against approved plans."
      ]
    },
    {
      num: "03",
      title: "Installation, Testing & Commissioning",
      bullets: [
        "Turnkey installation for railway electronic and electrical systems beyond KAVACH.",
        "Equipment room installation, cabling and integration testing.",
        "Commissioning documentation to railway requirements.",
        "Depot-level maintenance support."
      ]
    }
  ];

  const whyLorVen = [
    {
      title: "In-House Manufacturing Facility",
      desc: "SMT and through-hole assembly, box-build, and cable harness assembly at our Hyderabad facility."
    },
    {
      title: "IPC & ISO Quality Standard",
      desc: "Workmanship strictly compliant with IPC-A-610 standards and ISO 9001:2015-aligned QMS with full material traceability."
    },
    {
      title: "Multi-Vendor S&T Integration",
      desc: "Proven integration engineering across interlocking, KAVACH, IPS, data loggers, MSDAC, and telecom subsystems."
    },
    {
      title: "Turnkey Field Execution",
      desc: "Equipment room installation, FAT/SAT planning, correlation checking, and depot-level maintenance support."
    }
  ];

  return (
    <div ref={containerRef} className="bg-bg text-ink selection:bg-ink selection:text-on-dark antialiased">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-screen bg-ink overflow-hidden flex flex-col justify-center pb-20 pt-28">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={factoryHall}
            alt="Manufacturing, Integration & Field Services"
            className="w-full h-full object-cover opacity-35 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
        </div>

        {/* Content */}
        <div className="container-editorial relative z-20 w-full text-white">
          <div className="max-w-4xl space-y-5">
            {/* Breadcrumbs */}
            <nav className="text-xs uppercase tracking-wider text-white/50">
              <ol className="flex items-center gap-2 flex-wrap font-semibold">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-white/20 font-light">&gt;</li>
                <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li className="text-white/20 font-light">&gt;</li>
                <li className="text-white">Manufacturing, Integration & Field Services</li>
              </ol>
            </nav>

            <div className="space-y-3">
              <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">SERVICES</span>
              <h1 className="text-3xl md:text-5xl lg:text-[54px] font-light uppercase tracking-tight leading-tight text-white max-w-4xl">
                Manufacturing, Integration and Field Services
              </h1>
            </div>

            <p className="text-base md:text-xl text-white/90 leading-relaxed font-light max-w-3xl border-l-2 border-steel pl-6 pt-2">
              End-to-end electronics manufacturing, S&T integration engineering, and turnkey field commissioning for railway systems
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50 text-[9px] uppercase tracking-[0.2em] font-bold select-none pointer-events-none animate-bounce">
          <span>Explore Capabilities</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="bg-bg py-16 md:py-24 border-t border-rule/20">
        <div className="container-editorial grid grid-cols-12 gap-8 md:gap-16 items-center">
          {/* Left Column */}
          <div className="col-span-12 lg:col-span-7 gsap-reveal space-y-6">
            <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">OVERVIEW</span>
            <h2 className="text-3xl md:text-4xl font-extralight leading-tight text-ink uppercase">
              Manufacturing, Integration and Field Services
            </h2>
            <div className="border-t border-rule/20 pt-6 space-y-4">
              <p className="text-lg md:text-xl text-black leading-relaxed font-light">
                Full-lifecycle engineering support covering Electronics Manufacturing Services (EMS) at our Hyderabad facility, multi-vendor S&T system integration, and turnkey installation, testing & commissioning for railway applications.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-12 lg:col-span-5 gsap-reveal">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface rounded border border-rule/10 shadow-lg">
              <img
                src={smtLine}
                alt="Electronics SMT Manufacturing Assembly Line"
                className="h-full w-full object-cover select-none pointer-events-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Engineering Capabilities (3-Card Substantial Grid matching EPD Template) */}
      <section className="bg-section border-t border-rule/20 py-20 md:py-28">
        <div className="container-editorial space-y-16">
          <div className="gsap-reveal space-y-4 max-w-3xl">
            <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-light leading-snug text-ink uppercase">
              Engineering Capabilities
            </h2>
            <p className="text-base text-ink-muted leading-relaxed font-light">
              Turnkey electronics manufacturing, multi-subsystem S&T integration, and field commissioning support.
            </p>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-8 bg-bg border border-rule/25 rounded shadow-sm hover:border-steel transition-all duration-300 gsap-reveal flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-steel tracking-widest uppercase">
                      SCOPE {cap.num}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-ink uppercase tracking-tight group-hover:text-steel transition-colors duration-300">
                    {cap.title}
                  </h3>
                  <ul className="space-y-3 border-t border-rule/15 pt-4">
                    {cap.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-sm text-ink-muted leading-relaxed font-light">
                        <span className="text-steel font-bold text-xs mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why LorVen Engineering Section */}
      <section className="bg-bg border-t border-rule/20 py-20 md:py-28">
        <div className="container-editorial space-y-12">
          <div className="gsap-reveal space-y-4 max-w-3xl">
            <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">WHY LORVEN</span>
            <h2 className="text-3xl md:text-4xl font-light leading-snug text-ink uppercase">
              Engineering Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyLorVen.map((item, idx) => (
              <div key={idx} className="p-8 bg-section border border-rule/20 rounded space-y-3 gsap-reveal hover:border-steel transition-colors duration-300">
                <h3 className="text-base font-bold text-ink uppercase tracking-wide">{item.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Enterprise CTA */}
      <section className="bg-ink text-on-dark py-16 md:py-20 border-t border-ink relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={depot}
            alt="Wayside Maintenance Depot"
            className="w-full h-full object-cover opacity-30 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-black/30 z-10" />
        </div>
        
        <div className="container-editorial relative z-20 flex justify-center text-center">
          <div className="max-w-4xl space-y-6 gsap-reveal">
            <span className="eyebrow !text-white/40 block">DISCUSS REQUIREMENTS</span>
            <h2 className="text-3xl md:text-5xl font-light leading-tight text-white uppercase">
              Discuss your deployment requirements with our engineering team
            </h2>
            <div className="pt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-white text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-ink transition-colors duration-300 rounded-sm shadow-md"
              >
                Consult Our Engineers →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
