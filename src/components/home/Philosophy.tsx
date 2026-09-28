import Image from "next/image";
import { restaurant } from "@/data/restaurant";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Philosophy() {
  return (
    <section className="bg-ivory py-16 sm:py-20 lg:py-24">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10">
        <div className="order-2 flex flex-col gap-8 lg:order-1 lg:col-span-5">
          <Reveal>
            <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-ember">
              <span className="h-px w-8 bg-ember/60" />
              Notre philosophie
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-balance font-serif text-5xl leading-[1.08] sm:text-6xl">
              Paris, feu,
              <br />
              partage.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="max-w-md text-balance text-lg leading-[1.75] text-charcoal/70">
              {restaurant.story.paragraphs[0]}
            </p>
          </Reveal>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-7 lg:col-start-6">
          <Reveal delay={0.1}>
            <div className="group relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/10] lg:aspect-[5/6]">
              <Image
                src="/images/hero/hero-portrait-3.jpg"
                alt="Devant le restaurant Didon, rue du Dragon à Paris"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
