import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export type BreadcrumbPathItem = {
  label: string;
  to?: string;
};

export type BreadcrumbHeroProps = {
  category: string;          // e.g., "PRODUCTS"
  title: string;             // e.g., "RDPMS"
  description: string;       // e.g., "Remote Diagnostic & Predictive Maintenance System."
  backgroundImage: string;   // Cinematic industrial image
  path?: BreadcrumbPathItem[]; // Ignored, kept for compatibility
};

export function BreadcrumbHero({
  category,
  title,
  description,
  backgroundImage,
}: BreadcrumbHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // 1. Slow parallax/zoom on the background image
      gsap.fromTo(
        ".hero-bg-img",
        { scale: 1.15, yPercent: -5 },
        {
          scale: 1.05,
          yPercent: 5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // 2. Staggered text reveals
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      
      tl.fromTo(
        ".reveal-category",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 1.0, delay: 0.2 }
      );

      tl.fromTo(
        ".reveal-title > *",
        { yPercent: 105 },
        { yPercent: 0, duration: 1.2 },
        "-=0.8"
      );

      tl.fromTo(
        ".reveal-desc",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2 },
        "-=0.9"
      );
    }, containerRef);

    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative h-[35vh] min-h-[320px] max-h-[380px] bg-ink overflow-hidden flex flex-col justify-end pb-8 pt-[56px]"
    >
      {/* Background Image with Cinematic Dark Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={backgroundImage}
          alt={title}
          className="hero-bg-img w-full h-[120%] object-cover object-center opacity-45 select-none pointer-events-none"
        />
        {/* Increased dark overlay to place typography focus */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content Area */}
      <div className="container-editorial relative z-10 w-full">
        <div className="max-w-4xl">
          {/* 1. Small Category Label */}
          <span className="reveal-category block text-xs font-semibold tracking-[0.25em] text-white/50 uppercase mb-3">
            {category}
          </span>

          {/* 2. Large Page Title */}
          <div className="reveal-title overflow-hidden mb-3 py-1">
            <h1 className="display-clamp font-light text-white uppercase tracking-tight leading-[0.95]">
              {title}
            </h1>
          </div>

          {/* 3. Supporting Description */}
          <p className="reveal-desc text-base md:text-lg text-white/80 font-light leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
