import type { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  Compass,
  MapTrifold,
  Wrench,
  BatteryFull,
  MoneyWavy,
  Handshake,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Kargu Teknoloji, SIM kart ve aylık ücret gerektirmeyen LoRa tabanlı kablosuz sensör çözümleri geliştiren bir Türk mühendislik ekibidir.",
};

export default function HakkimizdaPage() {
  return (
    <div className="min-h-dvh bg-black/65 text-white">

      {/* Başlık */}
      <section className="border-b border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition mb-8">
            ← Ana Sayfa
          </Link>
          <div className="inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1 text-sm text-amber-300 mb-5">
            HAKKIMIZDA
          </div>
          <h1 className="text-5xl font-bold max-w-3xl leading-tight">
            Sinyalin ulaşmadığı yerde de,
            <span className="block text-amber-400">veri akmaya devam etsin.</span>
          </h1>
          <p className="mt-6 text-zinc-400 text-lg max-w-2xl leading-relaxed">
            Kargu Teknoloji, Türkiye&apos;nin kırsalında, tarlasında ve dağında —
            GSM şebekesinin ulaşamadığı her yerde çalışan kablosuz sensör
            sistemleri tasarlayan bir mühendislik ekibidir.
          </p>
        </div>
      </section>

      {/* Hikaye */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300 mb-5">
              NEDEN VARIZ
            </div>
            <h2 className="text-3xl font-bold leading-snug">Bir sorudan doğdu: neden herkes aylık fatura ödüyor?</h2>
            <p className="mt-5 text-zinc-400 text-lg leading-relaxed">
              Kırsalda çalışan bir çiftçiyle konuşurken fark ettik: piyasadaki
              &ldquo;akıllı&rdquo; sensörlerin büyük çoğunluğu SIM kart istiyor,
              operatöre bağımlı kalıyor ve şebeke çekmeyen yerlerde işe yaramıyor.
              Oysa asıl ihtiyaç duyulan yerler — tarlalar, ahırlar, uzak kuyular,
              dağlık araziler — tam olarak şebekenin en zayıf olduğu noktalar.
            </p>
            <p className="mt-4 text-zinc-400 text-lg leading-relaxed">
              Bu yüzden SIM kart yerine LoRa radyo teknolojisini seçtik: kurulumdan
              sonra hiçbir operatöre, hiçbir aylık ücrete ihtiyaç duymayan,
              pille yıllarca çalışan bir sistem kurduk.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { Ikon: Target, baslik: "Misyonumuz", acik: "Elektrik ve GSM sinyali olmayan her noktayı, uygun maliyetle izlenebilir hale getirmek." },
              { Ikon: Compass, baslik: "Vizyonumuz", acik: "Türkiye kırsalında en yaygın kullanılan bağımsız izleme altyapısı olmak." },
              { Ikon: MapTrifold, baslik: "Nerede Çalışıyoruz", acik: "Türkiye genelinde saha kurulumu ve uzaktan teknik destek sağlıyoruz." },
              { Ikon: Wrench, baslik: "Ne Üretiyoruz", acik: "Su seviyesi, tarım ve uzak alan telemetrisi için LoRa tabanlı sensör donanımı ve yazılımı." },
            ].map((item) => (
              <div key={item.baslik} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <item.Ikon size={24} weight="duotone" className="mb-3 text-amber-400" aria-hidden="true" />
                <h3 className="font-semibold text-white mb-1.5">{item.baslik}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.acik}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Değerler */}
      <section className="border-b border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-xl mb-12">
            <h2 className="text-3xl font-bold">Nasıl Çalışırız</h2>
            <p className="mt-3 text-zinc-400">
              Her tasarım kararının arkasında saha koşulları var — laboratuvar değil.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { Ikon: BatteryFull, baslik: "Bakım İstemez", acik: "Cihaz bir kez kurulur, yıllarca dokunulmadan çalışır. Pil ömrü ve dayanıklılık her tasarımın önceliğidir." },
              { Ikon: MoneyWavy, baslik: "Şeffaf Maliyet", acik: "Gizli abonelik yok. Ödediğiniz fiyat, aldığınız cihazın bedelidir — ne eksik ne fazla." },
              { Ikon: Wrench, baslik: "Sahada Test Edilir", acik: "Her ürün, laboratuvar öncesinde gerçek ahırda, gerçek tarlada, gerçek kuyu başında denenir." },
              { Ikon: Handshake, baslik: "Doğrudan Destek", acik: "Aracı çağrı merkezi yok. Sorunuz olduğunda doğrudan bizimle görüşürsünüz." },
            ].map((item) => (
              <div key={item.baslik} className="rounded-2xl border border-white/10 bg-black/30 p-6 hover:border-amber-400/30 transition">
                <item.Ikon size={30} weight="duotone" className="mb-4 text-amber-400" aria-hidden="true" />
                <h3 className="font-semibold text-white mb-2">{item.baslik}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.acik}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sayılar */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { sayi: "10 km", acik: "Açık alanda sinyal menzili" },
            { sayi: "5 Yıl", acik: "Ortalama pil ömrü" },
            { sayi: "3", acik: "Aktif ürün ailesi" },
            { sayi: "2 Yıl", acik: "Üretici garantisi" },
          ].map((m) => (
            <div key={m.sayi} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400">{m.sayi}</div>
              <p className="mt-1 text-sm text-zinc-500">{m.acik}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold">Bizimle Çalışmak İster misiniz?</h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-xl mx-auto">
            İhtiyacınızı anlatın, saha koşullarınıza uygun çözümü birlikte belirleyelim.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/iletisim" className="rounded-2xl bg-amber-400 px-7 py-3 text-black font-semibold hover:bg-amber-300 transition">
              Bize Ulaşın
            </Link>
            <Link href="/projeler" className="rounded-2xl border border-white/20 px-7 py-3 hover:bg-white/5 transition">
              Ürünleri İncele
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
