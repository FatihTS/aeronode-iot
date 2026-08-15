import type { Metadata } from "next";
import { Broadcast, BatteryFull, Cpu, Plug } from "@phosphor-icons/react/dist/ssr";
import PageHero from "../components/PageHero";
import TechnologyCapabilities from "../components/TechnologyCapabilities";
import RFLinkDiagram from "../components/RFLinkDiagram";
import Section from "../components/Section";
import CTASection from "../components/CTASection";

export const metadata: Metadata = {
  title: "Teknoloji",
  description: "Kargu'nun RF haberleşme, ultra düşük güç, gömülü sistemler ve endüstriyel sensör arayüzleri konusundaki mühendislik yetenekleri.",
};

export default function TeknolojiPage() {
  return (
    <div className="min-h-dvh bg-ink/70 text-fg">
      <PageHero
        backHref="/"
        backLabel="← Ana Sayfa"
        eyebrow="TEKNOLOJİ"
        title="Sahayı Ayakta Tutan Mühendislik"
        intro="Kargu; RF haberleşme, gömülü sistemler, düşük güç elektroniği ve endüstriyel sensör arayüzleri geliştiren bir mühendislik ekibidir. Her ürün bu dört yetenek üzerine kurulur."
      />

      <Section border="bottom">
        <TechnologyCapabilities
          capabilities={[
            {
              Icon: Broadcast,
              title: "RF Engineering",
              tagline: "868 MHz kablosuz haberleşme",
              points: [
                "LoRaWAN protokol yığını üzerinde çalışan uçtan uca RF tasarımı",
                "Açık alanda 10 km'ye kadar sinyal menzili",
                "AES-128 uçtan uca şifreli veri iletimi",
              ],
            },
            {
              Icon: BatteryFull,
              title: "Ultra Low Power",
              tagline: "Uyku odaklı mimari",
              points: [
                "Sensör bir kez pil ile kurulur, yıllarca çalışır",
                "Aktif iletim dışında donanım derin uyku modunda bekler",
                "Güç bütçesi her tasarım kararının merkezinde",
              ],
            },
            {
              Icon: Cpu,
              title: "Embedded Systems",
              tagline: "Özel gömülü yazılım",
              points: [
                "Gerçek zamanlı sensör okuma ve işleme",
                "Sahada güncellenebilir firmware mimarisi",
                "Ürüne özel donanım/yazılım birlikte tasarımı",
              ],
            },
            {
              Icon: Plug,
              title: "Industrial Interfaces",
              tagline: "Endüstriyel sensör arayüzleri",
              points: [
                "RS-485 ve SDI-12 endüstriyel sensör protokolleri",
                "Analog ve dijital giriş/çıkış desteği",
                "Üçüncü taraf endüstriyel sensörlerle entegrasyon",
              ],
            },
          ]}
        />
      </Section>

      <Section
        tone="tinted"
        eyebrow="RF BAĞLANTISI"
        title="Sinyal Tel Olmadan Kilometrelerce Gider"
        intro="Sensör sahadadır, alıcı çok uzakta olabilir. Aralarında kablo, GSM hattı ya da elektrik bağlantısı yoktur — sadece havadan geçen LoRa radyo sinyali."
        headerAlign="center"
      >
        <RFLinkDiagram
          sourceLabel="Kargu Node"
          sourceSublabel="Sahadaki sensör"
          gatewayLabel="Gateway"
          gatewaySublabel="Alıcı ünite"
          frequencyLabel="LoRa 868 MHz"
          rangeLabel="Açık alanda 10 km'ye kadar"
        />
      </Section>

      <CTASection
        title="Teknik Ekibimizle Konuşun"
        body="Projenizin RF, güç veya entegrasyon gereksinimlerini konuşalım."
        primaryHref="/iletisim"
        primaryLabel="İletişime Geçin"
        secondaryHref="/muhendislik"
        secondaryLabel="Mühendislik Sürecini İncele"
      />
    </div>
  );
}
