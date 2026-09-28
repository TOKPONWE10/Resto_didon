import { restaurant } from "@/data/restaurant";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const steps = [
  {
    number: "01",
    title: "Découvrir",
    description:
      "Explorez notre univers : une cuisine bistronomique de partage, cuite au charbon de bois, et une carte des vins pensée par Imad et Stéphane Derenencourt.",
  },
  {
    number: "02",
    title: "Choisir",
    description:
      "Déjeuner ou dîner, en petit comité ou en grande tablée : choisissez votre moment et vos plats à partager, de l'entrecôte Angus au bar entier grillé.",
  },
  {
    number: "03",
    title: "Réserver",
    description:
      "Confirmez votre table en ligne via notre système de réservation officiel, en quelques instants seulement.",
  },
];

export function ExperienceSteps() {
  return (
    <section id="experience" className="scroll-mt-20 bg-ember-brown py-16 text-ivory sm:py-20 lg:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="L'expérience Didon"
          title="Un parcours simple, du désir à la table."
          tone="light"
        />

        <div className="grid grid-cols-1 gap-14 sm:grid-cols-3 sm:gap-10">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={0.1 * index}>
              <div className="flex flex-col gap-5 border-t border-ivory/15 pt-7">
                <span className="font-serif text-3xl italic text-sand">{step.number}</span>
                <h3 className="font-serif text-2xl">{step.title}</h3>
                <p className="text-base leading-[1.7] text-ivory/65">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <Button href={restaurant.reservation.url} target="_blank" variant="outline-light" className="w-fit">
            Réserver une table
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
