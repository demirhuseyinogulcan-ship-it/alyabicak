// =============================================================================
// BladeCrossSection — Teknik Kesit Çizimi (ISO 128 Estetiği)
// =============================================================================
// Mühendislik çizimi tarzı: beyaz zemin, ince çizgiler, taralama (hatching),
// ölçü annotation'ları, monospace fontlar. Fortis Blades referans kalitesi.
// =============================================================================

'use client';

import { useMemo } from 'react';
import type { BevelGeometryResult, BladePathPoints, BladeGeometry } from '@/lib/simulator/types';

// ─── Teknik Çizim Renk Paleti ───
const C = {
  bg:       '#ffffff',
  outline:  '#1e293b',   // blade outline
  fill:     '#f1f5f9',   // blade body fill
  hatch:    '#cbd5e1',   // hatching stroke
  bevel:    '#0284c7',   // bevel highlight (sky-600)
  bevel2:   '#0ea5e9',   // secondary bevel (sky-500)
  dim:      '#64748b',   // dimension lines
  dimText:  '#334155',   // dimension text
  angle:    '#0369a1',   // angle arcs (sky-700)
  edge:     '#dc2626',   // edge point
  center:   '#94a3b8',   // center axis
  label:    '#475569',   // labels
};

const MONO = "'JetBrains Mono','Cascadia Code','Fira Code','Courier New',monospace";

interface BladeCrossSectionProps {
  geometry: BladeGeometry;
  bevelResult: BevelGeometryResult;
  pathPoints: BladePathPoints;
  sharpnessIndex: number;
  durabilityIndex: number;
  includedAngle: number;
}

