import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Plant, Drop, Sun } from "@phosphor-icons/react/dist/ssr";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";

export const metadata: Metadata = {
  title: "Uygulamalar",
  description: "Aynı Kargu platformu farklı sahalarda: su seviyesi ölçümü, akıllı tarım ve uzak alan izleme. SIM kart gerektirmeyen, pille yıllarca çalışan LoRa tabanlı kablosuz çözümler.",
};

const uygulamalar = [
  {
    slug: "akilli-tarim",
    baslik: "Akıllı Tarım Sensörü",
    kategori: "Hayvancılık & Tarım",
    kategoriRenk: "emerald",
    etiketler: ["Sıcaklık", "Nem", "Varlık Takibi", "Pil", "LoRa"],
    ozet: "Hayvancılıkta kayıpların büyük çoğunluğu gece olur. Sistem gece de uyanık — bir şey olduğunda sizi anında uyarır.",
    gradient: "from-emerald-500/25 to-teal-500/10",
    Ikon: Plant,
    foto: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=900&q=80&auto=format&fit=crop",
    fotoAlt: "Çiftlikteki inekler",
  },
  {
    slug: "su-seviyesi",
    baslik: "Su Seviyesi Ölçüm Cihazı",
    kategori: "Su Yönetimi",
    kategoriRenk: "blue",
    etiketler: ["Kuyu", "Su Deposu", "Pil", "LoRa", "Anlık İzleme"],
    ozet: "Sulama mevsiminde kuyu bitmeden önce haberdar olun. ±1 cm hassasiyet, IP68 koruma, yıllarca pil ömrü.",
    gradient: "from-blue-500/25 to-cyan-500/10",
    Ikon: Drop,
    foto: null,
    fotoAlt: "",
  },
  {
    slug: "gunes-telemetri",
    baslik: "Güneş Enerjili Telemetri Düğümü",
    kategori: "Uzak Alan İzleme",
    kategoriRenk: "yellow",
    etiketler: ["Güneş Enerjisi", "Otonom", "LoRa", "Hava İstasyonu"],
    ozet: "Elektrik hattı olmayan her noktaya kurulur. Güneş ışığı yeterli — bakım için gitmek gerekmez.",
    gradient: "from-yellow-500/25 to-orange-500/10",
    Ikon: Sun,
    foto: null,
    fotoAlt: "",
  },
];

const renkHaritasi: Record<string, string> = {
  emerald: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30",
  blue: "bg-blue-500/15 text-blue-300 border border-blue-500/30",
  yellow: "bg-yellow-500/15 text-yellow-300 border border-yellow-500/30",
};

const etiketRengi: Record<string, string> = {
  emerald: "bg-emerald-500/10 text-emerald-400",
  blue: "bg-blue-500/10 text-blue-400",
  yellow: "bg-yellow-500/10 text-yellow-400",
};

export default function UygulamalarPage() {
  return (
    <div className="min-h-dvh bg-ink/70 text-fg">
      <PageHero
        backHref="/"
        backLabel="← Ana Sayfa"
        eyebrow="UYGULAMALAR"
        title="Aynı Platform, Farklı Sahalar"
        intro="Kargu platformu — sensör, RF haberleşme ve gömülü sistem — her sahaya göre yapılandırılır. Her biri gerçek bir soruna yanıt olarak tasarlandı: SIM kart gerektirmez, aylık ücret yoktur, pille yıllarca çalışır."
      />

      {/* Uygulama kartları */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {uygulamalar.map((p) => (
            <Link
              key={p.slug}
              href={`/projeler/${p.slug}`}
              className="group rounded-3xl border border-line bg-surface overflow-hidden hover:border-white/25 transition-all"
            >
              {/* Görsel alan */}
              <div className="relative h-52 border-b border-line overflow-hidden">
                {p.foto ? (
                  <>
                    <Image
                      src={p.foto}
                      alt={p.fotoAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`} />
                  </>
                ) : (
                  <div className={`h-full bg-gradient-to-br ${p.gradient} flex items-center justify-center`}>
                    <p.Ikon
                      size={64}
                      weight="duotone"
                      className={
                        p.kategoriRenk === "emerald" ? "text-emerald-300" :
                        p.kategoriRenk === "blue" ? "text-blue-300" :
                        "text-yellow-300"
                      }
                      aria-hidden="true"
                    />
                  </div>
                )}
                <div className="absolute bottom-4 left-4 z-10">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${renkHaritasi[p.kategoriRenk]}`}>
                    {p.kategori}
                  </span>
                </div>
              </div>

              {/* İçerik */}
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-fg group-hover:text-fg transition">{p.baslik}</h2>
                <p className="mt-3 text-fg-muted leading-relaxed">{p.ozet}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.etiketler.map((e) => (
                    <span key={e} className={`text-xs px-2.5 py-1 rounded-full ${etiketRengi[p.kategoriRenk]}`}>{e}</span>
                  ))}
                </div>
                <div className="mt-6 text-sm text-accent/70 group-hover:text-accent transition flex items-center gap-1">
                  Detayları gör →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection
        title="Aradığınızı Bulamadınız mı?"
        body="İhtiyacınızı anlatın — mevcut platformumuzu adapte eder ya da sıfırdan özel çözüm tasarlarız."
        primaryHref="/iletisim"
        primaryLabel="Bizimle Konuşun"
      />
    </div>
  );
}
