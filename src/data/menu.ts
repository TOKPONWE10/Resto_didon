export type MenuItem = {
  name: string;
  price: string;
  description: string;
  tag?: "végétarien" | "végan" | "sans gluten";
  /**
   * Photo du plat lui-même, et seulement de lui. Plusieurs photos étaient
   * associées à d'autres plats (une assiette de betterave pour le brocolini, un
   * poisson pour les gambas, des fraises pour le chocolat) : elles ont été
   * retirées. Sans photo, la carte affiche un fond de braise.
   */
  image?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "entrees",
    title: "Entrées",
    items: [
      {
        name: "Brocolini",
        price: "20 €",
        tag: "végétarien",
        description:
          "Grillé, crème persillade, hollandaise au pamplemousse, jaune d'œuf confit (supplément de 3 € pour une version non végétarienne avec poutargue).",
      },
      {
        name: "Tomate ananas",
        price: "22 €",
        tag: "végan",
        description:
          "Grillée, céleri, cornichons, gel Worcestershire, granité Bloody Mary, poudre de tomate.",
      },
      {
        name: "Gambas",
        price: "24 €",
        description:
          "En tacos aux 2 saveurs, vierge tomate, bisque, aguachile, concombre.",
      },
      {
        name: "Magret de canard",
        price: "24 €",
        description:
          "Mariné et cuit au sel fumé, vinaigrette de miel à l'orange, émulsion de baie rose, betterave et cerise en pickles, mûre.",
      },
    ],
  },
  {
    id: "plats",
    title: "Plats",
    items: [
      {
        name: "Artichaut",
        price: "25 €",
        tag: "végan",
        description:
          "Confit et grillé, fromage frais végétal herbacé, condiment à la grecque, raisin vert, émulsion barigoule, croûtons.",
      },
      {
        name: "Blette farcie",
        price: "29 €",
        tag: "végan",
        description: "Avec boulgour, piquillos, tofu, pignons de pin, consommé aux légumes, aneth.",
      },
      {
        name: "Échine de porc",
        price: "45 € / 90 € à partager",
        description:
          "Avec rhubarbe grillée, en gel et en condiment, poireaux, jus corsé à la rhubarbe.",
      },
      {
        name: "Entrecôte Angus",
        price: "45 €",
        description:
          "Grillée, mole verde, chou-fleur en 2 façons, ail confit, persil frit, jus corsé.",
      },
      {
        name: "Tomahawk maturé 40 jours",
        price: "157 € à partager",
        description: "Bœuf Salers/Angus grillé, enokis grillés, jus d'ail noir.",
      },
      {
        name: "Agneau",
        price: "129 € à partager",
        description: "Épaule grillée à partager, confite aux épices, chimichurri à la menthe.",
        image: "/images/food/plat-agneau.jpg",
      },
      {
        name: "Canette",
        price: "39 € / 76 € à partager",
        description:
          "Filet grillé, abricot, courgette, marjolaine, noix de cajou, jus corsé au porto rouge.",
      },
      {
        name: "Daurade",
        price: "43 €",
        description: "Grillée en papillote, fumet de poisson corsé, condiment aji colombiano.",
      },
      {
        name: "Bar",
        price: "107 € à partager",
        description: "Entier grillé au charbon de bois, miso, citron, cébette, sabayon à l'asiatique.",
      },
    ],
  },
  {
    id: "garnitures",
    title: "Garnitures",
    items: [
      {
        name: "Frites en triple cuisson",
        price: "6 €",
        description: "Vapeur, tournesol, graisse de bœuf.",
      },
      {
        name: "Sucrine",
        price: "5 €",
        description: "Grillée, labné citronné, zaatar, sumac.",
      },
      {
        name: "Chou rôti",
        price: "7 €",
        description: "Sauce sésame, condiment épinard et citron confit, chips de pain libanais.",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      {
        name: "Fromage de Laurent Dubois",
        price: "18 € / 32 €",
        description:
          "Meilleur Ouvrier de France — Pont L'Évêque en deux façons, au charbon et frais, pommes Granny Smith, calvados, noix, mizuna.",
      },
      {
        name: "Tapioca",
        price: "16 €",
        tag: "végan",
        description:
          "Façon riz au lait, lavande, noix de coco, pêche jaune, estragon, nage de thé aux agrumes.",
      },
      {
        name: "Framboise",
        price: "19 €",
        description:
          "En tartelette, crème parfait glacé au thé de fruits des bois, praliné amandes, voile pomme framboise.",
      },
      {
        name: "Chocolat",
        price: "18 €",
        description:
          "Fondant en gâteau, ganache blanche à la menthe, fraises, tuile et sorbet de fraise à la menthe.",
      },
    ],
  },
];

export const menuHighlights = ["Brocolini", "Gambas", "Entrecôte Angus", "Agneau", "Chocolat"];

export const menuHighlightItems: MenuItem[] = menu
  .flatMap((category) => category.items)
  .filter((item) => menuHighlights.includes(item.name));
