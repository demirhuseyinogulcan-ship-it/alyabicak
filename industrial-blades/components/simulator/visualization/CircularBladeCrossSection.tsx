// =============================================================================
// CircularBladeCrossSection — Dairesel Bıçak Teknik Çizimi (Faz 3)
// =============================================================================
// ISO 128 estetiği: beyaz zemin, ince çizgiler, boyut çizgileri.
// Üstten bakış: dış daire + iç daire + kenar profili.
//
// Single Responsibility: Sadece dairesel bıçak görselleştirmesi.
// BladeCrossSection.tsx (lineer) dokunulmaz.
// =============================================================================

'use client';

import { useMemo } from 'react';
import type { BladeGeometry, CircularBladeParams, CircularBladePathPoints } from '@/lib/simulator/types';

// ─── Teknik Çizim Renk Paleti (BladeCrossSection ile aynı — tutarlılık) ───
const C = {
  bg:       '#ffffff',
  outline:  '#1e293b',
  fill:     '#f1f5f9',
  hatch:    '#cbd5e1',
  bevel:    '#0284c7',
  dim:      '#64748b',
  dimText:  '#334155',
  angle:    '#0369a1',
  edge:     '#dc2626',
  center:   '#94a3b8',
  label:    '#475569',
  dish:     '#7c3aed',   // dish açısı rengi (mor)
};

const MONO = "'JetBrains Mono','Cascadia Code','Fira Code','Courier New',monospace";

interface CircularBladeCrossSectionProps {
  geometry: BladeGeometry;
  circularParams: CircularBladeParams;
  circularPathPoints: CircularBladePathPoints;
  sharpnessIndex: number;
  durabilityIndex: number;
  includedAngle: number;
}

