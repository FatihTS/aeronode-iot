const STAGES = [
  { label: "Hardware", body: "Devre şeması, PCB tasarımı, bileşen seçimi." },
  { label: "Firmware", body: "Özel gömülü yazılım, gerçek zamanlı işleme." },
  { label: "RF", body: "Anten tasarımı, frekans planlama, saha testleri." },
  { label: "Power", body: "Uyku odaklı güç yönetimi, pil ömrü optimizasyonu." },
  { label: "Validation", body: "Ortam testleri, dayanıklılık ve doğrulama." },
  { label: "Field", body: "Sahada kurulum, uzun süreli izleme ve iyileştirme." },
];

/**
 * "Engineered from the ground up" pipeline — horizontal steps on desktop,
 * vertical stepper on mobile. Communicates systems-engineering depth
 * (hardware→firmware→RF→power→validation→field) rather than "we resell
 * sensors."
 */
export default function EngineeringPipeline() {
  return (
    <ol className="flex flex-col md:flex-row md:items-stretch gap-0 rounded-3xl border border-line bg-surface overflow-hidden">
      {STAGES.map((stage, i) => (
        <li
          key={stage.label}
          className={`flex-1 p-6 md:p-8 ${i < STAGES.length - 1 ? "border-b md:border-b-0 md:border-r border-line" : ""}`}
        >
          <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mt-2 text-lg font-bold text-fg">{stage.label}</h3>
          <p className="mt-2 text-sm text-fg-muted leading-relaxed">{stage.body}</p>
        </li>
      ))}
    </ol>
  );
}
