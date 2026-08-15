import type { Metadata } from "next";
import {
  Broadcast,
  BatteryFull,
  LockKey,
  Drop,
  Cylinder,
  Waves,
  House,
  ChartBar,
  Bell,
  MoneyWavy,
  MapPin,
  Scroll,
} from "@phosphor-icons/react/dist/ssr";
import PageHero from "../../components/PageHero";
import Section from "../../components/Section";
import RFLinkDiagram from "../../components/RFLinkDiagram";
import DataVizPanel from "../../components/DataVizPanel";
import UseCaseGrid from "../../components/UseCaseGrid";
import SpecTable from "../../components/SpecTable";
import CTASection from "../../components/CTASection";

export const metadata: Metadata = {
  title: "Su Seviyesi Ölçüm Cihazı",
  description: "Kuyu kurumadan, depo taşmadan haberdar olun. SIM kart gerektirmeyen LoRa kablosuz su seviyesi sensörü — ±1 cm hassasiyet, IP68 koruma, yıllarca pil ömrü.",
};

const KAYNAKLAR = [
  { Ikon: Drop, baslik: "Kuyu", seviye: 18, trend: "↓ düşüyor", renk: "#f87171" },
  { Ikon: Cylinder, baslik: "Su Deposu", seviye: 62, trend: "→ sabit", renk: "#60a5fa" },
  { Ikon: Waves, baslik: "Sulama Havuzu", seviye: 44, trend: "↓ -3%/gün", renk: "#a3e635" },
];

