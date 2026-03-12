// =============================================================================
// Malzeme-Bıçak Uyumluluk Matrisi
// =============================================================================
// Kesilen malzeme, bıçak tipi, bıçak malzemesi, kaplama ve makine tipi
// arasındaki uyumluluk kurallarını yönetir.
//
// Akademik temel: M.01–M.44 makale serisi bilgi birikimi
// =============================================================================

import type {
  CutMaterialProperties,
  BladeMaterialProperties,
  BladeType,
  CoatingType,
  CuttingMethod,
  MachineType,
  MaterialCategory,
  Recommendation,
} from '../types';
import {
  BLADE_TYPES,
  COATINGS,
  MACHINE_TYPES,
  type BladeTypeInfo,
  type MachineTypeInfo,
} from '../constants';

// ---------------------------------------------------------------------------
// 1. MALZEME-KAPLAMA UYUM MATRİSİ
// ---------------------------------------------------------------------------

/** Kaplama uyum kuralı */
interface CoatingRule {
  materialCategories: readonly MaterialCategory[];
  recommended: readonly CoatingType[];
  reason: string;
}

const COATING_RULES: readonly CoatingRule[] = [
  {
    materialCategories: ['tape', 'label'],
    recommended: ['dlc', 'ptfe', 'tialn'],
    reason: 'Yapışkanlı malzemeler — DLC veya PTFE kaplama yapışmayı önler, ömrü uzatır.',
  },
  {
    materialCategories: ['paper', 'corrugated', 'cardboard'],
    recommended: ['tialn', 'tin', 'titanium'],
    reason: 'Kağıt/karton aşındırıcıdır (CaCO₃ dolgu). TiAlN veya TiN yüksek aşınma direnci sağlar.',
  },
  {
    materialCategories: ['foil'],
    recommended: ['crn', 'tin', 'chrome'],
    reason: 'Alüminyum folyo — CrN korozyon direnci + düşük sürtünme sağlar.',
  },
  {
    materialCategories: ['film'],
    recommended: ['dlc', 'ptfe'],
    reason: 'Film malzemeler genellikle düşük aşındırıcılıkta. DLC/PTFE sürtünmeyi düşürür.',
  },
  {
    materialCategories: ['rubber'],
    recommended: ['ptfe', 'dlc'],
    reason: 'Kauçuk yüksek sürtünme — PTFE yapışma ve sürtünmeyi minimumda tutar.',
  },
  {
    materialCategories: ['textile', 'nonwoven'],
    recommended: ['tin', 'tialn', 'crn'],
    reason: 'Tekstil lifleri aşındırıcı olabilir. TiN/TiAlN kenar ömrünü artırır.',
  },
  {
    materialCategories: ['composite', 'laminate'],
    recommended: ['tialn', 'dlc', 'ceramic'],
    reason: 'Çok katmanlı malzeme — farklı katmanlar farklı aşınma. TiAlN en iyi genel seçim. Seramik abrazif katmanlar için.',
  },
  {
    materialCategories: ['foam'],
    recommended: ['ptfe'],
    reason: 'Köpük çok yumuşak. Kaplama genellikle gereksiz. PTFE yapışma önleme için opsiyonel.',
  },
];

// ---------------------------------------------------------------------------
// 2. MALZEME-BIÇAK MALZEMESİ UYUM MATRİSİ
// ---------------------------------------------------------------------------

interface MaterialMatch {
  bladeMaterialId: string;
  score: number;        // 0–100
  reason: string;
}

