import type { ReactNode, ComponentType } from "react";
import type { IconProps } from "@phosphor-icons/react";
import Link from "next/link";

type Feature = {
  Icon: ComponentType<IconProps>;
  label: string;
  sub: string;
};

type ProductShowcaseProps = {
  eyebrow: string;
  eyebrowColorClass?: string;
  title: ReactNode;
  tagline: string;
  description: string;
  features: Feature[];
  href: string;
  ctaLabel?: string;
  visual: ReactNode;
  reverse?: boolean;
  accentClass?: string;
};

/**
 * Large, editorial product section — big visual on one side, name + short
 * copy + 3-5 feature bullets + "Explore Product" on the other. Deliberately
 * not a small card: this is the template for the homepage Products section
 * and reused wherever a single product needs a full-width introduction.
 */
export default function ProductShowcase({
  eyebrow,
  eyebrowColorClass = "border-accent/30 bg-accent/10 text-accent",
  title,
  tagline,
  description,
  features,
  href,
  ctaLabel = "Ürünü İncele",
  visual,
  reverse = false,
  accentClass = "text-accent",
}: ProductShowcaseProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className={`inline-flex items-center rounded-full border px-4 py-1 text-sm mb-8 ${eyebrowColorClass}`}>
        {eyebrow}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className={reverse ? "order-last lg:order-first" : ""}>{visual}</div>

        <div className={reverse ? "order-first lg:order-last" : ""}>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">{title}</h2>
          <p className={`mt-2 text-xl font-light ${accentClass}`}>{tagline}</p>
          <p className="mt-6 text-fg-muted text-lg leading-relaxed">{description}</p>

          <div className="mt-10 space-y-5">
            {features.map((f) => (
              <div key={f.label} className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-line flex items-center justify-center shrink-0">
                  <f.Icon size={22} weight="duotone" className={accentClass} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-fg">{f.label}</p>
                  <p className="text-sm text-fg-muted mt-0.5">{f.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href={href}
              className="inline-flex items-center gap-2 rounded-2xl bg-accent px-6 py-3 text-white font-semibold hover:bg-accent-hover transition"
            >
              {ctaLabel} →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
