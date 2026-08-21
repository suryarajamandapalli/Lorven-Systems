import { createFileRoute, Link } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Assets
import pcbMacro from "@/assets/pcb-macro.jpg";
import depot from "@/assets/depot.jpg";

import { createSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/products/electric-locomotive/ifd")({
  head: () => createSeoMeta({
    title: "IFD – Intelligent Field Device | LorVen Systems",
    description: "Real-time monitoring, energy metering and remote control of railway electrical assets reporting to IR-NIYANTRAC.",
    path: "/products/electric-locomotive/ifd",
  }),
  component: IfdRoute,
});

function IfdRoute() {
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
      title: "Master–Slave architecture",
      desc: "IFD Master aggregates IMCU Slaves over Modbus RS-485/TCP; 4G/5G to IR-NIYANTRAC with Ethernet/Wi-Fi secondary path and automatic switchover.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M12 2v20M17 5H7M19 12H5M17 19H7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Class 0.5s energy metering",
      desc: "Four-quadrant, phase-wise voltage, current, power factor, frequency, active/reactive/apparent power, energy and THD.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Remote asset control",
      desc: "ON/OFF, time-based, running-hours and restricted schedules — executed locally even without connectivity, with power-failure compensation.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Store-and-forward & FOTA/POTA",
      desc: "Minimum 10 days of buffered data with automatic synchronisation; secure remote firmware and configuration updates.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Secure by design",
      desc: "Encrypted communication per CRIS Message Communication Format; hardware AES / SHA-256 / TRNG; TEC IoT security code of practice.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Built for the field",
      desc: "IP-65 enclosure, sunlight-readable LCD, battery backup (4 h Master / 15 min Slave); EMC per EN 50121-4.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
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
            src={pcbMacro}
            alt="IFD — Intelligent Field Device for IR-NIYANTRAC"
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
                <li><Link to="/products/electric-locomotive" className="hover:text-white transition-colors">Electric Locomotive</Link></li>
                <li className="text-white/20 font-light">&gt;</li>
                <li className="text-white">IFD</li>
              </ol>
            </nav>

            <div className="space-y-3">
              <h1 className="text-3xl md:text-5xl lg:text-[54px] font-light uppercase tracking-tight leading-tight text-white max-w-4xl">
                Intelligent Field Device (IFD)
              </h1>
            </div>

            <p className="text-base md:text-lg text-white/90 leading-relaxed font-light max-w-3xl border-l-2 border-steel/40 pl-6 pt-2">
              Real-time monitoring, energy metering and remote control of railway electrical assets — lifts, escalators, platform lighting, pumps, solar plants, high masts and DG sets — reporting to IR-NIYANTRAC, Indian Railways' CRIS-hosted cloud platform, over the oneM2M Common Service Platform.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50 text-[9px] uppercase tracking-[0.2em] font-bold select-none pointer-events-none animate-bounce">
          <span>Explore IFD</span>
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
            <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">PRODUCTS — IOT & ENERGY MANAGEMENT</span>
            <h2 className="text-3xl md:text-4xl font-extralight leading-tight text-ink uppercase">
              IFD — Intelligent Field Device for IR-NIYANTRAC
            </h2>
            <div className="border-t border-rule/20 pt-6">
              <p className="text-lg md:text-xl text-black leading-relaxed font-light">
                Real-time monitoring, energy metering and remote control of railway electrical assets — lifts, escalators, platform lighting, pumps, solar plants, high masts and DG sets — reporting to IR-NIYANTRAC, Indian Railways' CRIS-hosted cloud platform, over the oneM2M Common Service Platform.
              </p>
              <p className="text-sm text-ink-muted leading-relaxed font-mono uppercase tracking-wider mt-4">
                As per RDSO Specification IS/RDSO-PSE/1004:2026 (Rev-0)
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-12 lg:col-span-5 gsap-reveal">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface rounded border border-rule/10 shadow-lg">
              <img
                src={pcbMacro}
                alt="IFD Processing Unit"
                className="h-full w-full object-cover select-none pointer-events-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features Section */}
      <section className="bg-bg border-t border-rule/20 py-12 md:py-16">
        <div className="container-editorial space-y-12">
          <div className="gsap-reveal space-y-4">
            <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">CAPABILITIES</span>
            <h2 className="text-3xl md:text-4xl font-light leading-snug text-ink uppercase">
              Features
            </h2>
          </div>

          {/* 2x3 Grid */}
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
