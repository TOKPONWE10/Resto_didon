export const restaurant = {
  name: "Didon",
  legalName: "Didon Restaurant",
  tagline: "Cuisine française au charbon de bois",
  neighborhood: "Saint-Germain-des-Prés — Paris",
  concept: "Le feu qui façonne",

  address: {
    street: "8 rue du Dragon",
    postalCode: "75006",
    city: "Paris",
    country: "France",
    full: "8 rue du Dragon, 75006 Paris, France",
    mapsQuery: "8+rue+du+Dragon+75006+Paris",
  },

  phone: {
    display: "01 81 69 63 72",
    href: "+33181696372",
  },

  hours: [
    { days: "Lundi", ranges: ["19h – 22h30"] },
    { days: "Mardi à Jeudi", ranges: ["12h – 14h", "19h – 22h30"] },
    { days: "Vendredi et Samedi", ranges: ["12h – 14h30", "19h – 23h"] },
    { days: "Dimanche", ranges: ["12h – 14h30", "19h – 22h30"] },
  ],

  reservation: {
    url: "https://bookings.zenchef.com/results?rid=356335&pid=1001",
    giftCardUrl: "https://bookings.zenchef.com/shop?rid=356335&fullscreen=1",
    provider: "Zenchef",
  },

  social: {
    instagram: "https://www.instagram.com/didon.restaurant/",
    facebook: "https://www.facebook.com/Didon-110527568032799",
  },

  documents: {
    carte: "https://didonrestaurant.com/wp-content/uploads/2026/09/MENU-DIDON.pdf",
    carteDesVins:
      "https://didonrestaurant.com/wp-content/uploads/2025/11/Menu-vin-didon-complet-1-novembre-2025.pdf",
    allergenes:
      "https://didonrestaurant.com/wp-content/uploads/2026/09/liste-allergenes-didon.pdf",
    menuMidi:
      "https://didonrestaurant.com/wp-content/uploads/2024/08/menu-midi-fr-30-juill-2024.pdf",
  },

  story: {
    title: "Didon.",
    paragraphs: [
      "Didon était la légendaire fondatrice et première reine de Carthage. Aujourd'hui, Didon, le restaurant, pose ses fondations au cœur du 6e arrondissement.",
      "Aux côtés de Carole et Imad, notre chef consultant, Michel Portos, doublement étoilé et Cuisinier de l'Année en 2012 par le guide Gault & Millau, met un point d'honneur au partage de la cuisine française avec des plats audacieux tout en restant simples et goûteux grâce à la cuisson au charbon de bois.",
      "Dans un cadre délicat et épuré, vous y découvrirez une cuisine bistronomique de partage à la fois créative et sensible qui met en relief des produits bruts en les travaillant de manière singulière au feu de bois.",
    ],
  },

  chef: {
    title: "Cheffe.",
    paragraphs: [
      "Chaque saison, notre cheffe, Mélissa Altenberg, en collaboration avec Michel Portos, renouvellent notre carte avec des assiettes modernes et gourmandes alliant fraîcheur et qualité.",
      "Elle a à cœur de partager avec nos convives toute sa passion, sa subtilité et son engagement.",
    ],
  },

  wine: {
    title: "Pour la soif.",
    paragraphs: [
      "Notre carte des vins est élaborée par Imad avec la contribution de Stéphane Derenencourt, vinificateur autodidacte, artisan vigneron et ami. Pour eux, le vin est une rencontre, une histoire d'hommes.",
      "Leur approche, c'est avant tout du bon sens et le respect d'un métier manuel. Imad et Stéphane conseillent les vins qu'ils aiment boire et partager. Toutes nos références peuvent être dégustées aussi bien en bouteille qu'au verre.",
    ],
  },

  sisterRestaurants: [
    {
      name: "Hébé",
      description:
        "Un restaurant de partage et de convivialité. Une cuisine aux saveurs méditerranéennes, inventive, délicate et de saison, signée Michel Portos.",
      url: "https://www.heberestaurant.com/",
      logo: "/images/brands/hebe-logo.png",
    },
    {
      name: "Ya Bayté",
      description:
        "Une adresse de street food dédiée à la gourmandise et à la convivialité libanaise. Des produits ultra-frais, une cuisson au charbon de bois et une cuisine toujours maison.",
      url: "https://yabayte.com/",
      logo: "/images/brands/yabayte-logo.png",
    },
  ],
} as const;
