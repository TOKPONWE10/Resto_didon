import Image from "next/image";
import Link from "next/link";
import { restaurant } from "@/data/restaurant";
import { navLinks } from "@/components/layout/nav-links";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ember/40 bg-charcoal text-ivory">
      <Container className="py-20 sm:py-24 lg:py-28">
        <p className="max-w-lg font-serif text-4xl italic leading-[1.15] text-ivory sm:text-5xl">
          À bientôt, à Didon.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-14 border-t border-ivory/10 pt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="flex flex-col gap-6">
            <Image
              src="/images/logo/didon-logo-light.png"
              alt="Didon"
              width={140}
              height={48}
              className="h-10 w-auto"
            />
            <p className="max-w-[28ch] text-sm leading-relaxed text-ivory/55">
              Cuisine française au charbon de bois, au cœur de Saint-Germain-des-Prés.
            </p>
            <a
              href={restaurant.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-xs font-medium uppercase tracking-[0.2em] text-ivory/70 transition-colors hover:text-ivory"
            >
              Instagram
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-sand">Adresse</h3>
            <address className="not-italic text-sm leading-relaxed text-ivory/65">
              {restaurant.address.street}
              <br />
              {restaurant.address.postalCode} {restaurant.address.city}
              <br />
              {restaurant.address.country}
            </address>
            <a
              href={`tel:${restaurant.phone.href}`}
              className="w-fit text-sm text-ivory/65 transition-colors hover:text-ivory"
            >
              {restaurant.phone.display}
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-sand">Horaires</h3>
            <ul className="flex flex-col gap-1.5 text-sm leading-relaxed text-ivory/65">
              {restaurant.hours.map((h) => (
                <li key={h.days}>
                  <span className="text-ivory/90">{h.days}</span> — {h.ranges.join(" / ")}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-sand">Navigation</h3>
            <ul className="flex flex-col gap-1.5 text-sm text-ivory/65">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-ivory">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={restaurant.reservation.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-fit items-center rounded-full border border-ivory/30 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] transition-colors hover:bg-ivory hover:text-charcoal"
            >
              Réserver
            </Link>
          </div>
        </div>
      </Container>

      <div className="border-t border-ivory/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-ivory/40 sm:flex-row">
          <p>© {year} Didon — Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="transition-colors hover:text-ivory/70">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="transition-colors hover:text-ivory/70">
              Politique de confidentialité
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
