import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const yil = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-ink/80">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-10">
        {/* Marka */}
        <div>
          <Link href="/" className="flex items-center gap-2.5 font-bold text-lg tracking-tight w-fit">
            <Image
              src="/logo-square.png"
              alt="Kargu amblemi"
              width={32}
              height={32}
              className="rounded-md"
            />
            Kargu
          </Link>
          <p className="mt-4 text-sm text-fg-muted leading-relaxed max-w-xs">
            RF haberleşme, gömülü sistemler ve endüstriyel IoT için mühendislik —
            sinyalin ulaşmadığı yerlerde bile.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="mailto:aeronode.iot@gmail.com"
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-line text-fg-muted hover:text-fg hover:border-white/25 transition"
              aria-label="E-posta"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
                <path d="m3.5 6 8.5 7 8.5-7" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-fg mb-4">Ürünler</h3>
          <ul className="space-y-3 text-sm text-fg-muted">
            <li><Link href="/#urunler" className="hover:text-fg transition">Sensor Nodes</Link></li>
            <li><Link href="/#urunler" className="hover:text-fg transition">Gateways</Link></li>
            <li><Link href="/#urunler" className="hover:text-fg transition">Telemetry Systems</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-fg mb-4">Teknoloji</h3>
          <ul className="space-y-3 text-sm text-fg-muted">
            <li><Link href="/teknoloji" className="hover:text-fg transition">RF / LoRaWAN</Link></li>
            <li><Link href="/teknoloji" className="hover:text-fg transition">Ultra-Low-Power</Link></li>
            <li><Link href="/muhendislik" className="hover:text-fg transition">Mühendislik</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-fg mb-4">Uygulamalar</h3>
          <ul className="space-y-3 text-sm text-fg-muted">
            <li><Link href="/projeler/su-seviyesi" className="hover:text-fg transition">Su Yönetimi</Link></li>
            <li><Link href="/projeler/akilli-tarim" className="hover:text-fg transition">Tarım</Link></li>
            <li><Link href="/projeler/gunes-telemetri" className="hover:text-fg transition">Uzak Alan İzleme</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-fg mb-4">Kurumsal</h3>
          <ul className="space-y-3 text-sm text-fg-muted">
            <li><Link href="/hakkimizda" className="hover:text-fg transition">Hakkımızda</Link></li>
            <li><Link href="/iletisim" className="hover:text-fg transition">İletişim</Link></li>
            <li><Link href="/gizlilik-politikasi" className="hover:text-fg transition">Gizlilik Politikası</Link></li>
            <li><Link href="/kullanim-sartlari" className="hover:text-fg transition">Kullanım Şartları</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-fg-muted/70">
          <p>© {yil} Kargu. Tüm hakları saklıdır.</p>
          <p>Türkiye genelinde kurulum ve destek.</p>
        </div>
      </div>
    </footer>
  );
}
