type Spec = { label: string; value: string };

type SpecTableProps = {
  title?: string;
  specs: Spec[];
  layout?: "rows" | "grid";
};

/**
 * Renders a product's technical spec sheet. Values are passed in verbatim
 * by the caller — this component only formats, it never invents numbers.
 */
export default function SpecTable({ title = "Teknik Özellikler", specs, layout = "rows" }: SpecTableProps) {
  return (
    <div>
      {title && <h2 className="text-3xl font-bold mb-8">{title}</h2>}
      <div
        className={
          layout === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            : "space-y-3"
        }
      >
        {specs.map((s) => (
          <div
            key={s.label}
            className={
              layout === "grid"
                ? "flex justify-between items-center py-4 px-5 rounded-2xl border border-line bg-surface"
                : "flex justify-between py-3 px-4 rounded-xl border border-line bg-surface"
            }
          >
            <span className="text-fg-muted text-sm">{s.label}</span>
            <span className="text-fg font-medium text-sm text-right ml-4">{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
