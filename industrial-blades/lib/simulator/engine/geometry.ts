// =============================================================================
// Bıçak Geometri Hesaplama Modülü
// =============================================================================
// Bıçak enine kesit geometrisini hesaplar — bevel yüzeyleri, kenar kalınlığı,
// kama alanı, nüfuz genişliği vb.
//
// Akademik temel: M.01 (Temel Bıçak Geometrisi), M.03 (Kenar Geometrisi),
// M.20 (Bileme Teorisi)
//
// Tüm açılar derece (°) olarak girilir, dahili hesaplamalar radyan kullanır.
// =============================================================================

import type {
  BladeGeometry,
  BevelGeometryResult,
  BevelType,
  BladePathPoints,
  BladeMaterialProperties,
} from '../types';
import { PHYSICS, VIS } from '../constants';

// ---------------------------------------------------------------------------
// YARDIMCI: Derece ↔ Radyan
// ---------------------------------------------------------------------------

/** Dereceyi radyana çevirir */
export function degToRad(degrees: number): number {
  return degrees * (Math.PI / 180);
}

/** Radyanı dereceye çevirir */
export function radToDeg(radians: number): number {
  return radians * (180 / Math.PI);
}

// ---------------------------------------------------------------------------
// ANA FONKSİYONLAR
// ---------------------------------------------------------------------------

/**
 * Bıçak bevel geometrisini hesaplar.
 *
 * Girdiler:
 * - primaryAngle: Her taraftaki bileme açısı (°) — double bevel'de dahil açı = 2x
 * - secondaryAngle: Bileşik bevel'de ikincil açı (°)
 * - bladeThickness: Bıçak sırt kalınlığı (mm)
 * - edgeRadius: Kenar yarıçapı (µm)
 * - bevelType: Bevel tipi (double, single, compound, hollow, convex, flat)
 * - bladeHeight: Bıçak yüksekliği (mm)
 *
 * Çıkış: BevelGeometryResult nesnesi
 */
export function calculateBevelGeometry(
  geometry: BladeGeometry
): BevelGeometryResult {
  const {
    bevelType,
    primaryAngle,
    secondaryAngle,
    bladeThickness,
    edgeRadius,
    bladeHeight,
  } = geometry;

  // Açıyı güvenli aralığa kısıtla
  const safeAngle = clampAngle(primaryAngle);
  const safeSecondary = secondaryAngle
    ? clampAngle(secondaryAngle)
    : null;

  switch (bevelType) {
    case 'double':
      return calculateDoubleBevel(safeAngle, bladeThickness, edgeRadius, bladeHeight);
    case 'single':
      return calculateSingleBevel(safeAngle, bladeThickness, edgeRadius, bladeHeight);
    case 'compound':
      return calculateCompoundBevel(
        safeAngle,
        safeSecondary ?? safeAngle + 10,
        bladeThickness,
        edgeRadius,
        bladeHeight
      );
    case 'hollow':
      return calculateHollowBevel(
        safeAngle,
        bladeThickness,
        edgeRadius,
        bladeHeight,
        geometry.hollowRadius ?? bladeHeight * 2
      );
    case 'convex':
      return calculateConvexBevel(safeAngle, bladeThickness, edgeRadius, bladeHeight);
    case 'flat':
      return calculateFlatBevel(bladeThickness, edgeRadius, bladeHeight);
    default:
      return calculateDoubleBevel(safeAngle, bladeThickness, edgeRadius, bladeHeight);
  }
}

// ---------------------------------------------------------------------------
// BEVEL TİP HESAPLAMALARI
// ---------------------------------------------------------------------------

/**
 * Çift taraflı V-bileme (Double Bevel)
 *
 * Geometri:
 *   Dahil açı = 2 × primaryAngle
 *   Bevel yüksekliği h = (T/2) / tan(α)
 *   Kenar kalınlığı ≈ 2 × edgeRadius
 *   Kama alanı = T × h / 2
 */
