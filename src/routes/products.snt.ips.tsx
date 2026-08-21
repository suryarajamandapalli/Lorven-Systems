import { createFileRoute, Link } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Assets
import ipsHero from "@/assets/electrical-cabinet.jpg";
import depot from "@/assets/depot.jpg";

import { createSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/products/snt/ips")({
  head: () => createSeoMeta({
    title: "IPS – Integrated Power Supply | LorVen Systems",
    description: "Continuous, regulated AC and DC power for railway signalling circuits in RE and Non-RE areas.",
    path: "/products/snt/ips",
  }),
  component: IpsRoute,
});

function IpsRoute() {
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

  const metrics = [
    {
      value: "15 kVA",
      desc: "signalling loads, RE and Non-RE areas"
    },
    {
      value: "60 ms",
      desc: "main/standby inverter automatic changeover"
    },
    {
      value: "n + 1",
      desc: "modular architecture, hot-swappable modules"
    }
  ];

  const features = [
    {
      title: "Modular power conversion",
      desc: "Hot-swappable FRBC, Inverter, AC-AC and DC-DC converter modules on active load sharing; automatic fallback to AVR / AC-AC converter.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Battery management",
      desc: "Auto float/boost charging with temperature compensation, per-cell health monitoring and under-voltage isolation; LMLA, VRLA and other RDSO-approved batteries (110 V; 120/200/300 AH).",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Feeds for every signalling load",
      desc: "110 V DC fused feeds — relays, axle counters, block circuits, panel indication, data logger, EI, VDU, point machines and KAVACH.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M12 2v20M17 5H7M19 12H5M17 19H7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Monitored, locally and remotely",
      desc: "Status Monitoring Panel in the ASM's room with staged battery-discharge alarms; module faults and section-wise V/I reported to RDPMS per RDSO/SPN/257/2025.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M19 18H5a2 2 0 01-2-2V8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2zM9 18v2M15 18v2M12 6V3M12 3L9 5M12 3l3 2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Protected",
      desc: "Coordinated Type-1/Type-2 surge protection per IEC 61643 and IEC 62305-4; safety and reliability per RDSO/SPN/144.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <div ref={containerRef} className="bg-bg text-ink selection:bg-ink selection:text-on-dark antialiased">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-screen bg-ink overflow-hidden flex flex-col justify-center pb-20 pt-28">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={ipsHero}
            alt="IPS — SMPS-Based Integrated Power Supply"
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
                <li className="text-white">IPS</li>
              </ol>
            </nav>

            <div className="space-y-3">
              <h1 className="text-3xl md:text-5xl lg:text-[54px] font-light uppercase tracking-tight leading-tight text-white max-w-4xl">
                SMPS-Based Integrated Power Supply (IPS)
              </h1>
            </div>

            <p className="text-base md:text-lg text-white/90 leading-relaxed font-light max-w-3xl border-l-2 border-steel/40 pl-6 pt-2">
              Continuous, regulated AC and DC power for railway signalling circuits in RE and Non-RE areas — Stations, LC Gates, IBH and Auto Huts.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50 text-[9px] uppercase tracking-[0.2em] font-bold select-none pointer-events-none animate-bounce">
          <span>Explore IPS</span>
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
              IPS — SMPS-Based Integrated Power Supply
            </h2>
            <div className="border-t border-rule/20 pt-6">
              <p className="text-lg md:text-xl text-black leading-relaxed font-light">
                Continuous, regulated AC and DC power for railway signalling circuits in RE and Non-RE areas — Stations, LC Gates, IBH and Auto Huts.
              </p>
              <p className="text-sm text-ink-muted leading-relaxed font-mono uppercase tracking-wider mt-4">
                As per RDSO Specification RDSO/SPN/165/2023, Version 4.0
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-12 lg:col-span-5 gsap-reveal">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface rounded border border-rule/10 shadow-lg">
              <img
                src={ipsHero}
                alt="IPS Power Cabinet"
                className="h-full w-full object-cover select-none pointer-events-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Engineering Highlights Section */}
      <section className="bg-bg border-t border-rule/20 py-12 md:py-16">
        <div className="container-editorial space-y-16">
          
          {/* Metric Highlight Cards */}
          <div className="space-y-6 gsap-reveal">
            <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">HIGHLIGHTS</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {metrics.map((metric, idx) => (
                <div key={idx} className="bg-section p-8 border border-rule/25 rounded shadow-sm flex flex-col justify-between group hover:border-steel transition-all duration-300">
                  <div className="space-y-3">
                    <span className="text-4xl md:text-5xl font-extralight tracking-tight text-ink uppercase block group-hover:text-steel transition-colors duration-300">
                      {metric.value}
                    </span>
                    <p className="text-xs text-ink-muted leading-relaxed font-light font-mono uppercase tracking-wider">
                      {metric.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-12 pt-8 border-t border-rule/10">
            <div className="gsap-reveal space-y-4">
              <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">CAPABILITIES</span>
              <h2 className="text-3xl md:text-4xl font-light leading-snug text-ink uppercase">
                Features
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {features.map((feat, idx) => (
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
