import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Logo } from "./Logo";
import { PRODUCT_INDEX, SERVICE_INDEX } from "@/lib/site-data";

type Pane = "products" | "services" | null;

interface Position {
  top: number;
  left: number;
}

export function Nav({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [pane, setPane] = useState<Pane>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navReady, setNavReady] = useState(false);
  const [logoReady, setLogoReady] = useState(false);

  const closeTimer = useRef<number | null>(null);
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navRef = useRef<HTMLDivElement>(null);
  const productsTrigRef = useRef<HTMLDivElement | null>(null);
  const servicesTrigRef = useRef<HTMLDivElement | null>(null);
  // Track portal root nodes so we can exclude them from the outside-click check.
  // Portals render into document.body (outside navRef), so without these refs,
  // every click inside a portal fires closeAll() before the router can navigate.
  const portalProductsRef = useRef<HTMLDivElement | null>(null);
  const portalServicesRef = useRef<HTMLDivElement | null>(null);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reset dropdown state on route change
  useEffect(() => {
    setPane(null);
    setActiveCategory(null);
    setMobileOpen(false);
  }, [pathname]);

  // Entrance animation timings
  useEffect(() => {
    const t1 = window.setTimeout(() => setLogoReady(true), 1800);
    const t2 = window.setTimeout(() => setNavReady(true), 1800);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  // Keyboard & outside-click handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const insideNav = navRef.current?.contains(target);
      const insideProductsPortal = portalProductsRef.current?.contains(target);
      const insideServicesPortal = portalServicesRef.current?.contains(target);
      if (!insideNav && !insideProductsPortal && !insideServicesPortal) {
        closeAll();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const solid = scrolled || !transparent || pane !== null;

  const openPane = (p: Pane) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    if (p !== pane) {
      setActiveCategory(null);
    }
    setPane(p);
  };

  const schedClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => {
      setPane(null);
      setActiveCategory(null);
    }, 200);
  };

  const cancelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  };

  const closeAll = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setPane(null);
    setActiveCategory(null);
  };

  // Close pane + navigate. Used by portal buttons.
  // We close the pane AFTER calling navigate so the portal DOM is still mounted
  // when TanStack Router processes the navigation event.
  const handleNavigate = (to: string) => {
    navigate({ to: to as any });
    setPane(null);
  };

  return (
    <>
      <header
        ref={navRef}
        className="fixed inset-x-0 top-0 z-[9998] transition-none"
        onMouseLeave={schedClose}
      >
        {/* Header Background */}
        <div
          className={`absolute inset-0 z-[-1] bg-[#F5F5F7] border-b border-rule/30 transition-opacity duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            solid ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />
        <div
          className={`absolute inset-0 z-[-1] shadow-sm transition-opacity duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            solid ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />

        <div className="container-editorial flex h-[56px] items-center justify-between lg:justify-center lg:gap-x-12">
          {/* Left Nav */}
          <nav className="hidden items-center gap-10 text-[11px] lg:text-[13px] font-medium tracking-[0.15em] lg:flex">
            <div
              style={{
                opacity: navReady ? 1 : 0,
                transform: navReady ? "translateX(0)" : "translateX(30px)",
                transition:
                  "opacity 800ms cubic-bezier(0.22,1,0.36,1) 0ms, transform 900ms cubic-bezier(0.22,1,0.36,1) 0ms",
              }}
            >
              <NavLink to="/about" current={pathname} solid={solid}>
                ABOUT
              </NavLink>
            </div>

            <div
              ref={productsTrigRef}
              className="relative py-2"
              onMouseEnter={() => openPane("products")}
              onMouseLeave={schedClose}
              style={{
                opacity: navReady ? 1 : 0,
                transform: navReady ? "translateX(0)" : "translateX(30px)",
                transition:
                  "opacity 800ms cubic-bezier(0.22,1,0.36,1) 100ms, transform 900ms cubic-bezier(0.22,1,0.36,1) 100ms",
              }}
            >
              <NavTrigger
                label="PRODUCTS"
                active={pane === "products" || pathname.startsWith("/products")}
                solid={solid}
                onEnter={() => openPane("products")}
                onClick={() => setPane(pane === "products" ? null : "products")}
              />
            </div>
          </nav>

          {/* Centered Logo */}
          <Link
            to="/"
            aria-label="LorVen Systems — home"
            onMouseEnter={() => openPane(null)}
            className="relative shrink-0 flex items-center justify-center mx-4"
            style={{ width: "clamp(100px, 8vw, 120px)", height: "auto" }}
          >
            <Logo
              id="navbar-logo"
              idPrefix="nav"
              className={`w-full h-auto select-none overflow-visible transition-colors duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                solid ? "text-ink" : "text-on-dark"
              }`}
              style={{
                opacity: logoReady ? 1 : 0,
                transition:
                  "opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), color 1000ms cubic-bezier(0.16,1,0.3,1)",
              }}
            />
          </Link>

          {/* Right Nav */}
          <nav className="hidden items-center gap-10 text-[11px] lg:text-[13px] font-medium tracking-[0.15em] lg:flex">
            <div
              ref={servicesTrigRef}
              className="relative py-2"
              onMouseEnter={() => openPane("services")}
              onMouseLeave={schedClose}
              style={{
                opacity: navReady ? 1 : 0,
                transform: navReady ? "translateX(0)" : "translateX(-30px)",
                transition:
                  "opacity 800ms cubic-bezier(0.22,1,0.36,1) 0ms, transform 900ms cubic-bezier(0.22,1,0.36,1) 0ms",
              }}
            >
              <NavTrigger
                label="SERVICES"
                active={pane === "services" || pathname.startsWith("/services")}
                solid={solid}
                onEnter={() => openPane("services")}
                onClick={() => setPane(pane === "services" ? null : "services")}
              />
            </div>

            <div
              style={{
                opacity: navReady ? 1 : 0,
                transform: navReady ? "translateX(0)" : "translateX(-30px)",
                transition:
                  "opacity 800ms cubic-bezier(0.22,1,0.36,1) 100ms, transform 900ms cubic-bezier(0.22,1,0.36,1) 100ms",
              }}
            >
              <NavLink to="/contact" current={pathname} solid={solid}>
                CONTACT
              </NavLink>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className={`lg:hidden p-1.5 rounded-md hover:bg-ink/5 dark:hover:bg-white/5 transition-colors duration-[800ms] ${
              solid ? "text-ink" : "text-on-dark"
            }`}
          >
            <svg
              width="28"
              height="22"
              viewBox="0 0 28 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="group"
            >
              <path
                d="M 2 4 H 20 A 6 6 0 0 1 26 10 V 20"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                className="transition-transform duration-300 group-hover:translate-x-[1px] group-hover:translate-y-[1px]"
              />
              <path
                d="M 2 12 H 14 A 6 6 0 0 1 20 18 V 20"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                className="transition-transform duration-300 group-hover:translate-x-[0.5px] group-hover:translate-y-[0.5px]"
              />
            </svg>
          </button>
        </div>

        {/* Bottom Hairline */}
        <div
          className={`hairline transition-opacity duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            solid ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Mobile Nav Overlay */}
        <MobileNav
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          pathname={pathname}
        />
      </header>

      {/* PORTAL DROPDOWNS — rendered at document.body to escape z-index stacking */}
      <ProductsDropdownPortal
        open={pane === "products"}
        triggerRef={productsTrigRef}
        portalRef={portalProductsRef}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        onMouseEnter={cancelClose}
        onMouseLeave={schedClose}
        onNavigate={handleNavigate}
      />

      <ServicesDropdownPortal
        open={pane === "services"}
        triggerRef={servicesTrigRef}
        portalRef={portalServicesRef}
        onMouseEnter={cancelClose}
        onMouseLeave={schedClose}
        onNavigate={handleNavigate}
      />
    </>
  );
}

// ---------------------------------------------------------------------------
// NavLink & NavTrigger Components
// ---------------------------------------------------------------------------

function NavLink({
  to,
  current,
  solid,
  children,
}: {
  to: string;
  current: string;
  solid: boolean;
  children: React.ReactNode;
}) {
  const active = to === "/" ? current === "/" : current.startsWith(to);
  const colorClass = solid ? "text-ink" : "text-on-dark";
  const opacityClass = solid
    ? "opacity-100"
    : active
    ? "opacity-100"
    : "opacity-100 hover:opacity-80";
  return (
    <Link
      to={to}
      className={`link-underline transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${colorClass} ${opacityClass}`}
    >
      {children}
    </Link>
  );
}

function NavTrigger({
  label,
  active,
  solid,
  onEnter,
  onClick,
}: {
  label: string;
  active: boolean;
  solid: boolean;
  onEnter: () => void;
  onClick: () => void;
}) {
  const colorClass = solid ? "text-ink" : "text-on-dark";
  const opacityClass = solid
    ? "opacity-100"
    : active
    ? "opacity-100"
    : "opacity-100 hover:opacity-80";
  return (
    <button
      type="button"
      onMouseEnter={onEnter}
      onFocus={onEnter}
      onClick={onClick}
      className={`link-underline transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${colorClass} ${opacityClass}`}
    >
      {label}
    </button>
  );
}

// ---------------------------------------------------------------------------
// Products Multi-Level Flyout Dropdown Portal
// ---------------------------------------------------------------------------

function ProductsDropdownPortal({
  open,
  triggerRef,
  portalRef,
  activeCategory,
  setActiveCategory,
  onMouseEnter,
  onMouseLeave,
  onNavigate,
}: {
  open: boolean;
  triggerRef: React.RefObject<HTMLDivElement | null>;
  portalRef: React.RefObject<HTMLDivElement | null>;
  activeCategory: string | null;
  setActiveCategory: (slug: string | null) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onNavigate: (to: string) => void;
}) {
  const [mounted, setMounted] = useState(false);
  const [pos, setPos] = useState<Position | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open || !triggerRef.current) return;
    const updatePos = () => {
      if (triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect();
        const portalWidth = 542;
        const targetLeft = rect.left + rect.width / 2 - 145;
        const boundedLeft = Math.max(16, Math.min(targetLeft, window.innerWidth - portalWidth - 16));
        setPos({
          top: rect.bottom + 10,
          left: boundedLeft,
        });
      }
    };
    updatePos();
    window.addEventListener("resize", updatePos);
    window.addEventListener("scroll", updatePos, { passive: true });
    return () => {
      window.removeEventListener("resize", updatePos);
      window.removeEventListener("scroll", updatePos);
    };
  }, [open, triggerRef]);

  if (!mounted || typeof document === "undefined") return null;

  const effectiveCategory = activeCategory || PRODUCT_INDEX[0].slug;
  const activeCategoryIndex = Math.max(
    0,
    PRODUCT_INDEX.findIndex((c) => c.slug === effectiveCategory)
  );
  const activeCategoryData = PRODUCT_INDEX[activeCategoryIndex];
  const subTopMargin = activeCategoryIndex * 48;

  return createPortal(
    <div
      ref={portalRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`fixed transition-all duration-[180ms] ${
        open && pos
          ? "opacity-100 translate-y-0 pointer-events-auto visible"
          : "opacity-0 -translate-y-[6px] pointer-events-none invisible"
      }`}
      style={{
        top: `${pos?.top ?? 0}px`,
        left: `${pos?.left ?? 0}px`,
        width: "542px",
        maxWidth: "calc(100vw - 32px)",
        zIndex: 2147483647,
        pointerEvents: open && pos ? "auto" : "none",
        letterSpacing: "normal",
        textTransform: "none",
      }}
    >
      <div className="relative w-full flex items-start">
        {/* Parent Category Card — 290px */}
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #E5E7EB",
            borderRadius: "8px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            pointerEvents: "auto",
          }}
          className="w-[290px] shrink-0 p-[6px] flex flex-col gap-[2px]"
        >
          {PRODUCT_INDEX.map((cat) => {
            const isActive = effectiveCategory === cat.slug;
            return (
              <button
                key={cat.slug}
                type="button"
                onMouseEnter={() => setActiveCategory(cat.slug)}
                onFocus={() => setActiveCategory(cat.slug)}
                onClick={() => onNavigate(cat.to)}
                className={`group w-full flex items-center justify-between px-[16px] h-[46px] min-h-[46px] text-[15px] font-medium rounded-[6px] transition-colors duration-[150ms] ease-out text-left cursor-pointer border-none outline-none ${
                  isActive
                    ? "bg-[#F5F6F8] text-[#111111] font-semibold"
                    : "text-[#111111]/85 hover:text-[#111111] hover:bg-[#F5F6F8]"
                }`}
              >
                <span className="link-underline">{cat.title}</span>
                <span className="text-[14px] text-black/30 select-none ml-2">›</span>
              </button>
            );
          })}
        </div>

        {/* Submenu Card — 240px, aligned to hovered row */}
        <div
          className="ml-[12px] w-[240px] shrink-0 pointer-events-auto"
          style={{
            marginTop: `${subTopMargin}px`,
            transition: "margin-top 180ms cubic-bezier(0.16,1,0.3,1)",
            pointerEvents: "auto",
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #E5E7EB",
              borderRadius: "8px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              pointerEvents: "auto",
            }}
            className="w-full p-[6px] flex flex-col gap-[2px]"
          >
            {activeCategoryData.children.map((child) => (
              <button
                key={child.slug}
                type="button"
                onClick={() => onNavigate(child.to)}
                className="group w-full flex items-center px-[16px] h-[44px] min-h-[44px] text-[14.5px] font-medium text-[#111111]/85 hover:text-steel hover:bg-[#F5F6F8] rounded-[6px] transition-colors duration-[150ms] ease-out text-left cursor-pointer border-none outline-none"
              >
                <span className="link-underline">{child.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

// ---------------------------------------------------------------------------
// Services Single Card Dropdown Portal
// ---------------------------------------------------------------------------

function ServicesDropdownPortal({
  open,
  triggerRef,
  portalRef,
  onMouseEnter,
  onMouseLeave,
  onNavigate,
}: {
  open: boolean;
  triggerRef: React.RefObject<HTMLDivElement | null>;
  portalRef: React.RefObject<HTMLDivElement | null>;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onNavigate: (to: string) => void;
}) {
  const [mounted, setMounted] = useState(false);
  const [pos, setPos] = useState<Position | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open || !triggerRef.current) return;
    const updatePos = () => {
      if (triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect();
        const portalWidth = 330;
        const targetLeft = rect.left + rect.width / 2 - 165;
        const boundedLeft = Math.max(16, Math.min(targetLeft, window.innerWidth - portalWidth - 16));
        setPos({
          top: rect.bottom + 10,
          left: boundedLeft,
        });
      }
    };
    updatePos();
    window.addEventListener("resize", updatePos);
    window.addEventListener("scroll", updatePos, { passive: true });
    return () => {
      window.removeEventListener("resize", updatePos);
      window.removeEventListener("scroll", updatePos);
    };
  }, [open, triggerRef]);

  if (!mounted || typeof document === "undefined") return null;

  return createPortal(
    <div
      ref={portalRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`fixed transition-all duration-[180ms] ${
        open && pos
          ? "opacity-100 translate-y-0 pointer-events-auto visible"
          : "opacity-0 -translate-y-[6px] pointer-events-none invisible"
      }`}
      style={{
        top: `${pos?.top ?? 0}px`,
        left: `${pos?.left ?? 0}px`,
        width: "330px",
        maxWidth: "calc(100vw - 32px)",
        zIndex: 2147483647,
        pointerEvents: open && pos ? "auto" : "none",
        letterSpacing: "normal",
        textTransform: "none",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #E5E7EB",
          borderRadius: "8px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          pointerEvents: "auto",
        }}
        className="w-full p-[6px] flex flex-col gap-[2px]"
      >
        {SERVICE_INDEX.map((s) => (
          <button
            key={s.slug}
            type="button"
            onClick={() => onNavigate(`/services/${s.slug}`)}
            className="group w-full flex items-center px-[16px] h-[46px] min-h-[46px] text-[15px] font-medium text-[#111111]/85 hover:text-steel hover:bg-[#F5F6F8] rounded-[6px] transition-colors duration-[150ms] ease-out text-left cursor-pointer border-none outline-none"
          >
            <span className="link-underline">{s.title}</span>
          </button>
        ))}
      </div>
    </div>,
    document.body
  );
}

// ---------------------------------------------------------------------------
// Mobile Nav Overlay
// ---------------------------------------------------------------------------

function MobileNav({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState<
    Record<string, boolean>
  >({});

  const toggleMobileCategory = (slug: string) => {
    setMobileCategoriesOpen((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }));
  };

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-bg text-ink transition-[clip-path] duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] lg:hidden flex flex-col ${
        open ? "[clip-path:inset(0_0_0_0)]" : "[clip-path:inset(0_0_100%_0)]"
      }`}
      aria-hidden={!open}
    >
      <div className="container-editorial flex h-[56px] items-center justify-between shrink-0 border-b border-rule/10">
        <Logo
          idPrefix="mobile-nav"
          className="select-none text-ink"
          style={{ width: "120px", height: "auto" }}
        />
        <button
          onClick={onClose}
          className="text-[13px] font-semibold tracking-[0.08em] uppercase"
        >
          Close
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <nav className="container-editorial py-10 flex flex-col gap-5 pb-24">
          <div className="border-t border-rule/20 pt-4">
            <Link
              to="/about"
              onClick={onClose}
              className={`flex items-baseline justify-between ${
                pathname.startsWith("/about") ? "text-ink font-semibold" : "text-ink/75"
              }`}
            >
              <span className="text-3xl font-light">ABOUT</span>
              <span className="num-mono text-[10px] text-ink-muted">01</span>
            </Link>
          </div>

          <div className="border-t border-rule/20 pt-4 space-y-4">
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="w-full flex items-baseline justify-between text-left focus:outline-none"
            >
              <span
                className={`text-3xl font-light flex items-center gap-3 ${
                  pathname.startsWith("/products") ? "text-ink font-medium" : "text-ink/75"
                }`}
              >
                PRODUCTS
                <span className="text-base text-ink-muted/60">
                  {productsOpen ? "▲" : "▼"}
                </span>
              </span>
              <span className="num-mono text-[10px] text-ink-muted">02</span>
            </button>

            {productsOpen && (
              <div className="pl-4 border-l border-rule/35 space-y-5 pt-2 pb-4">
                {PRODUCT_INDEX.map((p) => {
                  const catOpen = !!mobileCategoriesOpen[p.slug];
                  return (
                    <div key={p.slug} className="space-y-2">
                      <button
                        onClick={() => toggleMobileCategory(p.slug)}
                        className="w-full flex items-center justify-between text-left focus:outline-none"
                      >
                        <span className="text-[15px] font-medium uppercase tracking-wider text-ink-muted hover:text-ink transition-colors flex items-center gap-2 py-1">
                          <span className="text-[10px] opacity-75">
                            {catOpen ? "▼" : "▶"}
                          </span>
                          {p.title}
                        </span>
                      </button>

                      {catOpen && (
                        <div className="pl-5 space-y-2.5 border-l border-rule/20 mt-1 pb-2">
                          {p.children.map((c) => (
                            <Link
                              key={c.slug}
                              to={c.to as any}
                              onClick={onClose}
                              className="block text-sm text-ink-muted hover:text-ink font-semibold"
                            >
                              {c.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="border-t border-rule/20 pt-4 space-y-4">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full flex items-baseline justify-between text-left focus:outline-none"
            >
              <span
                className={`text-3xl font-light flex items-center gap-3 ${
                  pathname.startsWith("/services") ? "text-ink font-medium" : "text-ink/75"
                }`}
              >
                SERVICES
                <span className="text-base text-ink-muted/60">
                  {servicesOpen ? "▲" : "▼"}
                </span>
              </span>
              <span className="num-mono text-[10px] text-ink-muted">03</span>
            </button>

            {servicesOpen && (
              <div className="pl-4 border-l border-rule/35 space-y-3 pt-2 pb-4">
                <div className="space-y-2.5 pl-3 border-l border-rule/15">
                  {SERVICE_INDEX.map((s, idx) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      onClick={onClose}
                      className="flex justify-between items-center text-sm text-ink-muted hover:text-ink font-semibold"
                    >
                      <span>{s.title}</span>
                      <span className="num-mono text-[10px] opacity-60">
                        {idx + 1}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-rule/20 pt-4">
            <Link
              to="/contact"
              onClick={onClose}
              className={`flex items-baseline justify-between ${
                pathname.startsWith("/contact") ? "text-ink font-semibold" : "text-ink/75"
              }`}
            >
              <span className="text-3xl font-light">CONTACT</span>
              <span className="num-mono text-[10px] text-ink-muted">04</span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
