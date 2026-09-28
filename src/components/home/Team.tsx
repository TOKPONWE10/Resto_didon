import Image from "next/image";
import { team } from "@/data/team";
import { restaurant } from "@/data/restaurant";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Team() {
  const [lead, ...rest] = team;

  return (
    <section id="equipe" className="scroll-mt-20 bg-ivory py-16 sm:py-20 lg:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="L'équipe" title="Celles et ceux qui font Didon." />

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <div className="group flex h-full flex-col gap-7">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={lead.image!}
                  alt={`${lead.name}, ${lead.role} de Didon`}
                  fill
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl">{lead.name}</h3>
                <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.2em] text-ember">
                  {lead.role}
                </p>
                <p className="mt-3 max-w-sm text-base leading-relaxed text-charcoal/60">{lead.bio}</p>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col divide-y divide-charcoal/10 lg:col-span-7 lg:col-start-6 lg:justify-center">
            {rest.map((member, index) => (
              <Reveal key={member.name} delay={0.08 * (index + 1)}>
                <div className="flex items-start gap-6 py-8 first:pt-0 last:pb-0 sm:items-center">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center border border-charcoal/15 bg-ivory-soft font-serif text-2xl italic text-ember">
                    {member.name.charAt(0)}
                  </span>
                  <div className="flex flex-col gap-2">
                    <div>
                      <h3 className="font-serif text-xl">{member.name}</h3>
                      <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-ember">
                        {member.role}
                      </p>
                    </div>
                    {member.name.includes("Melissa") ? (
                      <p className="max-w-md text-base leading-relaxed text-charcoal/60">
                        {restaurant.chef.paragraphs[1]}
                      </p>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
