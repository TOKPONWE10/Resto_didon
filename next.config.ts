import type { NextConfig } from "next";

const DEMO = process.env.NEXT_PUBLIC_DEMO !== "false";

const nextConfig: NextConfig = {
  // En démonstration, chaque réponse porte aussi la consigne de non-indexation,
  // y compris les images et les fichiers que les balises meta ne couvrent pas.
  async headers() {
    if (!DEMO) return [];
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
