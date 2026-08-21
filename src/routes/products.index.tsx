import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PageIndex } from "@/components/site/PageIndex";
import { PRODUCT_INDEX } from "@/lib/site-data";
import heroImg from "@/assets/factory-hall.jpg";

import rdpmsImg from "@/assets/pcb-macro.jpg";
import ipsImg from "@/assets/electrical-cabinet.jpg";
import simImg from "@/assets/simulator.jpg";
import wliImg from "@/assets/wagons.jpg";
import ahabdImg from "@/assets/coach-build.jpg";

const PRODUCT_IMAGES: Record<string, string> = {
  rdpms: rdpmsImg,
  ips: ipsImg,
  simulators: simImg,
  wli: wliImg,
  ahabd: ahabdImg,
};

import { createSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/products/")({
  head: () => createSeoMeta({
    title: "Products | LorVen Systems",
    description: "Explore LorVen's complete portfolio of railway engineering solutions.",
    path: "/products",
  }),
  component: ProductsIndex,
});

function ProductsIndex() {
  const uniqueProductsMap = new Map<string, typeof PRODUCT_INDEX[number]["children"][number] & { divisionTitle: string }>();
  PRODUCT_INDEX.forEach((div) => {
    div.children.forEach((prod) => {
      if (!uniqueProductsMap.has(prod.slug)) {
        uniqueProductsMap.set(prod.slug, {
          ...prod,
          divisionTitle: div.title,
        });
      }
    });
  });
  const allProducts = Array.from(uniqueProductsMap.values());

  return (
    <>
      <PageHero
        eyebrow="PRODUCTS"
        title="Index of All Products"
        lede="Explore LorVen's complete portfolio of railway engineering solutions."
        image={heroImg}
      />

      <PageIndex
        columns={PRODUCT_INDEX.map((category) => ({
          title: category.title,
          items: category.children.map((child) => ({
            label: child.title,
            to: child.to,
          })),
        }))}
      />

      {/* 2. Old Grid System (Simple 3-Col, Clean White Cards) */}
      <section className="pb-24 bg-bg pt-8">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {allProducts.map((prod) => (
              <Link
                key={prod.slug}
                to={prod.to as any}
                className="group/card flex flex-col bg-white overflow-hidden border border-rule/10 hover:border-rule/30 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image Window */}
                <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                  <img 
                    src={PRODUCT_IMAGES[prod.slug] || rdpmsImg} 
                    alt={prod.title} 
                    className="w-full h-full object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-[600ms] group-hover/card:bg-black/[0.03]" />
                </div>

                {/* Content */}
                <div className="p-10 flex flex-col flex-grow">
                  <div className="mb-6">
                    <span className="text-xs tracking-[0.16em] font-semibold text-rule/80 mb-3 block">
                      {prod.divisionTitle}
                    </span>
                    <h2 className="text-lg md:text-xl font-medium text-ink transition-colors duration-300 group-hover/card:text-rule">
                      {prod.title}
                    </h2>
                    <p className="mt-3 text-xs md:text-sm text-ink-muted leading-relaxed line-clamp-2">
                      {prod.blurb}
                    </p>
                  </div>

                  {/* Footer / CTA */}
                  <div className="mt-auto pt-6 flex items-center justify-between border-t border-rule/10">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/40 group-hover/card:text-rule transition-colors duration-300">
                      Explore Product
                    </span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-rule opacity-0 -translate-x-4 transition-all duration-[500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:opacity-100 group-hover/card:translate-x-0">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

