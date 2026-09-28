import Image from "next/image";
import { restaurant } from "@/data/restaurant";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Maison() {
  return (
    <section id="maison" className="scroll-mt-20 bg-ivory py-28 sm:py-36 lg:py-44">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <Reveal>
            <div className="group relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/gallery/devanture.jpg"
                alt="Devanture du restaurant Didon, 8 rue du Dragon, Paris"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
              />
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col gap-8 lg:col-span-5 lg:col-start-8">
          <Reveal>
            <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-ember">
              <span className="h-px w-8 bg-ember/60" />
              La Maison Didon
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-balance font-serif text-5xl leading-[1.08] sm:text-6xl">
              {restaurant.story.title}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="max-w-md text-balance text-lg leading-[1.75] text-charcoal/70">
              {restaurant.story.paragraphs[2]}
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <address className="not-italic text-base leading-relaxed text-charcoal/55">
              {restaurant.address.street}
              <br />
              {restaurant.address.postalCode} {restaurant.address.city}, {restaurant.address.country}
            </address>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
