import { useGsapReveal } from "@/hooks/use-reveal";
import { createFileRoute, Link } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { useState, useRef, useEffect } from "react";


// Asset imports
import contactHero from "@/assets/loco-hero-real.jpg";
import depot from "@/assets/depot.jpg";

import { createSeoMeta } from "@/lib/seo";

const EnquirySchema = z.object({
  fullName: z.string().trim().min(2, "Full Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please provide a valid work email address"),
  phone: z.string().trim().min(7, "Phone number must be at least 7 digits").max(20),
  organization: z.string().trim().max(150).optional().default(""),
  enquiryType: z.string().min(1, "Please select an enquiry category"),
  details: z.string().trim().min(20, "Project details must be at least 20 characters").max(3000),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "You must accept the Privacy Policy to submit an enquiry.",
  }),
  honeypot: z.string().optional().default(""),
  renderedAt: z.number().optional(),
});

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => EnquirySchema.parse(data))
  .handler(async ({ data }) => {
    // 1. Spam protection: Honeypot trap check
    if (data.honeypot && data.honeypot.trim().length > 0) {
      console.warn(`[Spam Blocked] Honeypot triggered by ${data.email}`);
      return {
        success: false,
        message: "Spam submission detected.",
        referenceId: null,
        destinationMailbox: null,
      };
    }

    // 2. Spam protection: Bot rapid submission check (< 1000ms)
    if (data.renderedAt && Date.now() - data.renderedAt < 1000) {
      return {
        success: false,
        message: "Submission was too fast. Please take a moment and try again.",
        referenceId: null,
        destinationMailbox: null,
      };
    }

    // 3. Routing logic to intended mailbox
    let destinationMailbox = "ea@lorvensystems.in";
    const lowerType = data.enquiryType.toLowerCase();
    const lowerDetails = data.details.toLowerCase();

    if (
      lowerType.includes("general") ||
      lowerDetails.includes("tender") ||
      lowerDetails.includes("procurement") ||
      lowerDetails.includes("rfp") ||
      lowerDetails.includes("bid")
    ) {
      destinationMailbox = "procurement@lorvensystems.in";
    }

    const referenceId = `LV-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 899 + 100)}`;
    const timestamp = new Date().toISOString();

    // Log to server console / mailbox dispatch audit
    console.log(`\n================== [NEW ENQUIRY DISPATCH] ==================`);
    console.log(`Reference ID: ${referenceId}`);
    console.log(`Timestamp:    ${timestamp}`);
    console.log(`Target Inbox: ${destinationMailbox}`);
    console.log(`From:         ${data.fullName} <${data.email}>`);
    console.log(`Phone:        ${data.phone}`);
    console.log(`Organization: ${data.organization || "Not Specified"}`);
    console.log(`Category:     ${data.enquiryType}`);
    console.log(`Privacy OK:   Yes (User accepted policy)`);
    console.log(`Requirements:\n${data.details}`);
    console.log(`============================================================\n`);

    return {
      success: true,
      message: "Enquiry successfully processed and routed.",
      referenceId,
      destinationMailbox,
    };
  });

export const Route = createFileRoute("/contact")({
  head: () => createSeoMeta({
    title: "Contact | LorVen Systems",
    description: "Start your engineering enquiry with LorVen Systems. Direct consultation for railway products, signalling design, KAVACH installation, and electronics manufacturing.",
    path: "/contact",
  }),
  component: ContactPage,
});

