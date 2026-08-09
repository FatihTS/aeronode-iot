import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kargu Teknoloji — Kablosuz Sensör ve Telemetri Çözümleri",
  description: "SIM kart gerektirmeyen, pille çalışan LoRa tabanlı kablosuz sensörler. Su seviyesi ölçümü ve uzaktan izleme çözümleri.",
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
      <body className="min-h-full flex flex-col bg-black">
          {/* Fixed site-wide backdrop — the wireframe emblem stays pinned
              behind every page as you scroll. Each page's own content
              wrapper is intentionally translucent (bg-black/65) so this
              bleeds through everywhere, a little less where cards/sections
              are more opaque. Brightness/contrast boosted so the linework
              still reads through that overlay instead of washing out. */}
          <div className="fixed inset-0 -z-10">
            <Image
              src="/bg-eagle-wireframe.png"
              alt=""
              fill
              priority
              unoptimized
              className="object-cover"
              style={{ filter: "brightness(1.6) contrast(1.15)" }}
            />
          </div>

          <Navbar />
          {children}
        </body>
    </html>
  );
}