function calculateDoubleBevel(
  angle: number,
  thickness: number,
  edgeRadius: number,
  bladeHeight: number
): BevelGeometryResult {
  const alphaRad = degToRad(angle);
  const includedAngle = angle * 2;
  const halfThickness = thickness / 2;

  // Bevel yüksekliği: sırt kalınlığının yarısını açı tanjantıyla böl
  const bevelHeight = halfThickness / Math.tan(alphaRad);

  // Fiili kenar kalınlığı (2 × kenar yarıçapı)
  const edgeThickness = edgeRadius * 2; // µm

  // Kama alanı (üçgen)
  const wedgeArea = halfThickness * bevelHeight; // mm² (tam kama, iki taraf)

  // Nüfuz genişliği: malzeme içindeki bıçak genişliği
  const penetrationWidth = 2 * bevelHeight;

  // Bevel yüzey alanı (birim uzunluk başına mm²/mm)
  const bevelSurface = halfThickness / Math.sin(alphaRad);

  return {
    includedAngle,
    bevelHeight: roundTo(bevelHeight, 3),
    edgeThickness: roundTo(edgeThickness, 2),
    wedgeArea: roundTo(wedgeArea, 4),
    penetrationWidth: roundTo(penetrationWidth, 3),
    bevelSurfaceA: roundTo(bevelSurface, 3),
    bevelSurfaceB: roundTo(bevelSurface, 3),
  };
}

/**
 * Tek taraflı bileme (Single / Chisel Bevel)
 *
 * Geometri:
 *   Dahil açı = primaryAngle (tek taraf)
 *   Bevel yüksekliği h = T / tan(α)
 *   Bir taraf düz (flat), diğer taraf açılı
 */
function calculateSingleBevel(
  angle: number,
  thickness: number,
  edgeRadius: number,
  bladeHeight: number
): BevelGeometryResult {
  const alphaRad = degToRad(angle);
  const includedAngle = angle; // tek taraf = dahil açı

  const bevelHeight = thickness / Math.tan(alphaRad);
  const edgeThickness = edgeRadius * 2;
  const wedgeArea = (thickness * bevelHeight) / 2;
  const penetrationWidth = bevelHeight;
  const bevelSurface = thickness / Math.sin(alphaRad);

  return {
    includedAngle,
    bevelHeight: roundTo(bevelHeight, 3),
    edgeThickness: roundTo(edgeThickness, 2),
    wedgeArea: roundTo(wedgeArea, 4),
    penetrationWidth: roundTo(penetrationWidth, 3),
    bevelSurfaceA: roundTo(bevelSurface, 3),
    bevelSurfaceB: 0, // düz taraf
  };
}

/**
 * Bileşik bileme (Compound Bevel)
 *
 * Geometri:
 *   İki kademeli açı: birincil (geniş) + ikincil (dar)
 *   Birincil açı bıçak gövdesini oluşturur
 *   İkincil açı kenar ucunu oluşturur — genellikle birincilden dar
 *   Dahil açı = 2 × ikincil açı (kesme noktasındaki açı)
 */
function calculateCompoundBevel(
  primaryAngle: number,
  secondaryAngle: number,
  thickness: number,
  edgeRadius: number,
  bladeHeight: number
): BevelGeometryResult {
  const primaryRad = degToRad(primaryAngle);
  const secondaryRad = degToRad(secondaryAngle);

  const halfThickness = thickness / 2;

  // İkincil bevel (kenar ucunda) genellikle birincilden daha dar veya geniş olabilir
  // Birincil bevel yüksekliği — bıçak gövdesi
  const primaryBevelHeight = halfThickness / Math.tan(primaryRad);

  // İkincil bevel yüksekliği — kenar ucunun son 0.5-2mm'si
  // İkincil bevel kalınlığı: birincil bevel'in kenar ucundaki kalınlık
  const secondaryBevelWidthRatio = 0.15; // İkincil bevel, birincil yüksekliğin %15'i
  const secondaryBevelHeight = primaryBevelHeight * secondaryBevelWidthRatio;
  const secondaryBevelThickness = secondaryBevelHeight * Math.tan(secondaryRad);

  const includedAngle = secondaryAngle * 2;
  const edgeThickness = edgeRadius * 2;

  // Toplam kama alanı
  const primaryArea = halfThickness * primaryBevelHeight;
  const secondaryArea = secondaryBevelThickness * secondaryBevelHeight;
  const wedgeArea = primaryArea + secondaryArea;

  const penetrationWidth = 2 * (primaryBevelHeight + secondaryBevelHeight);

  const primarySurface = halfThickness / Math.sin(primaryRad);
  const secondarySurface = secondaryBevelThickness / Math.sin(secondaryRad);

  return {
    includedAngle,
    bevelHeight: roundTo(primaryBevelHeight + secondaryBevelHeight, 3),
    edgeThickness: roundTo(edgeThickness, 2),
    wedgeArea: roundTo(wedgeArea, 4),
    penetrationWidth: roundTo(penetrationWidth, 3),
    bevelSurfaceA: roundTo(primarySurface + secondarySurface, 3),
    bevelSurfaceB: roundTo(primarySurface + secondarySurface, 3),
  };
}

