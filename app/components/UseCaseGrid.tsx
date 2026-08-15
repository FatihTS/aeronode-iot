import type { ComponentType } from "react";
import type { IconProps } from "@phosphor-icons/react";

export type UseCaseItem = {
  Icon: ComponentType<IconProps>;
  title: string;
  body: string;
  accentClass?: string;
};

type UseCaseGridProps = {
  items: UseCaseItem[];
  columns?: 2 | 3 | 4;
};

/**
 * Small `[icon] title description` grid. Reserved for genuinely list-like
 * content (use cases, quick facts, FAQ-adjacent items) — NOT the default
 * shape for Technology/Engineering/Products, which read as large editorial
 * sections instead. See design plan for the reasoning.
 */
export default function UseCaseGrid({ items, columns = 4 }: UseCaseGridProps) {
  const colsClass =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 3
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div className={`grid grid-cols-1 ${colsClass} gap-5`}>
      {items.map((item) => (
        <div key={item.title} className="rounded-2xl border border-line bg-surface p-6">
          <item.Icon size={28} weight="duotone" className={`mb-4 ${item.accentClass ?? "text-accent"}`} aria-hidden="true" />
          <h3 className="font-semibold text-fg mb-2">{item.title}</h3>
          <p className="text-sm text-fg-muted leading-relaxed">{item.body}</p>
        </div>
      ))}
    </div>
  );
}
