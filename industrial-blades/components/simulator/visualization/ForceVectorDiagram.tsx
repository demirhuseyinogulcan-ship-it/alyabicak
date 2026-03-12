// =============================================================================
// ForceVectorDiagram — Teknik Kuvvet Vektör Diyagramı (ISO Estetiği)
// =============================================================================
// Beyaz zemin, ince çizgiler, mühendislik ok uçları, monospace etiketler.
// BladeCrossSection ile aynı teknik çizim estetiği.
// =============================================================================

'use client';

import { useMemo } from 'react';
import type { ForceCalculationResult } from '@/lib/simulator/types';

// ─── Teknik Çizim Paleti ───
const C = {
  bg:     '#ffffff',
  grid:   '#e2e8f0',
  origin: '#94a3b8',
  comp:   '#475569',
  tot:    '#0369a1',
  label:  '#334155',
  dim:    '#64748b',
};

const MONO = "'JetBrains Mono','Cascadia Code','Fira Code','Courier New',monospace";

// Compact number formatting for SVG labels
function fmtForce(n: number): string {
  if (Math.abs(n) >= 1e6) return n.toExponential(1);
  if (Math.abs(n) >= 10000) return (n / 1000).toFixed(1) + 'k';
  if (Math.abs(n) >= 100) return n.toFixed(0);
  if (Math.abs(n) >= 1) return n.toFixed(1);
  return n.toFixed(3);
}

interface ForceVectorDiagramProps {
  force: ForceCalculationResult;
  width?: number;
  height?: number;
}

export default function ForceVectorDiagram({
  force,
  width = 400,
  height = 220,
}: ForceVectorDiagramProps) {
  const midX = width / 2;
  const midY = height / 2 + 10;

  // Kuvvet normalizasyonu (en büyük kuvvet → max ok uzunluğu)
  const maxForce = Math.max(
    force.separationForce,
    force.frictionForce,
    force.normalForce,
    0.001
  );
  const maxArrowLen = 80;
  const scale = maxArrowLen / maxForce;

  const arrows = useMemo(
    () => [
      { id: 's', label: 'F_ayır',   value: force.separationForce, angle: -90,  dash: '',         sw: 0.9, isTotal: false },
      { id: 'f', label: 'F_sürt',   value: force.frictionForce,   angle: 0,    dash: '6 3',      sw: 0.9, isTotal: false },
      { id: 'n', label: 'F_norm',   value: force.normalForce,     angle: -45,  dash: '8 3 2 3',  sw: 0.9, isTotal: false },
      { id: 't', label: 'F_toplam', value: force.totalForce,      angle: -60,  dash: '',         sw: 1.6, isTotal: true  },
    ],
    [force]
  );

  return (
    <div className="bg-white rounded-xl border border-steel-200 overflow-hidden">
      {/* ── Başlık Bandı ── */}
      <div className="px-4 py-2 border-b border-steel-100 flex items-center justify-between">
        <span
          className="text-[11px] tracking-wider uppercase"
          style={{ fontFamily: MONO, color: C.label, fontWeight: 500 }}
        >
          Kuvvet Vektör Diyagramı
        </span>
        <span
          className="text-[11px] font-semibold"
          style={{ fontFamily: MONO, color: C.tot }}
        >
          F = {fmtForce(force.totalForce)} N
        </span>
      </div>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full"
        style={{ aspectRatio: `${width}/${height}` }}
      >
        <defs>
          {/* Mühendislik kağıdı grid */}
          <pattern id="fGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke={C.grid} strokeWidth="0.25" />
          </pattern>
          {/* Bileşen kuvvet ok ucu */}
          <marker id="fArr" viewBox="0 0 10 6" refX="9" refY="3"
            markerWidth="7" markerHeight="4.5" orient="auto">
            <path d="M0 0.5 L9 3 L0 5.5z" fill={C.comp} />
          </marker>
          {/* Toplam kuvvet ok ucu (mavi) */}
          <marker id="fArrT" viewBox="0 0 10 6" refX="9" refY="3"
            markerWidth="8" markerHeight="5" orient="auto">
            <path d="M0 0.5 L9 3 L0 5.5z" fill={C.tot} />
          </marker>
        </defs>

        {/* Arka plan + grid */}
        <rect width={width} height={height} fill={C.bg} />
        <rect width={width} height={height} fill="url(#fGrid)" />

        {/* Orijin — crosshair */}
        <line x1={midX - 6} y1={midY} x2={midX + 6} y2={midY}
          stroke={C.origin} strokeWidth={0.6} />
        <line x1={midX} y1={midY - 6} x2={midX} y2={midY + 6}
          stroke={C.origin} strokeWidth={0.6} />
        <circle cx={midX} cy={midY} r={2} fill="none" stroke={C.origin} strokeWidth={0.6} />

        {/* Kuvvet vektörleri */}
        {arrows.map((a) => {
          const len = a.value * scale;
          const rad = (a.angle * Math.PI) / 180;
          const endX = midX + Math.cos(rad) * len;
          const endY = midY + Math.sin(rad) * len;
          const labelDist = Math.max(len + 18, 48);
          const labelX = midX + Math.cos(rad) * labelDist;
          const labelY = midY + Math.sin(rad) * labelDist;

          return (
            <g key={a.id}>
              <line
                x1={midX} y1={midY} x2={endX} y2={endY}
                stroke={a.isTotal ? C.tot : C.comp}
                strokeWidth={a.sw}
                strokeDasharray={a.dash}
                markerEnd={a.isTotal ? 'url(#fArrT)' : 'url(#fArr)'}
              />
              <text
                x={labelX} y={labelY}
                fontSize={8}
                fill={a.isTotal ? C.tot : C.comp}
                textAnchor="middle"
                dominantBaseline="middle"
                fontWeight={a.isTotal ? 600 : 400}
                style={{ fontFamily: MONO }}
              >
                {a.label}
              </text>
              <text
                x={labelX} y={labelY + 11}
                fontSize={7}
                fill={C.dim}
                textAnchor="middle"
                style={{ fontFamily: MONO }}
              >
                {fmtForce(a.value)} N
              </text>
            </g>
          );
        })}
      </svg>

      {/* ── Teknik Veri Bandı ── */}
      <div
        className="px-4 py-2 border-t border-steel-100 flex flex-wrap items-center gap-x-5 gap-y-1"
        style={{ fontFamily: MONO }}
      >
        <DItem label="Sp. Enerji" value={fmtForce(force.specificCuttingEnergy)} unit="J/m²" />
        <DItem label="Güç" value={fmtForce(force.powerRequirement)} unit="W" />
        <DItem label="Kenar Bas." value={fmtForce(force.edgePressure)} unit="MPa" />
        <DItem label="ΔT" value={fmtForce(force.estimatedTemperatureRise)} unit="°C" />
      </div>
    </div>
  );
}

function DItem({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <div className="flex items-baseline gap-1">
      <span className="text-[10px] text-steel-400">{label}</span>
      <span className="text-[11px] font-semibold text-steel-700">{value}</span>
      <span className="text-[9px] text-steel-300">{unit}</span>
    </div>
  );
}
