import { Link } from "@tanstack/react-router";
import { PRODUCTS_DATA, ProductSystemData, ProductFeatureItem, ProductSpecItem, ProductDownloadItem } from "@/lib/products-data";
export type { ProductSystemData, ProductFeatureItem, ProductSpecItem, ProductDownloadItem };

// ─────────────────────────────────────────────────────────────
// AUTO-DERIVE RELATED PRODUCTS
// ─────────────────────────────────────────────────────────────

function routeForSlug(slug: string, divisionSlug: string): string {
  if (divisionSlug === "snt") return `/products/snt/${slug}`;
  if (divisionSlug === "electric-locomotive") return `/products/electric-locomotive/${slug}`;
  if (divisionSlug === "wagons") return `/products/wagons/${slug}`;
  return "/products";
}

function deriveRelated(current: ProductSystemData) {
  const all = Object.values(PRODUCTS_DATA);
  const sameDivision = all.filter(
    (p) => p.divisionSlug === current.divisionSlug && p.slug !== current.slug
  );
  const otherDivision = all.filter(
    (p) => p.divisionSlug !== current.divisionSlug
  );
  return [...sameDivision, ...otherDivision].slice(0, 4);
}

function routeForDivision(slug: string) {
  if (slug === "snt") return "/products/snt";
  if (slug === "electric-locomotive") return "/products/electric-locomotive";
  if (slug === "wagons") return "/products/wagons";
  return "/products";
}

// ─────────────────────────────────────────────────────────────
// MASTER PRODUCT PAGE COMPONENT
// ─────────────────────────────────────────────────────────────

export function ProductPageSystem({ data }: { data: ProductSystemData }) {
  const relatedProducts = deriveRelated(data);

  return (
    <div className="bg-bg text-ink min-h-screen selection:bg-ink selection:text-on-dark antialiased font-sans">
      
      {/* Offset for navigation bar */}
      <div className="pt-[56px]" />

      {/* ── 1. PREMIUM BREADCRUMB HERO ──────────── */}
      <section className="relative w-full py-12 md:py-16 bg-ink overflow-hidden flex items-center">
        {/* Background Image with light overlay (increased transparency, not blacked out) */}
        <div className="absolute inset-0 z-0">
          <img
            src={data.heroImage}
            alt={data.title}
            className="w-full h-full object-cover object-center opacity-60 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-black/45 z-10" />
        </div>

        {/* Content Centered Vertically */}
        <div className="relative z-20 w-full max-w-[1320px] mx-auto px-4 md:px-8 text-white space-y-4">
          
          {/* Breadcrumb path - white text with high readability, increased size */}
          <nav className="text-sm font-normal text-white/90">
            <ol className="flex items-center gap-2 flex-wrap">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/50 font-light">&gt;</li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li className="text-white/50 font-light">&gt;</li>
              <li>
                <Link to={routeForDivision(data.divisionSlug)} className="hover:text-white transition-colors">
                  {data.divisionTitle}
                </Link>
              </li>
              <li className="text-white/50 font-light">&gt;</li>
              <li className="text-white font-semibold">{data.title}</li>
            </ol>
          </nav>

          {/* Large Title (56px-64px) */}
          <h1 className="text-4xl md:text-5xl lg:text-[60px] font-light uppercase tracking-tight leading-none text-white">
            {data.title}
          </h1>

        </div>
      </section>

      {/* ── 2. PRODUCT OVERVIEW ─────────────────── */}
      <section className="py-12 md:py-16 max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Title & Text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-muted">
              Overview
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-[36px] font-light text-ink uppercase tracking-wide leading-tight">
              {data.overviewTitle}
            </h2>
            <div className="space-y-4 w-full max-w-prose border-t border-rule/20 pt-6">
              {data.overviewParagraphs.map((p, idx) => (
                <p key={idx} className="text-base md:text-lg text-ink font-light leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Image */}
          <div className="lg:col-span-6">
            <div className="border border-rule/15 overflow-hidden bg-surface aspect-[16/10] w-full rounded-md shadow-sm">
              <img
                src={data.overviewImage}
                alt="Product overview engineering detail"
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="border-t border-rule/20" />
      </div>

      {/* ── 3. FEATURES ─────────────────────────── */}
      <section className="py-12 md:py-16 max-w-[1320px] mx-auto px-4 md:px-8 space-y-10">
        <div className="space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-muted">
            Features
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-[36px] font-light text-ink uppercase tracking-wide">
            Technical Capabilities
          </h2>
        </div>

        {/* 2 Columns Grid Desktop, 1 Column Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {data.features.map((feat, idx) => (
            <div
              key={idx}
              className="border border-rule/15 p-6 md:p-8 bg-white flex gap-5 items-start rounded-md shadow-xs hover:border-steel/50 transition-all duration-300"
            >
              {/* Clean Checkmark Icon */}
              <div className="w-5 h-5 flex items-center justify-center border border-steel/40 text-steel text-xs font-bold flex-shrink-0 mt-1 rounded-xs bg-steel/5">
                ✓
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-base md:text-lg font-semibold text-ink uppercase tracking-normal">
                  {feat.title}
                </h3>
                <p className="text-sm md:text-base text-ink-muted font-light leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="border-t border-rule/20" />
      </div>

      {/* ── 4. RELATED SOLUTIONS ────────────────── */}
      {relatedProducts.length > 0 && (
        <section className="py-12 md:py-16 max-w-[1320px] mx-auto px-4 md:px-8 space-y-12 pb-12">
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-muted">
              Solutions
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-[36px] font-light text-ink uppercase tracking-wide">
              Related Solutions
            </h2>
          </div>

          {/* Premium Related Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((rel) => (
              <Link
                key={rel.slug}
                to={routeForSlug(rel.slug, rel.divisionSlug) as any}
                className="group border border-rule/15 bg-white flex flex-col justify-between overflow-hidden rounded-none hover:border-ink/30 transition-all duration-300"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-surface relative">
                    <img
                      src={rel.heroImage}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 select-none pointer-events-none"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-ink-muted/50">
                      {rel.category}
                    </span>
                    <h3 className="text-lg font-semibold text-ink group-hover:text-steel transition-colors uppercase leading-tight">
                      {rel.title}
                    </h3>
                    <p className="text-sm text-ink-muted font-light leading-relaxed line-clamp-3">
                      {rel.description}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-ink/40 group-hover:text-ink transition-colors duration-200">
                    View Solution →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
