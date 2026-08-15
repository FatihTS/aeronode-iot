import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import EngineeringPipeline from "../components/EngineeringPipeline";
import Section from "../components/Section";
import UseCaseGrid from "../components/UseCaseGrid";
import CTASection from "../components/CTASection";
import { Wrench, Gauge, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Mühendislik",
  description: "Kargu, sensör satan değil sistem geliştiren bir mühendislik ekibidir — donanımdan sahaya kadar her aşama kendi ekibimizden geçer.",
};

export default function MuhendislikPage() {
  return (
    <div className="min-h-dvh bg-ink/70 text-fg">
      <PageHero
        backHref="/"
        backLabel="← Ana Sayfa"
        eyebrow="MÜHENDİSLİK"
        title="Baştan Sona Mühendislik"
        intro="Kargu bir sensör satıcısı değil, sistem geliştiren bir mühendislik ekibidir. Donanım, yazılım, RF ve saha doğrulaması — hepsi kendi ekibimizden geçer."
      />

      <Section
        eyebrow="SÜREÇ"
        title="Engineered From the Ground Up"
        intro="Her Kargu cihazı aynı altı aşamadan geçer — laboratuvardan sahaya."
        headerAlign="center"
      >
        <EngineeringPipeline />
      </Section>

      <Section
        tone="tinted"
        eyebrow="NEDEN BÖYLE ÇALIŞIRIZ"
        title="Saha Koşulları, Laboratuvar Değil"
        intro="Her tasarım kararının arkasında saha koşulları var."
      >
        <UseCaseGrid
          columns={3}
          items={[
            { Icon: Wrench, title: "Sahada Test Edilir", body: "Her ürün, laboratuvar öncesinde gerçek ahırda, gerçek tarlada, gerçek kuyu başında denenir." },
            { Icon: Gauge, title: "Bakım İstemez", body: "Cihaz bir kez kurulur, yıllarca dokunulmadan çalışır. Pil ömrü ve dayanıklılık her tasarımın önceliğidir." },
            { Icon: ShieldCheck, title: "Doğrudan Destek", body: "Aracı çağrı merkezi yok. Sorunuz olduğunda doğrudan mühendislik ekibimizle görüşürsünüz." },
          ]}
        />
      </Section>

      <CTASection
        title="Projenizi Konuşalım"
        body="Saha koşullarınıza uygun donanım ve sistem tasarımı için bize ulaşın."
        primaryHref="/iletisim"
        primaryLabel="İletişime Geçin"
        secondaryHref="/teknoloji"
        secondaryLabel="Teknolojiyi İncele"
      />
    </div>
  );
}
