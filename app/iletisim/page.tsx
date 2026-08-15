import type { Metadata } from "next";
import { EnvelopeSimple, MapPin, Lightning, Wrench } from "@phosphor-icons/react/dist/ssr";
import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Kargu ile iletişime geçin — kaç sensöre ihtiyacınız olduğunu, kurulum alanınızı ve bütçenizi paylaşın, 24 saat içinde teklif alın.",
};

export default function IletisimPage() {
  return (
    <div className="min-h-dvh bg-ink/70 text-fg">
      <PageHero
        backHref="/"
        backLabel="← Ana Sayfa"
        eyebrow="İLETİŞİM"
        title="Teklif Alın"
        intro="Kaç sensör gerektiğini, hangi alana kurulacağını ve bütçenizi söyleyin — size özel bir teklif hazırlayalım. Cevap süresi genellikle 24 saatin altındadır."
      />

      {/* Form + Bilgiler */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr] gap-12">
          {/* Bilgi kartları */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-line bg-surface p-6">
              <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                <EnvelopeSimple size={22} weight="duotone" className="text-accent" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-fg mb-1">E-posta</h3>
              <a href="mailto:aeronode.iot@gmail.com" className="text-fg-muted hover:text-accent transition">
                aeronode.iot@gmail.com
              </a>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-6">
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                <MapPin size={22} weight="duotone" className="text-blue-400" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-fg mb-1">Kurulum Bölgesi</h3>
              <p className="text-fg-muted">Türkiye geneli saha kurulumu ve destek.</p>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-6">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                <Lightning size={22} weight="duotone" className="text-emerald-400" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-fg mb-1">Yanıt Süresi</h3>
              <p className="text-fg-muted">Genellikle 24 saat içinde dönüş yapılır.</p>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-6">
              <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                <Wrench size={22} weight="duotone" className="text-purple-400" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-fg mb-1">Kurulum Desteği</h3>
              <p className="text-fg-muted">Teklife saha kurulum desteği dahildir.</p>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-line bg-white/[0.02] p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
