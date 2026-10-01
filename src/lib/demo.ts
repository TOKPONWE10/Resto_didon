/**
 * Mode démonstration.
 *
 * Ce site est une proposition de refonte réalisée par UpTech pour le restaurant
 * Didon, qui ne l'a pas commandée et dispose déjà de son propre site. Tant que
 * le restaurant n'a pas donné son accord, il reste en démonstration :
 *   - bandeau permanent renvoyant vers le site officiel ;
 *   - aucune indexation (balises robots, robots.txt, en-tête X-Robots-Tag),
 *     pas de sitemap ni de données structurées « Restaurant » ;
 *   - réservations, appels et e-mails désactivés, pour que personne ne réserve
 *     une vraie table depuis une maquette.
 *
 * Pour passer en production avec l'accord du restaurant : définir
 * NEXT_PUBLIC_DEMO=false dans les variables d'environnement Vercel.
 */
export const DEMO = process.env.NEXT_PUBLIC_DEMO !== "false";

export const OFFICIAL_SITE = "https://didonrestaurant.com";

/** Liens qui joindraient réellement le restaurant. */
export function isLiveActionHref(href: string | null): boolean {
  if (!href) return false;
  return /^(tel:|mailto:|sms:)/i.test(href) || /zenchef\.com/i.test(href);
}
