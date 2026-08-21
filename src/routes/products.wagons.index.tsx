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
import wagonsHero from "@/assets/wagons.jpg";
import depot from "@/assets/depot.jpg";
import factoryHall from "@/assets/factory-hall.jpg";
import sntHero from "@/assets/snt-hero-real.jpg";

export const Route = createFileRoute("/products/wagons/")({
  head: () => ({
    meta: [
      { title: "Rolling Stock — LorVen Systems" },
      { name: "description", content: "Advanced monitoring and inspection systems for railway rolling stock, including freight wagons and passenger coaches." },
    ],
  }),
  component: WagonsProductPage,
});

function WagonsProductPage() {
  useGSAP(() => {
    gsap.utils.toArray(".gsap-reveal").forEach((elem: any) => {
      gsap.fromTo(
        elem,
        { y: 30, opacity: 0 },
        {
          scrollTrigger: { trigger: elem, start: "top 85%", toggleActions: "play none none reverse" },
          y: 0, opacity: 1, duration: 1, ease: "power2.out",
        }
      );
    });
    
    setTimeout(() => ScrollTrigger.refresh(), 500);
  }, []);

  return (
    <div className="bg-bg text-ink selection:bg-ink selection:text-on-dark antialiased">
      
      {/* 1. HERO & CHAPTER HEADER */}
      <PageHero
        eyebrow="PRODUCTS"
        title="Rolling Stock"
        lede="Advanced monitoring and inspection solutions for coaches and wagons, including Automatic Hot Axle Box Detection and IoT-based onboard systems engineered for heavy-haul operational safety."
        image={wagonsHero}
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
            title: "Rolling Stock",
            items: [
              { label: "All Rolling Stock", to: "/products/wagons", active: true },
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

      {/* 2. DATA POINTS (High Impact) */}
      <section className="py-20 md:py-28 bg-section border-b border-rule">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-rule/25">
            <div className="pt-8 md:pt-0 md:px-8 first:px-0 text-center gsap-reveal">
              <span className="text-5xl md:text-6xl font-light text-ink block mb-4">100+</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-ink-muted font-semibold">Tons Per Wagon</span>
            </div>
            <div className="pt-8 md:pt-0 md:px-8 text-center gsap-reveal">
              <span className="text-5xl md:text-6xl font-light text-ink block mb-4">24/7</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-ink-muted font-semibold">Continuous Monitoring</span>
            </div>
            <div className="pt-8 md:pt-0 md:px-8 text-center gsap-reveal">
              <span className="text-5xl md:text-6xl font-light text-ink block mb-4">Zero</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-ink-muted font-semibold">Unplanned Derailments</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PHILOSOPHY (Standard Light Grid) */}
      <section className="py-20 md:py-28 bg-bg border-b border-rule">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 gsap-reveal">
            <h2 className="text-3xl md:text-4xl font-light leading-snug text-ink uppercase">
              Preventing catastrophic failure at speed.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 gsap-reveal">
            <p className="text-base md:text-lg text-ink-muted font-light leading-relaxed mb-8">
              A seized axle on a fully loaded freight train doesn't just stop operations; it destroys infrastructure. In heavy freight, maintenance cannot be reactive.
            </p>
            <p className="text-base md:text-lg text-ink-muted font-light leading-relaxed">
              LorVen engineers Trackside Acoustic Condition Monitoring Systems (TACMS) and Hot Box Detectors. We use highly sensitive acoustic arrays and infrared optics to detect micro-fractures in bearings and excessive heat generation while the train is moving at line speed, notifying the control room before failure occurs.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CORE SYSTEMS (Alternating sections in standard off-white) */}
      <section className="border-b border-rule bg-bg">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-rule">
          <div className="p-12 md:p-20 flex flex-col justify-center gsap-reveal">
            <span className="num-mono text-[10px] text-ink-muted uppercase tracking-[0.2em] mb-8 block font-semibold">System 01</span>
            <h3 className="text-3xl font-light text-ink mb-6 uppercase">Acoustic Bearing Detectors</h3>
            <p className="text-base text-ink-muted leading-relaxed font-light">
              Microphone arrays placed along the trackside that record the acoustic signature of every passing bearing. Proprietary DSP algorithms isolate fault frequencies—such as a cracked inner race or spalling—from the immense background noise of a freight train.
            </p>
          </div>
          <div className="h-[40vh] lg:h-auto border-l border-rule overflow-hidden bg-surface">
            <img src={depot} alt="Trackside" className="w-full h-full object-cover grayscale-[30%] opacity-85 select-none pointer-events-none" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-rule">
          <div className="h-[40vh] lg:h-auto border-r border-rule overflow-hidden bg-surface order-2 lg:order-1">
            <img src={factoryHall} alt="Wagons" className="w-full h-full object-cover grayscale-[30%] opacity-85 select-none pointer-events-none" />
          </div>
          <div className="p-12 md:p-20 flex flex-col justify-center order-1 lg:order-2 gsap-reveal">
            <span className="num-mono text-[10px] text-ink-muted uppercase tracking-[0.2em] mb-8 block font-semibold">System 02</span>
            <h3 className="text-3xl font-light text-ink mb-6 uppercase">Hot Box & Wheel Detectors</h3>
            <p className="text-base text-ink-muted leading-relaxed font-light">
              Infrared scanning systems that measure the exact temperature of journal bearings and wheels. Our electronics aggregate this data, compensating for ambient conditions, to instantly flag any axle operating outside safe thermal limits.
            </p>
          </div>
        </div>

      </section>

      {/* 5. SPECIFICATIONS (Standardized list) */}
      <section className="py-20 md:py-28 bg-section border-b border-rule">
        <div className="container-editorial">
          <span className="eyebrow block mb-16 gsap-reveal">Technical Capabilities</span>
          
          <div className="space-y-12">
            {[
              { title: "Speed Rating", val: "Up to 160 km/h", desc: "Accurate acoustic and thermal reading on fully loaded trains passing at maximum line speeds." },
              { title: "Data Processing", val: "Edge AI Analysis", desc: "Raw acoustic and thermal data is processed trackside. Only critical fault alerts and analytical metadata are transmitted to the control room, saving bandwidth." },
              { title: "Environmental", val: "IP67 Enclosures", desc: "Electronics housed in heavy-duty stainless steel, entirely protected from monsoons, coal dust, and severe track vibrations." }
            ].map((spec) => (
              <div key={spec.title} className="grid grid-cols-1 md:grid-cols-12 gap-6 border-b border-rule/10 pb-10 last:border-b-0 last:pb-0 gsap-reveal">
                <div className="md:col-span-4">
                  <span className="text-lg font-medium text-ink uppercase">{spec.title}</span>
                </div>
                <div className="md:col-span-8">
                  <h4 className="text-2xl md:text-3xl font-light text-ink">{spec.val}</h4>
                  <p className="text-sm md:text-base text-ink-muted mt-2 font-light">{spec.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. RELATED PRODUCTS */}
      <section className="py-20 md:py-28 bg-bg border-b border-rule">
        <div className="container-editorial grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="gsap-reveal hidden md:block overflow-hidden h-[40vh] bg-surface rounded-xl border border-rule/10 shadow-sm">
            <img src={sntHero} alt="Signalling" className="w-full h-full object-cover opacity-85 hover:scale-105 transition-all duration-700 select-none pointer-events-none" />
          </div>
          <div className="gsap-reveal">
            <span className="eyebrow block mb-8">Related Domain</span>
            <h2 className="text-3xl md:text-4xl font-light text-ink mb-6 uppercase">Signalling & Telecom</h2>
            <p className="text-base md:text-lg text-ink-muted font-light mb-10 max-w-md">
              The data from our trackside wagon monitors feeds directly into the larger signalling network. Explore the systems that control the mainline.
            </p>
            <Link to="/products/snt" className="group flex items-center gap-4 border-b border-rule pb-2 text-sm uppercase tracking-[0.2em] text-ink hover:text-steel hover:border-steel w-max transition-colors">
              Continue to Signalling <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="bg-ink text-on-dark py-20 md:py-28 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none" />
        <div className="container-editorial relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center space-y-6 gsap-reveal">
          <span className="eyebrow !text-white/40 block">freight safety</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-snug text-white uppercase tracking-wide">
            Protect Your Assets.
          </h2>
          <p className="text-base md:text-lg text-white/70 font-light leading-relaxed max-w-2xl">
            Ensure the safety and efficiency of your heavy freight operations with LorVen's monitoring systems.
          </p>
          <div className="pt-4">
            <Link to="/contact" className="group inline-flex items-center justify-center px-8 py-4 border border-white/20 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-ink transition-colors duration-300 rounded-sm shadow-md">
              Contact Engineering Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
