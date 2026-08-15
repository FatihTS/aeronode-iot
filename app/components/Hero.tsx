import Link from "next/link";
import Image from "next/image";

/**
 * Homepage's opening section. The dominant visual is the Kargu Node device
 * illustration (public/kargu-node-device.png) — a technical line-art
 * rendering, not a photo of real hardware, with the eagle emblem worked
 * into its front panel.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      {/* Faint background texture: dot grid + topographic lines */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="hero-grid" width="34" height="34" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#ffffff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* RF signal, broadcast from the node's antenna, spreading across the
          whole section rather than staying boxed inside the illustration. */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none motion-reduce:hidden" aria-hidden="true">
        {[22, 36, 50, 64, 78].map((size, i) => (
          <span
            key={size}
            className="absolute rounded-full border-2 border-accent/60"
            style={{
              left: "72%",
              top: "24%",
              width: `${size}vw`,
              height: `${size}vw`,
              marginLeft: `-${size / 2}vw`,
              marginTop: `-${size / 2}vw`,
              boxShadow: "0 0 24px 2px rgba(59,130,246,0.35)",
              // Negative delay starts each ring already partway through its
              // cycle on mount, so returning to this page (a fresh mount)
              // never shows all rings snapping back to the same base size
              // at once — which read as the signal "freezing."
              animation: `ping ${4.5 + i * 0.8}s ease-out -${i * 0.9}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-4 py-1.5 text-sm text-fg-muted mb-8">
            <Image src="/logo-square.png" alt="" width={18} height={18} className="rounded-sm" aria-hidden="true" />
            KARGU — RF & GÖMÜLÜ SİSTEMLER MÜHENDİSLİĞİ
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] text-fg">
            Sahaya Göre
            <span className="block text-accent">Mühendislik.</span>
          </h1>

          <p className="mt-6 text-fg-muted text-lg md:text-xl leading-relaxed max-w-xl">
            Uzak ve zorlu ortamlar için uzun menzilli kablosuz sistemler ve
            ultra düşük güçlü elektronik geliştiriyoruz — sensörden gateway&apos;e,
            tüm platformu kendimiz tasarlıyoruz.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
            <Link
              href="/teknoloji"
              className="rounded-2xl bg-accent px-6 py-3 text-white font-semibold hover:bg-accent-hover transition"
            >
              Teknolojiyi İncele
            </Link>
            <Link
              href="/iletisim"
              className="rounded-2xl border border-line px-6 py-3 text-fg hover:bg-white/5 transition"
            >
              Teklif Al
            </Link>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <Image
            src="/kargu-node-device.png"
            alt="Kargu Node cihazı teknik çizimi"
            width={1448}
            height={1086}
            priority
            unoptimized
            className="w-full max-w-lg h-auto"
          />
        </div>
      </div>
    </section>
  );
}
