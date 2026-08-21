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
import coachHero from "@/assets/coach-build.jpg";
import smtLine from "@/assets/smt-line.jpg";
import depot from "@/assets/depot.jpg";
import factoryHall from "@/assets/factory-hall.jpg";
import wagons from "@/assets/wagons.jpg";

export const Route = createFileRoute("/products/coaches")({
  head: () => ({
    meta: [
      { title: "Passenger Coaches — LorVen Systems" },
      { name: "description", content: "Human-centric engineering for passenger coaches. HVAC controllers, passenger information systems, and intelligent lighting." },
    ],
  }),
  component: CoachesProductPage,
});

function CoachesProductPage() {
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
    
    setTimeout(() => ScrollTrigger.refresh(), 500);
  }, []);

  return (
    <div className="bg-bg text-ink selection:bg-ink selection:text-on-dark antialiased">
      
      {/* 1. HERO SECTION */}
      <PageHero
        eyebrow="PRODUCTS"
        title="Passenger Coaches"
        lede="HVAC controllers, passenger information networks, and intelligent lighting systems engineered for passenger safety and comfort."
        image={coachHero}
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
              { label: "All Rolling Stock", to: "/products/wagons", active: false },
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

      {/* 2. PHILOSOPHY (Clean Centered Text) */}
      <section className="py-20 md:py-28 bg-bg border-b border-rule">
        <div className="container-editorial flex justify-center text-center gsap-reveal">
          <div className="max-w-3xl">
            <p className="text-xl md:text-2xl text-ink font-light leading-relaxed mb-6">
              Unlike a locomotive, a passenger coach is an environment for human beings. The engineering must be invisible, silent, and flawlessly consistent. 
            </p>
            <p className="text-sm md:text-base text-ink-muted font-light leading-relaxed">
              LorVen engineers the subsystems that make modern train travel possible. From the microprocessors regulating the HVAC compressors to the networked displays providing real-time journey data, we build the nervous system of the passenger experience.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CORE SYSTEMS (Symmetrical 50/50 blocks in standard off-white) */}
      <section className="bg-bg">
        
        {/* Block 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-rule">
          <div className="h-[40vh] lg:h-auto border-r border-rule bg-surface overflow-hidden">
            <img src={depot} alt="HVAC Systems" className="w-full h-full object-cover grayscale-[30%] opacity-85 hover:scale-105 transition-transform duration-1000 select-none pointer-events-none" />
          </div>
          <div className="p-12 md:p-20 flex flex-col justify-center gsap-reveal">
            <span className="num-mono text-[10px] text-ink-muted uppercase tracking-[0.2em] mb-6 block font-semibold">01 / Climate Control</span>
            <h3 className="text-3xl font-light text-ink mb-6 uppercase">HVAC Microprocessors</h3>
            <p className="text-base text-ink-muted leading-relaxed font-light">
              Managing heavy electrical loads seamlessly. Our RMPU (Roof Mounted Package Unit) controllers handle temperature regulation, compressor sequencing, and fault diagnosis without drawing attention to themselves.
            </p>
          </div>
        </div>

        {/* Block 2 (Reversed) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-rule">
          <div className="p-12 md:p-20 flex flex-col justify-center order-2 lg:order-1 gsap-reveal">
            <span className="num-mono text-[10px] text-ink-muted uppercase tracking-[0.2em] mb-6 block font-semibold">02 / Passenger Information</span>
            <h3 className="text-3xl font-light text-ink mb-6 uppercase">PIS & Display Networks</h3>
            <p className="text-base text-ink-muted leading-relaxed font-light">
              High-visibility LED and LCD matrix displays driven by ruggedized ethernet backbones. Delivering GPS-synchronized journey data, automated announcements, and critical emergency messaging.
            </p>
          </div>
          <div className="h-[40vh] lg:h-auto border-l border-rule bg-surface overflow-hidden order-1 lg:order-2">
            <img src={factoryHall} alt="Displays" className="w-full h-full object-cover grayscale-[30%] opacity-85 hover:scale-105 transition-transform duration-1000 select-none pointer-events-none" />
          </div>
        </div>

        {/* Block 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-rule">
          <div className="h-[40vh] lg:h-auto border-r border-rule bg-surface overflow-hidden">
            <img src={smtLine} alt="Lighting" className="w-full h-full object-cover grayscale-[30%] opacity-85 hover:scale-105 transition-transform duration-1000 select-none pointer-events-none" />
          </div>
          <div className="p-12 md:p-20 flex flex-col justify-center gsap-reveal">
            <span className="num-mono text-[10px] text-ink-muted uppercase tracking-[0.2em] mb-6 block font-semibold">03 / Ambiance</span>
            <h3 className="text-3xl font-light text-ink mb-6 uppercase">Intelligent Lighting</h3>
            <p className="text-base text-ink-muted leading-relaxed font-light">
              Energy-efficient LED drivers that adapt to ambient conditions. Providing flicker-free illumination that meets strict railway photobiological safety standards while significantly reducing power draw.
            </p>
          </div>
        </div>

      </section>

      {/* 4. APPLICATIONS (Elegant Large Cards) */}
      <section className="py-20 md:py-28 bg-section border-b border-rule">
        <div className="container-editorial">
          <span className="eyebrow block mb-16 text-center gsap-reveal">Coach Platforms</span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-bg border border-rule/15 p-10 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 gsap-reveal rounded-xl">
              <h4 className="text-xl font-normal text-ink mb-4 uppercase">LHB Coaches</h4>
              <p className="text-sm md:text-base text-ink-muted leading-relaxed font-light">
                We supply switchboard cabinets and climate controllers for the Linke Hofmann Busch platform, the standard-bearer for high-speed intercity travel on the Indian Railways.
              </p>
            </div>
            
            <div className="bg-bg border border-rule/15 p-10 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 gsap-reveal rounded-xl">
              <h4 className="text-xl font-normal text-ink mb-4 uppercase">EMU / MEMU Trains</h4>
              <p className="text-sm md:text-base text-ink-muted leading-relaxed font-light">
                High-density commuter networks rely on our robust passenger announcement systems and door-closing warning modules designed for millions of cycles.
              </p>
            </div>
            
            <div className="bg-bg border border-rule/15 p-10 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 gsap-reveal rounded-xl">
              <h4 className="text-xl font-normal text-ink mb-4 uppercase">Vande Bharat Express</h4>
              <p className="text-sm md:text-base text-ink-muted leading-relaxed font-light">
                Contributing to India's premier semi-high-speed trainsets with advanced networked electronics and compact, high-efficiency power distribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. QUALITY & LIFECYCLE (Timeline layout) */}
      <section className="py-20 md:py-28 bg-bg border-b border-rule">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4 gsap-reveal space-y-4">
              <span className="eyebrow block">Quality Engineering</span>
              <h2 className="text-3xl font-light text-ink uppercase">Designed to Outlast.</h2>
              <p className="text-sm md:text-base text-ink-muted leading-relaxed font-light">
                Rolling stock represents a massive capital investment. The electronics inside must remain viable, maintainable, and safe for decades.
              </p>
            </div>
            
            <div className="md:col-span-7 md:col-start-6 relative">
              <div className="absolute left-[7px] top-2 bottom-0 w-px bg-rule hidden md:block"></div>
              
              <div className="space-y-12">
                <div className="relative pl-8 md:pl-12 gsap-reveal">
                  <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border border-ink bg-bg hidden md:block"></div>
                  <h4 className="text-xl font-medium text-ink mb-3 uppercase">Component Selection</h4>
                  <p className="text-sm md:text-base text-ink-muted leading-relaxed font-light">
                    We select automotive or military-grade silicon capable of withstanding severe thermal cycling without solder fatigue.
                  </p>
                </div>
                
                <div className="relative pl-8 md:pl-12 gsap-reveal">
                  <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border border-rule bg-bg hidden md:block"></div>
                  <h4 className="text-xl font-medium text-ink mb-3 uppercase">Conformal Coating</h4>
                  <p className="text-sm md:text-base text-ink-muted leading-relaxed font-light">
                    Every PCB is coated to protect against the high humidity, condensation, and metallic dust prevalent in railway environments.
                  </p>
                </div>
                
                <div className="relative pl-8 md:pl-12 gsap-reveal">
                  <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border border-rule bg-bg hidden md:block"></div>
                  <h4 className="text-xl font-medium text-ink mb-3 uppercase">Obsolescence Management</h4>
                  <p className="text-sm md:text-base text-ink-muted leading-relaxed font-light">
                    We guarantee form-fit-function replacements. If a component goes End-of-Life, we redesign the board to ensure the operator never faces a grounded coach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. RELATED PRODUCTS */}
      <section className="py-20 md:py-28 bg-section border-b border-rule">
        <div className="container-editorial grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="gsap-reveal">
            <span className="eyebrow block mb-8">Related Domain</span>
            <h2 className="text-3xl md:text-4xl font-light text-ink mb-6 uppercase">Freight Wagons</h2>
            <p className="text-base md:text-lg text-ink-muted font-light mb-10 max-w-md">
              From passenger comfort to heavy industrial freight. Discover our condition monitoring and telemetry systems for freight wagons.
            </p>
            <Link to="/products/wagons" className="group flex items-center gap-4 border-b border-rule pb-2 text-sm uppercase tracking-[0.2em] text-ink hover:text-steel hover:border-steel w-max transition-colors">
              Continue to Wagons <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
          <div className="gsap-reveal hidden md:block overflow-hidden h-[40vh] bg-surface rounded-xl border border-rule/10 shadow-sm">
            <img src={wagons} alt="Wagons" className="w-full h-full object-cover opacity-85 hover:scale-105 transition-all duration-700 select-none pointer-events-none" />
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="bg-ink text-on-dark py-20 md:py-28 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none" />
        <div className="container-editorial relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center space-y-6 gsap-reveal">
          <span className="eyebrow !text-white/40 block">Passenger Services</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-snug text-white uppercase tracking-wide">
            Engineering the Passenger Experience.
          </h2>
          <p className="text-base md:text-lg text-white/70 font-light leading-relaxed max-w-2xl">
            Ensure your rolling stock delivers absolute reliability for every journey.
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
