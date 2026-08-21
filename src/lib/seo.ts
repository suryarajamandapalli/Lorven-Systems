export const SITE_URL = "https://lorven-systems-1.vercel.app";
export const COMPANY_LEGAL = "LorVen Systems Pvt. Ltd.";
export const TAGLINE = "Engineering Confidence for Critical Systems.";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

interface SeoOptions {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  type?: string;
}

export function createSeoMeta({
  title = COMPANY_LEGAL,
  description = TAGLINE,
  path = "/",
  ogImage = DEFAULT_OG_IMAGE,
  type = "website",
}: SeoOptions = {}) {
  const canonicalUrl = `${SITE_URL}${path}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "author", content: "LorVen Systems" },
      
      // Open Graph
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: ogImage },
      { property: "og:url", content: canonicalUrl },
      { property: "og:site_name", content: "LorVen Systems" },
      { property: "og:type", content: type },
      { property: "og:locale", content: "en_IN" },

      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [
      { rel: "canonical", href: canonicalUrl },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  };
}
