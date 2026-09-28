import type { Metadata } from "next";
import { menu } from "@/data/menu";
import { restaurant } from "@/data/restaurant";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const cartePageDescription =
  "Découvrez la carte du restaurant Didon : cuisine française bistronomique de partage, cuite au charbon de bois, à Saint-Germain-des-Prés, Paris.";

export const metadata: Metadata = {
  title: "La Carte",
  description: cartePageDescription,
  alternates: {
    canonical: "/carte",
  },
  openGraph: {
    title: "La Carte — Didon",
    description: cartePageDescription,
    url: "/carte",
  },
};

export default function CartePage() {
  return (
    <div className="bg-ivory pt-32 pb-20">
      <Container className="flex flex-col gap-14">
        <div className="flex flex-col gap-7 border-b border-charcoal/10 pb-14">
          <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-ember">
            <span className="h-px w-8 bg-ember/60" />
            Didon
          </span>
          <h1 className="max-w-2xl text-balance font-serif text-6xl leading-[1.03] sm:text-7xl">
            La Carte.
          </h1>
          <p className="max-w-lg text-balance text-lg leading-[1.75] text-charcoal/65">
            {restaurant.chef.paragraphs[0]}
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 pt-3 text-xs font-medium uppercase tracking-[0.2em] text-charcoal/60">
            <a href={restaurant.documents.carte} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-charcoal">
              Télécharger la carte (PDF)
            </a>
            <a href={restaurant.documents.carteDesVins} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-charcoal">
              Carte des vins (PDF)
            </a>
            <a href={restaurant.documents.menuMidi} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-charcoal">
              Menu midi (PDF)
            </a>
            <a href={restaurant.documents.allergenes} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-charcoal">
              Allergènes (PDF)
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-14">
          {menu.map((category) => (
            <div key={category.id} className="flex flex-col gap-10">
              <Reveal>
                <h2 className="font-serif text-4xl italic text-ember sm:text-5xl">
                  {category.title}
                </h2>
              </Reveal>
              <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-2">
                {category.items.map((item, index) => (
                  <Reveal key={item.name} delay={0.03 * index}>
                    <div className="flex flex-col gap-2 border-b border-charcoal/10 pb-7">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-serif text-2xl">
                          {item.name}
                          {item.tag ? (
                            <span className="ml-2 align-middle text-[0.65rem] font-sans font-medium uppercase tracking-[0.15em] text-charcoal/40">
                              {item.tag}
                            </span>
                          ) : null}
                        </h3>
                        <span className="whitespace-nowrap font-serif text-xl text-ember">
                          {item.price}
                        </span>
                      </div>
                      <p className="max-w-md text-base leading-relaxed text-charcoal/60">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
