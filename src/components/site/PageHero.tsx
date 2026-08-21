import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import defaultHeroBg from "@/assets/loco-hero-real.jpg";
import logoWhite from "@/assets/logo-1-white.svg";
import React from "react";

type Props = {
  eyebrow: string;
  index?: string;
  title: string;
  lede?: React.ReactNode;
  image?: string;
  align?: "left" | "center";
};

export function PageHero({ eyebrow, title, lede, image, align = "left" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cleanEyebrow = eyebrow.replace(/^[A-Z0-9.\/]+\s*—\s*/i, "").toUpperCase();

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // 1. Slow parallax/zoom on the background image
      if (image) {
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
      }

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
      <div className="absolute inset-0 z-0 overflow-hidden bg-ink">
        {image && (
          <img
            src={image}
            alt={title}
            className="hero-bg-img w-full h-[120%] object-cover object-center opacity-45 select-none pointer-events-none"
          />
        )}
        {/* Increased dark overlay to place typography focus */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {/* Fine architectural grid overlay (placed on top of overlays for high visibility) */}
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      {/* Content Area */}
      <div className="container-editorial relative z-10 w-full">
        <div className="flex flex-row items-center justify-between gap-8 w-full">
          <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center flex flex-col items-center" : ""}`}>
            {/* 1. Small Category Label */}
            {eyebrow && (
              <span className="reveal-category block text-xs font-semibold tracking-[0.25em] text-white/50 uppercase mb-3">
                {cleanEyebrow}
              </span>
            )}

            {/* 2. Large Page Title */}
            <div className="reveal-title overflow-hidden mb-3 py-1">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-white uppercase tracking-tight leading-[0.95]">
                {title}
              </h1>
            </div>

            {/* 3. Supporting Description */}
            {lede && (
              <div className="reveal-desc text-sm md:text-base text-white/80 font-light leading-relaxed max-w-2xl">
                {lede}
              </div>
            )}
          </div>

          {/* Logo on the right side - Enforce bigger size with neon glow effect */}
          <div className="hidden md:block shrink-0 reveal-desc">
            <style>{`
              @keyframes neon-pulse {
                0%, 100% {
                  filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.25));
                  opacity: 0.85;
                }
                50% {
                  filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.45));
                  opacity: 0.95;
                }
              }
              .neon-glow-logo {
                animation: neon-pulse 5s infinite ease-in-out;
              }
            `}</style>
            <img src={logoWhite} alt="LorVen Systems Logo" className="neon-glow-logo h-32 md:h-48 w-auto transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
}
