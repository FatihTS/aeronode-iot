import type { Metadata } from "next";
import Image from "next/image";
import {
  Thermometer,
  Drop,
  Eye,
  BatteryFull,
  Warning,
  Check,
  Fan,
  Wind,
  Cow,
  Broadcast,
  CellTower,
  DeviceMobile,
  Tag,
  Package,
  MapPin,
  Hourglass,
  ListNumbers,
  Lightning,
  Gear,
} from "@phosphor-icons/react/dist/ssr";
import PageHero from "../../components/PageHero";
import Section from "../../components/Section";
import DataVizPanel from "../../components/DataVizPanel";
import FlowChain from "../../components/FlowChain";
import SpecTable from "../../components/SpecTable";
import CTASection from "../../components/CTASection";

export const metadata: Metadata = {
  title: "Akıllı Tarım Sensörü",
  description: "Ahır sıcaklığı, nem ve hayvan varlık takibi. SIM kart gerektirmeyen LoRa kablosuz sensörle gece 3'te bile bir şey olduğunda telefonunuz çalar.",
};

const SENSOR_VERISI = [
  { Ikon: Thermometer, baslik: "Sıcaklık", deger: "24.5°C", durum: "normal", renk: "#fb923c" },
  { Ikon: Drop, baslik: "Nem", deger: "%68", durum: "uyari", renk: "#fde047" },
  { Ikon: Eye, baslik: "Varlık", deger: "12 / 14", durum: "uyari", renk: "#ffffff" },
  { Ikon: BatteryFull, baslik: "Pil", deger: "%87", durum: "normal", renk: "#34d399" },
];

const SENARYOLAR = [
  {
    Ikon: Thermometer,
    baslik: "Yaz Ortasında Isı Stresi",
    renk: "text-orange-400",
    border: "border-orange-500/20",
    bg: "bg-orange-500/5",
    oncesi: "Temmuz günü ahır 38°C'yi geçiyor. Çiftçi fark ettiğinde hayvanlar strese girmiş, verim düşmüş.",
    sonrasi: "Sistem 34°C'de uyarı veriyor. Çiftçi telefona bakıyor, havalandırmayı açıyor. Hayvanlar etkilenmeden sorunu çözüyor.",
  },
  {
    Ikon: Drop,
    baslik: "Ahırda Yüksek Nem",
    renk: "text-blue-400",
    border: "border-blue-500/20",
    bg: "bg-blue-500/5",
    oncesi: "Uzun süreli yağmur sonrası ahır nemi %85'e çıkıyor. Küf oluşuyor, hayvanlar solunum yolu hastalığına yakalanıyor.",
    sonrasi: "Nem %75'i geçtiğinde Fan 1 ve Fan 2 otomatik devreye girer. Çiftçi uyandığında ahır zaten havalanmış, nem normal seviyeye inmiş olur.",
  },
  {
    Ikon: Eye,
    baslik: "Gece Kaçan Hayvan",
    renk: "text-yellow-400",
    border: "border-yellow-500/20",
    bg: "bg-yellow-500/5",
    oncesi: "Ahır kapısı rüzgardan açılıyor. Sabah kontrol edildiğinde bir inek kayıp — saatler geçmiş.",
    sonrasi: "Gece 02:30'da sistem 'hayvan sayısı azaldı' bildirimi gönderiyor. Çiftçi 20 dakika içinde ineği buluyor.",
  },
];

