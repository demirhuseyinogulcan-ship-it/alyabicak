/**
 * Categories - English Translations
 * 
 * English translations for main categories and subcategories.
 * Slug values remain unchanged, only name and description are translated.
 */

import type { CategoryTranslations, SubcategoryTranslations } from './tr';

// =============================================================================
// MAIN CATEGORIES
// =============================================================================

export const categoriesEn: CategoryTranslations = {
  'sanayi-jiletleri': {
    name: 'Industrial Blades',
    description: 'Professional industrial razor blades and cutting tools for industrial use',
  },
  'makina-bicaklari': {
    name: 'Machine Knives',
    description: 'Custom manufactured knives and cutting systems for industrial machines',
  },
  'is-guvenligi-el-bicaklari': {
    name: 'Safety & Hand Knives',
    description: 'Professional hand knives and cutting tools compliant with safety standards',
  },
};

// =============================================================================
// SUBCATEGORIES
// =============================================================================

export const subcategoriesEn: SubcategoryTranslations = {
  // --- INDUSTRIAL BLADES ---
  '3-delikli-dilme': {
    name: '3-Hole Slitting Blades',
    description: 'Industry standard 3-hole blades',
  },
  'slotted-dilme': {
    name: 'Slotted Slitting Blades',
    description: 'High-performance slotted blades',
  },
  'injektor-dilme': {
    name: 'Injector Slitting Blades',
    description: 'Injector blades for precision cutting',
  },
  'tek-kenarli': {
    name: 'Single Edge Blades',
    description: 'Single edge blades for safe use',
  },
  'trapez-bicaklar': {
    name: 'Trapezoid Blades',
    description: 'Multi-purpose trapezoid cutting blades',
  },
  'kanca-bicaklar': {
    name: 'Hook Blades',
    description: 'Hook blades for special applications',
  },
  'falcata-bicaklar': {
    name: 'Snap-off Blades | Cutter',
    description: 'Precision cutter blade tips',
  },
  'hobi-jiletleri': {
    name: 'Hobby Blades',
    description: 'Blades for hobby and craft work',
  },
  'bisturi-nester': {
    name: 'Scalpel – Surgical Blades',
    description: 'Scalpel and surgical blades for medical and industrial precision cutting',
  },
  'kesik-elyaf': {
    name: 'Chopped Fiber Blades',
    description: 'Specially designed blades for fiber cutting',
  },
  'cam-elyaf': {
    name: 'Glass Fiber Blades',
    description: 'High-performance blades for glass fiber cutting',
  },
  'dairesel-jiletler': {
    name: 'Circular Blades',
    description: 'Circular blades for rotary cutting',
  },
  'besgen-bicaklar': {
    name: 'Pentagon Blades',
    description: 'Special geometry pentagon cutting blades',
  },
  'lamel-yaprak': {
    name: 'Lamella / Leaf Blades',
    description: 'Lamella blades for thin and precise cuts',
  },
  'mikrotom-jilet': {
    name: 'Histology / Microtome Blades',
    description: 'Microtome blades for laboratory and histology applications',
  },
  'lasik-mikrokeratom': {
    name: 'LASIK / Microkeratome Blades',
    description: 'Microkeratome blades for eye surgery and medical applications',
  },
  'cam-kaziyici': {
    name: 'Glass Scraper',
    description: 'Scrapers for removing labels and residue from glass surfaces',
  },
  'klasik-jilet': {
    name: 'Classic Razor Blades',
    description: 'Traditional double-edge classic razor blades',
  },
  'alci-levha': {
    name: 'Drywall (Plasterboard) Blades',
    description: 'Special blades for drywall and plasterboard cutting',
  },
  'ok-bicaklar': {
    name: 'Arrow Blades',
    description: 'Professional arrow blades and razors',
  },

  // --- MACHINE KNIVES ---
  'ileri-islem': {
    name: 'Processing Knives',
    description: 'Knives for industrial processing applications',
  },
  'termoform-vakum': {
    name: 'Thermoform Vacuum Knives',
    description: 'For thermoform and vacuum packaging machines',
  },
  'dairesel-dilme': {
    name: 'Circular Slitting Knives',
    description: 'Knives for circular slitting machines',
  },
  'geri-donusum': {
    name: 'Recycling Knives',
    description: 'Knives for recycling operations',
  },
  'oluklu-mukavva': {
    name: 'Corrugated Cardboard Slitting Knives',
    description: 'Special knives for cardboard and corrugated slitting',
  },
  'doner-kesim': {
    name: 'Rotary Cutting Knives',
    description: 'Knives for rotary cutting machines',
  },
  'disli-bicaklar': {
    name: 'Serrated Knives',
    description: 'Serrated saw-tooth cutting knives',
  },
  'dairesel-ezici': {
    name: 'Circular Crushing Knives',
    description: 'For circular crushing and cutting operations',
  },
  'et-acma': {
    name: 'Derinding (Skinning) Knives',
    description: 'Professional meat processing and derinding knives',
  },
  'logsaw-kagit': {
    name: 'Log-Saw Blades',
    description: 'Log-saw blades for toilet paper and paper towel production',
  },
  'masura-kesim': {
    name: 'Core Cutting Knives',
    description: 'Knives for core and bobbin cutting',
  },
  'kutu-kapama': {
    name: 'Box Sealing - Tape Knives',
    description: 'For packaging and tape sealing machines',
  },
  'zig-zag': {
    name: 'Zig Zag Knives',
    description: 'Special knives for zig zag cutting pattern',
  },
  'serit-bicaklar': {
    name: 'Band Knives',
    description: 'Band saw and cutting knives',
  },
  'tray-kalip': {
    name: 'Tray (Bowl) Mold Knives',
    description: 'Knives for tray and bowl mold cutting',
  },
  'sosis-siyirma': {
    name: 'Sausage Stripping Knives',
    description: 'Stripping knives for sausage production lines',
  },
  'cnc-bicaklari': {
    name: 'CNC Knives',
    description: 'Cutting knives for CNC machines',
  },
  'plotter-bicaklari': {
    name: 'Plotter Blades',
    description: 'Blades for digital cutting plotters',
  },

  // --- SAFETY & HAND KNIVES ---
  'oto-geri-cekilebilir': {
    name: 'Auto-Retractable Knives',
    description: 'Safety knives that auto-lock after cutting',
  },
  'sabit-uclu': {
    name: 'Fixed Blade Knives',
    description: 'Fixed blade tip safety cutters',
  },
  'guvenlik-bicaklari': {
    name: 'Safety Knives',
    description: 'Special knives with safety certification',
  },
  'maket-bicaklari': {
    name: 'Utility Knives',
    description: 'Professional utility and cutting knives',
  },
  'capak-alma-hobi': {
    name: 'Deburring & Hobby Knives',
    description: 'Special knives for detailed work',
  },
  'olfa-dairesel': {
    name: 'OLFA Circular Blades',
    description: 'OLFA brand circular cutting blades',
  },
  'olfa-falcata': {
    name: 'OLFA Snap-off Blades',
    description: 'OLFA professional snap-off blade series',
  },
  'olfa-is-guvenligi': {
    name: 'OLFA Safety Knives',
    description: 'OLFA safety certified products',
  },
  'muhafaza-atik-kutulari': {
    name: 'Storage & Disposal Containers',
    description: 'Safe disposal containers for used cutting tool blades',
  },
};
