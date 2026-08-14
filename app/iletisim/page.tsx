import type { Metadata } from "next";
import Link from "next/link";
import { EnvelopeSimple, MapPin, Lightning, Wrench } from "@phosphor-icons/react/dist/ssr";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Kargu Teknoloji ile iletişime geçin — kaç sensöre ihtiyacınız olduğunu, kurulum alanınızı ve bütçenizi paylaşın, 24 saat içinde teklif alın.",
};

export default function IletisimPage() {
  return (
    <div className="min-h-dvh bg-black/65 text-white">

      {/* Başlık */}
      <section className="border-b border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition mb-8">
            ← Ana Sayfa
          </Link>
          <div className="inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1 text-sm text-amber-300 mb-5">
            İLETİŞİM
          </div>
          <h1 className="text-5xl font-bold max-w-2xl leading-tight">Teklif Alın</h1>
          <p className="mt-5 text-zinc-400 text-lg max-w-2xl leading-relaxed">
            Kaç sensör gerektiğini, hangi alana kurulacağını ve bütçenizi söyleyin —
            size özel bir teklif hazırlayalım. Cevap süresi genellikle 24 saatin altındadır.
          </p>
        </div>
      </section>

      {/* Form + Bilgiler */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr] gap-12">
          {/* Bilgi kartları */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-4">
                <EnvelopeSimple size={22} weight="duotone" className="text-amber-400" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-white mb-1">E-posta</h3>
              <a href="mailto:aeronode.iot@gmail.com" className="text-zinc-400 hover:text-amber-400 transition">
                aeronode.iot@gmail.com
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                <MapPin size={22} weight="duotone" className="text-blue-400" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-white mb-1">Kurulum Bölgesi</h3>
              <p className="text-zinc-400">Türkiye geneli saha kurulumu ve destek.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                <Lightning size={22} weight="duotone" className="text-emerald-400" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-white mb-1">Yanıt Süresi</h3>
              <p className="text-zinc-400">Genellikle 24 saat içinde dönüş yapılır.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                <Wrench size={22} weight="duotone" className="text-purple-400" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-white mb-1">Kurulum Desteği</h3>
              <p className="text-zinc-400">Teklife saha kurulum desteği dahildir.</p>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
