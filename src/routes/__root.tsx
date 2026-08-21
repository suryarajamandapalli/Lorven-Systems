import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode, useEffect } from "react";

import appCss from "../styles.css?url";
import { Nav } from "../components/site/Nav";
import { Footer } from "../components/site/Footer";
import { SmoothScroll } from "../components/site/SmoothScroll";
import { Preloader } from "../components/site/Preloader";
import { BackToTop } from "../components/site/BackToTop";
import { useAutoReveal } from "../hooks/use-reveal";
import { useScrollbarHover } from "../hooks/use-scrollbar-hover";

import { NotFoundView } from "./$";

function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-bg flex flex-col justify-between">
      <Nav />
      <main className="flex-1">
        <NotFoundView />
      </main>
      <Footer />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-bg text-ink flex flex-col justify-between">
      <Nav />
      <main className="flex-1 flex items-center justify-center py-24 px-6">
        <div className="max-w-lg w-full bg-section border border-rule/30 rounded-2xl p-8 sm:p-10 text-center space-y-6 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/25 rounded-full text-xs font-mono font-semibold uppercase tracking-widest text-red-600">
            <span>Diagnostic Alert // Processing Interrupted</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-light text-ink uppercase tracking-wide">
              Unable to Load Specification
            </h1>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-light">
              An unexpected system error occurred during page compilation or data retrieval. You can try refreshing the route or return to the main directory.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => {
                router.invalidate();
                reset();
              }}
              className="px-6 py-3 bg-ink text-white hover:bg-steel text-xs font-mono font-bold uppercase tracking-wider rounded transition-colors shadow-sm cursor-pointer"
            >
              Retry Connection
            </button>
            <a
              href="/"
              className="px-6 py-3 border border-rule/40 text-ink hover:border-ink text-xs font-mono font-bold uppercase tracking-wider rounded transition-colors cursor-pointer"
            >
              Return Home →
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });
}

import logoLight from "../assets/logo-light.png";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "LorVen Systems | Railway Electronic Systems & Signalling Technologies" },
      { name: "description", content: "LorVen Systems Private Limited engineers and manufactures safety-critical railway electronic systems, IoT monitoring platforms, signalling and telecom gears, electric locomotive subsystems, and driving simulators for Indian Railways and global transportation infrastructure." },
      { name: "author", content: "LorVen Systems" },
      { property: "og:site_name", content: "LorVen Systems" },
      { property: "og:title", content: "LorVen Systems | Railway Electronic Systems & Signalling Technologies" },
      { property: "og:description", content: "LorVen Systems Private Limited engineers and manufactures safety-critical railway electronic systems, IoT monitoring platforms, signalling and telecom gears, electric locomotive subsystems, and driving simulators for Indian Railways and global transportation infrastructure." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://lorvensystems.in" },
      { property: "og:image", content: "https://lorvensystems.in/og-image.png" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "LorVen Systems | Railway Electronic Systems & Signalling Technologies" },
      { name: "twitter:description", content: "LorVen Systems Private Limited engineers and manufactures safety-critical railway electronic systems, IoT monitoring platforms, signalling and telecom gears, electric locomotive subsystems, and driving simulators for Indian Railways and global transportation infrastructure." },
      { name: "twitter:image", content: "https://lorvensystems.in/og-image.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-bg text-ink antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useAutoReveal(pathname);
  useScrollbarHover();
  const transparent = pathname === "/";

  useEffect(() => {
    if (typeof window === "undefined") return;
    const matcher = window.matchMedia("(prefers-color-scheme: dark)");
    const updateFavicon = (e: MediaQueryListEvent | MediaQueryList) => {
      const generalLink = document.querySelector("link[rel*='icon']:not([media])") as HTMLLinkElement;
      if (generalLink) {
        generalLink.href = e.matches ? "/favicon-dark.png" : "/favicon-light.png";
      } else {
        // Create it if not present
        let link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
        if (!link) {
          link = document.createElement("link");
          link.rel = "icon";
          link.type = "image/png";
          document.head.appendChild(link);
        }
        link.href = e.matches ? "/favicon-dark.png" : "/favicon-light.png";
      }
    };
    
    updateFavicon(matcher);

    if (matcher.addEventListener) {
      matcher.addEventListener("change", updateFavicon);
      return () => matcher.removeEventListener("change", updateFavicon);
    } else {
      matcher.addListener(updateFavicon);
      return () => matcher.removeListener(updateFavicon);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Preloader key={pathname} />
      <SmoothScroll />
      <Nav transparent={transparent} />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </QueryClientProvider>
  );
}
