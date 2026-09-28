export type TeamMember = {
  name: string;
  role: string;
  bio?: string;
  image?: string;
};

export const team: TeamMember[] = [
  {
    name: "Michel Portos",
    role: "Chef consultant",
    bio: "Doublement étoilé et Cuisinier de l'Année 2012 par le guide Gault & Millau.",
    image: "/images/team/michel-portos-equipe.jpg",
  },
  {
    name: "Carole & Imad",
    role: "Fondateurs",
  },
  {
    name: "Melissa & Sarah",
    role: "Cheffes",
  },
  {
    name: "Julien",
    role: "Directeur",
  },
];
