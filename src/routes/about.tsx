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
import pcbMacro from "@/assets/pcb-macro.jpg";
import smtLine from "@/assets/smt-line.jpg";
import depot from "@/assets/depot.jpg";
import isoCertImg from "@/assets/iso-certificate.jpg";

import { createSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => createSeoMeta({
    title: "About LorVen Systems",
    description: "LorVen Systems Private Limited — Engineering and manufacturing of railway electronic systems, IoT products, signalling gears, and simulators in Hyderabad, India.",
    path: "/about",
  }),
  component: About,
});

function About() {
  useGSAP(() => {
    gsap.utils.toArray(".gsap-reveal").forEach((elem: any) => {
      gsap.fromTo(
        elem,
        { y: 20, opacity: 0 },
        {
          scrollTrigger: {
            trigger: elem,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
        }
      );
    });
  }, []);

  return (
    <div className="bg-bg text-ink selection:bg-ink selection:text-on-dark antialiased">

      {/* Hero */}
      <PageHero
        eyebrow=""
        title="ABOUT LORVEN"
        lede={
          <span className="flex items-center gap-1.5 text-sm font-medium tracking-wide">
            <Link to="/" className="text-white/60 hover:text-white transition-colors cursor-pointer">Home</Link>
            <span className="text-white/35">/</span>
            <span className="text-white/90">About</span>
          </span>
        }
      />

      {/* 1. Who We Are */}
      <section id="who-we-are" className="bg-bg border-t border-rule py-12 md:py-16">
        <div className="container-editorial grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-6 gsap-reveal space-y-4">
            <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">CORPORATE OVERVIEW</span>
            <h2 className="text-2xl md:text-3xl font-light text-ink uppercase">
              Who We Are
            </h2>
            <div className="space-y-3 text-sm text-ink-muted leading-relaxed font-light">
              <p>
                LorVen Systems Private Limited is an engineering and electronics manufacturing company based in Hyderabad, India, with its corporate and business office in Banjara Hills and an engineering and manufacturing facility in Cherlapally.
              </p>
              <p>
                We specialize in the design, development, manufacturing, testing, and field commissioning of safety-critical electronic systems for Indian Railways and industrial applications. Our operations cover IoT products, electric locomotive subsystems, signalling and telecom systems, railway training simulators, and Electronics Manufacturing Services (EMS).
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 gsap-reveal">
            <div className="aspect-[16/10] w-full overflow-hidden bg-surface rounded-xl border border-rule/15 shadow-sm">
              <img src={pcbMacro} alt="Electronics Manufacturing at LorVen Systems" className="h-full w-full object-cover select-none pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Offices */}
      <section id="our-offices" className="bg-section border-t border-rule py-12 md:py-16">
        <div className="container-editorial space-y-8">
          <div className="gsap-reveal space-y-2 max-w-3xl">
            <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">LOCATIONS</span>
            <h2 className="text-2xl md:text-3xl font-light text-ink uppercase">
              Our Offices
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gsap-reveal">

            {/* Registered Office */}
            <div className="p-6 bg-bg border border-rule/20 rounded-xl space-y-3">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-steel uppercase">Registered Office</span>
              </div>
              <div className="space-y-1 text-xs text-ink-muted leading-relaxed font-light">
                <p>Plot No 193/P, Phase IV,</p>
                <p>Cherlapally,</p>
                <p>Medchal Malkajgiri Dist,</p>
                <p>Hyderabad – 500051, Telangana.</p>
              </div>
            </div>

            {/* Corporate & Business Office */}
            <div className="p-6 bg-bg border border-ink/20 rounded-xl space-y-3 ring-1 ring-ink/10">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-steel uppercase">Corporate &amp; Business Office</span>
                <h3 className="text-sm font-semibold text-ink">Banjara Hills, Hyderabad</h3>
              </div>
              <div className="space-y-1 text-xs text-ink-muted leading-relaxed font-light">
                <p className="font-medium text-ink-muted">Zona Crescent</p>
                <p>8-682/B1 &amp; B2, Road No. 12,</p>
                <p>Banjara Hills,</p>
                <p>Hyderabad, Telangana – 500034.</p>
              </div>
              <p className="text-xs text-ink-muted/70 leading-relaxed font-light pt-1 border-t border-rule/20">
                <span className="font-medium text-ink-muted">Landmark:</span> Zona Towers Building, 2nd Floor, Beside Ratnadeep.
              </p>
            </div>

            {/* Engineering & Manufacturing Facility */}
            <div className="p-6 bg-bg border border-rule/20 rounded-xl space-y-3">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-steel uppercase">Engineering &amp; Manufacturing Facility</span>
                <h3 className="text-sm font-semibold text-ink">Cherlapally, Hyderabad</h3>
              </div>
              <div className="space-y-1 text-xs text-ink-muted leading-relaxed font-light">
                <p>Plot No 193/P, Phase IV,</p>
                <p>Cherlapally,</p>
                <p>Medchal Malkajgiri Dist,</p>
                <p>Hyderabad – 500051, Telangana.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Our Capabilities */}
      <section id="capabilities" className="bg-section border-t border-rule py-12 md:py-16">
        <div className="container-editorial grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-6 order-2 lg:order-1 gsap-reveal">
            <div className="aspect-[16/10] w-full overflow-hidden bg-surface rounded-xl border border-rule/15 shadow-sm">
              <img src={smtLine} alt="SMT Line at Cherlapally Facility" className="h-full w-full object-cover select-none pointer-events-none" />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 order-1 lg:order-2 gsap-reveal space-y-4">
            <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">ENGINEERING SCOPE</span>
            <h2 className="text-2xl md:text-3xl font-light text-ink uppercase">
              Our Capabilities
            </h2>
            <div className="space-y-3 text-sm text-ink-muted leading-relaxed font-light">
              <p>
                Our engineering operations integrate hardware schematic design, multilayer PCB layout, embedded firmware development, mechanical enclosure engineering, software validation, and environmental testing.
              </p>
              <p>
                Every product line is engineered to comply with applicable RDSO specifications and international railway standards including EN 50155, EN 50121, EN 61373, and IEC 60571.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Manufacturing Infrastructure */}
      <section id="infrastructure" className="bg-bg border-t border-rule py-12 md:py-16">
        <div className="container-editorial space-y-8">
          <div className="gsap-reveal space-y-2 max-w-3xl">
            <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">FACILITY</span>
            <h2 className="text-2xl md:text-3xl font-light text-ink uppercase">
              Manufacturing Infrastructure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gsap-reveal">
            <div className="p-6 bg-surface border border-rule/20 rounded-xl space-y-2">
              <span className="text-xs font-mono font-bold text-steel uppercase">LOCATION</span>
              <h3 className="text-base font-semibold text-ink uppercase">Cherlapally Facility</h3>
              <p className="text-xs text-ink-muted leading-relaxed font-light">
                Plot No 193/P, Phase IV, Cherlapally, Medchal Malkajgiri Dist, Hyderabad-500051, Telangana.
              </p>
            </div>

            <div className="p-6 bg-surface border border-rule/20 rounded-xl space-y-2">
              <span className="text-xs font-mono font-bold text-steel uppercase">OPERATIONS</span>
              <h3 className="text-base font-semibold text-ink uppercase">Assembly & EMS</h3>
              <p className="text-xs text-ink-muted leading-relaxed font-light">
                SMT assembly, wiring harness fabrication, control cabinet integration, and automated functional testing.
              </p>
            </div>

            <div className="p-6 bg-surface border border-rule/20 rounded-xl space-y-2">
              <span className="text-xs font-mono font-bold text-steel uppercase">SERVICES</span>
              <h3 className="text-base font-semibold text-ink uppercase">Field Operations</h3>
              <p className="text-xs text-ink-muted leading-relaxed font-light">
                On-site installation, safety validation, traffic block execution, and lifecycle technical support across Indian Railways zonal divisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ISO 9001:2015 Certification */}
      <section id="certification" className="bg-section border-t border-rule py-12 md:py-20">
        <div className="container-editorial space-y-8">
          
          <div className="gsap-reveal space-y-2 max-w-3xl">
            <h2 className="text-2xl md:text-4xl font-light text-ink uppercase">
              ISO 9001:2015 Certification
            </h2>
            <p className="text-sm md:text-base text-ink-muted font-light leading-relaxed">
              LorVen Systems Private Limited is certified under ISO 9001:2015 by QRO (Certificate No. 305026071749Q), accredited by EGAC and member of IAF.
            </p>
          </div>

          {/* Full-size prominent certificate display */}
          <div className="gsap-reveal flex justify-center">
            <div
              className="relative bg-white rounded-2xl border border-black/10 shadow-2xl overflow-hidden w-full max-w-[760px] aspect-[1/1.41] p-3 md:p-6 select-none"
              onContextMenu={(e) => e.preventDefault()}
            >
              <img
                src={isoCertImg}
                alt="ISO 9001:2015 Certificate of Registration — LorVen Systems Private Limited"
                className="w-full h-full object-contain pointer-events-auto"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
          </div>

        </div>
      </section>

      {/* Page Index */}
      <PageIndex
        columns={[
          {
            title: "About LorVen",
            items: [
              { label: "Who We Are", href: "#who-we-are" },
              { label: "Our Offices", href: "#our-offices" },
              { label: "Our Capabilities", href: "#capabilities" },
            ],
          },
          {
            title: "Operations & Quality",
            items: [
              { label: "Manufacturing Infrastructure", href: "#infrastructure" },
              { label: "ISO 9001:2015 Certification", href: "#certification" },
            ],
          },
        ]}
      />

      {/* Contact Section */}
      <section className="bg-ink text-on-dark py-12 md:py-16 border-t border-ink text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={depot} alt="Wayside Railway Facility" className="w-full h-full object-cover opacity-20 select-none pointer-events-none" />
        </div>
        <div className="container-editorial relative z-10 flex flex-col items-center gsap-reveal space-y-4">
          <h2 className="text-2xl md:text-3xl font-light text-white uppercase max-w-3xl">
            Contact Engineering Team
          </h2>
          <p className="text-sm text-white/80 font-light leading-relaxed max-w-2xl">
            For technical inquiries, system specifications, or deployment coordination, reach out to our engineering office in Hyderabad.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-ink transition-colors duration-300 rounded-sm shadow-md"
            >
              Contact Engineering Team →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
