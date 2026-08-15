import Link from "next/link";

/**
 * Honest placeholder in place of fabricated testimonials — no real customer
 * quotes exist yet, so this invites the first ones instead of inventing
 * names/quotes. Kept as its own component so it survives redesigns intact.
 */
export default function SahadaKanitlaniyor() {
  return (
    <section className="border-t border-line bg-white/[0.03]">
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center rounded-full border border-emblem/30 bg-emblem/10 px-4 py-1 text-sm text-emblem mb-6">
          SAHADA KANITLANIYOR
        </div>
        <h2 className="text-3xl font-bold text-fg">İlk Kurulumlarımız Yolda</h2>
        <p className="mt-4 text-fg-muted text-lg leading-relaxed">
          Cihazlarımız laboratuvar öncesinde gerçek ahırda, tarlada ve kuyu başında test edildi.
          Sahadaki ilk müşterilerimizden gelen geri bildirimleri önümüzdeki dönemde burada paylaşacağız.
        </p>
        <div className="mt-8">
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 rounded-2xl border border-emblem/30 px-6 py-3 text-emblem font-semibold hover:bg-emblem/10 transition"
          >
            İlk Referans Siz Olun →
          </Link>
        </div>
      </div>
    </section>
  );
}
