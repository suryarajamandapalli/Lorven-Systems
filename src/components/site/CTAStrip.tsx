import { Link } from "@tanstack/react-router";

export function CTAStrip({
  eyebrow = "Next",
  title = "Discuss a programme.",
  to = "/contact",
  cta = "Begin an enquiry",
}: {
  eyebrow?: string;
  title?: string;
  to?: string;
  cta?: string;
}) {
  return (
    <section className="border-t border-rule bg-bg">
      <div className="container-editorial grid grid-cols-12 gap-8 py-24 md:py-32">
        <div className="col-span-12 md:col-span-3">
          <span className="eyebrow">{eyebrow}</span>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="reveal-mask display-clamp font-light text-ink">
            <span>{title}</span>
          </h2>
          <Link
            to={to}
            className="link-underline mt-10 inline-block text-[12px] font-medium uppercase tracking-[0.16em] text-ink"
          >
            {cta} →
          </Link>
        </div>
      </div>
    </section>
  );
}