/**
 * İçbükey bileme (Hollow Grind)
 *
 * Geometri:
 *   Bevel yüzeyi konkav (içbükey) — teğet açı kenar ucunda daha dar
 *   Sonuç: çok ince kenar, düşük dayanıklılık
 *   hollowRadius: taşlama diski yarıçapı — büyük R = daha sığ hollow
 */
function calculateHollowBevel(
  angle: number,
  thickness: number,
  edgeRadius: number,
  bladeHeight: number,
  hollowRadius: number
): BevelGeometryResult {
  const alphaRad = degToRad(angle);
  const halfThickness = thickness / 2;

  // Hollow grind'de efektif kenar açısı düz grind'den daha dardır
  // Teğet noktada açı ≈ angle × 0.6-0.8 (hollowRadius'a bağlı)
  const hollowFactor = 1 - (halfThickness / (2 * hollowRadius));
  const effectiveAngle = angle * Math.max(0.5, hollowFactor);
  const effectiveRad = degToRad(effectiveAngle);

  const bevelHeight = halfThickness / Math.tan(effectiveRad);
  const includedAngle = effectiveAngle * 2;
  const edgeThickness = edgeRadius * 2;

  // Hollow grind kama alanı düz grind'den küçüktür (içbükey → daha az et)
  const flatWedgeArea = halfThickness * bevelHeight;
  const hollowReduction = 0.65; // hollow grind, düz grind alanının ~%65'i
  const wedgeArea = flatWedgeArea * hollowReduction;

  const penetrationWidth = 2 * bevelHeight;

  // Hollow bevel yüzey alanı (ark uzunluğu yaklaşımı)
  const bevelSurface = (halfThickness / Math.sin(effectiveRad)) * 1.05;

  return {
    includedAngle: roundTo(includedAngle, 1),
    bevelHeight: roundTo(bevelHeight, 3),
    edgeThickness: roundTo(edgeThickness, 2),
    wedgeArea: roundTo(wedgeArea, 4),
    penetrationWidth: roundTo(penetrationWidth, 3),
    bevelSurfaceA: roundTo(bevelSurface, 3),
    bevelSurfaceB: roundTo(bevelSurface, 3),
  };
}

/**
 * Dışbükey bileme (Convex Grind)
 *
 * Geometri:
 *   Bevel yüzeyi dışbükey — kenar arkasında en fazla malzeme
 *   Sonuç: en tok kenar, yüksek dayanıklılık, daha yüksek kesme kuvveti
 */
function calculateConvexBevel(
  angle: number,
  thickness: number,
  edgeRadius: number,
  bladeHeight: number
): BevelGeometryResult {
  const alphaRad = degToRad(angle);
  const halfThickness = thickness / 2;

  const bevelHeight = halfThickness / Math.tan(alphaRad);
  const includedAngle = angle * 2;
  const edgeThickness = edgeRadius * 2;

  // Convex grind kama alanı düz grind'den büyüktür
  const flatWedgeArea = halfThickness * bevelHeight;
  const convexAddition = 1.35; // konveks, düz grind alanının ~%135'i
  const wedgeArea = flatWedgeArea * convexAddition;

  const penetrationWidth = 2 * bevelHeight;
  const bevelSurface = (halfThickness / Math.sin(alphaRad)) * 1.10; // konveks → daha uzun yüzey

  return {
    includedAngle,
    bevelHeight: roundTo(bevelHeight, 3),
    edgeThickness: roundTo(edgeThickness, 2),
    wedgeArea: roundTo(wedgeArea, 4),
    penetrationWidth: roundTo(penetrationWidth, 3),
    bevelSurfaceA: roundTo(bevelSurface, 3),
    bevelSurfaceB: roundTo(bevelSurface, 3),
  };
}

