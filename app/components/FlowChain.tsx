import type { ComponentType } from "react";
import type { IconProps } from "@phosphor-icons/react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export type FlowStage = {
  Icon: ComponentType<IconProps>;
  label: string;
  sub: string;
};

type FlowChainProps = {
  stages: FlowStage[];
};

/**
 * Generic left-to-right node chain (A → B → C → ...), flexbox-based so it
 * re-layouts to a vertical stepper on mobile instead of shrinking. Used by
 * PlatformDiagram (Sensor→Node→LoRaWAN→Gateway→App) and by product pages
 * that need their own connectivity chain (e.g. Animal→Sensor→Gateway→Phone).
 *
 * Stays a Server Component (icon component references can't cross the
 * server/client boundary as props) — the arrow's pulse uses Tailwind's
 * `motion-safe:` variant instead of a JS reduced-motion hook, so no
 * "use client" is needed here at all.
 */
export default function FlowChain({ stages }: FlowChainProps) {
  return (
    <div className="rounded-3xl border border-line bg-surface p-8 sm:p-12">
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-0">
        {stages.map((stage, i) => (
          <div key={stage.label} className="flex flex-col md:flex-row items-center md:flex-1">
            <div className="flex flex-col items-center text-center gap-3 px-2 py-4 md:py-0">
              <div className="w-16 h-16 rounded-2xl border border-line bg-white/5 flex items-center justify-center">
                <stage.Icon size={28} weight="duotone" className="text-accent" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-bold text-fg">{stage.label}</p>
                <p className="text-xs text-fg-muted mt-0.5 max-w-28">{stage.sub}</p>
              </div>
            </div>

            {i < stages.length - 1 && (
              <div className="flex items-center justify-center shrink-0 py-2 md:py-0 md:px-3">
                <ArrowRight
                  size={18}
                  weight="bold"
                  className="text-accent/50 rotate-90 md:rotate-0 motion-safe:animate-pulse"
                  aria-hidden="true"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
