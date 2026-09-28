import type { Metadata } from "next";
import { restaurant } from "@/data/restaurant";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  robots: { index: false, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <div className="bg-ivory pt-40 pb-28">
      <Container className="flex max-w-3xl flex-col gap-10">
        <h1 className="font-serif text-4xl sm:text-5xl">Politique de confidentialité</h1>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl text-ember">Données collectées</h2>
          <p className="text-base leading-relaxed text-charcoal/70">
            Ce site ne collecte aucune donnée personnelle directement : les demandes de réservation
            sont traitées par notre prestataire {restaurant.reservation.provider}, sur son propre
            site, selon sa propre politique de confidentialité.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl text-ember">Cookies</h2>
          <p className="text-base italic leading-relaxed text-charcoal/40">
            Politique de cookies à compléter selon les outils de mesure d&rsquo;audience et
            marketing effectivement déployés en production.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl text-ember">Droits des utilisateurs</h2>
          <p className="text-base leading-relaxed text-charcoal/70">
            Conformément au RGPD, vous pouvez exercer vos droits d&rsquo;accès, de rectification et
            de suppression de vos données auprès du restaurant :{" "}
            <a href={`tel:${restaurant.phone.href}`} className="underline underline-offset-4">
              {restaurant.phone.display}
            </a>
            .
          </p>
        </section>
      </Container>
    </div>
  );
}
