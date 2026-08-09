import Link from "next/link";
import Image from "next/image";

const sensorVerisi = [
  { ikon: "🌡️", baslik: "Sıcaklık", deger: "24.5°C", alt: "Ahır içi — Normal", durum: "normal", renk: "orange", bar: 55 },
  { ikon: "💧", baslik: "Nem", deger: "%68", alt: "Yüksek nem — Dikkat!", durum: "uyari", renk: "blue", bar: 68 },
  { ikon: "👁️", baslik: "Varlık", deger: "12 / 14", alt: "2 hayvan ahır dışında", durum: "uyari", renk: "yellow", bar: 86 },
  { ikon: "🔋", baslik: "Pil", deger: "%87", alt: "≈ 2 yıl kaldı", durum: "normal", renk: "emerald", bar: 87 },
];

const barRengi: Record<string, string> = { orange: "bg-orange-400", blue: "bg-blue-400", yellow: "bg-yellow-400", emerald: "bg-emerald-400" };
const kartRengi: Record<string, string> = { orange: "border-orange-500/20 bg-orange-500/5", blue: "border-blue-500/20 bg-blue-500/5", yellow: "border-yellow-500/20 bg-yellow-500/5", emerald: "border-emerald-500/20 bg-emerald-500/5" };

export default function AkilliTarimPage() {
  return (
    <div className="min-h-dvh bg-black/65 text-white">

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1600&q=80&auto=format&fit=crop"
            alt="Çiftlikteki inekler"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <Link href="/projeler" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition mb-8">
            ← Tüm Projeler
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Hayvancılık & Tarım</span>
            <span className="text-xs text-zinc-500">Pil Destekli • LoRa Kablosuz • SIM Kart Yok</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Akıllı Tarım
            <span className="block text-emerald-400">Sensörü</span>
          </h1>
          <p className="mt-5 text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Hayvancılıkta kayıpların büyük çoğunluğu gece olur. Bizim sistemimiz
            gece de gündüz de uyanık — siz uyurken ahırınızı izliyor, bir şey olduğunda
            sizi uyandırıyor.
          </p>
        </div>
      </section>

      {/* Canlı Dashboard */}
      <section className="border-b border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-xl mb-12">
            <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-300 mb-4">
              CANLI VERİ GÖRÜNÜMÜ
            </div>
            <h2 className="text-3xl font-bold">Telefonunuzda Tam Olarak Bunu Görürsünüz</h2>
            <p className="mt-3 text-zinc-400 leading-relaxed">
              Sensörler her birkaç dakikada bir veri gönderir. Ahırda fiziksel olarak
              bulunmanıza gerek kalmadan tüm durumu tek bakışta anlarsınız.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
            {sensorVerisi.map((s) => (
              <div key={s.baslik} className={`rounded-2xl border p-6 ${kartRengi[s.renk]}`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{s.ikon}</span>
                  <span className={`text-xs ${s.durum === "uyari" ? "text-yellow-400" : "text-zinc-500"}`}>
                    {s.durum === "uyari" ? "⚠ Dikkat" : "✓ Normal"}
                  </span>
                </div>
                <p className="text-xs text-zinc-500 uppercase tracking-wide mb-1">{s.baslik}</p>
                <p className="text-3xl font-bold text-white">{s.deger}</p>
                <p className="text-xs text-zinc-500 mt-1">{s.alt}</p>
                <div className="mt-4 h-1.5 rounded-full bg-white/10">
                  <div className={`h-1.5 rounded-full ${barRengi[s.renk]}`} style={{ width: `${s.bar}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 text-sm text-zinc-600">
            <span className="w-2 h-2 rounded-full bg-emerald-400" style={{ animation: "pulse 2s ease-in-out infinite" }} />
            Son güncelleme: 3 dakika önce &nbsp;·&nbsp; Sinyal gücü: İyi &nbsp;·&nbsp; Tüm cihazlar aktif
          </div>
        </div>
      </section>

      {/* Otomasyon + GUI Mockup */}
      <section className="border-b border-white/10" style={{ background: "linear-gradient(180deg, #09090b 0%, #0d0d10 100%)" }}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-sm text-purple-300 mb-4">
              OTOMATİK KONTROL
            </div>
            <h2 className="text-3xl font-bold">Nem Yükselince Fan Otomatik Açılır</h2>
            <p className="mt-4 text-zinc-400 text-lg leading-relaxed">
              Siz uyurken sistem uyanık. Nem belirlediğiniz eşiği geçtiğinde fanlar
              otomatik devreye girer — telefona bakmanıza bile gerek kalmaz.
            </p>
          </div>

          {/* Mockup grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_232px] gap-6 items-start">

            {/* Masaüstü browser mockup */}
            <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)" }}>

              {/* Browser chrome */}
              <div className="flex items-center gap-3 px-4 py-2.5 border-b" style={{ background: "#1c1c1e", borderColor: "rgba(255,255,255,0.06)" }}>
                <div className="flex gap-1.5 shrink-0">
                  <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
                </div>
                <div className="flex gap-3 text-[11px] text-zinc-600 shrink-0 select-none">
                  <span>‹</span><span>›</span>
                </div>
                <div className="flex-1 flex items-center gap-2 rounded-lg px-3 py-1.5 text-[11px] font-mono" style={{ background: "#141416", color: "#71717a" }}>
                  <span style={{ color: "#22c55e", fontSize: "10px" }}>●</span>
                  kargu.com.tr/panel/ahir-1
                </div>
                <div className="flex gap-2 shrink-0 opacity-40">
                  <div className="w-3.5 h-3 rounded-sm bg-zinc-600" />
                  <div className="w-3.5 h-3 rounded-sm bg-zinc-600" />
                </div>
              </div>

              {/* App shell */}
              <div className="flex" style={{ minHeight: "560px", background: "#0a0a0c" }}>

                {/* Sidebar */}
                <div className="w-48 shrink-0 flex flex-col border-r" style={{ background: "#0f0f12", borderColor: "rgba(255,255,255,0.05)" }}>
                  {/* Logo */}
                  <div className="px-4 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)" }}>
                        <span className="text-[11px] font-bold text-emerald-400">K</span>
                      </div>
                      <div>
                        <p className="text-[12px] font-bold text-white leading-none">Kargu</p>
                        <div className="flex items-center gap-1 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ animation: "pulse 2s ease-in-out infinite" }} />
                          <p className="text-[10px] text-zinc-500">Canlı bağlantı</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Nav */}
                  <div className="px-2 py-3 space-y-0.5 flex-1">
                    {[
                      { ikon: "⊞", label: "Genel Bakış", aktif: false, badge: null },
                      { ikon: "◎", label: "Sensörler", aktif: false, badge: null },
                      { ikon: "⚡", label: "Otomasyon", aktif: true, badge: "1" },
                      { ikon: "💡", label: "Cihazlar", aktif: false, badge: null },
                      { ikon: "📊", label: "Raporlar", aktif: false, badge: null },
                      { ikon: "⚙", label: "Ayarlar", aktif: false, badge: null },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between px-3 py-2 rounded-xl"
                        style={item.aktif ? { background: "rgba(168,85,247,0.12)", border: "1px solid rgba(168,85,247,0.22)" } : {}}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-[13px]" style={{ color: item.aktif ? "#c084fc" : "#52525b" }}>{item.ikon}</span>
                          <span className="text-[12px]" style={{ color: item.aktif ? "#e9d5ff" : "#52525b", fontWeight: item.aktif ? 600 : 400 }}>{item.label}</span>
                        </div>
                        {item.badge && (
                          <span className="text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center" style={{ background: "rgba(234,179,8,0.25)", color: "#fbbf24", border: "1px solid rgba(234,179,8,0.3)" }}>{item.badge}</span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Alarm pill */}
                  <div className="px-3 pb-4">
                    <div className="flex items-center gap-2 rounded-xl px-3 py-2.5" style={{ background: "rgba(234,179,8,0.08)", border: "1px solid rgba(234,179,8,0.18)" }}>
                      <span className="w-2 h-2 rounded-full bg-yellow-400 shrink-0" style={{ animation: "pulse 1.2s ease-in-out infinite" }} />
                      <div>
                        <p className="text-[10px] font-semibold text-yellow-300">1 aktif alarm</p>
                        <p className="text-[9px] text-zinc-600">Ahır 1 · 14:23</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main panel */}
                <div className="flex-1 flex flex-col overflow-hidden">

                  {/* Alert banner */}
                  <div className="flex items-center gap-3 px-5 py-2.5 border-b shrink-0" style={{ background: "rgba(234,179,8,0.07)", borderColor: "rgba(234,179,8,0.18)" }}>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(234,179,8,0.2)", border: "1px solid rgba(234,179,8,0.35)" }}>
                      <span className="text-[10px]">⚠</span>
                    </div>
                    <p className="text-[11px] flex-1" style={{ color: "#fde68a" }}>
                      <span className="font-bold">Kural 1 Tetiklendi —</span>
                      <span style={{ color: "rgba(253,230,138,0.7)" }}> Nem %76 → Fan 1 ve Fan 2 otomatik açıldı</span>
                      <span className="ml-2" style={{ color: "rgba(253,230,138,0.35)", fontFamily: "monospace" }}>14:23</span>
                    </p>
                    <span className="text-[10px] px-2 py-0.5 rounded-lg shrink-0" style={{ color: "#71717a", border: "1px solid rgba(255,255,255,0.08)" }}>Kapat</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-4 space-y-3 overflow-hidden">

                    {/* Page title row */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest" style={{ color: "#3f3f46" }}>Otomasyon & Cihaz Kontrolü</p>
                        <p className="text-[14px] font-bold text-white mt-0.5">Ahır 1 <span className="text-zinc-600 font-normal">· İzmir, Tire</span></p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5 text-[11px]" style={{ color: "#52525b" }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" style={{ animation: "pulse 2s ease-in-out infinite" }} />
                          Canlı
                        </div>
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-semibold" style={{ background: "#27272a", border: "1px solid rgba(255,255,255,0.08)", color: "#a1a1aa" }}>ÇF</div>
                      </div>
                    </div>

                    {/* Sensor cards */}
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { ikon: "🌡️", label: "Sıcaklık", val: "24.5°C", trend: "+0.2°", sub: "Normal", valColor: "#fb923c", bg: "#111113", border: "rgba(255,255,255,0.06)", glow: false },
                        { ikon: "💧", label: "Nem", val: "%76", trend: "↑ artıyor", sub: "⚠ Eşik aşıldı", valColor: "#fde047", bg: "rgba(234,179,8,0.07)", border: "rgba(234,179,8,0.3)", glow: true },
                        { ikon: "👁️", label: "Varlık", val: "12/14", trend: "2 dışarıda", sub: "Takip aktif", valColor: "#ffffff", bg: "#111113", border: "rgba(255,255,255,0.06)", glow: false },
                        { ikon: "🔋", label: "Pil", val: "%87", trend: "≈2 yıl", sub: "Normal", valColor: "#34d399", bg: "#111113", border: "rgba(255,255,255,0.06)", glow: false },
                      ].map((s) => (
                        <div key={s.label} className="rounded-2xl p-3" style={{ background: s.bg, border: `1px solid ${s.border}`, boxShadow: s.glow ? "0 0 20px rgba(234,179,8,0.08)" : "none" }}>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-sm">{s.ikon}</span>
                            <span className="text-[9px] font-mono" style={{ color: "#3f3f46" }}>{s.trend}</span>
                          </div>
                          <p className="text-[18px] font-bold leading-none" style={{ color: s.valColor }}>{s.val}</p>
                          <p className="text-[10px] mt-1" style={{ color: "#52525b" }}>{s.label}</p>
                          <p className="text-[10px]" style={{ color: "#3f3f46" }}>{s.sub}</p>
                        </div>
                      ))}
                    </div>

                    {/* Middle row: rules + chart + devices */}
                    <div className="grid grid-cols-[1fr_1fr_144px] gap-2.5">

                      {/* Otomasyon kuralları */}
                      <div className="rounded-2xl p-4" style={{ background: "#0f0f12", border: "1px solid rgba(255,255,255,0.06)" }}>
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: "#52525b" }}>Otomasyon Kuralları</p>
                          <span className="text-[9px] px-2 py-0.5 rounded-full" style={{ color: "#a78bfa", background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.22)" }}>2 aktif</span>
                        </div>
                        <div className="space-y-2">
                          {/* Tetiklenen kural */}
                          <div className="rounded-xl p-3" style={{ background: "rgba(234,179,8,0.08)", border: "1px solid rgba(234,179,8,0.25)", boxShadow: "0 0 16px rgba(234,179,8,0.06)" }}>
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" style={{ animation: "pulse 1s ease-in-out infinite" }} />
                                <span className="text-[11px] font-bold" style={{ color: "#fde68a" }}>Kural 1</span>
                              </div>
                              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full tracking-wider" style={{ color: "#fbbf24", background: "rgba(234,179,8,0.18)", border: "1px solid rgba(234,179,8,0.3)" }}>ÇALIŞIYOR</span>
                            </div>
                            <div className="flex items-center gap-1.5 flex-wrap text-[11px]">
                              <span className="font-mono font-bold" style={{ color: "#fde047" }}>Nem &gt; %75</span>
                              <span style={{ color: "#3f3f46" }}>→</span>
                              <span className="text-white">Fan 1, Fan 2</span>
                              <span className="font-bold" style={{ color: "#34d399" }}>AÇ</span>
                            </div>
                          </div>
                          {/* Bekleyen kural */}
                          <div className="rounded-xl p-3" style={{ background: "#18181b", border: "1px solid rgba(255,255,255,0.05)" }}>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[11px] font-medium" style={{ color: "#52525b" }}>Kural 2</span>
                              <span className="text-[9px] px-1.5 py-0.5 rounded-full" style={{ color: "#34d399", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)" }}>ETKİN</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-[11px]">
                              <span className="font-mono" style={{ color: "rgba(251,146,60,0.7)" }}>Sıcaklık &gt; 32°C</span>
                              <span style={{ color: "#3f3f46" }}>→</span>
                              <span style={{ color: "#52525b" }}>Havalandırma AÇ</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Nem trend grafiği */}
                      <div className="rounded-2xl p-4" style={{ background: "#0f0f12", border: "1px solid rgba(255,255,255,0.06)" }}>
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: "#52525b" }}>Nem Trendi</p>
                          <span className="text-[9px] font-mono" style={{ color: "#3f3f46" }}>son 8 ölçüm</span>
                        </div>
                        {/* Sparkline bars */}
                        <div className="flex items-end gap-1 h-14 mb-2">
                          {[38, 44, 52, 58, 63, 68, 72, 76].map((v, i) => (
                            <div key={i} className="flex-1 rounded-sm" style={{
                              height: `${(v / 80) * 100}%`,
                              background: i === 7
                                ? "linear-gradient(180deg, #fbbf24, #f59e0b)"
                                : i === 6
                                ? "rgba(251,191,36,0.4)"
                                : i >= 4
                                ? "rgba(251,191,36,0.2)"
                                : "rgba(63,63,70,0.6)",
                              boxShadow: i === 7 ? "0 0 8px rgba(251,191,36,0.4)" : "none",
                            }} />
                          ))}
                        </div>
                        {/* Threshold line label */}
                        <div className="flex items-center justify-between text-[9px] font-mono mb-2" style={{ color: "#3f3f46" }}>
                          <span>13:50</span>
                          <span style={{ color: "#fbbf24" }}>14:23 → %76 ▲</span>
                        </div>
                        {/* Progress bar with threshold marker */}
                        <div className="relative h-2 rounded-full" style={{ background: "#18181b" }}>
                          <div className="h-2 rounded-full" style={{ width: "76%", background: "linear-gradient(90deg, #52525b, #fbbf24)" }} />
                          <div className="absolute top-0 bottom-0 w-px" style={{ left: "75%", background: "#f87171" }} />
                        </div>
                        <div className="flex justify-between mt-1.5 text-[9px]" style={{ color: "#3f3f46" }}>
                          <span>%0</span>
                          <span style={{ color: "#f87171" }}>eşik %75</span>
                          <span>%100</span>
                        </div>
                      </div>

                      {/* Cihaz paneli */}
                      <div className="rounded-2xl p-3" style={{ background: "#0f0f12", border: "1px solid rgba(255,255,255,0.06)" }}>
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: "#52525b" }}>Cihazlar</p>
                          <span className="text-[9px]" style={{ color: "#34d399" }}>2/3</span>
                        </div>
                        <div className="space-y-2.5">
                          {[
                            { ad: "Fan 1", ikon: "🌀", acik: true, oto: true },
                            { ad: "Fan 2", ikon: "🌀", acik: true, oto: true },
                            { ad: "Hava", ikon: "💨", acik: false, oto: false },
                          ].map((c) => (
                            <div key={c.ad} className="rounded-xl p-2.5" style={{ background: c.acik ? "rgba(16,185,129,0.08)" : "#18181b", border: c.acik ? "1px solid rgba(16,185,129,0.2)" : "1px solid rgba(255,255,255,0.05)" }}>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-[13px]">{c.ikon}</span>
                                <div className="flex items-center px-0.5 rounded-full" style={{ width: "28px", height: "14px", background: c.acik ? "#10b981" : "#3f3f46" }}>
                                  <div className="rounded-full bg-white" style={{ width: "10px", height: "10px", transform: c.acik ? "translateX(14px)" : "translateX(0)", transition: "transform 0.2s" }} />
                                </div>
                              </div>
                              <p className="text-[11px] font-medium text-white">{c.ad}</p>
                              <p className="text-[9px] mt-0.5" style={{ color: c.oto ? "#c084fc" : "#3f3f46" }}>{c.oto ? "otomasyon" : "manuel"}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Event log */}
                    <div className="rounded-2xl p-4" style={{ background: "#0f0f12", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <p className="text-[11px] font-semibold uppercase tracking-wide mb-3" style={{ color: "#52525b" }}>Olay Kaydı</p>
                      <div className="space-y-1.5">
                        {[
                          { saat: "14:23", mesaj: "Kural 1 tetiklendi — Nem %76 → Fan 1 & Fan 2 otomatik açıldı", valColor: "#fde68a", dot: "#fbbf24", rowBg: "rgba(234,179,8,0.05)" },
                          { saat: "14:21", mesaj: "Nem %75 eşiğini geçti — kural değerlendiriliyor", valColor: "#a1a1aa", dot: "#f97316", rowBg: "" },
                          { saat: "14:18", mesaj: "Nem %73'e yükseldi — artış trendi tespit edildi", valColor: "#71717a", dot: "#52525b", rowBg: "" },
                          { saat: "13:55", mesaj: "Tüm sensörler normal — sistem aktif izlemede", valColor: "rgba(52,211,153,0.6)", dot: "#34d399", rowBg: "" },
                        ].map((log) => (
                          <div key={log.saat} className="flex items-start gap-3 rounded-lg px-2 py-1.5 text-[11px]" style={{ background: log.rowBg }}>
                            <span className="font-mono shrink-0 mt-0.5 w-8" style={{ color: "#3f3f46" }}>{log.saat}</span>
                            <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: log.dot }} />
                            <span style={{ color: log.valColor }}>{log.mesaj}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobil mockup */}
            <div className="flex justify-center lg:justify-start pt-2">
              <div className="relative" style={{ width: "218px" }}>
                {/* Phone shell */}
                <div className="rounded-[2.8rem] overflow-hidden" style={{ border: "2px solid #2a2a2e", background: "#0a0a0c", boxShadow: "0 32px 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.06)" }}>

                  {/* Dynamic island */}
                  <div className="flex justify-center pt-3 pb-1" style={{ background: "#0a0a0c" }}>
                    <div className="w-24 h-6 rounded-full flex items-center justify-center gap-2" style={{ background: "#000" }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#1a1a1a", border: "1px solid #2a2a2a" }} />
                      <span className="w-4 h-4 rounded-full" style={{ background: "#111" }} />
                    </div>
                  </div>

                  {/* Status bar */}
                  <div className="flex items-center justify-between px-5 py-1" style={{ background: "#0a0a0c" }}>
                    <span className="text-[11px] font-semibold text-white">14:23</span>
                    <div className="flex items-center gap-1">
                      <div className="flex gap-px items-end h-3">
                        {[3, 4, 5, 5].map((h, i) => (
                          <div key={i} className="w-1 rounded-sm bg-white" style={{ height: `${h * 2}px`, opacity: i < 3 ? 1 : 0.3 }} />
                        ))}
                      </div>
                      <span className="text-white text-[11px] ml-1">WiFi</span>
                      <div className="ml-1 w-6 h-3 rounded-sm border border-white/60 flex items-center px-0.5">
                        <div className="h-1.5 rounded-sm bg-emerald-400" style={{ width: "75%" }} />
                      </div>
                    </div>
                  </div>

                  {/* App header */}
                  <div className="flex items-center justify-between px-4 py-2.5 border-b" style={{ background: "#111113", borderColor: "rgba(255,255,255,0.06)" }}>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest" style={{ color: "#3f3f46" }}>Kargu Teknoloji</p>
                      <p className="text-[13px] font-bold text-white leading-tight">Ahır 1</p>
                    </div>
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(234,179,8,0.15)", border: "1px solid rgba(234,179,8,0.35)" }}>
                        <span className="text-[14px]">🔔</span>
                      </div>
                      <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full flex items-center justify-center text-white font-bold" style={{ background: "#ef4444", fontSize: "8px" }}>1</div>
                    </div>
                  </div>

                  {/* Scrollable content */}
                  <div className="px-3 py-2.5 space-y-2.5" style={{ background: "#0a0a0c" }}>

                    {/* Alarm card */}
                    <div className="rounded-2xl p-3.5" style={{ background: "rgba(234,179,8,0.08)", border: "1px solid rgba(234,179,8,0.28)", boxShadow: "0 0 20px rgba(234,179,8,0.06)" }}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-yellow-400" style={{ animation: "pulse 1s ease-in-out infinite" }} />
                        <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: "#fde68a" }}>Otomasyon Tetiklendi</span>
                      </div>
                      <p className="text-[12px] leading-relaxed" style={{ color: "#d4d4d8" }}>
                        Nem <span className="font-mono font-bold" style={{ color: "#fde047" }}>%76</span>'ya ulaştı.
                        Fan 1 ve Fan 2 otomatik açıldı.
                      </p>
                    </div>

                    {/* Nem card with mini chart */}
                    <div className="rounded-2xl p-3" style={{ background: "#111113", border: "1px solid rgba(255,255,255,0.07)" }}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px]" style={{ color: "#52525b" }}>💧 Nem</span>
                        <span className="text-[9px] px-2 py-0.5 rounded-full font-mono" style={{ color: "#fbbf24", background: "rgba(234,179,8,0.12)", border: "1px solid rgba(234,179,8,0.25)" }}>eşik %75</span>
                      </div>
                      <p className="text-[22px] font-bold leading-none mb-2" style={{ color: "#fde047" }}>%76</p>
                      {/* Mini spark */}
                      <div className="flex items-end gap-0.5 h-7 mb-2">
                        {[38, 44, 52, 58, 63, 68, 72, 76].map((v, i) => (
                          <div key={i} className="flex-1 rounded-sm" style={{
                            height: `${(v / 80) * 100}%`,
                            background: i === 7 ? "#fbbf24" : i >= 5 ? "rgba(251,191,36,0.35)" : "rgba(63,63,70,0.5)",
                          }} />
                        ))}
                      </div>
                      <div className="h-1.5 rounded-full" style={{ background: "#1c1c1f" }}>
                        <div className="h-1.5 rounded-full" style={{ width: "76%", background: "linear-gradient(90deg, #52525b, #fbbf24)" }} />
                      </div>
                    </div>

                    {/* Devices */}
                    <div className="rounded-2xl p-3" style={{ background: "#111113", border: "1px solid rgba(255,255,255,0.07)" }}>
                      <p className="text-[9px] font-semibold uppercase tracking-widest mb-2.5" style={{ color: "#3f3f46" }}>Cihazlar</p>
                      <div className="space-y-2.5">
                        {[
                          { ad: "Fan 1", ikon: "🌀", acik: true, oto: true },
                          { ad: "Fan 2", ikon: "🌀", acik: true, oto: true },
                          { ad: "Havalandırma", ikon: "💨", acik: false, oto: false },
                        ].map((c) => (
                          <div key={c.ad} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-[14px]">{c.ikon}</span>
                              <div>
                                <p className="text-[12px] font-medium text-white">{c.ad}</p>
                                {c.oto && <p className="text-[9px]" style={{ color: "#a78bfa" }}>otomasyon</p>}
                              </div>
                            </div>
                            <div className="flex items-center px-0.5 rounded-full" style={{ width: "34px", height: "18px", background: c.acik ? "#10b981" : "#3f3f46" }}>
                              <div className="rounded-full bg-white" style={{ width: "14px", height: "14px", transform: c.acik ? "translateX(16px)" : "translateX(0)", boxShadow: "0 1px 3px rgba(0,0,0,0.4)" }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom tab bar */}
                  <div className="flex items-center justify-around px-2 py-2 border-t" style={{ background: "#111113", borderColor: "rgba(255,255,255,0.06)" }}>
                    {[
                      { ikon: "⊞", label: "Özet", aktif: false },
                      { ikon: "◎", label: "Sensör", aktif: false },
                      { ikon: "⚡", label: "Oto", aktif: true },
                      { ikon: "☰", label: "Daha", aktif: false },
                    ].map((n) => (
                      <div key={n.label} className="flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl" style={n.aktif ? { background: "rgba(168,85,247,0.15)" } : {}}>
                        <span className="text-[13px]" style={{ color: n.aktif ? "#c084fc" : "#3f3f46" }}>{n.ikon}</span>
                        <span className="text-[8px]" style={{ color: n.aktif ? "#a78bfa" : "#3f3f46" }}>{n.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Home bar */}
                  <div className="flex justify-center py-2" style={{ background: "#111113" }}>
                    <div className="w-20 h-1 rounded-full" style={{ background: "#2a2a2e" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Açıklama şeridi */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { ikon: "⚙️", baslik: "Kural Belirleyin", acik: "\"Nem %75'i geçerse Fan 1 ve Fan 2'yi aç\" gibi kuralları uygulamadan ayarlarsınız." },
              { ikon: "⚡", baslik: "Sistem Otomatik Yapar", acik: "Eşik aşıldığında sistem fanları açar. Telefonunuza bakmanıza gerek yoktur." },
              { ikon: "📋", baslik: "Kayıt Tutulur", acik: "Ne zaman ne olduğu olay kaydında saklanır. İleride incelemek için her zaman erişilebilir." },
            ].map((item) => (
              <div key={item.baslik} className="rounded-2xl border border-purple-500/15 bg-purple-500/5 p-5 flex gap-4">
                <span className="text-2xl shrink-0">{item.ikon}</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">{item.baslik}</h4>
                  <p className="text-sm text-zinc-400">{item.acik}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Senaryolar */}
      <section className="border-b border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-xl mb-12">
            <h2 className="text-3xl font-bold">Gerçek Senaryolar</h2>
            <p className="mt-3 text-zinc-400">
              Bu sistem olmadan yaşanan sorunlar — ve sistemle nasıl önlendiği.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                ikon: "🌡️",
                baslik: "Yaz Ortasında Isı Stresi",
                renk: "orange",
                border: "border-orange-500/20",
                bg: "bg-orange-500/5",
                ikonBg: "bg-orange-500/10 border-orange-500/20",
                oncesi: "Temmuz günü ahır 38°C'yi geçiyor. Çiftçi fark ettiğinde hayvanlar strese girmiş, verim düşmüş.",
                sonrasi: "Sistem 34°C'de uyarı veriyor. Çiftçi telefona bakıyor, havalandırmayı açıyor. Hayvanlar etkilenmeden sorunu çözüyor.",
              },
              {
                ikon: "💧",
                baslik: "Ahırda Yüksek Nem",
                renk: "blue",
                border: "border-blue-500/20",
                bg: "bg-blue-500/5",
                ikonBg: "bg-blue-500/10 border-blue-500/20",
                oncesi: "Uzun süreli yağmur sonrası ahır nemi %85'e çıkıyor. Küf oluşuyor, hayvanlar solunum yolu hastalığına yakalanıyor.",
                sonrasi: "Nem %75'i geçtiğinde Fan 1 ve Fan 2 otomatik devreye girer. Çiftçi uyandığında ahır zaten havalanmış, nem normal seviyeye inmiş olur.",
              },
              {
                ikon: "👁️",
                baslik: "Gece Kaçan Hayvan",
                renk: "yellow",
                border: "border-yellow-500/20",
                bg: "bg-yellow-500/5",
                ikonBg: "bg-yellow-500/10 border-yellow-500/20",
                oncesi: "Ahır kapısı rüzgardan açılıyor. Sabah kontrol edildiğinde bir inek kayıp — saatler geçmiş.",
                sonrasi: "Gece 02:30'da sistem 'hayvan sayısı azaldı' bildirimi gönderiyor. Çiftçi 20 dakika içinde ineği buluyor.",
              },
            ].map((item) => (
              <div key={item.baslik} className={`rounded-3xl border ${item.border} ${item.bg} p-8`}>
                <div className={`w-12 h-12 rounded-2xl border ${item.ikonBg} flex items-center justify-center text-2xl mb-5`}>
                  {item.ikon}
                </div>
                <h3 className="text-xl font-semibold mb-5">{item.baslik}</h3>
                <div className="space-y-4">
                  <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-4">
                    <p className="text-xs text-red-400 font-semibold mb-1 uppercase tracking-wide">Sistem olmadan</p>
                    <p className="text-sm text-zinc-400">{item.oncesi}</p>
                  </div>
                  <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4">
                    <p className="text-xs text-emerald-400 font-semibold mb-1 uppercase tracking-wide">Kargu ile</p>
                    <p className="text-sm text-zinc-300">{item.sonrasi}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Varlık takibi açıklama */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-xl mb-12">
            <div className="inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1 text-sm text-yellow-300 mb-4">
              VARLIK TAKİBİ — NASIL ÇALIŞIR?
            </div>
            <h2 className="text-3xl font-bold">Hayvanlar Nasıl Sayılır?</h2>
            <p className="mt-3 text-zinc-400 text-lg">
              Her hayvana kulak küpesi gibi küçük bir etiket takılır. Ahırdaki ana sensör bu etiketleri
              okur ve kaç hayvanın içeride, kaçının dışarıda olduğunu anlar.
            </p>
          </div>

          {/* İki parçalı sistem görseli */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

            {/* Sol: Hayvan etiketi */}
            <div className="rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-8">
              <div className="flex items-start gap-6">
                {/* Etiket görseli */}
                <div className="shrink-0 flex flex-col items-center gap-2">
                  {/* Ear tag illustration */}
                  <div className="relative">
                    <div className="w-16 h-20 rounded-t-full rounded-b-2xl bg-yellow-400/20 border-2 border-yellow-400/50 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-yellow-400/30 border border-yellow-400/60 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-yellow-300 font-mono">07</span>
                      </div>
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-3 bg-yellow-400/60 rounded-b-full" />
                  </div>
                  <p className="text-[11px] text-zinc-600 text-center font-mono">etiket #07</p>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Hayvan Etiketi</h3>
                  <p className="text-zinc-400 mb-5">
                    Her hayvana bir kez takılır, bir daha çıkarılmaz. Halihazırda kullandığınız
                    kulak küpesinin yanına ya da yerine geçer.
                  </p>
                  <div className="space-y-3">
                    {[
                      { ikon: "🔋", baslik: "Pil yok", acik: "Pasif etiket — enerji almak için pil takmaya gerek yok." },
                      { ikon: "🐄", baslik: "Hayvanı rahatsız etmez", acik: "Standart kulak küpesiyle aynı boyut ve ağırlık." },
                      { ikon: "⏳", baslik: "5+ yıl ömür", acik: "Bir kez takıldıktan sonra yıllarca bakım gerektirmez." },
                    ].map((m) => (
                      <div key={m.baslik} className="flex items-start gap-3">
                        <span className="text-lg shrink-0 mt-0.5">{m.ikon}</span>
                        <div>
                          <p className="text-sm font-semibold text-white">{m.baslik}</p>
                          <p className="text-sm text-zinc-500">{m.acik}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ: Ana sensör */}
            <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-8">
              <div className="flex items-start gap-6">
                {/* Sensör görseli */}
                <div className="shrink-0 flex flex-col items-center gap-2">
                  <div className="w-16 h-20 rounded-2xl bg-emerald-400/15 border-2 border-emerald-400/40 flex flex-col items-center justify-center gap-1.5 p-2">
                    <div className="w-8 h-1.5 rounded-full bg-emerald-400/50" />
                    <div className="w-6 h-1.5 rounded-full bg-emerald-400/30" />
                    <div className="w-8 h-1.5 rounded-full bg-emerald-400/50" />
                    <span className="w-2 h-2 rounded-full bg-emerald-400" style={{ animation: "pulse 2s ease-in-out infinite" }} />
                  </div>
                  <p className="text-[11px] text-zinc-600 text-center font-mono">ana sensör</p>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Ana Sensör (Ahıra Sabitlenir)</h3>
                  <p className="text-zinc-400 mb-5">
                    Ahırın duvarına ya da tavanına bir kez monte edilir. Hem ortam verilerini
                    (sıcaklık, nem) hem de etiket sinyallerini okur.
                  </p>
                  <div className="space-y-3">
                    {[
                      { ikon: "📡", baslik: "Etiketleri okur", acik: "Menzil içindeki tüm etiket numaralarını saniyeler içinde tespit eder." },
                      { ikon: "🔢", baslik: "Hayvan sayar", acik: "\"14 hayvandan 12'si içeride, 2'si dışarıda\" bilgisini anlık üretir." },
                      { ikon: "⚡", baslik: "Hem ölçer hem iletir", acik: "Sıcaklık ve nem ölçümü + hayvan sayımı tek cihazdan yapılır." },
                    ].map((m) => (
                      <div key={m.baslik} className="flex items-start gap-3">
                        <span className="text-lg shrink-0 mt-0.5">{m.ikon}</span>
                        <div>
                          <p className="text-sm font-semibold text-white">{m.baslik}</p>
                          <p className="text-sm text-zinc-500">{m.acik}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bağlantı diyagramı */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-lg font-semibold text-center mb-8 text-zinc-300">Sistemin Tamamı Nasıl Çalışır?</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              {[
                {
                  ikon: "🐄",
                  baslik: "Hayvan",
                  acik: "Kulağındaki etiket her 30 saniyede bir sinyal yayar",
                  renk: "border-yellow-500/30 bg-yellow-500/5",
                  etiketRenk: "text-yellow-400",
                },
                null,
                {
                  ikon: "📡",
                  baslik: "Ana Sensör",
                  acik: "Etiketleri okur, sıcaklık & nem ölçer, LoRa ile iletir",
                  renk: "border-emerald-500/30 bg-emerald-500/5",
                  etiketRenk: "text-emerald-400",
                },
                null,
                {
                  ikon: "🗼",
                  baslik: "Gateway",
                  acik: "Çiftliğe kurulu alıcı, veriyi internete taşır",
                  renk: "border-blue-500/30 bg-blue-500/5",
                  etiketRenk: "text-blue-400",
                },
                null,
                {
                  ikon: "📱",
                  baslik: "Telefonunuz",
                  acik: "Anlık sayım, alarm bildirimleri ve geçmiş kayıtlar",
                  renk: "border-purple-500/30 bg-purple-500/5",
                  etiketRenk: "text-purple-400",
                },
              ].map((item, i) =>
                item === null ? (
                  <div key={i} className="flex md:flex-col items-center justify-center">
                    <div className="hidden md:block text-zinc-700 text-2xl">→</div>
                    <div className="block md:hidden text-zinc-700 text-2xl">↓</div>
                  </div>
                ) : (
                  <div key={item.baslik} className={`rounded-2xl border ${item.renk} p-5 text-center flex-1 max-w-44`}>
                    <div className="text-3xl mb-2">{item.ikon}</div>
                    <p className={`text-sm font-bold mb-1 ${item.etiketRenk}`}>{item.baslik}</p>
                    <p className="text-xs text-zinc-500 leading-relaxed">{item.acik}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Kurulum */}
      <section className="border-b border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-xl mb-12">
            <h2 className="text-3xl font-bold">4 Adımda Kurulum</h2>
            <p className="mt-3 text-zinc-400">
              Elektrikçi gerektirmez. İnternet kablosu yok. Teknik bilgiye ihtiyaç yok.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { adim: "1", ikon: "📦", baslik: "Kutusundan Çıkar", acik: "Cihaz hazır gelir. Pili tak, kapağını kapat." },
              { adim: "2", ikon: "📍", baslik: "Ahıra Yerleştir", acik: "Duvara veya direğe sabitle. Elektrik kablosu gerekmez." },
              { adim: "3", ikon: "🏷️", baslik: "Etiketleri Tak", acik: "Her hayvana bir etiket takılır. Kulak küpesi gibi — bir kez, ömür boyu." },
              { adim: "4", ikon: "📱", baslik: "Telefondan İzle", acik: "Uygulama veya web arayüzünden sayımı ve sensör verilerini canlı görün." },
            ].map((item) => (
              <div key={item.adim} className="rounded-2xl border border-white/10 bg-white/5 p-6 relative">
                <span className="absolute top-4 right-4 text-xs text-zinc-700 font-mono font-bold">{item.adim}</span>
                <div className="text-3xl mb-4">{item.ikon}</div>
                <h4 className="font-semibold mb-1">{item.baslik}</h4>
                <p className="text-sm text-zinc-400">{item.acik}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teknik özellikler */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-8">Teknik Özellikler</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { baslik: "İletişim", deger: "LoRa — SIM kart gerekmez" },
              { baslik: "Menzil", deger: "Açık alanda 5–10 km" },
              { baslik: "Pil Ömrü", deger: "2–5 yıl" },
              { baslik: "Sıcaklık Sensörü", deger: "±0.5°C hassasiyet, -40°C ile +80°C" },
              { baslik: "Nem Sensörü", deger: "%0–100 RH, ±2% hassasiyet" },
              { baslik: "Varlık Sensörü", deger: "PIR hareket + alan taraması" },
              { baslik: "Güncelleme Sıklığı", deger: "Her 1–15 dakika (ayarlanabilir)" },
              { baslik: "Çalışma Sıcaklığı", deger: "-20°C ile +70°C" },
              { baslik: "Koruma Sınıfı", deger: "IP67 — suya ve toza dayanıklı" },
            ].map((item) => (
              <div key={item.baslik} className="flex justify-between items-center py-4 px-5 rounded-2xl border border-white/10 bg-white/5">
                <span className="text-zinc-500 text-sm">{item.baslik}</span>
                <span className="text-white font-medium text-sm text-right ml-4">{item.deger}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">Ahırınıza Kuralım</h2>
        <p className="mt-4 text-zinc-400 text-lg max-w-xl mx-auto">
          Kaç hayvan, ne büyüklükte ahır olduğunu söyleyin — size özel kurulum planı ve fiyat teklifi hazırlayalım.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/#iletisim" className="rounded-2xl bg-amber-400 px-7 py-3 text-black font-semibold hover:bg-amber-300 transition">
            Teklif Al
          </Link>
          <Link href="/projeler" className="rounded-2xl border border-white/20 px-7 py-3 hover:bg-white/5 transition">
            Diğer Projelere Bak
          </Link>
        </div>
      </section>
    </div>
  );
}
