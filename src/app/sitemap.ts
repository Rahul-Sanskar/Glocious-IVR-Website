import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = "https://www.thesoftbiz.com";

  const servicePages = [
    "web-development",
    "shopify-solutions",
    "amazon-services",
    "digital-marketing",
    "google-ads",
    "social-media",
  ];

  const staticPages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/team", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/case-studies", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/blog", priority: 0.6, changeFrequency: "weekly" as const },
    { path: "/work", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return [
    ...staticPages.map(({ path, priority, changeFrequency }) => ({
      url: `${BASE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })),
    ...servicePages.map((slug) => ({
      url: `${BASE_URL}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
