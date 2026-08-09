import Link from "next/link";

export default function SuSeviyesiPage() {
  return (
    <div className="min-h-dvh bg-black/65 text-white">

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <Link href="/projeler" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition mb-8">
            ← Tüm Projeler
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30">Su Yönetimi</span>
            <span className="text-xs text-zinc-500">Pil Destekli • LoRa Kablosuz • SIM Kart Yok</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Su Seviyesi
                <span className="block text-blue-400">Ölçüm Cihazı</span>
              </h1>
              <p className="mt-5 text-xl text-zinc-400 leading-relaxed">
                Sulama mevsiminde kuyunun bitmesi, hasatı mahvedebilir.
                Sensörümüz seviye düşmeye başlar başlamaz sizi uyarır —
                saatler geçmeden önce.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="flex flex-col items-center">
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

      {/* RF İletim + Dashboard */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-300 mb-4">
              KABLOSUZ VERİ AKTARIMI
            </div>
            <h2 className="text-3xl font-bold">Sinyal Tel Olmadan Kilometrelerce Gider</h2>
            <p className="mt-4 text-zinc-400 text-lg leading-relaxed">
              Sensör kuyunun başındadır, siz evinizdesinizdir. Aralarında kablo, GSM hattı
              ya da elektrik bağlantısı yoktur — sadece havadan geçen LoRa radyo sinyali.
            </p>
          </div>

          {/* RF Anten Diyagramı */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 mb-12 overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

            <div className="relative flex flex-col sm:flex-row items-center gap-6">

              {/* Sol anten: Sensör düğümü */}
              <div className="flex flex-col items-center shrink-0">
                <div className="relative flex items-center justify-center" style={{ width: "148px", height: "148px" }}>
                  {/* Genişleyen halkalar */}
                  {[148, 112, 80, 52].map((s, i) => (
                    <div key={s} className="absolute rounded-full border border-blue-400/25" style={{ width: s, height: s, animation: `ping ${2.8 + i * 0.45}s ease-out ${i * 0.6}s infinite` }} />
                  ))}
                  {/* Anten şekli */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mb-0.5" style={{ animation: "pulse 1.5s ease-in-out infinite", boxShadow: "0 0 8px rgba(96,165,250,0.8)" }} />
                    <div className="relative" style={{ width: "44px", height: "20px" }}>
                      <div className="absolute top-0 left-1/2 -translate-x-px w-0.5 h-full bg-blue-400/80" />
                      <div className="absolute top-0 right-1/2 w-5 h-0.5 bg-blue-400/80" style={{ transformOrigin: "right center", transform: "rotate(-38deg)" }} />
                      <div className="absolute top-0 left-1/2 w-5 h-0.5 bg-blue-400/80" style={{ transformOrigin: "left center", transform: "rotate(38deg)" }} />
                    </div>
                    <div className="relative" style={{ width: "32px", height: "16px" }}>
                      <div className="absolute top-0 left-1/2 -translate-x-px w-0.5 h-full bg-blue-400/75" />
                      <div className="absolute top-0 right-1/2 w-3.5 h-0.5 bg-blue-400/65" style={{ transformOrigin: "right center", transform: "rotate(-38deg)" }} />
                      <div className="absolute top-0 left-1/2 w-3.5 h-0.5 bg-blue-400/65" style={{ transformOrigin: "left center", transform: "rotate(38deg)" }} />
                    </div>
                    <div className="w-px h-8 bg-gradient-to-b from-blue-400/70 to-zinc-600/50" />
                    <div className="w-9 h-1.5 rounded-sm bg-zinc-700 mt-0.5" />
                    <div className="w-7 h-5 rounded-md bg-zinc-800 border border-zinc-700 mt-0.5 flex items-center justify-center">
                      <div className="w-3 h-1 rounded-sm bg-blue-500/40" />
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-sm font-bold text-blue-300">Su Sensörü</p>
                  <p className="text-xs text-zinc-500 mt-0.5">Kuyunun yanı</p>
                  <div className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 px-2.5 py-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" style={{ animation: "pulse 2s ease-in-out infinite" }} />
                    <span className="text-[10px] text-blue-300">Yayın yapıyor</span>
                  </div>
                </div>
              </div>

              {/* Orta: Sinyal yolu */}
              <div className="flex-1 flex flex-col items-center gap-3 min-w-0">
                {/* Giden paket animasyonu */}
                <div className="relative w-full" style={{ height: "24px" }}>
                  <div className="absolute inset-y-1/2 left-0 right-0 -translate-y-px h-px border-t border-dashed border-blue-500/30" />
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400/70" style={{ left: `${8 + i * 22}%`, animation: `ping 2.8s ease-out ${i * 0.65}s infinite`, boxShadow: "0 0 6px rgba(96,165,250,0.5)" }} />
                  ))}
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/25 px-4 py-2">
                  <span className="text-blue-400">📶</span>
                  <div>
                    <p className="text-sm font-bold text-blue-300 leading-none">LoRa 868 MHz</p>
                    <p className="text-[10px] text-blue-400/60 mt-0.5">2–10 km · SIM kart yok</p>
                  </div>
                </div>
                <div className="relative w-full" style={{ height: "24px" }}>
                  <div className="absolute inset-y-1/2 left-0 right-0 -translate-y-px h-px border-t border-dashed border-blue-500/15" />
                </div>
              </div>

              {/* Sağ anten: Gateway */}
              <div className="flex flex-col items-center shrink-0">
                <div className="relative flex items-center justify-center" style={{ width: "148px", height: "148px" }}>
                  {[148, 112, 80, 52].map((s, i) => (
                    <div key={s} className="absolute rounded-full border border-emerald-400/22" style={{ width: s, height: s, animation: `ping ${2.8 + i * 0.45}s ease-out ${i * 0.6 + 1.4}s infinite` }} />
                  ))}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 mb-0.5" style={{ animation: "pulse 1.8s ease-in-out infinite", boxShadow: "0 0 10px rgba(52,211,153,0.8)" }} />
                    <div className="relative" style={{ width: "48px", height: "22px" }}>
                      <div className="absolute top-0 left-1/2 -translate-x-px w-0.5 h-full bg-emerald-400/80" />
                      <div className="absolute top-0 right-1/2 w-5 h-0.5 bg-emerald-400/80" style={{ transformOrigin: "right center", transform: "rotate(-33deg)" }} />
                      <div className="absolute top-0 left-1/2 w-5 h-0.5 bg-emerald-400/80" style={{ transformOrigin: "left center", transform: "rotate(33deg)" }} />
                    </div>
                    <div className="relative" style={{ width: "36px", height: "18px" }}>
                      <div className="absolute top-0 left-1/2 -translate-x-px w-0.5 h-full bg-emerald-400/70" />
                      <div className="absolute top-0 right-1/2 w-4 h-0.5 bg-emerald-400/65" style={{ transformOrigin: "right center", transform: "rotate(-33deg)" }} />
                      <div className="absolute top-0 left-1/2 w-4 h-0.5 bg-emerald-400/65" style={{ transformOrigin: "left center", transform: "rotate(33deg)" }} />
                    </div>
                    <div className="relative" style={{ width: "24px", height: "14px" }}>
                      <div className="absolute top-0 left-1/2 -translate-x-px w-0.5 h-full bg-emerald-400/60" />
                      <div className="absolute top-0 right-1/2 w-2.5 h-0.5 bg-emerald-400/50" style={{ transformOrigin: "right center", transform: "rotate(-33deg)" }} />
                      <div className="absolute top-0 left-1/2 w-2.5 h-0.5 bg-emerald-400/50" style={{ transformOrigin: "left center", transform: "rotate(33deg)" }} />
                    </div>
                    <div className="w-px h-7 bg-gradient-to-b from-emerald-400/70 to-zinc-600/50" />
                    <div className="w-10 h-1.5 rounded-sm bg-zinc-700 mt-0.5" />
                    <div className="w-8 h-6 rounded-md bg-zinc-800 border border-zinc-700 mt-0.5 flex items-center justify-center">
                      <div className="w-3 h-1 rounded-sm bg-emerald-500/40" />
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-sm font-bold text-emerald-300">Gateway Alıcı</p>
                  <p className="text-xs text-zinc-500 mt-0.5">Evinizde ya da çiftlikte</p>
                  <div className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ animation: "pulse 2s ease-in-out 0.5s infinite" }} />
                    <span className="text-[10px] text-emerald-300">Sinyal alınıyor</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Alt bilgi satırı */}
            <div className="mt-10 pt-6 border-t border-white/[0.05] grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { ikon: "📡", renk: "text-blue-400", baslik: "868 MHz LoRa", acik: "GSM'den 10× daha uzun menzil. Bina duvarlarından ve engebeli araziden geçer." },
                { ikon: "🔋", renk: "text-yellow-400", baslik: "Ultra düşük güç", acik: "Bir LoRa paketi saniyenin binde birinde iletilir; sensör hemen uyku moduna döner. Pil yıllarca yetişir." },
                { ikon: "🔐", renk: "text-purple-400", baslik: "AES-128 şifreli", acik: "Her paket uçtan uca şifreli gönderilir. Üçüncü taraflar veriye erişemez." },
              ].map((item) => (
                <div key={item.baslik} className="flex items-start gap-3">
                  <span className={`text-xl shrink-0 mt-0.5 ${item.renk}`}>{item.ikon}</span>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.baslik}</p>
                    <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">{item.acik}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard + Mobil */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_225px] gap-6 items-start">

            {/* Masaüstü browser */}
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)" }}>
              {/* Browser chrome */}
              <div className="flex items-center gap-3 px-4 py-2.5 border-b" style={{ background: "#1c1c1e", borderColor: "rgba(255,255,255,0.06)" }}>
                <div className="flex gap-1.5 shrink-0">
                  <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
                </div>
                <div className="flex-1 flex items-center gap-2 rounded-lg px-3 py-1.5 text-[11px] font-mono" style={{ background: "#141416", color: "#71717a" }}>
                  <span style={{ color: "#22c55e", fontSize: "10px" }}>●</span>
                  kargu.com.tr/panel/su-yonetimi
                </div>
              </div>

              {/* App shell */}
              <div className="flex" style={{ minHeight: "530px", background: "#0a0a0c" }}>

                {/* Sidebar */}
                <div className="w-46 shrink-0 flex flex-col border-r" style={{ width: "180px", background: "#0f0f12", borderColor: "rgba(255,255,255,0.05)" }}>
                  <div className="px-4 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)" }}>
                        <span className="text-[11px] font-bold text-blue-400">K</span>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-white">Kargu</p>
                        <div className="flex items-center gap-1 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ animation: "pulse 2s ease-in-out infinite" }} />
                          <p className="text-[9px] text-zinc-500">Canlı bağlantı</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Lokasyonlar */}
                  <div className="px-2 py-3">
                    <p className="text-[9px] uppercase tracking-widest px-2 mb-2" style={{ color: "#3f3f46" }}>Su Kaynakları</p>
                    {[
                      { ikon: "🌊", label: "Kuyu", seviye: 18, kritik: true },
                      { ikon: "🏗️", label: "Su Deposu", seviye: 62, kritik: false },
                      { ikon: "🌾", label: "Sulama Havuzu", seviye: 44, kritik: false },
                    ].map((loc) => (
                      <div key={loc.label} className="flex items-center justify-between px-2 py-2 rounded-xl mb-0.5" style={loc.kritik ? { background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.15)" } : {}}>
                        <div className="flex items-center gap-2">
                          <span className="text-xs">{loc.ikon}</span>
                          <span className="text-[11px]" style={{ color: loc.kritik ? "#fca5a5" : "#a1a1aa" }}>{loc.label}</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold" style={{ color: loc.kritik ? "#f87171" : "#34d399" }}>%{loc.seviye}</span>
                      </div>
                    ))}
                  </div>

                  {/* Nav */}
                  <div className="px-2 mt-1 space-y-0.5">
                    <p className="text-[9px] uppercase tracking-widest px-2 mb-2" style={{ color: "#3f3f46" }}>Menü</p>
                    {[
                      { ikon: "📊", label: "Genel Bakış", aktif: true },
                      { ikon: "📈", label: "Trend & Grafik", aktif: false },
                      { ikon: "🔔", label: "Alarmlar", aktif: false },
                      { ikon: "⚙", label: "Ayarlar", aktif: false },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-2 px-3 py-2 rounded-xl text-[11px]" style={item.aktif ? { background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.22)", color: "#93c5fd", fontWeight: 600 } : { color: "#52525b" }}>
                        <span>{item.ikon}</span>
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Alarm pill */}
                  <div className="mt-auto px-3 pb-4">
                    <div className="rounded-xl px-3 py-2.5" style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.18)" }}>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-400" style={{ animation: "pulse 1s ease-in-out infinite" }} />
                        <p className="text-[10px] font-semibold text-red-300">Kritik alarm</p>
                      </div>
                      <p className="text-[9px] mt-0.5" style={{ color: "#52525b" }}>Kuyu · %18 · 09:47</p>
                    </div>
                  </div>
                </div>

                {/* Ana panel */}
                <div className="flex-1 flex flex-col overflow-hidden">

                  {/* Alert banner */}
                  <div className="flex items-center gap-3 px-5 py-2.5 border-b shrink-0" style={{ background: "rgba(239,68,68,0.06)", borderColor: "rgba(239,68,68,0.15)" }}>
                    <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" style={{ animation: "pulse 1s ease-in-out infinite" }} />
                    <p className="text-[11px] flex-1" style={{ color: "#fca5a5" }}>
                      <span className="font-bold">Kritik Uyarı —</span>
                      <span style={{ color: "rgba(252,165,165,0.7)" }}> Kuyu su seviyesi %18'e düştü. Pompa kuruya çekebilir!</span>
                      <span className="ml-2 font-mono" style={{ color: "rgba(252,165,165,0.3)", fontSize: "10px" }}>09:47</span>
                    </p>
                    <span className="text-[10px] px-2 py-0.5 rounded-lg shrink-0" style={{ color: "#71717a", border: "1px solid rgba(255,255,255,0.08)" }}>Kapat</span>
                  </div>

                  <div className="flex-1 p-4 space-y-3 overflow-hidden">

                    {/* Başlık satırı */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest" style={{ color: "#3f3f46" }}>Su Yönetimi Paneli</p>
                        <p className="text-[14px] font-bold text-white mt-0.5">Genel Bakış <span className="font-normal" style={{ color: "#52525b" }}>· 3 kaynak</span></p>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px]" style={{ color: "#52525b" }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" style={{ animation: "pulse 2s ease-in-out infinite" }} />
                        Canlı
                      </div>
                    </div>

                    {/* Üç kaynak kartı */}
                    <div className="grid grid-cols-3 gap-2.5">
                      {[
                        { ikon: "🌊", baslik: "Kuyu", seviye: 18, mevcut: "1.4m", max: "8m derinlik", trend: "↓ düşüyor", valColor: "#f87171", bg: "rgba(239,68,68,0.07)", border: "rgba(239,68,68,0.25)", bar: "linear-gradient(90deg,#ef4444,#f87171)", glow: "0 0 20px rgba(239,68,68,0.1)" },
                        { ikon: "🏗️", baslik: "Su Deposu", seviye: 62, mevcut: "31 kL", max: "50 kL kapasite", trend: "→ sabit", valColor: "#60a5fa", bg: "rgba(59,130,246,0.07)", border: "rgba(59,130,246,0.2)", bar: "linear-gradient(90deg,#2563eb,#60a5fa)", glow: "none" },
                        { ikon: "🌾", baslik: "Sulama Havuzu", seviye: 44, mevcut: "52.8 kL", max: "120 kL kapasite", trend: "↓ -3%/gün", valColor: "#a3e635", bg: "rgba(163,230,53,0.05)", border: "rgba(163,230,53,0.15)", bar: "linear-gradient(90deg,#65a30d,#a3e635)", glow: "none" },
                      ].map((s) => (
                        <div key={s.baslik} className="rounded-2xl p-4" style={{ background: s.bg, border: `1px solid ${s.border}`, boxShadow: s.glow }}>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-base">{s.ikon}</span>
                            <span className="text-[9px] font-mono" style={{ color: s.valColor }}>{s.trend}</span>
                          </div>
                          <div className="flex items-end gap-2.5 mb-2">
                            {/* Mini depo görseli */}
                            <div className="w-8 rounded-lg border flex items-end overflow-hidden shrink-0" style={{ height: "56px", borderColor: s.border, background: "rgba(0,0,0,0.3)" }}>
                              <div className="w-full rounded-b-lg" style={{ height: `${s.seviye}%`, background: s.bar }} />
                            </div>
                            <div>
                              <p className="text-[20px] font-bold leading-none" style={{ color: s.valColor }}>%{s.seviye}</p>
                              <p className="text-[10px] mt-0.5" style={{ color: "#52525b" }}>{s.mevcut}</p>
                              <p className="text-[9px]" style={{ color: "#3f3f46" }}>{s.max}</p>
                            </div>
                          </div>
                          <p className="text-[11px] font-semibold text-white mb-1.5">{s.baslik}</p>
                          <div className="h-1 rounded-full" style={{ background: "#18181b" }}>
                            <div className="h-1 rounded-full" style={{ width: `${s.seviye}%`, background: s.bar }} />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Alt satır: trend + alarmlar */}
                    <div className="grid grid-cols-2 gap-3">
                      {/* Kuyu 7 günlük trend */}
                      <div className="rounded-2xl p-4" style={{ background: "#0f0f12", border: "1px solid rgba(255,255,255,0.06)" }}>
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: "#52525b" }}>Kuyu — 7 Günlük Trend</p>
                          <span className="text-[9px] font-mono" style={{ color: "#f87171" }}>↓ %72 → %18</span>
                        </div>
                        <div className="flex items-end gap-1.5 h-14">
                          {[72, 65, 58, 48, 38, 26, 18].map((v, i) => (
                            <div key={i} className="flex-1 rounded-t-sm" style={{
                              height: `${v}%`,
                              background: i === 6 ? "linear-gradient(180deg,#f87171,#ef4444)" : i >= 5 ? "rgba(248,113,113,0.5)" : "rgba(59,130,246,0.4)",
                              boxShadow: i === 6 ? "0 0 10px rgba(239,68,68,0.4)" : "none",
                            }} />
                          ))}
                        </div>
                        <div className="flex justify-between mt-1.5 text-[9px] font-mono" style={{ color: "#3f3f46" }}>
                          {["Pts", "Sal", "Çar", "Per", "Cum", "Cmt"].map(g => <span key={g}>{g}</span>)}
                          <span style={{ color: "#f87171" }}>Bug</span>
                        </div>
                      </div>

                      {/* Alarm eşikleri */}
                      <div className="rounded-2xl p-4" style={{ background: "#0f0f12", border: "1px solid rgba(255,255,255,0.06)" }}>
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: "#52525b" }}>Alarm Eşikleri</p>
                          <span className="text-[9px] px-2 py-0.5 rounded-full" style={{ color: "#f87171", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)" }}>1 aktif</span>
                        </div>
                        <div className="space-y-2">
                          {[
                            { ad: "Kuyu", esik: "%20", aktif: true },
                            { ad: "Su Deposu", esik: "%15", aktif: false },
                            { ad: "Sulama Havuzu", esik: "%20", aktif: false },
                          ].map((a) => (
                            <div key={a.ad} className="flex items-center justify-between rounded-xl px-3 py-2.5" style={a.aktif ? { background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" } : { background: "#18181b", border: "1px solid rgba(255,255,255,0.04)" }}>
                              <div>
                                <p className="text-[11px] font-medium" style={{ color: a.aktif ? "#fca5a5" : "#a1a1aa" }}>{a.ad}</p>
                                <p className="text-[9px]" style={{ color: "#52525b" }}>Eşik: {a.esik}</p>
                              </div>
                              <div className="flex items-center px-0.5 rounded-full" style={{ width: "28px", height: "14px", background: a.aktif ? "#ef4444" : "#3f3f46" }}>
                                <div className="rounded-full bg-white" style={{ width: "10px", height: "10px", transform: a.aktif ? "translateX(14px)" : "translateX(0)" }} />
                              </div>
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
                    <span className="text-[11px] font-semibold text-white">09:47</span>
                    <div className="flex items-center gap-1">
                      <div className="flex gap-px items-end" style={{ height: "12px" }}>
                        {[3, 4, 5, 5].map((h, i) => <div key={i} className="w-1 rounded-sm bg-white" style={{ height: `${h * 2}px`, opacity: i < 3 ? 1 : 0.3 }} />)}
                      </div>
                      <div className="ml-1 w-6 h-3 rounded-sm border border-white/60 flex items-center px-0.5">
                        <div className="h-1.5 rounded-sm bg-red-400" style={{ width: "30%" }} />
                      </div>
                    </div>
                  </div>

                  {/* App header */}
                  <div className="flex items-center justify-between px-4 py-2.5 border-b" style={{ background: "#111113", borderColor: "rgba(255,255,255,0.06)" }}>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest" style={{ color: "#3f3f46" }}>Kargu Teknoloji</p>
                      <p className="text-[13px] font-bold text-white">Su Yönetimi</p>
                    </div>
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.35)" }}>
                        <span className="text-[14px]">🔔</span>
                      </div>
                      <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold text-white" style={{ background: "#ef4444", fontSize: "8px" }}>1</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-3 py-2.5 space-y-2.5" style={{ background: "#0a0a0c" }}>

                    {/* Kritik alarm */}
                    <div className="rounded-2xl p-3.5" style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)", boxShadow: "0 0 20px rgba(239,68,68,0.06)" }}>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-400" style={{ animation: "pulse 1s ease-in-out infinite" }} />
                        <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: "#fca5a5" }}>Kritik Seviye</span>
                      </div>
                      <p className="text-[12px] leading-relaxed" style={{ color: "#d4d4d8" }}>
                        Kuyu <span className="font-mono font-bold" style={{ color: "#f87171" }}>%18</span>'e düştü. Pompa için yetersiz olabilir.
                      </p>
                    </div>

                    {/* Üç mini kart */}
                    <div className="grid grid-cols-3 gap-1.5">
                      {[
                        { ikon: "🌊", ad: "Kuyu", seviye: 18, renk: "#f87171", bar: "#ef4444" },
                        { ikon: "🏗️", ad: "Depo", seviye: 62, renk: "#60a5fa", bar: "#3b82f6" },
                        { ikon: "🌾", ad: "Havuz", seviye: 44, renk: "#a3e635", bar: "#84cc16" },
                      ].map((s) => (
                        <div key={s.ad} className="rounded-xl p-2 text-center" style={{ background: "#111113", border: "1px solid rgba(255,255,255,0.06)" }}>
                          <span className="text-sm">{s.ikon}</span>
                          <p className="text-[13px] font-bold mt-0.5" style={{ color: s.renk }}>%{s.seviye}</p>
                          <p className="text-[9px] mt-0.5" style={{ color: "#52525b" }}>{s.ad}</p>
                          <div className="mt-1.5 h-1 rounded-full" style={{ background: "#1c1c1f" }}>
                            <div className="h-1 rounded-full" style={{ width: `${s.seviye}%`, background: s.bar }} />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Kuyu detay */}
                    <div className="rounded-2xl p-3" style={{ background: "#111113", border: "1px solid rgba(255,255,255,0.07)" }}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px]" style={{ color: "#52525b" }}>🌊 Kuyu — Detay</span>
                        <span className="text-[9px] font-mono" style={{ color: "#f87171" }}>↓ Düşüyor</span>
                      </div>
                      <div className="flex items-end gap-3">
                        <div className="w-10 rounded-xl border overflow-hidden shrink-0 flex items-end" style={{ height: "60px", borderColor: "rgba(239,68,68,0.3)", background: "rgba(0,0,0,0.4)" }}>
                          <div className="w-full" style={{ height: "18%", background: "linear-gradient(180deg,#f87171,#ef4444)" }} />
                        </div>
                        <div>
                          <p className="text-[22px] font-bold leading-none" style={{ color: "#f87171" }}>%18</p>
                          <p className="text-[10px] mt-1" style={{ color: "#52525b" }}>1.4m su var</p>
                          <p className="text-[10px]" style={{ color: "#3f3f46" }}>Derinlik: 8m</p>
                        </div>
                      </div>
                      <div className="flex items-end gap-0.5 mt-3" style={{ height: "24px" }}>
                        {[72, 65, 58, 48, 38, 26, 18].map((v, i) => (
                          <div key={i} className="flex-1 rounded-sm" style={{ height: `${v}%`, background: i === 6 ? "#f87171" : i >= 5 ? "rgba(248,113,113,0.4)" : "rgba(59,130,246,0.35)" }} />
                        ))}
                      </div>
                    </div>

                    {/* Son olaylar */}
                    <div className="rounded-2xl p-3" style={{ background: "#111113", border: "1px solid rgba(255,255,255,0.07)" }}>
                      <p className="text-[9px] font-semibold uppercase tracking-widest mb-2" style={{ color: "#3f3f46" }}>Son Olaylar</p>
                      <div className="space-y-1.5">
                        {[
                          { saat: "09:47", mesaj: "Kuyu %20 eşiğini geçti", renk: "#f87171" },
                          { saat: "09:32", mesaj: "Kuyu %25 uyarısı", renk: "#fb923c" },
                          { saat: "08:10", mesaj: "Depo %62 normal", renk: "#52525b" },
                        ].map((l) => (
                          <div key={l.saat} className="flex items-center gap-2 text-[10px]">
                            <span className="font-mono shrink-0" style={{ color: "#3f3f46" }}>{l.saat}</span>
                            <span style={{ color: l.renk }}>{l.mesaj}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom nav */}
                  <div className="flex items-center justify-around px-2 py-2 border-t" style={{ background: "#111113", borderColor: "rgba(255,255,255,0.06)" }}>
                    {[
                      { ikon: "📊", label: "Özet", aktif: true },
                      { ikon: "📈", label: "Trend", aktif: false },
                      { ikon: "🔔", label: "Alarm", aktif: false },
                      { ikon: "⚙", label: "Ayar", aktif: false },
                    ].map((n) => (
                      <div key={n.label} className="flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl" style={n.aktif ? { background: "rgba(59,130,246,0.15)" } : {}}>
                        <span className="text-[12px]" style={{ color: n.aktif ? "#60a5fa" : "#3f3f46" }}>{n.ikon}</span>
                        <span className="text-[8px]" style={{ color: n.aktif ? "#93c5fd" : "#3f3f46" }}>{n.label}</span>
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
        </div>
      </section>

      {/* Kullanım alanları */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-10">Nerede Kullanılır?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { ikon: "🏗️", baslik: "Su Deposu", acik: "Evin, çiftliğin veya saha tesisinin su deposunu 7/24 izleyin. Dolmadan ve taşmadan önce haberdar olun." },
              { ikon: "🌊", baslik: "Kuyu", acik: "Sulama mevsiminde kuyunun seviyesini takip edin. Pompa çalışırken kuyu bitmeden önce uyarı alın." },
              { ikon: "🌾", baslik: "Sulama Havuzu", acik: "Tarla sulama rezervuarının doluluk oranını izleyin, sulama planınızı veriye göre yapın." },
              { ikon: "🏠", baslik: "Köy & Mezra", acik: "Şehir suyuna bağlı olmayan köy ve mezralarda hayati önem taşıyan su kaynaklarını uzaktan izleyin." },
            ].map((item) => (
              <div key={item.baslik} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-3xl mb-4">{item.ikon}</div>
                <h3 className="font-semibold mb-2">{item.baslik}</h3>
                <p className="text-sm text-zinc-400">{item.acik}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faydalar + Teknik */}
      <section className="border-b border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-8">Hayatınızı Nasıl Kolaylaştırır?</h2>
              <div className="space-y-5">
                {[
                  { ikon: "🔔", baslik: "Kritik seviye alarmı", acik: "Su %20'nin altına düştüğünde telefonunuza bildirim gelir. Kendi eşiğinizi siz belirlersiniz." },
                  { ikon: "📊", baslik: "Tüketim takibi", acik: "Haftalık ve aylık tüketim grafikleri. Sulama maliyetlerini düşürmek için hangi günler ne kadar su gittiğini görün." },
                  { ikon: "💸", baslik: "Su israfını önler", acik: "Depo dolunca pompa durmadıysa sistem anında uyarır. Su ve elektrik tasarrufu sağlar." },
                  { ikon: "📍", baslik: "Uzaktan erişim", acik: "İstanbul'dayken köydeki kuyunuzu, şehirdeyken çiftliğinizdeki havuzu izleyebilirsiniz." },
                  { ikon: "📜", baslik: "Otomatik kayıt", acik: "Tüm ölçümler bulutta saklanır. Geçmiş seviye verileri her zaman erişilebilir durumda." },
                ].map((item) => (
                  <div key={item.baslik} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-lg shrink-0">{item.ikon}</div>
                    <div>
                      <p className="font-semibold">{item.baslik}</p>
                      <p className="text-sm text-zinc-400 mt-0.5">{item.acik}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Teknik Özellikler</h2>
              <div className="space-y-3">
                {[
                  { baslik: "Ölçüm Yöntemi", deger: "Ultrasonik / basınç sensörü" },
                  { baslik: "Ölçüm Aralığı", deger: "0 – 10 metre" },
                  { baslik: "Hassasiyet", deger: "±1 cm" },
                  { baslik: "İletişim", deger: "LoRa — SIM kart yok" },
                  { baslik: "Pil Ömrü", deger: "2–4 yıl" },
                  { baslik: "Koruma Sınıfı", deger: "IP68 — tam su geçirmez" },
                  { baslik: "Çalışma Sıcaklığı", deger: "-20°C ile +60°C" },
                  { baslik: "Güncelleme Sıklığı", deger: "Her 5–60 dakika (ayarlanabilir)" },
                  { baslik: "Montaj", deger: "Depo veya kuyu kenarına; kablo yok" },
                ].map((item) => (
                  <div key={item.baslik} className="flex justify-between py-3 px-4 rounded-xl border border-white/10 bg-white/5">
                    <span className="text-zinc-500 text-sm">{item.baslik}</span>
                    <span className="text-white text-sm font-medium">{item.deger}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">Su Kaynaklarınızı İzlemeye Başlayın</h2>
        <p className="mt-4 text-zinc-400 text-lg">
          Kaç depo veya kuyu olduğunu ve yaklaşık derinliğini söyleyin — size özel teklif hazırlayalım.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/#iletisim" className="rounded-2xl bg-amber-400 px-7 py-3 text-black font-semibold hover:bg-amber-300 transition">Teklif Al</Link>
          <Link href="/projeler" className="rounded-2xl border border-white/20 px-7 py-3 hover:bg-white/5 transition">Diğer Projelere Bak</Link>
        </div>
      </section>
    </div>
  );
}
