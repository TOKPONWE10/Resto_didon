import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { DEMO } from "@/lib/demo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (DEMO) return [];

  const routes = ["", "/carte"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
