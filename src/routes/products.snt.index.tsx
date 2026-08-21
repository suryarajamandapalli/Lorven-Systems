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
import sntHero from "@/assets/snt-hero-real.jpg";
import pcbMacro from "@/assets/pcb-macro.jpg";
import smtLine from "@/assets/smt-line.jpg";
import factoryHall from "@/assets/factory-hall.jpg";
import depot from "@/assets/depot.jpg";
import locoThumb from "@/assets/loco-card-thumb.png";

export const Route = createFileRoute("/products/snt/")({
  head: () => ({
    meta: [
      { title: "Signalling & Telecom — LorVen Systems" },
      { name: "description", content: "Mission-critical signalling and telecommunication systems for modern railway networks." },
    ],
  }),
  component: SNTProductPage,
});

function SNTProductPage() {
  useGSAP(() => {
    gsap.utils.toArray(".gsap-reveal").forEach((elem: any) => {
      gsap.fromTo(
        elem,
        { y: 30, opacity: 0 },
        {
          scrollTrigger: { trigger: elem, start: "top 88%", toggleActions: "play none none reverse" },
          y: 0, opacity: 1, duration: 1, ease: "power2.out",
        }
      );
    });

    // Sticky image section
    ScrollTrigger.create({
      trigger: ".sticky-container",
      start: "top 20%",
      end: "bottom 80%",
      pin: ".sticky-image",
    });

    setTimeout(() => ScrollTrigger.refresh(), 500);
  }, []);

  return (
    <div className="bg-bg text-ink selection:bg-ink selection:text-on-dark antialiased">
      
      {/* 1. HERO & CHAPTER HEADER */}
      <PageHero
        eyebrow="PRODUCTS"
        title="Signalling & Telecom"
        lede="Mission-critical signalling, power supply, and remote telemetry systems designed for absolute reliability in modern rail networks."
        image={sntHero}
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
              { label: "All Signalling & Telecom", to: "/products/snt", active: true },
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

      {/* 2. PRODUCT OVERVIEW (Architectural Grid) */}
      <section className="py-20 md:py-28 bg-bg">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
          <div className="col-span-12 lg:col-span-4 gsap-reveal">
            <span className="eyebrow">Overview</span>
          </div>
          <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12 gsap-reveal">
            <div>
              <p className="text-xl text-ink font-light leading-relaxed mb-6">
                Railway signalling is unforgiving. A failure in communication or logic doesn't just halt operations; it compromises safety. 
              </p>
              <p className="text-base text-ink-muted font-light leading-relaxed">
                LorVen’s SNT portfolio is built entirely around fail-safe architectures. From Integrated Power Supplies (IPS) that guarantee uninterrupted wayside operation, to ruggedized Data Loggers that record microsecond-level events, we engineer the invisible nervous system of modern railways.
              </p>
            </div>
            <div className="border-l border-rule pl-8 flex flex-col justify-center">
              <span className="text-5xl font-light text-ink block mb-2">99.999%</span>
              <span className="text-[10px] text-ink-muted uppercase tracking-[0.2em] font-semibold">Target Uptime Requirement</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SYSTEMS (Premium Card Grid) */}
      <section className="py-20 md:py-28 bg-section border-t border-b border-rule">
        <div className="container-editorial">
          <span className="eyebrow block mb-16 text-center gsap-reveal">Core Systems</span>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { id: "01", title: "Integrated Power Supply (IPS)", desc: "A centralized, redundant power architecture that replaces fragmented battery banks, providing pristine, highly regulated AC/DC power to critical signalling gears.", link: "/products/snt/ips" },
              { id: "02", title: "Remote Diagnostic & Predictive Maintenance (RDPMS)", desc: "Continuous wayside telemetry, current curves, and relay contact resistance tracking with dual-SIM LTE routing.", link: "/products/snt/rdpms" },
              { id: "03", title: "Track Circuit Equipment", desc: "Fail-safe train detection systems utilizing high-frequency modulation to reliably detect rolling stock presence under extreme ballast resistance variations.", link: "/products/snt" },
              { id: "04", title: "Relay & Logic Panels", desc: "Pre-wired, meticulously routed control panels that form the mechanical logic backbone for stations, interlocking systems, and level crossings.", link: "/products/snt" }
            ].map(sys => (
              <Link key={sys.id} to={sys.link as any} className="bg-white border border-rule/15 p-10 hover:border-rule/35 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 gsap-reveal block group rounded-xl">
                <span className="num-mono text-[10px] text-ink-muted/60 uppercase tracking-[0.2em] mb-8 block">{sys.id}</span>
                <h3 className="text-2xl font-light text-ink mb-4 group-hover:text-steel transition-colors uppercase">{sys.title}</h3>
                <p className="text-sm md:text-base text-ink-muted font-light leading-relaxed">{sys.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS (Sticky Image Layout) */}
      <section className="py-20 md:py-28 bg-bg sticky-container border-b border-rule">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sticky Visual */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="sticky-image top-32 w-full h-[60vh] bg-surface overflow-hidden border border-rule/10 rounded-xl">
              <img src={pcbMacro} alt="Electronics" className="w-full h-full object-cover mix-blend-luminosity opacity-70" />
            </div>
          </div>
  
          {/* Scrolling Content */}
          <div className="lg:col-span-7 space-y-24">
            <div>
              <span className="eyebrow block mb-6">How It Works</span>
              <h2 className="text-4xl font-light text-ink mb-8 uppercase">Fail-Safe by Design.</h2>
              <p className="text-base md:text-lg text-ink-muted font-light leading-relaxed">
                In signalling, there is no acceptable margin for error. If a system cannot verify its own integrity, it must default to its most restrictive state (e.g., turning a signal red). This principle dictates every board we layout and every line of code we compile.
              </p>
            </div>

            <div className="gsap-reveal border-t border-rule/30 pt-8">
              <h3 className="text-2xl font-light text-ink mb-4 uppercase">Hardware Redundancy</h3>
              <p className="text-sm md:text-base text-ink-muted font-light leading-relaxed">
                We employ dual out of two (2oo2) or triple modular redundancy (TMR) on critical microcontrollers. The processors constantly vote on the output; if a discrepancy occurs, the system immediately trips to safe mode.
              </p>
            </div>

            <div className="gsap-reveal border-t border-rule/30 pt-8">
              <h3 className="text-2xl font-light text-ink mb-4 uppercase">Thermal & EMI Immunisation</h3>
              <p className="text-sm md:text-base text-ink-muted font-light leading-relaxed">
                Wayside cabinets bake in 55°C summers and freeze in winters, while sitting next to 25kV traction lines. We use heavy copper planes, conformal coating, and strict component derating to ensure logical integrity isn't destroyed by electrical noise.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. SPECIFICATIONS (Editorial Layout) */}
      <section className="py-20 md:py-28 bg-section border-b border-rule">
        <div className="container-editorial">
          <div className="flex justify-between items-end mb-16 gsap-reveal border-b border-rule/30 pb-6">
            <h2 className="text-3xl font-light text-ink uppercase">Technical Specifications</h2>
            <span className="text-[10px] text-ink-muted uppercase tracking-[0.2em] font-semibold">Data Logger Architecture</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
            {[
              { label: "Input Capacity", value: "Up to 4096 Digital I/O", desc: "Expandable architecture" },
              { label: "Scan Rate", value: "< 16 Milliseconds", desc: "Real-time event capture" },
              { label: "Operating Temp", value: "-10°C to +70°C", desc: "Without forced cooling" },
              { label: "Communication", value: "OFC, E1, Ethernet, GSM", desc: "Multi-protocol routing" },
              { label: "Memory Setup", value: "Solid-State SD / NVRAM", desc: "1 million event capacity" },
              { label: "Certification", value: "RDSO / SPN / 144", desc: "Indian Railways standard" }
            ].map((spec) => (
              <div key={spec.label} className="gsap-reveal border-t border-rule/10 pt-6">
                <span className="block text-ink-muted text-xs uppercase tracking-wider mb-2 font-medium">{spec.label}</span>
                <span className="block text-2xl font-light text-ink">{spec.value}</span>
                <span className="block text-ink-muted text-xs font-light mt-1">{spec.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. APPLICATIONS (Deployments List) */}
      <section className="py-20 md:py-28 bg-bg border-b border-rule">
        <div className="container-editorial">
          <span className="eyebrow block mb-16 gsap-reveal">Deployments</span>

          <div className="space-y-6">
            {[
              { title: "Mainline Interlocking", img: factoryHall, text: "Serving as the heart of station control, ensuring conflicting routes are mechanically and electronically impossible to set." },
              { title: "Wayside Stations", img: smtLine, text: "Distributed power and data aggregation in remote, unmanned locations where maintenance access is difficult." },
              { title: "Level Crossings", img: sntHero, text: "Automated warning systems linking train detection directly to road barrier mechanisms with zero latency." },
            ].map((app, i) => (
              <div key={i} className="group relative overflow-hidden h-[30vh] md:h-[40vh] bg-ink gsap-reveal cursor-default flex items-end p-8 md:p-12 rounded-xl border border-rule/10 shadow-sm">
                <img src={app.img} alt={app.title} className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-105 group-hover:opacity-50 transition-all duration-700 ease-out select-none pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="relative z-10 max-w-2xl text-white">
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-3 uppercase tracking-wide">{app.title}</h3>
                  <p className="text-sm md:text-base text-white/70 font-light hidden md:block">{app.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. RELATED PRODUCTS (Elegant Transition) */}
      <section className="py-20 md:py-28 bg-section border-b border-rule">
        <div className="container-editorial grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="gsap-reveal">
            <span className="eyebrow block mb-8">Related Domain</span>
            <h2 className="text-3xl md:text-4xl font-light text-ink mb-6 uppercase">Electric Locomotive</h2>
            <p className="text-base md:text-lg text-ink-muted font-light mb-10 max-w-md">
              From wayside signals to onboard intelligence. Explore our high-power traction converters, auxiliary panels, and driver cabin interfaces.
            </p>
            <Link to="/products/electric-locomotive" className="group flex items-center gap-4 border-b border-rule pb-2 text-sm uppercase tracking-[0.2em] text-ink hover:text-steel hover:border-steel w-max transition-colors">
              Continue to Electric Loco <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
          <div className="gsap-reveal hidden md:block overflow-hidden h-[40vh] rounded-xl border border-rule/10 shadow-md">
            <img src={locoThumb} alt="Electric Loco" className="w-full h-full object-cover opacity-85 grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="relative h-[60vh] bg-ink flex items-center justify-center overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <img src={depot} alt="Depot" className="w-full h-full object-cover opacity-25 mix-blend-luminosity select-none pointer-events-none" />
        </div>
        <div className="container-editorial relative z-10 flex flex-col items-center text-center gsap-reveal space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white uppercase tracking-wide">
            Where Reliability Matters Most.
          </h2>
          <p className="text-base md:text-lg text-white/70 font-light leading-relaxed max-w-2xl">
            Partner with LorVen Systems for your next signalling deployment or infrastructure upgrade.
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
