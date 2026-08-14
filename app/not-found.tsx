import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı",
};

export default function NotFound() {
  return (
    <div className="min-h-dvh bg-black/65 text-white flex items-center">
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <p className="text-8xl font-bold text-amber-400/90">404</p>
        <h1 className="mt-6 text-3xl font-bold">Bu sinyal ulaşmıyor.</h1>
        <p className="mt-4 text-zinc-400 text-lg leading-relaxed">
          Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir. Menzil dışına
          çıktınız — ama merak etmeyin, ana üsse dönüş yolu burada.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="rounded-2xl bg-amber-400 px-7 py-3 text-black font-semibold hover:bg-amber-300 transition">
            Ana Sayfaya Dön
          </Link>
          <Link href="/projeler" className="rounded-2xl border border-white/20 px-7 py-3 hover:bg-white/5 transition">
            Projelere Göz At
          </Link>
        </div>
      </div>
    </div>
  );
}
