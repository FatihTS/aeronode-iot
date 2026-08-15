"use client";

import { useReducedMotion } from "../lib/useReducedMotion";

type RFLinkDiagramProps = {
  sourceLabel: string;
  sourceSublabel: string;
  gatewayLabel: string;
  gatewaySublabel: string;
  frequencyLabel: string;
  rangeLabel: string;
  sourceColor?: string;
  gatewayColor?: string;
};

function Tower({ x, color, reduceMotion }: { x: number; color: string; reduceMotion: boolean }) {
  return (
    <g>
      {!reduceMotion &&
        [1, 2, 3].map((i) => (
          <circle
            key={i}
            cx={x}
            cy={70}
            r={18 + i * 14}
            fill="none"
            stroke={color}
            strokeWidth={1}
            opacity={0.25}
            style={{ animation: `ping ${2.6 + i * 0.5}s ease-out ${i * 0.5}s infinite`, transformOrigin: `${x}px 70px` }}
          />
        ))}
      {/* mast */}
      <line x1={x} y1={70} x2={x} y2={150} stroke={color} strokeWidth={2} opacity={0.7} />
      {/* antenna chevrons */}
      <path d={`M ${x - 16} 92 L ${x} 70 L ${x + 16} 92`} fill="none" stroke={color} strokeWidth={2} opacity={0.8} />
      <path d={`M ${x - 10} 104 L ${x} 88 L ${x + 10} 104`} fill="none" stroke={color} strokeWidth={2} opacity={0.6} />
      {/* base unit */}
      <rect x={x - 14} y={150} width={28} height={20} rx={4} fill={color} opacity={0.15} stroke={color} strokeWidth={1} />
      <circle cx={x} cy={70} r={4} fill={color} />
    </g>
  );
}

/**
 * RF link diagram: source node → dashed signal path → gateway, both drawn
 * as inline SVG (not absolutely-positioned rotated divs) so it can actually
 * re-layout — not just shrink — at narrow widths.
 */
export default function RFLinkDiagram({
  sourceLabel,
  sourceSublabel,
  gatewayLabel,
  gatewaySublabel,
  frequencyLabel,
  rangeLabel,
  sourceColor = "#3b82f6",
  gatewayColor = "#34d399",
}: RFLinkDiagramProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="rounded-3xl border border-line bg-surface p-8 sm:p-10 overflow-hidden">
      <svg viewBox="0 0 800 220" className="w-full h-auto" role="img" aria-label={`${sourceLabel} - ${gatewayLabel} RF bağlantı diyagramı`}>
        <Tower x={120} color={sourceColor} reduceMotion={reduceMotion} />
        <Tower x={680} color={gatewayColor} reduceMotion={reduceMotion} />

        <line x1={160} y1={70} x2={640} y2={70} stroke="#ffffff" strokeOpacity={0.12} strokeWidth={1} strokeDasharray="6 6" />
        {!reduceMotion && (
          <line
            x1={160}
            y1={70}
            x2={640}
            y2={70}
            stroke={sourceColor}
            strokeOpacity={0.6}
            strokeWidth={2}
            strokeDasharray="10 480"
            style={{ animation: "line-flow 2.4s linear infinite", strokeDashoffset: 490 }}
          />
        )}

        <g transform="translate(400 40)">
          <rect x={-95} y={-16} width={190} height={32} rx={16} fill="#ffffff" fillOpacity={0.05} stroke="#ffffff" strokeOpacity={0.12} />
          <text x={0} y={5} textAnchor="middle" fontSize={13} fill="#f5f6f8" fontWeight={600}>
            {frequencyLabel}
          </text>
        </g>
        <text x={400} y={95} textAnchor="middle" fontSize={11} fill="#99a1af">
          {rangeLabel}
        </text>
      </svg>

      <div className="mt-4 flex items-center justify-between text-center">
        <div className="flex-1">
          <p className="text-sm font-bold" style={{ color: sourceColor }}>{sourceLabel}</p>
          <p className="text-xs text-fg-muted mt-0.5">{sourceSublabel}</p>
        </div>
        <div className="flex-1">
          <p className="text-sm font-bold" style={{ color: gatewayColor }}>{gatewayLabel}</p>
          <p className="text-xs text-fg-muted mt-0.5">{gatewaySublabel}</p>
        </div>
      </div>
    </div>
  );
}
