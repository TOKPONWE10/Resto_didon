import type { CSSProperties } from "react";
import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyReserveBar } from "@/components/layout/StickyReserveBar";
import { DemoBanner } from "@/components/layout/DemoBanner";
import { DEMO } from "@/lib/demo";
import { restaurant } from "@/data/restaurant";
import { restaurantJsonLd, siteUrl } from "@/lib/seo";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const title = "Didon — Cuisine française au charbon de bois, Saint-Germain-des-Prés, Paris";
const description =
  "Didon, restaurant bistronomique de partage au cœur du 6e arrondissement de Paris. Une cuisine française créative cuite au charbon de bois, pensée par Michel Portos et Mélissa Altenberg.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Didon",
  },
  description,
  keywords: [
    "restaurant français Paris 6",
    "restaurant Saint-Germain-des-Prés",
    "restaurant bistronomique Paris",
    "cuisine au charbon de bois",
    "rue du Dragon restaurant",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Didon",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/images/hero/hero-braise-1.jpg", width: 2560, height: 1707, alt: "Restaurant Didon, Paris" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero/hero-braise-1.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  // En démonstration, le site ne doit pas apparaître dans les moteurs de
  // recherche : il concurrencerait le site officiel du restaurant.
  robots: DEMO
    ? { index: false, follow: false, googleBot: { index: false, follow: false } }
    : { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: restaurant.concept ? "#141210" : "#141210",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${inter.variable} h-full`}
      style={DEMO ? ({ "--demo-h": "40px" } as CSSProperties) : undefined}
    >
      <body
        className="flex min-h-full flex-col bg-ivory font-sans text-charcoal antialiased"
        style={DEMO ? { paddingTop: "var(--demo-h)" } : undefined}
      >
        {/* Les données structurées « Restaurant » présenteraient ce site comme
            celui du restaurant : réservées à la version validée par Didon. */}
        {DEMO ? null : (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd()) }}
          />
        )}
        <DemoBanner />
        <Header />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <StickyReserveBar />
      </body>
    </html>
  );
}
