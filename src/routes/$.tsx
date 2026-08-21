import { createFileRoute, Link } from "@tanstack/react-router";
import depot from "@/assets/depot.jpg";

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [
      { title: "404 — Page Not Found | LorVen Systems" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: NotFound,
});

export function NotFoundView() {
  return (
    <div className="relative min-h-[85vh] bg-bg text-ink flex flex-col justify-between pt-16">
      {/* Background Graphic & Subtle Tone */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-5">
        <img
          src={depot}
          alt="Railway Infrastructure"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/70 to-bg" />
      </div>

      <div className="container-editorial relative z-10 py-16 md:py-24 my-auto">
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left: 404 Visual & Status Message */}
          <div className="col-span-12 lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-rule/20 border border-rule/30 rounded-full text-xs font-mono font-semibold uppercase tracking-widest text-steel">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>Diagnostic Code: 404 // Route Not Found</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight tracking-tighter text-ink leading-none">
                404
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-ink uppercase tracking-wide">
                Track or Specification Not Found
              </h2>
            </div>

            <p className="text-sm sm:text-base text-ink-muted font-light leading-relaxed max-w-xl">
              The page or resource you are looking for has been decommissioned, relocated, or the URL contains a typographical error. Use the directory below to navigate to valid system specifications.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-ink text-white hover:bg-steel text-xs font-mono font-bold uppercase tracking-wider rounded transition-colors shadow-sm cursor-pointer"
              >
                ← Return to Home
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-6 py-3 border border-rule/40 text-ink hover:border-ink hover:text-ink text-xs font-mono font-bold uppercase tracking-wider rounded transition-colors cursor-pointer"
              >
                Explore Products →
              </Link>
            </div>
          </div>

          {/* Right: Quick Navigation Matrix */}
          <div className="col-span-12 lg:col-span-5">
            <div className="bg-section border border-rule/30 rounded-xl p-6 sm:p-8 space-y-4 shadow-sm">
              <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">
                Quick Navigation Directory
              </span>

              <div className="space-y-2.5 text-xs">
                <Link
                  to="/products"
                  className="group flex items-center justify-between p-3 rounded-lg border border-rule/20 hover:border-steel bg-bg hover:bg-surface transition-all cursor-pointer"
                >
                  <div className="space-y-0.5">
                    <span className="font-semibold text-ink uppercase tracking-wide group-hover:text-steel transition-colors block">
                      Railway Electronic Products
                    </span>
                    <span className="text-[11px] text-ink-muted font-light">
                      WLI, IFD, IPS, RDPMS, AHABD &amp; Simulators
                    </span>
                  </div>
                  <span className="text-ink-muted group-hover:text-steel group-hover:translate-x-1 transition-all text-sm font-bold">
                    →
                  </span>
                </Link>

                <Link
                  to="/services"
                  className="group flex items-center justify-between p-3 rounded-lg border border-rule/20 hover:border-steel bg-bg hover:bg-surface transition-all cursor-pointer"
                >
                  <div className="space-y-0.5">
                    <span className="font-semibold text-ink uppercase tracking-wide group-hover:text-steel transition-colors block">
                      Engineering &amp; Services
                    </span>
                    <span className="text-[11px] text-ink-muted font-light">
                      EPD, Signalling Design, KAVACH &amp; EMS
                    </span>
                  </div>
                  <span className="text-ink-muted group-hover:text-steel group-hover:translate-x-1 transition-all text-sm font-bold">
                    →
                  </span>
                </Link>

                <Link
                  to="/quality"
                  className="group flex items-center justify-between p-3 rounded-lg border border-rule/20 hover:border-steel bg-bg hover:bg-surface transition-all cursor-pointer"
                >
                  <div className="space-y-0.5">
                    <span className="font-semibold text-ink uppercase tracking-wide group-hover:text-steel transition-colors block">
                      Quality &amp; Standards
                    </span>
                    <span className="text-[11px] text-ink-muted font-light">
                      ISO 9001:2015 &amp; Testing Architecture
                    </span>
                  </div>
                  <span className="text-ink-muted group-hover:text-steel group-hover:translate-x-1 transition-all text-sm font-bold">
                    →
                  </span>
                </Link>

                <Link
                  to="/about"
                  className="group flex items-center justify-between p-3 rounded-lg border border-rule/20 hover:border-steel bg-bg hover:bg-surface transition-all cursor-pointer"
                >
                  <div className="space-y-0.5">
                    <span className="font-semibold text-ink uppercase tracking-wide group-hover:text-steel transition-colors block">
                      About LorVen Systems
                    </span>
                    <span className="text-[11px] text-ink-muted font-light">
                      Company Profile, Infrastructure &amp; Offices
                    </span>
                  </div>
                  <span className="text-ink-muted group-hover:text-steel group-hover:translate-x-1 transition-all text-sm font-bold">
                    →
                  </span>
                </Link>

                <Link
                  to="/contact"
                  className="group flex items-center justify-between p-3 rounded-lg border border-rule/20 hover:border-steel bg-bg hover:bg-surface transition-all cursor-pointer"
                >
                  <div className="space-y-0.5">
                    <span className="font-semibold text-ink uppercase tracking-wide group-hover:text-steel transition-colors block">
                      Direct Engineering Contact
                    </span>
                    <span className="text-[11px] text-ink-muted font-light">
                      Technical Inquiries &amp; Tenders
                    </span>
                  </div>
                  <span className="text-ink-muted group-hover:text-steel group-hover:translate-x-1 transition-all text-sm font-bold">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function NotFound() {
  return <NotFoundView />;
}
