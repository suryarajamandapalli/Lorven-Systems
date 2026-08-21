import { createFileRoute, Link } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Assets
import sntHero from "@/assets/snt-hero-premium.jpg";
import depot from "@/assets/depot.jpg";

import { createSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/products/snt/rdpms")({
  head: () => createSeoMeta({
    title: "RDPMS – Remote Diagnostic System | LorVen Systems",
    description: "IoT-based condition monitoring and predictive maintenance for Indian Railways signalling assets.",
    path: "/products/snt/rdpms",
  }),
  component: RdpmsRoute,
});

function RdpmsRoute() {
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

  const workflow = [
    {
      title: "Field sensors & IoT devices",
      desc: "Data acquisition at the monitored signalling gears.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M5.076 19A9 9 0 1118.924 19M12 15a3 3 0 100-6 3 3 0 000 6z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Station Gateway",
      desc: "Edge computing with protocol converters — data logger, MSDAC and ELD interfaces.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M19 18H5a2 2 0 01-2-2V8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2zM9 18v2M15 18v2M12 6V3M12 3L9 5M12 3l3 2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "RDPMS Application",
      desc: "AI/ML-based failure prediction, alerting and reporting; delivery to mobile, PC and Divisional Control.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  const additionalFeatures = [
    {
      title: "Interoperable by specification",
      desc: "Standard data format per RDSO/SPN/257/2025 — works with station gateways and application software of other approved vendors.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M8 7h12m0 0l-4-4m4 4l-4 4m-8 6H4m0 0l4-4m-4 4l4 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Alerts with cause, plus self-diagnostics",
      desc: "Predictive and failure alerts with identified cause; self-diagnostics across sensors, IoT devices, gateways and the network.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  const monitoredAssets = [
    "Point machines",
    "Signals",
    "Track circuits",
    "IPS",
    "Batteries & Chargers",
    "Data Logger",
    "ELD Interfaces",
    "MSDAC / Axle Counters",
    "SPDs",
    "Block Instruments",
    "UFSBI"
  ];

  return (
    <div ref={containerRef} className="bg-bg text-ink selection:bg-ink selection:text-on-dark antialiased">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-screen bg-ink overflow-hidden flex flex-col justify-center pb-20 pt-28">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={sntHero}
            alt="RDPMS — Remote Diagnostic & Predictive Maintenance System"
            className="w-full h-full object-cover opacity-35 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent z-10" />
        </div>

        {/* Content */}
        <div className="container-editorial relative z-20 w-full text-white">
          <div className="max-w-4xl space-y-4">
            {/* Breadcrumbs */}
            <nav className="text-xs uppercase tracking-wider text-white/50">
              <ol className="flex items-center gap-2 flex-wrap font-semibold">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-white/20 font-light">&gt;</li>
                <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
                <li className="text-white/20 font-light">&gt;</li>
                <li><Link to="/products/snt" className="hover:text-white transition-colors">Signalling & Telecom</Link></li>
                <li className="text-white/20 font-light">&gt;</li>
                <li className="text-white">RDPMS</li>
              </ol>
            </nav>

            <div className="space-y-3">
              <h1 className="text-3xl md:text-5xl lg:text-[54px] font-light uppercase tracking-tight leading-tight text-white max-w-4xl">
                Remote Diagnostic & Predictive Maintenance System (RDPMS)
              </h1>
            </div>

            <p className="text-base md:text-lg text-white/90 leading-relaxed font-light max-w-3xl border-l-2 border-steel/40 pl-6 pt-2">
              IoT-based condition monitoring and predictive maintenance for Indian Railways signalling assets — diagnostic logic and AI/ML analytics generate maintenance alerts before failures occur.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50 text-[9px] uppercase tracking-[0.2em] font-bold select-none pointer-events-none animate-bounce">
          <span>Explore RDPMS</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="bg-bg py-12 md:py-16 border-t border-rule/20">
        <div className="container-editorial grid grid-cols-12 gap-8 md:gap-16 items-center">
          {/* Left Column */}
          <div className="col-span-12 lg:col-span-7 gsap-reveal space-y-6">
            <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">PRODUCTS — SIGNALLING & TELECOM</span>
            <h2 className="text-3xl md:text-4xl font-extralight leading-tight text-ink uppercase">
              RDPMS — Remote Diagnostic & Predictive Maintenance System
            </h2>
            <div className="border-t border-rule/20 pt-6">
              <p className="text-lg md:text-xl text-black leading-relaxed font-light">
                IoT-based condition monitoring and predictive maintenance for Indian Railways signalling assets — diagnostic logic and AI/ML analytics generate maintenance alerts before failures occur.
              </p>
              <p className="text-sm text-ink-muted leading-relaxed font-mono uppercase tracking-wider mt-4">
                As per RDSO Specification RDSO/SPN/257/2025
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-12 lg:col-span-5 gsap-reveal">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface rounded border border-rule/10 shadow-lg">
              <img
                src={sntHero}
                alt="RDPMS Processing Room"
                className="h-full w-full object-cover select-none pointer-events-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features & Workflow Section */}
      <section className="bg-bg border-t border-rule/20 py-12 md:py-16">
        <div className="container-editorial space-y-16">
          <div className="gsap-reveal space-y-4">
            <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">CAPABILITIES</span>
            <h2 className="text-3xl md:text-4xl font-light leading-snug text-ink uppercase">
              Features
            </h2>
          </div>

          {/* Connected Workflow Row */}
          <div className="space-y-6 gsap-reveal">
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink-muted">Diagnostic Workflow</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative items-stretch">
              {workflow.map((step, idx) => (
                <div key={idx} className="relative flex flex-col justify-between p-6 bg-section border border-rule/25 rounded group hover:border-steel transition-all duration-300">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded bg-white border border-rule/20 flex items-center justify-center text-ink group-hover:bg-steel group-hover:text-white transition-colors duration-300">
                      {step.icon}
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-steel font-bold uppercase tracking-widest block">Step 0{idx + 1}</span>
                      <h4 className="text-lg font-bold text-ink uppercase tracking-wide leading-snug">{step.title}</h4>
                      <p className="text-sm text-ink-muted leading-relaxed font-light">{step.desc}</p>
                    </div>
                  </div>

                  {/* Horizontal Arrow for Desktop */}
                  {idx < 2 && (
                    <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-8 z-20 text-steel pointer-events-none text-xl font-bold animate-pulse">
                      →
                    </div>
                  )}

                  {/* Vertical Arrow for Mobile */}
                  {idx < 2 && (
                    <div className="flex lg:hidden justify-center my-4 text-steel pointer-events-none text-lg font-bold">
                      ↓
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Additional Capability Grid Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-rule/10">
            {additionalFeatures.map((feat, idx) => (
              <div key={idx} className="flex gap-6 items-start gsap-reveal group">
                <div className="w-12 h-12 rounded bg-section border border-rule/20 flex items-center justify-center text-ink flex-shrink-0 group-hover:bg-steel group-hover:text-white transition-colors duration-300">
                  {feat.icon}
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-lg font-bold text-ink uppercase tracking-wide leading-snug">{feat.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed font-light">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Monitored Assets Engineering summary strip */}
          <div className="bg-section border border-rule/20 p-8 rounded gsap-reveal space-y-4">
            
            <div className="flex flex-wrap gap-2.5 pt-2">
              {monitoredAssets.map((asset, idx) => (
                <div key={idx} className="bg-white px-4 py-2 border border-rule/15 rounded text-xs font-medium text-ink uppercase tracking-wider shadow-sm">
                  {asset}
                </div>
              ))}
            </div>
            
            <p className="text-[11px] text-ink-muted leading-relaxed font-light font-mono pt-2">
              * Supports optional MSDAC/axle counters, SPDs and Block Instrument/UFSBI per Zonal Railway requirement.
            </p>
          </div>

        </div>
      </section>

      {/* 4. Enterprise CTA */}
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
