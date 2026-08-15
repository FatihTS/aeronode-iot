import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı",
};

export default function NotFound() {
  return (
    <div className="min-h-dvh bg-ink/70 text-fg flex items-center">
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <p className="text-8xl font-bold text-accent/90">404</p>
        <h1 className="mt-6 text-3xl font-bold">Bu sinyal ulaşmıyor.</h1>
        <p className="mt-4 text-fg-muted text-lg leading-relaxed">
          Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir. Menzil dışına
          çıktınız — ama merak etmeyin, ana üsse dönüş yolu burada.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="rounded-2xl bg-accent px-7 py-3 text-white font-semibold hover:bg-accent-hover transition">
            Ana Sayfaya Dön
          </Link>
          <Link href="/projeler" className="rounded-2xl border border-line px-7 py-3 hover:bg-white/5 transition">
            Uygulamalara Göz At
          </Link>
        </div>
      </div>
    </div>
  );
}
