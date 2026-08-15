import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SplitEagleBackground from "./components/SplitEagleBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Kargu — RF, Gömülü Sistemler ve Endüstriyel IoT Mühendisliği",
    template: "%s — Kargu",
  },
  description: "Kargu; RF haberleşme, gömülü sistemler, düşük güç elektroniği ve endüstriyel sensör arayüzleri geliştiren bir mühendislik şirketidir. SIM kart gerektirmeyen, pille yıllarca çalışan LoRa tabanlı kablosuz sensörler.",
  keywords: [
    "RF mühendisliği",
    "LoRaWAN",
    "gömülü sistemler",
    "endüstriyel IoT",
    "düşük güç elektronik",
    "kablosuz telemetri",
    "IoT Türkiye",
    "Kargu",
  ],
  openGraph: {
    title: "Kargu — RF, Gömülü Sistemler ve Endüstriyel IoT Mühendisliği",
    description: "RF haberleşme, gömülü sistemler ve düşük güç elektroniği geliştiren mühendislik şirketi.",
    locale: "tr_TR",
    type: "website",
    images: ["/hero-poster.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink">
          {/* Fixed site-wide backdrop — the wireframe emblem stays pinned
              behind every page. Fully assembled on load; as the user scrolls,
              it tears into two halves that slide toward opposite edges. Each
              page's own content wrapper is translucent (bg-ink/70) so this
              bleeds through everywhere. */}
          <SplitEagleBackground />

          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </body>
    </html>
  );
}
