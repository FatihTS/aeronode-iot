import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  eyebrowColorClass?: string;
  title?: ReactNode;
  intro?: ReactNode;
  tone?: "default" | "tinted";
  border?: "top" | "bottom" | "none";
  headerAlign?: "left" | "center";
  children: ReactNode;
};

/**
 * Standard section shell: eyebrow + heading + intro, then whatever content
 * the caller passes in. `tone="tinted"` gives the alternating zebra-stripe
 * background used to separate adjacent sections without a hard rule.
 */
export default function Section({
  id,
  eyebrow,
  eyebrowColorClass = "border-accent/30 bg-accent/10 text-accent",
  title,
  intro,
  tone = "default",
  border = "bottom",
  headerAlign = "left",
  children,
}: SectionProps) {
  const borderClass =
    border === "bottom" ? "border-b border-line" : border === "top" ? "border-t border-line" : "";
  const toneClass = tone === "tinted" ? "bg-white/[0.03]" : "";
  const headerWrapClass = headerAlign === "center" ? "max-w-2xl mx-auto text-center mb-16" : "max-w-2xl mb-16";

  return (
    <section id={id} className={`${borderClass} ${toneClass}`}>
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        {(eyebrow || title || intro) && (
          <div className={headerWrapClass}>
            {eyebrow && (
              <div className={`inline-flex items-center rounded-full border px-4 py-1 text-sm mb-5 ${eyebrowColorClass}`}>
                {eyebrow}
              </div>
            )}
            {title && <h2 className="text-3xl md:text-4xl font-bold leading-snug">{title}</h2>}
            {intro && <p className="mt-4 text-fg-muted text-lg leading-relaxed">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
