// =============================================================================
// Dairesel Bıçak Geometri Modülü (Faz 3)
// =============================================================================
// Dairesel bıçak (circular, rotary-knife) enine kesit geometrisini hesaplar.
// Temas yay uzunluğu, etkin kesim yarıçapı, çevre uzunluğu ve SVG path üretimi.
//
// Single Responsibility: Sadece dairesel geometri hesapları.
// Lineer geometri = geometry.ts (dokunulmaz).
//
// Akademik temel: Makale 15 (Slitting Methods — Shear/Crush/Razor),
// Makale 37 (Makaslama Teknolojisi)
// =============================================================================

import type {
  BladeGeometry,
  CircularBladeParams,
  CircularBevelGeometryResult,
  CircularBladePathPoints,
} from '../types';
import { calculateBevelGeometry, degToRad } from './geometry';
import { CIRCULAR_PHYSICS } from '../constants';

// ---------------------------------------------------------------------------
// 1. DAİRESEL BEVEL GEOMETRİSİ
// ---------------------------------------------------------------------------

/**
 * Dairesel bıçak bevel geometrisini hesaplar.
 * Lineer bevel hesabını genişletir + dairesel spesifik metrikler ekler.
 *
 * Temas yay uzunluğu: L = C × √(R × t)
 *   R = etkin kesim yarıçapı (mm)
 *   t = malzeme kalınlığı (mm)
 *   C = temas yay katsayısı (CONTACT_ARC_COEFFICIENT)
 */
export function calculateCircularBevelGeometry(
  bladeGeometry: BladeGeometry,
  circularParams: CircularBladeParams,
  materialThickness: number,
): CircularBevelGeometryResult {
  // Lineer bevel hesabını delege et (DRY — tekrar yazmıyoruz)
  const baseResult = calculateBevelGeometry(bladeGeometry);

  const R = circularParams.outerDiameter / 2;
  const effectiveCuttingRadius = R - circularParams.bladeOverlap;
  const circumference = Math.PI * circularParams.outerDiameter;

  // Temas yay uzunluğu — L = C × √(R × t)
  // t_mm = materialThickness mm olarak (µm değil — SimulationInput zaten mm)
  const t_mm = materialThickness;
  const contactArcLength =
    CIRCULAR_PHYSICS.CONTACT_ARC_COEFFICIENT *
    Math.sqrt(Math.max(effectiveCuttingRadius, 1) * Math.max(t_mm, 0.001));

  return {
    ...baseResult,
    contactArcLength: roundTo(contactArcLength, 3),
    effectiveCuttingRadius: roundTo(effectiveCuttingRadius, 2),
    circumference: roundTo(circumference, 2),
  };
}

// ---------------------------------------------------------------------------
// 2. DAİRESEL BIÇAK SVG PATH ÜRETİMİ
// ---------------------------------------------------------------------------

/**
 * Dairesel bıçak için SVG çizim koordinatlarını üretir.
 * Üstten bakış (top view): dış daire + iç daire + kenar profili.
 * Yandan bakış (side view): disk kalınlığı + bevel profili.
 *
 * SVG viewport: W × H px, merkez (cx, cy)
 */
export function calculateCircularBladePathPoints(
  circularParams: CircularBladeParams,
  bladeGeometry: BladeGeometry,
  viewWidth: number = 460,
  viewHeight: number = 320,
): CircularBladePathPoints {
  const cx = viewWidth / 2;
  const cy = viewHeight / 2;

  // Ölçek: bıçağı viewport'a sığdır (OD → %75 viewport)
  const maxDim = Math.min(viewWidth, viewHeight) * 0.75;
  const scale = maxDim / circularParams.outerDiameter;

  const outerR = (circularParams.outerDiameter / 2) * scale;
  const innerR = (circularParams.innerDiameter / 2) * scale;

  // Kenar bevel profili — sağ kenar radyal kesiti
  const edgeProfile = generateEdgeProfile(
    circularParams,
    bladeGeometry,
    cx,
    cy,
    outerR,
    scale,
  );

  // Kalınlık çizgisi — alt tarafta yandan görünüm
  const thicknessScaled = bladeGeometry.bladeThickness * scale * 3; // 3x büyütme (görünürlük)
  const thicknessLine: [number, number][] = [
    [cx + outerR + 15, cy - thicknessScaled / 2],
    [cx + outerR + 15, cy + thicknessScaled / 2],
  ];

  return {
    outerCircle: { cx, cy, r: outerR },
    innerCircle: { cx, cy, r: innerR },
    edgeProfile,
    thicknessLine,
    dimensionAnchors: {
      odLeft: [cx - outerR, cy],
      odRight: [cx + outerR, cy],
      idLeft: [cx - innerR, cy],
      idRight: [cx + innerR, cy],
      thicknessTop: [cx + outerR + 15, cy - thicknessScaled / 2],
      thicknessBottom: [cx + outerR + 15, cy + thicknessScaled / 2],
    },
  };
}

// ---------------------------------------------------------------------------
// 3. YARDIMCI FONKSİYONLAR
// ---------------------------------------------------------------------------

/**
 * Kenar bevel profilini radyal kesit olarak üretir.
 * Bıçak kenarının yakınlaştırılmış radyal kesiti.
 * 6 bevel tipi desteklenir: double, single, compound, hollow, convex, flat
 */
