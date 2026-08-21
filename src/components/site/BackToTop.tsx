import { useState, useEffect } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [nearBottom, setNearBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      
      // Appear once scrolled ~30-40% down or past 400px
      if (scrollPosition > Math.min(400, scrollHeight * 0.35)) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      // Check if near bottom of page (within 160px of bottom) to lift button above footer links
      if (scrollHeight - scrollPosition < 160) {
        setNearBottom(true);
      } else {
        setNearBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      const lenis = (window as any).__lenis;
      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Scroll to top"
      className={`fixed right-6 md:right-8 z-50 p-2.5 rounded-lg bg-ink/90 border border-white/20 text-white shadow-xl hover:bg-steel hover:border-steel hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-md flex items-center justify-center group cursor-pointer ${
        nearBottom ? "bottom-20 md:bottom-24" : "bottom-14 md:bottom-16"
      } ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5"
      >
        <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
