import type { Metadata } from "next";
import { restaurant } from "@/data/restaurant";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false, follow: true },
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <div className="bg-ivory pt-32 pb-20">
      <Container className="flex max-w-3xl flex-col gap-10">
        <h1 className="font-serif text-4xl sm:text-5xl">Mentions légales</h1>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl text-ember">Éditeur du site</h2>
          <p className="text-base leading-relaxed text-charcoal/70">
            {restaurant.legalName}
            <br />
            {restaurant.address.street}, {restaurant.address.postalCode} {restaurant.address.city},{" "}
            {restaurant.address.country}
            <br />
            Téléphone : {restaurant.phone.display}
          </p>
          <p className="text-base italic leading-relaxed text-charcoal/40">
            Forme juridique, capital social, SIRET et numéro RCS — informations à compléter par
            l&rsquo;établissement avant mise en ligne définitive.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl text-ember">Directeur de la publication</h2>
          <p className="text-base italic leading-relaxed text-charcoal/40">
            Information à compléter par l&rsquo;établissement.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl text-ember">Hébergement</h2>
          <p className="text-base italic leading-relaxed text-charcoal/40">
            Raison sociale et adresse de l&rsquo;hébergeur — information à compléter lors de la mise en
            production.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl text-ember">Réservation en ligne</h2>
          <p className="text-base leading-relaxed text-charcoal/70">
            Les réservations de table effectuées depuis ce site sont gérées par le prestataire{" "}
            {restaurant.reservation.provider}, indépendant de l&rsquo;éditeur de ce site.
          </p>
        </section>
      </Container>
    </div>
  );
}