function generateEdgeProfile(
  circularParams: CircularBladeParams,
  bladeGeometry: BladeGeometry,
  cx: number,
  cy: number,
  outerR: number,
  scale: number,
): [number, number][] {
  const halfThickness = (bladeGeometry.bladeThickness * scale * 3) / 2;
  const bevelAngleRad = degToRad(bladeGeometry.primaryAngle);
  const tanA = Math.tan(Math.max(bevelAngleRad, 0.05));
  const edgeX = cx + outerR;
  const bt = bladeGeometry.bevelType;

  switch (bt) {
    case 'single': {
      // Tek bileme: düz üst yüzey + tam kalınlığı kat eden bevel
      const bevelDepth = (2 * halfThickness) / tanA;
      return [
        [edgeX - bevelDepth, cy - halfThickness],   // üst sırt
        [edgeX, cy - halfThickness],                  // düz yüzey ucu (kenar)
        [edgeX - bevelDepth, cy + halfThickness],    // alt sırt
      ];
    }

    case 'compound': {
      // Bileşik: birincil + ikincil açı
      const bevelDepth = halfThickness / tanA;
      const secAngle = bladeGeometry.secondaryAngle ?? bladeGeometry.primaryAngle + 10;
      const secRad = degToRad(secAngle);
      const secFraction = 0.20;
      const secLen = bevelDepth * secFraction;
      const secHalfT = secLen * Math.tan(Math.max(secRad, 0.05));
      return [
        [edgeX - bevelDepth, cy - halfThickness],           // üst sırt
        [edgeX - secLen, cy - secHalfT],                      // birincil→ikincil geçiş (üst)
        [edgeX, cy],                                           // kenar ucu
        [edgeX - secLen, cy + secHalfT],                      // birincil→ikincil geçiş (alt)
        [edgeX - bevelDepth, cy + halfThickness],            // alt sırt
      ];
    }

    case 'hollow': {
      // İçbükey: konkav eğri (engine: hollowDepth=0.3, sin(πt))
      const bevelDepth = halfThickness / tanA;
      const steps = 6;
      const hollowDepth = 0.30;
      const points: [number, number][] = [];
      // Üst eğri (sırt → kenar)
      for (let i = steps; i >= 0; i--) {
        const t = i / steps;
        const xLin = bevelDepth * t;
        const yLin = halfThickness * t;
        const off = hollowDepth * halfThickness * Math.sin(Math.PI * t);
        points.push([edgeX - xLin, cy - (yLin - off)]);
      }
      // Alt eğri (kenar → sırt)
      for (let i = 1; i <= steps; i++) {
        const t = i / steps;
        const xLin = bevelDepth * t;
        const yLin = halfThickness * t;
        const off = hollowDepth * halfThickness * Math.sin(Math.PI * t);
        points.push([edgeX - xLin, cy + (yLin - off)]);
      }
      return points;
    }

    case 'convex': {
      // Dışbükey: konveks eğri (engine: convexDepth=0.25, sin(πt))
      const bevelDepth = halfThickness / tanA;
      const steps = 6;
      const convexDepth = 0.25;
      const points: [number, number][] = [];
      for (let i = steps; i >= 0; i--) {
        const t = i / steps;
        const xLin = bevelDepth * t;
        const yLin = halfThickness * t;
        const off = convexDepth * halfThickness * Math.sin(Math.PI * t);
        points.push([edgeX - xLin, cy - (yLin + off)]);
      }
      for (let i = 1; i <= steps; i++) {
        const t = i / steps;
        const xLin = bevelDepth * t;
        const yLin = halfThickness * t;
        const off = convexDepth * halfThickness * Math.sin(Math.PI * t);
        points.push([edgeX - xLin, cy + (yLin + off)]);
      }
      return points;
    }

    case 'flat': {
      // Tam düz: sırttan kenara tek düzlem (uzun, dar kama)
      const bevelDepth = halfThickness * 3; // bladeHeight oranı
      return [
        [edgeX - bevelDepth, cy - halfThickness],
        [edgeX, cy],
        [edgeX - bevelDepth, cy + halfThickness],
      ];
    }

    case 'double':
    default: {
      // Çift bileme (V): simetrik
      const bevelDepth = halfThickness / tanA;
      return [
        [edgeX - bevelDepth, cy - halfThickness],
        [edgeX, cy],
        [edgeX - bevelDepth, cy + halfThickness],
      ];
    }
  }
}

/**
 * Dairesel bıçak çevresel hızını hesaplar.
 * v = π × D × n / 1000 (m/min)
 */
export function calculatePeripheralSpeed(
  outerDiameter: number,
  rpm: number,
): number {
  return (Math.PI * outerDiameter * rpm) / 1000;
}

/**
 * Lineer kesim hızından RPM'e dönüşüm.
 * n = v × 1000 / (π × D) (RPM)
 */
export function linearSpeedToRPM(
  linearSpeed: number,
  outerDiameter: number,
): number {
  if (outerDiameter <= 0) return 0;
  return (linearSpeed * 1000) / (Math.PI * outerDiameter);
}

function roundTo(value: number, decimals: number): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}
