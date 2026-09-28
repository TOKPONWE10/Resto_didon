import { restaurant } from "@/data/restaurant";
import { Reveal } from "@/components/ui/Reveal";
import { ParallaxImage } from "@/components/ui/ParallaxImage";

export function CharcoalSection() {
  return (
    <section className="relative flex min-h-[92vh] w-full items-center overflow-hidden bg-charcoal py-32 sm:py-40">
      <ParallaxImage
        src="/images/gallery/salle-3.jpg"
        alt="Cuisine au charbon de bois, ambiance du restaurant Didon"
        className="object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/75 to-charcoal/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-charcoal/40" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col gap-10 px-6 sm:px-10 lg:px-16">
        <Reveal>
          <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-sand">
            <span className="h-px w-8 bg-sand/70" />
            Le feu &amp; le charbon
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="max-w-2xl text-balance font-serif text-5xl italic leading-[1.05] text-ivory sm:text-6xl lg:text-[5.5rem]">
            L&rsquo;art du feu.
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="max-w-lg text-balance text-lg leading-[1.7] text-ivory/80">
            {restaurant.story.paragraphs[1]}
          </p>
        </Reveal>
        <Reveal delay={0.26}>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-sand/80">
            <span>Braise</span>
            <span className="h-3 w-px bg-sand/40" />
            <span>Chaleur directe</span>
            <span className="h-3 w-px bg-sand/40" />
            <span>Temps long</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