/**
 * Tam düz bileme (Full Flat Grind)
 *
 * Geometri:
 *   Sırttan kenar ucuna tek düzlem — açı yalnızca kalınlık/yükseklik oranından çıkar
 *   İnce, uzun kama profili
 */
function calculateFlatBevel(
  thickness: number,
  edgeRadius: number,
  bladeHeight: number
): BevelGeometryResult {
  const halfThickness = thickness / 2;

  // Flat grind açısı: atan(halfThickness / bladeHeight)
  const alphaRad = Math.atan(halfThickness / bladeHeight);
  const angle = radToDeg(alphaRad);
  const includedAngle = angle * 2;
  const edgeThickness = edgeRadius * 2;

  const bevelHeight = bladeHeight; // full flat — tüm yükseklik bevel
  const wedgeArea = halfThickness * bladeHeight;
  const penetrationWidth = 2 * bladeHeight;
  const bevelSurface = Math.sqrt(halfThickness ** 2 + bladeHeight ** 2);

  return {
    includedAngle: roundTo(includedAngle, 1),
    bevelHeight: roundTo(bevelHeight, 3),
    edgeThickness: roundTo(edgeThickness, 2),
    wedgeArea: roundTo(wedgeArea, 4),
    penetrationWidth: roundTo(penetrationWidth, 3),
    bevelSurfaceA: roundTo(bevelSurface, 3),
    bevelSurfaceB: roundTo(bevelSurface, 3),
  };
}

// ---------------------------------------------------------------------------
// SVG ÇİZİM KOORDİNATLARI
// ---------------------------------------------------------------------------

/**
 * Bıçak enine kesit SVG yolu noktalarını hesaplar.
 *
 * Koordinat sistemi:
 *   Orijin = bıçak kenar ucu (alt orta)
 *   X = yatay (kalınlık ekseni)
 *   Y = dikey (yükseklik ekseni, yukarı pozitif)
 *
 * @param geometry BladeGeometry parametreleri
 * @param scale Ölçek: piksel/mm
 * @returns BladePathPoints — SVG path noktaları
 */
export function calculateBladePathPoints(
  geometry: BladeGeometry,
  scale: number = VIS.BLADE_SCALE
): BladePathPoints {
  const {
    bevelType,
    primaryAngle,
    secondaryAngle,
    bladeThickness,
    bladeHeight,
  } = geometry;

  const safeAngle = clampAngle(primaryAngle);
  const alphaRad = degToRad(safeAngle);
  const halfT = (bladeThickness / 2) * scale;

  // Adaptif gövde yüksekliği: bevel bölgesine orantılı
  // Sabit 760px gövde yerine, bevel'ın ~3.5 katı veya minimum 80px
  const bevelH_approx = halfT / Math.tan(alphaRad || 0.01);
  const bodyH = Math.max(bevelH_approx * 3.5, 80);
  const H = bevelH_approx + bodyH;

  // Kenar ucu noktası
  const edgeTip: [number, number] = [0, 0];

  switch (bevelType) {
    case 'single':
      return calculateSingleBevelPath(safeAngle, halfT * 2, H, scale);

    case 'compound':
      return calculateCompoundBevelPath(
        safeAngle,
        secondaryAngle ?? safeAngle + 10,
        halfT * 2,
        H,
        scale
      );

    case 'hollow':
      return calculateHollowBevelPath(safeAngle, halfT * 2, H, scale);

    case 'convex':
      return calculateConvexBevelPath(safeAngle, halfT * 2, H, scale);

    case 'flat':
      return calculateFlatBevelPath(halfT * 2, H, scale);

    case 'double':
    default:
      return calculateDoubleBevelPath(safeAngle, halfT * 2, H, scale);
  }
}

function calculateDoubleBevelPath(
  angle: number,
  fullThickness: number,
  height: number,
  scale: number
): BladePathPoints {
  const alphaRad = degToRad(angle);
  const halfT = fullThickness / 2;
  const bevelH = halfT / Math.tan(alphaRad);

  const edgeTip: [number, number] = [0, 0];

  // V-grind: kenar ucundan sırta doğru iki düz çizgi
  const bevelA: [number, number][] = [
    [0, 0],
    [-halfT, bevelH],
  ];
  const bevelB: [number, number][] = [
    [0, 0],
    [halfT, bevelH],
  ];

  // Sırt çizgisi: bevel üstünden bıçak tepesine
  const spine: [number, number][] = [
    [-halfT, bevelH],
    [-halfT, height],
    [halfT, height],
    [halfT, bevelH],
  ];

  return { spine, bevelA, bevelB, edgeTip };
}

