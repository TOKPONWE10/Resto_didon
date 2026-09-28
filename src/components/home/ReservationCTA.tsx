import Image from "next/image";
import { restaurant } from "@/data/restaurant";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function ReservationCTA() {
  return (
    <section className="relative flex min-h-[55vh] w-full items-center overflow-hidden bg-charcoal py-20">
      <Image
        src="/images/hero/hero-salle-2.jpg"
        alt="Salle du restaurant Didon prête à accueillir ses convives"
        fill
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/65 to-charcoal/45" />

      <Container className="relative z-10 flex flex-col items-center gap-9 text-center">
        <Reveal>
          <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-sand">
            <span className="h-px w-8 bg-sand/70" />
            Réservation
            <span className="h-px w-8 bg-sand/70" />
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="max-w-2xl text-balance font-serif text-5xl leading-[1.08] text-ivory sm:text-6xl lg:text-7xl">
            Une table vous attend.
          </h2>
        </Reveal>
        <Reveal delay={0.16} className="flex flex-col items-center gap-5 sm:flex-row">
          <a
            href={restaurant.reservation.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-ember px-9 py-4 text-xs font-medium uppercase tracking-[0.25em] text-ivory shadow-[0_8px_30px_-10px_rgba(0,0,0,0.6)] transition-colors duration-300 hover:bg-ember-brown"
          >
            Réserver une table
          </a>
          <a
            href={`tel:${restaurant.phone.href}`}
            className="text-base text-ivory/70 transition-colors hover:text-ivory"
          >
            ou par téléphone — {restaurant.phone.display}
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