export default function CircularBladeCrossSection({
  geometry,
  circularParams,
  circularPathPoints,
  sharpnessIndex,
  durabilityIndex,
  includedAngle,
}: CircularBladeCrossSectionProps) {
  const W = 460, H = 320;
  const { outerCircle, innerCircle, edgeProfile, dimensionAnchors } = circularPathPoints;

  // RPM hesabı (gösterim için)
  const rpm = useMemo(() => {
    if (circularParams.outerDiameter <= 0) return 0;
    // Varsayılan hız: 200 m/min (ControlPanel'den gelebilir)
    return Math.round((200 * 1000) / (Math.PI * circularParams.outerDiameter));
  }, [circularParams.outerDiameter]);

  // Edge profile SVG path
  const edgePath = useMemo(() => {
    if (edgeProfile.length < 2) return '';
    return edgeProfile
      .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`)
      .join(' ');
  }, [edgeProfile]);

  return (
    <div className="bg-white rounded-xl border border-steel-200 overflow-hidden">
      {/* ── Başlık Bandı ── */}
      <div className="px-4 py-2 border-b border-steel-100 flex items-center justify-between">
        <span
          className="text-[11px] tracking-wider uppercase"
          style={{ fontFamily: MONO, color: C.label, fontWeight: 500 }}
        >
          Dairesel Bıçak — Üstten Görünüm
        </span>
        <span
          className="text-[10px]"
          style={{ fontFamily: MONO, color: C.dim }}
        >
          Ø{circularParams.outerDiameter} × Ø{circularParams.innerDiameter} × {geometry.bladeThickness}mm
        </span>
      </div>

      {/* ── SVG Teknik Çizim ── */}
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ aspectRatio: `${W}/${H}` }}>
        <defs>
          {/* Taralama deseni */}
          <pattern
            id="circHatch"
            width="6"
            height="6"
            patternTransform="rotate(45)"
            patternUnits="userSpaceOnUse"
          >
            <line x1="0" y1="0" x2="0" y2="6" stroke={C.hatch} strokeWidth="0.4" />
          </pattern>

          {/* Mühendislik kağıdı */}
          <pattern id="circGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.25" />
          </pattern>

          {/* Ölçü okları */}
          <marker
            id="circDimArr"
            viewBox="0 0 10 6"
            refX="10"
            refY="3"
            markerWidth="8"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 3 L0 6z" fill={C.dim} />
          </marker>

          {/* Disk alanı maskeleme */}
          <mask id="diskMask">
            <rect width={W} height={H} fill="black" />
            <circle cx={outerCircle.cx} cy={outerCircle.cy} r={outerCircle.r} fill="white" />
            <circle cx={innerCircle.cx} cy={innerCircle.cy} r={innerCircle.r} fill="black" />
          </mask>
        </defs>

        {/* Arka plan */}
        <rect width={W} height={H} fill={C.bg} />
        <rect width={W} height={H} fill="url(#circGrid)" />

        {/* ── Merkez eksenleri (chain line — ISO standart) ── */}
        <line
          x1={outerCircle.cx}
          y1={outerCircle.cy - outerCircle.r - 20}
          x2={outerCircle.cx}
          y2={outerCircle.cy + outerCircle.r + 20}
          stroke={C.center}
          strokeWidth="0.4"
          strokeDasharray="12 3 2 3"
        />
        <line
          x1={outerCircle.cx - outerCircle.r - 20}
          y1={outerCircle.cy}
          x2={outerCircle.cx + outerCircle.r + 20}
          y2={outerCircle.cy}
          stroke={C.center}
          strokeWidth="0.4"
          strokeDasharray="12 3 2 3"
        />
        <text
          x={outerCircle.cx + 4}
          y={outerCircle.cy - outerCircle.r - 22}
          fontSize={7}
          fill={C.center}
          style={{ fontFamily: MONO }}
        >
          CL
        </text>

        {/* ── Disk gövde ── */}
        {/* Taralama (disk alanı) */}
        <g mask="url(#diskMask)">
          <rect width={W} height={H} fill="url(#circHatch)" />
        </g>

        {/* Disk dolgusu */}
        <circle
          cx={outerCircle.cx}
          cy={outerCircle.cy}
          r={outerCircle.r}
          fill={C.fill}
          fillOpacity={0.5}
          stroke={C.outline}
          strokeWidth={1.2}
        />

        {/* İç delik */}
        <circle
          cx={innerCircle.cx}
          cy={innerCircle.cy}
          r={innerCircle.r}
          fill={C.bg}
          stroke={C.outline}
          strokeWidth={0.8}
        />

        {/* Kenar bevel vurgusu (dış çevre üzerinde) */}
        <circle
          cx={outerCircle.cx}
          cy={outerCircle.cy}
          r={outerCircle.r}
          fill="none"
          stroke={C.bevel}
          strokeWidth={2}
        />

        {/* Dish açısı gösterimi (eğer dish > 0) */}
        {circularParams.dishAngle > 0 && (
          <>
            {/* İç halka — dish bölgesi */}
            <circle
              cx={outerCircle.cx}
              cy={outerCircle.cy}
              r={outerCircle.r * 0.85}
              fill="none"
              stroke={C.dish}
              strokeWidth={0.5}
              strokeDasharray="4 3"
            />
            <text
              x={outerCircle.cx + outerCircle.r * 0.85 * Math.cos(-Math.PI / 4) + 5}
              y={outerCircle.cy + outerCircle.r * 0.85 * Math.sin(-Math.PI / 4) - 3}
              fontSize={7}
              fill={C.dish}
              style={{ fontFamily: MONO }}
            >
              dish = {circularParams.dishAngle}°
            </text>
          </>
        )}

        {/* ── ÖLÇÜ: Dış Çap (OD) ── */}
        <line
          x1={dimensionAnchors.odLeft[0]}
          y1={dimensionAnchors.odLeft[1]}
          x2={dimensionAnchors.odLeft[0]}
          y2={outerCircle.cy + outerCircle.r + 30}
          stroke={C.dim}
          strokeWidth={0.4}
        />
        <line
          x1={dimensionAnchors.odRight[0]}
          y1={dimensionAnchors.odRight[1]}
          x2={dimensionAnchors.odRight[0]}
          y2={outerCircle.cy + outerCircle.r + 30}
          stroke={C.dim}
          strokeWidth={0.4}
        />
        <line
          x1={dimensionAnchors.odLeft[0] + 2}
          y1={outerCircle.cy + outerCircle.r + 24}
          x2={dimensionAnchors.odRight[0] - 2}
          y2={outerCircle.cy + outerCircle.r + 24}
          stroke={C.dim}
          strokeWidth={0.5}
          markerStart="url(#circDimArr)"
          markerEnd="url(#circDimArr)"
        />
        <text
          x={outerCircle.cx}
          y={outerCircle.cy + outerCircle.r + 20}
          textAnchor="middle"
          fontSize={9}
          fill={C.dimText}
          fontWeight={600}
          style={{ fontFamily: MONO }}
        >
          ⌀{circularParams.outerDiameter} mm
        </text>

        {/* ── ÖLÇÜ: İç Çap (ID) ── */}
        <line
          x1={dimensionAnchors.idLeft[0]}
          y1={dimensionAnchors.idLeft[1]}
          x2={dimensionAnchors.idLeft[0]}
          y2={outerCircle.cy - outerCircle.r - 18}
          stroke={C.dim}
          strokeWidth={0.3}
        />
        <line
          x1={dimensionAnchors.idRight[0]}
          y1={dimensionAnchors.idRight[1]}
          x2={dimensionAnchors.idRight[0]}
          y2={outerCircle.cy - outerCircle.r - 18}
          stroke={C.dim}
          strokeWidth={0.3}
        />
        <line
          x1={dimensionAnchors.idLeft[0] + 2}
          y1={outerCircle.cy - outerCircle.r - 14}
          x2={dimensionAnchors.idRight[0] - 2}
          y2={outerCircle.cy - outerCircle.r - 14}
          stroke={C.dim}
          strokeWidth={0.4}
          markerStart="url(#circDimArr)"
          markerEnd="url(#circDimArr)"
        />
        <text
          x={outerCircle.cx}
          y={outerCircle.cy - outerCircle.r - 18}
          textAnchor="middle"
          fontSize={8}
          fill={C.dimText}
          style={{ fontFamily: MONO }}
        >
          ⌀{circularParams.innerDiameter} mm
        </text>

        {/* ── KENAR BEVELİ DETAY (sağ üst köşe) ── */}
        <EdgeCrossSectionDetail
          geometry={geometry}
          x={W - 120}
          y={16}
        />

        {/* ── ETİKET: Kenar tipi ── */}
        <text
          x={outerCircle.cx}
          y={outerCircle.cy + 4}
          textAnchor="middle"
          fontSize={8}
          fill={C.label}
          fontWeight={600}
          style={{ fontFamily: MONO, letterSpacing: '0.05em' }}
        >
          {geometry.bevelType === 'double' ? 'ÇİFT BİLEME' : 'TEK BİLEME'}
        </text>

        {/* Overlap gösterimi (eğer > 0) */}
        {circularParams.bladeOverlap > 0 && (
          <text
            x={outerCircle.cx}
            y={outerCircle.cy + 16}
            textAnchor="middle"
            fontSize={7}
            fill={C.dim}
            style={{ fontFamily: MONO }}
          >
            overlap = {circularParams.bladeOverlap} mm
          </text>
        )}
      </svg>

      {/* ── Teknik Veri Bandı ── */}
      <div
        className="px-4 py-2 border-t border-steel-100 flex flex-wrap items-center gap-x-5 gap-y-1"
        style={{ fontFamily: MONO }}
      >
        <DataTag
          label="Keskinlik"
          value={sharpnessIndex.toFixed(0)}
          unit="/100"
          color={sharpnessIndex >= 70 ? '#059669' : sharpnessIndex >= 40 ? '#d97706' : '#dc2626'}
        />
        <DataTag
          label="Dayanıklılık"
          value={durabilityIndex.toFixed(0)}
          unit="/100"
          color={durabilityIndex >= 70 ? '#059669' : durabilityIndex >= 40 ? '#d97706' : '#dc2626'}
        />
        <div className="hidden sm:block w-px h-4 bg-steel-200" />
        <DataTag label="OD" value={circularParams.outerDiameter.toString()} unit="mm" />
        <DataTag label="ID" value={circularParams.innerDiameter.toString()} unit="mm" />
        <DataTag label="T" value={geometry.bladeThickness.toString()} unit="mm" />
        <DataTag label="α" value={geometry.primaryAngle.toString()} unit="°" />
        <DataTag label="Dahil" value={includedAngle.toFixed(1)} unit="°" />
        {rpm > 0 && <DataTag label="RPM" value={rpm.toString()} unit="" />}
      </div>
    </div>
  );
}

// ─── Dinamik Kenar Kesiti Detayı ───
// 6 bevel tipi: double, single, compound, hollow, convex, flat
// Her biri engine/geometry.ts'deki matematik ile tutarlı.
//
//  DOUBLE (V):     SINGLE:          COMPOUND:       HOLLOW:       CONVEX:        FLAT:
//    ╲   ╱         ─────            ╲╲  ╱╱           ╲  ╱          ╲    ╱        ╲      ╱
//     ╲ ╱           ╲                ╲╲╱╱            )  (           )  (          ╲    ╱
//      ●             ●                ●             ●              ●              ●
//     ╱ ╲           ╱                ╱╱╲╲            )  (           )  (          ╱    ╲
//    ╱   ╲         ╱                ╱╱  ╲╲           ╱  ╲          ╱    ╲        ╱      ╲
//
function EdgeCrossSectionDetail({
  geometry,
  x,
  y,
}: {
  geometry: BladeGeometry;
  x: number;
  y: number;
}) {
  const bw = 112, bh = 96;
  const viewCx = bw / 2;
  const viewCy = bh / 2 + 8;
  const bt = geometry.bevelType;

  const angleRad = (geometry.primaryAngle * Math.PI) / 180;
  const tanA = Math.tan(Math.max(angleRad, 0.05));

  // ── Ölçekli boyutlar ──
  const baseHalfT = Math.max(6, Math.min(20, geometry.bladeThickness * 7));

  // Bevel derinliği: fizik kuralına göre
  // double/compound/hollow/convex: L = halfT / tan(α)  (her taraf yarım kalınlık)
  // single: L = 2·halfT / tan(α) (tek taraf tüm kalınlık)
  // flat: L = bladeHeight oranı (sırta kadar)
  const isSingle = bt === 'single';
  const isFlat = bt === 'flat';
  const naturalBevel = isFlat
    ? baseHalfT * 3    // flat grind: uzun, dar açı
    : isSingle
      ? (2 * baseHalfT) / tanA
      : baseHalfT / tanA;

  // Kutuya sığdır (oranı koru)
  const maxBevelW = 38;
  const sf = naturalBevel > maxBevelW ? maxBevelW / naturalBevel : 1;
  const halfT = Math.max(3, baseHalfT * sf);
  const bevelDepth = Math.max(6, naturalBevel * sf);

  // Açı yayı yarıçapı
  const arcR = Math.min(12, bevelDepth * 0.4);

  // Bevel etiketi (kısa)
  const bevelLabel: Record<string, string> = {
    double: 'ÇİFT (V)', single: 'TEK', compound: 'BİLEŞİK',
    hollow: 'İÇBÜKEY', convex: 'DIŞBÜKEY', flat: 'DÜZ',
  };

  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect width={bw} height={bh} rx={4} fill="white" stroke={C.dim} strokeWidth={0.5} />
      <text
        x={viewCx} y={11} textAnchor="middle" fontSize={7}
        fill={C.label} fontWeight={600} style={{ fontFamily: MONO }}
      >
        KENAR KESİTİ
      </text>
      <text
        x={viewCx} y={bh - 4} textAnchor="middle" fontSize={5.5}
        fill={C.dim} style={{ fontFamily: MONO }}
      >
        {bevelLabel[bt] ?? bt} · t={geometry.bladeThickness}mm
      </text>

      <g transform={`translate(${viewCx}, ${viewCy})`}>
        {/* ── 6 Bevel Tipi Çizimi ── */}
        {bt === 'double' && (
          <DoubleBevelSVG halfT={halfT} bevelDepth={bevelDepth} arcR={arcR} angle={geometry.primaryAngle} />
        )}
        {bt === 'single' && (
          <SingleBevelSVG halfT={halfT} bevelDepth={bevelDepth} arcR={arcR} angle={geometry.primaryAngle} />
        )}
        {bt === 'compound' && (
          <CompoundBevelSVG
            halfT={halfT} bevelDepth={bevelDepth} arcR={arcR}
            primaryAngle={geometry.primaryAngle}
            secondaryAngle={geometry.secondaryAngle ?? geometry.primaryAngle + 10}
          />
        )}
        {bt === 'hollow' && (
          <HollowBevelSVG halfT={halfT} bevelDepth={bevelDepth} arcR={arcR} angle={geometry.primaryAngle} />
        )}
        {bt === 'convex' && (
          <ConvexBevelSVG halfT={halfT} bevelDepth={bevelDepth} arcR={arcR} angle={geometry.primaryAngle} />
        )}
        {bt === 'flat' && (
          <FlatBevelSVG halfT={halfT} bevelDepth={bevelDepth} />
        )}

        {/* Açı etiketi */}
        <text
          x={4}
          y={isSingle ? -halfT - 4 : -4}
          fontSize={6.5} fill={C.angle} style={{ fontFamily: MONO }}
        >
          α={geometry.primaryAngle}°
        </text>
      </g>
    </g>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Bevel SVG Alt Bileşenleri — her biri engine/geometry.ts ile tutarlı
// ─────────────────────────────────────────────────────────────────────────────

/** Çift Bileme (V-Grind) — simetrik, en yaygın (%90) */
function DoubleBevelSVG({ halfT, bevelDepth, arcR, angle }: {
  halfT: number; bevelDepth: number; arcR: number; angle: number;
}) {
  return (
    <>
      {/* Sırt */}
      <line x1={-bevelDepth} y1={-halfT} x2={-bevelDepth} y2={halfT} stroke={C.outline} strokeWidth={0.6} />
      {/* Üst bevel */}
      <line x1={-bevelDepth} y1={-halfT} x2={0} y2={0} stroke={C.bevel} strokeWidth={1} />
      {/* Alt bevel */}
      <line x1={-bevelDepth} y1={halfT} x2={0} y2={0} stroke={C.bevel} strokeWidth={1} />
      {/* Dolgu */}
      <path d={`M${-bevelDepth} ${-halfT} L0 0 L${-bevelDepth} ${halfT} Z`} fill={C.fill} />
      {/* Açı yayları */}
      <path d={describeArc(0, 0, arcR, 180, 180 + angle)} fill="none" stroke={C.angle} strokeWidth={0.7} />
      <path d={describeArc(0, 0, arcR, 180 - angle, 180)} fill="none" stroke={C.angle} strokeWidth={0.7} />
      {/* Merkez hattı */}
      <line x1={-bevelDepth - 3} y1={0} x2={arcR + 2} y2={0} stroke={C.center} strokeWidth={0.3} strokeDasharray="4 2" />
      {/* Kenar ucu */}
      <circle cx={0} cy={0} r={1.5} fill={C.edge} />
    </>
  );
}

/** Tek Bileme (Chisel) — düz üst, angled alt */
function SingleBevelSVG({ halfT, bevelDepth, arcR, angle }: {
  halfT: number; bevelDepth: number; arcR: number; angle: number;
}) {
  // Tip = düz yüzeyin kenarı (-halfT)
  const tipY = -halfT;
  return (
    <>
      {/* Sırt */}
      <line x1={-bevelDepth} y1={-halfT} x2={-bevelDepth} y2={halfT} stroke={C.outline} strokeWidth={0.6} />
      {/* Düz yüzey (üst — yatay) */}
      <line x1={-bevelDepth} y1={-halfT} x2={0} y2={-halfT} stroke={C.outline} strokeWidth={0.8} />
      {/* Bevel yüzeyi (alt → kenar) */}
      <line x1={-bevelDepth} y1={halfT} x2={0} y2={-halfT} stroke={C.bevel} strokeWidth={1} />
      {/* Dolgu */}
      <path d={`M${-bevelDepth} ${-halfT} L0 ${-halfT} L${-bevelDepth} ${halfT} Z`} fill={C.fill} />
      {/* Referans çizgisi */}
      <line x1={2} y1={tipY} x2={arcR + 4} y2={tipY} stroke={C.center} strokeWidth={0.3} strokeDasharray="4 2" />
      {/* Açı yayı */}
      <path d={describeArc(0, tipY, arcR, 180 - angle, 180)} fill="none" stroke={C.angle} strokeWidth={0.7} />
      {/* Kenar ucu */}
      <circle cx={0} cy={tipY} r={1.5} fill={C.edge} />
    </>
  );
}

/** Bileşik Bileme (Compound) — birincil + ikincil simetrik açı */
function CompoundBevelSVG({ halfT, bevelDepth, arcR, primaryAngle, secondaryAngle }: {
  halfT: number; bevelDepth: number; arcR: number; primaryAngle: number; secondaryAngle: number;
}) {
  // İkincil bevel: kenar ucunda, birincil bevel yüksekliğinin %15'i
  const secRad = (secondaryAngle * Math.PI) / 180;
  const secFraction = 0.20; // kenar ucunun %20'si
  const secBevelLen = bevelDepth * secFraction;
  const secHalfT = secBevelLen * Math.tan(Math.max(secRad, 0.05));

  // Birincil bevel: kalan kısmı
  const priLen = bevelDepth - secBevelLen;

  return (
    <>
      {/* Sırt */}
      <line x1={-bevelDepth} y1={-halfT} x2={-bevelDepth} y2={halfT} stroke={C.outline} strokeWidth={0.6} />
      {/* Üst birincil bevel */}
      <line x1={-bevelDepth} y1={-halfT} x2={-secBevelLen} y2={-secHalfT} stroke={C.bevel} strokeWidth={0.8} />
      {/* Alt birincil bevel */}
      <line x1={-bevelDepth} y1={halfT} x2={-secBevelLen} y2={secHalfT} stroke={C.bevel} strokeWidth={0.8} />
      {/* Üst ikincil bevel (kenar ucu) */}
      <line x1={-secBevelLen} y1={-secHalfT} x2={0} y2={0} stroke={C.edge} strokeWidth={0.8} strokeDasharray="3 1.5" />
      {/* Alt ikincil bevel */}
      <line x1={-secBevelLen} y1={secHalfT} x2={0} y2={0} stroke={C.edge} strokeWidth={0.8} strokeDasharray="3 1.5" />
      {/* Dolgu — birincil bölge */}
      <path d={`M${-bevelDepth} ${-halfT} L${-secBevelLen} ${-secHalfT} L${-secBevelLen} ${secHalfT} L${-bevelDepth} ${halfT} Z`} fill={C.fill} />
      {/* Dolgu — ikincil bölge (hafif farklı ton) */}
      <path d={`M${-secBevelLen} ${-secHalfT} L0 0 L${-secBevelLen} ${secHalfT} Z`} fill={C.fill} fillOpacity={0.5} />
      {/* Birincil açı yayı */}
      <path d={describeArc(0, 0, arcR, 180, 180 + primaryAngle)} fill="none" stroke={C.angle} strokeWidth={0.6} />
      <path d={describeArc(0, 0, arcR, 180 - primaryAngle, 180)} fill="none" stroke={C.angle} strokeWidth={0.6} />
      {/* İkincil açı yayı (daha geniş) */}
      <path d={describeArc(0, 0, arcR + 4, 180, 180 + secondaryAngle)} fill="none" stroke={C.edge} strokeWidth={0.5} strokeDasharray="2 1" />
      {/* Merkez hattı */}
      <line x1={-bevelDepth - 3} y1={0} x2={arcR + 4} y2={0} stroke={C.center} strokeWidth={0.3} strokeDasharray="4 2" />
      {/* İkincil açı etiketi */}
      <text x={arcR + 6} y={3} fontSize={5.5} fill={C.edge} style={{ fontFamily: MONO }}>β={secondaryAngle}°</text>
      {/* Geçiş noktaları */}
      <circle cx={-secBevelLen} cy={-secHalfT} r={0.8} fill={C.bevel} />
      <circle cx={-secBevelLen} cy={secHalfT} r={0.8} fill={C.bevel} />
      {/* Kenar ucu */}
      <circle cx={0} cy={0} r={1.5} fill={C.edge} />
    </>
  );
}

/** İçbükey Bileme (Hollow Grind) — konkav eğri, ultra ince kenar */
function HollowBevelSVG({ halfT, bevelDepth, arcR, angle }: {
  halfT: number; bevelDepth: number; arcR: number; angle: number;
}) {
  // İçbükey eğri: düz çizgiye göre "içe" doğru bombelenmiş
  // engine/geometry.ts: hollowDepth = 0.3, sin(πt) kaydırması
  const steps = 8;
  const hollowDepth = 0.30;
  const upperPath: string[] = [`M0 0`];
  const lowerPath: string[] = [`M0 0`];

  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    const xLin = -bevelDepth * t;
    const yLin = halfT * t;
    // İçbükey ofset: düz çizgiden içe doğru
    const concaveOffset = hollowDepth * halfT * Math.sin(Math.PI * t);
    upperPath.push(`L${xLin} ${-(yLin - concaveOffset)}`);
    lowerPath.push(`L${xLin} ${yLin - concaveOffset}`);
  }

  // Dolgu path (kapalı)
  const fillPoints: string[] = ['M0 0'];
  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    const xLin = -bevelDepth * t;
    const yLin = halfT * t;
    const off = hollowDepth * halfT * Math.sin(Math.PI * t);
    fillPoints.push(`L${xLin} ${-(yLin - off)}`);
  }
  fillPoints.push(`L${-bevelDepth} ${halfT}`); // sırt noktası
  for (let i = steps; i >= 1; i--) {
    const t = i / steps;
    const xLin = -bevelDepth * t;
    const yLin = halfT * t;
    const off = hollowDepth * halfT * Math.sin(Math.PI * t);
    fillPoints.push(`L${xLin} ${yLin - off}`);
  }
  fillPoints.push('Z');

  return (
    <>
      {/* Sırt */}
      <line x1={-bevelDepth} y1={-halfT} x2={-bevelDepth} y2={halfT} stroke={C.outline} strokeWidth={0.6} />
      {/* Dolgu */}
      <path d={fillPoints.join(' ')} fill={C.fill} />
      {/* Üst içbükey eğri */}
      <path d={upperPath.join(' ')} fill="none" stroke={C.bevel} strokeWidth={1} />
      {/* Alt içbükey eğri */}
      <path d={lowerPath.join(' ')} fill="none" stroke={C.bevel} strokeWidth={1} />
      {/* Düz referans çizgisi (kesikli — karşılaştırma) */}
      <line x1={0} y1={0} x2={-bevelDepth} y2={-halfT} stroke={C.dim} strokeWidth={0.3} strokeDasharray="2 2" />
      <line x1={0} y1={0} x2={-bevelDepth} y2={halfT} stroke={C.dim} strokeWidth={0.3} strokeDasharray="2 2" />
      {/* Açı yayları */}
      <path d={describeArc(0, 0, arcR, 180, 180 + angle)} fill="none" stroke={C.angle} strokeWidth={0.7} />
      <path d={describeArc(0, 0, arcR, 180 - angle, 180)} fill="none" stroke={C.angle} strokeWidth={0.7} />
      {/* Merkez hattı */}
      <line x1={-bevelDepth - 3} y1={0} x2={arcR + 2} y2={0} stroke={C.center} strokeWidth={0.3} strokeDasharray="4 2" />
      {/* Kenar ucu */}
      <circle cx={0} cy={0} r={1.5} fill={C.edge} />
    </>
  );
}

/** Dışbükey Bileme (Convex Grind) — dışa bombelenmiş, en tok kenar */
function ConvexBevelSVG({ halfT, bevelDepth, arcR, angle }: {
  halfT: number; bevelDepth: number; arcR: number; angle: number;
}) {
  // Dışbükey eğri: düz çizgiye göre "dışa" doğru bombelenmiş
  // engine/geometry.ts: convexDepth = 0.25, sin(πt) kaydırması
  const steps = 8;
  const convexDepth = 0.25;
  const upperPath: string[] = [`M0 0`];
  const lowerPath: string[] = [`M0 0`];

  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    const xLin = -bevelDepth * t;
    const yLin = halfT * t;
    const convexOffset = convexDepth * halfT * Math.sin(Math.PI * t);
    upperPath.push(`L${xLin} ${-(yLin + convexOffset)}`);
    lowerPath.push(`L${xLin} ${yLin + convexOffset}`);
  }

  // Dolgu path
  const fillPoints: string[] = ['M0 0'];
  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    const xLin = -bevelDepth * t;
    const yLin = halfT * t;
    const off = convexDepth * halfT * Math.sin(Math.PI * t);
    fillPoints.push(`L${xLin} ${-(yLin + off)}`);
  }
  fillPoints.push(`L${-bevelDepth} ${halfT}`);
  for (let i = steps; i >= 1; i--) {
    const t = i / steps;
    const xLin = -bevelDepth * t;
    const yLin = halfT * t;
    const off = convexDepth * halfT * Math.sin(Math.PI * t);
    fillPoints.push(`L${xLin} ${yLin + off}`);
  }
  fillPoints.push('Z');

  return (
    <>
      {/* Sırt */}
      <line x1={-bevelDepth} y1={-halfT} x2={-bevelDepth} y2={halfT} stroke={C.outline} strokeWidth={0.6} />
      {/* Dolgu */}
      <path d={fillPoints.join(' ')} fill={C.fill} />
      {/* Üst dışbükey eğri */}
      <path d={upperPath.join(' ')} fill="none" stroke={C.bevel} strokeWidth={1} />
      {/* Alt dışbükey eğri */}
      <path d={lowerPath.join(' ')} fill="none" stroke={C.bevel} strokeWidth={1} />
      {/* Düz referans çizgisi */}
      <line x1={0} y1={0} x2={-bevelDepth} y2={-halfT} stroke={C.dim} strokeWidth={0.3} strokeDasharray="2 2" />
      <line x1={0} y1={0} x2={-bevelDepth} y2={halfT} stroke={C.dim} strokeWidth={0.3} strokeDasharray="2 2" />
      {/* Açı yayları */}
      <path d={describeArc(0, 0, arcR, 180, 180 + angle)} fill="none" stroke={C.angle} strokeWidth={0.7} />
      <path d={describeArc(0, 0, arcR, 180 - angle, 180)} fill="none" stroke={C.angle} strokeWidth={0.7} />
      {/* Merkez hattı */}
      <line x1={-bevelDepth - 3} y1={0} x2={arcR + 2} y2={0} stroke={C.center} strokeWidth={0.3} strokeDasharray="4 2" />
      {/* Kenar ucu */}
      <circle cx={0} cy={0} r={1.5} fill={C.edge} />
    </>
  );
}

/** Tam Düz Bileme (Full Flat) — sırttan kenara tek düzlem */
function FlatBevelSVG({ halfT, bevelDepth }: {
  halfT: number; bevelDepth: number;
}) {
  // Flat grind: açı sadece kalınlık/yükseklik oranından — çok uzun, dar kama
  return (
    <>
      {/* Sırt */}
      <line x1={-bevelDepth} y1={-halfT} x2={-bevelDepth} y2={halfT} stroke={C.outline} strokeWidth={0.6} />
      {/* Üst düz bevel */}
      <line x1={-bevelDepth} y1={-halfT} x2={0} y2={0} stroke={C.bevel} strokeWidth={1} />
      {/* Alt düz bevel */}
      <line x1={-bevelDepth} y1={halfT} x2={0} y2={0} stroke={C.bevel} strokeWidth={1} />
      {/* Dolgu */}
      <path d={`M${-bevelDepth} ${-halfT} L0 0 L${-bevelDepth} ${halfT} Z`} fill={C.fill} />
      {/* Merkez hattı */}
      <line x1={-bevelDepth - 3} y1={0} x2={4} y2={0} stroke={C.center} strokeWidth={0.3} strokeDasharray="4 2" />
      {/* "Tam düz" etiket */}
      <text x={-bevelDepth / 2} y={-halfT - 3} textAnchor="middle" fontSize={5} fill={C.dim} style={{ fontFamily: MONO }}>
        FULL FLAT
      </text>
      {/* Kenar ucu */}
      <circle cx={0} cy={0} r={1.5} fill={C.edge} />
    </>
  );
}

// SVG arc yolu (açı yayı çizimi için)
function describeArc(cx: number, cy: number, r: number, startDeg: number, endDeg: number): string {
  const startRad = (startDeg * Math.PI) / 180;
  const endRad = (endDeg * Math.PI) / 180;
  const x1 = cx + r * Math.cos(startRad);
  const y1 = cy + r * Math.sin(startRad);
  const x2 = cx + r * Math.cos(endRad);
  const y2 = cy + r * Math.sin(endRad);
  const largeArc = Math.abs(endDeg - startDeg) > 180 ? 1 : 0;
  const sweep = endDeg > startDeg ? 1 : 0;
  return `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} ${sweep} ${x2} ${y2}`;
}

// ─── Yardımcı Bileşen ───
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
