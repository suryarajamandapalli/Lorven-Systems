import { useState, useEffect } from "react";
import { Logo } from "./Logo";

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [exit, setExit] = useState(false);

  // Lock scrolling during preloader
  useEffect(() => {
    document.body.classList.add("scroll-locked", "preloader-active", "is-loading");
    document.documentElement.classList.add("scroll-locked", "preloader-active");
  }, []);

  // Remove scroll lock as soon as preloader hides (returning null keeps component
  // in the React tree so the [] cleanup above never fires — watch visible instead)
  useEffect(() => {
    if (!visible) {
      document.body.classList.remove("scroll-locked", "preloader-active", "is-loading");
      document.documentElement.classList.remove("scroll-locked", "preloader-active");
    }
  }, [visible]);

  useEffect(() => {
    // After logo drawing animation finishes (~1000ms), start fading out the whole preloader
    const exitTimer = setTimeout(() => {
      setExit(true);
      document.body.classList.remove("is-loading");
    }, 1100);

    // Unmount after fade completes (600ms fade duration)
    const destroyTimer = setTimeout(() => {
      setVisible(false);
    }, 1800);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(destroyTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#F5F5F7] transition-opacity duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        exit ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <Logo
        id="preloader-logo"
        animated={true}
        idPrefix="preloader"
        className="logo-svg w-[320px] md:w-[440px] h-auto select-none overflow-visible text-[#1b1b1b]"
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Main SVG opacity reveal */
        .logo-svg {
          animation: revealLogo 0.5s ease-out forwards;
        }
        @keyframes revealLogo {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }

        /* Generic path drawing animation base */
        .logo-path {
          stroke-dasharray: 1500;
          stroke-dashoffset: 1500;
          fill: rgba(27, 27, 27, 0);
          stroke: rgba(27, 27, 27, 0.75);
          stroke-width: 1.5px;
          animation: drawSinglePath 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes drawSinglePath {
          0% {
            stroke-dashoffset: 1500;
            fill: rgba(27, 27, 27, 0);
            stroke: rgba(27, 27, 27, 0.75);
          }
          60% {
            stroke-dashoffset: 0;
            fill: rgba(27, 27, 27, 0);
            stroke: rgba(27, 27, 27, 0.75);
          }
          85%, 100% {
            stroke-dashoffset: 0;
            fill: currentColor;
            stroke: rgba(27, 27, 27, 0);
          }
        }

        /* Staggered delay offsets representing electrical signals propagating */
        .path-1 { animation-delay: 0ms; }
        .path-2 { animation-delay: 50ms; }
        .path-3 { animation-delay: 100ms; }
        .path-4 { animation-delay: 150ms; }
        .path-5 { animation-delay: 200ms; }
        .path-6 { animation-delay: 250ms; }
        .path-7 { animation-delay: 300ms; }
        .path-8 { animation-delay: 350ms; }
        .path-9 { animation-delay: 400ms; }

        .path-systems {
          animation-delay: 480ms;
          animation-duration: 0.6s;
        }
      `,
        }}
      />
    </div>
  );
}
