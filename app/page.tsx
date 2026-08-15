import Link from "next/link";
import Image from "next/image";
import {
  Cow,
  Drop,
  Mountains,
  Factory,
  DeviceMobile,
  Broadcast,
  BatteryFull,
  WifiHigh,
  MoneyWavy,
  Thermometer,
  Eye,
  Bell,
  Check,
  X,
  Cpu,
  Plug,
} from "@phosphor-icons/react/dist/ssr";
import Hero from "./components/Hero";
import EagleEyeHero from "./components/EagleEyeHero";
import Section from "./components/Section";
import UseCaseGrid from "./components/UseCaseGrid";
import PlatformDiagram from "./components/PlatformDiagram";
import ProductShowcase from "./components/ProductShowcase";
import TechnologyCapabilities from "./components/TechnologyCapabilities";
import EngineeringPipeline from "./components/EngineeringPipeline";
import SahadaKanitlaniyor from "./components/SahadaKanitlaniyor";
import CTASection from "./components/CTASection";

export default function KarguLandingPage() {
  return (
    <div className="relative min-h-dvh bg-ink/70 text-fg">
      <Hero />

      {/* Metrikler */}
      <section className="border-b border-line">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { sayi: "10 km", acik: "Açık alanda sinyal menzili" },
            { sayi: "5 Yıl", acik: "Ortalama pil ömrü" },
            { sayi: "7/24", acik: "Kesintisiz izleme" },
            { sayi: "0 ₺", acik: "Aylık abonelik ücreti" },
          ].map((m) => (
            <div key={m.sayi} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">{m.sayi}</div>
              <p className="mt-1 text-sm text-fg-muted">{m.acik}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Architecture */}
      <Section
        eyebrow="PLATFORM MİMARİSİ"
        title="Sensörden Uygulamaya Tek Platform"
        intro="Kargu, sahadaki sensörden ekranınızdaki uygulamaya kadar tüm zinciri kendi tasarlar — üçüncü taraf donanım ve dağınık entegrasyon yok."
        headerAlign="center"
      >
        <PlatformDiagram />
      </Section>

      {/* Nasıl Çalışır — SIM'siz RF haberleşme, low-power tasarım */}
      <Section
        eyebrow="NASIL ÇALIŞIR?"
        title={
          <>
            SIM Kart Yok. Aylık Fatura Yok.
            <br />
            <span className="text-accent">Sadece Sinyal.</span>
          </>
        }
        intro="Çoğu kablosuz cihaz telefonunuz gibi çalışır — SIM kart ister, operatöre bağlanır ve her ay ücret ödersiniz. Kargu cihazları radyo dalgasıyla doğrudan haberleşir; hiçbir operatöre ihtiyaç duymaz."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          <div className="rounded-3xl border border-line bg-surface p-8">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-11 h-11 rounded-2xl bg-white/5 border border-line flex items-center justify-center">
                <DeviceMobile size={22} weight="duotone" className="text-fg-muted" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-fg-muted uppercase tracking-widest">Geleneksel yöntem</p>
                <h3 className="font-semibold text-fg mt-0.5">GSM / 4G Cihazlar</h3>
              </div>
            </div>
            <ul className="space-y-3.5">
              {[
                "SIM kart gerektirir — tıpkı telefonunuz gibi",
                "Aylık operatör abonelik ücreti",
                "Pil günler içinde biter",
                "Kırsal alanda çoğunlukla sinyal yok",
                "Operatör değişirse sistem çalışmayabilir",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-fg-muted">
                  <X size={16} weight="bold" className="text-red-400 shrink-0 mt-1" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-accent/30 bg-accent/5 p-8 relative overflow-hidden">
            <div className="absolute top-5 right-5 rounded-full bg-accent/20 px-3 py-1 text-xs text-accent font-semibold tracking-wide">
              TEKNOLOJİMİZ
            </div>
            <div className="flex items-center gap-3 mb-7">
              <div className="w-11 h-11 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center">
                <Broadcast size={22} weight="duotone" className="text-accent" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-fg-muted uppercase tracking-widest">Kargu yöntemi</p>
                <h3 className="font-semibold text-fg mt-0.5">LoRa Kablosuz</h3>
              </div>
            </div>
            <ul className="space-y-3.5">
              {[
                "SIM kart yok — hiçbir operatöre bağımlı değil",
                "Hiçbir zaman aylık ücret yok",
                "Pil günler değil yıllarca dayanır",
                "Açık alanda 10 km'ye kadar çalışır",
                "Kurulumdan sonra bakım gerektirmez",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-fg">
                  <Check size={16} weight="bold" className="text-accent shrink-0 mt-1" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { Icon: BatteryFull, title: "Tek Pille 5 Yıla Kadar", body: "Sensörlerimiz o kadar az güç tüketir ki pili bir kez takarsınız — sonra yıllarca unutursunuz. Düşük güç tasarımı sayesinde AA pil 5 yıla kadar yetebilir." },
            { Icon: WifiHigh, title: "Sinyal Olmayan Yere de Gider", body: "LoRa radyo sinyali duvarları, tarlaları ve tepeleri aşar. Türkiye'nin dağlık ve kırsal bölgelerinde mobil şebeke olmasa da çalışır." },
            { Icon: MoneyWavy, title: "Bir Kere Al, Sürekli Kullan", body: "Cihazı satın aldıktan sonra ek bir ödeme yoktur. SIM kart yok, veri paketi yok, ay sonunda sürpriz fatura yok." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-line bg-surface p-6 flex gap-4 hover:border-accent/30 transition">
              <item.Icon size={28} weight="duotone" className="text-accent shrink-0" aria-hidden="true" />
              <div>
                <h4 className="font-semibold text-fg mb-1">{item.title}</h4>
                <p className="text-sm text-fg-muted leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Ürünler */}
      <div id="urunler" className="scroll-mt-16">
        <div className="border-b border-line bg-white/[0.03]">
          <div className="max-w-7xl mx-auto px-6 pt-20">
            <div className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-sm text-accent">
              ÜRÜNLER
            </div>
            <h2 className="mt-5 text-3xl md:text-4xl font-bold max-w-2xl">Sensor Nodes, Gateways, Telemetry Systems</h2>
            <p className="mt-4 text-fg-muted text-lg max-w-2xl">Aynı platform, farklı sahalar için farklı yapılandırmalar.</p>
          </div>

          <ProductShowcase
            eyebrow="SENSOR NODE"
            eyebrowColorClass="border-blue-400/30 bg-blue-400/10 text-blue-300"
            title={<>Su Seviyesi<span className="block text-blue-400">Ölçüm Cihazı</span></>}
            tagline="Kuyu kurumadan önce öğrenin."
            description="Çiftçilerin en büyük korkularından biri: sulama mevsiminde kuyunun bitmesi. Sensörümüz deponuzun ya da kuyunuzun yanında sessizce bekler, seviye düşmeye başlar başlamaz telefonunuza haber verir. SIM kart veya internet aboneliği gerektirmez."
            accentClass="text-blue-400"
            href="/projeler/su-seviyesi"
            ctaLabel="Tüm Özellikleri Gör"
            features={[
              { Icon: BatteryFull, label: "Çok yıllık pil ömrü", sub: "Pil değiştirmeden yıllarca çalışır. Bakım için uzağa gitmenize gerek yok." },
              { Icon: Broadcast, label: "LoRa kablosuz — SIM kart yok", sub: "Telefon sinyali olmayan tarlalarda, çiftliklerde ve dağlık bölgelerde çalışır." },
              { Icon: Drop, label: "Sürekli seviye ölçümü", sub: "Her birkaç dakikada bir seviyeyi ölçer, veriler telefonunuza iletilir." },
              { Icon: Bell, label: "Kritik seviye alarmı", sub: "Su %20'nin altına düştüğünde — veya siz hangi eşiği belirlediyseniz — anında bildirim alırsınız." },
            ]}
            visual={
              <div className="flex flex-col items-center">
                <div className="relative w-20 h-20 flex items-center justify-center mb-2">
                  <div className="absolute w-20 h-20 rounded-full border border-blue-500/20" style={{ animation: "ping 2.5s ease-out infinite" }} />
                  <div className="absolute w-14 h-14 rounded-full border border-blue-500/30" style={{ animation: "ping 2.5s ease-out 0.5s infinite" }} />
                  <div className="relative w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center z-10">
                    <Broadcast size={18} weight="duotone" className="text-blue-300" aria-hidden="true" />
                  </div>
                </div>
                <div className="w-px h-8 bg-gradient-to-b from-blue-500/40 to-transparent" />
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

          <ProductShowcase
            eyebrow="SENSOR NODE"
            eyebrowColorClass="border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
            title={<>Akıllı Tarım<span className="block text-emerald-400">Sensörü</span></>}
            tagline="Sabah 5&apos;te ahıra gitme."
            description="Hayvancılıkta en büyük kayıplar gece olur — ısı stresi, nem artışı, yerinden ayrılan hayvan. Sensörümüz sabahı beklemiyor; bir şey olduğunda anında telefonunuzu çalıyor."
            accentClass="text-emerald-400"
            href="/projeler/akilli-tarim"
            ctaLabel="Tüm Özellikleri Gör"
            reverse
            features={[
              { Icon: Thermometer, label: "Sıcaklık & nem takibi", sub: "Ahır optimum aralığın dışına çıktığında anında uyarı alırsınız. Yaz kavruluğu, kış dondurucu soğuğu — her ikisi için ayrı alarm eşiği kurabilirsiniz." },
              { Icon: Eye, label: "Hayvan varlık takibi", sub: "Kaç hayvan ahırda, kaçı dışarıda? Gece saatlerinde anormal hareket veya kayıp tespit edilirse hemen bildirim gelir." },
              { Icon: Bell, label: "7/24 alarm sistemi", sub: "Uyku saatinizde bile sistem uyanık. Kritik bir durum oluştuğunda sizi telefonla, SMS ile veya uygulama bildirimiyle uyarır." },
            ]}
            visual={
              <div className="relative rounded-3xl overflow-hidden w-full" style={{ height: "420px" }}>
                <Image
                  src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=900&q=80&auto=format&fit=crop"
                  alt="Ahırda inekler"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3">
                  {[
                    { Ikon: Thermometer, baslik: "Sıcaklık", deger: "24.5°C" },
                    { Ikon: Drop, baslik: "Nem", deger: "%68" },
                    { Ikon: Eye, baslik: "Varlık", deger: "12/14" },
                  ].map((s) => (
                    <div key={s.baslik} className="rounded-xl bg-ink/70 border border-line backdrop-blur-sm p-3 text-center">
                      <s.Ikon size={20} weight="duotone" className="mx-auto mb-1 text-emerald-400" aria-hidden="true" />
                      <div className="text-xs text-fg-muted">{s.baslik}</div>
                      <div className="text-sm font-bold text-fg">{s.deger}</div>
                    </div>
                  ))}
                </div>
              </div>
            }
          />

          <div className="border-t border-line" />
          <ProductShowcase
            eyebrow="TELEMETRY SYSTEM"
            eyebrowColorClass="border-yellow-400/30 bg-yellow-400/10 text-yellow-300"
            title={<>Güneş Enerjili<span className="block text-yellow-400">Telemetri Düğümü</span></>}
            tagline="Elektrik direği olmayan yerler için."
            description="Elektrik direği yok, telefon sinyali yok, ama izleme ihtiyacı var. Güneş enerjili sistemimiz böyle noktalara kurulur ve kurulduktan sonra yıllarca kendi kendine çalışır."
            accentClass="text-yellow-400"
            href="/projeler/gunes-telemetri"
            ctaLabel="Tüm Özellikleri Gör"
            features={[
              { Icon: Broadcast, label: "LoRa ile Haberleşir", sub: "Topladığı sensör verilerini LoRa radyosu aracılığıyla kilometrelerce ötedeki merkeze gönderir. Ne SIM kart ne internet hattı." },
              { Icon: BatteryFull, label: "Güneş ile Beslenir", sub: "Üzerindeki küçük güneş paneli gündüz enerji toplar. Bulutlu günler için de dahili batarya gece boyunca sistemi ayakta tutar." },
              { Icon: Mountains, label: "Bakım Gerektirmez", sub: "Kurulduktan sonra içine girmek, pil değiştirmek ya da yazılım güncellemek için bizzat gitmenize gerek yoktur." },
            ]}
            visual={
              <div className="rounded-3xl border border-yellow-500/20 bg-surface p-10 flex items-center justify-center w-full" style={{ height: "280px" }}>
                <div className="relative w-24 h-24 rounded-full bg-yellow-500/15 border border-yellow-500/40 flex items-center justify-center">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="absolute rounded-full border border-yellow-400/20"
                      style={{ width: 96 + i * 36, height: 96 + i * 36, animation: `ping ${3 + i * 0.6}s ease-out ${i * 0.5}s infinite` }}
                    />
                  ))}
                  <span className="text-xs font-mono text-yellow-300 z-10">SOLAR</span>
                </div>
              </div>
            }
          />
        </div>
      </div>

      {/* Teknoloji — özet, detay /teknoloji sayfasında */}
      <Section
        eyebrow="TEKNOLOJİ"
        title="Sahayı Ayakta Tutan Mühendislik"
        intro="Kargu; RF haberleşme, gömülü sistemler, düşük güç elektroniği ve endüstriyel sensör arayüzleri geliştiren bir mühendislik ekibidir."
      >
        <TechnologyCapabilities
          capabilities={[
            { Icon: Broadcast, title: "RF Engineering", tagline: "868 MHz kablosuz haberleşme", points: ["LoRaWAN protokol yığını", "Açık alanda 10 km'ye kadar menzil"] },
            { Icon: BatteryFull, title: "Ultra Low Power", tagline: "Uyku odaklı mimari", points: ["Yıllarca süren pil ömrü için güç yönetimi", "Mikro-amper seviyesinde bekleme akımı"] },
            { Icon: Cpu, title: "Embedded Systems", tagline: "Özel gömülü yazılım", points: ["Gerçek zamanlı sensör işleme", "Sahada güncellenebilir firmware"] },
            { Icon: Plug, title: "Industrial Interfaces", tagline: "Endüstriyel sensör arayüzleri", points: ["RS-485, SDI-12", "Analog ve dijital giriş/çıkış"] },
          ]}
        />
        <div className="mt-10 text-center">
          <Link href="/teknoloji" className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-hover transition">
            Teknolojiyi Detaylı İncele →
          </Link>
        </div>
      </Section>

      {/* Uygulamalar — özet, detay /projeler sayfasında */}
      <Section
        tone="tinted"
        eyebrow="UYGULAMALAR"
        title="Aynı Platform, Farklı Sahalar"
        intro="Büyükşehirden kırsala, çiftçiden tesis müdürüne kadar — uzaktan izleme ihtiyacı olan her saha için."
      >
        <UseCaseGrid
          items={[
            { Icon: Cow, title: "Tarım & Hayvancılık", body: "Büyükbaş, küçükbaş ve kümes hayvanlarını ahırdan çıkmadan izleyin. Sıcaklık, nem ve varlık takibi tek cihazda.", accentClass: "text-emerald-400" },
            { Icon: Drop, title: "Su Yönetimi", body: "Tarla sulaması, kuyu seviyesi ve depo takibi. Su bitmeden önce haberdar olun, israfı önleyin.", accentClass: "text-blue-400" },
            { Icon: Mountains, title: "Çevresel İzleme", body: "Elektrik hattı veya telefon sinyali olmayan noktalarda güneş enerjili sensörlerle kesintisiz izleme.", accentClass: "text-yellow-400" },
            { Icon: Factory, title: "Uzak Altyapı", body: "Sera, ahşap imalathane, soğuk hava deposu — sıcaklık ve nem kritik olan her ortam için.", accentClass: "text-purple-400" },
          ]}
        />
        <div className="mt-10 text-center">
          <Link href="/projeler" className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-hover transition">
            Tüm Uygulamaları Gör →
          </Link>
        </div>
      </Section>

      {/* Mühendislik — özet, detay /muhendislik sayfasında */}
      <Section
        eyebrow="MÜHENDİSLİK"
        title="Baştan Sona Mühendislik"
        intro="Kargu bir sensör satıcısı değil, sistem geliştiren bir mühendislik ekibidir — her cihaz donanımdan sahaya kendi ekibimizden geçer."
        headerAlign="center"
      >
        <EngineeringPipeline />
        <div className="mt-10 text-center">
          <Link href="/muhendislik" className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-hover transition">
            Mühendislik Sürecini İncele →
          </Link>
        </div>
      </Section>

      <EagleEyeHero />

      <SahadaKanitlaniyor />

      {/* SSS */}
      <section className="border-t border-line">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h2 className="text-4xl font-bold mb-12 text-fg">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            {[
              {
                soru: "Çiftliğimin olduğu yerde telefon sinyali çok kötü. Çalışır mı?",
                cevap: "Evet. Cihazlarımız telefon şebekesini kullanmaz — kendi radyo sinyalini üretir. LoRa teknolojisi, GSM kulesinin olmadığı yerlerde bile 10 km'ye kadar çalışır.",
              },
              {
                soru: "Pil ne kadar dayanır? Değiştirmek için uzağa gitmem gerekir mi?",
                cevap: "Ortalama 2–5 yıl arasında değişir; kullanım yoğunluğuna ve güncelleme sıklığına bağlıdır. Pil bitmeden önce sistem sizi uyarır, böylece sürprize uğramazsınız.",
              },
              {
                soru: "Kaç sensörü tek sistemden izleyebilirim?",
                cevap: "Tek bir ağ üzerinden onlarca sensör izlenebilir. Ahır, tarla, su deposu ve kuyunuzu aynı anda tek ekrandan takip edebilirsiniz.",
              },
              {
                soru: "Verileri nereden görüyorum? Telefonda uygulama var mı?",
                cevap: "Evet. Veriler web arayüzünden ve mobil uygulamadan anlık olarak takip edilebilir. Geçmiş veriler ve grafikler de uygulama üzerinden erişilebilir durumda.",
              },
              {
                soru: "Garanti ve teknik destek var mı?",
                cevap: "Tüm cihazlarımız 2 yıl üretici garantisi kapsamındadır. Kurulum sonrası teknik destek için doğrudan bize ulaşabilirsiniz.",
              },
            ].map((item) => (
              <div key={item.soru} className="rounded-2xl border border-line bg-surface p-6">
                <h3 className="font-semibold text-fg mb-2">{item.soru}</h3>
                <p className="text-fg-muted leading-relaxed">{item.cevap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Teklif Alın"
        body="Kaç sensör gerektiğini, hangi alana kurulacağını ve bütçenizi söyleyin — size özel bir teklif hazırlayalım. Cevap süresi genellikle 24 saatin altındadır."
        primaryHref="/iletisim"
        primaryLabel="Teklif Formunu Doldurun"
      />
    </div>
  );
}
