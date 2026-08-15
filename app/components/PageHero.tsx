import type { ReactNode } from "react";
import Link from "next/link";

type PageHeroProps = {
  backHref?: string;
  backLabel?: string;
  eyebrow: string;
  eyebrowColorClass?: string;
  title: ReactNode;
  intro: ReactNode;
  meta?: ReactNode;
  visual?: ReactNode;
};

/**
 * Shared page-opening block: back-link, eyebrow pill, two-tone h1, intro
 * copy, and an optional side visual for product pages (diagram/illustration).
 * When `visual` is omitted the copy column takes the full width — matches
 * the simple single-column heroes used on Hakkımızda/İletişim/index pages.
 */
export default function PageHero({
  backHref,
  backLabel = "← Geri",
  eyebrow,
  eyebrowColorClass = "border-accent/30 bg-accent/10 text-accent",
  title,
  intro,
  meta,
  visual,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-gradient-to-br from-white/[0.03] to-transparent">
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {backHref && (
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-sm text-fg-muted hover:text-fg transition mb-8"
          >
            {backLabel}
          </Link>
        )}

        <div className={visual ? "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" : ""}>
          <div>
            <div className={`inline-flex items-center rounded-full border px-4 py-1 text-sm mb-5 ${eyebrowColorClass}`}>
              {eyebrow}
            </div>
            {meta && <div className="flex flex-wrap items-center gap-3 mb-5">{meta}</div>}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-3xl">{title}</h1>
            <p className="mt-6 text-fg-muted text-lg md:text-xl max-w-2xl leading-relaxed">{intro}</p>
          </div>

          {visual && <div className="flex justify-center">{visual}</div>}
        </div>
      </div>
    </section>
  );
}
