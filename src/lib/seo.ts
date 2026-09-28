import { restaurant } from "@/data/restaurant";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

function openingHoursSpecification() {
  const dayMap: Record<string, string[]> = {
    Lundi: ["Monday"],
    "Mardi à Jeudi": ["Tuesday", "Wednesday", "Thursday"],
    "Vendredi et Samedi": ["Friday", "Saturday"],
    Dimanche: ["Sunday"],
  };

  return restaurant.hours.flatMap(({ days, ranges }) => {
    const dayOfWeek = dayMap[days] ?? [];
    return ranges.map((range) => {
      const [opens, closes] = range.replace(/h/g, ":").replace(/:$/g, ":00").split(" – ");
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek,
        opens: normalizeTime(opens),
        closes: normalizeTime(closes),
      };
    });
  });
}

function normalizeTime(value: string) {
  const trimmed = value.trim();
  const [h, m] = trimmed.split(":");
  const hours = h.padStart(2, "0");
  const minutes = (m ?? "00").padEnd(2, "0").slice(0, 2);
  return `${hours}:${minutes}`;
}

export function restaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurant.name,
    servesCuisine: "French",
    priceRange: "€€€€",
    telephone: `+${restaurant.phone.href.replace("+", "")}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: restaurant.address.street,
      postalCode: restaurant.address.postalCode,
      addressLocality: restaurant.address.city,
      addressCountry: "FR",
    },
    url: siteUrl,
    image: `${siteUrl}/images/hero/hero-braise-1.jpg`,
    acceptsReservations: "True",
    reservationsUrl: restaurant.reservation.url,
    menu: restaurant.documents.carte,
    sameAs: [restaurant.social.instagram, restaurant.social.facebook],
    openingHoursSpecification: openingHoursSpecification(),
  };
}
