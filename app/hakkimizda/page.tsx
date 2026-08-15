import type { Metadata } from "next";
import {
  Target,
  Compass,
  MapTrifold,
  Wrench,
  BatteryFull,
  MoneyWavy,
  Handshake,
  Gauge,
} from "@phosphor-icons/react/dist/ssr";
import PageHero from "../components/PageHero";
import Section from "../components/Section";
import UseCaseGrid from "../components/UseCaseGrid";
import CTASection from "../components/CTASection";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Kargu, SIM kart ve aylık ücret gerektirmeyen LoRa tabanlı kablosuz sensör ve RF/gömülü sistem çözümleri geliştiren bir Türk mühendislik ekibidir.",
};

export default function HakkimizdaPage() {
  return (
    <div className="min-h-dvh bg-ink/70 text-fg">
      <PageHero
        backHref="/"
        backLabel="← Ana Sayfa"
        eyebrow="HAKKIMIZDA"
        title={<>Sinyalin ulaşmadığı yerde de,<span className="block text-accent">veri akmaya devam etsin.</span></>}
        intro="Kargu, Türkiye'nin kırsalında, tarlasında ve dağında — GSM şebekesinin ulaşamadığı her yerde çalışan RF haberleşme ve gömülü sistem çözümleri tasarlayan bir mühendislik ekibidir."
      />

      {/* Hikaye */}
      <Section border="bottom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-sm text-accent mb-5">
              NEDEN VARIZ
            </div>
            <h2 className="text-3xl font-bold leading-snug text-fg">Bir sorudan doğdu: neden herkes aylık fatura ödüyor?</h2>
            <p className="mt-5 text-fg-muted text-lg leading-relaxed">
              Kırsalda çalışan bir çiftçiyle konuşurken fark ettik: piyasadaki
              &ldquo;akıllı&rdquo; sensörlerin büyük çoğunluğu SIM kart istiyor,
              operatöre bağımlı kalıyor ve şebeke çekmeyen yerlerde işe yaramıyor.
              Oysa asıl ihtiyaç duyulan yerler — tarlalar, ahırlar, uzak kuyular,
              dağlık araziler — tam olarak şebekenin en zayıf olduğu noktalar.
            </p>
            <p className="mt-4 text-fg-muted text-lg leading-relaxed">
              Bu yüzden SIM kart yerine LoRa radyo teknolojisini seçtik: kurulumdan
              sonra hiçbir operatöre, hiçbir aylık ücrete ihtiyaç duymayan,
              pille yıllarca çalışan bir sistem kurduk.
            </p>
          </div>
          <UseCaseGrid
            columns={2}
            items={[
              { Icon: Target, title: "Misyonumuz", body: "Elektrik ve GSM sinyali olmayan her noktayı, uygun maliyetle izlenebilir hale getirmek." },
              { Icon: Compass, title: "Vizyonumuz", body: "Türkiye kırsalında en yaygın kullanılan bağımsız izleme altyapısı olmak." },
              { Icon: MapTrifold, title: "Nerede Çalışıyoruz", body: "Türkiye genelinde saha kurulumu ve uzaktan teknik destek sağlıyoruz." },
              { Icon: Wrench, title: "Ne Üretiyoruz", body: "Su seviyesi, tarım ve uzak alan telemetrisi için LoRa tabanlı sensör donanımı ve yazılımı." },
            ]}
          />
        </div>
      </Section>

      {/* Değerler */}
      <Section tone="tinted" eyebrow="DEĞERLER" title="Nasıl Çalışırız" intro="Her tasarım kararının arkasında saha koşulları var — laboratuvar değil.">
        <UseCaseGrid
          items={[
            { Icon: BatteryFull, title: "Bakım İstemez", body: "Cihaz bir kez kurulur, yıllarca dokunulmadan çalışır. Pil ömrü ve dayanıklılık her tasarımın önceliğidir." },
            { Icon: MoneyWavy, title: "Şeffaf Maliyet", body: "Gizli abonelik yok. Ödediğiniz fiyat, aldığınız cihazın bedelidir — ne eksik ne fazla." },
            { Icon: Gauge, title: "Sahada Test Edilir", body: "Her ürün, laboratuvar öncesinde gerçek ahırda, gerçek tarlada, gerçek kuyu başında denenir." },
            { Icon: Handshake, title: "Doğrudan Destek", body: "Aracı çağrı merkezi yok. Sorunuz olduğunda doğrudan bizimle görüşürsünüz." },
          ]}
        />
      </Section>

      {/* Sayılar */}
      <section className="border-b border-line">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { sayi: "10 km", acik: "Açık alanda sinyal menzili" },
            { sayi: "5 Yıl", acik: "Ortalama pil ömrü" },
            { sayi: "3", acik: "Aktif ürün ailesi" },
            { sayi: "2 Yıl", acik: "Üretici garantisi" },
          ].map((m) => (
            <div key={m.sayi} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">{m.sayi}</div>
              <p className="mt-1 text-sm text-fg-muted">{m.acik}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Bizimle Çalışmak İster misiniz?"
        body="İhtiyacınızı anlatın, saha koşullarınıza uygun çözümü birlikte belirleyelim."
        primaryHref="/iletisim"
        primaryLabel="Bize Ulaşın"
        secondaryHref="/projeler"
        secondaryLabel="Uygulamaları İncele"
      />
    </div>
  );
}