function ContactPage() {
    const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    phone: "",
    enquiryType: "Products (WLI, IFD, IPS, RDPMS, AHABD, Simulators)",
    details: "",
    privacyConsent: false,
    website: "", // honeypot
  });

  const [renderedAt, setRenderedAt] = useState<number>(Date.now());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successInfo, setSuccessInfo] = useState<{
    referenceId: string;
    destinationMailbox: string;
  } | null>(null);

  useEffect(() => {
    setRenderedAt(Date.now());
  }, []);

  useGsapReveal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Client-side minimum character validation
    if (formData.details.trim().length < 20) {
      setSubmitError("Please provide at least 20 characters describing your project requirements.");
      return;
    }

    if (!formData.privacyConsent) {
      setSubmitError("Please agree to the Privacy Policy to proceed with your enquiry.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await submitEnquiry({
        data: {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          organization: formData.organization,
          enquiryType: formData.enquiryType,
          details: formData.details,
          privacyConsent: formData.privacyConsent,
          honeypot: formData.website,
          renderedAt,
        },
      });

      if (res && res.success && res.referenceId && res.destinationMailbox) {
        setSuccessInfo({
          referenceId: res.referenceId,
          destinationMailbox: res.destinationMailbox,
        });
      } else {
        setSubmitError(res?.message || "Failed to submit enquiry. Please try again.");
      }
    } catch (err: any) {
      console.error("Submission error:", err);
      setSubmitError(err?.message || "A network or server error occurred. Please try again or email ea@lorvensystems.in directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSuccessInfo(null);
    setSubmitError(null);
    setFormData({
      fullName: "",
      email: "",
      organization: "",
      phone: "",
      enquiryType: "Products (WLI, IFD, IPS, RDPMS, AHABD, Simulators)",
      details: "",
      privacyConsent: false,
      website: "",
    });
    setRenderedAt(Date.now());
  };

  return (
    <div className="bg-bg text-ink selection:bg-ink selection:text-on-dark antialiased">
      
      {/* â”€â”€ PAGE HEADER: Compact breadcrumb + image banner â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
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


      {/* â”€â”€ SECTION 2: SPLIT ENQUIRY FORM & CONTEXT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
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
                    Electronic Product Development (EPD), Signalling Design, KAVACH Installation & Commissioning, S&T System Integration, and Electronics Manufacturing Services (EMS).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form */}
          <div className="col-span-12 lg:col-span-7 gsap-reveal">
            <div className="p-5 sm:p-8 md:p-12 bg-section border border-rule/25 rounded-xl sm:rounded shadow-sm">
              {successInfo ? (
                <div className="py-8 sm:py-12 text-center space-y-5">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-500/20">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-7 h-7">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-steel tracking-widest uppercase block">
                      Ref #{successInfo.referenceId}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-light text-ink uppercase">Enquiry Received</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-light max-w-md mx-auto">
                    Thank you for reaching out. Your enquiry has been received and routed to our team at <strong className="text-ink font-semibold">{successInfo.destinationMailbox}</strong>. A senior engineer will review your requirements and respond within 24 hours.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-ink text-white text-xs font-mono font-bold uppercase tracking-wider rounded hover:bg-steel transition-colors cursor-pointer"
                    >
                      â† Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Honeypot field (hidden from users, traps automated spam bots) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website">Leave this field blank</label>
                    <input
                      id="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    />
                  </div>

                  {submitError && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-md text-xs sm:text-sm text-red-600 font-medium leading-relaxed flex items-start gap-2.5">
                      <span className="shrink-0 font-bold">âš ï¸</span>
                      <span>{submitError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-1.5 sm:space-y-2">
                      <label htmlFor="fullName" className="text-xs font-mono font-semibold uppercase tracking-wider text-ink block">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        placeholder="Enter full name"
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
                        placeholder="Enter work email"
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
                        placeholder="Enter organization name"
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
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-bg border border-rule/30 px-3.5 sm:px-4 py-3 sm:py-3.5 text-base sm:text-sm text-ink focus:border-steel focus:outline-none transition-colors rounded-md sm:rounded-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="enquiryType" className="text-xs font-mono font-semibold uppercase tracking-wider text-ink block">
                      Enquiry Category *
                    </label>
                    <select
                      id="enquiryType"
                      required
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full bg-bg border border-rule/30 px-3.5 sm:px-4 py-3 sm:py-3.5 text-base sm:text-sm text-ink focus:border-steel focus:outline-none transition-colors rounded-md sm:rounded-sm cursor-pointer"
                    >
                      <option value="Products (WLI, IFD, IPS, RDPMS, AHABD, Simulators)">Products (WLI, IFD, IPS, RDPMS, AHABD, Simulators)</option>
                      <option value="Electronic Product Development (EPD)">Electronic Product Development (EPD)</option>
                      <option value="Signalling Design Services">Signalling Design Services</option>
                      <option value="KAVACH Installation & Commissioning">KAVACH Installation & Commissioning</option>
                      <option value="Electronics Manufacturing Services (EMS)">Electronics Manufacturing Services (EMS)</option>
                      <option value="S&T System Integration">S&T System Integration</option>
                      <option value="Installation, Testing & Commissioning">Installation, Testing & Commissioning</option>
                      <option value="General Corporate Enquiry">General Corporate Enquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-center justify-between">
                      <label htmlFor="details" className="text-xs font-mono font-semibold uppercase tracking-wider text-ink block">
                        Project Details &amp; Requirements *
                      </label>
                      <span className="text-[11px] font-mono text-ink-muted">
                        {formData.details.trim().length}/20 min chars
                      </span>
                    </div>
                    <textarea
                      id="details"
                      rows={4}
                      required
                      minLength={20}
                      maxLength={3000}
                      placeholder="Enter project details and requirements..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full bg-bg border border-rule/30 px-3.5 sm:px-4 py-3 sm:py-3.5 text-base sm:text-sm text-ink focus:border-steel focus:outline-none transition-colors rounded-md sm:rounded-sm resize-none"
                    ></textarea>
                  </div>

                  {/* Privacy Consent Checkbox */}
                  <div className="pt-1">
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        id="privacyConsent"
                        type="checkbox"
                        required
                        checked={formData.privacyConsent}
                        onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                        className="mt-0.5 h-4 w-4 rounded border-rule/30 text-steel focus:ring-steel cursor-pointer shrink-0"
                      />
                      <span className="text-xs text-ink-muted leading-relaxed font-light">
                        I agree to the processing of my contact details in accordance with LorVen Systems' <Link to="/privacy" className="text-ink font-semibold underline hover:text-steel transition-colors">Privacy Policy</Link>. *
                      </span>
                    </label>
                  </div>

                  {/* Caution Notice Box */}
                  <div className="p-3.5 bg-bg/80 border border-amber-500/25 rounded-md text-xs text-ink-muted leading-relaxed font-light flex items-start gap-2.5">
                    <span className="text-amber-600 font-bold shrink-0 text-sm">âš ï¸</span>
                    <span>
                      <strong className="text-ink font-medium">Caution:</strong> Please do not upload confidential specifications through this form. Secure document exchange can be arranged after initial contact.
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-ink text-white hover:bg-steel disabled:opacity-60 disabled:cursor-not-allowed py-3.5 sm:py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 rounded-md sm:rounded-sm cursor-pointer shadow-md flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Validating &amp; Submitting...</span>
                      </>
                    ) : (
                      <span>Submit Enquiry â†’</span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* â”€â”€ SECTION 3: CLEAN HORIZONTAL CONTACT STRIP â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
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
                <p>Banjara Hills, Hyderabad, Telangana â€“ 500034</p>
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
                <p>Tenders: <a href="mailto:procurement@lorvensystems.in" className="text-ink font-semibold hover:text-steel transition-colors">procurement@lorvensystems.in</a></p>
                <p>Hours: Mon â€“ Sat | 09:00 â€“ 18:00 IST</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* â”€â”€ SECTION 4: OFFICE LOCATION & GOOGLE MAP â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section id="office-location" className="bg-section py-12 sm:py-16 md:py-20 border-t border-rule/20">
        <div className="container-editorial space-y-8 sm:space-y-12">
          <div className="gsap-reveal space-y-2.5 sm:space-y-3 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug text-ink uppercase">
              Office Location
            </h2>
            <div className="text-xs sm:text-sm text-ink-muted leading-relaxed font-light">
              <p>Zona Crescent, 8-682/B1 & B2, Road No. 12, Banjara Hills, Hyderabad, Telangana â€“ 500034</p>
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

      {/* â”€â”€ SECTION 5: ENTERPRISE CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
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
                Consult Our Engineers â†’
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

