import { useEffect } from "react";

/**
 * Custom hook to detect when the mouse is near the right edge of the viewport
 * and reveal the scrollbar thumb accordingly.
 */
export function useScrollbarHover() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Do not run on devices that primarily use touch (no hover)
    const hasTouch = window.matchMedia("(pointer: coarse)").matches;
    if (hasTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      const edgeThreshold = 30; // 30px hot zone from the right edge
      const isNearEdge = window.innerWidth - e.clientX <= edgeThreshold;

      if (isNearEdge) {
        document.documentElement.classList.add("scrollbar-visible");
      } else {
        document.documentElement.classList.remove("scrollbar-visible");
      }
    };

    const handleMouseLeave = () => {
      document.documentElement.classList.remove("scrollbar-visible");
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
}