function calculateSingleBevelPath(
  angle: number,
  fullThickness: number,
  height: number,
  scale: number
): BladePathPoints {
  const alphaRad = degToRad(angle);
  const bevelH = fullThickness / Math.tan(alphaRad);

  const edgeTip: [number, number] = [0, 0];

  // Tek taraf: sol düz, sağ açılı
  const bevelA: [number, number][] = [
    [0, 0],
    [0, bevelH], // düz taraf (flat)
  ];
  const bevelB: [number, number][] = [
    [0, 0],
    [fullThickness, bevelH],
  ];

  const spine: [number, number][] = [
    [0, bevelH],
    [0, height],
    [fullThickness, height],
    [fullThickness, bevelH],
  ];

  return { spine, bevelA, bevelB, edgeTip };
}

function calculateCompoundBevelPath(
  primaryAngle: number,
  secondaryAngle: number,
  fullThickness: number,
  height: number,
  scale: number
): BladePathPoints {
  const primaryRad = degToRad(primaryAngle);
  const secondaryRad = degToRad(secondaryAngle);
  const halfT = fullThickness / 2;

  // İkincil bevel (kenar ucu — alttaki dar bölüm)
  const secondaryH = halfT * 0.15 / Math.tan(secondaryRad);
  const secondaryWidth = secondaryH * Math.tan(secondaryRad);

  // Birincil bevel (üst geniş bölüm)
  const primaryH = (halfT - secondaryWidth) / Math.tan(primaryRad);

  const edgeTip: [number, number] = [0, 0];

  const bevelA: [number, number][] = [
    [0, 0],
    [-secondaryWidth, secondaryH],
    [-halfT, secondaryH + primaryH],
  ];
  const bevelB: [number, number][] = [
    [0, 0],
    [secondaryWidth, secondaryH],
    [halfT, secondaryH + primaryH],
  ];

  const totalBevelH = secondaryH + primaryH;
  const spine: [number, number][] = [
    [-halfT, totalBevelH],
    [-halfT, height],
    [halfT, height],
    [halfT, totalBevelH],
  ];

  return {
    spine,
    bevelA,
    bevelB,
    edgeTip,
    secondaryBevelA: [[0, 0], [-secondaryWidth, secondaryH]],
    secondaryBevelB: [[0, 0], [secondaryWidth, secondaryH]],
  };
}

function calculateHollowBevelPath(
  angle: number,
  fullThickness: number,
  height: number,
  scale: number
): BladePathPoints {
  const alphaRad = degToRad(angle);
  const halfT = fullThickness / 2;
  const bevelH = halfT / Math.tan(alphaRad);

  // İçbükey eğri noktaları (4 noktalı cubic bezier yaklaşımı)
  const steps = 8;
  const bevelA: [number, number][] = [[0, 0]];
  const bevelB: [number, number][] = [[0, 0]];

  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    const y = bevelH * t;
    // İçbükey: x = halfT * t ile düze göre daha az genişlik (iç tartılmış)
    const hollowDepth = 0.3;
    const linearX = halfT * t;
    const concaveOffset = hollowDepth * halfT * Math.sin(Math.PI * t);
    const x = linearX - concaveOffset;
    bevelA.push([-x, y]);
    bevelB.push([x, y]);
  }

  const spine: [number, number][] = [
    [-halfT, bevelH],
    [-halfT, height],
    [halfT, height],
    [halfT, bevelH],
  ];

  return { spine, bevelA, bevelB, edgeTip: [0, 0] };
}

function calculateConvexBevelPath(
  angle: number,
  fullThickness: number,
  height: number,
  scale: number
): BladePathPoints {
  const alphaRad = degToRad(angle);
  const halfT = fullThickness / 2;
  const bevelH = halfT / Math.tan(alphaRad);

  const steps = 8;
  const bevelA: [number, number][] = [[0, 0]];
  const bevelB: [number, number][] = [[0, 0]];

  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    const y = bevelH * t;
    const convexDepth = 0.25;
    const linearX = halfT * t;
    const convexOffset = convexDepth * halfT * Math.sin(Math.PI * t);
    const x = linearX + convexOffset;
    bevelA.push([-x, y]);
    bevelB.push([x, y]);
  }

  const spine: [number, number][] = [
    [-halfT, bevelH],
    [-halfT, height],
    [halfT, height],
    [halfT, bevelH],
  ];

  return { spine, bevelA, bevelB, edgeTip: [0, 0] };
}

