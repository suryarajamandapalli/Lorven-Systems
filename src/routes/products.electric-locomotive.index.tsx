import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PageIndex } from "@/components/site/PageIndex";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Assets
import locoHero from "@/assets/loco-hero-real.jpg";
import simulator from "@/assets/simulator.jpg";
import depot from "@/assets/depot.jpg";
import electricalCabinet from "@/assets/electrical-cabinet.jpg";
import coachThumb from "@/assets/coach-build.jpg";

export const Route = createFileRoute("/products/electric-locomotive/")({
  head: () => ({
    meta: [
      { title: "Electric Locomotive — LorVen Systems" },
      { name: "description", content: "High-voltage traction, auxiliary power, and advanced driver interfaces for mainline electric locomotives." },
    ],
  }),
  component: LocoProductPage,
});

function LocoProductPage() {
  useGSAP(() => {
    gsap.utils.toArray(".gsap-reveal").forEach((elem: any) => {
      gsap.fromTo(
        elem,
        { y: 30, opacity: 0 },
        {
          scrollTrigger: { trigger: elem, start: "top 88%", toggleActions: "play none none reverse" },
          y: 0, opacity: 1, duration: 1.2, ease: "power2.out",
        }
      );
    });

    // Horizontal Scroll Section
    const horizontalSections = gsap.utils.toArray(".horizontal-item");
    if (horizontalSections.length > 0) {
      gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".horizontal-container",
          pin: true,
          scrub: 1,
          snap: 1 / (horizontalSections.length - 1),
          end: () => "+=" + (document.querySelector(".horizontal-container")?.scrollWidth || 2000),
        }
      });
    }

    setTimeout(() => ScrollTrigger.refresh(), 500);
  }, []);

  return (
    <div className="bg-bg text-ink selection:bg-ink selection:text-on-dark antialiased">
      
      {/* 1. HERO SECTION */}
      <PageHero
        eyebrow="PRODUCTS"
        title="Electric Locomotive"
        lede="High-voltage traction, auxiliary power management, and advanced driver interfaces built for the harsh railway operating environment."
        image={locoHero}
      />

      <PageIndex
        columns={[
          {
            title: "IoT & Energy Management",
            items: [
              { label: "RDPMS", to: "/products/snt/rdpms", active: false },
              { label: "IPS", to: "/products/snt/ips", active: false },
              { label: "IFD", to: "/products/electric-locomotive/ifd", active: false },
              { label: "WLI", to: "/products/wagons/wli", active: false },
            ],
          },
          {
            title: "Signalling & Telecom",
            items: [
              { label: "All Signalling & Telecom", to: "/products/snt", active: false },
              { label: "RDPMS", to: "/products/snt/rdpms", active: false },
              { label: "IPS", to: "/products/snt/ips", active: false },
            ],
          },
          {
            title: "Coaches & Wagons",
            items: [
              { label: "All Coaches", to: "/products/coaches", active: false },
              { label: "All Wagons", to: "/products/wagons", active: false },
              { label: "WLI", to: "/products/wagons/wli", active: false },
              { label: "AHABD", to: "/products/wagons/ahabd", active: false },
            ],
          },
          {
            title: "Training Simulators",
            items: [
              { label: "Driving Simulators", to: "/products/electric-locomotive/simulators", active: false },
            ],
          },
        ]}
      />

      {/* 2. ENGINEERING PHILOSOPHY (Dynamic Offset) */}
      <section className="py-20 md:py-28 bg-bg">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 gsap-reveal">
              <span className="eyebrow block mb-8">Philosophy</span>
              <h2 className="text-3xl md:text-4xl font-light leading-snug text-ink mb-6 uppercase">
                Taming thousands of amps.
              </h2>
            </div>
            <div className="lg:col-span-7 gsap-reveal">
              <p className="text-base md:text-lg text-ink-muted font-light leading-relaxed mb-6">
                An electric locomotive is an incredibly harsh electrical environment. High-voltage transients, extreme EMI, and relentless mechanical vibration are constants.
              </p>
              <p className="text-base md:text-lg text-ink-muted font-light leading-relaxed">
                LorVen designs the onboard intelligence that safely distributes auxiliary power, interfaces with the driver cab, and processes fault diagnostics in real-time. Our systems ensure that a locomotive doesn't just pull weight, but does so with continuous digital awareness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SYSTEMS (Horizontal Motion Layout in Standard Ink Tones) */}
      <section className="horizontal-container bg-ink text-on-dark h-[100svh] flex flex-col justify-center overflow-hidden border-y border-rule/10">
        <div className="px-[clamp(1.25rem,4vw,4rem)] xl:px-24 mb-12 shrink-0">
          <span className="eyebrow !text-white/40">Onboard Technologies</span>
        </div>
        
        <div className="flex w-[300vw] md:w-[200vw] lg:w-[150vw] h-[60vh]">
          {/* Item 1 */}
          <div className="horizontal-item w-[100vw] md:w-[50vw] h-full flex flex-col px-[clamp(1.25rem,4vw,4rem)] border-r border-white/10 relative">
            <div className="absolute inset-0 z-0 opacity-10">
              <img src={electricalCabinet} alt="Auxiliary Panels" className="w-full h-full object-cover select-none pointer-events-none" />
            </div>
            <div className="relative z-10 flex flex-col h-full justify-end pb-12">
              <span className="text-6xl font-light text-white/10 mb-8 block">01</span>
              <h3 className="text-3xl font-light text-white mb-4 uppercase">Auxiliary Control Panels</h3>
              <p className="text-base text-white/60 font-light max-w-sm">
                Managing power distribution for compressors, blowers, and onboard electronics. Built with high-current busbars and modular contactors for rapid swap-outs.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="horizontal-item w-[100vw] md:w-[50vw] h-full flex flex-col px-[clamp(1.25rem,4vw,4rem)] border-r border-white/10 relative bg-black/40">
            <div className="relative z-10 flex flex-col h-full justify-end pb-12">
              <span className="text-6xl font-light text-white/10 mb-8 block">02</span>
              <h3 className="text-3xl font-light text-white mb-4 uppercase">Driver Desk Interfaces</h3>
              <p className="text-base text-white/60 font-light max-w-sm">
                Ergonomic, highly reliable master controllers, switch panels, and indicator clusters designed to withstand millions of physical actuations.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="horizontal-item w-[100vw] md:w-[50vw] h-full flex flex-col px-[clamp(1.25rem,4vw,4rem)] relative">
            <div className="absolute inset-0 z-0 opacity-20">
              <img src={simulator} alt="Simulators" className="w-full h-full object-cover mix-blend-screen select-none pointer-events-none" />
            </div>
            <div className="relative z-10 flex flex-col h-full justify-end pb-12">
              <span className="text-6xl font-light text-white/10 mb-8 block">03</span>
              <h3 className="text-3xl font-light text-white mb-4 uppercase">Training Simulators</h3>
              <p className="text-base text-white/60 font-light max-w-sm">
                Full-scale, hardware-in-the-loop cab simulators providing photorealistic route rendering and precise pneumatic brake emulation for pilot training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SPECIFICATIONS (Editorial Typographic Flow) */}
      <section className="py-20 md:py-28 bg-section border-t border-b border-rule">
        <div className="container-editorial">
          <div className="mb-20 gsap-reveal">
            <span className="eyebrow block mb-4">Engineering Standards</span>
            <h2 className="text-3xl font-light text-ink uppercase">Built for the Indian Railways.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
            <div className="space-y-12">
              <div className="gsap-reveal border-b border-rule pb-8">
                <h4 className="text-xl text-ink font-medium mb-3 uppercase">Vibration & Shock</h4>
                <p className="text-sm md:text-base text-ink-muted font-light leading-relaxed">
                  Compliant with IEC 61373 categories. Enclosures and PCB mounts are finite-element optimized to prevent resonant frequency coupling on the bogie and carbody.
                </p>
              </div>
              <div className="gsap-reveal border-b border-rule pb-8">
                <h4 className="text-xl text-ink font-medium mb-3 uppercase">Operating Temperatures</h4>
                <p className="text-sm md:text-base text-ink-muted font-light leading-relaxed">
                  Rated for -25°C to +70°C without active cooling. We utilize high-temperature industrial grade components and thick-film thermal management strategies.
                </p>
              </div>
            </div>
            
            <div className="space-y-12">
              <div className="gsap-reveal border-b border-rule pb-8">
                <h4 className="text-xl text-ink font-medium mb-3 uppercase">EMC / EMI Compliance</h4>
                <p className="text-sm md:text-base text-ink-muted font-light leading-relaxed">
                  Certified to EN 50121-3-2. Our power supplies and microcontrollers are heavily shielded to reject transient noise generated by 25kV pantograph arcs and traction motors.
                </p>
              </div>
              <div className="gsap-reveal border-b border-rule pb-8">
                <h4 className="text-xl text-ink font-medium mb-3 uppercase">Fire Safety & Toxicity</h4>
                <p className="text-sm md:text-base text-ink-muted font-light leading-relaxed">
                  All cables, terminal blocks, and non-metallic enclosures comply with EN 45545-2 HL3 requirements for low smoke and zero halogen emissions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FULL WIDTH INDUSTRIAL SHOT */}
      <section className="w-full h-[60vh] overflow-hidden gsap-reveal">
        <img src={depot} alt="Electric Loco Depot" className="w-full h-full object-cover" />
      </section>

      {/* 6. RELATED PRODUCTS */}
      <section className="py-20 md:py-28 bg-bg border-t border-rule">
        <div className="container-editorial grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="gsap-reveal hidden md:block overflow-hidden h-[40vh] bg-surface rounded-xl border border-rule/10 shadow-sm">
            <img src={coachThumb} alt="Coaches" className="w-full h-full object-cover opacity-85 hover:scale-105 transition-all duration-700" />
          </div>
          <div className="gsap-reveal">
            <span className="eyebrow block mb-8">Related Domain</span>
            <h2 className="text-3xl md:text-4xl font-light text-ink mb-6 uppercase">Passenger Coaches</h2>
            <p className="text-base md:text-lg text-ink-muted font-light mb-10 max-w-md">
              Step from the locomotive into the trainset. Discover our high-reliability passenger information systems, onboard diagnostics, and cabin comforts.
            </p>
            <Link to="/products/coaches" className="group flex items-center gap-4 border-b border-rule pb-2 text-sm uppercase tracking-[0.2em] text-ink hover:text-steel hover:border-steel w-max transition-colors">
              Continue to Coaches <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="bg-ink text-on-dark py-20 md:py-28 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none" />
        <div className="container-editorial relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center space-y-6 gsap-reveal">
          <span className="eyebrow !text-white/40 block">critical systems</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-snug text-white uppercase tracking-wide">
            Built for Critical Missions.
          </h2>
          <p className="text-base md:text-lg text-white/70 font-light leading-relaxed max-w-2xl">
            Elevate your rolling stock with onboard technology designed for zero-defect operations.
          </p>
          <div className="pt-4">
            <Link to="/contact" className="group inline-flex items-center justify-center px-8 py-4 border border-white/20 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-ink transition-colors duration-300 rounded-sm shadow-md">
              Talk With Our Engineering Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