export default function SuSeviyesiPage() {
  return (
    <div className="min-h-dvh bg-ink/70 text-fg">
      <PageHero
        backHref="/projeler"
        backLabel="← Tüm Uygulamalar"
        eyebrow="SU YÖNETİMİ"
        eyebrowColorClass="border-blue-400/30 bg-blue-400/10 text-blue-300"
        title={<>Su Seviyesi<span className="block text-blue-400">Ölçüm Cihazı</span></>}
        meta={<span className="text-xs text-fg-muted">Pil Destekli • LoRa Kablosuz • SIM Kart Yok</span>}
        intro="Sulama mevsiminde kuyunun bitmesi, hasatı mahvedebilir. Sensörümüz seviye düşmeye başlar başlamaz sizi uyarır — saatler geçmeden önce."
        visual={
          <div className="flex flex-col items-center">
            <div className="relative w-52 rounded-3xl border-2 border-blue-500/30 bg-surface overflow-hidden" style={{ height: "280px" }}>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-700/60 to-blue-400/20" style={{ height: "62%" }}>
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />
              </div>
              <div className="absolute left-0 right-0 flex items-center px-4 gap-2" style={{ bottom: "62%" }}>
                <div className="flex-1 border-t border-dashed border-blue-400/40" />
                <span className="text-xs text-blue-300 font-mono bg-blue-500/20 border border-blue-500/30 px-2 py-0.5 rounded-full shrink-0">%62</span>
              </div>
              <div className="absolute inset-y-0 right-3 flex flex-col justify-between py-4 text-xs text-fg-muted/70 font-mono">
                <span>%100</span><span>%75</span><span>%50</span><span>%25</span><span>%0</span>
              </div>
              <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-blue-500/20 border border-blue-500/30 rounded-full px-2.5 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" style={{ animation: "pulse 2s ease-in-out infinite" }} />
                <span className="text-xs text-blue-300 font-medium">Canlı</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-fg-muted">Su deposu · Kuyu · Sulama havuzu</p>
          </div>
        }
      />

      {/* RF İletim */}
      <Section
        eyebrow="KABLOSUZ VERİ AKTARIMI"
        eyebrowColorClass="border-blue-400/30 bg-blue-400/10 text-blue-300"
        title="Sinyal Tel Olmadan Kilometrelerce Gider"
        intro="Sensör kuyunun başındadır, siz evinizdesinizdir. Aralarında kablo, GSM hattı ya da elektrik bağlantısı yoktur — sadece havadan geçen LoRa radyo sinyali."
      >
        <RFLinkDiagram
          sourceLabel="Su Sensörü"
          sourceSublabel="Kuyunun yanı"
          gatewayLabel="Gateway Alıcı"
          gatewaySublabel="Evinizde ya da çiftlikte"
          frequencyLabel="LoRa 868 MHz"
          rangeLabel="2–10 km · SIM kart yok"
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { Ikon: Broadcast, renk: "text-blue-400", baslik: "868 MHz LoRa", acik: "GSM'den 10× daha uzun menzil. Bina duvarlarından ve engebeli araziden geçer." },
            { Ikon: BatteryFull, renk: "text-yellow-400", baslik: "Ultra düşük güç", acik: "Bir LoRa paketi saniyenin binde birinde iletilir; sensör hemen uyku moduna döner. Pil yıllarca yetişir." },
            { Ikon: LockKey, renk: "text-purple-400", baslik: "AES-128 şifreli", acik: "Her paket uçtan uca şifreli gönderilir. Üçüncü taraflar veriye erişemez." },
          ].map((item) => (
            <div key={item.baslik} className="flex items-start gap-3">
              <item.Ikon size={22} weight="duotone" className={`shrink-0 mt-0.5 ${item.renk}`} aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-fg">{item.baslik}</p>
                <p className="text-xs text-fg-muted mt-0.5 leading-relaxed">{item.acik}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Örnek veri paneli */}
      <Section tone="tinted" eyebrow="ÖRNEK VERİ" title="Genel Bakış">
        <DataVizPanel label="Su Yönetimi Paneli" title="3 kaynak · Canlı">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {KAYNAKLAR.map((k) => (
              <div key={k.baslik} className="rounded-2xl border border-line bg-white/5 p-4">
                <div className="flex items-center justify-between mb-3">
                  <k.Ikon size={20} weight="duotone" style={{ color: k.renk }} aria-hidden="true" />
                  <span className="text-[11px] font-mono" style={{ color: k.renk }}>{k.trend}</span>
                </div>
                <p className="text-2xl font-bold" style={{ color: k.renk }}>%{k.seviye}</p>
                <p className="text-sm text-fg mt-1">{k.baslik}</p>
                <div className="mt-3 h-1.5 rounded-full bg-white/10">
                  <div className="h-1.5 rounded-full" style={{ width: `${k.seviye}%`, background: k.renk }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-2 text-xs text-fg-muted">
            <Bell size={14} weight="bold" className="text-red-400" aria-hidden="true" />
            Kritik uyarı — Kuyu su seviyesi %18&apos;e düştü.
          </div>
        </DataVizPanel>
      </Section>

      {/* Kullanım alanları */}
      <Section eyebrow="UYGULAMA ALANLARI" title="Nerede Kullanılır?">
        <UseCaseGrid
          items={[
            { Icon: Cylinder, title: "Su Deposu", body: "Evin, çiftliğin veya saha tesisinin su deposunu 7/24 izleyin. Dolmadan ve taşmadan önce haberdar olun.", accentClass: "text-blue-400" },
            { Icon: Drop, title: "Kuyu", body: "Sulama mevsiminde kuyunun seviyesini takip edin. Pompa çalışırken kuyu bitmeden önce uyarı alın.", accentClass: "text-blue-400" },
            { Icon: Waves, title: "Sulama Havuzu", body: "Tarla sulama rezervuarının doluluk oranını izleyin, sulama planınızı veriye göre yapın.", accentClass: "text-blue-400" },
            { Icon: House, title: "Köy & Mezra", body: "Şehir suyuna bağlı olmayan köy ve mezralarda hayati önem taşıyan su kaynaklarını uzaktan izleyin.", accentClass: "text-blue-400" },
          ]}
        />
      </Section>

      {/* Faydalar + Teknik */}
      <Section tone="tinted">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-fg">Hayatınızı Nasıl Kolaylaştırır?</h2>
            <div className="space-y-5">
              {[
                { Ikon: Bell, baslik: "Kritik seviye alarmı", acik: "Su %20'nin altına düştüğünde telefonunuza bildirim gelir. Kendi eşiğinizi siz belirlersiniz." },
                { Ikon: ChartBar, baslik: "Tüketim takibi", acik: "Haftalık ve aylık tüketim grafikleri. Sulama maliyetlerini düşürmek için hangi günler ne kadar su gittiğini görün." },
                { Ikon: MoneyWavy, baslik: "Su israfını önler", acik: "Depo dolunca pompa durmadıysa sistem anında uyarır. Su ve elektrik tasarrufu sağlar." },
                { Ikon: MapPin, baslik: "Uzaktan erişim", acik: "İstanbul'dayken köydeki kuyunuzu, şehirdeyken çiftliğinizdeki havuzu izleyebilirsiniz." },
                { Ikon: Scroll, baslik: "Otomatik kayıt", acik: "Tüm ölçümler bulutta saklanır. Geçmiş seviye verileri her zaman erişilebilir durumda." },
              ].map((item) => (
                <div key={item.baslik} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <item.Ikon size={20} weight="duotone" className="text-blue-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-fg">{item.baslik}</p>
                    <p className="text-sm text-fg-muted mt-0.5">{item.acik}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <SpecTable
            specs={[
              { label: "Ölçüm Yöntemi", value: "Ultrasonik / basınç sensörü" },
              { label: "Ölçüm Aralığı", value: "0 – 10 metre" },
              { label: "Hassasiyet", value: "±1 cm" },
              { label: "İletişim", value: "LoRa — SIM kart yok" },
              { label: "Pil Ömrü", value: "2–4 yıl" },
              { label: "Koruma Sınıfı", value: "IP68 — tam su geçirmez" },
              { label: "Çalışma Sıcaklığı", value: "-20°C ile +60°C" },
              { label: "Güncelleme Sıklığı", value: "Her 5–60 dakika (ayarlanabilir)" },
              { label: "Montaj", value: "Depo veya kuyu kenarına; kablo yok" },
            ]}
          />
        </div>
      </Section>

      <CTASection
        title="Su Kaynaklarınızı İzlemeye Başlayın"
        body="Kaç depo veya kuyu olduğunu ve yaklaşık derinliğini söyleyin — size özel teklif hazırlayalım."
        primaryHref="/iletisim"
        primaryLabel="Teklif Al"
        secondaryHref="/projeler"
        secondaryLabel="Diğer Uygulamalara Bak"
      />
    </div>
  );
}
