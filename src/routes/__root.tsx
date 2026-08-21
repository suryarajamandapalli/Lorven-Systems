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

function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-bg">
      <Nav />
      <div className="container-editorial flex min-h-screen flex-col justify-center pt-24">
        <span className="eyebrow">Error 404</span>
        <h1 className="display-mega mt-6 font-light text-ink">404</h1>
        <p className="mt-6 max-w-md text-lg text-ink-muted">
          This page is not on file. It may have been moved or never existed.
        </p>
        <Link
          to="/"
          className="link-underline mt-10 inline-block text-[12px] font-medium uppercase tracking-[0.16em] text-ink"
        >
          Return to the index →
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-6">
      <div className="max-w-md text-center">
        <span className="eyebrow">Unexpected</span>
        <h1 className="mt-4 text-3xl font-light text-ink">This page didn't load.</h1>
        <p className="mt-3 text-sm text-ink-muted">
          Something went wrong on our end. Try again or return to the index.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-[12px] uppercase tracking-[0.16em]">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="link-underline text-ink"
          >
            Try again
          </button>
          <a href="/" className="link-underline text-ink">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

import logoLight from "../assets/logo-light.png";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "LorVen Systems Pvt. Ltd." },
      { name: "description", content: "Engineering Confidence for Critical Systems." },
      { name: "author", content: "LorVen Systems" },
      { property: "og:site_name", content: "LorVen Systems" },
      { property: "og:title", content: "LorVen Systems Pvt. Ltd." },
      { property: "og:description", content: "Engineering Confidence for Critical Systems." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://lorven-systems-1.vercel.app" },
      { property: "og:image", content: "https://lorven-systems-1.vercel.app/og-image.png" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "LorVen Systems Pvt. Ltd." },
      { name: "twitter:description", content: "Engineering Confidence for Critical Systems." },
      { name: "twitter:image", content: "https://lorven-systems-1.vercel.app/og-image.png" },
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
