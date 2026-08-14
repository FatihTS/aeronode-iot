import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const yil = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-black/80">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
        {/* Marka */}
        <div>
          <Link href="/" className="flex items-center gap-2.5 font-bold text-lg tracking-tight w-fit">
            <Image
              src="/logo-square.png"
              alt="Kargu Teknoloji amblemi"
              width={32}
              height={32}
              className="rounded-md"
            />
            Kargu <span className="text-amber-400">Teknoloji</span>
          </Link>
          <p className="mt-4 text-sm text-zinc-500 leading-relaxed max-w-xs">
            SIM kart gerektirmeyen, pille yıllarca çalışan LoRa tabanlı kablosuz
            sensör ve telemetri çözümleri. Sinyalin ulaşmadığı yerlerde bile.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="mailto:aeronode.iot@gmail.com"
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-white/10 text-zinc-400 hover:text-white hover:border-white/25 transition"
              aria-label="E-posta"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
                <path d="m3.5 6 8.5 7 8.5-7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Site */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4">Site</h3>
          <ul className="space-y-3 text-sm text-zinc-500">
            <li><Link href="/" className="hover:text-white transition">Ana Sayfa</Link></li>
            <li><Link href="/hakkimizda" className="hover:text-white transition">Hakkımızda</Link></li>
            <li><Link href="/projeler" className="hover:text-white transition">Projeler</Link></li>
            <li><Link href="/iletisim" className="hover:text-white transition">İletişim</Link></li>
          </ul>
        </div>

        {/* Ürünler */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4">Ürünler</h3>
          <ul className="space-y-3 text-sm text-zinc-500">
            <li><Link href="/projeler/su-seviyesi" className="hover:text-white transition">Su Seviyesi Ölçer</Link></li>
            <li><Link href="/projeler/akilli-tarim" className="hover:text-white transition">Akıllı Tarım Sensörü</Link></li>
            <li><Link href="/projeler/gunes-telemetri" className="hover:text-white transition">Güneş Telemetri Düğümü</Link></li>
          </ul>
        </div>

        {/* Yasal */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4">Yasal</h3>
          <ul className="space-y-3 text-sm text-zinc-500">
            <li><Link href="/gizlilik-politikasi" className="hover:text-white transition">Gizlilik Politikası</Link></li>
            <li><Link href="/kullanim-sartlari" className="hover:text-white transition">Kullanım Şartları</Link></li>
            <li><a href="mailto:aeronode.iot@gmail.com" className="hover:text-white transition">aeronode.iot@gmail.com</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600">
          <p>© {yil} Kargu Teknoloji. Tüm hakları saklıdır.</p>
          <p>Türkiye genelinde kurulum ve destek.</p>
        </div>
      </div>
    </footer>
  );
}
