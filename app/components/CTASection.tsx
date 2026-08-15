import Link from "next/link";

type CTASectionProps = {
  title: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function CTASection({
  title,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CTASectionProps) {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="mt-4 text-fg-muted text-lg max-w-xl mx-auto">{body}</p>
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href={primaryHref}
          className="rounded-2xl bg-accent px-7 py-3 text-white font-semibold hover:bg-accent-hover transition"
        >
          {primaryLabel}
        </Link>
        {secondaryHref && secondaryLabel && (
          <Link
            href={secondaryHref}
            className="rounded-2xl border border-line px-7 py-3 text-fg hover:bg-white/5 transition"
          >
            {secondaryLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
