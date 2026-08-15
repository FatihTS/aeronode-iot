import type { ComponentType } from "react";
import type { IconProps } from "@phosphor-icons/react";

type Capability = {
  Icon: ComponentType<IconProps>;
  title: string;
  tagline: string;
  points: string[];
};

type TechnologyCapabilitiesProps = {
  capabilities: Capability[];
};

/**
 * Four core capability areas as a large editorial composition — deliberately
 * not a 4-card icon grid. Each capability gets real weight: a big index
 * number, its own heading hierarchy, and a short list of concrete points,
 * laid out as a single wide row per capability rather than a tile grid.
 */
export default function TechnologyCapabilities({ capabilities }: TechnologyCapabilitiesProps) {
  return (
    <div className="divide-y divide-line border-t border-line">
      {capabilities.map((cap, i) => (
        <div key={cap.title} className="grid grid-cols-1 md:grid-cols-[auto_1fr_1.4fr] gap-6 md:gap-10 py-10 md:py-12 items-start">
          <span className="font-mono text-sm text-fg-muted/60">{String(i + 1).padStart(2, "0")}</span>

          <div className="flex items-start gap-4">
            <cap.Icon size={30} weight="duotone" className="text-accent shrink-0" aria-hidden="true" />
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-fg">{cap.title}</h3>
              <p className="mt-1 text-accent text-sm font-medium">{cap.tagline}</p>
            </div>
          </div>

          <ul className="space-y-2">
            {cap.points.map((p) => (
              <li key={p} className="text-fg-muted leading-relaxed flex gap-2">
                <span className="text-accent/60 shrink-0">—</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export type { Capability };