const MATERIAL_COMPATIBILITY: Record<MaterialCategory, MaterialMatch[]> = {
  film: [
    { bladeMaterialId: 'carbon-steel',    score: 85, reason: 'Film dilme standardı. %90+ jilet karbonlu çelik.' },
    { bladeMaterialId: 'stainless-steel', score: 70, reason: 'Nemli ortam veya gıda filmi için.' },
    { bladeMaterialId: 'tungsten-carbide', score: 95, reason: 'Uzun ömür, yüksek hassasiyet. Maliyet yüksek.' },
    { bladeMaterialId: 'tool-steel',      score: 60, reason: 'Aşırı kalifikasyonlu. Jiletten ziyade bıçak formu.' },
    { bladeMaterialId: 'hss',             score: 75, reason: 'Yüksek hız dilme hatlarında kullanılır.' },
    { bladeMaterialId: 'ceramic',         score: 80, reason: 'Kimyasal inert. Özel uygulamalar.' },
    { bladeMaterialId: 'coated-carbide',  score: 98, reason: 'Maksimum ömür. Premium dilme hatları.' },
  ],
  paper: [
    { bladeMaterialId: 'carbon-steel',    score: 60, reason: 'Kısa ömür — kağıt aşındırıcı (CaCO₃).' },
    { bladeMaterialId: 'tungsten-carbide', score: 95, reason: 'Kağıt dilmede 10-50x ömür artışı.' },
    { bladeMaterialId: 'hss',             score: 85, reason: 'İyi aşınma direnci, makul maliyet.' },
    { bladeMaterialId: 'tool-steel',      score: 80, reason: 'D2 çeliği iyi performans.' },
    { bladeMaterialId: 'stainless-steel', score: 55, reason: 'Düşük aşınma direnci, kısa ömür.' },
    { bladeMaterialId: 'ceramic',         score: 75, reason: 'İyi aşınma direnci ama kırılgan.' },
    { bladeMaterialId: 'coated-carbide',  score: 98, reason: 'Maksimum performans.' },
  ],
  foil: [
    { bladeMaterialId: 'carbon-steel',    score: 70, reason: 'Folyo dilmede yaygın, orta ömür.' },
    { bladeMaterialId: 'tungsten-carbide', score: 90, reason: 'Uzun ömür, temiz kesim.' },
    { bladeMaterialId: 'hss',             score: 80, reason: 'İyi denge.' },
    { bladeMaterialId: 'stainless-steel', score: 65, reason: 'Folyo korozyon etkisi düşük.' },
    { bladeMaterialId: 'tool-steel',      score: 75, reason: 'Kalın folyo için.' },
    { bladeMaterialId: 'ceramic',         score: 60, reason: 'Metal folyo → darbe riski → kırılma.' },
    { bladeMaterialId: 'coated-carbide',  score: 95, reason: 'Premium uygulamalar.' },
  ],
  tape: [
    { bladeMaterialId: 'carbon-steel',    score: 50, reason: 'Yapışkanlık bıçak performansını düşürür.' },
    { bladeMaterialId: 'tungsten-carbide', score: 85, reason: 'Yapışma direnci iyi, ömür uzun.' },
    { bladeMaterialId: 'hss',             score: 70, reason: 'Kaplama ile birlikte kullanılmalı.' },
    { bladeMaterialId: 'stainless-steel', score: 55, reason: 'Düşük performans.' },
    { bladeMaterialId: 'tool-steel',      score: 65, reason: 'Orta performans.' },
    { bladeMaterialId: 'ceramic',         score: 90, reason: 'Non-stick yüzey, düşük sürtünme ideal.' },
    { bladeMaterialId: 'coated-carbide',  score: 95, reason: 'DLC kaplı karbür → en iyi çözüm.' },
  ],
  textile: [
    { bladeMaterialId: 'carbon-steel',    score: 65, reason: 'Orta ömür.' },
    { bladeMaterialId: 'tungsten-carbide', score: 90, reason: 'Abrazif liflere dayanıklı.' },
    { bladeMaterialId: 'hss',             score: 85, reason: 'Yüksek hız tekstil kesimde tercih.' },
    { bladeMaterialId: 'stainless-steel', score: 60, reason: 'Nem olan ortamlarda.' },
    { bladeMaterialId: 'tool-steel',      score: 75, reason: 'D2 ile iyi performans.' },
    { bladeMaterialId: 'ceramic',         score: 70, reason: 'Hassas tekstil kesimi.' },
    { bladeMaterialId: 'coated-carbide',  score: 95, reason: 'Premium hat.' },
  ],
  nonwoven: [
    { bladeMaterialId: 'carbon-steel',    score: 75, reason: 'Düşük aşınma — iyi ömür.' },
    { bladeMaterialId: 'tungsten-carbide', score: 85, reason: 'Uzun dönem avantajlı.' },
    { bladeMaterialId: 'hss',             score: 80, reason: 'İyi genel seçim.' },
    { bladeMaterialId: 'stainless-steel', score: 70, reason: 'Hijyen gereken ortamlar.' },
    { bladeMaterialId: 'tool-steel',      score: 70, reason: 'Standart.' },
    { bladeMaterialId: 'ceramic',         score: 65, reason: 'Gereksiz yüksek kalite.' },
    { bladeMaterialId: 'coated-carbide',  score: 90, reason: 'Yüksek hacim hatları.' },
  ],
  rubber: [
    { bladeMaterialId: 'carbon-steel',    score: 80, reason: 'Dar açılı keskin kenar ile iyi performans.' },
    { bladeMaterialId: 'tungsten-carbide', score: 70, reason: 'Kırılma riski — kauçuk bıçağı esneter.' },
    { bladeMaterialId: 'hss',             score: 75, reason: 'Tokluk + sertlik dengesi.' },
    { bladeMaterialId: 'stainless-steel', score: 70, reason: 'İyi korozyon direnci.' },
    { bladeMaterialId: 'tool-steel',      score: 85, reason: 'O1/A2 iyi tokluk + bileme kolaylığı.' },
    { bladeMaterialId: 'ceramic',         score: 40, reason: 'Esneklik gerekliliği — seramik kırılır.' },
    { bladeMaterialId: 'coated-carbide',  score: 75, reason: 'DLC sürtünme azaltma ile kullanılabilir.' },
  ],
  composite: [
    { bladeMaterialId: 'carbon-steel',    score: 50, reason: 'Hızlı aşınma — çok katmanlı yapı.' },
    { bladeMaterialId: 'tungsten-carbide', score: 95, reason: 'Kompozit kesimde standart.' },
    { bladeMaterialId: 'hss',             score: 80, reason: 'İyi maliyet-performans dengesi.' },
    { bladeMaterialId: 'stainless-steel', score: 45, reason: 'Yetersiz aşınma direnci.' },
    { bladeMaterialId: 'tool-steel',      score: 70, reason: 'D2 orta dozda.' },
    { bladeMaterialId: 'ceramic',         score: 75, reason: 'Kimyasal inertlik avantajı.' },
    { bladeMaterialId: 'coated-carbide',  score: 98, reason: 'En iyi performans.' },
  ],
  foam: [
    { bladeMaterialId: 'carbon-steel',    score: 90, reason: 'Yumuşak malzeme — standart çelik yeterli.' },
    { bladeMaterialId: 'stainless-steel', score: 85, reason: 'Tercih edilir.' },
    { bladeMaterialId: 'hss',             score: 50, reason: 'Aşırı kalifikasyon.' },
    { bladeMaterialId: 'tungsten-carbide', score: 40, reason: 'Gereksiz maliyet.' },
    { bladeMaterialId: 'tool-steel',      score: 70, reason: 'Standart üstü.' },
    { bladeMaterialId: 'ceramic',         score: 60, reason: 'Gereksiz.' },
    { bladeMaterialId: 'coated-carbide',  score: 45, reason: 'Aşırı kalifikasyon.' },
  ],
  label: [
    { bladeMaterialId: 'carbon-steel',    score: 65, reason: 'Yapıştırıcı + kağıt kombinasyonu → orta ömür.' },
    { bladeMaterialId: 'tungsten-carbide', score: 90, reason: 'Uzun ömür, temiz kesim ve die-cut.' },
    { bladeMaterialId: 'hss',             score: 80, reason: 'İyi genel seçim.' },
    { bladeMaterialId: 'stainless-steel', score: 60, reason: 'Orta.' },
    { bladeMaterialId: 'tool-steel',      score: 75, reason: 'D2 iyi performans.' },
    { bladeMaterialId: 'ceramic',         score: 85, reason: 'Non-stick etiket için ideal.' },
    { bladeMaterialId: 'coated-carbide',  score: 95, reason: 'DLC kaplı karbür en iyi.' },
  ],
  laminate: [
    { bladeMaterialId: 'carbon-steel',    score: 55, reason: 'Metal katman hızlı aşındırır.' },
    { bladeMaterialId: 'tungsten-carbide', score: 95, reason: 'Laminat dilme standardı.' },
    { bladeMaterialId: 'hss',             score: 82, reason: 'İyi performans.' },
    { bladeMaterialId: 'stainless-steel', score: 50, reason: 'Yetersiz.' },
    { bladeMaterialId: 'tool-steel',      score: 72, reason: 'D2 kabul edilebilir.' },
    { bladeMaterialId: 'ceramic',         score: 65, reason: 'Metal katmanda kırılma riski.' },
    { bladeMaterialId: 'coated-carbide',  score: 98, reason: 'Premium çözüm.' },
  ],
  corrugated: [
    { bladeMaterialId: 'carbon-steel',    score: 45, reason: 'Çok aşındırıcı — çok kısa ömür.' },
    { bladeMaterialId: 'tungsten-carbide', score: 95, reason: 'Oluklu mukavva standarı.' },
    { bladeMaterialId: 'hss',             score: 80, reason: 'Maliyet-performans dengesi.' },
    { bladeMaterialId: 'stainless-steel', score: 40, reason: 'Çok düşük ömür.' },
    { bladeMaterialId: 'tool-steel',      score: 75, reason: 'D2 makul.' },
    { bladeMaterialId: 'ceramic',         score: 70, reason: 'Kırılma riski — kalın malzeme darbe.' },
    { bladeMaterialId: 'coated-carbide',  score: 98, reason: 'Maksimum ömür.' },
  ],
  cardboard: [
    { bladeMaterialId: 'carbon-steel',    score: 50, reason: 'Karton aşındırıcı — kısa ömür.' },
    { bladeMaterialId: 'tungsten-carbide', score: 95, reason: 'Karton dilme standardı. Uzun ömür.' },
    { bladeMaterialId: 'hss',             score: 82, reason: 'İyi maliyet-performans dengesi.' },
    { bladeMaterialId: 'stainless-steel', score: 45, reason: 'Düşük aşınma direnci.' },
    { bladeMaterialId: 'tool-steel',      score: 78, reason: 'D2 iyi performans.' },
    { bladeMaterialId: 'ceramic',         score: 68, reason: 'Darbe riski — kalın karton.' },
    { bladeMaterialId: 'coated-carbide',  score: 98, reason: 'Maksimum ömür.' },
  ],
};

