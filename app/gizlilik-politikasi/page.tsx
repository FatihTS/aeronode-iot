import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Kargu gizlilik politikası ve KVKK aydınlatma metni.",
};

const bolumler = [
  {
    baslik: "1. Veri Sorumlusu",
    icerik: (
      <p>
        Bu internet sitesi Kargu tarafından işletilmektedir. Site
        üzerinden veya iletişim kanallarımız aracılığıyla bizimle paylaştığınız
        kişisel veriler, 6698 sayılı Kişisel Verilerin Korunması Kanunu
        (&ldquo;KVKK&rdquo;) kapsamında veri sorumlusu sıfatıyla Kargu
        tarafından işlenir.
      </p>
    ),
  },
  {
    baslik: "2. Hangi Verileri Topluyoruz",
    icerik: (
      <>
        <p>Bizimle iletişim formu, e-posta veya telefon yoluyla iletişime geçtiğinizde aşağıdaki veriler işlenebilir:</p>
        <ul className="mt-3 space-y-2 list-disc list-inside text-fg-muted">
          <li>Ad, soyad</li>
          <li>E-posta adresi</li>
          <li>Telefon numarası (paylaşmanız halinde)</li>
          <li>Talep konusu ve mesaj içeriği</li>
          <li>Sitemizi ziyaretinize ilişkin temel teknik veriler (tarayıcı türü, ziyaret edilen sayfalar)</li>
        </ul>
      </>
    ),
  },
  {
    baslik: "3. Verileri Hangi Amaçla İşliyoruz",
    icerik: (
      <ul className="space-y-2 list-disc list-inside text-fg-muted">
        <li>Teklif taleplerinize yanıt vermek ve iletişim kurmak</li>
        <li>Satış öncesi ve sonrası müşteri desteği sağlamak</li>
        <li>Yasal yükümlülüklerimizi yerine getirmek</li>
        <li>Sitemizi ve hizmetlerimizi geliştirmek</li>
      </ul>
    ),
  },
  {
    baslik: "4. Verilerin Saklanması ve Paylaşımı",
    icerik: (
      <p>
        Kişisel verileriniz, işlenme amacının gerektirdiği süre boyunca güvenli
        şekilde saklanır. Verileriniz, yasal zorunluluklar dışında üçüncü
        taraflarla paylaşılmaz, satılmaz veya kiralanmaz. Talebinizi
        yanıtlamak amacıyla kullandığımız e-posta ve iletişim altyapısı
        sağlayıcıları, verileri yalnızca bu hizmeti sunmak amacıyla işler.
      </p>
    ),
  },
  {
    baslik: "5. Çerezler (Cookies)",
    icerik: (
      <p>
        Sitemiz, temel işlevselliği sağlamak için sınırlı sayıda teknik çerez
        kullanabilir. Bu çerezler kişisel kimliğinizi belirlemez ve pazarlama
        amacıyla üçüncü taraflarla paylaşılmaz. Tarayıcı ayarlarınızdan
        çerezleri dilediğiniz zaman devre dışı bırakabilirsiniz; bu durum
        sitenin bazı işlevlerini etkileyebilir.
      </p>
    ),
  },
  {
    baslik: "6. KVKK Kapsamındaki Haklarınız",
    icerik: (
      <>
        <p>KVKK&apos;nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
        <ul className="mt-3 space-y-2 list-disc list-inside text-fg-muted">
          <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
          <li>İşlenmişse buna ilişkin bilgi talep etme</li>
          <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
          <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
          <li>Silinmesini veya yok edilmesini isteme</li>
          <li>İşlemenin kanuna aykırı sonuçlarının giderilmesini talep etme</li>
        </ul>
        <p className="mt-3">
          Bu haklarınızı kullanmak için{" "}
          <a href="mailto:aeronode.iot@gmail.com" className="text-accent hover:underline">
            aeronode.iot@gmail.com
          </a>{" "}
          adresinden bizimle iletişime geçebilirsiniz.
        </p>
      </>
    ),
  },
];

export default function GizlilikPolitikasiPage() {
  return (
    <div className="min-h-dvh bg-ink/70 text-fg">
      <section className="border-b border-line bg-gradient-to-br from-white/[0.03] to-transparent">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-fg-muted hover:text-zinc-300 transition mb-8">
            ← Ana Sayfa
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">Gizlilik Politikası</h1>
          <p className="mt-4 text-fg-muted text-sm">Son güncelleme: Ağustos 2026</p>
          <p className="mt-6 text-fg-muted text-lg leading-relaxed">
            Bu sayfa, Kargu olarak kişisel verilerinizi nasıl
            topladığımızı, kullandığımızı ve koruduğumuzu açıklar.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        {bolumler.map((b) => (
          <div key={b.baslik}>
            <h2 className="text-2xl font-semibold mb-4">{b.baslik}</h2>
            <div className="text-fg-muted leading-relaxed space-y-3">{b.icerik}</div>
          </div>
        ))}
      </section>

      <section className="border-t border-line bg-white/[0.02]">
        <div className="max-w-4xl mx-auto px-6 py-14 text-center">
          <p className="text-fg-muted">
            Sorularınız için{" "}
            <Link href="/iletisim" className="text-accent hover:underline">
              iletişim sayfamızdan
            </Link>{" "}
            bize ulaşabilirsiniz.
          </p>
        </div>
      </section>
    </div>
  );
}