export default function BladeCrossSection({
  geometry,
  bevelResult,
  pathPoints,
  sharpnessIndex,
  durabilityIndex,
  includedAngle,
}: BladeCrossSectionProps) {
  const W = 460, H = 320;
  const cx = W / 2, cy = H / 2 - 5;

  // ── Ana bıçak yolu (pathPoints'ten) ──
  const bladePath = useMemo(() => {
    if (!pathPoints?.bevelA || !pathPoints?.bevelB || !pathPoints?.spine) return '';
    const { bevelA: bA, bevelB: bB, spine: sp } = pathPoints;
    let d = `M ${bA[0][0]} ${bA[0][1]}`;
    for (let i = 1; i < bA.length; i++) d += ` L ${bA[i][0]} ${bA[i][1]}`;
    for (const pt of sp) d += ` L ${pt[0]} ${pt[1]}`;
    for (let i = bB.length - 1; i >= 0; i--) d += ` L ${bB[i][0]} ${bB[i][1]}`;
    d += ' Z';
    return d;
  }, [pathPoints]);

  // ── Bevel yüzey yolları (mavi highlight) ──
  const { bevelAPath, bevelBPath } = useMemo(() => {
    const mk = (pts: readonly (readonly [number, number])[]) => {
      if (pts.length < 2) return '';
      return pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ');
    };
    return {
      bevelAPath: mk(pathPoints?.bevelA ?? []),
      bevelBPath: mk(pathPoints?.bevelB ?? []),
    };
  }, [pathPoints]);

  // ── Referans noktaları (ölçü çizgileri için) ──
  const ref = useMemo(() => {
    const bA = pathPoints?.bevelA ?? [];
    const bB = pathPoints?.bevelB ?? [];
    const sp = pathPoints?.spine ?? [];
    const tipY = bA.length > 0 ? bA[0][1] : 80;
    const tipX = bA.length > 0 ? bA[0][0] : 0;
    const spineY = sp.length > 0 ? Math.min(...sp.map(p => p[1])) : -80;
    const spineLeft = sp.length > 0 ? sp[0][0] : -10;
    const spineRight = sp.length > 0 ? sp[sp.length - 1][0] : 10;
    const bAMid = bA.length > 1 ? bA[Math.floor(bA.length / 2)] : [tipX - 10, (tipY + spineY) / 2];
    const bBMid = bB.length > 1 ? bB[Math.floor(bB.length / 2)] : [tipX + 10, (tipY + spineY) / 2];
    return { tipX, tipY, spineY, spineLeft, spineRight, bAMid, bBMid };
  }, [pathPoints]);

  const bevelLabel: Record<string, string> = {
    double: 'ÇİFT BİLEME (V)',
    single: 'TEK BİLEME',
    compound: 'BİLEŞİK BİLEME',
    hollow: 'İÇBÜKEY BİLEME',
    convex: 'DIŞBÜKEY BİLEME',
    flat: 'DÜZ BİLEME',
  };

  return (
    <div className="bg-white rounded-xl border border-steel-200 overflow-hidden">
      {/* ── Başlık Bandı ── */}
      <div className="px-4 py-2 border-b border-steel-100 flex items-center justify-between">
        <span
          className="text-[11px] tracking-wider uppercase"
          style={{ fontFamily: MONO, color: C.label, fontWeight: 500 }}
        >
          Kesit Görünümü
        </span>
        <span
          className="text-[10px]"
          style={{ fontFamily: MONO, color: C.dim }}
        >
          {bevelLabel[geometry.bevelType] ?? geometry.bevelType}
        </span>
      </div>

      {/* ── SVG Teknik Çizim ── */}
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ aspectRatio: `${W}/${H}` }}>
        <defs>
          {/* Taralama deseni — ISO 128 section hatching */}
          <pattern
            id="secHatch"
            width="6"
            height="6"
            patternTransform="rotate(45)"
            patternUnits="userSpaceOnUse"
          >
            <line x1="0" y1="0" x2="0" y2="6" stroke={C.hatch} strokeWidth="0.4" />
          </pattern>

          {/* Mühendislik kağıdı (çok soluk) */}
          <pattern id="engGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.25" />
          </pattern>

          {/* Ölçü oku (dimension arrowhead) */}
          <marker
            id="dimArr"
            viewBox="0 0 10 6"
            refX="10"
            refY="3"
            markerWidth="8"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 3 L0 6z" fill={C.dim} />
          </marker>

          {/* Klip yolu */}
          {bladePath && (
            <clipPath id="bladeClip">
              <path d={bladePath} />
            </clipPath>
          )}
        </defs>

        {/* Arka plan */}
        <rect width={W} height={H} fill={C.bg} />
        <rect width={W} height={H} fill="url(#engGrid)" />

        {/* ── Bıçak çizim grubu ── */}
        <g transform={`translate(${cx},${cy})`} className="transition-all duration-300">
          {/* Merkez ekseni (chain line — ISO standart) */}
          <line
            x1={0}
            y1={ref.spineY - 35}
            x2={0}
            y2={ref.tipY + 30}
            stroke={C.center}
            strokeWidth="0.4"
            strokeDasharray="12 3 2 3"
          />
          <text
            x={4}
            y={ref.spineY - 38}
            fontSize={7}
            fill={C.center}
            style={{ fontFamily: MONO }}
          >
            CL
          </text>

          {bladePath && (
            <>
              {/* Gövde dolgu */}
              <path d={bladePath} fill={C.fill} stroke="none" />

              {/* Taralama (clipped) */}
              <g clipPath="url(#bladeClip)">
                <rect x={-200} y={-200} width={400} height={400} fill="url(#secHatch)" />
              </g>

              {/* Ana kontur */}
              <path
                d={bladePath}
                fill="none"
                stroke={C.outline}
                strokeWidth={1}
                strokeLinejoin="round"
              />
            </>
          )}

          {/* Bevel yüzey vurgusu (mavi çizgi) */}
          {bevelAPath && (
            <path
              d={bevelAPath}
              fill="none"
              stroke={C.bevel}
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
          {bevelBPath && (
            <path
              d={bevelBPath}
              fill="none"
              stroke={C.bevel}
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}

          {/* Kenar noktası */}
          <circle cx={ref.tipX} cy={ref.tipY} r={1.5} fill={C.edge} />

          {/* ─── ÖLÇÜ: Kalınlık (üst) ─── */}
          <line
            x1={ref.spineLeft}
            y1={ref.spineY}
            x2={ref.spineLeft}
            y2={ref.spineY - 28}
            stroke={C.dim}
            strokeWidth={0.4}
          />
          <line
            x1={ref.spineRight}
            y1={ref.spineY}
            x2={ref.spineRight}
            y2={ref.spineY - 28}
            stroke={C.dim}
            strokeWidth={0.4}
          />
          <line
            x1={ref.spineLeft + 1}
            y1={ref.spineY - 22}
            x2={ref.spineRight - 1}
            y2={ref.spineY - 22}
            stroke={C.dim}
            strokeWidth={0.5}
            markerStart="url(#dimArr)"
            markerEnd="url(#dimArr)"
          />
          <text
            x={(ref.spineLeft + ref.spineRight) / 2}
            y={ref.spineY - 26}
            textAnchor="middle"
            fontSize={8}
            fill={C.dimText}
            style={{ fontFamily: MONO }}
          >
            T = {geometry.bladeThickness} mm
          </text>

          {/* ─── AÇI: Birincil bileme ─── */}
          <path
            d={describeArc(ref.tipX, ref.tipY, 42, 90 - geometry.primaryAngle, 90)}
            fill="none"
            stroke={C.angle}
            strokeWidth={0.8}
          />
          {geometry.bevelType !== 'single' && (
            <path
              d={describeArc(ref.tipX, ref.tipY, 42, 90, 90 + geometry.primaryAngle)}
              fill="none"
              stroke={C.angle}
              strokeWidth={0.8}
            />
          )}
          <text
            x={ref.tipX + 48}
            y={ref.tipY - 24}
            fontSize={9}
            fill={C.angle}
            fontWeight={600}
            style={{ fontFamily: MONO }}
          >
            α = {geometry.primaryAngle}°
          </text>

          {/* ─── AÇI: İkincil bileme (compound) ─── */}
          {geometry.bevelType === 'compound' && geometry.secondaryAngle != null && (
            <>
              <path
                d={describeArc(
                  ref.tipX,
                  ref.tipY,
                  56,
                  90 - geometry.secondaryAngle,
                  90 - geometry.primaryAngle
                )}
                fill="none"
                stroke={C.bevel2}
                strokeWidth={0.6}
                strokeDasharray="4 2"
              />
              <path
                d={describeArc(
                  ref.tipX,
                  ref.tipY,
                  56,
                  90 + geometry.primaryAngle,
                  90 + geometry.secondaryAngle
                )}
                fill="none"
                stroke={C.bevel2}
                strokeWidth={0.6}
                strokeDasharray="4 2"
              />
              <text
                x={ref.tipX + 63}
                y={ref.tipY - 22}
                fontSize={8}
                fill={C.bevel2}
                style={{ fontFamily: MONO }}
              >
                β = {geometry.secondaryAngle}°
              </text>
            </>
          )}

          {/* ─── ETİKET: Sol bevel yüzeyi ─── */}
          <line
            x1={ref.bAMid[0]}
            y1={ref.bAMid[1]}
            x2={ref.bAMid[0] - 55}
            y2={ref.bAMid[1] - 12}
            stroke={C.label}
            strokeWidth={0.5}
          />
          <circle cx={ref.bAMid[0]} cy={ref.bAMid[1]} r={1.5} fill={C.bevel} />
          <text
            x={ref.bAMid[0] - 58}
            y={ref.bAMid[1] - 15}
            textAnchor="end"
            fontSize={7}
            fill={C.label}
            fontWeight={600}
            style={{ fontFamily: MONO }}
          >
            {geometry.bevelType === 'single' ? 'BEVEL FACE' : 'PRIMARY BEVEL'}
          </text>

          {/* ─── ETİKET: Sağ bevel yüzeyi (double/compound) ─── */}
          {geometry.bevelType !== 'single' && (
            <>
              <line
                x1={ref.bBMid[0]}
                y1={ref.bBMid[1]}
                x2={ref.bBMid[0] + 60}
                y2={ref.bBMid[1] + 18}
                stroke={C.label}
                strokeWidth={0.5}
              />
              <circle cx={ref.bBMid[0]} cy={ref.bBMid[1]} r={1.5} fill={C.bevel} />
              <text
                x={ref.bBMid[0] + 63}
                y={ref.bBMid[1] + 15}
                fontSize={7}
                fill={C.label}
                fontWeight={600}
                style={{ fontFamily: MONO }}
              >
                PRIMARY BEVEL
              </text>
            </>
          )}

          {/* ─── KENAR YARICAPI ─── */}
          {geometry.edgeRadius > 0 && (
            <circle
              cx={ref.tipX}
              cy={ref.tipY}
              r={Math.max(3, Math.min(14, geometry.edgeRadius / 3.5))}
              fill="none"
              stroke={C.dim}
              strokeWidth={0.5}
              strokeDasharray="2 2"
            />
          )}
          <line
            x1={ref.tipX - 4}
            y1={ref.tipY}
            x2={ref.tipX - 40}
            y2={ref.tipY + 18}
            stroke={C.dim}
            strokeWidth={0.4}
          />
          <text
            x={ref.tipX - 43}
            y={ref.tipY + 21}
            textAnchor="end"
            fontSize={8}
            fill={C.dim}
            style={{ fontFamily: MONO }}
          >
            R = {geometry.edgeRadius} µm
          </text>

          {/* Dahil açı artık alt veri bandına taşındı */}

          {/* Fallback — pathPoints yoksa basit V */}
          {!bladePath && (
            <SimpleBlade
              angle={geometry.primaryAngle}
              thickness={geometry.bladeThickness}
              bladeHeight={180}
            />
          )}
        </g>
      </svg>

      {/* ── Teknik Veri Bandı ── */}
      <div
        className="px-4 py-2 border-t border-steel-100 flex flex-wrap items-center gap-x-5 gap-y-1"
        style={{ fontFamily: MONO }}
      >
        <DataTag label="Keskinlik" value={sharpnessIndex.toFixed(0)} unit="/100"
          color={sharpnessIndex >= 70 ? '#059669' : sharpnessIndex >= 40 ? '#d97706' : '#dc2626'} />
        <DataTag label="Dayanıklılık" value={durabilityIndex.toFixed(0)} unit="/100"
          color={durabilityIndex >= 70 ? '#059669' : durabilityIndex >= 40 ? '#d97706' : '#dc2626'} />
        <div className="hidden sm:block w-px h-4 bg-steel-200" />
        <DataTag label="T" value={geometry.bladeThickness.toString()} unit="mm" />
        <DataTag label="α" value={geometry.primaryAngle.toString()} unit="°" />
        <DataTag label="R" value={geometry.edgeRadius.toString()} unit="µm" />
        <DataTag label="Dahil" value={includedAngle.toFixed(1)} unit="°" />
      </div>
    </div>
  );
}

// ─── Veri Etiketi ───
function DataTag({
  label,
  value,
  unit,
  color,
}: {
  label: string;
  value: string;
  unit: string;
  color?: string;
}) {
  return (
    <div className="flex items-baseline gap-1">
      <span className="text-[10px] text-steel-400">{label}</span>
      <span className="text-[11px] font-semibold" style={{ color: color ?? '#334155' }}>
        {value}
      </span>
      <span className="text-[9px] text-steel-300">{unit}</span>
    </div>
  );
}

// ─── Fallback Basit V Bıçak ───
function SimpleBlade({
  angle,
  thickness,
  bladeHeight,
}: {
  angle: number;
  thickness: number;
  bladeHeight: number;
}) {
  const halfW = Math.max(10, thickness * 10);
  const tanVal = Math.tan((angle * Math.PI) / 180);
  const bevelH = halfW / tanVal;
  const topY = -bladeHeight * 0.3;
  const edgeY = bladeHeight * 0.5;

  return (
    <path
      d={`M ${-halfW} ${topY} L ${halfW} ${topY} L ${halfW} ${edgeY - bevelH} L 0 ${edgeY} L ${-halfW} ${edgeY - bevelH} Z`}
      fill={C.fill}
      stroke={C.outline}
      strokeWidth={1}
      strokeLinejoin="round"
    />
  );
}

// ─── SVG Ark Yolu (açı gösterimi) ───
function describeArc(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number,
): string {
  const rad = (a: number) => ((a - 90) * Math.PI) / 180;
  const sx = cx + r * Math.cos(rad(startAngle));
  const sy = cy + r * Math.sin(rad(startAngle));
  const ex = cx + r * Math.cos(rad(endAngle));
  const ey = cy + r * Math.sin(rad(endAngle));
  const lg = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${sx} ${sy} A ${r} ${r} 0 ${lg} 1 ${ex} ${ey}`;
}