// ---------------------------------------------------------------------------
// 3. TAVSİYE MOTORU
// ---------------------------------------------------------------------------

/**
 * Mevcut konfigürasyonu analiz edip iyileştirme tavsiyeleri üretir.
 */
export function generateRecommendations(
  material: CutMaterialProperties,
  bladeType: BladeType,
  bladeMaterial: BladeMaterialProperties,
  coating: CoatingType,
  primaryAngle: number,
  machine: MachineType
): Recommendation[] {
  const recommendations: Recommendation[] = [];

  // --- AÇI TAVSİYESİ ---
  const [minAngle, maxAngle] = material.recommendedAngleRange;
  if (primaryAngle < minAngle) {
    recommendations.push({
      title: 'Bileme açısı çok dar',
      description: `${material.name} için önerilen açı ${minAngle}°–${maxAngle}°. Mevcut ${primaryAngle}° çok dar — kenar kırılma riski yüksek.`,
      priority: 1,
      category: 'angle',
      improvementPotential: (minAngle - primaryAngle) * 3,
    });
  } else if (primaryAngle > maxAngle) {
    recommendations.push({
      title: 'Bileme açısı çok geniş',
      description: `${material.name} için önerilen açı ${minAngle}°–${maxAngle}°. Mevcut ${primaryAngle}° çok geniş — kesim kalitesi düşük.`,
      priority: 1,
      category: 'angle',
      improvementPotential: (primaryAngle - maxAngle) * 3,
    });
  }

  // --- KAPLAMA TAVSİYESİ ---
  const applicableRule = COATING_RULES.find(rule =>
    rule.materialCategories.includes(material.category)
  );
  if (applicableRule && !applicableRule.recommended.includes(coating)) {
    const recCoatings = applicableRule.recommended
      .map(id => COATINGS.find(c => c.id === id)?.name)
      .filter(Boolean)
      .join(', ');
    recommendations.push({
      title: 'Kaplama uyumu iyileştirilebilir',
      description: `${material.name} için önerilen kaplamalar: ${recCoatings}. ${applicableRule.reason}`,
      priority: 2,
      category: 'coating',
      improvementPotential: 20,
    });
  }

  // --- MALZEME TAVSİYESİ ---
  const compatList = MATERIAL_COMPATIBILITY[material.category];
  if (compatList) {
    const currentMatch = compatList.find(m => m.bladeMaterialId === bladeMaterial.id);
    const bestMatch = [...compatList].sort((a, b) => b.score - a.score)[0];

    if (currentMatch && bestMatch && bestMatch.score - currentMatch.score > 15) {
      recommendations.push({
        title: 'Daha uygun bıçak malzemesi mevcut',
        description: `Mevcut: ${bladeMaterial.name} (uyum: ${currentMatch.score}/100). Öneri: ${bestMatch.bladeMaterialId} (uyum: ${bestMatch.score}/100). ${bestMatch.reason}`,
        priority: 2,
        category: 'material',
        improvementPotential: bestMatch.score - currentMatch.score,
      });
    }
  }

  // --- YAPIŞKANLIK UYARISI ---
  if (material.adhesionFactor >= 7 && coating !== 'ptfe' && coating !== 'dlc') {
    recommendations.push({
      title: 'Yapışkanlık problemi riski',
      description: `${material.name} yüksek yapışkanlığa (${material.adhesionFactor}/10) sahip. PTFE veya DLC kaplama yapışmayı önler.`,
      priority: 1,
      category: 'coating',
      improvementPotential: 25,
    });
  }

  // --- AŞINDIRICILIK UYARISI ---
  if (material.abrasiveness >= 5 && bladeMaterial.wearResistance < 7) {
    recommendations.push({
      title: 'Aşındırıcı malzeme — bıçak ömrü kısa olabilir',
      description: `${material.name} aşındırıcılığı ${material.abrasiveness}/10. Mevcut bıçak aşınma direnci ${bladeMaterial.wearResistance}/10. Tungsten karbür veya HSS düşünün.`,
      priority: 2,
      category: 'material',
      improvementPotential: 30,
    });
  }

  // --- BAKIM TAVSİYESİ ---
  if (bladeMaterial.sharpenability <= 3) {
    recommendations.push({
      title: 'Bileme zorluğu — fabrika bileme önerilir',
      description: `${bladeMaterial.name} bilenebilirliği düşük (${bladeMaterial.sharpenability}/10). Profesyonel/fabrika bileme hizmeti gerekir. Elmas bileme taşı zorunlu.`,
      priority: 3,
      category: 'maintenance',
      improvementPotential: 10,
    });
  }

  return recommendations.sort((a, b) => a.priority - b.priority);
}

