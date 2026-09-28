import Image from "next/image";
import { restaurant } from "@/data/restaurant";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Sisters() {
  return (
    <section className="bg-ivory-soft py-24 sm:py-28">
      <Container>
        <Reveal>
          <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-charcoal/50">
            <span className="h-px w-8 bg-charcoal/25" />
            Nos maisons sœurs
          </span>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12">
          {restaurant.sisterRestaurants.map((sister, index) => (
            <Reveal key={sister.name} delay={0.08 * index}>
              <a
                href={sister.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 border-t border-charcoal/10 py-7 transition-colors hover:border-charcoal/30"
              >
                <Image
                  src={sister.logo}
                  alt={`Logo ${sister.name}`}
                  width={56}
                  height={56}
                  className="h-14 w-14 shrink-0 rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div>
                  <h3 className="font-serif text-2xl">{sister.name}</h3>
                  <p className="mt-1.5 max-w-md text-base leading-relaxed text-charcoal/60">
                    {sister.description}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
