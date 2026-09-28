export const reviewsSource = {
  provider: "TripAdvisor",
  url: "https://www.tripadvisor.fr/Restaurant_Review-g187147-d23683593-Reviews-Didon-Paris_Ile_de_France.html",
  rating: 4.7,
  reviewCount: 591,
  ranking: "n° 251 sur 20 518 restaurants à Paris",
  distinction: "Travellers' Choice 2026",
  breakdown: [
    { label: "Excellent", count: 500 },
    { label: "Bien", count: 40 },
    { label: "Moyen", count: 33 },
    { label: "Médiocre", count: 10 },
    { label: "Horrible", count: 8 },
  ],
  detailScores: [
    { label: "Service", score: 4.7 },
    { label: "Repas", score: 4.6 },
    { label: "Qualité / prix", score: 4.4 },
    { label: "Ambiance", score: 4.4 },
  ],
  asOf: "2026-09-24",
} as const;
