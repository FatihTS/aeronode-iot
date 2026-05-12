import Link from "next/link";
import Image from "next/image";

export default function IoTLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-transparent" />

        <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
          <div className="relative w-72 h-72 flex items-center justify-center">
            <div className="absolute w-72 h-72 rounded-full border border-emerald-500/10" style={{ animation: "ping 3s ease-out infinite" }} />
            <div className="absolute w-52 h-52 rounded-full border border-emerald-500/15" style={{ animation: "ping 3s ease-out 0.6s infinite" }} />
            <div className="absolute w-36 h-36 rounded-full border border-emerald-500/25" style={{ animation: "ping 3s ease-out 1.2s infinite" }} />
            <div className="relative w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-2xl">📡</div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-300 mb-6 tracking-wide">
              AERONODE IOT • KABLOSUZ SENSÖRLER • TELEMETRİ
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Çiftliğiniz
              <span className="block text-emerald-400">uyurken siz de uyuyun.</span>
            </h1>

            <p className="mt-6 text-lg text-zinc-400 max-w-xl leading-relaxed">
              Ahırınızı, kuyunuzu ve tarlanızı 7/24 izleyen kablosuz sensörler.
              SIM kart gerekmez, aylık fatura yok, tek pille 5 yıla kadar çalışır.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#nasil-calisir" className="rounded-2xl bg-emerald-500 px-6 py-3 text-black font-semibold hover:bg-emerald-400 transition">
                Nasıl Çalışır?
              </a>
              <a href="#iletisim" className="rounded-2xl border border-white/20 px-6 py-3 hover:bg-white/5 transition">
                Fiyat & Teklif Al
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Metrikler */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { sayi: "10 km", acik: "Açık alanda sinyal menzili" },
            { sayi: "5 Yıl", acik: "Ortalama pil ömrü" },
            { sayi: "7/24", acik: "Kesintisiz izleme" },
            { sayi: "0 ₺", acik: "Aylık abonelik ücreti" },
          ].map((m) => (
            <div key={m.sayi} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400">{m.sayi}</div>
              <p className="mt-1 text-sm text-zinc-500">{m.acik}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Kimler İçin */}
      <section className="border-b border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-xl mb-12">
            <h2 className="text-3xl font-bold">Kimler Kullanıyor?</h2>
            <p className="mt-3 text-zinc-400">
              Büyükşehirden kırsala, çiftçiden tesis müdürüne kadar — uzaktan izleme ihtiyacı olan herkes için.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                ikon: "🐄",
                baslik: "Çiftçiler",
                acik: "Büyükbaş, küçükbaş ve kümes hayvanlarını ahırdan çıkmadan izleyin. Sıcaklık, nem ve varlık takibi tek cihazda.",
                renk: "emerald",
              },
              {
                ikon: "💧",
                baslik: "Su Yönetimi",
                acik: "Tarla sulaması, kuyu seviyesi ve depo takibi. Su bitmeden önce haberdar olun, israfı önleyin.",
                renk: "blue",
              },
              {
                ikon: "🏔️",
                baslik: "Uzak Tesisler",
                acik: "Elektrik hattı veya telefon sinyali olmayan noktalarda güneş enerjili sensörlerle kesintisiz izleme.",
                renk: "yellow",
              },
              {
                ikon: "🏭",
                baslik: "Küçük İşletmeler",
                acik: "Sera, ahşap imalathane, soğuk hava deposu — sıcaklık ve nem kritik olan her ortam için.",
                renk: "purple",
              },
            ].map((item) => (
              <div key={item.baslik} className={`rounded-2xl border p-6 ${
                item.renk === "emerald" ? "border-emerald-500/20 bg-emerald-500/5" :
                item.renk === "blue" ? "border-blue-500/20 bg-blue-500/5" :
                item.renk === "yellow" ? "border-yellow-500/20 bg-yellow-500/5" :
                "border-purple-500/20 bg-purple-500/5"
              }`}>
                <div className="text-3xl mb-4">{item.ikon}</div>
                <h3 className="font-semibold text-white mb-2">{item.baslik}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.acik}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nasıl Çalışır */}
      <section id="nasil-calisir" className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300 mb-5">
              NASIL ÇALIŞIR?
            </div>
            <h2 className="text-4xl font-bold leading-snug">
              SIM Kart Yok.<br />Aylık Fatura Yok.<br />
              <span className="text-emerald-400">Sadece Sinyal.</span>
            </h2>
            <p className="mt-5 text-zinc-400 text-lg leading-relaxed">
              Çoğu kablosuz cihaz telefonunuz gibi çalışır — SIM kart ister,
              operatöre bağlanır ve her ay ücret ödersiniz. Bizim cihazlarımız
              radyo dalgasıyla doğrudan haberleşir; hiçbir operatöre ihtiyaç duymaz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-11 h-11 rounded-2xl bg-red-500/15 border border-red-500/20 flex items-center justify-center text-xl">📱</div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">Geleneksel yöntem</p>
                  <h3 className="font-semibold text-zinc-300 mt-0.5">GSM / 4G Cihazlar</h3>
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
                  <li key={item} className="flex items-start gap-3 text-zinc-400">
                    <span className="text-red-400 shrink-0 mt-0.5 font-bold">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/5 p-8 relative overflow-hidden">
              <div className="absolute top-5 right-5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-400 font-semibold tracking-wide">
                TEKNOLOJİMİZ
              </div>
              <div className="flex items-center gap-3 mb-7">
                <div className="w-11 h-11 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-xl">📡</div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">AeroNode yöntemi</p>
                  <h3 className="font-semibold text-white mt-0.5">LoRa Kablosuz</h3>
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
                  <li key={item} className="flex items-start gap-3 text-zinc-200">
                    <span className="text-emerald-400 shrink-0 mt-0.5 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: "🔋", title: "Tek Pille 5 Yıla Kadar", body: "Sensörlerimiz o kadar az güç tüketir ki pili bir kez takarsınız — sonra yıllarca unutursunuz. Düşük güç tasarımı sayesinde AA pil 5 yıla kadar yetebilir." },
              { icon: "📶", title: "Sinyal Olmayan Yere de Gider", body: "LoRa radyo sinyali duvarları, tarlaları ve tepeleri aşar. Türkiye'nin dağlık ve kırsal bölgelerinde mobil şebeke olmasa da çalışır." },
              { icon: "💸", title: "Bir Kere Al, Sürekli Kullan", body: "Cihazı satın aldıktan sonra ek bir ödeme yoktur. SIM kart yok, veri paketi yok, ay sonunda sürpriz fatura yok." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 flex gap-4 hover:border-emerald-500/30 transition">
                <div className="text-3xl shrink-0">{item.icon}</div>
                <div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Öne Çıkan Ürün: Su Seviyesi Ölçer */}
      <section className="border-b border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-300 mb-8">
            ÖNE ÇIKAN ÜRÜN
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Su Seviyesi
                <span className="block text-blue-400">Ölçüm Cihazı</span>
              </h2>
              <p className="mt-2 text-zinc-500 text-xl font-light">Kuyu kurumadan önce öğrenin.</p>

              <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
                Çiftçilerin en büyük korkularından biri: sulama mevsiminde kuyunun
                bitmesi. Sensörümüz deponuzun ya da kuyunuzun yanında sessizce bekler,
                seviye düşmeye başlar başlamaz telefonunuza haber verir. SIM kart veya
                internet aboneliği gerektirmez.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  { icon: "🔋", label: "Çok yıllık pil ömrü", sub: "Pil değiştirmeden yıllarca çalışır. Bakım için uzağa gitmenize gerek yok." },
                  { icon: "📡", label: "LoRa kablosuz — SIM kart yok", sub: "Telefon sinyali olmayan tarlalarda, çiftliklerde ve dağlık bölgelerde çalışır." },
                  { icon: "💧", label: "Sürekli seviye ölçümü", sub: "Her birkaç dakikada bir seviyeyi ölçer, veriler telefonunuza iletilir." },
                  { icon: "🔔", label: "Kritik seviye alarmı", sub: "Su %20'nin altına düştüğünde — veya siz hangi eşiği belirlediyseniz — anında bildirim alırsınız." },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 items-start">
                    <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xl shrink-0">{item.icon}</div>
                    <div>
                      <p className="font-semibold text-white">{item.label}</p>
                      <p className="text-sm text-zinc-400 mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link href="/projeler/su-seviyesi" className="inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-6 py-3 text-white font-semibold hover:bg-blue-400 transition">
                  Tüm Özellikleri Gör →
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative flex flex-col items-center">
                <div className="relative w-20 h-20 flex items-center justify-center mb-2">
                  <div className="absolute w-20 h-20 rounded-full border border-blue-500/20" style={{ animation: "ping 2.5s ease-out infinite" }} />
                  <div className="absolute w-14 h-14 rounded-full border border-blue-500/30" style={{ animation: "ping 2.5s ease-out 0.5s infinite" }} />
                  <div className="relative w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center text-lg z-10">📡</div>
                </div>
                <div className="w-px h-8 bg-gradient-to-b from-blue-500/40 to-transparent" />
                <div className="relative w-52 rounded-3xl border-2 border-blue-500/30 bg-zinc-900/80 overflow-hidden" style={{ height: "280px" }}>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-700/60 to-blue-400/20" style={{ height: "62%" }}>
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />
                  </div>
                  <div className="absolute left-0 right-0 flex items-center px-4 gap-2" style={{ bottom: "62%" }}>
                    <div className="flex-1 border-t border-dashed border-blue-400/40" />
                    <span className="text-xs text-blue-300 font-mono bg-blue-500/20 border border-blue-500/30 px-2 py-0.5 rounded-full shrink-0">%62</span>
                  </div>
                  <div className="absolute inset-y-0 right-3 flex flex-col justify-between py-4 text-xs text-zinc-600 font-mono">
                    <span>%100</span><span>%75</span><span>%50</span><span>%25</span><span>%0</span>
                  </div>
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-blue-500/20 border border-blue-500/30 rounded-full px-2.5 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" style={{ animation: "pulse 2s ease-in-out infinite" }} />
                    <span className="text-xs text-blue-300 font-medium">Canlı</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-zinc-600">Su deposu · Kuyu · Sulama havuzu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Öne Çıkan Ürün: Akıllı Tarım Sensörü */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-300 mb-8">
            ÖNE ÇIKAN ÜRÜN
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden order-last lg:order-first" style={{ height: "420px" }}>
              <Image
                src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=900&q=80&auto=format&fit=crop"
                alt="Ahırda inekler"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3">
                {[
                  { ikon: "🌡️", baslik: "Sıcaklık", deger: "24.5°C" },
                  { ikon: "💧", baslik: "Nem", deger: "%68" },
                  { ikon: "👁️", baslik: "Varlık", deger: "12/14" },
                ].map((s) => (
                  <div key={s.baslik} className="rounded-xl bg-black/70 border border-white/10 backdrop-blur-sm p-3 text-center">
                    <div className="text-lg mb-1">{s.ikon}</div>
                    <div className="text-xs text-zinc-500">{s.baslik}</div>
                    <div className="text-sm font-bold text-white">{s.deger}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Akıllı Tarım
                <span className="block text-emerald-400">Sensörü</span>
              </h2>
              <p className="mt-2 text-zinc-500 text-xl font-light">Sabah 5'te ahıra gitme.</p>

              <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
                Hayvancılıkta en büyük kayıplar gece olur — ısı stresi, nem artışı,
                yerinden ayrılan hayvan. Sensörümüz sabahı beklemiyor; bir şey olduğunda
                anında telefonunuzu çalıyor.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  { ikon: "🌡️", label: "Sıcaklık & nem takibi", sub: "Ahır optimum aralığın dışına çıktığında anında uyarı alırsınız. Yaz kavruluğu, kış dondurucu soğuğu — her ikisi için ayrı alarm eşiği kurabilirsiniz." },
                  { ikon: "👁️", label: "Hayvan varlık takibi", sub: "Kaç hayvan ahırda, kaçı dışarıda? Gece saatlerinde anormal hareket veya kayıp tespit edilirse hemen bildirim gelir." },
                  { ikon: "🔔", label: "7/24 alarm sistemi", sub: "Uyku saatinizde bile sistem uyanık. Kritik bir durum oluştuğunda sizi telefonla, SMS ile veya uygulama bildirimiyle uyarır." },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 items-start">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-xl shrink-0">{item.ikon}</div>
                    <div>
                      <p className="font-semibold text-white">{item.label}</p>
                      <p className="text-sm text-zinc-400 mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link href="/projeler/akilli-tarim" className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3 text-black font-semibold hover:bg-emerald-400 transition">
                  Tüm Özellikleri Gör →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projeler */}
      <section id="projeler" className="border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-end justify-between mb-14">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold">Tüm Projeler</h2>
              <p className="mt-4 text-zinc-400 text-lg">
                Her biri gerçek bir soruna yanıt olarak tasarlandı.
              </p>
            </div>
            <Link href="/projeler" className="hidden md:inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-emerald-400 transition">
              Tümünü Gör →
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                slug: "su-seviyesi",
                title: "Su Seviyesi Ölçüm Cihazı",
                tag: "Su Yönetimi",
                tagColor: "blue",
                desc: "Kuyu kurumadan, depo taşmadan haberdar olun. Ultrasonik ölçüm, ±1 cm hassasiyet, IP68 koruma.",
                gradient: "from-blue-500/20 to-cyan-500/10",
              },
              {
                slug: "akilli-tarim",
                title: "Akıllı Tarım Sensörü",
                tag: "Hayvancılık",
                tagColor: "green",
                desc: "Ahır sıcaklığı, nem ve hayvan varlık takibi. Gece 3'te bile bir şey olduğunda telefonunuz çalışır.",
                gradient: "from-emerald-500/20 to-teal-500/10",
              },
              {
                slug: "gunes-telemetri",
                title: "Güneş Enerjili Telemetri Düğümü",
                tag: "Uzak Alan",
                tagColor: "yellow",
                desc: "Elektrik ve telefon sinyali olmayan noktalara kurulur. Güneş enerjisiyle tamamen otonom çalışır.",
                gradient: "from-yellow-500/20 to-orange-500/10",
              },
            ].map((project) => (
              <Link
                key={project.title}
                href={`/projeler/${project.slug}`}
                className="group rounded-3xl border border-white/10 bg-black/40 p-8 hover:border-white/20 transition block"
              >
                <div className={`h-44 rounded-2xl bg-gradient-to-br ${project.gradient} border border-white/10 flex items-end p-4`}>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    project.tagColor === "blue" ? "bg-blue-500/20 text-blue-300 border border-blue-500/30" :
                    project.tagColor === "green" ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" :
                    "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                  }`}>
                    {project.tag}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-zinc-400 leading-relaxed">{project.desc}</p>
                <p className="mt-4 text-sm text-zinc-600 group-hover:text-emerald-400 transition">Detayları gör →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h2 className="text-4xl font-bold mb-12">Sık Sorulan Sorular</h2>
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
              <div key={item.soru} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-semibold text-white mb-2">{item.soru}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.cevap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* İletişim */}
      <section id="iletisim" className="border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl font-bold">Teklif Alın</h2>
          <p className="mt-4 text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Kaç sensör gerektiğini, hangi alana kurulacağını ve bütçenizi söyleyin —
            size özel bir teklif hazırlayalım. Cevap süresi genellikle 24 saatin altındadır.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto text-sm text-zinc-400">
            {[
              { ikon: "📍", text: "Türkiye geneli kurulum" },
              { ikon: "⚡", text: "24 saat içi yanıt" },
              { ikon: "🛠️", text: "Kurulum desteği dahil" },
            ].map((item) => (
              <div key={item.text} className="flex items-center justify-center gap-2">
                <span>{item.ikon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
            <a href="mailto:aeronode.iot@gmail.com" className="rounded-2xl bg-emerald-500 px-6 py-3 text-black font-semibold hover:bg-emerald-400 transition">
              aeronode.iot@gmail.com
            </a>
            <a href="https://github.com" className="rounded-2xl border border-white/20 px-6 py-3 hover:bg-white/5 transition">
              GitHub
            </a>
            <a href="https://linkedin.com" className="rounded-2xl border border-white/20 px-6 py-3 hover:bg-white/5 transition">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