function calculateFlatBevelPath(
  fullThickness: number,
  height: number,
  scale: number
): BladePathPoints {
  const halfT = fullThickness / 2;

  // Full flat: sırttan kenar noktasına tek doğru
  const bevelA: [number, number][] = [
    [0, 0],
    [-halfT, height],
  ];
  const bevelB: [number, number][] = [
    [0, 0],
    [halfT, height],
  ];

  // Sırt sadece üst kenar
  const spine: [number, number][] = [
    [-halfT, height],
    [halfT, height],
  ];

  return { spine, bevelA, bevelB, edgeTip: [0, 0] };
}

// ---------------------------------------------------------------------------
// TÜRETME FONKSİYONLARI
// ---------------------------------------------------------------------------

/**
 * Dahil açıyı hesaplar — bevel tipine göre
 */
export function calculateIncludedAngle(
  bevelType: BevelType,
  primaryAngle: number
): number {
  if (bevelType === 'single') {
    return primaryAngle;
  }
  return primaryAngle * 2;
}

/**
 * Verilen nüfuz derinliğinde bıçak genişliğini hesaplar.
 * Malzeme içinde belirli derinlikteki bıçağın yatay boyutu.
 */
export function widthAtDepth(
  geometry: BladeGeometry,
  depth: number
): number {
  const { bevelType, primaryAngle, bladeThickness, bladeHeight } = geometry;
  const safeAngle = clampAngle(primaryAngle);

  const geoResult = calculateBevelGeometry(geometry);
  const bevelH = geoResult.bevelHeight;

  if (depth <= 0) return 0;

  if (depth >= bevelH) {
    // Bevel üstünde → sabit kalınlık
    return bladeThickness;
  }

  // Bevel bölgesinde — lineer interpolasyon (V-grind yaklaşımı)
  const ratio = depth / bevelH;

  switch (bevelType) {
    case 'single':
      return bladeThickness * ratio;
    case 'hollow':
      // İçbükey → lineerden daha yavaş genişler
      return bladeThickness * Math.pow(ratio, 1.3);
    case 'convex':
      // Dışbükey → lineerden daha hızlı genişler
      return bladeThickness * Math.pow(ratio, 0.7);
    case 'double':
    case 'compound':
    case 'flat':
    default:
      return bladeThickness * ratio;
  }
}

/**
 * Bıçak kenar keskinlik indeksini hesaplar (0–100).
 *
 * Bileşenler:
 *   1. Geometri açısı: dar açı → yüksek keskinlik
 *   2. Kenar yarıçapı: küçük R → yüksek keskinlik
 *   3. Bevel tipi bonusu
 *   4. Bıçak malzeme sertliği: yüksek HRC → daha ince kenar tutabilir
 */
export function calculateSharpnessIndex(
  geometry: BladeGeometry,
  bladeMaterial?: BladeMaterialProperties
): number {
  const safeAngle = clampAngle(geometry.primaryAngle);
  const includedAngle = calculateIncludedAngle(geometry.bevelType, safeAngle);
  const halfIncludedRad = degToRad(includedAngle / 2);

  // Açı bileşeni: dar açı → yüksek keskinlik
  const angleComponent = 1 / (1 + Math.tan(halfIncludedRad));

  // Kenar yarıçapı bileşeni: küçük R → yüksek keskinlik
  const referenceRadius = 25; // µm referans
  const radiusFactor = Math.max(0, 1 - (geometry.edgeRadius / referenceRadius));

  // Bevel tipi bonusu
  const bevelBonus = getBevelSharpnessBonus(geometry.bevelType);

  // Bıçak malzeme sertlik etkisi (opsiyonel)
  // Yüksek sertlik → daha ince kenar tutabilir → daha keskin
  // Referans: HRC 61 (karbonlu çelik ortası)
  let materialFactor = 1.0;
  if (bladeMaterial) {
    const avgHRC = (bladeMaterial.hardnessHRC[0] + bladeMaterial.hardnessHRC[1]) / 2;
    materialFactor = 0.85 + 0.15 * Math.min(1.5, avgHRC / PHYSICS.REFERENCE_HARDNESS);
  }

  const rawScore = angleComponent * (0.7 + 0.3 * radiusFactor) * 100 * bevelBonus * materialFactor;
  return clampScore(rawScore);
}

