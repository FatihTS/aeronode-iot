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
              src="/logo-mark.png"
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
              href="https://github.com"
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-white/10 text-zinc-400 hover:text-white hover:border-white/25 transition"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-white/10 text-zinc-400 hover:text-white hover:border-white/25 transition"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
              </svg>
            </a>
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
