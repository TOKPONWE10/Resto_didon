import Image from "next/image";
import { restaurant } from "@/data/restaurant";
import { menu, menuHighlightItems } from "@/data/menu";
import { DishCard } from "@/components/carte/DishCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function MenuPreview() {
  return (
    <section id="carte" className="scroll-mt-20 bg-ivory py-16 sm:py-20 lg:py-24">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="La Carte"
            title="Une cuisine de saison, cuite au feu."
            description={restaurant.chef.paragraphs[0]}
          />
          <Reveal delay={0.1} className="shrink-0">
            <Button href="/carte" variant="outline-dark">
              Voir la carte complète
            </Button>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {menuHighlightItems.map((item, index) => (
            <Reveal key={item.name} delay={0.05 * index}>
              <DishCard
                item={item}
                number={menu.flatMap((c) => c.items).findIndex((d) => d.name === item.name) + 1}
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
              />
            </Reveal>
          ))}

          <Reveal delay={0.25}>
            <article className="group relative flex h-full min-h-[28rem] flex-col justify-end overflow-hidden bg-charcoal p-9">
              <Image
                src="/images/food/cocktail.jpg"
                alt="Cocktail rouge servi dans une coupe"
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                className="object-cover opacity-45 transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
              />
              <div className="relative z-10 flex flex-col gap-4">
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-sand">
                  {restaurant.wine.title}
                </span>
                <p className="text-base leading-relaxed text-ivory/80">
                  {restaurant.wine.paragraphs[0]}
                </p>
                <a
                  href={restaurant.documents.carteDesVins}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 w-fit text-xs font-medium uppercase tracking-[0.2em] text-ivory underline underline-offset-4 decoration-ivory/40 transition-colors hover:decoration-ivory"
                >
                  La carte des vins
                </a>
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-charcoal/10 pt-8 text-xs font-medium uppercase tracking-[0.2em] text-charcoal/60">
            <a href={restaurant.documents.menuMidi} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-charcoal">
              Menu midi (PDF)
            </a>
            <a href={restaurant.documents.allergenes} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-charcoal">
              Liste des allergènes (PDF)
            </a>
            <a href={restaurant.documents.carte} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-charcoal">
              Carte complète (PDF)
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