/**
 * Verilen malzeme için bıçak malzemesi uyum skorunu döndürür.
 */
export function getMaterialCompatibilityScore(
  materialCategory: MaterialCategory,
  bladeMaterialId: string
): number {
  const compatList = MATERIAL_COMPATIBILITY[materialCategory];
  if (!compatList) return 50;
  const match = compatList.find(m => m.bladeMaterialId === bladeMaterialId);
  return match?.score ?? 50;
}

/**
 * Verilen malzeme için en iyi kaplama önerilerini döndürür.
 */
export function getRecommendedCoatings(
  materialCategory: MaterialCategory
): CoatingType[] {
  const rule = COATING_RULES.find(r =>
    r.materialCategories.includes(materialCategory)
  );
  return rule ? [...rule.recommended] : ['none'];
}

/**
 * Verilen makine tipinin uyumlu bıçak tiplerini döndürür.
 */
export function getCompatibleBladeTypes(
  machineType: MachineType
): BladeTypeInfo[] {
  const machine = MACHINE_TYPES.find(m => m.id === machineType);
  if (!machine) return [];
  return BLADE_TYPES.filter(bt => machine.bladeTypes.includes(bt.id));
}

/**
 * Verilen makine tipinin uyumlu kesim yöntemlerini döndürür.
 */
export function getCompatibleCuttingMethods(
  machineType: MachineType
): CuttingMethod[] {
  const machine = MACHINE_TYPES.find(m => m.id === machineType);
  return machine ? [...machine.cuttingMethods] : ['razor'];
}
