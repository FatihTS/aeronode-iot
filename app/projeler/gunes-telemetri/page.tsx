import type { Metadata } from "next";
import {
  Sun,
  Broadcast,
  Wrench,
  Mountains,
  Waves,
  Plant,
  Cylinder,
  Thermometer,
  Drop,
  Wind,
  Leaf,
  BatteryFull,
  Timer,
} from "@phosphor-icons/react/dist/ssr";
import PageHero from "../../components/PageHero";
import Section from "../../components/Section";
import DataVizPanel from "../../components/DataVizPanel";
import UseCaseGrid from "../../components/UseCaseGrid";
import SpecTable from "../../components/SpecTable";
import CTASection from "../../components/CTASection";

export const metadata: Metadata = {
  title: "Güneş Enerjili Telemetri Düğümü",
  description: "Elektrik hattı ve telefon sinyali olmayan noktalara kurulur. Güneş enerjisiyle tamamen otonom çalışan, LoRa kablosuz telemetri düğümü.",
};

const ENERJI = [
  { Ikon: Sun, label: "Güneş Girdisi", val: "12.4 W", renk: "#fbbf24" },
  { Ikon: BatteryFull, label: "Batarya", val: "%78", renk: "#34d399" },
  { Ikon: Wind, label: "Tüketim", val: "0.8 W", renk: "#a78bfa" },
  { Ikon: Timer, label: "Çalışma Süresi", val: "247 gün", renk: "#60a5fa" },
];

const SENSORLER = [
  { Ikon: Thermometer, label: "Sıcaklık", val: "-2.4°C", renk: "#93c5fd" },
  { Ikon: Drop, label: "Nem", val: "%65", renk: "#67e8f9" },
  { Ikon: Wind, label: "Rüzgar", val: "34 km/h", renk: "#a5b4fc" },
  { Ikon: Thermometer, label: "Basınç", val: "758 hPa", renk: "#fb923c" },
  { Ikon: Leaf, label: "CO₂", val: "412 ppm", renk: "#86efac" },
  { Ikon: Sun, label: "UV İndeks", val: "3.2", renk: "#fde047" },
];

