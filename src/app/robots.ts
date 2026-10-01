import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { DEMO } from "@/lib/demo";

export default function robots(): MetadataRoute.Robots {
  if (DEMO) {
    // L'exploration reste permise exprès : le site a déjà été indexé, et Google
    // doit pouvoir revenir lire la consigne noindex pour retirer les pages. Un
    // Disallow l'en empêcherait et les laisserait dans les résultats.
    return { rules: { userAgent: "*", allow: "/" } };
  }
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
