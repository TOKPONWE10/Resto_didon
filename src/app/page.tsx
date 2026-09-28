import { Hero } from "@/components/home/Hero";
import { Philosophy } from "@/components/home/Philosophy";
import { CharcoalSection } from "@/components/home/CharcoalSection";
import { Maison } from "@/components/home/Maison";
import { MenuPreview } from "@/components/home/MenuPreview";
import { ExperienceSteps } from "@/components/home/ExperienceSteps";
import { Team } from "@/components/home/Team";
import { Gallery } from "@/components/home/Gallery";
import { Reviews } from "@/components/home/Reviews";
import { Location } from "@/components/home/Location";
import { ReservationCTA } from "@/components/home/ReservationCTA";
import { Sisters } from "@/components/home/Sisters";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <CharcoalSection />
      <Maison />
      <MenuPreview />
      <ExperienceSteps />
      <Team />
      <Gallery />
      <Reviews />
      <Location />
      <ReservationCTA />
      <Sisters />
    </>
  );
}
