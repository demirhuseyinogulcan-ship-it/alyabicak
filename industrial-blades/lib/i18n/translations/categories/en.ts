/**
 * Categories - English Translations
 * 
 * English translations for main categories and subcategories.
 * ID values are in English, matching the new standardized structure.
 */

import type { CategoryTranslations, SubcategoryTranslations } from './tr';

// =============================================================================
// MAIN CATEGORIES
// =============================================================================

export const categoriesEn: CategoryTranslations = {
  'industrial-blades': {
    name: 'Industrial Blades',
    description: 'Professional industrial razor blades and cutting tools for industrial use',
  },
  'machine-knives': {
    name: 'Machine Knives',
    description: 'Custom manufactured knives and cutting systems for industrial machines',
  },
  'safety-knives': {
    name: 'Safety & Hand Knives',
    description: 'Professional hand knives and cutting tools compliant with safety standards',
  },
};

// =============================================================================
// SUBCATEGORIES
// =============================================================================

export const subcategoriesEn: SubcategoryTranslations = {
  // --- INDUSTRIAL BLADES ---
  '3-hole-slitting': {
    name: '3-Hole Slitting Blades',
    description: 'Professional 3-hole slitting blades for film, foil, paper and packaging cutting. High carbon steel manufacturing with coating options for long-lasting cutting performance.',
    seoKeywords: ['3 hole blade', 'three hole slitting blade', 'industrial slitting blade', 'slitter blade', 'film slitting blade', 'razor slitting blade', 'paper slitting blade', 'packaging blade', 'rewinder blade', 'coated blade', 'slitting razor'],
  },
  'slotted-slitting': {
    name: 'Slotted Slitting Blades',
    description: 'High-performance slotted blades',
  },
  'injector-slitting': {
    name: 'Injector Slitting Blades',
    description: 'Injector blades for precision cutting',
  },
  'single-edge': {
    name: 'Single Edge Blades',
    description: 'Single edge blades for safe use',
  },
  'trapezoid-blades': {
    name: 'Trapezoid Blades',
    description: 'Multi-purpose trapezoid cutting blades',
  },
  'hook-blades': {
    name: 'Hook Blades',
    description: 'Hook blades for special applications',
  },
  'craft-blades': {
    name: 'Snap-off Blades | Cutter',
    description: 'Precision cutter blade tips',
  },
  'hobby-blades': {
    name: 'Hobby Blades',
    description: 'Blades for hobby and craft work',
  },
  'scalpel-blades': {
    name: 'Scalpel – Surgical Blades',
    description: 'Scalpel and surgical blades for medical and industrial precision cutting',
  },
  'chopped-fiber': {
    name: 'Chopped Fiber Blades',
    description: 'Specially designed blades for fiber cutting',
  },
  'fiberglass': {
    name: 'Glass Fiber Blades',
    description: 'High-performance blades for glass fiber cutting',
  },
  'circular-blades': {
    name: 'Circular Blades',
    description: 'Circular blades for rotary cutting',
  },
  'pentagon-blades': {
    name: 'Pentagon Blades',
    description: 'Special geometry pentagon cutting blades',
  },
  'lamella-blades': {
    name: 'Lamella / Leaf Blades',
    description: 'Lamella blades for thin and precise cuts',
  },
  'microtome-blades': {
    name: 'Histology / Microtome Blades',
    description: 'Microtome blades for laboratory and histology applications',
  },
  'microkeratome-blades': {
    name: 'LASIK / Microkeratome Blades',
    description: 'Microkeratome blades for eye surgery and medical applications',
  },
  'glass-scraper': {
    name: 'Glass Scraper',
    description: 'Scrapers for label and residue cleaning on glass surfaces',
  },
  'classic-blades': {
    name: 'Classic Razor Blades',
    description: 'Traditional double-edge classic razor blades',
  },
  'drywall-blades': {
    name: 'Drywall Blades',
    description: 'Special blades for drywall and gypsum board cutting',
  },
  'arrow-blades': {
    name: 'Arrow Blades',
    description: 'Professional arrow blades and razors',
  },

  // --- MACHINE KNIVES ---
  'advanced-processing': {
    name: 'Advanced Processing Knives',
    description: 'Knives for industrial advanced processing applications',
  },
  'thermoform-vacuum': {
    name: 'Vacuum Packaging Blades',
    description: 'Professional blades for thermoform and vacuum packaging machines. Compatible with Multivac, Opack, Betapak, GEA, Alcan, Ulma, Variovac machines. Star, triangle, punch and lama blades.',
  },
  'circular-slitting': {
    name: 'Circular Slitting Knives',
    description: 'Knives for circular slitting machines',
  },
  'recycling-knives': {
    name: 'Recycling Knives',
    description: 'Knives for recycling operations',
  },
  'corrugated-slitting': {
    name: 'Corrugated Slitting Knives',
    description: 'Special knives for corrugated and cardboard slitting',
  },
  'rotary-cutting': {
    name: 'Rotary Cutting Knives',
    description: 'Knives for rotary cutting machines',
  },
  'serrated-knives': {
    name: 'Serrated Knives',
    description: 'Saw-toothed cutting knives',
  },
  'circular-crusher': {
    name: 'Circular Crusher Knives',
    description: 'For circular crushing and cutting operations',
  },
  'derinder-knives': {
    name: 'Derinder Knives',
    description: 'Professional meat processing and derinder knives',
  },
  'logsaw-knives': {
    name: 'Log-Saw Knives',
    description: 'Log-saw knives for toilet paper and paper towels',
  },
  'core-cutting': {
    name: 'Core Cutting Knives',
    description: 'Knives for core and bobbin cutting',
  },
  'case-sealer': {
    name: 'Case Sealer - Tape Knives',
    description: 'For packaging and case taping machines',
  },
  'zig-zag-knives': {
    name: 'Zig Zag Knives',
    description: 'Special knives for zig zag cutting patterns',
  },
  'band-knives': {
    name: 'Band Knives',
    description: 'Band saw and cutting knives',
  },
  'tray-mold': {
    name: 'Tray (Bowl) Mold Knives',
    description: 'Knives for tray and bowl mold cutting',
  },
  'sausage-peeling': {
    name: 'Sausage Peeling Knives',
    description: 'Peeling knives for sausage production lines',
  },
  'cnc-knives': {
    name: 'CNC Knives',
    description: 'Cutting knives for CNC machines',
  },
  'plotter-knives': {
    name: 'Plotter Knives',
    description: 'Knives for digital cutting plotters',
  },

  // --- SAFETY KNIVES ---
  'auto-retract': {
    name: 'Auto-Retract Safety Knives',
    description: 'Safety knives that automatically lock after cutting',
  },
  'fixed-blade': {
    name: 'Fixed Blade Knives',
    description: 'Fixed blade safety cutters',
  },
  'safety-cutters': {
    name: 'Safety Cutters',
    description: 'Certified safety cutting tools',
  },
  'utility-knives': {
    name: 'Utility Knives',
    description: 'Professional utility and box cutters',
  },
  'deburring-hobby': {
    name: 'Deburring & Hobby Knives',
    description: 'Special knives for detailed work',
  },
  'olfa-rotary': {
    name: 'OLFA Rotary Cutters',
    description: 'OLFA brand rotary cutting blades',
  },
  'olfa-craft': {
    name: 'OLFA Craft Knives',
    description: 'OLFA professional craft series',
  },
  'olfa-safety': {
    name: 'OLFA Safety Knives',
    description: 'OLFA safety certified products',
  },
  'blade-disposal': {
    name: 'Blade Disposal Containers',
    description: 'Storage containers for safe collection of cutting tool waste',
  },
};
