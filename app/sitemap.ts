import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const sayfalar: { yol: string; oncelik: number; siklik: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { yol: "", oncelik: 1, siklik: "monthly" },
    { yol: "/projeler", oncelik: 0.9, siklik: "monthly" },
    { yol: "/projeler/su-seviyesi", oncelik: 0.8, siklik: "monthly" },
    { yol: "/projeler/akilli-tarim", oncelik: 0.8, siklik: "monthly" },
    { yol: "/projeler/gunes-telemetri", oncelik: 0.8, siklik: "monthly" },
    { yol: "/hakkimizda", oncelik: 0.6, siklik: "yearly" },
    { yol: "/iletisim", oncelik: 0.7, siklik: "yearly" },
    { yol: "/gizlilik-politikasi", oncelik: 0.2, siklik: "yearly" },
    { yol: "/kullanim-sartlari", oncelik: 0.2, siklik: "yearly" },
  ];

  return sayfalar.map((s) => ({
    url: `${siteUrl}${s.yol}`,
    lastModified: now,
    changeFrequency: s.siklik,
    priority: s.oncelik,
  }));
}
