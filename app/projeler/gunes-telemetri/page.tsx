import type { Metadata } from "next";
import Link from "next/link";
import {
  Sun,
  Broadcast,
  Wrench,
  Mountains,
  Waves,
  Plant,
  Cylinder,
  Thermometer,
  Drop,
  Wind,
  Leaf,
  Lightning,
  Timer,
  Gear,
  ChartLineUp,
  BatteryFull,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Güneş Enerjili Telemetri Düğümü",
  description: "Elektrik hattı ve telefon sinyali olmayan noktalara kurulur. Güneş enerjisiyle tamamen otonom çalışan, LoRa kablosuz telemetri düğümü.",
};

export default function GunesTelemetriPage() {
  return (
    <div className="min-h-dvh bg-black/65 text-white">

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-orange-500/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <Link href="/projeler" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition mb-8">
            ← Tüm Projeler
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-yellow-500/15 text-yellow-300 border border-yellow-500/30">Uzak Alan İzleme</span>
            <span className="text-xs text-zinc-500">Güneş Enerjisi • LoRa Kablosuz • Tam Otonom</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Güneş Enerjili
                <span className="block text-yellow-400">Telemetri Düğümü</span>
              </h1>
              <p className="mt-5 text-xl text-zinc-400 leading-relaxed">
                Elektrik direği yok, telefon sinyali yok, ama izleme ihtiyacı var.
                Güneş enerjili sistemimiz böyle noktalara kurulur ve kurulduktan sonra
                yıllarca kendi kendine çalışır.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative w-64 h-64 flex items-center justify-center">
                <div className="absolute w-64 h-64 rounded-full border border-yellow-500/10" style={{ animation: "ping 4s ease-out infinite" }} />
                <div className="absolute w-48 h-48 rounded-full border border-yellow-500/15" style={{ animation: "ping 4s ease-out 1s infinite" }} />
                <div className="absolute w-32 h-32 rounded-full border border-yellow-500/20" style={{ animation: "ping 4s ease-out 2s infinite" }} />
                <div className="relative w-24 h-24 rounded-full bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center">
                  <Sun size={40} weight="duotone" className="text-yellow-300" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fark yaratan şey */}
      <section className="border-b border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-xl mb-12">
            <h2 className="text-3xl font-bold">Diğer Sistemlerden Farkı Ne?</h2>
            <p className="mt-3 text-zinc-400">
              Elektrik hattı uzatmak pahalıdır. GSM modüllü sensörler sürekli ücret ister.
              Bu sistem ikisini de gerektirmez.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                Ikon: Sun,
                baslik: "Güneş ile Beslenir",
                acik: "Üzerindeki küçük güneş paneli gündüz enerji toplar. Bulutlu günler için de dahili batarya gece boyunca sistemi ayakta tutar.",
              },
              {
                Ikon: Broadcast,
                baslik: "LoRa ile Haberleşir",
                acik: "Topladığı sensör verilerini LoRa radyosu aracılığıyla kilometrelerce ötedeki merkeze gönderir. Ne SIM kart ne internet hattı.",
              },
              {
                Ikon: Wrench,
                baslik: "Bakım Gerektirmez",
                acik: "Kurulduktan sonra içine girmek, pil değiştirmek ya da yazılım güncellemek için bizzat gitmenize gerek yoktur.",
              },
            ].map((item) => (
              <div key={item.baslik} className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <item.Ikon size={36} weight="duotone" className="mb-5 text-yellow-400" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-3">{item.baslik}</h3>
                <p className="text-zinc-400">{item.acik}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard + Mobil Mockup */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1 text-sm text-yellow-300 mb-4">
              CANLI İZLEME PANELİ
            </div>
            <h2 className="text-3xl font-bold">Ulaşılmaz Noktalar Artık Elinizin Altında</h2>
            <p className="mt-4 text-zinc-400 text-lg leading-relaxed">
              Dağın zirvesindeki düğüm, nehrin ortasındaki istasyon ya da tarla kenarı — hepsi
              tek ekranda. Güneş şarj ediyor, LoRa veriyi taşıyor, siz sadece izliyorsunuz.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_225px] gap-6 items-start">

            {/* Masaüstü browser — desktop panelinin sabit genişlikli iç grid'i
                mobilde küçülemiyor; dar ekranlarda kırpılıp bozuk görünmek
                yerine sadece lg+ ekranlarda gösteriliyor. Mobilde aynı hikaye
                zaten aşağıdaki telefon mockup'ıyla anlatılıyor. */}
            <div className="hidden lg:block rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)" }}>

              {/* Browser chrome */}
              <div className="flex items-center gap-3 px-4 py-2.5 border-b" style={{ background: "#1c1c1e", borderColor: "rgba(255,255,255,0.06)" }}>
                <div className="flex gap-1.5 shrink-0">
                  <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
                </div>
                <div className="flex-1 flex items-center gap-2 rounded-lg px-3 py-1.5 text-[11px] font-mono" style={{ background: "#141416", color: "#71717a" }}>
                  <span style={{ color: "#22c55e", fontSize: "10px" }}>●</span>
                  kargu.com.tr/panel/telemetri
                </div>
              </div>

              {/* App shell */}
              <div className="flex" style={{ minHeight: "560px", background: "#0a0a0c" }}>

                {/* Sidebar */}
                <div className="shrink-0 flex flex-col border-r" style={{ width: "172px", background: "#0f0f12", borderColor: "rgba(255,255,255,0.05)" }}>
                  <div className="px-4 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "rgba(234,179,8,0.15)", border: "1px solid rgba(234,179,8,0.3)" }}>
                        <span className="text-[11px] font-bold text-yellow-400">K</span>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-white">Kargu</p>
                        <div className="flex items-center gap-1 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ animation: "pulse 2s ease-in-out infinite" }} />
                          <p className="text-[9px] text-zinc-500">4 düğüm aktif</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Node listesi */}
                  <div className="px-2 py-3">
                    <p className="text-[9px] uppercase tracking-widest px-2 mb-2" style={{ color: "#3f3f46" }}>Düğümler</p>
                    {[
                      { Ikon: Mountains, label: "Kuzey Geçidi", batarya: 78, aktif: true },
                      { Ikon: Waves, label: "Nehir İst.", batarya: 92, aktif: false },
                      { Ikon: Plant, label: "Tarla-7", batarya: 55, aktif: false },
                      { Ikon: Cylinder, label: "Uzak Depo", batarya: 71, aktif: false },
                    ].map((n) => (
                      <div key={n.label} className="flex items-center justify-between px-2 py-2 rounded-xl mb-0.5" style={n.aktif ? { background: "rgba(234,179,8,0.1)", border: "1px solid rgba(234,179,8,0.22)" } : {}}>
                        <div className="flex items-center gap-2">
                          <n.Ikon size={12} weight="bold" style={{ color: n.aktif ? "#fde68a" : "#71717a" }} aria-hidden="true" />
                          <span className="text-[11px]" style={{ color: n.aktif ? "#fde68a" : "#71717a" }}>{n.label}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-6 h-1.5 rounded-full overflow-hidden" style={{ background: "#27272a" }}>
                            <div className="h-full rounded-full" style={{ width: `${n.batarya}%`, background: n.batarya > 70 ? "#34d399" : n.batarya > 40 ? "#fbbf24" : "#f87171" }} />
                          </div>
                          <span className="text-[9px] font-mono" style={{ color: "#52525b" }}>{n.batarya}%</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Nav */}
                  <div className="px-2 mt-1 space-y-0.5">
                    <p className="text-[9px] uppercase tracking-widest px-2 mb-2" style={{ color: "#3f3f46" }}>Menü</p>
                    {[
                      { Ikon: Broadcast, label: "Sensörler", aktif: true },
                      { Ikon: Sun, label: "Enerji", aktif: false },
                      { Ikon: ChartLineUp, label: "Grafik", aktif: false },
                      { Ikon: Gear, label: "Ayarlar", aktif: false },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-2 px-3 py-2 rounded-xl text-[11px]" style={item.aktif ? { background: "rgba(234,179,8,0.12)", border: "1px solid rgba(234,179,8,0.22)", color: "#fde68a", fontWeight: 600 } : { color: "#52525b" }}>
                        <item.Ikon size={13} weight="bold" aria-hidden="true" />
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Güneş durumu pill */}
                  <div className="mt-auto px-3 pb-4">
                    <div className="rounded-xl px-3 py-2.5" style={{ background: "rgba(234,179,8,0.08)", border: "1px solid rgba(234,179,8,0.18)" }}>
                      <div className="flex items-center gap-1.5 mb-1">
                        <Sun size={12} weight="bold" className="text-yellow-400" aria-hidden="true" />
                        <p className="text-[10px] font-semibold text-yellow-300">Şarj oluyor</p>
                      </div>
                      <p className="text-[9px]" style={{ color: "#52525b" }}>12.4W giriş · Batarya dolacak</p>
                    </div>
                  </div>
                </div>

                {/* Ana panel */}
                <div className="flex-1 flex flex-col overflow-hidden">

                  {/* Üst şerit: Enerji özeti */}
                  <div className="flex items-center gap-0 border-b shrink-0" style={{ background: "#0d0d10", borderColor: "rgba(255,255,255,0.05)" }}>
                    {[
                      { Ikon: Sun, label: "Güneş Girdisi", val: "12.4 W", sub: "Panel aktif", color: "#fbbf24", bg: "rgba(234,179,8,0.06)", glow: true },
                      { Ikon: BatteryFull, label: "Batarya", val: "%78", sub: "≈ 6 gün yedek", color: "#34d399", bg: "transparent", glow: false },
                      { Ikon: Lightning, label: "Tüketim", val: "0.8 W", sub: "Düşük güç modu", color: "#a78bfa", bg: "transparent", glow: false },
                      { Ikon: Timer, label: "Çalışma Süresi", val: "247 gün", sub: "Kesintisiz", color: "#60a5fa", bg: "transparent", glow: false },
                    ].map((e, i) => (
                      <div key={e.label} className="flex-1 flex items-center gap-2.5 px-4 py-3" style={{ background: e.bg, borderRight: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none", boxShadow: e.glow ? "inset 0 0 30px rgba(234,179,8,0.04)" : "none" }}>
                        <e.Ikon size={18} weight="duotone" className="shrink-0" style={{ color: e.color }} aria-hidden="true" />
                        <div>
                          <p className="text-[11px] font-bold leading-none" style={{ color: e.color }}>{e.val}</p>
                          <p className="text-[9px] mt-0.5" style={{ color: "#52525b" }}>{e.label}</p>
                          <p className="text-[9px]" style={{ color: "#3f3f46" }}>{e.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex-1 p-4 space-y-3 overflow-hidden">

                    {/* Node başlığı */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest" style={{ color: "#3f3f46" }}>Kuzey Geçidi · 2847m yükseklik</p>
                        <p className="text-[14px] font-bold text-white mt-0.5">Hava İstasyonu <span className="font-normal" style={{ color: "#52525b" }}>· Tüm sensörler aktif</span></p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5 text-[11px]" style={{ color: "#52525b" }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" style={{ animation: "pulse 2s ease-in-out infinite" }} />
                          Son veri: 3 dk önce
                        </div>
                        <div className="text-[10px] px-2 py-1 rounded-lg" style={{ color: "#fbbf24", background: "rgba(234,179,8,0.1)", border: "1px solid rgba(234,179,8,0.2)" }}>
                          Sinyal: İyi (-98 dBm)
                        </div>
                      </div>
                    </div>

                    {/* 6 sensör kartı */}
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { Ikon: Thermometer, label: "Sıcaklık", val: "-2.4°C", sub: "Don riski", trend: "↓ soğuyor", valColor: "#93c5fd", bg: "rgba(59,130,246,0.07)", border: "rgba(59,130,246,0.18)" },
                        { Ikon: Drop, label: "Nem", val: "%65", sub: "Normal", trend: "→ sabit", valColor: "#67e8f9", bg: "#111113", border: "rgba(255,255,255,0.07)" },
                        { Ikon: Wind, label: "Rüzgar", val: "34 km/h", sub: "Kuzey yönü", trend: "↑ artıyor", valColor: "#a5b4fc", bg: "#111113", border: "rgba(255,255,255,0.07)" },
                        { Ikon: Thermometer, label: "Basınç", val: "758 hPa", sub: "Düşük basınç", trend: "↓ düşüyor", valColor: "#fb923c", bg: "rgba(249,115,22,0.06)", border: "rgba(249,115,22,0.15)" },
                        { Ikon: Leaf, label: "CO₂", val: "412 ppm", sub: "Normal", trend: "→ sabit", valColor: "#86efac", bg: "#111113", border: "rgba(255,255,255,0.07)" },
                        { Ikon: Sun, label: "UV İndeks", val: "3.2", sub: "Orta", trend: "↑ artıyor", valColor: "#fde047", bg: "rgba(234,179,8,0.06)", border: "rgba(234,179,8,0.15)" },
                      ].map((s) => (
                        <div key={s.label} className="rounded-2xl p-3.5" style={{ background: s.bg, border: `1px solid ${s.border}` }}>
                          <div className="flex items-center justify-between mb-1.5">
                            <s.Ikon size={15} weight="duotone" style={{ color: s.valColor }} aria-hidden="true" />
                            <span className="text-[9px] font-mono" style={{ color: "#3f3f46" }}>{s.trend}</span>
                          </div>
                          <p className="text-[18px] font-bold leading-none" style={{ color: s.valColor }}>{s.val}</p>
                          <p className="text-[10px] mt-1" style={{ color: "#52525b" }}>{s.label}</p>
                          <p className="text-[9px]" style={{ color: "#3f3f46" }}>{s.sub}</p>
                        </div>
                      ))}
                    </div>

                    {/* Alt satır: Batarya trendi + İletim logu */}
                    <div className="grid grid-cols-2 gap-3">

                      {/* 24 saatlik batarya trendi */}
                      <div className="rounded-2xl p-4" style={{ background: "#0f0f12", border: "1px solid rgba(255,255,255,0.06)" }}>
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: "#52525b" }}>Batarya Trendi — 24 Saat</p>
                          <span className="text-[9px]" style={{ color: "#fbbf24" }}>Şarj oluyor ↑</span>
                        </div>
                        <div className="flex items-end gap-1 h-14">
                          {[74, 73, 73, 72, 72, 72, 73, 73, 74, 75, 76, 77, 78].map((v, i) => {
                            const isDay = i >= 6;
                            return (
                              <div key={i} className="flex-1 rounded-t-sm" style={{
                                height: `${((v - 70) / 10) * 100}%`,
                                minHeight: "4px",
                                background: i === 12
                                  ? "linear-gradient(180deg,#fbbf24,#f59e0b)"
                                  : isDay
                                  ? `rgba(251,191,36,${0.2 + (i - 6) * 0.06})`
                                  : "rgba(99,102,241,0.4)",
                                boxShadow: i === 12 ? "0 0 8px rgba(251,191,36,0.4)" : "none",
                              }} />
                          );
                          })}
                        </div>
                        <div className="flex justify-between mt-1.5 text-[9px] font-mono" style={{ color: "#3f3f46" }}>
                          <span>00:00</span><span>Gündoğumu</span><span>Şimdi</span>
                        </div>
                        <div className="mt-2 flex items-center gap-3 text-[10px]">
                          <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-sm" style={{ background: "rgba(99,102,241,0.5)" }} /><span style={{ color: "#52525b" }}>Gece deşarj</span></div>
                          <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-sm" style={{ background: "#fbbf24" }} /><span style={{ color: "#a16207" }}>Güneş şarjı</span></div>
                        </div>
                      </div>

                      {/* LoRa iletim logu */}
                      <div className="rounded-2xl p-4" style={{ background: "#0f0f12", border: "1px solid rgba(255,255,255,0.06)" }}>
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: "#52525b" }}>LoRa İletim Logu</p>
                          <span className="text-[9px] px-2 py-0.5 rounded-full" style={{ color: "#34d399", background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.2)" }}>Tümü başarılı</span>
                        </div>
                        <div className="space-y-2">
                          {[
                            { saat: "09:52", mesaj: "Paket iletildi · -98 dBm · 248 bayt", renk: "#34d399", dot: "#34d399", bg: "rgba(52,211,153,0.05)" },
                            { saat: "09:37", mesaj: "Paket iletildi · -101 dBm · 248 bayt", renk: "#a1a1aa", dot: "#52525b", bg: "" },
                            { saat: "09:22", mesaj: "Güneş şarjı başladı · %74 → %75", renk: "#fbbf24", dot: "#fbbf24", bg: "" },
                            { saat: "04:15", mesaj: "Gece modu · Batarya %72 · Sensörler uyku", renk: "#6366f1", dot: "#6366f1", bg: "" },
                          ].map((log) => (
                            <div key={log.saat} className="flex items-start gap-2.5 rounded-lg px-2 py-1.5 text-[10px]" style={{ background: log.bg }}>
                              <span className="font-mono shrink-0 mt-0.5 w-8" style={{ color: "#3f3f46" }}>{log.saat}</span>
                              <div className="w-1.5 h-1.5 rounded-full mt-1 shrink-0" style={{ background: log.dot }} />
                              <span style={{ color: log.renk }}>{log.mesaj}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobil mockup */}
            <div className="flex justify-center lg:justify-start pt-2">
              <div style={{ width: "218px" }}>
                <div className="rounded-[2.8rem] overflow-hidden" style={{ border: "2px solid #2a2a2e", background: "#0a0a0c", boxShadow: "0 32px 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.06)" }}>

                  {/* Dynamic Island */}
                  <div className="flex justify-center pt-3 pb-1" style={{ background: "#0a0a0c" }}>
                    <div className="w-24 h-6 rounded-full flex items-center justify-center gap-2" style={{ background: "#000" }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#1a1a1a" }} />
                      <span className="w-4 h-4 rounded-full" style={{ background: "#111" }} />
                    </div>
                  </div>

                  {/* Status bar */}
                  <div className="flex items-center justify-between px-5 py-1" style={{ background: "#0a0a0c" }}>
                    <span className="text-[11px] font-semibold text-white">09:52</span>
                    <div className="flex items-center gap-1">
                      <div className="flex gap-px items-end" style={{ height: "12px" }}>
                        {[3, 4, 5, 5].map((h, i) => <div key={i} className="w-1 rounded-sm bg-white" style={{ height: `${h * 2}px`, opacity: i < 4 ? 1 : 0.3 }} />)}
                      </div>
                      <div className="ml-1 w-6 h-3 rounded-sm border border-white/60 flex items-center px-0.5">
                        <div className="h-1.5 rounded-sm bg-emerald-400" style={{ width: "78%" }} />
                      </div>
                    </div>
                  </div>

                  {/* App header */}
                  <div className="flex items-center justify-between px-4 py-2.5 border-b" style={{ background: "#111113", borderColor: "rgba(255,255,255,0.06)" }}>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest" style={{ color: "#3f3f46" }}>Kargu Teknoloji</p>
                      <p className="text-[13px] font-bold text-white">Kuzey Geçidi</p>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-lg px-2 py-1" style={{ background: "rgba(234,179,8,0.1)", border: "1px solid rgba(234,179,8,0.22)" }}>
                      <Sun size={12} weight="bold" className="text-yellow-400" aria-hidden="true" />
                      <span className="text-[10px] font-semibold text-yellow-300">Şarjta</span>
                    </div>
                  </div>

                  <div className="px-3 py-2.5 space-y-2.5" style={{ background: "#0a0a0c" }}>

                    {/* Enerji kartı */}
                    <div className="rounded-2xl p-3.5" style={{ background: "rgba(234,179,8,0.07)", border: "1px solid rgba(234,179,8,0.22)", boxShadow: "0 0 20px rgba(234,179,8,0.05)" }}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-semibold text-yellow-300 inline-flex items-center gap-1.5">
                          <Lightning size={12} weight="bold" aria-hidden="true" /> Enerji Durumu
                        </span>
                        <span className="text-[9px]" style={{ color: "#52525b" }}>2847m</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { Ikon: Sun, label: "Panel", val: "12.4W", color: "#fbbf24" },
                          { Ikon: BatteryFull, label: "Batarya", val: "%78", color: "#34d399" },
                          { Ikon: Lightning, label: "Tüketim", val: "0.8W", color: "#a78bfa" },
                          { Ikon: Timer, label: "Uptime", val: "247 gün", color: "#60a5fa" },
                        ].map((e) => (
                          <div key={e.label} className="rounded-xl px-2.5 py-2" style={{ background: "rgba(0,0,0,0.3)" }}>
                            <p className="text-[9px] inline-flex items-center gap-1" style={{ color: "#52525b" }}>
                              <e.Ikon size={10} weight="bold" aria-hidden="true" /> {e.label}
                            </p>
                            <p className="text-[13px] font-bold" style={{ color: e.color }}>{e.val}</p>
                          </div>
                        ))}
                      </div>
                      {/* Batarya bar */}
                      <div className="mt-2.5 h-1.5 rounded-full" style={{ background: "#1c1c1f" }}>
                        <div className="h-1.5 rounded-full" style={{ width: "78%", background: "linear-gradient(90deg,#065f46,#34d399)" }} />
                      </div>
                    </div>

                    {/* Sensör grid */}
                    <div className="grid grid-cols-2 gap-1.5">
                      {[
                        { Ikon: Thermometer, label: "Sıcaklık", val: "-2.4°C", color: "#93c5fd" },
                        { Ikon: Drop, label: "Nem", val: "%65", color: "#67e8f9" },
                        { Ikon: Wind, label: "Rüzgar", val: "34 km/h", color: "#a5b4fc" },
                        { Ikon: Thermometer, label: "Basınç", val: "758 hPa", color: "#fb923c" },
                        { Ikon: Leaf, label: "CO₂", val: "412 ppm", color: "#86efac" },
                        { Ikon: Sun, label: "UV", val: "3.2", color: "#fde047" },
                      ].map((s) => (
                        <div key={s.label} className="rounded-xl p-2.5" style={{ background: "#111113", border: "1px solid rgba(255,255,255,0.06)" }}>
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <s.Ikon size={12} weight="bold" style={{ color: s.color }} aria-hidden="true" />
                            <span className="text-[9px]" style={{ color: "#52525b" }}>{s.label}</span>
                          </div>
                          <p className="text-[14px] font-bold" style={{ color: s.color }}>{s.val}</p>
                        </div>
                      ))}
                    </div>

                    {/* İletim durumu */}
                    <div className="rounded-2xl p-3" style={{ background: "#111113", border: "1px solid rgba(255,255,255,0.07)" }}>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[9px] font-semibold uppercase tracking-widest" style={{ color: "#3f3f46" }}>Son İletim</p>
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ animation: "pulse 2s ease-in-out infinite" }} />
                          <span className="text-[9px] text-emerald-400">Aktif</span>
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        {[
                          { saat: "09:52", mesaj: "Paket iletildi · -98 dBm", renk: "#34d399" },
                          { saat: "09:37", mesaj: "Paket iletildi · -101 dBm", renk: "#52525b" },
                        ].map((l) => (
                          <div key={l.saat} className="flex items-center gap-2 text-[10px]">
                            <span className="font-mono" style={{ color: "#3f3f46" }}>{l.saat}</span>
                            <span style={{ color: l.renk }}>{l.mesaj}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom nav */}
                  <div className="flex items-center justify-around px-2 py-2 border-t" style={{ background: "#111113", borderColor: "rgba(255,255,255,0.06)" }}>
                    {[
                      { Ikon: Broadcast, label: "Sensör", aktif: true },
                      { Ikon: Sun, label: "Enerji", aktif: false },
                      { Ikon: ChartLineUp, label: "Grafik", aktif: false },
                      { Ikon: Gear, label: "Ayar", aktif: false },
                    ].map((n) => (
                      <div key={n.label} className="flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl" style={n.aktif ? { background: "rgba(234,179,8,0.15)" } : {}}>
                        <n.Ikon size={14} weight="bold" style={{ color: n.aktif ? "#fbbf24" : "#3f3f46" }} aria-hidden="true" />
                        <span className="text-[8px]" style={{ color: n.aktif ? "#fde68a" : "#3f3f46" }}>{n.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center py-2" style={{ background: "#111113" }}>
                    <div className="w-20 h-1 rounded-full" style={{ background: "#2a2a2e" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kullanım alanları */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-10">Nerede Kullanılır?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { Ikon: Mountains, baslik: "Dağ ve Orman Alanları", acik: "Yüksek geçitler, orman içi noktalar, dağcılık güzergahları. Hava koşulları ve don uyarısı için." },
              { Ikon: Waves, baslik: "Su Kaynakları & Barajlar", acik: "Nehir, dere ve baraj gözlem noktaları. Su seviyesi ve kalitesini sürekli izleyin." },
              { Ikon: Plant, baslik: "Tarım Arazileri", acik: "Tarla kenarı hava istasyonu. Sıcaklık, nem ve toprak nemi — sulama kararlarınızı veriye dayandırın." },
              { Ikon: Cylinder, baslik: "Uzak Depo & Altyapı", acik: "Akaryakıt deposu, trafo merkezi, su kuyusu — şehirden uzak tesislerinizi ofisten izleyin." },
            ].map((item) => (
              <div key={item.baslik} className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6">
                <item.Ikon size={30} weight="duotone" className="shrink-0 text-yellow-400" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold mb-1">{item.baslik}</h3>
                  <p className="text-sm text-zinc-400">{item.acik}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teknik özellikler */}
      <section className="border-b border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-8">Teknik Özellikler</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { baslik: "Güç Kaynağı", deger: "Güneş paneli + dahili Li-Ion batarya" },
              { baslik: "Panel Gücü", deger: "5W monokristal" },
              { baslik: "Batarya Kapasitesi", deger: "10.000 mAh — 5+ gün güneşsiz çalışır" },
              { baslik: "İletişim", deger: "LoRa — SIM kart yok" },
              { baslik: "Menzil", deger: "5–15 km (topografyaya bağlı)" },
              { baslik: "Desteklenen Sensörler", deger: "Sıcaklık, nem, yağış, rüzgar, CO₂, basınç" },
              { baslik: "Güncelleme Sıklığı", deger: "Her 5–60 dakika (ayarlanabilir)" },
              { baslik: "Çalışma Sıcaklığı", deger: "-30°C ile +70°C" },
              { baslik: "Koruma Sınıfı", deger: "IP66 — her hava koşuluna dayanıklı" },
            ].map((item) => (
              <div key={item.baslik} className="flex justify-between py-4 px-5 rounded-2xl border border-white/10 bg-white/5">
                <span className="text-zinc-500 text-sm">{item.baslik}</span>
                <span className="text-white text-sm font-medium text-right ml-4">{item.deger}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">Ulaşılmaz Noktanızı İzleyelim</h2>
        <p className="mt-4 text-zinc-400 text-lg">
          Konumu, izlemek istediğiniz parametreleri ve yaklaşık mesafeyi söyleyin —
          size en uygun sistemi tasarlayalım.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/iletisim" className="rounded-2xl bg-amber-400 px-7 py-3 text-black font-semibold hover:bg-amber-300 transition">Teklif Al</Link>
          <Link href="/projeler" className="rounded-2xl border border-white/20 px-7 py-3 hover:bg-white/5 transition">Diğer Projelere Bak</Link>
        </div>
      </section>
    </div>
  );
}
