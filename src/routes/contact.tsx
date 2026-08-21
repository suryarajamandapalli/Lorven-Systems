import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Asset imports
import contactHero from "@/assets/loco-hero-real.jpg";
import depot from "@/assets/depot.jpg";

import { createSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => createSeoMeta({
    title: "Contact | LorVen Systems",
    description: "Start your engineering enquiry with LorVen Systems. Direct consultation for railway products, signalling design, KAVACH installation, and electronics manufacturing.",
    path: "/contact",
  }),
  component: ContactPage,
});

function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    phone: "",
    enquiryType: "Products",
    details: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div ref={containerRef} className="bg-bg text-ink selection:bg-ink selection:text-on-dark antialiased">
      
      {/* ── PAGE HEADER: Compact breadcrumb + image banner ──────────────────── */}
      <div className="relative h-[220px] md:h-[260px] bg-ink overflow-hidden">
        {/* Background image */}
        <img
          src={contactHero}
          alt="LorVen Railway Systems"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60 select-none pointer-events-none"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />

        {/* Content */}
        <div className="relative z-10 container-editorial h-full flex flex-col justify-end pb-8 text-white">
          {/* Breadcrumb */}
          <nav className="text-[11px] uppercase tracking-widest text-white/50 mb-3 font-semibold">
            <ol className="flex items-center gap-2">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-white/25">/</li>
              <li className="text-white/90">Contact</li>
            </ol>
          </nav>
          <h1 className="text-2xl md:text-3xl font-light uppercase tracking-wide text-white">
            Contact
          </h1>
        </div>
      </div>


      {/* ── SECTION 2: SPLIT ENQUIRY FORM & CONTEXT ────────────────────────── */}
      <section id="enquiry-form" className="bg-bg py-8 sm:py-12 md:py-16 border-t border-rule/20">
        <div className="container-editorial grid grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Context */}
          <div className="col-span-12 lg:col-span-5 gsap-reveal space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">GET IN TOUCH</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight leading-tight text-ink uppercase">
                Start Your Engineering Enquiry
              </h2>
            </div>

            <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-light">
              LorVen Systems engineers review every project inquiry directly to evaluate technical feasibility, specification requirements, and implementation timelines.
            </p>

            {/* Reassuring Areas of Expertise */}
            <div className="border-t border-rule/20 pt-6 sm:pt-8 space-y-5 sm:space-y-6">
              <h3 className="text-xs font-mono font-bold text-steel tracking-widest uppercase">
                Areas of Expertise
              </h3>
              <div className="space-y-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-ink uppercase tracking-wide">Products</h4>
                  <p className="text-xs text-ink-muted font-light leading-relaxed">
                    WLI, IFD, IPS, RDPMS, AHABD, and Driving & KAVACH Training Simulators.
                  </p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-ink uppercase tracking-wide">Services</h4>
                  <p className="text-xs text-ink-muted font-light leading-relaxed">
                    Electronic Product Development (EPD), Signalling Design, and KAVACH Installation & Commissioning.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Premium Form */}
          <div className="col-span-12 lg:col-span-7 gsap-reveal">
            <div className="p-5 sm:p-8 md:p-12 bg-section border border-rule/25 rounded-xl sm:rounded shadow-sm">
              {formSubmitted ? (
                <div className="py-8 sm:py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-steel/10 text-steel mx-auto flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-light text-ink uppercase">Enquiry Received</h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-light max-w-md mx-auto">
                    Thank you for reaching out. A senior LorVen engineer will review your project requirements and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 text-xs font-mono font-bold text-steel hover:text-ink uppercase tracking-wider underline cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-1.5 sm:space-y-2">
                      <label htmlFor="fullName" className="text-xs font-mono font-semibold uppercase tracking-wider text-ink block">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        placeholder="e.g. Rajesh Sharma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-bg border border-rule/30 px-3.5 sm:px-4 py-3 sm:py-3.5 text-base sm:text-sm text-ink focus:border-steel focus:outline-none transition-colors rounded-md sm:rounded-sm"
                      />
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <label htmlFor="email" className="text-xs font-mono font-semibold uppercase tracking-wider text-ink block">
                        Work Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="name@organization.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-bg border border-rule/30 px-3.5 sm:px-4 py-3 sm:py-3.5 text-base sm:text-sm text-ink focus:border-steel focus:outline-none transition-colors rounded-md sm:rounded-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-1.5 sm:space-y-2">
                      <label htmlFor="organization" className="text-xs font-mono font-semibold uppercase tracking-wider text-ink block">
                        Organization / Railway Zone
                      </label>
                      <input
                        id="organization"
                        type="text"
                        placeholder="e.g. South Central Railway / OEM"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full bg-bg border border-rule/30 px-3.5 sm:px-4 py-3 sm:py-3.5 text-base sm:text-sm text-ink focus:border-steel focus:outline-none transition-colors rounded-md sm:rounded-sm"
                      />
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <label htmlFor="phone" className="text-xs font-mono font-semibold uppercase tracking-wider text-ink block">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-bg border border-rule/30 px-3.5 sm:px-4 py-3 sm:py-3.5 text-base sm:text-sm text-ink focus:border-steel focus:outline-none transition-colors rounded-md sm:rounded-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="enquiryType" className="text-xs font-mono font-semibold uppercase tracking-wider text-ink block">
                      Enquiry Category
                    </label>
                    <select
                      id="enquiryType"
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full bg-bg border border-rule/30 px-3.5 sm:px-4 py-3 sm:py-3.5 text-base sm:text-sm text-ink focus:border-steel focus:outline-none transition-colors rounded-md sm:rounded-sm"
                    >
                      <option value="Products">Products (WLI, IFD, IPS, RDPMS, AHABD, Simulators)</option>
                      <option value="Services">Services (EPD, Signalling Design, KAVACH Installation)</option>
                      <option value="General">General Corporate Enquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="details" className="text-xs font-mono font-semibold uppercase tracking-wider text-ink block">
                      Project Details & Requirements
                    </label>
                    <textarea
                      id="details"
                      rows={4}
                      placeholder="Please outline system specifications, target deployment schedule, or technical queries..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full bg-bg border border-rule/30 px-3.5 sm:px-4 py-3 sm:py-3.5 text-base sm:text-sm text-ink focus:border-steel focus:outline-none transition-colors rounded-md sm:rounded-sm resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-ink text-white hover:bg-steel py-3.5 sm:py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 rounded-md sm:rounded-sm cursor-pointer shadow-md"
                  >
                    Submit Enquiry →
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 3: CLEAN HORIZONTAL CONTACT STRIP ──────────────────────── */}
      <section className="bg-bg py-10 sm:py-16 border-t border-rule/20">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-rule/20 gsap-reveal">
            
            {/* Column 1 */}
            <div className="space-y-3 pt-4 first:pt-0 md:pt-0 md:pr-8">
              <span className="text-xs font-mono font-bold text-steel tracking-widest uppercase block">
                CORPORATE OFFICE
              </span>
              <h3 className="text-base sm:text-lg font-bold text-ink uppercase">LorVen Systems Pvt. Ltd.</h3>
              <div className="text-xs sm:text-sm text-ink-muted leading-relaxed font-light space-y-1">
                <p>Zona Crescent, 8-682/B1 & B2, Road No. 12,</p>
                <p>Banjara Hills, Hyderabad, Telangana – 500034</p>
                <p className="text-xs text-steel font-medium pt-1">Landmark: Zona Towers Building, 2nd Floor, Beside Ratnadeep</p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-3 pt-6 md:pt-0 md:px-8">
              <span className="text-xs font-mono font-bold text-steel tracking-widest uppercase block">
                ENGINEERING ENQUIRIES
              </span>
              <div className="space-y-1 text-xs sm:text-sm text-ink-muted leading-relaxed font-light">
                <p>Email: <a href="mailto:ea@lorvensystems.in" className="text-ink font-semibold hover:text-steel transition-colors">ea@lorvensystems.in</a></p>
                <p>Phone: <a href="tel:+919963666759" className="text-ink font-semibold hover:text-steel transition-colors">+91 9963666759</a></p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-3 pt-6 md:pt-0 md:pl-8">
              <span className="text-xs font-mono font-bold text-steel tracking-widest uppercase block">
                BUSINESS ENQUIRIES
              </span>
              <div className="space-y-1 text-xs sm:text-sm text-ink-muted leading-relaxed font-light">
                <p>Tenders: <a href="mailto:procurement@lorvensystem.in" className="text-ink font-semibold hover:text-steel transition-colors">procurement@lorvensystem.in</a></p>
                <p>Hours: Mon – Sat | 09:00 – 18:00 IST</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 4: OFFICE LOCATION & GOOGLE MAP ───────────────────────── */}
      <section id="office-location" className="bg-section py-12 sm:py-16 md:py-20 border-t border-rule/20">
        <div className="container-editorial space-y-8 sm:space-y-12">
          <div className="gsap-reveal space-y-2.5 sm:space-y-3 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug text-ink uppercase">
              Office Location
            </h2>
            <div className="text-xs sm:text-sm text-ink-muted leading-relaxed font-light">
              <p>Zona Crescent, 8-682/B1 & B2, Road No. 12, Banjara Hills, Hyderabad, Telangana – 500034</p>
              <p className="text-xs text-steel font-medium mt-1">Landmark: Zona Towers Building, 2nd Floor, Beside Ratnadeep</p>
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="relative w-full h-[320px] sm:h-[400px] md:h-[450px] bg-surface rounded-xl sm:rounded border border-rule/20 overflow-hidden shadow-sm gsap-reveal">
            <iframe
              title="LorVen Systems Corporate Headquarters - Banjara Hills, Hyderabad"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3807.074866871989!2d78.4390556!3d17.4081944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI0JzI5LjUiTiA3OMKwMjYnMjAuNiJF!5e0!3m2!1sen!2sin!4v1785423207526!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 5: ENTERPRISE CTA ──────────────────────────────────────── */}
      <section className="bg-ink text-on-dark py-12 sm:py-16 md:py-20 border-t border-ink relative overflow-hidden">
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
          <div className="max-w-4xl space-y-4 sm:space-y-6 gsap-reveal">
            <span className="eyebrow !text-white/40 block">DISCUSS REQUIREMENTS</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-light leading-tight text-white uppercase">
              Discuss your deployment requirements with our engineering team
            </h2>
            <div className="pt-4 sm:pt-8">
              <a
                href="#enquiry-form"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 border border-white text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-ink transition-colors duration-300 rounded-md sm:rounded-sm shadow-md"
              >
                Consult Our Engineers →
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
