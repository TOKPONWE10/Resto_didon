import { restaurant } from "@/data/restaurant";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Location() {
  const mapSrc = `https://maps.google.com/maps?q=${restaurant.address.mapsQuery}&z=16&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${restaurant.address.mapsQuery}`;

  return (
    <section id="contact" className="scroll-mt-20 bg-ivory py-16 sm:py-20 lg:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col gap-12 lg:col-span-5">
          <SectionHeading eyebrow="Localisation" title="Au cœur de Saint-Germain-des-Prés." />

          <Reveal delay={0.1} className="flex flex-col divide-y divide-charcoal/10">
            <div className="pb-7">
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-charcoal/45">
                Adresse
              </h3>
              <address className="mt-3 not-italic font-serif text-2xl leading-snug">
                {restaurant.address.street}
                <br />
                {restaurant.address.postalCode} {restaurant.address.city}, {restaurant.address.country}
              </address>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-xs font-medium uppercase tracking-[0.2em] text-ember underline underline-offset-4 transition-colors hover:text-ember-brown"
              >
                Itinéraire
              </a>
            </div>

            <div className="py-7">
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-charcoal/45">
                Téléphone
              </h3>
              <a
                href={`tel:${restaurant.phone.href}`}
                className="mt-3 inline-block font-serif text-2xl transition-colors hover:text-ember"
              >
                {restaurant.phone.display}
              </a>
            </div>

            <div className="pt-7">
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-charcoal/45">
                Horaires
              </h3>
              <ul className="mt-3 flex flex-col gap-1.5 text-base leading-relaxed text-charcoal/65">
                {restaurant.hours.map((h) => (
                  <li key={h.days}>
                    <span className="text-charcoal">{h.days}</span> — {h.ranges.join(" / ")}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:col-span-7">
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-charcoal/10 sm:aspect-[16/10]">
            <iframe
              src={mapSrc}
              title={`Carte — ${restaurant.address.full}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full grayscale-[20%] contrast-[1.02]"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
