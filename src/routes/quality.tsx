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
import engineers from "@/assets/engineers.jpg";
import depot from "@/assets/depot.jpg";
import isoCertImg from "@/assets/iso-certificate.jpg";

import { createSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/quality")({
  head: () => createSeoMeta({
    title: "Quality Management | LorVen Systems",
    description: "Quality management system, standards compliance, testing procedures, and engineering validation for LorVen Systems Private Limited.",
    path: "/quality",
  }),
  component: QualityRoute,
});

function QualityRoute() {
  const containerRef = useRef<HTMLDivElement>(null);

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
  }, { scope: containerRef });

  const workflowSteps = [
    { step: "01", name: "Requirements" },
    { step: "02", name: "Design" },
    { step: "03", name: "Development" },
    { step: "04", name: "Testing" },
    { step: "05", name: "Validation" },
    { step: "06", name: "Manufacturing" },
    { step: "07", name: "Commissioning" },
  ];

  const standards = [
    { category: "Quality Management", spec: "ISO 9001:2015 Certified Quality Management System (Certificate No. 305026071749Q)" },
    { category: "Environmental & Operating", spec: "EN 50155 / IEC 60571 (Railway Electronic Equipment Standards)" },
    { category: "Electromagnetic Compatibility", spec: "EN 50121 Series (Railway EMC Requirements)" },
    { category: "Shock & Vibration", spec: "EN 61373 (Rolling Stock Shock and Vibration Testing)" },
    { category: "Workmanship & Assembly", spec: "IPC-A-610 Class 3 Workmanship & Soldering Standards" },
    { category: "Third-Party Validation", spec: "Type testing at NABL-Accredited Laboratories & RDSO Approval Compliance" },
  ];

  return (
    <div ref={containerRef} className="bg-bg text-ink selection:bg-ink selection:text-on-dark antialiased">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[50vh] bg-ink overflow-hidden flex flex-col justify-center pb-16 pt-28">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={pcbMacro}
            alt="Quality Inspection"
            className="w-full h-full object-cover opacity-30 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
        </div>

        <div className="container-editorial relative z-20 w-full text-white">
          <div className="max-w-4xl space-y-4">
            <nav className="text-xs uppercase tracking-wider text-white/50">
              <ol className="flex items-center gap-2 flex-wrap font-semibold">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-white/20 font-light">&gt;</li>
                <li className="text-white">Quality</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-5xl font-light uppercase tracking-tight leading-tight text-white max-w-4xl">
              Quality Management
            </h1>

            <p className="text-sm md:text-base text-white/80 leading-relaxed font-light max-w-3xl border-l-2 border-steel pl-4">
              Quality management system and engineering compliance for railway electronic products, signalling systems, and manufacturing services.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Quality & Compliance Overview */}
      <section className="bg-bg py-12 md:py-16 border-t border-rule/20">
        <div className="container-editorial grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-6 gsap-reveal space-y-4">
            <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">OVERVIEW</span>
            <h2 className="text-2xl md:text-3xl font-light text-ink uppercase">
              Quality Operations
            </h2>
            <div className="space-y-3 text-sm text-ink-muted leading-relaxed font-light">
              <p>
                LorVen Systems operates a structured Quality Management System covering electronic product development, signalling design, hardware manufacturing, and field commissioning.
              </p>
              <p>
                All products undergo functional testing, burn-in screening, and compliance verification against Indian Railways SEM guidelines and applicable RDSO standards before deployment.
              </p>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 gsap-reveal">
            <div className="aspect-[16/10] w-full overflow-hidden bg-surface rounded-xl border border-rule/15 shadow-sm">
              <img
                src={engineers}
                alt="Engineers Testing Railway Equipment"
                className="h-full w-full object-cover select-none pointer-events-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2.5. ISO 9001:2015 Certification */}
      <section id="iso-certificate" className="bg-section border-t border-rule/20 py-12 md:py-20">
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

      {/* 3. Engineering Process */}
      <section className="bg-section border-t border-rule/20 py-12 md:py-16">
        <div className="container-editorial space-y-8">
          <div className="gsap-reveal space-y-2 max-w-3xl">
            <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">PROCESS</span>
            <h2 className="text-2xl md:text-3xl font-light text-ink uppercase">
              Engineering Process
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-7 gap-4 gsap-reveal">
            {workflowSteps.map((ws, idx) => (
              <div
                key={idx}
                className="p-4 bg-bg border border-rule/20 rounded flex flex-col items-center text-center space-y-2"
              >
                <span className="text-xs font-mono text-steel font-bold">{ws.step}</span>
                <span className="text-xs font-semibold text-ink uppercase tracking-wide">{ws.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Testing & Validation Matrix */}
      <section className="bg-bg border-t border-rule/20 py-12 md:py-16">
        <div className="container-editorial space-y-8">
          <div className="gsap-reveal space-y-2 max-w-3xl">
            <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">SPECIFICATIONS</span>
            <h2 className="text-2xl md:text-3xl font-light text-ink uppercase">
              Testing & Validation
            </h2>
          </div>

          <div className="bg-surface border border-rule/25 rounded-xl overflow-hidden shadow-sm gsap-reveal">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-rule/20 bg-section text-xs font-mono font-bold uppercase tracking-wider text-ink">
                  <th className="py-4 px-6 w-1/3">Category</th>
                  <th className="py-4 px-6">Specification / Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rule/15 text-xs md:text-sm text-ink-muted font-light">
                {standards.map((row, idx) => (
                  <tr key={idx} className="hover:bg-section/30 transition-colors">
                    <td className="py-4 px-6 font-semibold text-ink uppercase tracking-wider">{row.category}</td>
                    <td className="py-4 px-6">{row.spec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-ink text-on-dark py-12 md:py-16 border-t border-ink text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={depot} alt="Wayside Facility" className="w-full h-full object-cover opacity-20 select-none pointer-events-none" />
        </div>
        <div className="container-editorial relative z-10 flex flex-col items-center gsap-reveal space-y-4">
          <h2 className="text-2xl md:text-3xl font-light text-white uppercase max-w-3xl">
            Contact Engineering Team
          </h2>
          <p className="text-sm text-white/80 font-light leading-relaxed max-w-2xl">
            For quality compliance documentation, test reports, or technical specifications, contact our engineering team.
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
