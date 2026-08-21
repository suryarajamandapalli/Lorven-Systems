import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    (window as any).__lenis = lenis;
    
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Lock Lenis scroll if preloader is active initially
    const checkLoading = () => {
      return (
        document.body.classList.contains("is-loading") ||
        document.documentElement.classList.contains("is-loading")
      );
    };

    if (checkLoading()) {
      lenis.stop();
    }

    // Set up observer to start/stop Lenis scroll when "is-loading" class is toggled
    const observer = new MutationObserver(() => {
      if (checkLoading()) {
        lenis.stop();
      } else {
        lenis.start();
        // Refresh ScrollTrigger offsets after preloader unmounts
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 100);
      }
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      lenis.destroy();
    };
  }, []);
  return null;
}
