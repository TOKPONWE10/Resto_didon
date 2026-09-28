import Image from "next/image";
import Link from "next/link";
import { restaurant } from "@/data/restaurant";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-end overflow-hidden bg-charcoal">
      <Image
        src="/images/hero/hero-braise-1.jpg"
        alt="Salle du restaurant Didon, ambiance chaleureuse au charbon de bois"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[65%_center] will-change-transform sm:object-center"
        style={{ animation: "var(--animate-hero-zoom)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/30 via-transparent to-charcoal/30" />

      <div className="relative z-10 flex w-full flex-col gap-12 px-6 pb-28 pt-40 sm:px-10 sm:pb-32 lg:px-16 lg:pb-36">
        <div
          className="flex flex-col gap-7 opacity-0 [animation-delay:0.1s]"
          style={{ animation: "var(--animate-fade-up)" }}
        >
          <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-sand">
            <span className="h-px w-8 bg-sand/70" />
            {restaurant.neighborhood}
          </span>
          <h1 className="font-serif text-[16vw] font-normal leading-[0.88] text-ivory sm:text-[10vw] lg:text-[8rem]">
            Didon
          </h1>
          <p className="max-w-xl font-serif text-2xl italic leading-snug text-ivory/90 sm:text-3xl lg:text-4xl">
            {restaurant.tagline}
          </p>
        </div>

        <div
          className="flex flex-col gap-4 opacity-0 [animation-delay:0.45s] sm:flex-row sm:items-center"
          style={{ animation: "var(--animate-fade-up)" }}
        >
          <Link
            href={restaurant.reservation.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-ember px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-ivory shadow-[0_8px_30px_-10px_rgba(0,0,0,0.6)] transition-colors duration-300 hover:bg-ember-brown"
          >
            Réserver une table
          </Link>
          <Link
            href="#carte"
            className="inline-flex items-center justify-center rounded-full border border-ivory/35 px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-ivory transition-colors duration-300 hover:bg-ivory hover:text-charcoal"
          >
            Découvrir la carte
          </Link>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-7 z-10 flex flex-col items-center gap-3 opacity-0 [animation-delay:1s]" style={{ animation: "var(--animate-fade-up)" }}>
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-ivory/50">
          Découvrir
        </span>
        <div className="flex h-10 w-px flex-col items-center overflow-hidden">
          <span className="h-full w-px animate-pulse bg-ivory/50" />
        </div>
      </div>
    </section>
  );
}
