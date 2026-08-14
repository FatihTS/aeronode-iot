import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kullanım Şartları",
  description: "Kargu Teknoloji web sitesi ve ürünlerinin kullanım şartları.",
};

const bolumler = [
  {
    baslik: "1. Kabul",
    icerik: (
      <p>
        Bu web sitesini kullanarak aşağıdaki şartları kabul etmiş sayılırsınız.
        Şartları kabul etmiyorsanız lütfen siteyi kullanmayı bırakın.
      </p>
    ),
  },
  {
    baslik: "2. Sitenin Kullanımı",
    icerik: (
      <p>
        Bu sitedeki içerikler yalnızca bilgilendirme ve tanıtım amaçlıdır.
        İçerikleri kopyalayıp ticari amaçla, izin almadan yeniden
        yayımlayamazsınız. Siteyi kötüye kullanmak, güvenliğini tehdit etmek
        veya işleyişini engellemek amacıyla kullanmak yasaktır.
      </p>
    ),
  },
  {
    baslik: "3. Ürün Bilgileri",
    icerik: (
      <p>
        Sitede yer alan ürün özellikleri, menzil, pil ömrü ve teknik değerler
        tipik kullanım koşullarına dayalı tahmini rakamlardır; arazi yapısı,
        engeller ve kullanım yoğunluğuna göre farklılık gösterebilir. Kesin
        teknik şartname, teklif aşamasında ayrıca paylaşılır.
      </p>
    ),
  },
  {
    baslik: "4. Fiyatlandırma ve Teklifler",
    icerik: (
      <p>
        Sitede genel bilgi amaçlı paylaşılan içerikler dışında, bağlayıcı
        fiyat yalnızca tarafımızca yazılı olarak sunulan teklif ile
        geçerlilik kazanır. Teklif talebinde bulunmak herhangi bir satın alma
        yükümlülüğü doğurmaz.
      </p>
    ),
  },
  {
    baslik: "5. Fikri Mülkiyet",
    icerik: (
      <p>
        Sitedeki logo, metin, görsel ve tasarım unsurları Kargu Teknoloji&apos;ye
        aittir veya Kargu Teknoloji tarafından kullanım hakkı ile
        yayımlanmaktadır. Önceden yazılı izin alınmadan bu unsurlar
        çoğaltılamaz veya dağıtılamaz.
      </p>
    ),
  },
  {
    baslik: "6. Sorumluluğun Sınırlandırılması",
    icerik: (
      <p>
        Site içeriği &ldquo;olduğu gibi&rdquo; sunulur. Kargu Teknoloji, sitenin
        kesintisiz veya hatasız çalışacağını garanti etmez; sitenin
        kullanımından doğabilecek dolaylı zararlardan sorumlu tutulamaz.
      </p>
    ),
  },
  {
    baslik: "7. Değişiklikler",
    icerik: (
      <p>
        Bu kullanım şartları zaman zaman güncellenebilir. Güncel sürüm her
        zaman bu sayfada yayımlanır ve yayımlandığı andan itibaren geçerli
        olur.
      </p>
    ),
  },
];

export default function KullanimSartlariPage() {
  return (
    <div className="min-h-dvh bg-black/65 text-white">
      <section className="border-b border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition mb-8">
            ← Ana Sayfa
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">Kullanım Şartları</h1>
          <p className="mt-4 text-zinc-500 text-sm">Son güncelleme: Ağustos 2026</p>
          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            Bu sayfa, Kargu Teknoloji web sitesini kullanırken geçerli olan
            şartları açıklar.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        {bolumler.map((b) => (
          <div key={b.baslik}>
            <h2 className="text-2xl font-semibold mb-4">{b.baslik}</h2>
            <div className="text-zinc-400 leading-relaxed space-y-3">{b.icerik}</div>
          </div>
        ))}
      </section>

      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto px-6 py-14 text-center">
          <p className="text-zinc-400">
            Kullanım şartları ile ilgili sorularınız için{" "}
            <Link href="/iletisim" className="text-amber-400 hover:underline">
              bize ulaşın
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
