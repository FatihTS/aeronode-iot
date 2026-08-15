"use client";

import { useState } from "react";

const KONULAR = [
  "Su Seviyesi Ölçüm Cihazı",
  "Akıllı Tarım Sensörü",
  "Güneş Enerjili Telemetri Düğümü",
  "Özel Proje / Diğer",
];

export default function ContactForm() {
  const [gonderildi, setGonderildi] = useState(false);
  const [mesajMetni, setMesajMetni] = useState("");
  const [kopyalandi, setKopyalandi] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const ad = String(data.get("ad") || "");
    const eposta = String(data.get("eposta") || "");
    const telefon = String(data.get("telefon") || "");
    const konu = String(data.get("konu") || "");
    const mesaj = String(data.get("mesaj") || "");

    const subject = `Teklif Talebi — ${konu || "Genel"}`;
    const body = [
      `Ad Soyad: ${ad}`,
      `E-posta: ${eposta}`,
      telefon ? `Telefon: ${telefon}` : null,
      `İlgilenilen Ürün: ${konu || "Belirtilmedi"}`,
      "",
      mesaj,
    ]
      .filter(Boolean)
      .join("\n");

    setMesajMetni(`Konu: ${subject}\n\n${body}`);
    window.location.href = `mailto:aeronode.iot@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setGonderildi(true);
    setKopyalandi(false);
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(mesajMetni);
      setKopyalandi(true);
    } catch {
      setKopyalandi(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="ad" className="block text-sm text-fg-muted mb-2">
            Ad Soyad <span className="text-accent">*</span>
          </label>
          <input
            id="ad"
            name="ad"
            type="text"
            required
            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-fg-muted/50 outline-none focus:border-accent/50 focus:bg-white/[0.07] transition"
            placeholder="Adınız Soyadınız"
          />
        </div>
        <div>
          <label htmlFor="eposta" className="block text-sm text-fg-muted mb-2">
            E-posta <span className="text-accent">*</span>
          </label>
          <input
            id="eposta"
            name="eposta"
            type="email"
            required
            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-fg-muted/50 outline-none focus:border-accent/50 focus:bg-white/[0.07] transition"
            placeholder="ornek@eposta.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="telefon" className="block text-sm text-fg-muted mb-2">
            Telefon <span className="text-fg-muted/50">(opsiyonel)</span>
          </label>
          <input
            id="telefon"
            name="telefon"
            type="tel"
            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-fg-muted/50 outline-none focus:border-accent/50 focus:bg-white/[0.07] transition"
            placeholder="05xx xxx xx xx"
          />
        </div>
        <div>
          <label htmlFor="konu" className="block text-sm text-fg-muted mb-2">
            İlgilendiğiniz Ürün
          </label>
          <select
            id="konu"
            name="konu"
            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-accent/50 focus:bg-white/[0.07] transition"
            defaultValue=""
          >
            <option value="" disabled>
              Seçiniz
            </option>
            {KONULAR.map((k) => (
              <option key={k} value={k} className="bg-surface">
                {k}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="mesaj" className="block text-sm text-fg-muted mb-2">
          Mesajınız <span className="text-accent">*</span>
        </label>
        <textarea
          id="mesaj"
          name="mesaj"
          required
          rows={5}
          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-fg-muted/50 outline-none focus:border-accent/50 focus:bg-white/[0.07] transition resize-none"
          placeholder="Kaç sensöre ihtiyacınız var, hangi alana kurulacak, bütçeniz nedir?"
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto rounded-2xl bg-accent px-7 py-3 text-white font-semibold hover:bg-accent-hover transition"
      >
        Talebi Gönder
      </button>

      {gonderildi && (
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 space-y-2">
          <p className="text-sm text-emerald-400">
            E-posta uygulamanız açıldı — mesajı göndererek talebinizi iletebilirsiniz.
            Açılmadıysa (özellikle telefonda sık görülür) mesajınızı kopyalayıp{" "}
            <a href="mailto:aeronode.iot@gmail.com" className="underline">
              aeronode.iot@gmail.com
            </a>{" "}
            adresine dilediğiniz uygulamadan yapıştırabilirsiniz.
          </p>
          <button
            type="button"
            onClick={handleCopy}
            className="text-sm rounded-lg border border-emerald-500/30 px-3 py-1.5 text-emerald-300 hover:bg-emerald-500/10 transition"
          >
            {kopyalandi ? "Kopyalandı ✓" : "Mesajı Kopyala"}
          </button>
        </div>
      )}
    </form>
  );
}
