import type { ReactNode } from "react";

type DataVizPanelProps = {
  label: string;
  title: string;
  live?: boolean;
  children: ReactNode;
};

/**
 * Abstracted data-visualization panel — an instrument-panel presentation of
 * example telemetry, not a literal browser-window/phone-screenshot mockup.
 * Used in place of the old fake "app screenshot" chrome, since that implied
 * a specific software product that doesn't concretely exist yet.
 */
export default function DataVizPanel({ label, title, live = true, children }: DataVizPanelProps) {
  return (
    <div className="rounded-3xl border border-line bg-surface overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-line">
        <div>
          <p className="text-[11px] uppercase tracking-widest text-fg-muted/70">{label}</p>
          <p className="text-sm font-bold text-fg mt-0.5">{title}</p>
        </div>
        {live && (
          <div className="flex items-center gap-1.5 text-xs text-fg-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" style={{ animation: "pulse 2s ease-in-out infinite" }} />
            Canlı örnek veri
          </div>
        )}
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}