/**
 * Bıçak kenar mekanik dayanıklılık indeksini hesaplar (0–100).
 *
 * Bileşenler:
 *   1. Dahil açı: geniş açı → yüksek dayanıklılık
 *   2. Bıçak kalınlığı: kalın bıçak → yüksek dayanıklılık
 *   3. Bevel tipi çarpanı
 *   4. Bıçak malzeme mekaniği: tokluk + sertlik → dayanıklılık
 */
export function calculateDurabilityIndex(
  geometry: BladeGeometry,
  bladeMaterial?: BladeMaterialProperties
): number {
  const safeAngle = clampAngle(geometry.primaryAngle);
  const includedAngle = calculateIncludedAngle(geometry.bevelType, safeAngle);

  // Açı bileşeni: geniş açı → yüksek dayanıklılık
  const refAngle = PHYSICS.REFERENCE_ANGLE * 2; // 44° dahil
  const angleComponent = Math.min(2.0, includedAngle / refAngle);

  // Kalınlık bileşeni
  const refThickness = 0.15; // mm referans
  const thicknessComponent = Math.min(2.0, geometry.bladeThickness / refThickness);

  // Bevel tipi çarpanı
  const bevelMultiplier = getBevelDurabilityMultiplier(geometry.bevelType);

  // Bıçak malzeme dayanıklılık etkisi (opsiyonel)
  // Tokluk (fractureToughness) + sertlik = kenar sağlamlığı
  // Tungsten karbür: HRC 83.5 ort, tokluk 12 → orta (sert ama kırılgan)
  // Karbon çelik: HRC 61 ort, tokluk 25 → iyi denge
  // Seramik: HRC 85, tokluk 6 → düşük (aşırı kırılgan)
  let materialFactor = 1.0;
  if (bladeMaterial) {
    const avgHRC = (bladeMaterial.hardnessHRC[0] + bladeMaterial.hardnessHRC[1]) / 2;
    // Sertlik katkısı (0.3 ağırlık)
    const hardnessScore = Math.min(1.5, avgHRC / PHYSICS.REFERENCE_HARDNESS);
    // Tokluk katkısı (0.7 ağırlık) — dayanıklılıkta tokluk daha kritik
    const toughnessScore = Math.min(1.8, bladeMaterial.fractureToughness / 20);
    materialFactor = 0.5 + 0.5 * (hardnessScore * 0.3 + toughnessScore * 0.7);
  }

  const rawScore = 40 * angleComponent * (0.6 + 0.4 * Math.sqrt(thicknessComponent)) * bevelMultiplier * materialFactor;
  return clampScore(rawScore);
}

// ---------------------------------------------------------------------------
// YARDIMCI FONKSİYONLAR
// ---------------------------------------------------------------------------

function getBevelSharpnessBonus(bevelType: BevelType): number {
  const bonuses: Record<BevelType, number> = {
    hollow: 1.15,     // İçbükey → en ince kenar → en keskin
    flat: 1.10,       // Düz → ince profil
    single: 1.08,     // Tek taraf → dar dahil açı
    double: 1.00,     // Referans
    compound: 0.95,   // İkincil bevel biraz küntleştirir
    convex: 0.90,     // Dışbükey → en kalın kenar arkası
  };
  return bonuses[bevelType];
}

function getBevelDurabilityMultiplier(bevelType: BevelType): number {
  const multipliers: Record<BevelType, number> = {
    convex: 1.30,     // Dışbükey → en tok
    compound: 1.15,   // Bileşik → iyi destek
    double: 1.00,     // Referans
    flat: 0.85,       // Düz → az destek
    single: 0.80,     // Tek taraf → asimetrik stres
    hollow: 0.65,     // İçbükey → en az malzeme arkada
  };
  return multipliers[bevelType];
}

function clampAngle(angle: number): number {
  return Math.max(PHYSICS.MIN_ANGLE, Math.min(PHYSICS.MAX_ANGLE, angle));
}

function clampScore(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function roundTo(value: number, decimals: number): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}
