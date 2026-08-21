import { createFileRoute, Link } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Assets
import wagons from "@/assets/wagons.jpg";
import depot from "@/assets/depot.jpg";

import { createSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/products/wagons/ahabd")({
  head: () => createSeoMeta({
    title: "AHABD – Acoustic Hot Axle Box Detector | LorVen Systems",
    description: "Trackside acoustic & thermal sensing layer mapping axle conditions for rolling stock.",
    path: "/products/wagons/ahabd",
  }),
  component: AhabdRoute,
});

function AhabdRoute() {
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

  const features = [
    {
      title: "Builds on the existing installation",
      desc: "An identity layer over the trackside temperature sensing already in place — it complements it, it does not replace it.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Within the operating envelope",
      desc: "Trains are not slowed; the identified record is available within the time the surrounding process already allows.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "It does not guess",
      desc: "Where an identity cannot be established with confidence, that is reported as such — an honest gap, never a fabricated attribution.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Actionable and auditable",
      desc: "Identified records delivered to an operations dashboard, flagged coach-wise, and designed to stand up to scrutiny after the fact.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
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
            src={wagons}
            alt="AHABD — Advanced Hot Axle Box Detection"
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
                <li><Link to="/products/wagons" className="hover:text-white transition-colors">Rolling Stock</Link></li>
                <li className="text-white/20 font-light">&gt;</li>
                <li className="text-white">AHABD</li>
              </ol>
            </nav>

            <div className="space-y-3">
              <h1 className="text-3xl md:text-5xl lg:text-[54px] font-light uppercase tracking-tight leading-tight text-white max-w-4xl">
                Advanced Hot Axle Box Detection (AHABD)
              </h1>
            </div>

            <p className="text-base md:text-lg text-white/90 leading-relaxed font-light max-w-3xl border-l-2 border-steel/40 pl-6 pt-2">
              Trackside instrumentation already records every axle's temperature as a train passes — but readings are held against bare axle numbers. AHABD establishes which coach each temperature reading belongs to.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50 text-[9px] uppercase tracking-[0.2em] font-bold select-none pointer-events-none animate-bounce">
          <span>Explore AHABD</span>
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
            <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">PRODUCTS — ROLLING STOCK</span>
            <h2 className="text-3xl md:text-4xl font-extralight leading-tight text-ink uppercase">
              AHABD — Advanced Hot Axle Box Detection
            </h2>
            <div className="border-t border-rule/20 pt-6 space-y-4">
              <p className="text-lg md:text-xl text-black leading-relaxed font-light">
                Trackside instrumentation already records axle temperatures as a train passes, but readings are linked to bare axle numbers. A hot axle box can be detected, yet cannot be reliably tied to a specific coach, making it difficult to act on, escalate, or retain as a record.
              </p>
              <p className="text-base text-ink-muted leading-relaxed font-light">
                For every train passing a monitoring point, AHABD establishes which coach each temperature reading belongs to, delivering a complete, identified record: each coach named, each axle temperature attached, and overheating flagged for attention.
              </p>
              <p className="text-sm text-ink-muted leading-relaxed font-mono uppercase tracking-wider pt-2">
                Under staged development — core capability verification in progress
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-12 lg:col-span-5 gsap-reveal">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface rounded border border-rule/10 shadow-lg">
              <img
                src={wagons}
                alt="AHABD Wayside Detection System"
                className="h-full w-full object-cover select-none pointer-events-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Problem → Solution Narrative Panels */}
      <section className="bg-section border-t border-rule/20 py-12 md:py-16">
        <div className="container-editorial space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 gsap-reveal">
            {/* Left Panel: The Gap */}
            <div className="bg-bg p-8 md:p-10 border border-rule/25 rounded shadow-sm space-y-4 flex flex-col group hover:border-steel transition-all duration-300">
              <h3 className="text-xl font-bold text-ink uppercase tracking-tight">The Gap</h3>
              <p className="text-sm md:text-base text-ink/80 leading-relaxed font-light border-t border-rule/20 pt-4">
                Trackside instrumentation already records axle temperatures as a train passes, but readings are linked to bare axle numbers. A hot axle box can be detected, yet cannot be reliably tied to a specific coach, making it difficult to act on, escalate, or retain as a record.
              </p>
            </div>

            {/* Right Panel: What AHABD Does */}
            <div className="bg-bg p-8 md:p-10 border border-rule/25 rounded shadow-sm space-y-4 flex flex-col group hover:border-steel transition-all duration-300">
              <h3 className="text-xl font-bold text-ink uppercase tracking-tight">What AHABD Does</h3>
              <p className="text-sm md:text-base text-ink/80 leading-relaxed font-light border-t border-rule/20 pt-4">
                For every train passing a monitoring point, AHABD establishes which coach each temperature reading belongs to, delivering a complete, identified record: each coach named, each axle temperature attached, and overheating flagged for attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Features Section */}
      <section className="bg-bg border-t border-rule/20 py-12 md:py-16">
        <div className="container-editorial space-y-12">
          <div className="gsap-reveal space-y-4">
            <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">CAPABILITIES</span>
            <h2 className="text-3xl md:text-4xl font-light leading-snug text-ink uppercase">
              Features
            </h2>
          </div>

          {/* 2x2 Grid */}
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
