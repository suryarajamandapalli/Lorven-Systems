export const SITE_URL = "https://lorven-systems.vercel.app";
export const COMPANY_LEGAL = "LorVen Systems Pvt. Ltd.";
export const TAGLINE = "Engineering Confidence for Critical Systems.";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
export const DEFAULT_RAILWAY_DESCRIPTION =
  "LorVen Systems Private Limited engineers and manufactures safety-critical railway electronic systems, IoT monitoring platforms, signalling and telecom gears, electric locomotive subsystems, and driving simulators for Indian Railways and global transportation infrastructure.";

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Corporation",
  "@id": `${SITE_URL}/#organization`,
  "name": "LorVen Systems Private Limited",
  "alternateName": "LorVen Systems",
  "url": SITE_URL,
  "logo": `${SITE_URL}/logo-dark.png`,
  "image": DEFAULT_OG_IMAGE,
  "description": DEFAULT_RAILWAY_DESCRIPTION,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Zona Crescent, 8-682/B1 & B2, Road No. 12, Banjara Hills",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "500034",
    "addressCountry": "IN"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-9963666759",
      "contactType": "engineering support",
      "email": "ea@lorvensystems.in"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+91-9963666759",
      "contactType": "sales & tenders",
      "email": "procurement@lorvensystems.in"
    }
  ]
});

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  "name": "LorVen Systems Corporate & Business Office",
  "image": DEFAULT_OG_IMAGE,
  "url": SITE_URL,
  "telephone": "+91-9963666759",
  "email": "ea@lorvensystems.in",
  "priceRange": "$$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Zona Crescent, 8-682/B1 & B2, Road No. 12, Banjara Hills",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "500034",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 17.4081944,
    "longitude": 78.4390556
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  }
});

export const getProductSchema = (
  name: string,
  description: string,
  path: string,
  category: string = "Railway Electronic Systems"
) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": name,
  "description": description,
  "url": `${SITE_URL}${path}`,
  "category": category,
  "brand": {
    "@type": "Brand",
    "name": "LorVen Systems"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "LorVen Systems Private Limited",
    "url": SITE_URL
  }
});

interface SeoOptions {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  type?: string;
  structuredData?: Record<string, any> | Array<Record<string, any>>;
}

export function createSeoMeta({
  title = COMPANY_LEGAL,
  description = DEFAULT_RAILWAY_DESCRIPTION,
  path = "/",
  ogImage = DEFAULT_OG_IMAGE,
  type = "website",
  structuredData,
}: SeoOptions = {}) {
  const canonicalUrl = `${SITE_URL}${path}`;

  const scripts: Array<{ type: string; children: string }> = [];

  if (structuredData) {
    if (Array.isArray(structuredData)) {
      structuredData.forEach((sd) => {
        scripts.push({
          type: "application/ld+json",
          children: JSON.stringify(sd),
        });
      });
    } else {
      scripts.push({
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
      });
    }
  }

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
    scripts,
  };
}
