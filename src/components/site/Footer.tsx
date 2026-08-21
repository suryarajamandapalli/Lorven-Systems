import { Link } from "@tanstack/react-router";
import { COMPANY, PRODUCT_INDEX, SERVICE_INDEX } from "@/lib/site-data";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-0 bg-ink text-on-dark border-t border-white/5">
      <div className="container-editorial py-10 md:py-12">
        <div className="grid grid-cols-12 gap-8 text-xs">
          {/* Column 1: Logo & Address */}
          <div className="col-span-12 md:col-span-3 flex flex-col">
            <Logo id="footer-logo" idPrefix="footer" className="text-white w-28 md:w-36 h-auto" />
            <address className="mt-4 not-italic text-xs leading-relaxed opacity-70 max-w-xs space-y-1">
              <strong>{COMPANY.legal}</strong>
              <p>{COMPANY.hq.address}</p>
              {"landmark" in COMPANY.hq && COMPANY.hq.landmark && (
                <p className="opacity-80 text-[11px]">Landmark: {COMPANY.hq.landmark}</p>
              )}
            </address>
          </div>

          {/* Column 2: Products */}
          <div className="col-span-6 md:col-span-2">
            <p className="eyebrow !text-on-dark/60 !text-[10px] !tracking-[0.12em]">Products</p>
            <ul className="mt-4 space-y-2 text-xs">
              {PRODUCT_INDEX.map((p) => (
                <li key={p.slug}>
                  <a
                    href={`/products/${p.slug}`}
                    className="link-underline opacity-85 hover:opacity-100"
                  >
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="col-span-6 md:col-span-3">
            <p className="eyebrow !text-on-dark/60 !text-[10px] !tracking-[0.12em]">Services</p>
            <ul className="mt-4 space-y-2 text-xs">
              {SERVICE_INDEX.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`/services/${s.slug}`}
                    className="link-underline opacity-85 hover:opacity-100"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="col-span-6 md:col-span-2">
            <p className="eyebrow !text-on-dark/60 !text-[10px] !tracking-[0.12em]">Company</p>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <Link to="/about" className="link-underline opacity-85 hover:opacity-100">
                  About
                </Link>
              </li>
              <li>
                <Link to="/quality" className="link-underline opacity-85 hover:opacity-100">
                  Quality
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link-underline opacity-85 hover:opacity-100">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Enquiry & Legal */}
          <div className="col-span-6 md:col-span-2 flex flex-col justify-between">
            <div>
              <p className="eyebrow !text-on-dark/60 !text-[10px] !tracking-[0.12em]">Enquiries</p>
              <div className="mt-4 text-xs space-y-1 opacity-85">
                <p>{COMPANY.hq.phone}</p>
                <p>
                  <a href={`mailto:${COMPANY.hq.email}`} className="link-underline">
                    {COMPANY.hq.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row: copyright & legal links */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-[11px] font-medium tracking-[0.16em] text-on-dark/50">
          <span>
            © {year} LorVen Systems Pvt. Ltd. All rights reserved.
          </span>
          <div className="flex flex-wrap gap-6">
            <Link to="/privacy" className="link-underline">
              Privacy
            </Link>
            <Link to="/terms" className="link-underline">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