export default function GunesTelemetriPage() {
  return (
    <div className="min-h-dvh bg-ink/70 text-fg">
      <PageHero
        backHref="/projeler"
        backLabel="← Tüm Uygulamalar"
        eyebrow="UZAK ALAN İZLEME"
        eyebrowColorClass="border-yellow-400/30 bg-yellow-400/10 text-yellow-300"
        title={<>Güneş Enerjili<span className="block text-yellow-400">Telemetri Düğümü</span></>}
        meta={<span className="text-xs text-fg-muted">Güneş Enerjisi • LoRa Kablosuz • Tam Otonom</span>}
        intro="Elektrik direği yok, telefon sinyali yok, ama izleme ihtiyacı var. Güneş enerjili sistemimiz böyle noktalara kurulur ve kurulduktan sonra yıllarca kendi kendine çalışır."
        visual={
          <div className="relative w-64 h-64 flex items-center justify-center">
            {[70, 110, 150].map((r, i) => (
              <div key={r} className="absolute rounded-full border border-yellow-500/15" style={{ width: r * 2, height: r * 2, animation: `ping ${3 + i}s ease-out ${i}s infinite` }} />
            ))}
            <div className="relative w-24 h-24 rounded-full bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center">
              <Sun size={40} weight="duotone" className="text-yellow-300" aria-hidden="true" />
            </div>
          </div>
        }
      />

      {/* Fark yaratan şey */}
      <Section eyebrow="DİĞER SİSTEMLERDEN FARKI" title="Diğer Sistemlerden Farkı Ne?" intro="Elektrik hattı uzatmak pahalıdır. GSM modüllü sensörler sürekli ücret ister. Bu sistem ikisini de gerektirmez.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { Ikon: Sun, baslik: "Güneş ile Beslenir", acik: "Üzerindeki küçük güneş paneli gündüz enerji toplar. Bulutlu günler için de dahili batarya gece boyunca sistemi ayakta tutar." },
            { Ikon: Broadcast, baslik: "LoRa ile Haberleşir", acik: "Topladığı sensör verilerini LoRa radyosu aracılığıyla kilometrelerce ötedeki merkeze gönderir. Ne SIM kart ne internet hattı." },
            { Ikon: Wrench, baslik: "Bakım Gerektirmez", acik: "Kurulduktan sonra içine girmek, pil değiştirmek ya da yazılım güncellemek için bizzat gitmenize gerek yoktur." },
          ].map((item) => (
            <div key={item.baslik} className="rounded-3xl border border-line bg-surface p-8">
              <item.Ikon size={32} weight="duotone" className="mb-5 text-yellow-400" aria-hidden="true" />
              <h3 className="text-lg font-semibold mb-2 text-fg">{item.baslik}</h3>
              <p className="text-sm text-fg-muted leading-relaxed">{item.acik}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Örnek veri */}
      <Section tone="tinted" eyebrow="ÖRNEK VERİ" title="Ulaşılmaz Noktalar Artık Elinizin Altında" intro="Dağın zirvesindeki düğüm, nehrin ortasındaki istasyon ya da tarla kenarı — hepsi tek ekranda.">
        <DataVizPanel label="Kuzey Geçidi · 2847m yükseklik" title="Hava İstasyonu">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {ENERJI.map((e) => (
              <div key={e.label} className="rounded-xl border border-line bg-white/5 p-3">
                <e.Ikon size={18} weight="duotone" style={{ color: e.renk }} aria-hidden="true" />
                <p className="text-sm font-bold mt-1.5" style={{ color: e.renk }}>{e.val}</p>
                <p className="text-[11px] text-fg-muted">{e.label}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {SENSORLER.map((s) => (
              <div key={s.label} className="rounded-xl border border-line bg-white/5 p-3">
                <s.Ikon size={16} weight="duotone" style={{ color: s.renk }} aria-hidden="true" />
                <p className="text-xs font-bold mt-1.5" style={{ color: s.renk }}>{s.val}</p>
                <p className="text-[10px] text-fg-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </DataVizPanel>
      </Section>

      {/* Kullanım alanları */}
      <Section eyebrow="UYGULAMA ALANLARI" title="Nerede Kullanılır?">
        <UseCaseGrid
          columns={2}
          items={[
            { Icon: Mountains, title: "Dağ ve Orman Alanları", body: "Yüksek geçitler, orman içi noktalar, dağcılık güzergahları. Hava koşulları ve don uyarısı için.", accentClass: "text-yellow-400" },
            { Icon: Waves, title: "Su Kaynakları & Barajlar", body: "Nehir, dere ve baraj gözlem noktaları. Su seviyesi ve kalitesini sürekli izleyin.", accentClass: "text-yellow-400" },
            { Icon: Plant, title: "Tarım Arazileri", body: "Tarla kenarı hava istasyonu. Sıcaklık, nem ve toprak nemi — sulama kararlarınızı veriye dayandırın.", accentClass: "text-yellow-400" },
            { Icon: Cylinder, title: "Uzak Depo & Altyapı", body: "Akaryakıt deposu, trafo merkezi, su kuyusu — şehirden uzak tesislerinizi ofisten izleyin.", accentClass: "text-yellow-400" },
          ]}
        />
      </Section>

      {/* Teknik */}
      <Section tone="tinted">
        <SpecTable
          layout="grid"
          specs={[
            { label: "Güç Kaynağı", value: "Güneş paneli + dahili Li-Ion batarya" },
            { label: "Panel Gücü", value: "5W monokristal" },
            { label: "Batarya Kapasitesi", value: "10.000 mAh — 5+ gün güneşsiz çalışır" },
            { label: "İletişim", value: "LoRa — SIM kart yok" },
            { label: "Menzil", value: "5–15 km (topografyaya bağlı)" },
            { label: "Desteklenen Sensörler", value: "Sıcaklık, nem, yağış, rüzgar, CO₂, basınç" },
            { label: "Güncelleme Sıklığı", value: "Her 5–60 dakika (ayarlanabilir)" },
            { label: "Çalışma Sıcaklığı", value: "-30°C ile +70°C" },
            { label: "Koruma Sınıfı", value: "IP66 — her hava koşuluna dayanıklı" },
          ]}
        />
      </Section>

      <CTASection
        title="Ulaşılmaz Noktanızı İzleyelim"
        body="Konumu, izlemek istediğiniz parametreleri ve yaklaşık mesafeyi söyleyin — size en uygun sistemi tasarlayalım."
        primaryHref="/iletisim"
        primaryLabel="Teklif Al"
        secondaryHref="/projeler"
        secondaryLabel="Diğer Uygulamalara Bak"
      />
    </div>
  );
}