export default function AkilliTarimPage() {
  return (
    <div className="min-h-dvh bg-ink/70 text-fg">
      <PageHero
        backHref="/projeler"
        backLabel="← Tüm Uygulamalar"
        eyebrow="HAYVANCILIK & TARIM"
        eyebrowColorClass="border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
        title={<>Akıllı Tarım<span className="block text-emerald-400">Sensörü</span></>}
        meta={<span className="text-xs text-fg-muted">Pil Destekli • LoRa Kablosuz • SIM Kart Yok</span>}
        intro="Hayvancılıkta kayıpların büyük çoğunluğu gece olur. Bizim sistemimiz gece de gündüz de uyanık — siz uyurken ahırınızı izliyor, bir şey olduğunda sizi uyandırıyor."
      />

      {/* Canlı örnek veri */}
      <Section eyebrow="ÖRNEK VERİ" title="Telefonunuzda Tam Olarak Bunu Görürsünüz" intro="Sensörler her birkaç dakikada bir veri gönderir. Ahırda fiziksel olarak bulunmanıza gerek kalmadan tüm durumu tek bakışta anlarsınız.">
        <DataVizPanel label="Ahır 1 · İzmir, Tire" title="Genel Bakış">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {SENSOR_VERISI.map((s) => (
              <div key={s.baslik} className="rounded-2xl border border-line bg-white/5 p-4">
                <div className="flex items-center justify-between mb-3">
                  <s.Ikon size={22} weight="duotone" style={{ color: s.renk }} aria-hidden="true" />
                  {s.durum === "uyari" ? (
                    <Warning size={13} weight="bold" className="text-yellow-400" aria-hidden="true" />
                  ) : (
                    <Check size={13} weight="bold" className="text-emerald-400" aria-hidden="true" />
                  )}
                </div>
                <p className="text-xl font-bold text-fg">{s.deger}</p>
                <p className="text-xs text-fg-muted mt-1">{s.baslik}</p>
              </div>
            ))}
          </div>
        </DataVizPanel>
      </Section>

      {/* Otomasyon */}
      <Section tone="tinted" eyebrow="OTOMATİK KONTROL" title="Nem Yükselince Fan Otomatik Açılır" intro="Siz uyurken sistem uyanık. Nem belirlediğiniz eşiği geçtiğinde fanlar otomatik devreye girer — telefona bakmanıza bile gerek kalmaz.">
        <DataVizPanel label="Otomasyon Kuralları" title="2 aktif kural">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="rounded-2xl border border-yellow-500/25 bg-yellow-500/5 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-yellow-300">Kural 1 — Çalışıyor</span>
                <Lightning size={16} weight="bold" className="text-yellow-400" aria-hidden="true" />
              </div>
              <p className="text-sm text-fg-muted">Nem &gt; %75 → Fan 1, Fan 2 <span className="text-emerald-400 font-semibold">AÇ</span></p>
            </div>
            <div className="rounded-2xl border border-line bg-white/5 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-fg-muted">Kural 2 — Etkin</span>
                <Gear size={16} weight="bold" className="text-fg-muted" aria-hidden="true" />
              </div>
              <p className="text-sm text-fg-muted">Sıcaklık &gt; 32°C → Havalandırma AÇ</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {[
              { ad: "Fan 1", Ikon: Fan, acik: true },
              { ad: "Fan 2", Ikon: Fan, acik: true },
              { ad: "Hava", Ikon: Wind, acik: false },
            ].map((c) => (
              <div key={c.ad} className="flex items-center gap-2 text-sm">
                <c.Ikon size={16} weight="bold" className={c.acik ? "text-emerald-400" : "text-fg-muted/50"} aria-hidden="true" />
                <span className={c.acik ? "text-fg" : "text-fg-muted/50"}>{c.ad}</span>
              </div>
            ))}
          </div>
        </DataVizPanel>
      </Section>

      {/* Senaryolar */}
      <Section eyebrow="GERÇEK SENARYOLAR" title="Bu Sistem Olmadan Yaşanan Sorunlar" intro="Ve sistemle nasıl önlendiği.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SENARYOLAR.map((item) => (
            <div key={item.baslik} className={`rounded-3xl border ${item.border} ${item.bg} p-8`}>
              <item.Ikon size={26} weight="duotone" className={`mb-5 ${item.renk}`} aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-5 text-fg">{item.baslik}</h3>
              <div className="space-y-4">
                <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-4">
                  <p className="text-xs text-red-400 font-semibold mb-1 uppercase tracking-wide">Sistem olmadan</p>
                  <p className="text-sm text-fg-muted">{item.oncesi}</p>
                </div>
                <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4">
                  <p className="text-xs text-emerald-400 font-semibold mb-1 uppercase tracking-wide">Kargu ile</p>
                  <p className="text-sm text-fg">{item.sonrasi}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Varlık takibi */}
      <Section tone="tinted" eyebrow="VARLIK TAKİBİ — NASIL ÇALIŞIR?" title="Hayvanlar Nasıl Sayılır?" intro="Her hayvana kulak küpesi gibi küçük bir etiket takılır. Ahırdaki ana sensör bu etiketleri okur ve kaç hayvanın içeride, kaçının dışarıda olduğunu anlar.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-8">
            <h3 className="text-xl font-bold text-fg mb-3">Hayvan Etiketi</h3>
            <p className="text-fg-muted mb-5">Her hayvana bir kez takılır, bir daha çıkarılmaz. Halihazırda kullandığınız kulak küpesinin yanına ya da yerine geçer.</p>
            <div className="space-y-3">
              {[
                { Ikon: BatteryFull, baslik: "Pil yok", acik: "Pasif etiket — enerji almak için pil takmaya gerek yok." },
                { Ikon: Cow, baslik: "Hayvanı rahatsız etmez", acik: "Standart kulak küpesiyle aynı boyut ve ağırlık." },
                { Ikon: Hourglass, baslik: "5+ yıl ömür", acik: "Bir kez takıldıktan sonra yıllarca bakım gerektirmez." },
              ].map((m) => (
                <div key={m.baslik} className="flex items-start gap-3">
                  <m.Ikon size={20} weight="duotone" className="shrink-0 mt-0.5 text-yellow-400" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-fg">{m.baslik}</p>
                    <p className="text-sm text-fg-muted">{m.acik}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-8">
            <h3 className="text-xl font-bold text-fg mb-3">Ana Sensör (Ahıra Sabitlenir)</h3>
            <p className="text-fg-muted mb-5">Ahırın duvarına ya da tavanına bir kez monte edilir. Hem ortam verilerini (sıcaklık, nem) hem de etiket sinyallerini okur.</p>
            <div className="space-y-3">
              {[
                { Ikon: Broadcast, baslik: "Etiketleri okur", acik: "Menzil içindeki tüm etiket numaralarını saniyeler içinde tespit eder." },
                { Ikon: ListNumbers, baslik: "Hayvan sayar", acik: "\"14 hayvandan 12'si içeride, 2'si dışarıda\" bilgisini anlık üretir." },
                { Ikon: Lightning, baslik: "Hem ölçer hem iletir", acik: "Sıcaklık ve nem ölçümü + hayvan sayımı tek cihazdan yapılır." },
              ].map((m) => (
                <div key={m.baslik} className="flex items-start gap-3">
                  <m.Ikon size={20} weight="duotone" className="shrink-0 mt-0.5 text-emerald-400" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-fg">{m.baslik}</p>
                    <p className="text-sm text-fg-muted">{m.acik}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <FlowChain
          stages={[
            { Icon: Cow, label: "Hayvan", sub: "Etiket her 30 saniyede sinyal yayar" },
            { Icon: Broadcast, label: "Ana Sensör", sub: "Okur, ölçer, LoRa ile iletir" },
            { Icon: CellTower, label: "Gateway", sub: "Veriyi internete taşır" },
            { Icon: DeviceMobile, label: "Telefonunuz", sub: "Anlık sayım ve alarm" },
          ]}
        />
      </Section>

      {/* Kurulum */}
      <Section eyebrow="KURULUM" title="4 Adımda Kurulum" intro="Elektrikçi gerektirmez. İnternet kablosu yok. Teknik bilgiye ihtiyaç yok.">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { adim: "1", Ikon: Package, baslik: "Kutusundan Çıkar", acik: "Cihaz hazır gelir. Pili tak, kapağını kapat." },
            { adim: "2", Ikon: MapPin, baslik: "Ahıra Yerleştir", acik: "Duvara veya direğe sabitle. Elektrik kablosu gerekmez." },
            { adim: "3", Ikon: Tag, baslik: "Etiketleri Tak", acik: "Her hayvana bir etiket takılır. Kulak küpesi gibi — bir kez, ömür boyu." },
            { adim: "4", Ikon: DeviceMobile, baslik: "Telefondan İzle", acik: "Uygulama veya web arayüzünden sayımı ve sensör verilerini canlı görün." },
          ].map((item) => (
            <div key={item.adim} className="rounded-2xl border border-line bg-surface p-6 relative">
              <span className="absolute top-4 right-4 text-xs text-fg-muted/50 font-mono font-bold">{item.adim}</span>
              <item.Ikon size={30} weight="duotone" className="mb-4 text-accent" aria-hidden="true" />
              <h4 className="font-semibold text-fg mb-1">{item.baslik}</h4>
              <p className="text-sm text-fg-muted">{item.acik}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Görsel + Teknik */}
      <Section tone="tinted">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="relative rounded-3xl overflow-hidden" style={{ height: "360px" }}>
            <Image
              src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=900&q=80&auto=format&fit=crop"
              alt="Ahırda inekler"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
          </div>

          <SpecTable
            specs={[
              { label: "İletişim", value: "LoRa — SIM kart gerekmez" },
              { label: "Menzil", value: "Açık alanda 5–10 km" },
              { label: "Pil Ömrü", value: "2–5 yıl" },
              { label: "Sıcaklık Sensörü", value: "±0.5°C hassasiyet, -40°C ile +80°C" },
              { label: "Nem Sensörü", value: "%0–100 RH, ±2% hassasiyet" },
              { label: "Varlık Sensörü", value: "PIR hareket + alan taraması" },
              { label: "Güncelleme Sıklığı", value: "Her 1–15 dakika (ayarlanabilir)" },
              { label: "Çalışma Sıcaklığı", value: "-20°C ile +70°C" },
              { label: "Koruma Sınıfı", value: "IP67 — suya ve toza dayanıklı" },
            ]}
          />
        </div>
      </Section>

      <CTASection
        title="Ahırınıza Kuralım"
        body="Kaç hayvan, ne büyüklükte ahır olduğunu söyleyin — size özel kurulum planı ve fiyat teklifi hazırlayalım."
        primaryHref="/iletisim"
        primaryLabel="Teklif Al"
        secondaryHref="/projeler"
        secondaryLabel="Diğer Uygulamalara Bak"
      />
    </div>
  );
}
