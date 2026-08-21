import { useEffect, useRef } from "react";

/**
 * Lightweight IntersectionObserver-driven reveal hook.
 * Adds `is-visible` to any element once it enters the viewport.
 */
export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

/** Auto-attach to all `.reveal` and `.reveal-mask` elements on the page. */
export function useAutoReveal(key?: string) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = document.querySelectorAll<HTMLElement>(".reveal, .reveal-mask");
    if (reduced) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [key]);
}

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });
}

/**
 * Robust, reduced-motion-safe GSAP scroll reveal hook for `.gsap-reveal` elements.
 */
export function useGsapReveal() {
  useGSAP(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const elements = gsap.utils.toArray<HTMLElement>(".gsap-reveal");
    if (!elements.length) return;

    elements.forEach((elem) => {
      if (!elem) return;
      gsap.fromTo(
        elem,
        { y: 20, opacity: 0 },
        {
          scrollTrigger: {
            trigger: elem,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
        }
      );
    });
  }, []);
}
