/**
 * Product Translations - English
 * 
 * Tüm ürün çevirileri bu dosyada.
 * Çeviri yoksa orijinal (Türkçe) değer kullanılır.
 * 
 * YAPILANDIRMA:
 * Her ürün için minimum 'name' gerekli.
 * 'description', 'features', 'applications' opsiyonel.
 * 
 * YENİ ÜRÜN ÇEVİRİSİ EKLEMEK:
 * 1. Ürün ID'sini bul (scraped-products.json veya products.ts)
 * 2. Bu dosyaya çeviri ekle
 * 3. Otomatik olarak tüm sayfalarda görünür
 */

import type { ProductTranslation } from './tr';

export const productsEn: Record<string, ProductTranslation> = {
  // =============================================================================
  // SANAYİ JİLETLERİ - 3 DELİKLİ DİLME
  // =============================================================================
  '43': {
    name: '43 x 22 Right Angle Blade – Breakable B202S-K',
    description: 'Industrial right-angle slicing blade with breakable center design. Sheffield quality professional cutting blade.',
    features: ['Long lasting', 'Sheffield quality', 'Professional use', 'Breakable design'],
    applications: ['Industrial cutting', 'Film slitting', 'Paper cutting'],
  },
  '60': {
    name: '60 x 22 Right Angle Blade – Breakable B205S-K',
    description: 'Large format right-angle slicing blade with breakable center design. Sheffield quality professional cutting blade.',
    features: ['Long lasting', 'Sheffield quality', 'Professional use', 'Breakable design'],
    applications: ['Industrial cutting', 'Wide film slitting', 'Cardboard cutting'],
  },

  // =============================================================================
  // SANAYİ JİLETLERİ - SLOTTED DİLME
  // =============================================================================
  'slotted-karbon-celik': {
    name: 'Slotted Slitting Blade - Carbon Steel',
    subtitle: 'SK5 Carbon Steel — 57x19mm',
    description: 'High carbon industrial slotted slitting blade. Unlike ordinary razor blades, manufactured from special steel alloy with high carbon content (0.85-1.00% C). Heat treatment in controlled atmosphere furnaces (austenitizing + quenching + tempering) achieves homogeneous martensitic microstructure. The slotted design enables quick and secure machine mounting through the central slot. Precisely ground at optimal 22° edge angle.',
    features: [
      'High carbon content (0.85-1.00%)',
      'Martensitic microstructure',
      'Optimal 22° edge angle',
      'Precision heat treatment process',
      'Slotted mounting convenience',
      '3-5x longer life than razor blades'
    ],
    applications: ['Textile cutting', 'Film and foil slitting', 'Paper cutting', 'Plastic slitting', 'Packaging cutting'],
    benefits: [
      { title: 'Cost-Effective Solution', description: 'Carbon steel delivers optimal performance-to-cost ratio for standard slitting applications.', icon: 'DollarSign' },
      { title: 'Quick Mounting', description: 'Slotted central slot enables instant machine fitting without tools.', icon: 'Settings' },
      { title: 'HRC 59-61 Hardness', description: 'Precision heat treatment achieves consistent, repeatable cut quality.', icon: 'Shield' },
    ],
    longDescription: `<p>The SK5 (C85) high carbon steel slotted slitting blade is the standard workhorse of the industrial slitting blade family. Manufactured in the standard 57x19mm format, the central slotted slot ensures secure and rapid machine mounting.</p><h3>Technical Specifications</h3><ul><li>Material: SK5 / C85 high carbon steel (0.85-1.00% C)</li><li>Hardness: HRC 59-61</li><li>Standard dimensions: 57x19mm</li><li>Available thicknesses: 0.25mm, 0.36mm, 0.38mm, 0.43mm, 0.63mm</li><li>Edge angle: 22°</li></ul><h3>Applications</h3><p>Cost-effective standard solution for paper, cardboard, plastic film, packaging material, and textile slitting operations. Reliable performance in high-speed slotted slitting machines.</p>`,
    seo: {
      title: 'Slotted Slitting Blade Carbon Steel | Industrial Razor Blade 57x19mm',
      description: 'Premium carbon steel slotted slitting blade for BOPP film, flexible packaging, and industrial cutting. SK5 steel, 22° edge angle, 3-5x longer life. Sheffield quality.',
      keywords: ['slotted blade', 'slotted slitting blade', 'carbon steel blade', 'industrial razor blade', 'slitting blade', 'film slitting blade', '57x19 blade', '57x19mm blade', 'textile blade', 'paper cutting blade', 'packaging blade', 'high carbon blade', 'SK5 blade', 'professional blade', 'long lasting blade', 'sharp blade', 'slitter blade', 'BOPP film blade', 'flexible packaging blade', 'slitter rewinder blade', 'converter blade']
    },
  },
  'slotted-karbon-titanyum': {
    name: 'Slotted Slitting Blade - Carbon Steel + Titanium Coating',
    description: 'TiN (Titanium Nitride) coating on high carbon steel body. PVD (Physical Vapor Deposition) applied titanium nitride coating achieves 2300 HV surface hardness. This golden coating reduces friction coefficient by 40%, minimizing heat generation during cutting. Slotted central slot design enables single-motion machine mounting. Wear resistance increases 2-3x compared to uncoated version.',
    features: [
      'TiN (Titanium Nitride) PVD coating',
      '2300 HV surface hardness',
      '40% lower friction coefficient',
      'Golden appearance',
      '2-3x increased wear resistance',
      'Ideal for heat-sensitive materials'
    ],
    applications: ['Adhesive tape cutting', 'Lamination slitting', 'Heat-sensitive film cutting', 'Precision foil slitting', 'Label cutting'],
    benefits: [
      { title: '3-5x Extended Lifespan', description: '2300 HV TiN coating delivers dramatic lifespan increase over standard carbon steel.', icon: 'Clock' },
      { title: '40% Friction Reduction', description: 'TiN surface prevents adhesive buildup on sticky substrates.', icon: 'Zap' },
      { title: 'Visual Wear Indicator', description: 'Golden coating provides easy visual inspection of coating condition.', icon: 'Eye' },
    ],
    seo: {
      title: 'Slotted Blade TiN Titanium Coating | Gold Industrial Slitting Blade',
      description: 'TiN titanium coated slotted slitting blade with 2300 HV hardness. 40% lower friction, ideal for adhesive tape, lamination, and heat-sensitive film cutting.',
      keywords: ['slotted blade titanium', 'titanium coated blade', 'TiN coating blade', 'PVD coating blade', 'gold blade', 'adhesive tape blade', 'lamination blade', '57x19 blade', '57x19mm blade', 'slotted blade titanium', 'titanium coated blade', 'low friction blade', 'film slitting blade', 'label cutting blade', 'industrial titanium blade', 'professional coated blade', 'long lasting titanium', 'slitting blade TiN', 'industrial razor blade coated']
    },
  },
  'slotted-karbon-seramik': {
    name: 'Slotted Slitting Blade - Carbon Steel + Ceramic Coating',
    description: 'Advanced ceramic coating (titanium-based) on high carbon steel substrate. Multi-layer ceramic coating applied via CVD/PVD hybrid technology provides up to 3200 HV surface hardness. This coating system delivers superior performance in cutting extremely abrasive materials. Practical use with slotted mounting system. Chemical inertness ensures long life even in corrosive environments.',
    features: [
      'Advanced ceramic coating technology',
      '3200 HV ultra-high surface hardness',
      'Ideal for abrasive materials',
      'Chemical inertness',
      'Corrosion resistance',
      '5-7x extended life'
    ],
    applications: ['Abrasive paper cutting', 'Fiberglass composite slitting', 'Carbon fiber cutting', 'Sandpaper slitting', 'Technical textile cutting'],
    benefits: [
      { title: '3200+ HV Hardness', description: 'Ceramic coating achieves 40% harder surface than TiN.', icon: 'Shield' },
      { title: '800°C Heat Resistance', description: 'No performance loss in high-temperature environments.', icon: 'Flame' },
      { title: 'Ultra Wear Resistance', description: 'Extraordinary lifespan on abrasive substrates.', icon: 'Clock' },
    ],
    seo: {
      title: 'Slotted Blade Ceramic Coating | 3200 HV Ultra-Hard Slitting Blade',
      description: 'Ceramic coated slotted slitting blade with 3200 HV hardness. Ideal for abrasive materials, fiberglass, carbon fiber, and sandpaper cutting. 5-7x longer life.',
      keywords: ['slotted blade ceramic', 'ceramic coated blade', 'abrasive material blade', 'fiberglass blade', 'carbon fiber blade', 'sandpaper blade', 'technical textile blade', 'ultra hard blade', '3200 HV blade', '57x19 blade', '57x19mm blade', 'slotted ceramic blade', 'abrasive cutting blade', 'fiberglass cutting blade', 'carbon fiber blade', 'sandpaper slitting blade', 'industrial ceramic blade', 'high hardness blade']
    },
  },
  'slotted-paslanmaz': {
    name: 'Slotted Slitting Blade - Stainless Steel',
    subtitle: '420HC Stainless Steel — 57x19mm',
    description: 'Slotted slitting blade manufactured from AISI 420 martensitic stainless steel. 12-14% chromium content provides corrosion resistance while martensitic structure achieves HRC 54-56 hardness. Preferred as alternative to carbon steel in humid environments, food industry, and hygiene-required applications. Slotted design offers practical machine mounting. FDA approved for food contact surfaces.',
    features: [
      'Stainless steel (AISI 420)',
      '12-14% chromium content',
      'Corrosion resistance',
      'Hygienic use',
      'FDA approved',
      'Suitable for humid environments'
    ],
    applications: ['Food packaging cutting', 'Humid environment applications', 'Hygienic production lines', 'Pharmaceutical packaging', 'Medical packaging cutting'],
    benefits: [
      { title: 'Corrosion Resistance', description: '13% chromium content eliminates rust in humid environments.', icon: 'Shield' },
      { title: 'Food Grade', description: 'FDA approved for food industry slitting applications.', icon: 'Check' },
      { title: 'Hygienic Surface', description: 'Easy-to-clean surface with low bacterial adhesion.', icon: 'Sparkles' },
    ],
    seo: {
      title: 'Slotted Blade Stainless Steel | FDA Approved Food Industry Blade',
      description: 'Stainless steel slotted slitting blade, AISI 420, FDA approved. Corrosion resistant, ideal for food packaging, pharmaceutical, and humid environment applications.',
      keywords: ['slotted blade stainless', 'stainless steel blade', 'food blade', 'hygienic blade', 'FDA approved blade', 'corrosion resistant blade', 'humid environment blade', 'AISI 420 blade', '57x19 blade', '57x19mm blade', 'slotted stainless blade', 'food grade blade', 'hygienic blade', 'corrosion resistant blade', 'medical packaging blade', 'pharmaceutical blade', 'rust free blade', 'inox blade']
    },
  },
  'slotted-paslanmaz-titanyum': {
    name: 'Slotted Slitting Blade - Stainless Steel + Titanium Coating',
    subtitle: 'Stainless Steel + Titanium Nitride — 57x19mm',
    description: 'TiN (Titanium Nitride) coating on AISI 420 martensitic stainless steel. Hybrid solution combining stainless steel corrosion resistance with titanium coating wear resistance. PVD-applied TiN coating increases edge hardness to 2300 HV. Slotted slot system enables quick blade changes. Provides dual protection in both humid and abrasive environments.',
    features: [
      'Stainless + Titanium dual protection',
      'Corrosion + Wear resistance',
      '2300 HV surface hardness',
      'Hygienic and durable',
      'Golden stainless',
      'Ideal for demanding environments'
    ],
    applications: ['Food lamination cutting', 'Pharmaceutical blister packaging slitting', 'Humid adhesive tape cutting', 'Sterile packaging production', 'Medical foil slitting'],
    benefits: [
      { title: 'Dual Protection', description: 'Stainless substrate + TiN coating delivers both corrosion and wear resistance.', icon: 'Shield' },
      { title: 'Anti-Adhesion', description: 'TiN coating prevents adhesive material buildup on the cutting edge.', icon: 'Zap' },
      { title: 'Premium Performance', description: 'Top-tier durability for demanding environments.', icon: 'Award' },
    ],
    seo: {
      title: 'Slotted Blade Stainless + Titanium | Dual Protection Industrial Blade',
      description: 'Stainless steel + TiN titanium coated slotted blade. Dual protection against corrosion and wear. Ideal for food lamination, pharmaceutical blister, and medical foil applications.',
      keywords: ['slotted stainless titanium blade', 'stainless titanium coating', 'stainless titanium blade', 'TiN stainless blade', 'food lamination blade', 'pharmaceutical packaging blade', 'blister cutting blade', 'sterile packaging blade', 'medical foil blade', '57x19 blade', '57x19mm blade', 'slotted stainless TiN', 'dual protection blade', 'corrosion wear resistant', 'hygienic titanium blade', 'pharmaceutical cutting blade', 'medical foil blade', 'premium slotted blade']
    },
  },
  'slotted-paslanmaz-xcd': {
    name: 'Slotted Slitting Blade - Stainless Steel + XCD Coating',
    subtitle: 'DLC/XCD Diamond-Like Coating — 57x19mm',
    description: 'XCD (Xtreme Carbon Diamond) coating technology on AISI 420 stainless steel. This coating from the DLC (Diamond-Like Carbon) family offers hardness values up to 5000 HV through diamond-like carbon structure. Friction coefficient drops below 0.1, providing excellent sliding properties. Professional use with slotted mounting system. Prevents even the most adhesive materials from sticking to the cutting edge.',
    features: [
      'XCD diamond-like carbon coating',
      '5000 HV ultra-high hardness',
      '<0.1 friction coefficient',
      'Excellent non-stick properties',
      'Black diamond appearance',
      'For the most demanding applications'
    ],
    applications: ['Ultra-adhesive tape cutting', 'Silicone-coated material slitting', 'Adhesive label cutting', 'Resin-impregnated fabric slitting', 'Medical adhesive tapes'],
    benefits: [
      { title: '5000 HV Ultra Hardness', description: '2x harder than TiN, 1.5x harder than ceramic coating.', icon: 'Diamond' },
      { title: '60% Friction Reduction', description: 'Near-zero adhesion even on the stickiest substrates.', icon: 'Zap' },
      { title: 'Maximum Lifespan', description: 'Longest service life among all coating options.', icon: 'Clock' },
    ],
    seo: {
      title: 'Slotted Blade XCD Diamond Coating | 5000 HV Non-Stick Blade',
      description: 'XCD diamond-like carbon coated slotted blade, 5000 HV hardness, <0.1 friction. Non-stick properties for ultra-adhesive tapes, silicone coatings, and medical adhesives.',
      keywords: ['slotted blade XCD coating', 'diamond coated blade', 'DLC coated blade', 'diamond coated blade', 'adhesive tape blade', 'silicone cutting blade', 'adhesive label blade', 'ultra low friction blade', '5000 HV blade', '57x19 blade', '57x19mm blade', 'slotted XCD blade', 'diamond like carbon blade', 'non-stick blade', 'adhesive tape blade', 'silicone cutting blade', 'resin impregnated fabric blade', 'medical adhesive blade', 'premium diamond blade']
    },
  },
  'slotted-endurium-seramik': {
    name: 'Slotted Slitting Blade - Endurium Steel + Ceramic Coating',
    subtitle: 'High Speed Steel + Ceramic — 57x19mm',
    description: 'Multi-layer ceramic coating on Endurium HSS (High Speed Steel) substrate. Premium solution combining HSS high temperature resistance (8-10% tungsten, 4-5% molybdenum, 4% chromium) with extreme ceramic hardness. No hardness loss up to 600°C, resistant to thermal shock in interrupted cuts and high-speed applications. Slotted design compatible with professional machines. Designed for the most demanding industrial applications.',
    features: [
      'Endurium HSS high speed steel',
      'HRC 64-66 substrate hardness',
      '3500 HV ceramic coating',
      '600°C temperature resistance',
      'Thermal shock resistance',
      'Longest life slotted blade'
    ],
    applications: ['High-speed slitting operations', 'Interrupted cutting applications', 'Metal foil slitting', 'Composite material cutting', '24/7 production lines'],
    benefits: [
      { title: 'HRC 64-66 Substrate', description: 'Endurium HSS substrate is 10% harder than standard carbon steel.', icon: 'Shield' },
      { title: '600°C Resistance', description: 'Reliable performance in high-temperature environments.', icon: 'Flame' },
      { title: 'Premium Cutting', description: 'Top-segment slotted blade for the most demanding applications.', icon: 'Award' },
    ],
    seo: {
      title: 'Slotted Blade Endurium HSS Ceramic | 600°C High-Speed Blade',
      description: 'Endurium HSS + ceramic coated slotted blade. HRC 64-66 substrate, 3500 HV coating, 600°C resistance. For high-speed slitting, metal foil, and 24/7 production lines.',
      keywords: ['slotted blade Endurium', 'HSS blade', 'high speed steel blade', 'ceramic coated HSS', '600 degree blade', 'metal foil blade', 'composite cutting blade', '57x19 blade', '57x19mm blade', 'slotted HSS blade', 'high speed steel blade', 'Endurium ceramic blade', 'thermal shock resistant blade', 'high temperature blade', 'metal foil slitting', 'composite cutting blade', 'continuous production blade', 'premium industrial blade']
    },
  },
  'slotted-yekpare-tungsten': {
    name: 'Slotted Slitting Blade - Solid Tungsten Carbide',
    subtitle: 'Solid WC-Co Monolithic Structure — 57x19mm',
    description: 'Slotted slitting blade manufactured from solid tungsten carbide (WC-Co) composition. This sintered material containing 94% tungsten carbide and 6% cobalt binder achieves HRA 92-94 (HRC 75+ equivalent) hardness. Monolithic structure produced via powder metallurgy provides integrity without welding or brazing. Slotted central slot enables secure machine mounting. Used for cutting ultra-abrasive materials that steel blades cannot cut.',
    features: [
      'Solid tungsten carbide construction',
      'HRA 92-94 ultra-high hardness',
      'Monolithic integrity',
      'Powder metallurgy production',
      '20-50x longer life than steel',
      'For extremely abrasive materials'
    ],
    applications: ['Ceramic-coated paper cutting', 'Metal foil slitting', 'Abrasive composite cutting', 'Carbon nanotube film slitting', 'Battery electrode material cutting'],
    benefits: [
      { title: '20-50x Extended Lifespan', description: 'Achieves hardness and lifespan steel blades can never match.', icon: 'Clock' },
      { title: 'Monolithic Structure', description: 'No welding or brazing — powder metallurgy monolithic production.', icon: 'Box' },
      { title: 'HRA 92-94 Ultra Hard', description: 'Cuts even the most abrasive materials with ease.', icon: 'Diamond' },
    ],
    seo: {
      title: 'Slotted Blade Tungsten Carbide | HRA 92-94 Ultra-Hard Blade',
      description: 'Solid tungsten carbide slotted blade, HRA 92-94 hardness, 20-50x longer life. For ceramic paper, metal foil, battery electrode, and ultra-abrasive material cutting.',
      keywords: ['slotted tungsten carbide blade', 'solid tungsten blade', 'carbide blade', 'WC blade', 'tungsten carbide blade', 'solid carbide blade', 'ceramic paper blade', 'metal foil blade', 'battery electrode blade', '57x19 blade', '57x19mm blade', 'slotted carbide blade', 'monolithic carbide', 'ultra hard blade', 'abrasive material blade', 'battery electrode blade', 'ceramic paper blade', 'premium tungsten blade', 'carbide slitting blade']
    },
  },
  'slotted-yekpare-seramik': {
    name: 'Slotted Slitting Blade - Solid Ceramic (Zirconia)',
    subtitle: 'Y-TZP Zirconia Ceramic — 57x19mm',
    description: 'Slotted slitting blade manufactured from solid zirconia (ZrO2) ceramic. Tetragonal polycrystalline zirconia (Y-TZP) structure provides extraordinary crack resistance while maintaining 1200 HV hardness. This completely metal-free blade is designed for applications where electrical conductivity is unwanted or metal contamination is unacceptable. Slotted design compatible with standard machines. Preferred in medical and food applications requiring biocompatibility.',
    features: [
      'Solid zirconia ceramic',
      'No metal contamination',
      'Electrical insulator',
      'Biocompatible material',
      'High fracture toughness',
      'Chemical inertness'
    ],
    applications: ['Food industry (metal detector passage)', 'Electronic component cutting', 'Battery separator film slitting', 'Medical sterile packaging', 'Cleanroom applications'],
    benefits: [
      { title: 'Zero Metal Contamination', description: 'Completely metal-free structure — ideal for food and electronics.', icon: 'Check' },
      { title: 'Electrical Insulator', description: 'Safe cutting where electrical conductivity is undesired.', icon: 'Zap' },
      { title: 'Biocompatible', description: 'Suitable material for medical and food-contact applications.', icon: 'Heart' },
    ],
    seo: {
      title: 'Slotted Blade Zirconia Ceramic | Metal-Free Food Industry Blade',
      description: 'Solid zirconia ceramic slotted blade, metal-free, biocompatible. FDA compliant for food industry, metal detector safe, cleanroom and medical packaging applications.',
      keywords: ['slotted ceramic blade', 'zirconia blade', 'ceramic blade', 'zirconia blade', 'metal contamination free blade', 'food sector blade', 'electronic cutting blade', 'battery separator blade', 'medical packaging blade', '57x19 blade', '57x19mm blade', 'slotted ceramic blade', 'non-conductive blade', 'food industry blade', 'cleanroom blade', 'battery separator blade', 'medical packaging blade', 'biocompatible blade', 'Y-TZP blade']
    },
  },

  // =============================================================================
  // SANAYİ JİLETLERİ - HOBİ JİLETLERİ
  // =============================================================================
  'ok': {
    name: 'Arrow Blade',
    description: 'Arrow-shaped professional cutting blade. Sheffield quality industrial blade for precision work.',
    features: ['Arrow shape design', 'Long lasting', 'Sheffield quality', 'Professional use'],
    applications: ['Industrial cutting', 'Precision work'],
  },

  // =============================================================================
  // İNJEKTÖR JİLETLER
  // =============================================================================
  'injektor-karbon-celik': {
    name: 'Injector Blade - Carbon Steel, 2 Slot',
    description: '38x8x0.25mm high carbon steel 2-slot injector blade. Specially formulated SK5/C85 grade steel (0.85-1.00% carbon content) transformed into martensitic structure through precision heat treatment in controlled atmosphere furnaces. 2-slot design fits standard injector holders with millimetric precision for vibration-free cutting. Optimal 20° edge angle provides clean, burr-free cuts in thin materials.',
    features: [
      '38x8x0.25mm standard injector size',
      '2-slot secure mounting system',
      'High carbon content (0.85-1.00%)',
      'Martensitic microstructure',
      'Optimal 20° edge angle',
      'Vibration-free precision cutting'
    ],
    applications: ['Precision label cutting', 'Thin film slitting', 'Laboratory applications', 'Micro-cutting operations', 'Electronic component cutting'],
    seo: {
      title: 'Injector Blade Carbon Steel 38x8mm | 2-Slot Precision Slitting Blade',
      description: '38x8x0.25mm carbon steel injector blade with 2-slot design. SK5 steel, 20° edge angle for precision label cutting, thin film slitting, and micro-cutting operations.',
      keywords: ['injector blade', 'injector blade', '38x8 blade', '38x8x0.25 blade', '2 slot blade', 'injector blade', 'carbon steel injector', 'precision cutting blade', 'label cutting blade', 'film slitting blade', 'laboratory blade', 'micro cutting', 'injector razor blade', 'slitting blade 38x8', 'industrial injector blade', 'precision cutting blade', 'label cutting blade', 'SK5 injector blade']
    },
  },
  'injektor-paslanmaz': {
    name: 'Injector Blade - Stainless Steel, 2 Slot',
    description: '38x8x0.25mm AISI 420 martensitic stainless steel 2-slot injector blade. 12-14% chromium content provides superior resistance in humid environments and corrosive conditions. FDA-approved material meeting hygiene standards for food, pharmaceutical, and medical sectors. Resistant to sterilization processes. 2-slot mounting system securely locks into injector holders.',
    features: [
      '38x8x0.25mm stainless injector',
      'AISI 420 martensitic stainless steel',
      '12-14% chromium for corrosion resistance',
      'FDA approved hygienic material',
      'Sterilization resistant',
      'Suitable for humid environments'
    ],
    applications: ['Food packaging cutting', 'Pharmaceutical packaging', 'Medical tape cutting', 'Hygienic production lines', 'Humid environment applications'],
    seo: {
      title: 'Injector Blade Stainless Steel 38x8mm | FDA Approved Food Industry',
      description: '38x8x0.25mm stainless steel injector blade, AISI 420, FDA approved. Corrosion resistant for food packaging, pharmaceutical, and medical applications.',
      keywords: ['injector blade stainless', 'stainless injector blade', 'stainless injector blade', '38x8 stainless blade', 'food blade', 'medical blade', 'hygienic blade', 'FDA approved blade', 'AISI 420 injector', 'corrosion resistant blade', 'sterile blade', 'pharmaceutical blade', 'stainless 38x8x0.25', 'rust free blade', 'food grade injector blade', 'medical cutting blade']
    },
  },
  'injektor-paslanmaz-ptfe': {
    name: 'Injector Blade - Stainless Steel + PTFE Coating, 2 Slot',
    description: '38x8x0.25mm AISI 420 stainless steel with PTFE (Teflon) coating. Polytetrafluoroethylene coating has one of the lowest known friction coefficients (~0.04). This non-stick surface prevents even the most adhesive materials from sticking to the cutting edge. Excellent performance in cutting adhesive tapes, silicone-based materials, and resin products. PTFE biocompatibility enables safe use in medical applications.',
    features: [
      'PTFE (Teflon) non-stick coating',
      '~0.04 ultra-low friction coefficient',
      'Ideal for adhesive materials',
      'Biocompatible coating',
      'Easy-to-clean surface',
      'Suitable for medical applications'
    ],
    applications: ['Adhesive tape cutting', 'Silicone material slitting', 'Medical wound tape cutting', 'Resin product cutting', 'Label and sticker cutting'],
    seo: {
      title: 'Injector Blade PTFE Teflon Coating | Non-Stick Adhesive Tape Blade',
      description: 'PTFE Teflon coated injector blade, ~0.04 friction coefficient. Non-stick surface for adhesive tape, silicone, medical tape, and sticker cutting applications.',
      keywords: ['injector blade PTFE', 'teflon coated blade', 'non-stick blade', 'PTFE coated blade', 'teflon blade', 'non-stick injector blade', 'adhesive tape blade', 'silicone cutting blade', 'medical tape blade', 'low friction blade', '38x8 PTFE blade', 'adhesive tape blade', 'sticker cutting blade', 'low friction blade', 'medical tape blade', 'stainless PTFE injector']
    },
  },
  'injektor-paslanmaz-seramik': {
    name: 'Injector Blade - Stainless Steel + Ceramic Coating, 2 Slot',
    description: '38x8x0.25mm AISI 420 stainless steel with advanced ceramic coating (titanium-based). Multi-layer ceramic coating applied via CVD/PVD hybrid technology provides up to 3200 HV surface hardness. Maximum wear resistance in compact injector size. Superior performance in precision cutting of abrasive materials and long-duration operations.',
    features: [
      'Advanced ceramic coating technology',
      '3200 HV ultra-high surface hardness',
      'Ideal for abrasive materials',
      'Chemical inertness',
      'Stainless substrate protection',
      '5-7x extended life'
    ],
    applications: ['Abrasive paper cutting', 'Composite material slitting', 'Technical textile cutting', 'Precision fiberglass cutting', 'Sandpaper product slitting'],
    seo: {
      title: 'Injector Blade Ceramic Coating 3200 HV | Abrasive Material Blade',
      description: 'Ceramic coated injector blade, 3200 HV hardness. 5-7x longer life for abrasive paper, composite material, fiberglass, and technical textile cutting.',
      keywords: ['injector blade ceramic', 'ceramic coated injector', 'ceramic coated injector blade', '38x8 ceramic blade', 'abrasive material blade', 'composite cutting blade', 'ultra hard blade', '3200 HV blade', 'stainless ceramic injector', 'abrasive material blade', 'composite cutting blade', 'technical textile blade', 'high hardness injector', 'wear resistant blade']
    },
  },
  'injektor-paslanmaz-titanyum': {
    name: 'Injector Blade - Stainless Steel + Titanium Coating, 2 Slot',
    description: '38x8x0.25mm AISI 420 stainless steel with TiN (Titanium Nitride) coating. PVD-applied golden titanium nitride coating extends cutting edge life 2-3x with 2300 HV surface hardness. Reduces friction coefficient by 40% to minimize heat generation. Hybrid solution combining stainless substrate corrosion resistance with titanium coating wear resistance.',
    features: [
      'TiN (Titanium Nitride) PVD coating',
      '2300 HV surface hardness',
      '40% lower friction coefficient',
      'Golden appearance',
      'Stainless + Titanium dual protection',
      'Ideal for heat-sensitive materials'
    ],
    applications: ['Precision film cutting', 'Optical film slitting', 'Electronic foil cutting', 'Lamination slitting', 'Heat-sensitive packaging cutting'],
    seo: {
      title: 'Injector Blade TiN Titanium Coating | Gold Precision Film Blade',
      description: 'TiN titanium coated injector blade, 2300 HV, 40% lower friction. Ideal for precision film, optical film, electronic foil, and lamination cutting.',
      keywords: ['injector blade titanium', 'titanium coated injector', 'TiN injector blade', '38x8 titanium blade', 'gold blade', 'PVD coated injector', 'stainless titanium blade', 'film cutting blade', 'optical film blade', 'electronic foil blade', 'titanium coated blade', 'gold injector blade', 'low friction injector', 'precision film blade', 'lamination cutting blade']
    },
  },
  'injektor-paslanmaz-titanyum-2-kanalli': {
    name: 'Injector Blade - Stainless Steel + Titanium Coating, 2-Channel Slot',
    description: '38x8x0.25mm AISI 420 stainless steel with TiN coating, 2-channel slot design. Unlike standard 2-slot model, this design features dual channels in each slot providing stronger grip and superior stability. Prevents blade slippage in high-speed cutting operations and vibration-sensitive applications. Combines titanium coating advantages with 2-channel slot mechanical stability.',
    features: [
      '2-channel slot - reinforced grip',
      'Stability for high-speed operations',
      'Vibration-free cutting guarantee',
      'TiN titanium coating',
      'Anti-slip design',
      'For professional machines'
    ],
    applications: ['High-speed slitting operations', 'Precision tolerance cutting', 'Automatic cutting lines', 'Vibration-sensitive applications', 'Continuous production lines'],
    seo: {
      title: 'Injector Blade 2-Channel Slot TiN | High-Speed Anti-Slip Blade',
      description: '2-channel slot injector blade with TiN coating. Reinforced grip, anti-slip for high-speed slitting, automatic cutting lines, and vibration-sensitive applications.',
      keywords: ['injector blade 2 channel', '2 channel slot blade', 'dual channel injector', 'dual channel injector blade', '38x8 2 channel', 'reinforced grip blade', 'high speed blade', 'stability blade', 'vibration-free cutting', 'professional injector', 'automatic cutting blade', 'high speed injector blade', 'precision slitting blade', 'anti-slip blade', 'continuous production blade']
    },
  },
  'injektor-paslanmaz-xcd': {
    name: 'Injector Blade - Stainless Steel + XCD Coating, 2 Slot',
    description: '38x8x0.25mm AISI 420 stainless steel with XCD (Xtreme Carbon Diamond) coating. This DLC (Diamond-Like Carbon) family coating offers hardness values up to 5000 HV through diamond-like carbon structure. Friction coefficient drops below 0.1 providing excellent sliding properties. Black diamond appearance reflects premium quality. Superior non-stick properties prevent even the most adhesive materials from sticking.',
    features: [
      'XCD diamond-like carbon coating',
      '5000 HV ultra-high hardness',
      '<0.1 friction coefficient',
      'Excellent non-stick properties',
      'Black diamond appearance',
      'Premium quality coating'
    ],
    applications: ['Ultra-adhesive tape cutting', 'Silicone-coated material slitting', 'Resin-impregnated fabric cutting', 'Adhesive label slitting', 'Special adhesive products'],
    seo: {
      title: 'Injector Blade XCD Diamond Coating | 5000 HV Non-Stick Blade',
      description: 'XCD diamond-like carbon coated injector blade, 5000 HV, <0.1 friction. Non-stick for ultra-adhesive tape, silicone coatings, and special adhesive products.',
      keywords: ['injector blade XCD', 'diamond coated injector', 'DLC injector blade', 'diamond coated blade', '38x8 XCD blade', 'black diamond blade', 'adhesive tape blade', 'silicone cutting blade', '5000 HV blade', 'ultra low friction', 'black diamond blade', 'non-stick injector', 'adhesive cutting blade', 'DLC coated blade', 'premium injector blade']
    },
  },
  'injektor-yekpare-tungsten': {
    name: 'Injector Blade - Solid Tungsten Carbide, Slotless',
    description: '38x8x0.25mm solid tungsten carbide (WC-Co) composition slotless injector blade. This sintered material containing 94% tungsten carbide and 6% cobalt binder achieves HRA 92-94 (HRC 75+ equivalent) hardness. Slotless design enables special holders or direct adhesive/brazing applications. Gray metallic appearance distinguishes it from steel. Used for precision micro-cutting of ultra-abrasive materials.',
    features: [
      'Solid tungsten carbide construction',
      'HRA 92-94 ultra-high hardness',
      'Slotless special mounting design',
      'Gray metallic appearance',
      '20-50x longer life than steel',
      'Monolithic integrity'
    ],
    applications: ['Ultra-abrasive material micro-cutting', 'Ceramic-coated paper slitting', 'Metal foil precision cutting', 'Battery electrode material slitting', 'Special holder applications'],
    seo: {
      title: 'Injector Blade Tungsten Carbide Slotless | HRA 92-94 Ultra-Hard',
      description: 'Solid tungsten carbide injector blade, slotless, HRA 92-94. 20-50x longer life for abrasive materials, metal foil, and battery electrode micro-cutting.',
      keywords: ['injector blade tungsten', 'tungsten carbide injector', 'solid tungsten blade', 'tungsten carbide injector blade', '38x8 tungsten blade', 'slotless blade', 'WC blade', 'carbide injector', 'ultra hard blade', 'HRA 92 blade', 'solid carbide blade', 'metal foil blade', 'battery electrode blade', 'monolithic carbide', 'slotless injector blade']
    },
  },
  'injektor-yekpare-seramik-030': {
    name: 'Injector Blade - Solid Ceramic (Zirconia), Slotless - 0.30mm',
    description: '38x8x0.30mm solid zirconia (ZrO2) ceramic slotless injector blade. Instantly recognizable by its pure white appearance, this blade has tetragonal polycrystalline zirconia (Y-TZP) structure. Completely metal-free, non-electrically conductive, no metal contamination risk. Biocompatibility certified for safe use in food and medical applications. Passes through metal detector lines without issues.',
    features: [
      'Pure white solid zirconia ceramic',
      'No metal contamination',
      'Electrical insulator',
      'Biocompatible material',
      'Metal detector safe',
      'FDA compliant food grade'
    ],
    applications: ['Food industry (metal detector lines)', 'Electronic component cutting', 'Battery separator film slitting', 'Medical sterile packaging', 'Cleanroom applications'],
    seo: {
      title: 'Injector Blade Zirconia Ceramic 0.30mm | Metal-Free Food Industry',
      description: 'Solid zirconia ceramic injector blade 0.30mm, pure white, metal-free. Metal detector safe, FDA compliant for food industry, medical, and cleanroom applications.',
      keywords: ['injector blade ceramic', 'white ceramic blade', 'zirconia injector', 'ceramic injector blade', 'white ceramic blade', '38x8x0.30 blade', 'metal contamination free', 'food blade', 'medical blade', 'biocompatible blade', 'zirconia blade', 'non-conductive blade', 'food industry blade', 'cleanroom blade', 'Y-TZP injector', 'metal detector safe blade']
    },
  },
  'injektor-yekpare-seramik-064': {
    name: 'Injector Blade - Solid Ceramic (Zirconia), Slotless - 0.64mm',
    description: '38x8x0.64mm thick-section solid zirconia ceramic injector blade. More than twice the thickness of standard 0.30mm version, this model offers higher mechanical strength and extended life. Pure white appearance reflects premium quality. Preferred for heavy-duty applications and cutting thicker materials. Slotless design enables custom mounting solutions.',
    features: [
      '0.64mm thick section - high strength',
      'Pure white solid zirconia',
      'For heavy-duty applications',
      'High fracture toughness',
      'No metal contamination',
      'Long-lasting ceramic structure'
    ],
    applications: ['Heavy-duty food cutting', 'Thick material slitting', 'Intensive use lines', 'Industrial cleanroom', 'Premium medical applications'],
    seo: {
      title: 'Injector Blade Zirconia Ceramic 0.64mm | Heavy-Duty Thick Blade',
      description: 'Solid zirconia ceramic injector blade 0.64mm, thick section for heavy-duty applications. High strength for intensive use, cleanroom, and premium medical applications.',
      keywords: ['injector blade ceramic 0.64', 'thick ceramic blade', '0.64mm zirconia blade', 'thick ceramic blade', 'heavy duty ceramic', '38x8x0.64 blade', 'white ceramic injector', 'high strength blade', 'heavy duty blade', 'premium ceramic blade', 'industrial zirconia', 'durable ceramic blade', 'white zirconia injector', 'thick blade', 'high strength ceramic']
    },
  },
  'injektor-endurium-seramik': {
    name: 'Injector Blade - Endurium Steel + Ceramic Coating, 2 Slot',
    description: '38x8x0.36mm Endurium HSS (High Speed Steel) substrate with multi-layer ceramic coating. Premium injector blade combining HSS high temperature resistance (8-10% tungsten, 4-5% molybdenum, 4% chromium) with extreme ceramic hardness. No hardness loss up to 600°C, thermal shock resistant in high-speed and interrupted cutting operations. Designed for the most demanding industrial micro-cutting applications.',
    features: [
      'Endurium HSS high speed steel',
      'HRC 64-66 substrate hardness',
      '3500 HV ceramic coating',
      '600°C temperature resistance',
      'Thermal shock resistance',
      '0.36mm special thickness'
    ],
    applications: ['High-speed micro-slitting', 'Interrupted precision cutting', 'Metal foil micro-cutting', '24/7 continuous production', 'Cutting under thermal load'],
    seo: {
      title: 'Injector Blade Endurium HSS Ceramic | 600°C High-Speed Blade',
      description: 'Endurium HSS + ceramic coated injector blade, HRC 64-66, 3500 HV, 600°C resistance. For high-speed micro-slitting, metal foil, and 24/7 continuous production.',
      keywords: ['injector blade Endurium', 'HSS injector blade', 'high speed steel blade', '38x8x0.36 blade', '600 degree resistance blade', 'ceramic coated HSS', 'thermal shock resistant blade', 'metal foil blade', 'high speed cutting', 'Endurium injector blade', 'high speed steel blade', 'thermal resistant blade', 'continuous production blade', 'premium HSS injector', 'ceramic coated HSS']
    },
  },

  // =============================================================================
  // SINGLE EDGE BLADES — B201 Series
  // =============================================================================
  'single-edge-carbon-2f': {
    name: 'Single Edge Blade — Carbon Steel 0.23mm 2-Facet',
    subtitle: 'Standard Type — Aluminum Back — Notched',
    description: 'High carbon steel single edge blade. 0.23mm (0.009") thickness, 2-facet grind for optimal balance of durability and sharpness. For glass scraping, label removal, automotive deburring, and general industrial surface preparation.',
    shortDescription: 'High carbon steel single edge blade with 2-facet grind. 0.23mm thickness, aluminum back, notched design. Ideal for glass scraping, label removal, and industrial surface preparation.',
    features: ['High carbon steel — superior hardness and edge retention', '2-facet grind — durability and sharpness balance', 'Aluminum back — safe handling and storage', 'Notched design — fits standard scraper holders', 'Corrosion-resistant surface treatment', '38×19mm industry standard size'],
    applications: ['Glass scraping and cleaning', 'Label and adhesive removal', 'Automotive — rubber deburring', 'Paint and putty scraping', 'General industrial surface preparation'],
    benefits: [
      { title: 'Durability–Sharpness Balance', description: '2-facet grind profile delivers long edge life and reliable cutting quality on hard surfaces', icon: 'Shield' },
      { title: 'Safe Storage', description: 'Aluminum back design protects the edge during transport and storage', icon: 'Box' },
      { title: 'Universal Compatibility', description: 'Notched edge profile fits standard scraper tools instantly', icon: 'Settings' },
    ],
    longDescription: `
      <p>The B201 102 A01 Single Edge Blade is a standard-type single edge blade designed for industrial scraping and cutting applications. Manufactured from high carbon steel and hardened to HRC 58-62 through controlled atmosphere heat treatment.</p>

      <h3>2-Facet Grind Profile</h3>
      <p>The 2-facet (double-surface) grind profile provides an <strong>optimal balance between durability and sharpness</strong>. This profile is preferred for general-purpose scraping, surface cleaning, and cutting tasks. Compared to 3-facet, it offers longer edge life and reliable performance even on hard surfaces.</p>

      <h3>Applications</h3>
      <ul>
        <li><strong>Glass industry:</strong> Glass surface scraping, label/sticker removal, glass cleaning</li>
        <li><strong>Automotive:</strong> Rubber deburring, gasket scraping, window tint removal</li>
        <li><strong>Construction:</strong> Paint/putty scraping, surface preparation</li>
        <li><strong>Printing/Packaging:</strong> Ink scraping, roller cleaning</li>
      </ul>

      <h3>Technical Details</h3>
      <p>The aluminum back design provides safe transport and storage. The notched edge profile enables compatible mounting with standard scraper tools. A corrosion-resistant surface treatment has been applied.</p>
    `,
    seo: {
      title: 'Single Edge Blade Carbon Steel 0.23mm 2-Facet B201 | Alya Blade',
      description: 'High carbon steel single edge blade. 0.23mm (0.009"), HRC 58-62, 2-facet grind, aluminum back. Glass scraping, label removal, automotive deburring. Industrial scraper blade.',
      keywords: ['single edge blade', 'single edge razor blade', 'glass scraper blade', 'scraper blade', 'B201 blade', 'carbon steel single edge', '0.009 inch blade', '2-facet blade', 'glass cleaning blade', 'label removal blade', 'industrial single edge', 'window scraper blade', 'paint scraper blade', 'notched single edge', 'razor scraper blade'],
    },
  },
  'single-edge-carbon-3f': {
    name: 'Single Edge Blade — Carbon Steel 0.23mm 3-Facet',
    subtitle: 'Precision Cut — Cased/Uncased Options',
    description: 'High carbon steel single edge blade with 3-facet precision grind for ultra-sharp edge. 0.23mm thickness. Available in cased (aluminum back), uncased, and 1000-count bulk packaging. Superior performance in glass cleaning, precision scraping, and thin material cutting.',
    shortDescription: '3-facet ultra-sharp single edge blade. 0.23mm carbon steel. Ideal for precision glass cleaning, fine label removal, and thin film cutting. Cased, uncased, and 1000-count bulk options.',
    features: ['3-facet precision grind — ultra-sharp edge', 'Cased and uncased options available', 'Notched design — secure mounting', '1000-count bulk packaging (B201 002 A01)', 'High carbon steel — consistent cut quality', '38×19mm / 38×17mm standard sizes'],
    applications: ['Precision glass cleaning', 'Fine label and adhesive removal', 'Thin film and foil cutting', 'Laboratory and cleanroom applications', 'Automotive detail cleaning'],
    benefits: [
      { title: 'Ultra-Sharp 3-Facet Edge', description: 'Three-facet grind profile delivers surgical-level sharpness — makes the difference in precision applications', icon: 'Target' },
      { title: 'Flexible Packaging Options', description: 'Cased (single), uncased, or 1000-count bulk — choose based on operational needs', icon: 'Package' },
      { title: 'Consistent Cut Quality', description: 'Controlled atmosphere hardening guarantees identical performance from every blade', icon: 'CheckCircle' },
    ],
    longDescription: `
      <p>The B201 131 A01 series features a <strong>3-facet (three-surface) precision grind</strong> profile delivering an ultra-sharp edge. Compared to the standard 2-facet, its finer and sharper edge geometry makes it the preferred choice for applications requiring precision scraping and clean cuts.</p>

      <h3>3-Facet Grind Advantage</h3>
      <p>The third grinding surface narrows the edge angle to deliver <strong>surgical-level sharpness</strong>. This profile particularly excels in glass surface cleaning, thin film cutting, and precision label removal. Despite the fine edge profile, advanced Armor Edge technology maintains structural integrity.</p>

      <h3>Variant Options</h3>
      <ul>
        <li><strong>B201 131 A01:</strong> 38×19mm, aluminum back, notched</li>
        <li><strong>B201 131P A01:</strong> 38×19mm, aluminum back, notched (Premium)</li>
        <li><strong>B201 002 A01:</strong> 38×17mm, uncased, notched — 1000-count bulk packaging</li>
      </ul>

      <h3>Applications</h3>
      <ul>
        <li><strong>Glass industry:</strong> Precision glass cleaning, fine label/sticker removal</li>
        <li><strong>Automotive detail:</strong> Fine deburring, precision surface cleaning</li>
        <li><strong>Laboratory:</strong> Sample cutting, slide preparation</li>
        <li><strong>Printing:</strong> Thin film and foil cutting</li>
      </ul>
    `,
    seo: {
      title: 'Single Edge Blade 3-Facet Carbon Steel 0.23mm B201 | Alya Blade',
      description: '3-facet ultra-sharp single edge blade. 0.23mm high carbon steel, HRC 58-62. Precision glass cleaning, label removal, thin film cutting. Cased/uncased/1000-count bulk.',
      keywords: ['3 facet single edge blade', 'precision single edge razor', 'ultra sharp scraper blade', 'glass cleaning blade', 'B201 131 blade', 'uncased single edge', 'bulk single edge blade 1000', 'laboratory blade', 'cleanroom scraper blade', 'precision scraping blade', 'three facet blade grind', 'fine scraper blade', 'surgical sharp blade', 'window cleaning blade'],
    },
  },
  'single-edge-stainless': {
    name: 'Single Edge Blade — Stainless Steel 0.23mm',
    subtitle: 'Corrosion Resistant — 3-Facet Precision Grind',
    description: 'Stainless steel single edge blade with full corrosion resistance. 13%+ chromium content provides complete protection against rust and oxidation. Preferred in food processing, pharmaceutical, cleanroom, and maritime applications where moisture and chemical exposure are constant.',
    shortDescription: 'Stainless steel single edge blade with 13%+ chromium for full corrosion resistance. 3-facet grind, 0.23mm thickness. Ideal for food processing, pharmaceutical, cleanroom, and maritime sectors.',
    features: ['Stainless steel — full corrosion resistance', '13%+ chromium — rust and oxidation protection', '3-facet precision grind — clean cut', 'Aluminum back — safe storage', 'Moisture and chemical resistant', 'Food and pharmaceutical grade'],
    applications: ['Food processing and preparation', 'Pharmaceutical and cosmetics manufacturing', 'Cleanroom applications', 'Maritime and high-moisture environments', 'Chemical-exposure surface cleaning'],
    benefits: [
      { title: 'Full Corrosion Protection', description: '13%+ chromium content provides protection against moisture, salt, and chemicals — zero rust risk', icon: 'Droplets' },
      { title: 'Food Safety', description: 'Stainless construction eliminates food contamination risk — suitable for FDA/HACCP compliant environments', icon: 'ShieldCheck' },
      { title: 'Extended Shelf Life', description: 'Remains intact even in humid storage conditions — easier inventory management', icon: 'Clock' },
    ],
    longDescription: `
      <p>The B201 801 A01 is a specialized single edge blade manufactured from <strong>stainless steel</strong>. With 13%+ chromium content, it provides full corrosion resistance in environments with heavy moisture, water, and chemical exposure.</p>

      <h3>Why Stainless Steel?</h3>
      <p>Standard carbon steel blades rust quickly in humid environments, creating contamination risk. The stainless steel version offers:</p>
      <ul>
        <li><strong>Full protection</strong> against rust and oxidation</li>
        <li><strong>Food-safe</strong> — zero contamination risk</li>
        <li><strong>Chemical resistance</strong> — withstands cleaning solutions</li>
        <li><strong>Extended shelf life</strong> — won't degrade even in humid storage</li>
      </ul>

      <h3>Applications</h3>
      <ul>
        <li><strong>Food processing:</strong> Scraping and cleaning in meat, dairy, and beverage facilities</li>
        <li><strong>Pharmaceutical and cosmetics:</strong> Surface preparation on clean production lines</li>
        <li><strong>Maritime:</strong> Glass and surface cleaning in saltwater environments</li>
        <li><strong>Cleanroom:</strong> Precision scraping with zero contamination risk</li>
      </ul>
    `,
    seo: {
      title: 'Single Edge Blade Stainless Steel 0.23mm B201 | Alya Blade',
      description: 'Stainless steel single edge blade. 13%+ chromium, HRC 55-58, 3-facet. Food processing, pharmaceutical, cleanroom, maritime. Full corrosion resistance.',
      keywords: ['stainless steel single edge', 'corrosion resistant blade', 'food safe scraper blade', 'stainless scraper blade', 'B201 801 blade', 'cleanroom blade', 'maritime blade', 'pharmaceutical blade', 'rust proof single edge', 'food processing blade', 'FDA compliant blade', 'HACCP blade', 'stainless razor blade', 'chemical resistant blade'],
    },
  },
  'single-edge-stainless-ptfe': {
    name: 'Single Edge Blade — Stainless Steel + PTFE Coated 0.23mm',
    subtitle: 'PTFE (Teflon®) Coated — Non-Stick',
    description: 'Stainless steel single edge blade with PTFE (Polytetrafluoroethylene / Teflon®) coating. 0.23mm, 3-facet grind. PTFE coating reduces friction by 40-60%, prevents adhesive material buildup. Superior performance in adhesive label removal, tape scraping, and window tint removal.',
    shortDescription: 'PTFE Teflon coated stainless steel single edge blade. 40-60% friction reduction. Best for adhesive label removal, window tint removal, tape residue scraping. Non-stick blade technology.',
    features: ['PTFE (Teflon) coating — prevents adhesion', '40-60% friction reduction — superior performance on adhesive materials', 'Stainless steel substrate — full corrosion resistance', '3-facet precision grind — clean and controlled cut', 'Notched and scored variants available', 'Ideal for adhesive buildup environments'],
    applications: ['Adhesive label and sticker removal', 'Window tint film removal — automotive and building', 'Adhesive residue cleaning', 'Printing — ink and adhesive scraping', 'Packaging — tape residue cleaning'],
    benefits: [
      { title: '40-60% Lower Friction', description: 'PTFE coating prevents adhesive material buildup — every cut as clean as the first', icon: 'Zap' },
      { title: 'Dual Protection', description: 'Stainless steel + PTFE coating = corrosion + adhesion problem solved simultaneously', icon: 'ShieldCheck' },
      { title: 'Notched & Scored Options', description: 'Two mounting profiles for broad scraper tool compatibility', icon: 'Settings' },
    ],
    longDescription: `
      <p>The B201 901 A01 is a premium single edge blade featuring <strong>PTFE (Polytetrafluoroethylene / Teflon®) coating over a stainless steel substrate</strong>. Delivers superior performance in all applications involving contact with adhesive materials.</p>

      <h3>PTFE Coating Advantages</h3>
      <ul>
        <li><strong>40-60% friction reduction:</strong> Adhesive material won't build up on the blade surface</li>
        <li><strong>Non-stick:</strong> Adhesive residue transfer is minimized</li>
        <li><strong>Extended service life:</strong> Reduced friction from the coating slows edge wear</li>
        <li><strong>Clean cut:</strong> By preventing adhesive buildup, every cut is as clean as the first</li>
      </ul>

      <h3>Variant Options</h3>
      <ul>
        <li><strong>B201 901 A01:</strong> Notched — compatible with standard scraper tools</li>
        <li><strong>B201 901 A01-K:</strong> Scored — alternative mounting profile</li>
      </ul>

      <h3>Applications</h3>
      <ul>
        <li><strong>Adhesive label removal:</strong> Removing labels and stickers from glass, metal, and plastic surfaces</li>
        <li><strong>Window tint removal:</strong> Removing film from automotive and building windows</li>
        <li><strong>Printing:</strong> Ink and adhesive scraping — roller cleaning</li>
        <li><strong>Packaging:</strong> Cleaning adhesive tape residue</li>
      </ul>
    `,
    seo: {
      title: 'Single Edge Blade PTFE Coated Stainless Steel 0.23mm | Alya Blade',
      description: 'PTFE Teflon coated stainless steel single edge blade. 40-60% friction reduction. Adhesive label removal, window tint removal, tape scraping. Non-stick industrial blade.',
      keywords: ['PTFE coated blade', 'Teflon coated single edge', 'non-stick scraper blade', 'adhesive removal blade', 'B201 901 blade', 'window tint blade', 'stainless PTFE blade', 'anti-stick blade', 'label removal blade PTFE', 'Teflon razor blade', 'coated single edge blade', 'non-stick single edge', 'tape residue blade', 'low friction blade'],
    },
  },
  'single-edge-carbon-030': {
    name: 'Single Edge Blade — Carbon Steel 0.30mm Heavy Duty',
    subtitle: 'Thick Profile — Heavy Duty — Aluminum/Metal Spine Back',
    description: 'Thick profile (0.30mm / 0.012") heavy duty single edge blade. High carbon steel, 2-facet grind. For demanding applications where standard 0.23mm blades are insufficient — heavy paint scraping, thick adhesive removal, concrete and metal surface preparation.',
    shortDescription: 'Heavy duty thick profile single edge blade. 0.30mm (0.012"), high carbon steel, 2-facet. For heavy paint scraping, thick adhesive removal, metal surface preparation. Aluminum and metal spine back options.',
    features: ['0.30mm thick profile — 30% more rigid than standard', 'Heavy duty — for demanding applications', '2-facet grind — maximum durability', 'Aluminum and metal spine back options', 'High carbon steel — long life on hard surfaces', 'Notched — fits standard scraper tools'],
    applications: ['Heavy paint and varnish scraping', 'Thick adhesive and putty removal', 'Construction — surface preparation', 'Metal surface cleaning and deburring', 'Automotive — gasket and sealant scraping'],
    benefits: [
      { title: '30% Thicker Profile', description: '0.30mm thickness eliminates blade flex in heavy-duty applications — zero bend risk', icon: 'Shield' },
      { title: 'Two Back Options', description: 'Aluminum (lightweight) or metal spine (extra rigid) — choose for your application', icon: 'Box' },
      { title: 'Extended Edge Life', description: 'Thick profile provides more wear margin — reduces blade change frequency', icon: 'Clock' },
    ],
    longDescription: `
      <p>The B201 501/504 series features a <strong>30% thicker profile</strong> compared to standard 0.23mm blades, designed for heavy-duty applications. The 0.30mm (0.012") thickness minimizes bending risk on hard surfaces and enables more aggressive scraping.</p>

      <h3>0.30mm Thick Profile Advantage</h3>
      <ul>
        <li><strong>30% thicker:</strong> Noticeably increased rigidity compared to standard blades</li>
        <li><strong>Bend resistance:</strong> Blade won't flex on hard surfaces — controlled scraping</li>
        <li><strong>Longer edge life:</strong> Thick profile provides more grinding margin</li>
        <li><strong>Aggressive scraping:</strong> Effective removal of stubborn paint, adhesive, and residue</li>
      </ul>

      <h3>Back Options</h3>
      <ul>
        <li><strong>B201 501 A01:</strong> Aluminum back — lightweight and economical</li>
        <li><strong>B201 504 A01:</strong> Metal spine back — extra rigidity and durability</li>
      </ul>

      <h3>Applications</h3>
      <ul>
        <li><strong>Construction:</strong> Heavy paint/varnish scraping, putty stripping, floor preparation</li>
        <li><strong>Metal industry:</strong> Metal surface cleaning, deburring, weld residue scraping</li>
        <li><strong>Automotive:</strong> Gasket/sealant scraping, heavy adhesive removal</li>
        <li><strong>Maintenance:</strong> Stubborn residue cleaning, surface renovation</li>
      </ul>
    `,
    seo: {
      title: 'Single Edge Blade 0.30mm Heavy Duty Carbon Steel | Alya Blade',
      description: 'Heavy duty thick profile single edge blade. 0.30mm (0.012"), HRC 58-62, 2-facet. Heavy paint scraping, metal surface prep, gasket removal. Aluminum/metal spine back.',
      keywords: ['heavy duty single edge blade', 'thick single edge blade', '0.30mm blade', '0.012 inch blade', 'heavy duty scraper blade', 'B201 501 blade', 'metal spine blade', 'paint scraper blade heavy', 'industrial heavy duty blade', 'gasket scraping blade', 'thick razor blade', 'construction scraper blade', 'heavy gauge blade', 'metal back single edge'],
    },
  },

  'b208': {
    name: 'B208 – Pointed Tip Hook Blade (Standard)',
    subtitle: 'Standard Pointed Tip Hook Blade',
    description: 'B208 standard pointed tip hook blade. 49-52×19×0.6mm, 2-3 notches, 2-5 holes. Carbon steel, high carbon and TiN coated variants. Ideal for packaging, film and tape cutting.',
    features: ['Pointed tip design — easy material entry', 'Hook profile — safe cutting', '49/51/52×19mm size options', 'Carbon, high carbon, TiN coated variants', '2-3 notch, 2-5 hole configurations', 'Sheffield Durham Duplex quality'],
    applications: ['Packaging opening', 'Film cutting', 'Tape stripping', 'Warehouse & logistics'],
    seo: {
      title: 'B208 Pointed Tip Hook Blade | Hook Blade | Alya Blade',
      description: 'B208 standard pointed tip hook blade. 49-52×19×0.6mm, carbon/high carbon/TiN. Packaging, film and tape cutting. Sheffield Durham Duplex. Authorized distributor.',
      keywords: ['hook blade', 'B208', 'pointed tip hook', 'packaging cutting blade', 'film cutting blade', 'Sheffield hook blade', 'utility hook blade'],
    },
    benefits: [
      { title: 'Easy Entry', description: 'Pointed tip form allows effortless material entry.', icon: 'Zap' },
      { title: 'Safe Cutting', description: 'Hook profile cuts without damaging the material underneath.', icon: 'ShieldCheck' },
      { title: 'Multiple Variants', description: 'Carbon, high carbon and TiN coating options.', icon: 'Layers' },
    ],
    longDescription: `<p>The B208 pointed tip hook blade is the most popular standard model in the hook blade family. The pointed tip form allows easy material entry, and the hook profile enables safe cutting without damaging underlying layers.</p><p>Available in 49×19×0.6mm, 51×19×0.6mm and 52×19×0.6mm size variants. Features 2 or 3 notches for compatibility with different holder systems. Carbon steel (standard), high carbon (extended life) and TiN coated (wear resistance) options available.</p><p><strong>Applications:</strong> Package opening, shrink film cutting, tape/label stripping, box opening. Preferred for safe cutting in warehouses, logistics and production lines.</p>`,
    availableSizes: [
      '49×19×0.6mm — 2N-3H, Gelatin 100-Box',
      '49×19×0.6mm — 2N, Bulk 350-Box',
      '49×19×0.6mm — 2N-2H, 10-Pack Dispenser',
      '51×19×0.6mm — 2N-2H, 10-Pack Blue Dispenser',
      '51×19×0.6mm — 2N-3H, High Carbon, 10-Pack',
      '52×19×0.6mm — 2N-3H, High Carbon, Bulk 350',
      '52×19×0.6mm — TiN, 2N-3H, High Carbon, 10×8',
      '49×19×0.6mm — 2N-2H, Paper Wrapped 10-Box',
      '49×19×0.6mm — 2N-2H, Flat Tips, 100-Box',
    ],
  },
  'b208-tekstil': {
    name: 'B208 – Broad Tip Hook Blade (Textile)',
    subtitle: 'Textile Broad Arms Hook Blade',
    description: 'B208 broad tip hook blade, specially designed for textile cutting. 52×19×0.6mm, broad arms profile. DD 1% carbon steel, HRC 58-62.',
    features: ['Broad arms tip profile', 'Designed for textile cutting', 'DD 1% carbon steel material', 'Minimises thread pulling', '52×19×0.6mm standard size', 'Sheffield Durham Duplex quality'],
    applications: ['Textile cutting', 'Bale opening', 'Leather cutting', 'Fibre cutting'],
    seo: {
      title: 'B208 Broad Tip Textile Hook Blade | Textile Hook Blade | Alya Blade',
      description: 'B208 broad tip hook blade for textile cutting. 52×19×0.6mm broad arms design. DD 1% carbon steel. Authorized distributor.',
      keywords: ['textile hook blade', 'B208 textile', 'broad arms hook blade', 'fabric cutting blade', 'textile blade', 'garment cutting blade'],
    },
    benefits: [
      { title: 'Broad Arms Design', description: 'Broad arms profile for clean cutting without fabric damage.', icon: 'Maximize' },
      { title: 'No Thread Pulling', description: 'Broad tip form prevents thread pulling and tearing.', icon: 'ShieldCheck' },
      { title: 'Textile Optimised', description: 'DD 1% carbon steel: optimised for textile industry.', icon: 'Target' },
    ],
    longDescription: `<p>The B208 Broad Tip hook blade is a variant model specifically developed for the textile industry. Unlike the standard B208 pointed tip, it features a broad arms design that enables clean cutting of fabrics and textile materials without damage.</p><p>Manufactured in 52×19×0.6mm dimensions with 2 notches and 2-3 hole configuration. Durham Duplex 1% carbon steel with HRC 58-62 hardness for sharp and long-lasting performance.</p><p><strong>Textile applications:</strong> Opening fabric rolls, bale cutting, synthetic fibre cutting, leather and faux leather cutting. The broad arms form minimises thread pulling and fabric tearing.</p>`,
  },
  'b092': {
    name: 'B092 - Holeless Monobloc Blade',
    subtitle: 'Holeless Ceramic Monobloc Utility Blade',
    description: 'Monobloc ceramic-body special-type utility blade without mounting holes. 92×8.2×0.43mm dimensions. Designed for utility knives with holeless retention mechanisms. Non-segmented continuous edge.',
    shortDescription: 'Holeless monobloc ceramic utility blade, 92×8.2×0.43mm. For special-type knives with holeless mount. Non-segmented.',
    features: [
      'Monobloc ceramic body construction',
      'Holeless design — for special retention mechanisms',
      '92mm length, 8.2mm width, 0.43mm thickness',
      'Non-segmented continuous edge',
      'Compact form — narrow-type utility knives',
      'Manufactured to ISO 9001 standards in Sheffield, England'
    ],
    applications: [
      'Holeless-mount type utility knives',
      'Precision industrial cutting',
      'Model making and prototyping',
      'Graphic design applications'
    ],
    seo: {
      title: 'B092 Holeless Monobloc Utility Blade | Ceramic Body | Alya Blade',
      description: 'B092 holeless monobloc blade, ceramic body, 92×8.2×0.43mm. For holeless-mount utility knives. Non-segmented. Sheffield quality. Authorized distributor.',
      keywords: ['holeless blade', 'B092', 'monobloc utility blade', 'ceramic blade', 'no hole blade', 'special mount blade', 'holeless cutter blade'],
    },
    benefits: [
      { title: 'Holeless Design', description: 'No mounting holes — designed for special retention mechanism knives.', icon: 'Target' },
      { title: 'Monobloc Body', description: 'Single-piece ceramic monobloc construction for structural integrity.', icon: 'Shield' },
      { title: 'Sheffield Quality', description: 'Manufactured to ISO 9001 standards in Sheffield, England.', icon: 'Award' },
    ],
    longDescription: `<p>The B092 is a holeless monobloc utility blade designed for special-type utility knives that use holeless retention mechanisms rather than standard mounting holes or slots.</p><p>Manufactured with a monobloc ceramic body at 92×8.2×0.43mm dimensions. The absence of mounting holes provides a clean, uninterrupted blade body. Non-segmented continuous edge construction.</p><p>Compatible with narrow-type utility knives featuring spring-loaded or friction-based blade retention without mounting holes. Ideal for precision cutting and graphic design applications.</p>`,
    availableSizes: [
      '92×8.2×0.43mm — Holeless Monobloc',
    ],
  },
  // =============================================================================
  // HOBBY BLADES / PRECISION CRAFT BLADES / ART KNIFE BLADES
  // =============================================================================
  'b226': {
    name: 'B226 - Supaslit Blade',
    subtitle: 'Industrial Slitting Blade 44/26x9x0.40mm',
    description: 'Supaslit industrial slitting blade. 44/26x9x0.40mm, 2xO3mm holes. 12-pack tube. For precision film and paper slitting machines. Sheffield Durham Duplex quality.',
    shortDescription: 'Supaslit precision slitting blade. 44/26x9x0.40mm with 2xO3mm mounting holes. 12-pack tube packaging.',
    features: ['Supaslit design for precision slitting', '44/26x9x0.40mm dimensions', '2xO3mm hole configuration for machine mounting', '12-pack tube packaging', 'For industrial slitting machines'],
    applications: ['Film slitting', 'Paper slitting', 'Precision slitting machines', 'Thin material processing'],
    seo: {
      title: 'B226 Supaslit Blade 44/26×9mm | Slitting Blade | Alya Blade',
      description: 'B226 Supaslit industrial slitting blade. 44/26×9×0.40mm, 2×Ø3mm holes, 12-pack tube. Film and paper slitting. Sheffield Durham Duplex. Authorized distributor.',
      keywords: ['supaslit blade', 'slitting blade', 'B226', 'film slitting blade', 'industrial slitting blade', 'precision slitting'],
    },
    benefits: [
      { title: 'Ultra Thin', description: '0.40mm thickness — smooth, clean slitting edges.', icon: 'Minimize' },
      { title: 'Dual Hole Mount', description: '2×Ø3mm holes — precise and stable machine mounting.', icon: 'Target' },
      { title: 'Economical Pack', description: '12-pack tube — cost-effective for bulk use.', icon: 'Package' },
    ],
    longDescription: `<p>The B226 Supaslit blade is a special-profile cutting blade designed for use in industrial slitting machines. Its 44/26×9×0.40mm dimensions and 2×Ø3mm hole configuration ensure precise machine mounting.</p><p>The 0.40mm ultra-thin thickness creates clean, burr-free slitting edges. Supplied in economical 12-pack tube packaging for bulk use.</p><p><strong>Applications:</strong> Film slitting, paper slitting, thin material slitting machines and precision industrial slitting operations.</p>`,
  },
  'b204': {
    name: 'B204 - Classic Blade',
    description: 'Classic design industrial blade. Sheffield quality professional cutting blade.',
    features: ['Classic design', 'Proven performance', 'Sheffield quality'],
    applications: ['General cutting', 'Industrial use', 'Everyday tasks'],
  },
  // B1xx Series — #11 to #14 Precision Craft Blades
  'b111': {
    name: 'B111 - Precision Craft Blade #11',
    subtitle: '#11 Fine-Point Hobby Blade 55.5x10.3x0.53mm',
    description: '#11 type precision craft/hobby blade. 55.5x10.3x0.53mm. The world most popular hobby blade geometry. Pointed and round tip variants. Compatible with X-Acto and OLFA handles. For model making, graphic arts, architecture, electronics PCB trimming, and laboratory dissection.',
    shortDescription: 'Professional #11 hobby blade. 55.5x10.3x0.53mm. Pointed and round tip variants. X-Acto, OLFA compatible.',
    features: ['#11 blade geometry — the most popular hobby blade worldwide', '55.5x10.3x0.53mm dimensions', 'Pointed tip variant for fine detail', 'Round tip variant for safer handling', 'Compatible with X-Acto, OLFA and standard craft knife handles'],
    applications: ['Model making and miniatures', 'Graphic arts and illustration', 'Architectural model building', 'Electronics PCB trimming', 'Laboratory dissection and sample prep'],
    seo: {
      title: 'B111 Hobby Blade #11 | Precision Craft Blade | Alya Blade',
      description: 'B111 precision hobby blade. 55.5×10.3×0.53mm, #11 type. Pointed & round tip. Model making, graphics, architecture, electronics. Sheffield Durham Duplex. Authorized distributor.',
      keywords: ['#11 hobby blade', 'precision craft blade', 'B111', 'model knife', 'scalpel blade', 'hobby blade', 'graphic arts blade'],
    },
    benefits: [
      { title: '#11 Geometry', description: 'World-standard #11 blade profile — the most popular hobby blade type.', icon: 'Star' },
      { title: '2 Variants', description: 'Pointed tip (detail) and round tip (safe) options.', icon: 'Layers' },
      { title: 'Universal Fit', description: 'Fully compatible with X-Acto, OLFA and similar standard handles.', icon: 'Link' },
    ],
    longDescription: `<p>The B111 is a professional blade series featuring the <strong>#11 blade geometry</strong>, the world's most popular hobby/precision cutting blade type. At 55.5×10.3×0.53mm, it is fully compatible with X-Acto, OLFA and similar standard handles.</p><p>Two variants are offered: <strong>Pointed Tip</strong> — for fine detail and precise point cuts; <strong>Round Tip</strong> — for safer handling and smooth linear cuts.</p><p><strong>Applications:</strong> Model making, graphic arts, architectural models, electronics PCB cleaning, laboratory dissection, vinyl/decal cutting, paper arts, 3D print post-processing, miniature painting prep and photo retouching.</p>`,
    availableSizes: [
      '55.5×10.3×0.53mm — Pointed Tip',
      '55.5×10.3×0.53mm — Round Tip',
    ],
  },
  'b112': {
    name: 'B112 - Compact Precision Blade #12',
    subtitle: '#12 Compact Curved Blade 42.6x9x0.53mm',
    description: '#12 type compact precision craft blade. 42.6x9x0.53mm. Smaller and more agile than #11 for tight spaces and fine curved cuts. For graphic design, leathercraft, paper arts, and miniature painting prep.',
    shortDescription: 'Compact #12 hobby blade. 42.6x9x0.53mm. Ideal for tight spaces and curved cuts.',
    features: ['#12 compact blade geometry', '42.6x9x0.53mm dimensions', 'Small profile for tight and hard-to-reach spaces', 'Ideal for curved and intricate cuts', 'Sheffield Durham Duplex quality'],
    applications: ['Graphic design detail work', 'Fine model making', 'Leathercraft', 'Paper arts'],
    seo: {
      title: 'B112 Hobby Blade #12 | Compact Precision Blade | Alya Blade',
      description: 'B112 compact hobby blade. 42.6×9×0.53mm, #12 type. Graphic design, leathercraft, fine model making. Sheffield Durham Duplex. Authorized distributor.',
      keywords: ['#12 hobby blade', 'compact craft blade', 'B112', 'fine detail blade', 'precision hobby blade'],
    },
    benefits: [
      { title: 'Compact Profile', description: '#12 type — superior manoeuvrability in tight spaces.', icon: 'Minimize' },
      { title: 'Curved Cutting', description: 'Precision performance on small radius curves.', icon: 'CircleDot' },
      { title: 'Sheffield Quality', description: 'British Sheffield steel — long-lasting sharpness.', icon: 'Shield' },
    ],
    longDescription: `<p>The B112 is a precision hobby blade with the <strong>#12 compact blade geometry</strong>. At 42.6×9×0.53mm, it has a smaller and more agile profile than the standard #11 blade.</p><p>Ideal for making fine curved cuts in tight and hard-to-reach areas. Its compact size provides superior manoeuvrability for detail work.</p><p><strong>Applications:</strong> Graphic design, fine model making, leathercraft, paper arts, miniature painting prep and precision detail cuts.</p>`,
  },
  'b113': {
    name: 'B113 - Long Profile Precision Blade #13',
    subtitle: '#13 Long Profile Blade 52.7x9x0.60mm',
    description: '#13 type long-profile precision craft blade. 52.7x9x0.60mm. Extended cutting line for long straight cuts and slicing. 0.60mm thickness provides extra rigidity. For model building, sign cutting, and vinyl application.',
    shortDescription: 'Long-profile #13 blade. 52.7x9x0.60mm, 0.60mm thick for extra rigidity.',
    features: ['#13 long-profile blade geometry', '52.7x9x0.60mm dimensions', '0.60mm thickness for extra durability and stability', 'Extended cutting line for long straight cuts', 'Sheffield Durham Duplex quality'],
    applications: ['Model building', 'Sign and display cutting', 'Vinyl application', 'Industrial precision slicing'],
    seo: {
      title: 'B113 Hobby Blade #13 | Long Profile Precision Blade | Alya Blade',
      description: 'B113 long-profile hobby blade. 52.7×9×0.60mm, #13 type. Model building, sign cutting, vinyl application. Sheffield Durham Duplex. Authorized distributor.',
      keywords: ['#13 hobby blade', 'long profile craft blade', 'B113', 'sign cutting blade', 'precision hobby blade'],
    },
    benefits: [
      { title: 'Long Profile', description: '#13 geometry — outstanding performance on long straight cuts.', icon: 'ArrowRight' },
      { title: 'Extra Thick', description: '0.60mm thickness — extra durability and stability.', icon: 'Shield' },
      { title: 'Precision Slicing', description: 'Fine tip for precise entry, long body for smooth cuts.', icon: 'Target' },
    ],
    longDescription: `<p>The B113 is a precision hobby blade with the <strong>#13 long-profile blade geometry</strong>. At 52.7×9×0.60mm, it delivers outstanding performance on long straight cuts.</p><p>The 0.60mm thickness provides extra durability compared to standard 0.53mm hobby blades. Preferred in model building and sign cutting for its extended cutting line.</p><p><strong>Applications:</strong> Model building, sign cutting, vinyl application, industrial precision cutting and long straight slicing operations.</p>`,
  },
  'b114': {
    name: 'B114 - Precision Craft Blade #14 — TiN Coated & Carbon',
    subtitle: '#14 Blade with TiN and Carbon Steel Variants 50.3x9x0.60mm',
    description: '#14 type precision craft blade with dual variants: TiN (Titanium Nitride) coated and carbon steel. 50.3x9x0.60mm. TiN coating provides up to 3x longer edge life. Wide angled edge for controlled, powerful cuts. For vinyl cutting, professional crafts, and heavy-use applications.',
    shortDescription: 'Dual-variant #14 blade. 50.3x9x0.60mm. TiN coated (3x life) and carbon steel options.',
    features: ['#14 blade geometry with wide cutting angle', '50.3x9x0.60mm dimensions', 'TiN (Titanium Nitride) coated variant — up to 3x longer life', 'Carbon steel variant — classic sharpness', 'Sheffield Durham Duplex quality'],
    applications: ['Vinyl and film cutting', 'Professional craft and hobby', 'Heavy-duty model making', 'Industrial precision cutting'],
    seo: {
      title: 'B114 Hobby Blade #14 TiN Coated & Carbon | Precision Blade | Alya Blade',
      description: 'B114 precision hobby blade. 50.3×9×0.60mm, #14 type. TiN coated & carbon variants. Vinyl, model making, crafts. Sheffield Durham Duplex. Authorized distributor.',
      keywords: ['#14 hobby blade', 'TiN coated blade', 'B114', 'titanium nitride blade', 'precision craft blade'],
    },
    benefits: [
      { title: 'TiN Coating', description: 'Titanium Nitride coating — up to 3× longer edge life.', icon: 'Sparkles' },
      { title: 'Dual Variant', description: 'TiN coated and carbon steel — choose to suit the task.', icon: 'Layers' },
      { title: '#14 Geometry', description: 'Wide cutting angle — controlled, powerful cuts.', icon: 'Target' },
    ],
    longDescription: `<p>The B114 is a dual-variant professional hobby blade with the <strong>#14 blade geometry</strong>. At 50.3×9×0.60mm, it is available in both TiN (Titanium Nitride) coated and carbon steel options.</p><p>The <strong>TiN Coated</strong> variant offers up to 3× longer edge life than standard carbon steel. Easily identified by its gold-coloured coating. The <strong>Carbon</strong> variant provides classic sharpness at an economical price point.</p><p><strong>Applications:</strong> Vinyl cutting, professional crafts, model making, industrial precision cutting and heavy-use applications.</p>`,
    availableSizes: [
      '50.3×9×0.60mm — TiN Coated',
      '50.3×9×0.60mm — Carbon',
    ],
  },

  // B14x Series — Specialty Hobby Blades
  'b141': {
    name: 'B141 - Compact Angled Tip Blade',
    subtitle: 'Compact Angled Precision Blade 36.8x8.4x0.53mm',
    description: 'Compact angled tip precision craft blade. 36.8x8.4x0.53mm. Superior maneuverability in tight and hard-to-reach spaces. For electronics PCB cleaning, miniature model building, and fine detail trimming.',
    shortDescription: 'Compact angled blade. 36.8x8.4x0.53mm. For tight spaces and miniature work.',
    features: ['Compact angled tip design', '36.8x8.4x0.53mm dimensions', 'Ideal for tight and hard-to-reach areas', 'Precision trimming and cleaning', 'Sheffield Durham Duplex quality'],
    applications: ['Miniature model building', 'Electronics PCB cleaning', 'Fine detail trimming'],
    seo: {
      title: 'B141 Compact Hobby Blade | Precision Craft Blade | Alya Blade',
      description: 'B141 compact hobby blade. 36.8×8.4×0.53mm, angled tip. Miniature models, electronics, fine model making. Sheffield Durham Duplex. Authorized distributor.',
      keywords: ['B141 hobby blade', 'compact craft blade', 'miniature blade', 'precision blade', 'electronics cutting'],
    },
    benefits: [
      { title: 'Compact', description: '36.8mm — superior manoeuvrability in tight spaces.', icon: 'Minimize' },
      { title: 'Angled Tip', description: 'Angled cutting profile — control at difficult angles.', icon: 'CornerRightDown' },
      { title: 'Precision', description: '0.53mm thickness — for fine detail work.', icon: 'Target' },
    ],
    longDescription: `<p>The B141 is a compact angled-tip precision hobby blade at 36.8×8.4×0.53mm. Its small size provides superior manoeuvrability in tight and hard-to-reach areas.</p><p><strong>Applications:</strong> Electronics PCB cleaning, miniature model building, PCB prototype correction, fine model work and precision detail cutting.</p>`,
  },
  'b142': {
    name: 'B142 - Large Wide-Profile Blade',
    subtitle: 'Large Wide-Profile Precision Blade 47x11.3x0.63mm',
    description: 'Large wide-profile precision craft blade. 47x11.3x0.63mm, 0.63mm heavy-duty thickness. Ideal for broad surface cutting, scraping, and large-scale model work. For model making, cardboard cutting, and industrial prototyping.',
    shortDescription: 'Large wide blade. 47x11.3x0.63mm. For broad surface cutting, scraping, and prototyping.',
    features: ['Wide-profile large design', '47x11.3x0.63mm dimensions', '0.63mm thickness for heavy-duty use', 'Cutting, scraping and cleaning in one blade', 'Sheffield Durham Duplex quality'],
    applications: ['Large-scale model making', 'Scraping and surface cleaning', 'Industrial prototyping', 'Cardboard cutting'],
    seo: {
      title: 'B142 Large Hobby Blade 47×11.3mm | Large Craft Blade | Alya Blade',
      description: 'B142 Large hobby blade. 47×11.3×0.63mm wide profile. Model making, scraping, prototyping. Sheffield Durham Duplex. Authorized distributor.',
      keywords: ['B142 large', 'wide profile blade', 'large craft blade', 'scraping blade', 'hobby blade'],
    },
    benefits: [
      { title: 'Wide Profile', description: '47×11.3mm — efficient cutting on large surfaces.', icon: 'Maximize' },
      { title: 'Heavy Duty', description: '0.63mm thickness — built for intensive use.', icon: 'Shield' },
      { title: 'Multi-Purpose', description: 'Cutting, scraping and cleaning in one blade.', icon: 'Layers' },
    ],
    longDescription: `<p>The B142 Large is a wide-profile hobby blade at 47×11.3×0.63mm. The 0.63mm thickness delivers heavy-duty durability.</p><p>The wide angled-tip design facilitates smooth cutting, scraping and cleaning on large surfaces.</p><p><strong>Applications:</strong> Model making, cardboard cutting, industrial prototyping, scraping and cleaning operations.</p>`,
  },
  'b142k': {
    name: 'B142 Small - Compact Blade — OLFA KB4-S/5 Compatible',
    subtitle: 'Compact Precision Blade 40x9mm / OLFA 40.5x8mm',
    description: 'Compact version of the B142 family. Two size variants: 40x9x0.53mm standard and OLFA KB4-S/5 compatible 40.5x8x0.50mm. For miniature model building, electronics assembly, and fine detail cutting with OLFA AK-4 series art knives.',
    shortDescription: 'Compact B142. Two variants: 40x9x0.53mm standard and OLFA KB4-S/5 compatible 40.5x8x0.50mm.',
    features: ['Two size variants available', '40x9x0.53mm standard variant', 'OLFA KB4-S/5 compatible 40.5x8x0.50mm variant', 'Compact design for tight spaces', 'Sheffield Durham Duplex quality'],
    applications: ['Miniature model building', 'Electronics assembly', 'Fine detail cutting'],
    seo: {
      title: 'B142 Small Hobby Blade OLFA Compatible | Small Craft Blade | Alya Blade',
      description: 'B142 Small hobby blade. 40×9mm & OLFA KB4-S/5 compatible 40.5×8mm. Miniature models, electronics, detail. Sheffield Durham Duplex. Authorized distributor.',
      keywords: ['B142 small', 'OLFA KB4-S/5 compatible', 'compact craft blade', 'miniature blade', 'hobby blade'],
    },
    benefits: [
      { title: 'OLFA Compatible', description: 'KB4-S/5 variant — full compatibility with OLFA AK-4 series.', icon: 'Link' },
      { title: 'Dual Size', description: '40×9mm and 40.5×8mm — choose to suit the task.', icon: 'Layers' },
      { title: 'Compact', description: 'Small size — superior manoeuvrability in tight spaces.', icon: 'Minimize' },
    ],
    longDescription: `<p>The B142 Small is the compact version of the B142 family. Available in two size variants: standard 40×9×0.53mm and OLFA KB4-S/5 compatible 40.5×8×0.50mm.</p><p>The compact angled-tip design delivers outstanding performance for precision cutting and detail work in tight spaces.</p><p><strong>Applications:</strong> Miniature model building, electronics assembly, fine detail cuts and as a replacement blade for OLFA AK-4 series art knives.</p>`,
    availableSizes: [
      '40×9×0.53mm — Standard',
      '(OLFA KB4-S/5) 40.5×8×0.50mm — OLFA Compatible',
    ],
  },
  'b143': {
    name: 'B143 - Hook Profile Compact Blade',
    subtitle: 'Hook-Form Precision Blade 37x10x0.53mm',
    description: 'Hook-profile compact precision craft blade. 37x10x0.53mm. Curved profile excels at scraping, deburring, and curved cuts. For leathercraft, paper arts, and industrial deburring.',
    shortDescription: 'Hook-profile compact blade. 37x10x0.53mm. For scraping, deburring, and curved cuts.',
    features: ['Hook-form compact design', '37x10x0.53mm dimensions', 'Precision scraping and deburring', 'Curved cutting profile', 'Sheffield Durham Duplex quality'],
    applications: ['Leathercraft', 'Paper arts and decoration', 'Deburring and trimming'],
    seo: {
      title: 'B143 Hook Profile Hobby Blade | Hook Craft Blade | Alya Blade',
      description: 'B143 hook-profile hobby blade. 37×10×0.53mm. Leathercraft, paper arts, deburring. Sheffield Durham Duplex. Authorized distributor.',
      keywords: ['B143 hobby blade', 'hook profile blade', 'scraping blade', 'deburring', 'hook craft blade'],
    },
    benefits: [
      { title: 'Hook Form', description: 'Curved profile — excels at scraping and curved cuts.', icon: 'Anchor' },
      { title: 'Compact', description: '37mm — efficient in hard-to-reach areas.', icon: 'Minimize' },
      { title: 'Multi-Functional', description: 'Cutting, scraping and deburring in one blade.', icon: 'Layers' },
    ],
    longDescription: `<p>The B143 is a hook-profile compact hobby blade at 37×10×0.53mm. Its curved profile excels at scraping, deburring and curved cutting operations.</p><p><strong>Applications:</strong> Leathercraft, paper arts, deburring, fine detail cutting and decorative scraping.</p>`,
  },
  'b144': {
    name: 'B144 - Chisel Edge (Flat) Blade',
    subtitle: 'Chisel/Flat Edge Precision Blade 40x10x0.53mm',
    description: 'Chisel (flat edge) precision craft blade. 40x10x0.53mm. Straight cutting line for linear cuts, surface scraping, and stencil work. For print preparation, stencil cutting, and industrial surface cleaning.',
    shortDescription: 'Chisel edge blade. 40x10x0.53mm. For linear cuts, scraping, and stencil work.',
    features: ['Chisel (flat edge) design', '40x10x0.53mm dimensions', 'Linear cuts and surface scraping', 'Stencil and template cutting', 'Sheffield Durham Duplex quality'],
    applications: ['Stencil and template cutting', 'Surface scraping and cleaning', 'Print preparation'],
    seo: {
      title: 'B144 Chisel Edge Hobby Blade | Flat Edge Craft Blade | Alya Blade',
      description: 'B144 chisel edge hobby blade. 40×10×0.53mm. Stencil, scraping, print preparation. Sheffield Durham Duplex. Authorized distributor.',
      keywords: ['B144 hobby blade', 'chisel blade', 'flat edge blade', 'stencil blade', 'flat edge craft blade'],
    },
    benefits: [
      { title: 'Flat Edge', description: 'Chisel profile — perfect straightness on linear cuts.', icon: 'Minus' },
      { title: 'Multi-Functional', description: 'Cutting, scraping and cleaning — one blade.', icon: 'Layers' },
      { title: 'Efficient', description: '40mm wide edge — efficient work on broad surfaces.', icon: 'Maximize' },
    ],
    longDescription: `<p>The B144 is a chisel (flat edge) design hobby blade at 40×10×0.53mm. Its straight cutting line delivers outstanding performance on linear cuts, scraping and stencil work.</p><p><strong>Applications:</strong> Stencil and template cutting, print preparation, surface scraping and cleaning, and industrial cleaning applications.</p>`,
  },
  'b145': {
    name: 'B145 - Multi-Size Flat Edge Blade — OLFA KB4-F/5 Compatible',
    subtitle: 'Multi-Size Flat Blade 45x12/16/20mm + OLFA 35.5x8mm',
    description: 'Multi-size flat edge precision craft blade available in 4 sizes: 45x12mm, 45x16mm, 45x20mm, and OLFA KB4-F/5 compatible 35.5x8x0.55mm. For professional model making, graphic work, and wide-surface template cutting.',
    shortDescription: '4-size flat edge blade. 45x12/16/20mm and OLFA KB4-F/5 35.5x8x0.55mm.',
    features: ['4 different size options', '45x12mm / 45x16mm / 45x20mm standard sizes', 'OLFA KB4-F/5 compatible 35.5x8x0.55mm variant', 'Flat edge design for wide surface cutting', 'Sheffield Durham Duplex quality'],
    applications: ['Professional model making', 'Graphic and design work', 'Template and stencil cutting', 'Wide surface scraping'],
    seo: {
      title: 'B145 Multi-Size Hobby Blade | Multi-Size Craft Blade | Alya Blade',
      description: 'B145 multi-size hobby blade. 45×12/16/20mm & OLFA KB4-F/5. Model making, graphics, stencil. Sheffield Durham Duplex. Authorized distributor.',
      keywords: ['B145 multi-size', 'multi-size craft blade', 'OLFA KB4-F/5', 'flat edge blade', 'hobby blade set'],
    },
    benefits: [
      { title: '4 Sizes', description: '12mm, 16mm, 20mm and 35.5mm — a size for every need.', icon: 'Layers' },
      { title: 'OLFA Compatible', description: 'KB4-F/5 variant — full compatibility with OLFA AK-4 series.', icon: 'Link' },
      { title: 'Versatile', description: 'From narrow cuts to wide scraping — one product family.', icon: 'ArrowLeftRight' },
    ],
    longDescription: `<p>The B145 is a versatile flat-edge hobby blade offered in <strong>4 different sizes</strong>. Alongside the 45×12mm, 45×16mm and 45×20mm standard sizes, an OLFA KB4-F/5 compatible 35.5×8×0.55mm variant is also available.</p><p>The different-width flat-edge profiles provide a single product family solution for a wide range of cutting needs — from narrow cuts to wide surface scraping.</p><p><strong>Applications:</strong> Professional model making, graphic work, template cutting, wide surface scraping, print preparation and as a replacement blade for OLFA AK-4 series.</p>`,
    availableSizes: [
      '45×12×0.63mm',
      '45×16×0.63mm',
      '45×20×0.63mm',
      '(OLFA KB4-F/5) 35.5×8×0.55mm',
    ],
  },
  'b146': {
    name: 'B146 - Angled Wide-Profile Blade',
    subtitle: 'Angled Wide Precision Blade 39x11.7x0.63mm',
    description: 'Angled wide-profile precision craft blade. 39x11.7x0.63mm. Angled profile for superior control on curved cuts and mold work. For model making, mold trimming, and industrial hobby applications.',
    shortDescription: 'Angled wide blade. 39x11.7x0.63mm. For curved cuts and mold work.',
    features: ['Angled wide-profile design', '39x11.7x0.63mm dimensions', '0.63mm thickness for durability', 'Ideal for curved cuts', 'Sheffield Durham Duplex quality'],
    applications: ['Curved cutting', 'Mold trimming', 'Industrial hobby applications'],
    seo: {
      title: 'B146 Hobby Blade 39×11.7mm | Angled Craft Blade | Alya Blade',
      description: 'B146 angled-profile hobby blade. 39×11.7×0.63mm. Curved cutting, mold work, model making. Sheffield Durham Duplex. Authorized distributor.',
      keywords: ['B146 hobby blade', 'angled profile blade', 'angled craft blade', 'curved cutting blade'],
    },
    benefits: [
      { title: 'Angled Profile', description: 'Superb control on curved cuts.', icon: 'TrendingUp' },
      { title: 'Wide Body', description: '11.7mm width — strong, stable cutting.', icon: 'Maximize' },
      { title: 'Durable', description: '0.63mm thickness — built for intensive use.', icon: 'Shield' },
    ],
    longDescription: `<p>The B146 is an angled wide-profile hobby blade at 39×11.7×0.63mm. The 0.63mm thickness delivers durable performance, and the angled profile provides superb control on curved cuts.</p><p><strong>Applications:</strong> Curved cutting, mold trimming, large-scale modelling, industrial hobby and prototyping.</p>`,
  },
  'b147': {
    name: 'B147 - Pointed Wide-Body Blade',
    subtitle: 'Pointed Wide-Body Precision Blade 45x10x0.63mm',
    description: 'Pointed wide-body precision craft blade. 45x10x0.63mm. Sharp point creates precise entry while wide body delivers strong stable cuts. For architectural models, sign cutting, and professional graphics.',
    shortDescription: 'Pointed wide-body blade. 45x10x0.63mm. Precise entry, stable cutting.',
    features: ['Pointed tip wide-body design', '45x10x0.63mm dimensions', '0.63mm heavy-duty thickness', 'Large-scale precision cutting', 'Sheffield Durham Duplex quality'],
    applications: ['Architectural model building', 'Sign and display cutting', 'Professional graphics'],
    seo: {
      title: 'B147 Hobby Blade 45×10mm | Pointed Craft Blade | Alya Blade',
      description: 'B147 pointed wide-body hobby blade. 45×10×0.63mm. Architectural models, signs, graphics. Sheffield Durham Duplex. Authorized distributor.',
      keywords: ['B147 hobby blade', 'pointed craft blade', 'architectural model blade', 'sign cutting blade', 'pointed precision blade'],
    },
    benefits: [
      { title: 'Pointed Tip', description: 'Precise entry points — fine detail control.', icon: 'Crosshair' },
      { title: 'Wide Body', description: '45×10mm — strong, stable cutting performance.', icon: 'Maximize' },
      { title: 'Heavy Duty', description: '0.63mm thickness — durable on thick materials.', icon: 'Shield' },
    ],
    longDescription: `<p>The B147 is a pointed wide-body hobby blade at 45×10×0.63mm. The sharp point creates precise entry while the wide body delivers strong, stable cuts.</p><p><strong>Applications:</strong> Architectural model building, sign cutting, professional graphics, advertising boards and large-scale detail cuts.</p>`,
  },
  'b148': {
    name: 'B148 - Curved Profile Blade',
    subtitle: 'Curved Profile Precision Blade 45.4x10.3x0.63mm',
    description: 'Curved profile precision craft blade. 45.4x10.3x0.63mm. Curved cutting line excels at contour and curved cuts. For leathercraft, vinyl cutting, and decorative trimming.',
    shortDescription: 'Curved profile blade. 45.4x10.3x0.63mm. For contour and curved cuts.',
    features: ['Curved profile cutting design', '45.4x10.3x0.63mm dimensions', '0.63mm thickness', 'Excellent for contour and curved cuts', 'Sheffield Durham Duplex quality'],
    applications: ['Leathercraft', 'Vinyl cutting', 'Decorative cutting and trimming'],
    seo: {
      title: 'B148 Curved Profile Hobby Blade 45.4×10.3mm | Curved Craft Blade | Alya Blade',
      description: 'B148 curved profile hobby blade. 45.4×10.3×0.63mm. Leathercraft, vinyl, decorative cutting. Sheffield Durham Duplex. Authorized distributor.',
      keywords: ['B148 hobby blade', 'curved craft blade', 'curved precision blade', 'leather cutting blade', 'contour blade'],
    },
    benefits: [
      { title: 'Curved Profile', description: 'Curved cutting line — outstanding contour tracking.', icon: 'CircleDot' },
      { title: 'Wide Body', description: '45.4×10.3mm — stable, controlled cutting.', icon: 'Maximize' },
      { title: 'Durable', description: '0.63mm thickness — long-lasting performance.', icon: 'Shield' },
    ],
    longDescription: `<p>The B148 is a curved-profile hobby blade at 45.4×10.3×0.63mm. Its curved cutting line delivers outstanding performance on contour and curved cuts.</p><p><strong>Applications:</strong> Leathercraft, paper arts, vinyl cutting, decorative applications and curved detail cuts.</p>`,
  },
  'b149': {
    name: 'B149 - Compact Wide-Profile Blade',
    subtitle: 'Compact Wide Precision Blade 39.4x11x0.63mm',
    description: 'Compact wide-profile precision craft blade. 39.4x11x0.63mm. For precision scraping and leveling. Ideal for 3D print post-processing (support removal), miniature model work, and electronic prototype trimming.',
    shortDescription: 'Compact wide blade. 39.4x11x0.63mm. For scraping, leveling, and 3D print cleanup.',
    features: ['Compact wide-profile design', '39.4x11x0.63mm dimensions', '0.63mm thickness', '3D print post-processing and support removal', 'Sheffield Durham Duplex quality'],
    applications: ['3D print cleanup and support removal', 'Miniature model building', 'Precision scraping and leveling'],
    seo: {
      title: 'B149 Hobby Blade 39.4×11mm | Compact Wide Blade | Alya Blade',
      description: 'B149 compact wide-profile hobby blade. 39.4×11×0.63mm. 3D print cleanup, miniature models, scraping. Sheffield Durham Duplex. Authorized distributor.',
      keywords: ['B149 hobby blade', 'compact wide blade', '3D print cleanup blade', 'miniature model blade', 'craft blade'],
    },
    benefits: [
      { title: 'Compact & Wide', description: '39.4×11mm — wide surface coverage with compact manoeuvrability.', icon: 'Maximize' },
      { title: '3D Print Ready', description: 'Ideal for support removal and post-processing.', icon: 'Printer' },
      { title: 'Durable', description: '0.63mm thickness — heavy-duty durability.', icon: 'Shield' },
    ],
    longDescription: `<p>The B149 is a compact wide-profile hobby blade at 39.4×11×0.63mm. Its wide profile delivers outstanding performance for precision scraping and levelling.</p><p><strong>Applications:</strong> 3D print post-processing (support removal), miniature model building, electronic prototype trimming and precision scraping operations.</p>`,
  },
  'b150': {
    name: 'B150 - Precision Craft Blade #25 Heavy Duty',
    subtitle: '#25 Wide-Body Heavy Duty Blade',
    description: '#25 type wide-body heavy duty craft blade. Much wider than standard #11, designed for cutting thick materials. X-Acto #25 compatible. For balsa wood, thick cardboard, plastic sheet, and composite material cutting.',
    shortDescription: 'Heavy duty #25 blade. Wide body for thick materials. X-Acto #25 compatible.',
    features: ['#25 wide-body blade geometry', 'Heavy duty hobby blade type', 'Wide profile for cutting thick materials', 'X-Acto #25 compatible', 'Sheffield Durham Duplex quality'],
    applications: ['Balsa wood model building', 'Thick cardboard cutting', 'Plastic sheet and composite cutting', 'Industrial prototyping'],
    seo: {
      title: 'B150 Hobby Blade #25 Heavy Duty | Heavy Duty Craft Blade | Alya Blade',
      description: 'B150 #25 heavy duty hobby blade. Wide body. Balsa wood, plastic, cardboard, composite. X-Acto compatible. Sheffield Durham Duplex. Authorized distributor.',
      keywords: ['#25 hobby blade', 'B150', 'heavy duty craft blade', 'X-Acto #25 compatible', 'balsa wood blade', 'wide body blade'],
    },
    benefits: [
      { title: '#25 Geometry', description: 'Wide body — powerful cuts on thick materials.', icon: 'Maximize' },
      { title: 'X-Acto Compatible', description: '#25 series — universal handle compatibility.', icon: 'Link' },
      { title: 'Heavy Duty', description: 'Designed for thick cardboard, plastic and composites.', icon: 'Shield' },
    ],
    longDescription: `<p>The B150 is a <strong>#25 wide-body</strong> heavy duty hobby blade. With a much wider profile than the standard #11, it is designed for cutting thick materials.</p><p>Compatible with the X-Acto #25 series, this replacement blade is preferred for balsa wood, thick cardboard, plastic sheet and composite material cutting.</p><p><strong>Applications:</strong> Heavy duty hobby cutting, balsa wood and plastic model building, thick cardboard cutting, composite material processing and industrial prototyping.</p>`,
  },
  'b151': {
    name: 'B151 - Pointed Wide-Body Professional Blade',
    subtitle: 'Professional Pointed Wide Blade 45x11x0.63mm',
    description: 'Professional pointed wide-body precision blade. 45x11x0.63mm. Sharp tip for precise entry combined with wide body and 0.63mm thickness for strong controlled cuts. For sign cutting, professional model making, and industrial shaping.',
    shortDescription: 'Professional wide-body blade. 45x11x0.63mm. For sign cutting and industrial shaping.',
    features: ['Pointed tip wide-body design', '45x11x0.63mm dimensions', '0.63mm heavy-duty thickness', 'Large-scale shaping and cutting', 'Sheffield Durham Duplex quality'],
    applications: ['Sign and display cutting', 'Professional model making', 'Industrial cutting and shaping'],
    seo: {
      title: 'B151 Professional Hobby Blade 45×11mm | Professional Craft Blade | Alya Blade',
      description: 'B151 professional hobby blade. 45×11×0.63mm pointed wide-body. Sign cutting, model making, industrial cutting. Sheffield Durham Duplex. Authorized distributor.',
      keywords: ['B151 hobby blade', 'professional craft blade', 'sign cutting blade', 'precision hobby blade'],
    },
    benefits: [
      { title: 'Pointed Tip', description: 'Precise entry — fine detail control.', icon: 'Crosshair' },
      { title: 'Wide Body', description: '45×11mm — strong cutting performance.', icon: 'Maximize' },
      { title: 'Professional', description: '0.63mm thickness — for professional applications.', icon: 'Award' },
    ],
    longDescription: `<p>The B151 is a professional pointed wide-body precision blade at 45×11×0.63mm. The sharp tip creates precise entry points while the wide body and 0.63mm thickness deliver strong, controlled cuts.</p><p><strong>Applications:</strong> Professional model making, sign cutting, advertising boards, industrial cutting and large-scale shaping operations.</p>`,
  },

  // KB Series — OLFA Compatible Art Knife Blades
  'kb': {
    name: 'KB - Art Knife Blade (OLFA KB Compatible)',
    subtitle: 'OLFA KB Compatible Art Knife Blade 40.5x6x0.45mm',
    description: 'OLFA KB compatible precision art knife blade. 40.5x6x0.45mm, 1 notch for easy mounting. Ultra-thin 0.45mm for paper arts, calligraphy, stencil cutting, scrapbooking, and ultra-fine detail work. Fits OLFA AK series art knives.',
    shortDescription: 'OLFA KB art knife blade. 40.5x6x0.45mm, 1 notch. For paper arts and stencil cutting.',
    features: ['OLFA KB compatible replacement blade', '40.5x6x0.45mm dimensions', '1 notch for easy and secure blade change', '0.45mm ultra-thin for precision cutting', 'Sheffield Durham Duplex quality'],
    applications: ['Paper arts and scrapbooking', 'Calligraphy', 'Stencil and template cutting', 'Ultra-fine detail work'],
    seo: {
      title: 'KB Art Knife Blade OLFA KB Compatible | Art Knife Blade | Alya Blade',
      description: 'KB precision art knife blade. OLFA KB compatible 40.5×6×0.45mm, 1 notch. Paper arts, calligraphy, stencil. Sheffield Durham Duplex. Authorized distributor.',
      keywords: ['OLFA KB blade', 'art knife blade', 'KB hobby blade', 'paper arts blade', 'calligraphy blade'],
    },
    benefits: [
      { title: 'OLFA Compatible', description: 'OLFA AK series — world-standard art knife compatibility.', icon: 'Link' },
      { title: 'Ultra Thin', description: '0.45mm thickness — ultra-precision paper cutting.', icon: 'Minimize' },
      { title: 'Easy Change', description: '1 notch mount — fast and secure blade change.', icon: 'Zap' },
    ],
    longDescription: `<p>The KB is an <strong>OLFA KB compatible</strong> precision art knife blade. At 40.5×6×0.45mm, it is fully compatible with OLFA AK series art knives. The 1-notch mount system provides easy and secure blade changes.</p><p>The ultra-thin 0.45mm thickness delivers outstanding cutting performance for paper arts, calligraphy, stencil and fine detail work.</p><p><strong>Applications:</strong> Paper arts, fine model cutting, stencil, calligraphy, scrapbooking, vinyl decal and precision detail work.</p>`,
  },
  'kb-5': {
    name: 'KB-5 - Ultra Compact Art Knife Blade',
    subtitle: 'Ultra Compact Art Blade 25x4x0.38mm',
    description: 'Ultra compact art knife blade. 25x4x0.38mm — the smallest and thinnest blade in the entire hobby series. 0.38mm ultra-thin. Compatible with OLFA AK series art knives. For paper arts, calligraphy, stamp collecting, and ultra-precision miniature work.',
    shortDescription: 'Ultra compact blade. 25x4x0.38mm — smallest in the series. 0.38mm ultra-thin.',
    features: ['Ultra-thin and ultra-compact design', '25x4x0.38mm — the smallest hobby blade in the range', '0.38mm thickness for ultra-precision cutting', 'Compatible with OLFA AK series art knives', 'Sheffield Durham Duplex quality'],
    applications: ['Paper arts', 'Calligraphy', 'Miniature and precision work'],
    seo: {
      title: 'KB-5 Ultra Compact Hobby Blade 25×4mm | Art Knife Blade | Alya Blade',
      description: 'KB-5 ultra compact hobby blade. 25×4×0.38mm, the thinnest model. Paper arts, calligraphy, miniatures. Sheffield Durham Duplex. Authorized distributor.',
      keywords: ['KB-5 hobby blade', 'ultra compact blade', 'paper arts blade', 'art knife blade', 'mini craft blade'],
    },
    benefits: [
      { title: 'Smallest', description: '25×4mm — the most compact model in the range.', icon: 'Minimize' },
      { title: 'Thinnest', description: '0.38mm — ultra-precision fine cuts.', icon: 'ArrowDown' },
      { title: 'OLFA Compatible', description: 'AK series — universal art knife compatibility.', icon: 'Link' },
    ],
    longDescription: `<p>The KB-5 is the <strong>smallest and thinnest</strong> model in the hobby blade range. At 25×4×0.38mm, it offers an ultra-compact design with 0.38mm — the thinnest blade in the series.</p><p>Fully compatible with OLFA AK series art knives, the KB-5 is preferred for fine paper work, calligraphy and ultra-precision detail tasks.</p><p><strong>Applications:</strong> Paper arts, calligraphy, stamp collecting, miniature work, fine vinyl cutting and ultra-precision detail tasks.</p>`,
  },
  'kb4-r5': {
    name: 'KB4-R/5 - Curved Art Knife Blade (OLFA Compatible)',
    subtitle: 'OLFA KB4-R/5 Curved Art Blade 38.5x6x0.45mm',
    description: 'OLFA KB4-R/5 compatible curved profile art knife blade. 38.5x6x0.45mm. Curved profile for superior control on curved cuts and stencil work. Compatible with OLFA AK-4 series art knives.',
    shortDescription: 'Curved art knife blade. OLFA KB4-R/5 compatible, 38.5x6x0.45mm.',
    features: ['OLFA KB4-R/5 compatible replacement blade', '38.5x6x0.45mm dimensions', 'Curved cutting profile for arcs and contours', '0.45mm thickness for precision', 'Sheffield Durham Duplex quality'],
    applications: ['Curved and contour cutting', 'Stencil and template work', 'Professional art applications'],
    seo: {
      title: 'KB4-R/5 Curved Art Knife Blade OLFA Compatible | Curved Art Blade | Alya Blade',
      description: 'KB4-R/5 OLFA compatible hobby blade. 38.5×6×0.45mm curved profile. Stencil, art, precision cutting. Sheffield Durham Duplex. Authorized distributor.',
      keywords: ['KB4-R/5 blade', 'OLFA KB4-R compatible', 'curved art knife', 'stencil blade', 'curved art blade'],
    },
    benefits: [
      { title: 'OLFA KB4-R Compatible', description: 'AK-4 series — professional art knife compatibility.', icon: 'Link' },
      { title: 'Curved Profile', description: 'Superior control on curved cuts.', icon: 'CircleDot' },
      { title: 'Precision', description: '0.45mm thickness — clean cutting line.', icon: 'Target' },
    ],
    longDescription: `<p>The KB4-R/5 is an <strong>OLFA KB4-R/5 compatible</strong> curved-profile art knife blade. At 38.5×6×0.45mm, it is fully compatible with OLFA AK-4 series art knives.</p><p>The curved profile provides superior control on curved cuts and stencil work. The 0.45mm thickness ensures a precise, clean cutting line.</p><p><strong>Applications:</strong> Precision curved cutting, stencil work, professional art applications, paper arts and hobby projects.</p>`,
  },
  'kb4-ns3': {
    name: 'KB4-NS/3 - Narrow Serrated Art Knife Blade',
    subtitle: 'OLFA KB4-NS/3 Narrow Serrated Blade 64x11/6x0.35mm',
    description: 'OLFA KB4-NS/3 compatible narrow serrated (saw-tooth) art knife blade. 64x11/6x0.35mm. Serrated edge cuts foam, sponge, polystyrene (styrofoam), and soft materials without tearing. 0.35mm ultra-thin. OLFA AK-4 series compatible.',
    shortDescription: 'Narrow serrated blade. OLFA KB4-NS/3, 64x11/6x0.35mm. For foam and soft materials.',
    features: ['Narrow serrated (saw-tooth) edge design', '64x11/6x0.35mm dimensions', '0.35mm ultra-thin thickness', 'Cuts foam and soft materials without tearing', 'Sheffield Durham Duplex quality'],
    applications: ['Foam cutting', 'Polystyrene (styrofoam) model making', 'Sponge and soft material cutting'],
    seo: {
      title: 'KB4-NS/3 Serrated Hobby Blade OLFA Compatible | Serrated Art Blade | Alya Blade',
      description: 'KB4-NS/3 narrow serrated hobby blade. OLFA KB4-NS/3, 64×11/6×0.35mm. Foam, sponge, polystyrene cutting. Sheffield Durham Duplex. Authorized distributor.',
      keywords: ['KB4-NS/3 serrated blade', 'OLFA serrated blade', 'foam cutting blade', 'narrow serrated', 'sponge blade'],
    },
    benefits: [
      { title: 'Narrow Serrated', description: 'Narrow serrated edge — cuts soft materials without tearing.', icon: 'BarChart3' },
      { title: 'Ultra Thin', description: '0.35mm — the thinnest serrated blade in the series.', icon: 'Minimize' },
      { title: 'OLFA AK-4', description: 'AK-4 series compatible — professional quality.', icon: 'Link' },
    ],
    longDescription: `<p>The KB4-NS/3 is an <strong>OLFA KB4-NS/3 compatible narrow serrated (saw-tooth)</strong> art knife blade. At 64×11/6×0.35mm, it is one of the longest models in the series.</p><p>The serrated edge profile delivers far superior performance to straight-edged blades when cutting foam, sponge, polystyrene (styrofoam) and soft materials. The serrated structure cuts without tearing.</p><p><strong>Applications:</strong> Foam cutting, sponge shaping, polystyrene model making, soft material detail cutting and as a replacement blade for OLFA AK-4 series.</p>`,
  },
  'kb4-ws3': {
    name: 'KB4-WS/3 - Wide Serrated Art Knife Blade',
    subtitle: 'OLFA KB4-WS/3 Wide Serrated Blade 66.5x11/6x0.35mm',
    description: 'OLFA KB4-WS/3 compatible wide serrated (saw-tooth) art knife blade. 66.5x11/6x0.35mm — the longest blade in the series. Wide serration for cutting thick foam, balsa wood, and dense soft materials without tearing. OLFA AK-4 series compatible.',
    shortDescription: 'Wide serrated blade. OLFA KB4-WS/3, 66.5x11/6x0.35mm. For thick foam and balsa wood.',
    features: ['Wide serrated (saw-tooth) edge design', '66.5x11/6x0.35mm — longest in the series', '0.35mm ultra-thin thickness', 'Cuts thick foam and balsa wood without tearing', 'Sheffield Durham Duplex quality'],
    applications: ['Thick foam cutting', 'Balsa wood model building', 'Architectural foam models'],
    seo: {
      title: 'KB4-WS/3 Wide Serrated Hobby Blade OLFA Compatible | Wide Serrated Blade | Alya Blade',
      description: 'KB4-WS/3 wide serrated hobby blade. OLFA KB4-WS/3, 66.5×11/6×0.35mm. Thick foam, balsa wood, polystyrene. Sheffield Durham Duplex. Authorized distributor.',
      keywords: ['KB4-WS/3 wide serrated', 'OLFA wide serrated', 'thick foam blade', 'balsa wood blade', 'wide serrated blade'],
    },
    benefits: [
      { title: 'Wide Serrated', description: 'Wide serrated edge — cuts thick soft materials without tearing.', icon: 'BarChart3' },
      { title: 'Longest', description: '66.5mm — the longest serrated blade in the series.', icon: 'Maximize' },
      { title: 'OLFA AK-4', description: 'AK-4 series compatible — professional quality.', icon: 'Link' },
    ],
    longDescription: `<p>The KB4-WS/3 is an <strong>OLFA KB4-WS/3 compatible wide serrated (saw-tooth)</strong> art knife blade. At 66.5×11/6×0.35mm, it is the longest blade in the series.</p><p>The wide serration delivers superior performance over the KB4-NS/3 narrow serrated version when cutting thick foam and balsa wood. The wider tooth spacing enables clean cuts through thick soft materials without tearing.</p><p><strong>Applications:</strong> Thick foam cutting, balsa wood model building, sponge shaping, polystyrene architectural models and as a replacement blade for OLFA AK-4 series.</p>`,
  },

  // --- FIBERGLASS CHOPPER BLADES ---
  'b581': {
    name: 'B581 – Fiberglass Chopper Blade – Tungsten Carbide',
    subtitle: 'Tungsten Carbide Tipped — 120×7.94×0.71mm',
    shortDescription: 'Tungsten carbide tipped B581 fiberglass chopper blade, 120×7.94×0.71mm. Double-beveled 30° edge for glass fiber roving lines with superior wear resistance.',
    description: 'B581 tungsten carbide tipped fiberglass chopper blade for glass fiber roving cutting lines. 120×7.94×0.71mm, 30° double bevel, HRC 68-72 hardness. Available in 100mm, 108.8mm and 120mm lengths.',
    features: [
      'Tungsten carbide tipped special steel',
      'HRC 68-72 hardness rating',
      '30° double bevel edge geometry',
      'Designed specifically for fiberglass cutting lines',
      '±0.02mm dimensional accuracy',
      'Packed in bundles of 25 blades',
      '3 length options: 100mm, 108.8mm, 120mm',
    ],
    applications: [
      'Fiberglass roving cutting',
      'GRP/FRP production lines',
      'Composite material cutting',
      'Automotive composite manufacturing',
      'Wind turbine blade production',
    ],
    benefits: [
      { title: 'Superior Wear Resistance', description: 'Tungsten carbide alloy delivers 5-8x longer life than standard steel blades', icon: 'Shield' },
      { title: 'Precision Cutting', description: '30° double bevel ensures uniform fiber length and low dust generation', icon: 'Target' },
      { title: 'Lower Total Cost', description: 'Extended blade life and fewer changeovers reduce production costs', icon: 'TrendingDown' },
      { title: 'Quick Changeover', description: 'Packed in bundles of 25 for fast bulk blade replacement', icon: 'RefreshCw' },
    ],
    availableSizes: [
      '100 × 7.94 × 0.71 mm',
      '108.8 × 7.94 × 0.71 mm',
      '120 × 7.94 × 0.71 mm',
    ],
    longDescription: `<p>The B581 series fiberglass chopper blades are manufactured from <strong>tungsten carbide tipped</strong> special steel, engineered for fiberglass roving cutting lines. With an HRC 68-72 hardness rating, they deliver exceptional resistance against abrasive glass fiber strands.</p><h3>Technical Details</h3><ul><li><strong>30° double bevel:</strong> Even wear distribution and extended service life</li><li><strong>Tungsten carbide alloy:</strong> 5-8x longer cutting performance compared to standard steel</li><li><strong>Precision tolerance:</strong> ±0.02mm dimensional accuracy for perfect machine fit</li><li><strong>Bundles of 25:</strong> Easy inventory management and quick bulk changeover</li></ul><h3>Applications</h3><p>Used in GRP (Glass Reinforced Plastic) and FRP (Fiber Reinforced Plastic) production lines, fiberglass roving cutting machines (chopper guns, roving cutters). Essential for composite material applications including automotive parts, boat hulls, wind turbine blades, pipe and tank manufacturing.</p><h3>Available Sizes</h3><p>The B581 series is available in three lengths: 100mm, 108.8mm and 120mm. Width (7.94mm) and thickness (0.71mm) are consistent across all variants.</p>`,
    seo: {
      title: 'B581 Fiberglass Chopper Blade 120mm | Tungsten Carbide | Alya Blade',
      description: 'B581 tungsten carbide tipped fiberglass chopper blade, 120×7.94×0.71mm. Double-beveled 30° edge for glass fiber roving lines. Superior wear resistance for continuous GRP/FRP production.',
      keywords: ['fiberglass chopper blade', 'glass fiber cutting blade', 'tungsten carbide chopper blade', 'GRP cutting blade', 'roving cutter blade', 'B581', 'fiberglass blade', 'FRP blade', 'chopper gun blade'],
    },
  },
  'b657': {
    name: 'B657 – Circular Rotary Blades – OLFA Compatible',
    subtitle: 'OLFA Compatible — 18mm / 28mm / 45mm / 60mm',
    shortDescription: 'OLFA compatible B657 series circular rotary blades. Available in 18mm, 28mm, 45mm and 60mm diameters with stainless and carbon steel options. High-quality rotary blades for textile, leather, paper and craft cutting.',
    description: 'OLFA compatible B657 circular rotary blades in 18mm, 28mm, 45mm and 60mm diameters. Stainless and high carbon steel options. Professional rotary blades for fabric, leather, paper and hobby applications.',
    features: [
      'Fully compatible with OLFA rotary cutters',
      'Stainless steel models (RB18, PRB18) — corrosion resistant',
      'High carbon steel models (RB28, RB45, RB60) — superior sharpness',
      '18mm, 28mm, 45mm and 60mm diameter options',
      'Hex hole and 3-notch mounting options',
      'PRB18: 8 perforation channel special cutting model',
      'HRC 58-62 hardness rating',
    ],
    applications: [
      'Textile and fabric cutting',
      'Leather processing',
      'Paper and cardboard cutting',
      'Hobby and craft applications',
      'Patchwork and quilting',
    ],
    benefits: [
      { title: 'Full OLFA Compatibility', description: 'Direct fit to OLFA rotary cutter handles with no adapter required', icon: 'CheckCircle' },
      { title: 'Wide Diameter Range', description: 'Four different sizes from 18mm detail cutting to 60mm large-scale cuts', icon: 'Maximize' },
      { title: 'Material Options', description: 'Stainless steel and high carbon steel choices to suit every application', icon: 'Layers' },
      { title: 'Perforation Cutting Option', description: 'PRB18 model with 8 perforation channels creates perforated cut lines', icon: 'MoreHorizontal' },
    ],
    availableSizes: [
      '18 × 7/5 × 0.30 mm (RB18)',
      '28 × 7/5 × 0.30 mm (RB28)',
      '45 × 10.2/8.3 × 0.30 mm (RB45)',
      '60 × 13/10 × 0.35 mm (RB60)',
      '18 × 7/5 × 0.30 mm (PRB18 Perforating)',
    ],
    longDescription: `<p>The B657 series circular rotary blades are manufactured to be <strong>fully compatible with OLFA rotary cutters</strong>, delivering professional-grade cutting performance. Available in both high carbon steel and stainless steel options to suit different cutting requirements.</p><h3>Model Options</h3><ul><li><strong>RB18-2 (18mm, Stainless):</strong> Hex hole mount, ideal for precision detail cutting. Made from stainless steel.</li><li><strong>RB28-10 (28mm):</strong> 3-notch mounting system, suitable for medium-sized cutting tasks.</li><li><strong>RB45-10 (45mm):</strong> 3-notch mount, the most commonly used rotary blade size. Standard choice for fabric and leather cutting.</li><li><strong>RB60-1 (60mm):</strong> 3-notch mount, designed for large diameter cuts and thick materials.</li><li><strong>PRB18-2 (18mm, Perforating, Stainless):</strong> 8 perforation channels for creating perforated cut lines. Made from stainless steel.</li></ul><h3>Applications</h3><p>Widely used in textile and garment workshops for fabric cutting, precision cutting in the leather industry, straight line cutting on paper and cardboard, and hobby applications such as patchwork, quilting and scrapbooking.</p><h3>Technical Specifications</h3><p>The RB18 and PRB18 models are made from stainless steel, providing moisture and corrosion resistance. The RB28, RB45 and RB60 models are made from high carbon steel, delivering superior cutting performance. All models fit directly onto OLFA rotary cutter handles.</p>`,
    seo: {
      title: 'B657 Circular Rotary Blades OLFA Compatible | 18-28-45-60mm | Alya Blade',
      description: 'OLFA compatible B657 circular rotary blades. 18mm, 28mm, 45mm, 60mm diameters in stainless and carbon steel. Professional rotary blades for textile, leather and paper cutting.',
      keywords: ['circular rotary blade', 'OLFA compatible blade', 'rotary cutter blade', 'fabric cutting blade', 'leather cutting blade', 'RB45', 'RB28', 'RB60', 'RB18', 'PRB18', 'B657', 'OLFA blade'],
    },
  },
  '2cs1': {
    name: '2CS1 – Pentagon Blade – Tungsten Carbide & Ceramic',
    subtitle: 'Solid Tungsten & Ceramic — 66/63/40×0.54mm',
    shortDescription: 'Solid tungsten carbide and ceramic 2CS1 pentagon blades, 66/63/40×0.54mm. Special geometry industrial cutting blade for sack, big bag and PP woven fabric production lines.',
    description: 'Solid tungsten carbide and ceramic 2CS1 pentagon blades for sack, FIBC big bag and PP woven fabric cutting lines. 66/63/40×0.54mm with 2×4mm mounting holes.',
    features: [
      'Pentagon special geometry cutting blade',
      'Solid tungsten carbide — HRC 90+ ultra hardness',
      'Solid white ceramic (Zirconium Oxide) — HV 1600+',
      'Solid grey ceramic (Silicon Carbide) — HV 1600+',
      '66/63/40×0.54mm dimensions, 2×4mm mounting holes',
      'Specially designed for sack and big bag (FIBC) production lines',
      'Optimum performance in PP woven fabric cutting',
    ],
    applications: [
      'Sack production cutting lines',
      'FIBC big bag production machines',
      'PP woven fabric cutting',
      'Packaging industry industrial cutting',
      'Geotextile and agricultural cover cutting',
    ],
    benefits: [
      { title: 'Ultra-High Wear Resistance', description: 'Solid tungsten carbide with HRC 90+ hardness delivers up to 20x longer life than standard steel', icon: 'Shield' },
      { title: 'Ceramic Blade Option', description: 'Chemically inert ceramic structure with corrosion resistance and food contact compatibility', icon: 'Zap' },
      { title: 'Pentagon Geometry Advantage', description: '5-edge special pentagon design with optimised cutting angle and extended service life', icon: 'Pentagon' },
      { title: 'Lower Production Cost', description: 'Extended blade life means less downtime and lower cutting cost per unit', icon: 'TrendingDown' },
    ],
    availableSizes: [
      '66/63/40 × 0.54 mm (Solid Tungsten Carbide)',
      '66/63/40 × 0.54 mm (Solid Ceramic – White)',
      '66/63/40 × 0.54 mm (Solid Ceramic – Grey)',
    ],
    longDescription: `<p>The 2CS1 series pentagon blades are special geometry industrial cutting blades manufactured in <strong>solid tungsten carbide</strong> and <strong>solid ceramic</strong> material options. With 66/63/40×0.54mm dimensions and 2×4mm mounting holes, they are designed for direct compatibility with sack and big bag production machines.</p><h3>Material Options</h3><ul><li><strong>Solid Tungsten Carbide:</strong> HRC 90+ hardness rating with the highest wear resistance. Delivers extended life on intensive production lines. Preferred for cutting hard and abrasive materials.</li><li><strong>Solid Ceramic – White (Zirconium Oxide):</strong> HV 1600+ micro-hardness with a chemically inert structure. Ideal for food-contact approved applications and environments requiring corrosion resistance.</li><li><strong>Solid Ceramic – Grey (Silicon Carbide):</strong> HV 1600+ micro-hardness with high thermal resistance. Superior performance in heat-exposed cutting applications.</li></ul><h3>Applications</h3><p>Used in PP (polypropylene) woven sack production lines, FIBC big bag production machines, geotextile and agricultural cover cutting lines. Pentagon geometry optimises the cutting angle to achieve a clean, uniform cut line.</p><h3>Technical Details</h3><p>The 2×4mm mounting holes provide a secure, vibration-free connection to the machine. The 0.54mm thickness creates a thin, precise cut line, while the pentagon geometry allows utilisation of all 5 cutting edges.</p>`,
    seo: {
      title: '2CS1 Pentagon Blade 66mm | Tungsten Carbide & Ceramic | Alya Blade',
      description: 'Solid tungsten carbide and ceramic 2CS1 pentagon blade, 66/63/40×0.54mm. Ultra-durable industrial cutting blade for sack, big bag and PP woven fabric production lines.',
      keywords: ['pentagon blade', 'tungsten carbide blade', 'ceramic blade', 'sack cutting blade', 'big bag blade', 'FIBC blade', 'PP woven blade', '2CS1', 'pentagon cutting'],
    },
  },
  'b084075': {
    name: 'B084.075 – Lamella (Leaf) Blade – Ceramic & Tungsten Carbide',
    subtitle: 'Solid Ceramic & Tungsten Carbide — 84/80×7.5×1.0mm',
    shortDescription: 'Solid ceramic and solid tungsten carbide B084.075 lamella (leaf) blade, 84/80×7.5×1.0mm. Ultra-long-life industrial cutting blade for film, foil, label, packaging and paper converting lines.',
    description: 'Solid ceramic and tungsten carbide B084.075 lamella blade for film, foil, label and paper slitting lines. 84/80×7.5×1.0mm.',
    features: [
      'Lamella (leaf) form special cutting geometry',
      'Solid white ceramic (ZrO₂) — HV 1200+, non-stick surface',
      'Solid tungsten carbide — HRC 90+, ultra wear resistance',
      '84/80×7.5×1.0mm dimensions, compact slitter compatible',
      'Designed for film, foil, label and paper cutting lines',
      'Chemically inert — food packaging compatible (ceramic)',
      'Vibration-free and burr-free cutting performance',
    ],
    applications: [
      'Film and foil slitting lines',
      'Label and tape cutting machines',
      'Paper and cardboard converting lines',
      'Packaging machine cutting units',
      'Aluminium foil cutting lines',
    ],
    benefits: [
      { title: 'Non-Stick Ceramic Surface', description: 'Zirconium oxide ceramic structure provides clean cuts on adhesive films and labels without residue', icon: 'Sparkles' },
      { title: 'Ultra-Long Cutting Life', description: 'Tungsten carbide HRC 90+ hardness delivers 15-20x longer life than standard steel blades', icon: 'Shield' },
      { title: 'Burr-Free Precision Cutting', description: 'Lamella geometry and 1.0mm thickness provide burr-free cut lines on films and foils', icon: 'Target' },
      { title: 'Low Maintenance Cost', description: 'Extended blade life means fewer changeovers, less downtime and lower total cost', icon: 'TrendingDown' },
    ],
    availableSizes: [
      '84/80 × 7.5 × 1.0 mm (Solid Ceramic – White)',
      '84/80 × 7.5 × 1.0 mm (Solid Tungsten Carbide)',
    ],
    longDescription: `<p>The B084.075 series lamella (leaf) blades are special geometry industrial blades manufactured in <strong>solid ceramic</strong> and <strong>solid tungsten carbide</strong> material options. With 84/80×7.5×1.0mm dimensions, they are designed for compatibility with slitter and cutting machines.</p><h3>Material Options</h3><ul><li><strong>Solid Ceramic – White (Zirconium Oxide / ZrO₂):</strong> HV 1200+ micro-hardness with a chemically inert, non-stick structure. Leaves no adhesive residue on film and foil cuts. Safe for food packaging cutting lines.</li><li><strong>Solid Tungsten Carbide:</strong> HRC 90+ hardness delivering the highest wear resistance. Superior performance on abrasive materials and high-speed production lines.</li></ul><h3>Applications</h3><p>Widely used in PE/PP/PET/PVC film and foil slitting lines, label and tape converting machines, paper and cardboard converting lines, cutting units of packaging machines, aluminium foil slitting lines and lamination machines.</p><h3>Technical Details</h3><p>The lamella (leaf) form features geometry optimised for thin, precision cuts. The 1.0mm thickness ensures vibration-free and burr-free cutting. 84mm total length with 80mm effective cutting length for compact slitter unit compatibility.</p>`,
    seo: {
      title: 'B084.075 Lamella Leaf Blade 84mm | Ceramic & Tungsten | Film Slitting | Alya Blade',
      description: 'Solid ceramic and tungsten carbide B084.075 lamella (leaf) blade, 84/80×7.5×1.0mm. Ultra-long-life industrial cutting blade for film, foil, label and paper slitting lines.',
      keywords: ['lamella blade', 'leaf blade', 'film cutting blade', 'foil cutting blade', 'label cutting blade', 'slitter blade', 'ceramic blade', 'tungsten blade', 'B084.075'],
    },
  },

  // =============================================================================
  // SANAYİ JİLETLERİ - TRAPEZ BIÇAKLAR
  // =============================================================================
  'b207': {
    name: 'B207 - Heavy Duty Trapezoid Blade',
    subtitle: 'Heavy Duty Trapezoid Blade 0.63mm',
    description: 'Professional heavy duty trapezoid blade, 0.63mm thickness. Carbon steel, stainless steel and TiN coated options. Ideal for warehouse, flooring, construction and packaging. Sheffield quality, HRC 58-62.',
    shortDescription: 'Professional 0.63mm heavy duty trapezoid blade with 10 variants: carbon, stainless and TiN coated. 2-3 notch, multiple hole configurations.',
    features: ['High carbon steel (SK5) body', '0.63mm standard / 1.00mm stainless thickness', '5 different lengths from 50-100mm', 'TiN (Titanium Nitride) coating option', 'Stainless steel alternative', 'Rounded tip safety option', 'Single-side sharpening option', '2 or 3 notch configuration', '0-5 hole pattern alternatives', 'Standard trapezoid form compatible'],
    applications: ['Warehouse & logistics', 'Flooring installation', 'Construction & renovation', 'Packaging industry', 'Leather & textile', 'Automotive'],
    seo: {
      title: 'B207 Heavy Duty Trapezoid Blade 0.63mm | Utility Blade | Alya Blade',
      description: 'B207 heavy duty trapezoid blade, 0.63mm, Sheffield steel. 10 variants: carbon, stainless, TiN coated. Warehouse, flooring, construction, packaging cutting. Authorized distributor.',
      keywords: ['trapezoid blade', 'B207', 'heavy duty utility blade', 'thick trapezoid blade', '0.63mm trapezoid', 'TiN coated trapezoid', 'stainless trapezoid', 'sheffield utility blade', 'industrial trapezoid blade', 'wholesale trapezoid blades'],
    },
    benefits: [
      { title: 'Heavy Duty Durability', description: '0.63mm thick profile provides superior resistance to bending and breaking in heavy duty applications.', icon: 'Shield' },
      { title: '10 Different Variants', description: 'Custom solutions for every application with different size, notch, hole and coating options.', icon: 'Settings' },
      { title: 'Sheffield Quality', description: 'High carbon steel, heat treated to HRC 58-62 hardness in Sheffield, England.', icon: 'Award' },
      { title: 'Extended Lifespan', description: 'TiN (Titanium Nitride) coated version lasts 3 times longer than standard carbon.', icon: 'Clock' },
    ],
    longDescription: `<p>B207 series heavy duty trapezoid blades are professional cutting blades designed for industrial use in 0.63mm (standard) and 1.00mm (stainless) thicknesses.</p><p>Manufactured from high carbon steel, these blades are produced to Sheffield quality standards. With different length options from 50mm to 100mm, 2 or 3 notch configurations and various hole patterns, they offer a wide range of applications.</p><p><strong>Material options:</strong> Carbon steel (standard), stainless steel (corrosion resistant), TiN coated (extended life). Rounded tip and single-side sharpening alternatives are available for workplace safety.</p><p>Used as replacement tips in utility knives, safety cutters, flooring tools and professional hand tools. Delivers superior performance in cutting cardboard, carpet, linoleum, PVC, packaging film, leather and textiles.</p>`,
    availableSizes: [
      '60×19×0.63mm — 2 Notches, 4 Holes',
      '60×19×0.63mm — 2 Notches, 4 Holes, TiN Coated',
      '53×19×0.63mm — 3 Notches, 5 Holes',
      '51×19×0.63mm — 3 Notches, 5 Holes, TiN Coated',
      '60×19×0.63mm — 2 Notches (no holes)',
      '60×19×1.00mm — 2 Notches, Stainless Steel',
      '58×19×0.63mm — 3 Notches, 3 Holes',
      '60×19×0.63mm — 2 Notches, 1 Hole',
      '60×19×0.63mm — 2 Notches, Single-Side Grind',
      '53×19×0.63mm — 3 Notches, 5 Holes, Rounded Tip',
    ],
  },
  'b206': {
    name: 'B206 - Thin Trapezoid Blade',
    subtitle: 'Thin Trapezoid Blade 0.43mm',
    description: 'Precision thin trapezoid blade, 0.43mm thickness. For paper, packaging, wallpaper and light material cutting. Single-side sharpening for glass scraping. Sheffield quality.',
    shortDescription: 'Precision 0.43mm thin trapezoid blade for light cutting applications. Carbon steel, single-side sharpening and holed alternatives.',
    features: ['High carbon steel', '0.43mm thin profile', '50mm and 59mm length options', '2 notch standard configuration', 'Single-side sharpening option', '2×6.4mm holed variant', 'Standard trapezoid form compatible'],
    applications: ['Paper & packaging', 'Wallpaper installation', 'Office & warehouse', 'Glass & surface scraping'],
    seo: {
      title: 'B206 Thin Trapezoid Blade 0.43mm | Thin Utility Blade | Alya Blade',
      description: 'B206 thin trapezoid blade, 0.43mm, Sheffield carbon steel, HRC 58-62. Paper, packaging, wallpaper, glass scraping. Single-side sharpening. Authorized distributor.',
      keywords: ['thin trapezoid blade', 'B206', 'thin utility blade', '0.43mm trapezoid', 'precision utility blade', 'paper cutting blade', 'wallpaper blade'],
    },
    benefits: [
      { title: 'Precision Cutting', description: '0.43mm thin profile delivers clean cuts with minimal pressure on the material.', icon: 'Target' },
      { title: 'Light & Flexible', description: 'Thin construction cuts through flexible materials without tearing.', icon: 'Feather' },
      { title: 'Economical Use', description: 'Longer lifespan than heavy duty blades in light cutting applications.', icon: 'TrendingDown' },
    ],
    longDescription: `<p>B206 series thin trapezoid blades are designed for applications requiring precision cutting at 0.43mm thickness.</p><p>Manufactured from high carbon content steel, these thin profile blades are preferred especially for paper, thin film, packaging material, wallpaper and light plastic cutting.</p><p>Compatible with various hand tools through different hole and notch configurations. The single-side sharpening option is ideal for glass and delicate surface scraping operations.</p><p><strong>Trapezoid blades</strong> can be used for machine cutting on their own, as well as replacement tips in hand knives.</p>`,
    availableSizes: [
      '50×19×0.43mm — Carbon, 2 Notches',
      '50×19×0.43mm — 2 Notches, Single-Side Grind',
      '59×19×0.43mm — 2×6.4mm Holes',
    ],
  },
  'b082': {
    name: 'B082 - Serrated Edge Trapezoid Blade',
    subtitle: 'Serrated Edge Trapezoid Blade',
    description: 'Serrated edge trapezoid blade for fibrous and slippery materials. 82×25×1.0mm large body with single-side serration. For rope, fiberglass, Kevlar cutting. Sheffield quality.',
    shortDescription: 'Serrated edge trapezoid blade. 82×25×1.0mm large body, 2 holes. Superior grip on fibrous and slippery materials.',
    features: ['Single-side serrated edge', '82×25×1.0mm wide and thick body', '2 mounting holes', 'Superior performance on fibrous materials', 'Sheffield quality carbon steel'],
    applications: ['Rope & cord cutting', 'Fiber composites', 'Textile & synthetic', 'Agriculture & garden'],
    seo: {
      title: 'B082 Serrated Trapezoid Blade | Serrated Utility Blade | Alya Blade',
      description: 'B082 serrated edge trapezoid blade, 82×25×1.0mm, Sheffield steel. Rope, fiberglass, Kevlar cutting. Single-side serration. Authorized distributor.',
      keywords: ['serrated trapezoid blade', 'B082', 'serrated utility blade', 'rope cutting blade', 'fiberglass cutting blade', 'serrated edge blade'],
    },
    benefits: [
      { title: 'Anti-Slip Grip', description: 'Serrated edge provides grip from first contact even on slippery materials.', icon: 'Grip' },
      { title: 'Extra Thick', description: '1.0mm thickness provides bending resistance in heavy duty fibrous materials.', icon: 'Shield' },
      { title: 'Wide Body', description: '82×25mm size offers strong grip and controlled cutting area.', icon: 'Maximize' },
    ],
    longDescription: `<p>The B082 serrated edge trapezoid blade is a specialised product designed for cutting fibrous, fibre-reinforced and slippery materials.</p><p>With its 82×25mm wide body and 1.0mm thickness, it has an extremely durable construction. The single-side serrated edge design prevents the material from slipping on the blade and ensures clean cuts from first contact.</p><p>Preferred for rope, cord, twine, synthetic fibre, fibreglass, carbon fibre, Kevlar and similar demanding materials.</p>`,
    availableSizes: ['82×25×1.0mm — 2 Holes, Single-Side Serrated Edge'],
  },
  'b213': {
    name: 'B213 - Compact Trapezoid Blade',
    subtitle: 'Compact Trapezoid Blade 61×12.5mm',
    description: 'Compact size special trapezoid blade. 61×12.5×0.63mm, 1 hole. For narrow spaces, electronics and precision applications. Sheffield quality.',
    shortDescription: 'Compact trapezoid blade, 61×12.5×0.63mm, 1 hole. Small form factor for narrow spaces and precision applications.',
    features: ['61×12.5×0.63mm compact size', '1-hole mounting design', 'Compatible with special tools', 'Sheffield quality carbon steel'],
    applications: ['Narrow space cutting', 'Electronics', 'Detail work', 'Model making'],
    seo: {
      title: 'B213 Compact Trapezoid Blade 61×12.5mm | Compact Utility Blade | Alya Blade',
      description: 'B213 compact trapezoid blade, 61×12.5×0.63mm. Narrow spaces, electronics, detail cutting. Sheffield steel. Authorized distributor.',
      keywords: ['compact trapezoid', 'B213', 'compact utility blade', 'mini trapezoid blade', '61mm trapezoid', 'small utility blade'],
    },
    benefits: [
      { title: 'Compact Form', description: '61×12.5mm small size for comfortable manoeuvrability in narrow spaces.', icon: 'Minimize' },
      { title: 'Precision Cutting', description: 'Controlled, detailed cutting with the small trapezoid form.', icon: 'Target' },
    ],
    longDescription: `<p>The B213 compact trapezoid blade is a miniaturised version of the standard trapezoid form. Its 61×12.5mm dimensions make it suitable for use in narrow spaces.</p><p>With 0.63mm standard thickness and single-hole mounting design, it is used as a replacement tip in special hand tools and compact cutters. A specialised trapezoid form preferred for electronic component cutting, thin cable stripping and detail work.</p>`,
    availableSizes: ['61×12.5×0.63mm — 1 Hole'],
  },
  'b218': {
    name: 'B218 - Medium Special Trapezoid Blade',
    subtitle: 'Special Size Trapezoid Blade 71×17mm',
    description: 'Special size medium trapezoid blade. 71×17×0.63mm, 1×6mm hole. For non-standard tools and special applications. Sheffield quality.',
    shortDescription: 'Special size trapezoid blade, 71×17×0.63mm, 1×6mm hole. Intermediate size for non-standard tools and industrial machines.',
    features: ['71×17×0.63mm special size', '1×6mm hole mounting', 'Extended cutting line', '17mm narrow width', 'Sheffield quality carbon steel'],
    applications: ['Industrial machines', 'Automation systems', 'Special hand tools'],
    seo: {
      title: 'B218 Special Trapezoid Blade 71×17mm | Medium Utility Blade | Alya Blade',
      description: 'B218 special size trapezoid blade, 71×17×0.63mm, 1×6mm hole. Industrial machine, automation system blade. Sheffield steel. Authorized distributor.',
      keywords: ['special trapezoid blade', 'B218', '71mm trapezoid', 'medium trapezoid blade', 'special size utility blade', 'machine trapezoid blade'],
    },
    benefits: [
      { title: 'Extended Cutting Line', description: '71mm length provides 18% wider cutting area compared to the standard 60mm trapezoid.', icon: 'ArrowRight' },
      { title: 'Special Compatibility', description: '17mm width for perfect fit with specific brand tools.', icon: 'Check' },
    ],
    longDescription: `<p>The B218 medium special trapezoid blade has a 17mm width instead of the standard 19mm, making it an intermediate size product. At 71mm length, it offers a longer cutting line than standard trapezoids.</p><p>Its 1×6mm hole design is suitable for use in special holders and industrial machines. Preferred as a replacement tip in cutting units of specific brand hand knives and automation systems.</p>`,
    availableSizes: ['71×17×0.63mm — 1×6mm Hole'],
  },
  'b214': {
    name: 'B214 - Micro Trapezoid Blade',
    subtitle: 'Micro Trapezoid Blade 27.6×9mm',
    description: 'Ultra compact micro trapezoid blade. 27.6×9×0.43mm, 3×3.5mm holes. For electronics, model making, laboratory and medical device applications. Sheffield quality.',
    shortDescription: 'Ultra compact micro trapezoid blade. 27.6×9×0.43mm, 3×3.5mm holes. The smallest trapezoid form for precision applications.',
    features: ['27.6×9×0.43mm ultra compact size', '3×3.5mm triple hole configuration', '0.43mm thin profile', 'Compatible with miniature holders', 'Sheffield quality carbon steel'],
    applications: ['Electronics assembly', 'Model & hobby', 'Laboratory', 'Medical devices'],
    seo: {
      title: 'B214 Micro Trapezoid Blade 27.6×9mm | Micro Utility Blade | Alya Blade',
      description: 'B214 micro trapezoid blade, 27.6×9×0.43mm, 3×3.5mm holes. Electronics, model making, laboratory, medical. Sheffield steel. Authorized distributor.',
      keywords: ['micro trapezoid', 'B214', 'micro utility blade', 'mini trap blade', '27mm trapezoid', 'precision blade', 'miniature cutting blade'],
    },
    benefits: [
      { title: 'Ultra Compact', description: '27.6×9mm: the smallest trapezoid blade, perfect fit for miniature tools.', icon: 'Minimize' },
      { title: 'Precision Control', description: 'Micron-level cutting control with small size and thin profile.', icon: 'Target' },
    ],
    longDescription: `<p>The B214 micro trapezoid blade is the smallest sized product in the trapezoid family. Its 27.6×9mm dimensions are designed for miniature hand tools, precision cutting devices and specialised industrial applications.</p><p>With 0.43mm thickness and 3×3.5mm triple hole configuration, it mounts to specialised holder systems. Used in electronic assembly, medical device manufacturing, model making and laboratory operations requiring micro cutting.</p>`,
    availableSizes: ['27.6×9×0.43mm — 3×3.5mm Holes'],
  },
  'b207-2': {
    name: 'B207 L - Long Trapezoid Blade',
    subtitle: 'Long Trapezoid Blade',
    description: 'Long version of B207 series. Wider cutting area than standard trapezoid. Preferred for large material and wide surface cutting.',
    shortDescription: 'Long version of B207 heavy duty series. Extended cutting line for large materials and wide surfaces.',
    features: ['B207 series long version', '0.63mm thick profile', 'Wide cutting line', 'Sheffield quality carbon steel'],
    applications: ['Large material cutting', 'Flooring installation', 'Construction'],
    seo: {
      title: 'B207 L Long Trapezoid Blade | Long Utility Blade | Alya Blade',
      description: 'B207 L long trapezoid blade. Extended version of B207, wide cutting line. Sheffield steel, HRC 58-62. Authorized distributor.',
      keywords: ['long trapezoid blade', 'B207 L', 'long utility blade', 'large utility blade', 'wide cutting trapezoid'],
    },
    benefits: [
      { title: 'Wide Cutting Area', description: 'Longer blade length than standard B207, cuts more material in a single pass.', icon: 'Maximize' },
      { title: 'Same Quality', description: 'All quality standards of the B207 series: Sheffield steel, HRC 58-62.', icon: 'Award' },
    ],
    longDescription: `<p>The B207 L (Long) trapezoid blade is the extended version of the standard B207 series. It offers a wider cutting line, enabling more material to be cut in a single pass.</p><p>Especially preferred for large box carton opening, cutting wide packaging films, large surface carpet installation and industrial packaging operations, providing more efficient work compared to the standard size.</p>`,
  },
  'b207-3': {
    name: 'B207 XXL - Extra Long Trapezoid Blade',
    subtitle: 'Extra Long Trapezoid Blade',
    description: 'Extra long (XXL) version of B207 series. Maximum cutting area in the trapezoid family. For industrial-scale cutting applications.',
    shortDescription: 'Extra long (XXL) B207 series. Maximum cutting area, industrial-scale cutting applications.',
    features: ['B207 series extra long (XXL) version', '0.63mm thick profile', 'Maximum cutting line', 'Industrial-grade durability', 'Sheffield quality carbon steel'],
    applications: ['Industrial cutting', 'Large packaging', 'Construction projects'],
    seo: {
      title: 'B207 XXL Extra Long Trapezoid Blade | Extra Long Utility Blade | Alya Blade',
      description: 'B207 XXL extra long trapezoid blade. Maximum cutting line, industrial heavy duty. Sheffield steel, HRC 58-62. Authorized distributor.',
      keywords: ['xxl trapezoid blade', 'B207 XXL', 'extra long trapezoid', 'extra long utility blade', 'industrial trapezoid'],
    },
    benefits: [
      { title: 'Maximum Cutting', description: 'The widest cutting line in the trapezoid family: maximum efficiency in a single pass.', icon: 'Maximize' },
      { title: 'Industrial Durability', description: '0.63mm thickness + long body: reliable in heavy duty applications.', icon: 'Shield' },
    ],
    longDescription: `<p>The B207 XXL extra long trapezoid blade is the largest standard product in the trapezoid family. Designed to provide maximum efficiency in industrial-scale cutting applications.</p><p>Together with 100×19mm trapezoids, it is among the products with the longest cutting line. Suitable for continuous intensive use in large workshops, factories and industrial facilities.</p>`,
  },
  'trapez': {
    name: 'Trapezoid – Custom Design',
    subtitle: 'Custom Design & Large Trapezoid Blade',
    description: 'Custom design trapezoid blades in non-standard sizes and configurations. Including 100×19mm large size. Custom notch, hole and material options per customer requirements.',
    shortDescription: 'Custom design trapezoid blades. 100×19mm large size included. Custom notch, hole and material options.',
    features: ['100×19×0.63mm large size standard product', 'Custom size manufacturing', 'Carbon, stainless, TiN coating options', 'Custom notch and hole configurations', 'OEM and project-based production', 'Sheffield quality standards'],
    applications: ['Custom machines', 'Automation lines', 'Industrial projects', 'OEM manufacturing'],
    seo: {
      title: 'Custom Design Trapezoid Blade 100×19mm | Custom Utility Blade | Alya Blade',
      description: 'Custom design trapezoid blades. 100×19mm large size + custom sizes, materials, coatings. Sheffield steel, HRC 58-62. OEM supply. Authorized distributor.',
      keywords: ['custom trapezoid blade', 'custom utility blade', '100mm trapezoid', 'large utility blade', 'OEM trapezoid blade', 'custom production trapezoid', 'trapezoid blade manufacturer'],
    },
    benefits: [
      { title: 'Full Customisation', description: 'Size, material, coating, notch and hole: fully tailored to your needs.', icon: 'Settings' },
      { title: '100mm Length', description: 'The longest trapezoid in our standard range: 100×19mm large size option.', icon: 'Maximize' },
      { title: 'Sheffield Production', description: 'All custom orders manufactured to the same Sheffield quality standards.', icon: 'Award' },
    ],
    longDescription: `<p>At Alya Blade, we offer custom trapezoid blade solutions beyond standard trapezoid forms. We can produce custom size, notch count, hole pattern, material and coating combinations according to requirements.</p><p>The 100×19mm large size trapezoid blade is the longest trapezoid form in our standard product range. With 3 notch and 1 hole configuration, it is used in industrial machines and automation systems.</p><p><strong>Our custom order process:</strong> Custom trapezoid blade production with size, material, thickness, notch/hole configuration and coating options tailored to your needs. Contact us for minimum order quantities.</p>`,
    availableSizes: [
      '100×19×0.63mm — 3 Notches, 1 Hole (standard large)',
      'Custom sizes — Production by request',
    ],
  },

  // =============================================================================
  // SANAYİ JİLETLERİ - KANCA BIÇAKLAR
  // =============================================================================
  'sper': {
    name: 'Super Hook Blade – Long',
    subtitle: 'Long Super Hook Blade',
    description: 'Super Hook long model. 55×19×0.6mm, 2 notches, 4 holes. Larger body than standard hook blades. For thick packaging, rope and tough film cutting.',
    features: ['55×19×0.6mm — larger body than standard', '4-hole mounting system', 'Optimised for thick material cutting', 'High carbon steel', 'Sheffield Durham Duplex quality'],
    applications: ['Thick packaging', 'Rope & strap cutting', 'Tough film cutting', 'Industrial tape stripping'],
    seo: {
      title: 'Super Hook Blade Long 55×19mm | Long Hook Blade | Alya Blade',
      description: 'Super Hook long model hook blade. 55×19×0.6mm, 4 holes, high carbon steel. Thick packaging, rope, tough film cutting. Authorized distributor.',
      keywords: ['super hook blade', 'long hook blade', '55mm hook', 'thick packaging blade', 'rope cutting blade', 'heavy duty hook blade'],
    },
    benefits: [
      { title: 'Long Body', description: '55mm length: wider cutting line and more control than standard hook blades.', icon: 'Maximize' },
      { title: '4-Hole Mount', description: 'Maximum compatibility with different holder systems.', icon: 'Settings' },
      { title: 'Heavy Duty', description: 'Strong cutting for thick and tough materials.', icon: 'Shield' },
    ],
    longDescription: `<p>The Super Hook – Long is a larger, more powerful version of the standard B208 hook blade. With 55×19×0.6mm dimensions, it offers a wider cutting line. The 4-hole configuration provides compatibility with different holder systems.</p><p>Delivers more efficient performance than the standard hook blade for cutting thick packaging materials, rope, tough films and industrial tapes. The long body structure gives the operator greater control.</p>`,
  },
  'yuvarlatilmi': {
    name: 'Rounded Tip Hook Blade',
    subtitle: 'Safe Rounded Tip Hook Blade',
    description: 'Rounded tip hook blade. 52×19×0.6mm, 2 notches, 3 holes. Rounded tip instead of pointed: minimum risk of damage to underlying material. Safety-first cutting.',
    features: ['Rounded tip design — safety first', 'Minimum risk of damage to underlying material', '52×19×0.6mm standard hook size', '2 notches, 3 holes configuration', 'Sheffield Durham Duplex quality'],
    applications: ['Safe package opening', 'Retail operations', 'Warehouse safety', 'Valuable product handling'],
    seo: {
      title: 'Rounded Tip Hook Blade 52×19mm | Safety Hook Blade | Alya Blade',
      description: 'Rounded tip hook blade. 52×19×0.6mm, safe package opening. No damage to underlying material. Sheffield Durham Duplex. Authorized distributor.',
      keywords: ['rounded tip hook blade', 'safety hook blade', 'rounded hook', 'safe package opening blade', 'damage-free cutting blade'],
    },
    benefits: [
      { title: 'Rounded Tip', description: 'Minimum risk of underlying material damage: safety-first design.', icon: 'ShieldCheck' },
      { title: 'Product Protection', description: 'Opens valuable product packages without scratching or puncturing.', icon: 'Diamond' },
      { title: 'Operator Safety', description: 'Rounded tip reduces accident risk.', icon: 'Heart' },
    ],
    longDescription: `<p>The Rounded Tip hook blade is the safety-focused version of the standard B208 model. Instead of a pointed tip, it features a rounded tip profile that minimises the risk of damaging underlying layers or products during cutting.</p><p>Manufactured in 52×19×0.6mm dimensions with 2 notches and 3 holes. Ideal for safe package opening operations in warehouses, logistics and retail environments without risk of product damage.</p>`,
  },
  'if': {
    name: 'IF – Hook Blade (Textile)',
    subtitle: 'IF Series Textile Hook Blade',
    description: 'IF series textile hook blade. IF-1: 80×13×0.71mm single-sided, IF-2: 87×10×0.71mm double-sided, IF-2R: double-sided with round holes. Specially designed for fabric and textile industry.',
    features: ['IF-1: 80×13×0.71mm — single-sided', 'IF-2: 87×10×0.71mm — double-sided', 'IF-2R: 87×10×0.71mm — double-sided, round holes', '0.71mm thickness — no flex in fabric cutting', 'Special textile industry profile', 'Sheffield Durham Duplex quality'],
    applications: ['Fabric cutting', 'Garment production', 'Bale opening', 'Yarn & fibre cutting'],
    seo: {
      title: 'IF Hook Blade Textile IF-1 IF-2 | Textile Hook Blade | Alya Blade',
      description: 'IF series textile hook blade. IF-1: 80×13mm single-sided, IF-2: 87×10mm double-sided. Fabric and textile cutting. Sheffield Durham Duplex. Authorized distributor.',
      keywords: ['IF hook blade', 'textile hook blade', 'fabric cutting blade', 'IF-1 blade', 'IF-2 blade', 'garment blade', 'textile cutter blade'],
    },
    benefits: [
      { title: '3 Variants', description: 'IF-1, IF-2, IF-2R: single-sided and double-sided options.', icon: 'Layers' },
      { title: 'Textile Specific', description: 'Long, thin profile for precise cutting without fabric tearing.', icon: 'Target' },
      { title: '0.71mm Thickness', description: 'Thicker than standard 0.6mm: no flex during fabric cutting.', icon: 'Shield' },
    ],
    longDescription: `<p>IF series hook blades are professional cutting blades specifically developed for the textile industry. Unlike standard hook blades, they feature a thinner, longer profile designed for precise and clean cutting of fabrics and textiles.</p><p><strong>Variants:</strong></p><ul><li><strong>IF-1 (Single-Sided):</strong> 80×13×0.71mm, 1 oval + 1 round hole. Single-edge cutting model.</li><li><strong>IF-2 (Double-Sided):</strong> 87×10×0.71mm, 1 oval + 1 hole. Both-edge cutting capable.</li><li><strong>IF-2R (Double-Sided, Round Holes):</strong> 87×10×0.71mm, 2 round holes. Alternative mounting configuration.</li></ul>`,
    availableSizes: [
      'IF-1: 80×13×0.71mm — Single-Sided, 1 Oval + 1 Round Hole',
      'IF-2: 87×10×0.71mm — Double-Sided, 1 Oval + 1 Hole',
      'IF-2R: 87×10×0.71mm — Double-Sided, 2 Round Holes',
    ],
  },
  'b209': {
    name: 'B209 – Single-Sided Hook Blade',
    subtitle: 'Single-Sided Hook Blade (One Side Hook)',
    description: 'B209 single-sided hook blade. 59×19×0.6mm, 2 notches, 3 holes. Carbon steel, TiN coated and stainless variants. Single-sided edge for controlled directional cutting.',
    features: ['Single-sided edge — controlled cutting direction', '59×19×0.6mm size', 'Carbon, TiN coated, stainless variants', '2 notches, 3 holes configuration', 'Sheffield Durham Duplex quality'],
    applications: ['Controlled cutting', 'Precision packaging', 'Film stripping', 'Industrial production lines'],
    seo: {
      title: 'B209 Single-Sided Hook Blade 59×19mm | One Side Hook Blade | Alya Blade',
      description: 'B209 single-sided hook blade. 59×19×0.6mm, carbon/TiN/stainless. Controlled directional cutting. Sheffield Durham Duplex. Authorized distributor.',
      keywords: ['single-sided hook blade', 'B209', 'one side hook blade', 'controlled cutting blade', 'stainless hook blade', 'directional hook blade'],
    },
    benefits: [
      { title: 'Single-Sided Edge', description: 'Full control over cutting direction: no risk of unwanted cuts.', icon: 'Target' },
      { title: '3 Material Options', description: 'Carbon, TiN coated, stainless: choose by application.', icon: 'Layers' },
      { title: 'Wide Body', description: '59mm length: wider cutting line than standard B208.', icon: 'Maximize' },
    ],
    longDescription: `<p>The B209 single-sided hook blade features a special design that only cuts from one edge. This single-sided construction gives complete control over cutting direction and eliminates the risk of unwanted cuts.</p><p>Manufactured in 59×19×0.6mm dimensions with 2 notches and 3 holes. Available in carbon steel (standard), TiN coated (wear resistance) and stainless steel (corrosion resistance) variants.</p>`,
    availableSizes: [
      '59×19×0.6mm — 2N-3H, Carbon, 5-Pack Cellowrap, 100-Box',
      '59×19×0.6mm — 2N-3H, TiN, Gelatin, 100-Box',
      '59×19×0.6mm — 2N-3H, TiN, 10-Pack Dispenser',
      '59×19×0.6mm — 2N, Carbon, 5-Pack Cellowrap',
      '59×19×0.6mm — 2N-3H, TiN, Bulk 350-Box',
      '59×19×0.6mm — 2N-3D, Stainless, 5-Pack Cellowrap, 100-Box',
    ],
  },
  'kanca': {
    name: 'Hook Blade HOB-1',
    subtitle: 'HOB-1 Series Large Hook Blade',
    description: 'HOB-1 large hook blade. 90×39.5/20×0.80mm, 1 hole. Large body and thick profile for heavy duty textile and industrial packaging applications.',
    features: ['90×39.5/20×0.80mm — largest model in the family', '0.80mm thickness — heavy duty', '1-hole simple mount', 'Large body for maximum control', 'Sheffield Durham Duplex quality'],
    applications: ['Heavy duty textile', 'Bale opening', 'Rope & strap cutting', 'Industrial operations'],
    seo: {
      title: 'Hook Blade HOB-1 Large 90×39.5mm | Large Hook Blade | Alya Blade',
      description: 'HOB-1 large hook blade. 90×39.5/20×0.80mm, heavy duty. Textile, bale opening, rope cutting. Sheffield Durham Duplex. Authorized distributor.',
      keywords: ['HOB-1 hook blade', 'large hook blade', '90mm hook blade', 'heavy duty hook', 'bale cutting blade', 'textile hook blade'],
    },
    benefits: [
      { title: 'Largest Body', description: '90mm length: the biggest model in the hook blade family.', icon: 'Maximize' },
      { title: '0.80mm Thickness', description: 'Thicker than standard 0.6mm: heavy duty durability.', icon: 'Shield' },
      { title: 'Quick Change', description: '1-hole simple mount: fast blade changes.', icon: 'Zap' },
    ],
    longDescription: `<p>The HOB-1 is the largest and thickest model in the standard hook blade series. With 90×39.5/20×0.80mm dimensions, it is significantly larger than other hook blades. The large body enables deeper and more powerful cutting.</p><p>With 0.80mm thickness, it is harder and more durable than standard 0.6mm hook blades. The 1-hole simple mount configuration allows quick blade changes.</p>`,
  },

  // =============================================================================
  // SANAYİ JİLETLERİ - FALÇATA BIÇAKLAR
  // =============================================================================
  'b122': {
    name: 'B122 - Segmented Snap-Off Blade 9mm',
    subtitle: '9mm Snap-Off Blade — SK5 Carbon Steel',
    description: 'SK5 high-carbon steel 9mm segmented (snap-off) utility blade. 13 snap-off points deliver a factory-sharp edge with each break. Compatible with OLFA, Stanley, Martor and all standard 9mm narrow-body utility knives. Available in standard, stainless steel, TiN-coated and 30° acute-angle variants.',
    shortDescription: 'Professional 9mm snap-off blade with 9 variants: standard SK5, stainless SUS420J2, TiN-coated, 30° acute angle. OLFA AB-10, ABB-50, SAB-10 compatible.',
    features: [
      'SK5 high-carbon steel body (JIS G4401)',
      '13 snap-off segments — fresh edge with each break',
      '0.40mm thickness (Sheffield) / 0.38mm (OLFA compatible)',
      'TiN (Titanium Nitride) coating option — 3× extended lifespan',
      'SUS420J2 stainless steel variant — corrosion resistance',
      '30° acute-angle version — precision vinyl and film cutting',
      'OLFA AB-10, AB-10S, ABB-50, SAB-10 series compatible',
      'Manufactured to ISO 9001 standards in Sheffield, England'
    ],
    applications: [
      'Packaging and box opening',
      'Vinyl wrap and foil cutting',
      'Wallpaper installation',
      'Graphic design and print finishing',
      'Vinyl flooring and PVC floor laying',
      'Warehouse and logistics operations',
      'Office and stationery use'
    ],
    seo: {
      title: 'B122 9mm Segmented Snap-Off Blade | OLFA Compatible | Alya Blade',
      description: 'B122 9mm snap-off blade, SK5 carbon steel, HRC 58-62. 9 variants: standard, stainless, TiN-coated, 30° acute. OLFA AB-10/ABB-50/SAB-10 compatible. Sheffield quality.',
      keywords: ['9mm snap-off blade', 'B122', 'segmented utility blade', 'OLFA AB-10 blade', 'OLFA compatible blade 9mm', 'snap-off cutter blade', 'TiN coated snap-off', '30 degree blade', 'Sheffield snap-off blade', 'wholesale utility blades'],
    },
    benefits: [
      { title: '9 Professional Variants', description: 'Standard, stainless, TiN-coated, 30° acute-angle and OLFA-compatible options for every application.', icon: 'Settings' },
      { title: 'Universal Compatibility', description: 'Fits OLFA, Stanley, Martor, Tajima and all standard 9mm narrow-body utility knives.', icon: 'Link' },
      { title: 'TiN-Coated Option', description: 'Titanium Nitride coating delivers 3× longer cutting life than standard carbon steel.', icon: 'Clock' },
      { title: 'Sheffield Quality', description: 'SK5 high-carbon steel heat-treated to HRC 58-62 hardness in Sheffield, England.', icon: 'Award' },
    ],
    longDescription: `<p>The B122 series 9mm segmented snap-off blades are professional-grade cutting blades manufactured from SK5 high-carbon steel (JIS G4401) with HRC 58-62 hardness.</p><p>With 13 pre-scored snap-off points, each break delivers a factory-sharp cutting edge — eliminating the need for sharpening. Available in 0.40mm (Sheffield standard) and 0.38mm (OLFA standard) thicknesses.</p><h3>Variant Options</h3><ul><li><strong>Standard SK5:</strong> High-carbon steel for general-purpose cutting</li><li><strong>Stainless SUS420J2:</strong> Corrosion-resistant for humid and wet environments</li><li><strong>TiN-Coated:</strong> Titanium Nitride PVD coating for 3× extended lifespan</li><li><strong>30° Acute Angle:</strong> Sharper point angle for precision vinyl, film and graphic cutting</li><li><strong>OLFA AB-10/ABB-50/SAB-10:</strong> Direct-fit replacements for OLFA knife systems</li></ul><p>Compatible with all standard 9mm narrow-body utility knives including OLFA, Stanley, Martor, Tajima, NT Cutter and similar brands.</p>`,
    availableSizes: [
      '80×9×0.40mm — Standard',
      '80×9×0.40mm — Stainless Steel',
      '80×9×0.40mm — TiN Coated',
      '72×9×0.40mm — 30° Acute Angle',
      '72×9×0.40mm — 30° Angle + TiN',
      '80×9×0.38mm — OLFA AB-10 Compatible',
      '80×9×0.38mm — OLFA AB-10S Stainless',
      '80×9×0.38mm — OLFA ABB-50 Extra Sharp',
      '74×9×0.38mm — OLFA SAB-10 30° Angle',
    ],
  },
  'b124': {
    name: 'B124 - Non-Segmented Utility Blade 9mm',
    subtitle: '9mm Continuous Edge Blade — SK5 Carbon Steel',
    description: 'SK5 high-carbon steel 9mm non-segmented (continuous edge) utility blade. Unbroken single-piece edge delivers vibration-free straight-line cuts. Compatible with OLFA, Stanley and all standard 9mm narrow-body utility knives.',
    shortDescription: 'Non-segmented 9mm blade with continuous cutting edge for vibration-free precision. SK5 carbon steel, 80×9×0.40mm.',
    features: [
      'SK5 high-carbon steel body',
      'Continuous edge — vibration-free straight-line cutting',
      '0.40mm thickness',
      'No snap-off points — full structural integrity under load',
      'Compatible with all standard 9mm utility knives',
      'Manufactured to ISO 9001 standards in Sheffield, England'
    ],
    applications: [
      'Precision straight-line cutting',
      'Graphic design and model making',
      'Thin film and foil cutting',
      'Office and stationery use'
    ],
    seo: {
      title: 'B124 9mm Non-Segmented Utility Blade | Continuous Edge | Alya Blade',
      description: 'B124 9mm non-segmented blade, SK5 carbon steel, HRC 58-62. Continuous edge for vibration-free precision cutting. Sheffield quality. Authorized distributor.',
      keywords: ['9mm non-segmented blade', 'B124', 'continuous edge utility blade', 'non-snap blade 9mm', 'precision utility blade', 'Sheffield blade'],
    },
    benefits: [
      { title: 'Continuous Edge', description: 'Unbroken cutting edge eliminates vibration and delivers clean straight-line cuts.', icon: 'Target' },
      { title: 'Full Strength', description: 'No snap-off points means full structural integrity for demanding applications.', icon: 'Shield' },
      { title: 'Sheffield Quality', description: 'SK5 high-carbon steel heat-treated to HRC 58-62 in Sheffield, England.', icon: 'Award' },
    ],
    longDescription: `<p>The B124 non-segmented 9mm utility blade offers a continuous cutting edge without snap-off points, eliminating the micro-vibrations that segmented blades can produce during cutting.</p><p>Manufactured from SK5 high-carbon steel at 80×9×0.40mm dimensions with HRC 58-62 hardness. The single-piece edge construction maintains its structural integrity under load — ideal for applications requiring perfectly straight cuts.</p><p>Compatible with all standard 9mm narrow-body utility knives. Preferred for graphic design, model making, and precision film cutting where cut quality is paramount.</p>`,
    availableSizes: [
      '80×9×0.40mm — Non-Segmented Standard',
    ],
  },
  'b121': {
    name: 'B121 - Segmented Snap-Off Blade 18mm',
    subtitle: '18mm Snap-Off Blade — Heavy Duty SK5 Steel',
    description: 'SK5 high-carbon steel 18mm segmented (snap-off) utility blade. Wide-body design for heavy-duty industrial cutting. 8 snap-off points, 0.50mm thickness. Compatible with OLFA LB, LBB, LBD, LWB series and all standard 18mm utility knives. Standard, TiN-coated, extra-sharp and 15-segment variants available.',
    shortDescription: 'Heavy-duty 18mm snap-off blade with 7 variants: standard 0.50mm, thin 0.43mm, TiN-coated, OLFA LB-10/LBB-50/LBD-50/LWB-3B compatible.',
    features: [
      'SK5 high-carbon steel body (JIS G4401)',
      '8 snap-off segments — fresh edge with each break',
      '0.50mm thickness — heavy-duty industrial applications',
      '0.43mm thin variant — precision cutting',
      'TiN (Titanium Nitride) coating option — 3× extended lifespan',
      '15-segment OLFA LBD variant — more economical usage',
      'Serrated edge (LWB) variant — fibreglass and insulation cutting',
      'OLFA LB-10, LBB-50, LBD-50, LWB-3B series compatible',
      'Manufactured to ISO 9001 standards in Sheffield, England'
    ],
    applications: [
      'Cardboard and corrugated board cutting',
      'Vinyl flooring and PVC floor laying',
      'Construction and renovation',
      'Packaging and box opening',
      'Leather and textile cutting',
      'Wallpaper installation',
      'Warehouse and logistics operations'
    ],
    seo: {
      title: 'B121 18mm Segmented Snap-Off Blade | OLFA LB Compatible | Alya Blade',
      description: 'B121 18mm snap-off blade, SK5 carbon steel, HRC 58-62. 7 variants: standard, thin, TiN-coated, OLFA LB-10/LBB-50/LBD-50 compatible. Heavy-duty industrial cutting.',
      keywords: ['18mm snap-off blade', 'B121', 'heavy duty snap-off blade', 'OLFA LB-10 blade', 'OLFA compatible blade 18mm', 'wide snap-off blade', 'TiN coated 18mm blade', 'industrial snap-off blade', 'Sheffield snap-off', 'wholesale snap-off blades'],
    },
    benefits: [
      { title: '7 Professional Variants', description: 'Standard, thin, TiN-coated, 15-segment and OLFA-compatible options for every application.', icon: 'Settings' },
      { title: 'Heavy-Duty 0.50mm', description: '0.50mm thick profile resists bending in heavy-duty industrial cutting applications.', icon: 'Shield' },
      { title: 'OLFA Compatibility', description: 'Direct-fit replacement for OLFA LB-10, LBB-50, LBD-50 and LWB-3B blade systems.', icon: 'Link' },
      { title: 'Sheffield Quality', description: 'SK5 high-carbon steel heat-treated to HRC 58-62 hardness in Sheffield, England.', icon: 'Award' },
    ],
    longDescription: `<p>The B121 series 18mm segmented snap-off blades are heavy-duty cutting blades designed for industrial applications. Manufactured from SK5 high-carbon steel (JIS G4401) with HRC 58-62 hardness.</p><p>The 18mm wide body with 0.50mm thickness delivers superior bending resistance for demanding materials like cardboard, carpet, leather and PVC. A thinner 0.43mm option is available for precision cutting applications.</p><h3>Variant Options</h3><ul><li><strong>Standard 0.50mm:</strong> Heavy-duty cutting for cardboard, carpet, leather</li><li><strong>Thin 0.43mm:</strong> Precision cutting for film, paper, wallpaper</li><li><strong>TiN-Coated:</strong> Titanium Nitride PVD coating for 3× extended lifespan</li><li><strong>OLFA LB-10:</strong> Standard direct-fit replacement</li><li><strong>OLFA LBB-50:</strong> Extra-sharp Excel Black variant</li><li><strong>OLFA LBD-50:</strong> 15-segment economical variant</li><li><strong>OLFA LWB-3B:</strong> Serrated edge for insulation materials</li></ul><p>Compatible with all standard 18mm utility knives including OLFA, Stanley, Martor, Tajima and similar brands.</p>`,
    availableSizes: [
      '100×18×0.50mm — Standard 8-Segment',
      '100×18×0.43mm — Thin Version',
      '100×18×0.50mm — TiN Coated',
      '100×18×0.50mm — OLFA LB-10 Compatible',
      '100×18×0.50mm — OLFA LBB-50 Extra Sharp',
      '100×18×0.50mm — OLFA LBD-50 15-Segment',
      '100×18×0.50mm — OLFA LWB-3B Serrated Edge',
    ],
  },
  'b123': {
    name: 'B123 - Non-Segmented Utility Blade 18mm',
    subtitle: '18mm Continuous Edge Blade — Heavy Duty SK5 Steel',
    description: 'SK5 high-carbon steel 18mm non-segmented (continuous edge) utility blade. Unbroken single-piece edge minimises bending and fracture risk under heavy load. TiN-coated and OLFA LSOL-10 compatible variants available.',
    shortDescription: 'Heavy-duty 18mm non-segmented blade with 4 variants: standard 0.50mm, thin 0.43mm, TiN-coated, OLFA LSOL-10 compatible.',
    features: [
      'SK5 high-carbon steel body',
      'Continuous edge — bending and fracture resistance',
      '0.50mm standard / 0.43mm thin thickness',
      'TiN (Titanium Nitride) coating option',
      'OLFA LSOL-10 series compatible',
      'Manufactured to ISO 9001 standards in Sheffield, England'
    ],
    applications: [
      'Continuous heavy-load cutting',
      'Cardboard and corrugated board',
      'Vinyl flooring and PVC floor laying',
      'Leather and thick textile cutting',
      'Packaging industry'
    ],
    seo: {
      title: 'B123 18mm Non-Segmented Utility Blade | Continuous Edge | Alya Blade',
      description: 'B123 18mm non-segmented blade, SK5 carbon steel, HRC 58-62. 4 variants: standard, thin, TiN-coated, OLFA LSOL-10 compatible. Heavy-duty industrial cutting.',
      keywords: ['18mm non-segmented blade', 'B123', 'continuous edge 18mm blade', 'non-snap blade 18mm', 'heavy duty utility blade', 'OLFA LSOL-10 blade', 'Sheffield utility blade'],
    },
    benefits: [
      { title: 'Fracture Resistance', description: 'Continuous edge without snap-off points resists bending and breaking under heavy load.', icon: 'Shield' },
      { title: 'Dual Thickness', description: '0.50mm standard and 0.43mm thin options for heavy-duty and precision applications.', icon: 'Settings' },
      { title: 'TiN-Coated Option', description: 'Titanium Nitride coating extends cutting life by up to 3×.', icon: 'Clock' },
      { title: 'Sheffield Quality', description: 'SK5 steel heat-treated to HRC 58-62 in Sheffield, England.', icon: 'Award' },
    ],
    longDescription: `<p>The B123 non-segmented 18mm utility blade provides a continuous cutting edge for applications where bending and fracture resistance are critical. Without snap-off score lines, the blade maintains full structural integrity under heavy load.</p><p>Manufactured from SK5 high-carbon steel with HRC 58-62 hardness. Available in 0.50mm (standard) and 0.43mm (thin) thicknesses, plus a TiN-coated variant for extended lifespan.</p><p>The OLFA LSOL-10 compatible variant provides a direct-fit replacement for OLFA knife systems. Ideal for continuous cutting of cardboard, carpet, leather and PVC flooring materials.</p>`,
    availableSizes: [
      '100×18×0.50mm — Non-Segmented Standard',
      '100×18×0.43mm — Non-Segmented Thin',
      '100×18×0.50mm — TiN Coated',
      '100×18×0.50mm — OLFA LSOL-10 Compatible',
    ],
  },
  'b123-018': {
    name: 'B123 018 - Non-Segmented Utility Blade 18mm – Short',
    subtitle: '18mm Short Blade — 60mm Compact Length',
    description: 'SK5 high-carbon steel 18mm non-segmented short utility blade. 60mm compact length for superior manoeuvrability in tight and confined workspaces. Continuous edge construction.',
    shortDescription: 'Compact 60mm non-segmented 18mm blade for confined spaces. SK5 carbon steel, 60×18×0.50mm.',
    features: [
      'SK5 high-carbon steel body',
      'Compact 60mm length — confined space cutting',
      'Continuous edge — no snap-off points',
      '0.50mm thickness',
      'Manufactured to ISO 9001 standards in Sheffield, England'
    ],
    applications: [
      'Confined and restricted workspaces',
      'Precision position cutting',
      'Model making and prototyping',
      'Cable trunking cutting'
    ],
    seo: {
      title: 'B123-018 Short 18mm Non-Segmented Blade | Compact Utility Blade | Alya Blade',
      description: 'B123-018 short 18mm non-segmented blade, 60mm compact length, SK5 carbon steel, HRC 58-62. Confined space cutting. Sheffield quality. Authorized distributor.',
      keywords: ['short utility blade', 'B123-018', 'compact snap-off blade', '60mm utility blade', 'short non-segmented blade', 'confined space blade'],
    },
    benefits: [
      { title: 'Compact Design', description: '60mm length provides superior manoeuvrability in tight and confined spaces.', icon: 'Minimize' },
      { title: 'Continuous Edge', description: 'Non-segmented construction ensures structural integrity in difficult positions.', icon: 'Shield' },
      { title: 'Sheffield Quality', description: 'SK5 steel heat-treated to HRC 58-62 in Sheffield, England.', icon: 'Award' },
    ],
    longDescription: `<p>The B123-018 is a compact 60mm non-segmented utility blade designed for cutting in tight and confined workspaces where standard 100mm blades cannot reach or manoeuvre effectively.</p><p>Manufactured from SK5 high-carbon steel with HRC 58-62 hardness at 60×18×0.50mm dimensions. The continuous edge construction (no snap-off points) maintains structural integrity even in awkward cutting positions.</p><p>Ideal for cable trunking, model making, prototyping and any application requiring precision cutting in restricted areas.</p>`,
    availableSizes: [
      '60×18×0.50mm — Non-Segmented Short',
    ],
  },
  'b096': {
    name: 'B096 - Non-Segmented Utility Blade 12mm – Oval Slot',
    subtitle: '12mm Oval Slot Blade — Special Mounting',
    description: 'SK5 high-carbon steel 12mm non-segmented utility blade with oval mounting slot. Compatible with special-type utility knives featuring oval retention mechanisms. 89mm length, 0.50mm thickness, single-piece continuous edge.',
    shortDescription: 'Non-segmented 12mm blade with oval mounting slot. SK5 carbon steel, 89×12×0.50mm. For special-type utility knives.',
    features: [
      'SK5 high-carbon steel body',
      'Oval mounting slot — special-type knife compatibility',
      'Non-segmented continuous edge',
      '89mm length, 12mm width',
      '0.50mm thickness',
      'Manufactured to ISO 9001 standards in Sheffield, England'
    ],
    applications: [
      'Oval-slot type utility knives',
      'Precision industrial cutting',
      'Cardboard and packaging cutting'
    ],
    seo: {
      title: 'B096 12mm Oval Slot Utility Blade | Non-Segmented | Alya Blade',
      description: 'B096 12mm non-segmented blade with oval mounting slot, SK5 carbon steel, HRC 58-62. For special-type utility knives. Sheffield quality. Authorized distributor.',
      keywords: ['12mm oval slot blade', 'B096', 'oval slot utility blade', 'special mount blade', 'non-segmented 12mm blade', 'Sheffield blade'],
    },
    benefits: [
      { title: 'Oval Slot Mount', description: 'Oval retention slot provides secure fit in special-type utility knife holders.', icon: 'Link' },
      { title: 'Continuous Edge', description: 'Non-segmented construction for full structural integrity.', icon: 'Shield' },
      { title: 'Sheffield Quality', description: 'SK5 steel heat-treated to HRC 58-62 in Sheffield, England.', icon: 'Award' },
    ],
    longDescription: `<p>The B096 is a 12mm non-segmented utility blade featuring an oval mounting slot for compatibility with special-type utility knife holders that use oval retention mechanisms rather than standard rectangular slots.</p><p>Manufactured from SK5 high-carbon steel at 89×12×0.50mm dimensions with HRC 58-62 hardness. The continuous single-piece edge provides full structural integrity without snap-off score lines.</p>`,
    availableSizes: [
      '89×12×0.50mm — 1 Oval Slot',
    ],
  },
  'olfa-mtb': {
    name: 'OLFA-MTB - Segmented Snap-Off Blade 12.5mm',
    subtitle: '12.5mm OLFA MTB/FWB Compatible Blade',
    description: 'SK5 high-carbon steel 12.5mm segmented snap-off blade. Designed as a direct-fit replacement for OLFA MTB and FWB series utility knives. Standard 0.45mm and ultra-thin 0.25mm (extra-sharp) variants.',
    shortDescription: 'OLFA MTB-10 and FWB-10 compatible 12.5mm snap-off blade. Standard 0.45mm and ultra-thin 0.25mm extra-sharp variants.',
    features: [
      'SK5 high-carbon steel body',
      'OLFA MTB-10 and FWB-10 series compatible',
      'Segmented snap-off edge design',
      '0.45mm standard / 0.25mm ultra-thin (extra-sharp) thickness',
      '12.5mm width — OLFA medium-body utility knives',
      'Manufactured to ISO 9001 standards in Sheffield, England'
    ],
    applications: [
      'OLFA MTB series utility knives',
      'OLFA FWB series utility knives',
      'Graphic design and precision cutting',
      'Vinyl and film application'
    ],
    seo: {
      title: 'OLFA MTB 12.5mm Snap-Off Blade | MTB-10 FWB-10 Compatible | Alya Blade',
      description: 'OLFA MTB-10 and FWB-10 compatible 12.5mm snap-off blade, SK5 carbon steel. Standard 0.45mm and ultra-thin 0.25mm variants. Sheffield quality.',
      keywords: ['OLFA MTB blade', 'OLFA MTB-10', 'OLFA FWB-10', '12.5mm snap-off blade', 'OLFA replacement blade', 'OLFA compatible blade', 'medium snap-off blade'],
    },
    benefits: [
      { title: 'OLFA Compatible', description: 'Direct-fit replacement for OLFA MTB-10 and FWB-10 blade systems.', icon: 'Link' },
      { title: 'Ultra-Thin Option', description: '0.25mm FWB variant delivers exceptionally sharp cutting for delicate materials.', icon: 'Target' },
      { title: 'Sheffield Quality', description: 'SK5 steel heat-treated to HRC 58-62 in Sheffield, England.', icon: 'Award' },
    ],
    longDescription: `<p>The OLFA-MTB series blades are precision snap-off blades designed as direct-fit replacements for OLFA MTB and FWB series medium-body utility knives.</p><p>Available in two variants:</p><ul><li><strong>MTB-10 (0.45mm):</strong> Standard thickness for general-purpose cutting at 83.3×12.5mm</li><li><strong>FWB-10 (0.25mm):</strong> Ultra-thin extra-sharp blade at 85×12.5mm for delicate and precise cutting</li></ul><p>Manufactured from SK5 high-carbon steel with HRC 58-62 hardness to Sheffield quality standards.</p>`,
    availableSizes: [
      '83.3×12.5×0.45mm — OLFA MTB-10 Standard',
      '85×12.5×0.25mm — OLFA FWB-10 Extra Sharp (0.25mm ultra-thin)',
    ],
  },
  'lwb': {
    name: 'LWB - Serrated Edge Utility Blade 18mm',
    subtitle: '18mm Serrated Edge — Insulation Cutting',
    description: 'SK5 high-carbon steel 18mm serrated edge (saw-tooth) utility blade. Non-segmented construction. Superior performance cutting fibrous and porous materials including glass wool, rock wool, fibreglass, polystyrene and insulation materials. OLFA LWB-3B compatible.',
    shortDescription: 'Serrated edge 18mm blade for insulation and fibrous materials. OLFA LWB-3B compatible. SK5 carbon steel, 100×18×0.50mm.',
    features: [
      'SK5 high-carbon steel body',
      'Serrated edge profile (saw-tooth)',
      'Non-segmented construction — no fracture risk',
      'Anti-jam cutting in fibrous and porous materials',
      'OLFA LWB-3B series compatible',
      'Manufactured to ISO 9001 standards in Sheffield, England'
    ],
    applications: [
      'Glass wool and rock wool cutting',
      'Fibreglass panel cutting',
      'Polystyrene (EPS/XPS) cutting',
      'Insulation material cutting',
      'Construction and renovation'
    ],
    seo: {
      title: 'LWB 18mm Serrated Edge Blade | Insulation Cutting | Alya Blade',
      description: 'LWB 18mm serrated edge blade, SK5 carbon steel. OLFA LWB-3B compatible. Glass wool, fibreglass, polystyrene insulation cutting. Sheffield quality.',
      keywords: ['serrated utility blade', 'LWB blade', 'OLFA LWB-3B', 'insulation cutting blade', 'saw-tooth blade 18mm', 'glass wool cutting blade', 'fibreglass cutting blade', 'serrated snap-off blade'],
    },
    benefits: [
      { title: 'Serrated Edge', description: 'Saw-tooth profile grips and cuts fibrous materials without jamming or tearing.', icon: 'Grip' },
      { title: 'Insulation Specialist', description: 'Designed specifically for glass wool, rock wool, fibreglass and polystyrene.', icon: 'Target' },
      { title: 'Non-Segmented', description: 'No snap-off points — serrated blades must not be scored for safety reasons.', icon: 'Shield' },
      { title: 'OLFA Compatible', description: 'Direct-fit replacement for OLFA LWB-3B serrated blade system.', icon: 'Link' },
    ],
    longDescription: `<p>The LWB serrated edge blade is a specialised 18mm utility blade designed for cutting fibrous, porous and insulation materials that would jam or tear with a standard smooth edge.</p><p>The saw-tooth (serrated) edge profile grips the material from first contact, preventing slippage and delivering clean cuts through glass wool, rock wool, fibreglass panels, EPS and XPS polystyrene insulation boards.</p><p>Manufactured from SK5 high-carbon steel at 100×18×0.50mm dimensions. Non-segmented construction is essential for serrated blades as score lines would compromise the integrity of the saw-tooth pattern.</p><p>OLFA LWB-3B compatible. Sold in packs of 3.</p>`,
    availableSizes: [
      '100×18×0.50mm — Serrated Edge (OLFA LWB-3B)',
    ],
  },
  'b126': {
    name: 'B126 - Segmented Snap-Off Blade 25mm',
    subtitle: '25mm Extra-Wide Snap-Off Blade — 0.70mm Thick',
    description: 'SK5 high-carbon steel 25mm extra-wide segmented (snap-off) utility blade. 0.70mm thickness for maximum bending resistance. Heavy-duty industrial cutting applications. Compatible with OLFA HB-20 and HBB-5B series.',
    shortDescription: 'Extra-wide 25mm snap-off blade with 3 variants: standard, OLFA HB-20 and OLFA HBB-5B extra-sharp. 0.70mm thick, SK5 carbon steel.',
    features: [
      'SK5 high-carbon steel body',
      '25mm extra-wide body — maximum cutting depth',
      '0.70mm thickness — industrial-grade bending resistance',
      'Snap-off segment design',
      'Extra-sharp (Black Blade) variant available',
      'OLFA HB-20 and HBB-5B series compatible',
      'Manufactured to ISO 9001 standards in Sheffield, England'
    ],
    applications: [
      'Thick cardboard and corrugated board cutting',
      'Drywall (plasterboard) cutting',
      'Carpet and heavy flooring cutting',
      'Leather and thick textile cutting',
      'Construction and renovation',
      'Industrial packaging'
    ],
    seo: {
      title: 'B126 25mm Segmented Snap-Off Blade | OLFA HB Compatible | Alya Blade',
      description: 'B126 25mm snap-off blade, SK5 carbon steel, 0.70mm thick, HRC 58-62. 3 variants: standard, OLFA HB-20, HBB-5B extra-sharp. Heavy-duty industrial cutting.',
      keywords: ['25mm snap-off blade', 'B126', 'extra wide utility blade', 'OLFA HB-20 blade', 'OLFA HBB-5B blade', '0.70mm snap-off blade', 'heavy duty snap-off', 'drywall blade', 'wide utility blade'],
    },
    benefits: [
      { title: 'Extra-Wide 25mm', description: '25mm body provides maximum cutting depth for thick materials like drywall and carpet.', icon: 'Maximize' },
      { title: '0.70mm Thick', description: 'Industrial-grade thickness resists bending even in the most demanding applications.', icon: 'Shield' },
      { title: 'OLFA Compatible', description: 'Direct-fit replacement for OLFA HB-20 and HBB-5B extra-sharp blade systems.', icon: 'Link' },
      { title: 'Sheffield Quality', description: 'SK5 steel heat-treated to HRC 58-62 in Sheffield, England.', icon: 'Award' },
    ],
    longDescription: `<p>The B126 series 25mm extra-wide segmented snap-off blades are the largest standard snap-off blades available, designed for the most demanding heavy-duty cutting applications.</p><p>At 127×25×0.70mm dimensions, these blades provide maximum cutting depth and superior bending resistance. The 0.70mm thickness is essential for maintaining rigidity when cutting through thick cardboard, drywall, carpet and leather.</p><h3>Variant Options</h3><ul><li><strong>Standard:</strong> 127×25×0.70mm general-purpose heavy-duty</li><li><strong>OLFA HB-20:</strong> Direct-fit replacement at 126×25×0.70mm</li><li><strong>OLFA HBB-5B:</strong> Extra-sharp Excel Black variant at 126×25×0.70mm</li></ul><p>Compatible with all 25mm extra-wide utility knives. Sold in packs of 5.</p>`,
    availableSizes: [
      '127×25×0.70mm — Standard',
      '126×25×0.70mm — OLFA HB-20 Compatible',
      '126×25×0.70mm — OLFA HBB-5B Extra Sharp',
    ],
  },
  'b125': {
    name: 'B125 - Non-Segmented Utility Blade 25mm',
    subtitle: '25mm Extra-Wide Continuous Edge — 0.70mm Thick',
    description: 'SK5 high-carbon steel 25mm extra-wide non-segmented (continuous edge) utility blade. 0.70mm thickness. Unbroken single-piece edge provides bending and fracture resistance for heavy-duty industrial applications.',
    shortDescription: 'Extra-wide 25mm non-segmented blade with continuous edge. 0.70mm thick, SK5 carbon steel, 127×25mm.',
    features: [
      'SK5 high-carbon steel body',
      '25mm extra-wide body — maximum cutting depth',
      '0.70mm thickness — industrial-grade bending resistance',
      'Non-segmented continuous edge — no fracture risk',
      'Manufactured to ISO 9001 standards in Sheffield, England'
    ],
    applications: [
      'Heavy-duty industrial cutting',
      'Thick cardboard and corrugated board',
      'Carpet and heavy flooring',
      'Leather and thick textile'
    ],
    seo: {
      title: 'B125 25mm Non-Segmented Utility Blade | Continuous Edge | Alya Blade',
      description: 'B125 25mm non-segmented blade, SK5 carbon steel, 0.70mm thick, HRC 58-62. Continuous edge for heavy-duty industrial cutting. Sheffield quality. Authorized distributor.',
      keywords: ['25mm non-segmented blade', 'B125', 'extra wide continuous blade', 'non-snap 25mm blade', 'heavy duty utility blade', 'Sheffield blade'],
    },
    benefits: [
      { title: 'Extra-Wide 25mm', description: '25mm body provides maximum cutting depth for thick materials.', icon: 'Maximize' },
      { title: 'No Snap Points', description: 'Continuous edge without score lines for full structural integrity under load.', icon: 'Shield' },
      { title: 'Sheffield Quality', description: 'SK5 steel heat-treated to HRC 58-62 in Sheffield, England.', icon: 'Award' },
    ],
    longDescription: `<p>The B125 is a 25mm extra-wide non-segmented utility blade offering maximum cutting depth combined with a continuous edge for full structural integrity.</p><p>Manufactured from SK5 high-carbon steel at 127×25×0.70mm dimensions with HRC 58-62 hardness. The 0.70mm thickness and absence of snap-off score lines make this blade exceptionally resistant to bending and fracture — essential for heavy-duty industrial cutting of thick cardboard, carpet, leather and similar demanding materials.</p>`,
    availableSizes: [
      '127×25×0.70mm — Non-Segmented Standard',
    ],
  },
  'hswb1': {
    name: 'HSWB1 - Serrated Edge Utility Blade 25mm',
    subtitle: '25mm Extra-Wide Serrated — Thick Insulation Cutting',
    description: 'SK5 high-carbon steel 25mm extra-wide serrated edge (saw-tooth) utility blade. Non-segmented construction. Superior performance cutting thick insulation materials, glass wool, and fibreglass panels. OLFA HSWB-1 compatible.',
    shortDescription: 'Serrated edge 25mm extra-wide blade for thick insulation. OLFA HSWB-1 compatible. SK5 carbon steel, 106×25×0.50mm.',
    features: [
      'SK5 high-carbon steel body',
      '25mm extra-wide body',
      'Serrated edge profile (saw-tooth)',
      'Non-segmented construction — no fracture risk',
      'Anti-jam cutting in thick fibrous materials',
      'OLFA HSWB-1 series compatible',
      'Manufactured to ISO 9001 standards in Sheffield, England'
    ],
    applications: [
      'Thick glass wool and rock wool cutting',
      'Thick fibreglass panel cutting',
      'XPS and EPS insulation board cutting',
      'Construction insulation work',
      'Heavy-duty industrial cutting'
    ],
    seo: {
      title: 'HSWB1 25mm Serrated Blade | Insulation Cutting | Alya Blade',
      description: 'HSWB1 25mm extra-wide serrated blade, SK5 carbon steel. OLFA HSWB-1 compatible. Thick insulation, glass wool, fibreglass cutting. Sheffield quality.',
      keywords: ['25mm serrated blade', 'HSWB1', 'OLFA HSWB-1', 'serrated insulation blade', 'wide serrated blade', 'glass wool blade 25mm', 'thick insulation cutter', 'extra wide serrated blade'],
    },
    benefits: [
      { title: 'Extra-Wide Serrated', description: '25mm serrated edge provides maximum grip and cutting depth for thick insulation materials.', icon: 'Maximize' },
      { title: 'Anti-Jam Design', description: 'Saw-tooth profile prevents material jam in fibrous and porous substrates.', icon: 'Grip' },
      { title: 'OLFA Compatible', description: 'Direct-fit replacement for OLFA HSWB-1 serrated blade system.', icon: 'Link' },
      { title: 'Sheffield Quality', description: 'SK5 steel heat-treated to HRC 58-62 in Sheffield, England.', icon: 'Award' },
    ],
    longDescription: `<p>The HSWB1 is a 25mm extra-wide serrated edge blade designed for cutting thick insulation materials that require both maximum cutting depth and a saw-tooth edge profile.</p><p>The serrated (saw-tooth) edge grips fibrous materials from first contact, preventing slippage and delivering clean cuts through thick glass wool, rock wool, fibreglass panels and EPS/XPS polystyrene insulation boards.</p><p>Manufactured from SK5 high-carbon steel at 106×25×0.50mm dimensions. Non-segmented construction is mandatory for serrated blades. OLFA HSWB-1 compatible. Sold in packs of 3.</p>`,
    availableSizes: [
      '106×25×0.50mm — Serrated Edge (OLFA HSWB-1)',
    ],
  },

  // =============================================================================
  // MANUEL ÜRÜNLER - products.ts
  // =============================================================================
  'h006-001-x01': {
    name: 'RETRO LIGHT KNIFE – Cast Metal Hand Knife',
    subtitle: 'Cast Metal Safety Knife',
    description: 'Cast metal body hand knife meeting safety standards. Durable cast metal construction with ergonomic design.',
    features: ['Cast metal body', 'Ergonomic design', 'Long lasting'],
    applications: ['General cutting', 'Package opening', 'Cardboard cutting'],
    seo: {
      title: 'RETRO LIGHT KNIFE Cast Metal Safety Knife | Alya Blade',
      description: 'RETRO LIGHT KNIFE cast metal hand knife. Durable die-cast body, ergonomic grip, Sheffield steel blade. Warehouse, logistics, production. Authorized distributor.',
      keywords: ['retro light knife', 'cast metal knife', 'safety knife', 'industrial hand knife', 'Sheffield knife', 'warehouse knife'],
    },
    benefits: [
      { title: 'Extended Lifespan', description: 'Sheffield steel blade delivers longer cutting performance than standard knives.', icon: 'Clock' },
      { title: 'Safe Operation', description: 'Fixed tip design ensures controlled and safe cutting.', icon: 'Shield' },
      { title: 'Ergonomic Grip', description: 'Die-cast handle prevents fatigue during extended use.', icon: 'Zap' },
    ],
    longDescription: `<p>The RETRO LIGHT KNIFE is a premium hand knife engineered for industrial use. Its die-cast metal body maintains durability even under intensive daily operation.</p><h3>Key Features</h3><ul><li>Sheffield steel cutting edge</li><li>Die-cast metal body for maximum durability</li><li>Ergonomic design prevents fatigue during extended use</li><li>Quick and safe blade change mechanism</li></ul><h3>Recommended Applications</h3><p>Ideal for warehouse, logistics, production line, and general cutting operations. Delivers high performance cutting cardboard, plastic film, packaging materials and similar substrates.</p>`,
  },
  'h008-001-a03': {
    name: 'AUTO RETRACT – Auto-Retractable Safety Knife',
    subtitle: 'Auto-Retractable Safety Knife',
    description: 'Auto-retractable safety knife with automatic blade retraction mechanism for maximum safety.',
    features: ['Auto retraction', 'Safety lock', 'Ergonomic grip'],
    applications: ['Warehouse work', 'Logistics', 'Production lines'],
  },
  'p1-a': {
    name: 'Deburring / Hobby Hand Knife – Allen Screw',
    description: 'Allen screw deburring and hobby hand knife. Ideal for precision work.',
    features: ['Allen screw mount', 'Precision cutting', 'Replaceable tip'],
    applications: ['Deburring', 'Hobby work', 'Model making'],
  },
  '3-delikli-jilet-020': {
    name: '3-Hole Slitting Blade 0.20mm',
    subtitle: 'Titanium Coated - 0.20mm',
    description: 'Industrial slitting blade with 3 mounting holes, 0.20mm thickness. Sheffield quality steel with titanium coating for extended durability.',
    features: ['3 mounting holes', '0.20mm thickness', 'Sheffield quality', 'Titanium coating'],
    applications: ['Film slitting', 'Paper cutting', 'Textile cutting', 'Industrial slitting'],
    seo: {
      title: '3-Hole Slitting Blade 0.20mm Titanium Coated | Alya Blade',
      description: '3-hole slitting blade 0.20mm, TiN titanium coated. HRC 60-62, Sheffield steel. Film, paper, textile slitting. Authorized distributor.',
      keywords: ['3-hole slitting blade', 'slitting blade 0.20mm', 'titanium coated blade', 'TiN slitting blade', 'industrial slitting', 'film slitting blade'],
    },
    benefits: [
      { title: 'Titanium Coating', description: 'TiN coating delivers 3x longer lifespan than standard uncoated blades.', icon: 'Shield' },
      { title: 'Precision Cut', description: 'HRC 60-62 hardness ensures clean, burr-free cut quality.', icon: 'Target' },
      { title: 'Compatible Mounting', description: '3-hole standard mounting system for quick blade changeover.', icon: 'Settings' },
    ],
    longDescription: `<p>The 3-Hole Slitting Blade is a high-performance cutting blade specifically engineered for industrial slitting machines. Titanium (TiN) coating provides extended lifespan and superior wear resistance.</p><h3>Technical Specifications</h3><ul><li>Sheffield steel substrate</li><li>TiN (Titanium Nitride) PVD coating</li><li>HRC 60-62 hardness</li><li>3-hole standard mounting system</li><li>Available thicknesses: 0.20mm, 0.25mm, 0.30mm</li></ul><h3>Applications</h3><p>Used for precision slitting of textile, paper, plastic film, packaging materials, and similar thin substrates. Delivers superior performance especially in high-speed slitting machines.</p>`,
  },
  'slotted-jilet-020': {
    name: 'Slotted Slitting Blade 0.20mm',
    description: 'Industrial slotted slitting blade, 0.20mm thickness. Sheffield quality steel for precision cutting.',
    features: ['Slotted design', '0.20mm thickness', 'Sheffield quality'],
    applications: ['Precision slitting', 'Film cutting', 'Industrial use'],
  },
  'trapez-bicak-standart': {
    name: 'Trapezoid Blade - Standard',
    description: 'Standard trapezoid utility blade for general cutting applications. Sheffield quality steel.',
    features: ['Standard design', 'Universal fit', 'Sheffield quality'],
    applications: ['General cutting', 'Box opening', 'Warehouse use'],
  },
  'doner-bicak-100mm': {
    name: 'Rotary Blade 100mm',
    description: '100mm diameter rotary cutting blade for industrial cutting machines.',
    features: ['100mm diameter', 'Rotary design', 'Industrial grade'],
    applications: ['Rotary cutting', 'Fabric cutting', 'Industrial machines'],
  },
  'vakum-paketleme-bicak': {
    name: 'Vacuum Packaging Blade',
    subtitle: 'Sheffield Steel — Thermoform & MAP Machines',
    description: 'Professional vacuum packaging machine blade manufactured from Sheffield steel. HRC 58-60 hardness, food-grade surface finish Ra ≤0.4 µm. Compatible with Multivac, Tiromat, GEA, Ulma, Sealpac, Webomatic thermoform and MAP packaging machines.',
    features: ['Sheffield high-carbon steel', 'HRC 58-60 hardness', 'Food-grade Ra ≤0.4 µm surface', 'HACCP & BRC compliant', 'CNC precision machined', '10+ machine brand compatibility'],
    applications: ['Vacuum packaging', 'Thermoform packaging', 'MAP (Modified Atmosphere) packaging', 'Food industry — meat, cheese, ready meals', 'Medical device packaging'],
    seo: {
      title: 'Vacuum Packaging Blade | Thermoform Machine Knife | Sheffield Steel',
      description: 'Professional vacuum packaging blade for thermoform and MAP machines. Sheffield steel HRC 58-60, food-grade Ra ≤0.4 µm. Compatible with Multivac, Tiromat, GEA, Ulma, Sealpac. ISO 9001 certified manufacturer.',
      keywords: ['vacuum packaging blade', 'thermoform blade', 'thermoform machine knife', 'vacuum packaging machine knife', 'MAP packaging blade', 'Multivac blade', 'Tiromat blade', 'GEA blade', 'Sealpac blade', 'food packaging knife', 'packaging machine blade', 'thermoform cutting blade', 'vacuum sealer blade', 'industrial packaging blade'],
    },
    benefits: [
      { title: 'HRC 58-60 Hardness', description: 'Lasting sharpness and 3x lifespan through controlled atmosphere heat treatment', icon: 'Shield' },
      { title: 'Food-Grade Surface', description: 'Ra ≤0.4 µm roughness — HACCP and BRC compliant hygienic cutting', icon: 'CheckCircle' },
      { title: 'Wide Machine Compatibility', description: 'Compatible with 10+ brands including Multivac, Tiromat, GEA, Ulma, Sealpac', icon: 'Settings' },
    ],
    longDescription: `<p>This professional blade for vacuum packaging (MAP — Modified Atmosphere Packaging) machines is precision CNC-machined from Sheffield steel. HRC 58-60 Rockwell hardness is achieved through heat treatment in controlled atmosphere furnaces.</p>
<p>Delivers surface quality compliant with HACCP and BRC standards for the food industry. Ra ≤0.4 µm surface roughness prevents food particles from adhering to the blade surface, maintaining hygiene standards.</p>
<p><strong>Compatible Machine Brands:</strong> Multivac, Tiromat, Opack, Betapak, GEA CFS, Alcan, Ulma Packaging, Variovac, Sealpac, Webomatic, Henkelman.</p>
<p>This is the general reference product for all thermoform vacuum packaging blade types including straight cut, contour cut, star punch, and air punch. Our technical support team ensures the optimal SKU match for your specific machine model.</p>`,
  },

  // =============================================================================
  // MAKİNA BIÇAKLARI - DÖNER BIÇAKLAR
  // =============================================================================
  'vent-cutter': {
    name: 'Vent Cutter - Winged Cutting Blade',
    description: 'Winged cutting blade for ventilation and specialized cutting applications.',
    features: ['Winged design', 'Industrial grade', 'Precision cutting'],
    applications: ['Ventilation cutting', 'Industrial applications'],
  },
  'kontr-biai': {
    name: 'Contour Blade - Thermoform Vacuum Packaging Blade',
    subtitle: 'Contour Profile Cutting — Sheffield Steel HRC 58-62',
    description: 'Professional contour blades for thermoform and vacuum packaging machines. Compatible with Multivac, Tiromat, Opack, Betapak, GEA, Alcan, Ulma, Variovac machines. Sheffield steel, food-grade quality.',
    features: ['Contour design', 'Sheffield steel', 'Food industry approved', 'Clean and precise cuts', 'Titanium coating option'],
    applications: ['Vacuum packaging', 'Thermoforming', 'Food packaging', 'Meat and cheese packaging', 'Industrial packaging'],
    seo: {
      title: 'Contour Blade Thermoform | Multivac Tiromat Vacuum Packaging Blade',
      description: 'Contour blades for thermoform vacuum packaging. Multivac, Tiromat, Opack, GEA, Ulma compatible. Sheffield steel, food-grade, titanium coating option.',
      keywords: ['contour blade', 'contour blade', 'thermoform blade', 'vacuum packaging blade', 'multivac blade', 'tiromat blade', 'tiromat contour', 'opack blade', 'betapak blade', 'gea blade', 'alcan blade', 'ulma blade', 'variovac blade', 'food packaging blade', 'thermoform blade', 'thermoform cutting blade', 'vacuum packaging knife', 'MAP packaging blade']
    },
    benefits: [
      { title: 'HRC 58-62 Hardness', description: 'Consistent cutting quality and long life through precision heat treatment', icon: 'Shield' },
      { title: 'Burr-Free Cutting', description: 'Contour profile geometry delivers clean, burr-free edge cuts', icon: 'Zap' },
      { title: 'TiN Coating Option', description: '2300 HV surface hardness, 3-5x life extension, anti-adhesion', icon: 'Diamond' },
    ],
    longDescription: `<p>The contour blade is a specially profiled blade that cuts film edges by following the profile in thermoform packaging machines. CNC-machined from Sheffield high-carbon steel, achieving HRC 58-62 hardness through precision heat treatment.</p>
<p><strong>Profile Geometry:</strong> Machine-specific contour profile precisely follows the film edge geometry. Delivers burr-free cutting — no cut marks on the package surface.</p>
<p><strong>Coating Options:</strong></p>
<ul><li>Standard: Polished bright surface, Ra ≤0.4 µm</li><li>TiN (Titanium Nitride) PVD coating: 2300 HV surface hardness, golden color, 3-5x life extension</li></ul>
<p><strong>Compatible Machines:</strong> Multivac R-series (R105, R145, R245, R535), Tiromat 3000/660, GEA PowerPak, Opack, Betapak, Alcan, Ulma TFS series, Variovac.</p>`,
  },
  'yarim': {
    name: 'Half Star Punches - Vacuum Packaging Triangle Blade',
    subtitle: 'D2 Tool Steel — Half Star Geometry',
    description: 'Half star (triangle) punch blades for vacuum packaging and thermoform machines. Compatible with Multivac, Tiromat, Opack, Betapak, GEA, Alcan, Ulma, Variovac. Made from D2 tool steel with high wear resistance. Titanium coating options available.',
    features: ['Half star geometry', 'D2 Tool Steel', 'High wear resistance', 'Titanium coating option', 'Precision punching', 'Long-lasting sharp edge', 'Food industry approved'],
    applications: ['Vacuum packaging', 'Thermoform packaging', 'Food industry punching', 'Meat and cheese packaging', 'Industrial packaging'],
    seo: {
      title: 'Half Star Punch Blade | Vacuum Packaging Triangle Punch D2 Steel',
      description: 'Half star triangle punch blades for vacuum packaging. D2 tool steel, Multivac, Tiromat, GEA compatible. Titanium coating option for extended life.',
      keywords: ['half star punch', 'triangle punch blade', 'vacuum packaging punch', 'thermoform punch', 'D2 tool steel punch', 'multivac punch', 'tiromat punch', 'food industry punch', 'meat packaging punch', 'cheese packaging punch', 'titanium coated punch', 'precision punch blade']
    },
    benefits: [
      { title: 'D2 Tool Steel', description: '12% chromium, 1.55% carbon — superior wear resistance and dimensional stability', icon: 'Shield' },
      { title: 'TiN Coating Option', description: '2300 HV surface, 40% friction reduction, 3-5x lifespan', icon: 'Diamond' },
      { title: 'Precision Geometry', description: 'Triangle form with optimal ventilation area to packaging integrity balance', icon: 'Star' },
    ],
    longDescription: `<p>Half star punch blades are used to create ventilation patterns on film in vacuum packaging. D2 tool steel (1.55% C, 12% Cr, 0.85% Mo, 0.9% V) offers both wear resistance and dimensional stability thanks to its high chromium content.</p>
<p><strong>Heat Treatment Parameters:</strong> 1020-1040°C austenite transformation → oil quenching → 200-250°C tempering. This 3-stage process achieves HRC 58-60 hardness with adequate toughness balance.</p>
<p><strong>Geometry:</strong> The triangle-shaped half star pattern creates optimal ventilation area in the film while maintaining package integrity. DIN 1.2379 equivalent material standard.</p>
<p><strong>Coating:</strong> TiN (Titanium Nitride) PVD coating increases surface hardness to 2300 HV, reduces friction by 40%, and extends blade life 3-5x.</p>`,
  },
  'tam': {
    name: 'Full Star Punches - Vacuum Packaging Star Blade',
    subtitle: 'D2 Tool Steel — Full Star Geometry',
    description: 'Full star punch blades for vacuum packaging and thermoform machines. Compatible with Multivac, Tiromat, Opack, Betapak, GEA, Alcan, Ulma, Variovac. Made from D2 tool steel with high wear resistance. Titanium coating options available.',
    features: ['Full star geometry', 'D2 Tool Steel', 'High wear resistance', 'Titanium coating option', 'Precision punching', 'Long-lasting sharp edge', 'Food industry approved'],
    applications: ['Vacuum packaging', 'Thermoform packaging', 'Food industry punching', 'Meat and cheese packaging', 'Industrial packaging'],
    seo: {
      title: 'Full Star Punch Blade | Vacuum Packaging Star Punch D2 Steel',
      description: 'Full star punch blades for vacuum packaging. D2 tool steel, Multivac, Tiromat, GEA compatible. Titanium coating option for extended life.',
      keywords: ['full star punch', 'star punch blade', 'vacuum packaging punch', 'thermoform punch', 'D2 tool steel punch', 'multivac star punch', 'tiromat star punch', 'food industry punch', 'meat packaging punch', 'titanium coated punch', 'precision star punch']
    },
    benefits: [
      { title: '2x Ventilation Area', description: 'Double the gas passage surface compared to half star', icon: 'Wind' },
      { title: 'D2 Steel Durability', description: 'DIN 1.2379, 12% chromium for superior wear and corrosion resistance', icon: 'Shield' },
      { title: 'TiN Coating Option', description: '2300 HV surface hardness, 3-5x life extension', icon: 'Diamond' },
    ],
    longDescription: `<p>Full star punch blades create 2x wider ventilation patterns in vacuum packaging compared to half star. Manufactured from D2 tool steel (1.55% C, 12% Cr, 0.85% Mo, 0.9% V).</p>
<p><strong>Advantage:</strong> In MAP (Modified Atmosphere Packaging) applications requiring rapid gas exchange, full star geometry accelerates gas transfer. Widely preferred in meat, cheese, and ready meal packaging.</p>
<p><strong>Material:</strong> DIN 1.2379 / AISI D2 — chromium-molybdenum-vanadium alloyed cold work tool steel. Stable HRC 58-60 hardness through secondary hardening effect.</p>
<p><strong>Compatible Machines:</strong> Multivac, Tiromat, GEA PowerPak, Opack, Betapak, Alcan, Ulma, Variovac, Sealpac.</p>`,
  },
  'dz-biaklar': {
    name: 'Straight Blades - Lama Blades for Vacuum Packaging',
    subtitle: 'HSS (M2) High Speed Steel — HRC 62-65',
    description: 'Straight (lama) blades for vacuum packaging and thermoform machines. Compatible with Multivac, Tiromat, Opack, Betapak, GEA, Alcan, Ulma, Variovac. Made from HSS (High Speed Steel), extremely durable, crush-resistant and stays sharp longer.',
    features: ['Straight edge geometry', 'HSS (High Speed Steel)', 'Extremely durable', 'Crush resistant', 'Stays sharp longer', 'Food industry approved'],
    applications: ['Vacuum packaging', 'Thermoform packaging', 'Food industry cutting', 'Film cutting', 'Industrial packaging'],
    seo: {
      title: 'Straight Lama Blade HSS | Vacuum Packaging Thermoform Blade',
      description: 'Straight lama blades for vacuum packaging. HSS high speed steel, Multivac, Tiromat, GEA compatible. Crush-resistant, stays sharp longer.',
      keywords: ['straight blade', 'lama blade', 'vacuum packaging blade', 'thermoform blade', 'HSS blade', 'high speed steel blade', 'multivac lama', 'tiromat lama', 'food industry blade', 'film cutting blade', 'crush resistant blade', 'durable blade']
    },
    benefits: [
      { title: 'HRC 62-65 Ultra Hardness', description: 'M2 HSS secondary hardening achieves the highest value among steels', icon: 'Shield' },
      { title: '600°C Thermal Stability', description: 'Red hardness — no hardness loss even in high-speed cutting', icon: 'Flame' },
      { title: 'Crush-Proof Structure', description: 'Vanadium carbide micro-structure provides 5x deformation resistance', icon: 'Zap' },
    ],
    longDescription: `<p>Straight (lama) blades are used in the film cutting line of thermoform and vacuum packaging machines. Manufactured from HSS M2 (DIN 1.3343 / AISI M2) high-speed steel.</p>
<p><strong>Alloy Composition:</strong> 0.85% C, 6.15% W, 5.0% Mo, 4.15% Cr, 1.85% V — this composition achieves HRC 62-65 hardness through secondary hardening while offering thermal stability up to 600°C.</p>
<p><strong>Advantages:</strong></p>
<ul><li>Extraordinary resistance to crushing — 5x deformation resistance compared to Sheffield steel</li><li>Red hardness: Maintains HRC 60+ even at 600°C</li><li>Vanadium carbide micro-structure: MC carbides form a natural barrier against wear</li></ul>
<p><strong>Compatible Machines:</strong> Multivac, Tiromat, Opack, Betapak, GEA, Alcan, Ulma, Variovac.</p>`,
  },
  'dairesel': {
    name: 'Circular Blades - Vacuum Packaging Rotary Blade',
    subtitle: 'Sheffield Steel — Rotary Cutting HRC 58-62',
    description: 'Circular rotary blades for vacuum packaging and thermoform machines. Compatible with Multivac, Tiromat, Opack, Betapak, GEA, Alcan, Ulma, Variovac. Sheffield steel quality.',
    features: ['Circular geometry', 'Sheffield steel', 'Rotary cutting compatible', 'Precision cutting', 'Long-lasting', 'Food industry approved'],
    applications: ['Vacuum packaging', 'Thermoform packaging', 'Rotary cutting', 'Food industry', 'Industrial packaging'],
    seo: {
      title: 'Circular Rotary Blade | Vacuum Packaging Thermoform Round Blade',
      description: 'Circular rotary blades for vacuum packaging. Sheffield steel, Multivac, Tiromat, GEA compatible. Precision rotary cutting for food industry.',
      keywords: ['circular blade', 'rotary blade', 'round blade', 'vacuum packaging rotary', 'thermoform rotary', 'sheffield rotary blade', 'multivac circular', 'tiromat circular', 'food industry rotary', 'precision rotary blade', 'industrial circular blade']
    },
    benefits: [
      { title: 'Dynamically Balanced', description: 'Vibration-free, burr-free cutting guaranteed at 3000+ RPM', icon: 'RotateCw' },
      { title: 'HRC 58-62 Hardness', description: 'Long-lasting sharp edge from Sheffield steel', icon: 'Shield' },
      { title: 'Re-Sharpening Service', description: '18-22° precision grinding with resharpening calibration service', icon: 'RefreshCw' },
    ],
    longDescription: `<p>Circular blades operate with a rotary cutting system in thermoform and vacuum packaging machines. CNC turned and ground from Sheffield high-carbon steel.</p>
<p><strong>Dynamic Balancing:</strong> Each circular blade is dynamically balanced to prevent vibration during high-speed rotation. This guarantees burr-free cutting even at 3000+ RPM.</p>
<p><strong>Sharpening:</strong> Edge angle formed with 18-22° precision grinding. Re-sharpening calibration service available.</p>
<p><strong>Compatible Machines:</strong> Multivac, Tiromat, GEA, Opack, Betapak, Alcan, Ulma, Variovac.</p>`,
  },
  'yuvarlak': {
    name: 'Round Air Punch - Vacuum Packaging Air Hole Blade',
    subtitle: '440C Martensitic Stainless Steel — Air Hole',
    description: 'Round air punch blades for vacuum packaging and thermoform machines. Air hole punching compatible with Multivac, Tiromat, Opack, Betapak, GEA, Alcan, Ulma, Variovac. Made from 440C stainless steel with high corrosion resistance, food-grade quality.',
    features: ['Round geometry', 'Air hole design', '440C Stainless Steel', 'High corrosion resistance', 'Precision punching', 'Food industry approved'],
    applications: ['Vacuum packaging ventilation', 'Thermoform packaging', 'Food industry punching', 'Air hole punching', 'Industrial packaging'],
    seo: {
      title: 'Round Air Punch Blade 440C | Vacuum Packaging Ventilation Hole',
      description: 'Round air punch blades for vacuum packaging ventilation. 440C stainless steel, Multivac, Tiromat, GEA compatible. Food-grade corrosion resistant.',
      keywords: ['round air punch', 'air hole punch', 'ventilation punch', 'vacuum packaging punch', 'thermoform punch', '440C stainless punch', 'multivac air punch', 'tiromat air punch', 'food industry punch', 'corrosion resistant punch', 'food grade punch']
    },
    benefits: [
      { title: '17% Chromium Corrosion Resistance', description: 'Full protection against rust in wet and salty food environments', icon: 'Droplet' },
      { title: 'HACCP Compliant Surface', description: 'Ra ≤0.3 µm electropolished food-grade hygiene', icon: 'CheckCircle' },
      { title: 'HRC 58-60 Hardness', description: 'Martensitic structure balances edge retention and corrosion resistance', icon: 'Shield' },
    ],
    longDescription: `<p>Round air punch blades create circular ventilation (vent) holes in vacuum packaging. Manufactured from AISI 440C (1.0% C, 17% Cr) martensitic stainless steel.</p>
<p><strong>Corrosion Resistance:</strong> 17% chromium content provides superior resistance to rust and pitting corrosion in wet food packaging environments. No performance loss even in salty environments (seafood packaging).</p>
<p><strong>Surface Treatment:</strong> Electropolished to Ra ≤0.3 µm roughness, food contact quality compliant with HACCP and FDA 21 CFR 175.300 standards.</p>
<p><strong>Compatible Machines:</strong> Multivac, Tiromat, GEA, Opack, Betapak, Alcan, Ulma, Variovac.</p>`,
  },
  'oval': {
    name: 'Oval Air Punch - Vacuum Packaging Air Hole Blade',
    subtitle: '440C Martensitic Stainless Steel — Oval Air Hole',
    description: 'Oval air punch blades for vacuum packaging and thermoform machines. Air hole punching compatible with Multivac, Tiromat, Opack, Betapak, GEA, Alcan, Ulma, Variovac. Made from 440C stainless steel with high corrosion resistance, food-grade quality.',
    features: ['Oval geometry', 'Air hole design', '440C Stainless Steel', 'High corrosion resistance', 'Precision punching', 'Food industry approved'],
    applications: ['Vacuum packaging ventilation', 'Thermoform packaging', 'Food industry punching', 'Air hole punching', 'Industrial packaging'],
    seo: {
      title: 'Oval Air Punch Blade 440C | Vacuum Packaging Ventilation Hole',
      description: 'Oval air punch blades for vacuum packaging ventilation. 440C stainless steel, Multivac, Tiromat, GEA compatible. Food-grade corrosion resistant.',
      keywords: ['oval air punch', 'oval hole punch', 'ventilation punch', 'vacuum packaging punch', 'thermoform punch', '440C stainless punch', 'multivac oval punch', 'tiromat oval punch', 'food industry punch', 'corrosion resistant punch', 'food grade punch']
    },
    benefits: [
      { title: '40% More Area', description: 'Oval geometry provides 40% more ventilation than round punch', icon: 'Wind' },
      { title: '440C Corrosion Resistance', description: '17% chromium, full protection in wet and salty environments', icon: 'Droplet' },
      { title: 'HACCP Compliant Surface', description: 'Ra ≤0.3 µm electropolished food-grade hygiene', icon: 'CheckCircle' },
    ],
    longDescription: `<p>Oval air punch blades create wider ventilation areas in elliptical profiles compared to round punches. Manufactured from the same AISI 440C (1.0% C, 17% Cr) martensitic stainless steel.</p>
<p><strong>Oval Advantage:</strong> Elliptical geometry provides 40% more gas passage surface in the same film area. This feature is preferred in MAP (Modified Atmosphere Packaging) requiring rapid gas exchange.</p>
<p><strong>440C Properties:</strong> 1.0% carbon + 17% chromium composition delivers both HRC 58-60 hardness and superior corrosion resistance in martensitic structure. Electropolished to Ra ≤0.3 µm food-grade surface.</p>
<p><strong>Compatible Machines:</strong> Multivac, Tiromat, GEA, Opack, Betapak, Alcan, Ulma, Variovac.</p>`,
  },
  'dili': {
    name: 'Serrated Blades - Vacuum Packaging Saw-Tooth Blade',
    subtitle: 'Sheffield Steel — Serrated Edge',
    description: 'Serrated (saw-tooth) cutting blades for vacuum packaging and thermoform machines. Compatible with Multivac, Tiromat, Opack, Betapak, GEA, Alcan, Ulma, Variovac. Sheffield steel, ideal for tough materials.',
    features: ['Saw-tooth edge', 'Sheffield steel', 'Ideal for tough materials', 'Anti-slip cutting', 'Long-lasting sharp edge', 'Food industry approved'],
    applications: ['Vacuum packaging', 'Thermoform packaging', 'Tough film cutting', 'Food industry', 'Industrial packaging'],
    seo: {
      title: 'Serrated Saw-Tooth Blade | Vacuum Packaging Tough Material Blade',
      description: 'Serrated saw-tooth blades for vacuum packaging. Sheffield steel, Multivac, Tiromat, GEA compatible. Anti-slip cutting for tough materials.',
      keywords: ['serrated blade', 'saw-tooth blade', 'vacuum packaging serrated', 'thermoform serrated', 'sheffield serrated blade', 'multivac serrated', 'tiromat serrated', 'tough material blade', 'anti-slip blade', 'food industry serrated', 'industrial serrated blade']
    },
    benefits: [
      { title: 'Anti-Slip Cutting', description: 'Micro-serrated tooth profile ensures safe cutting even on slippery materials', icon: 'Zap' },
      { title: '±0.02mm Tooth Precision', description: 'CNC-machined precision teeth for consistent edge quality', icon: 'Gauge' },
      { title: 'Multi-Material Compatible', description: 'Thick film, foil, rigid plastic, barrier film — one blade', icon: 'Layers' },
    ],
    longDescription: `<p>Serrated (saw-tooth) blades are used for thick films, aluminum foil laminates, and rigid thermoplastic packages where straight blades would slip.</p>
<p><strong>Tooth Geometry:</strong> The micro-serrated edge profile first pierces then cuts the material. This two-stage mechanism eliminates slip risk and creates a clean edge with every cut.</p>
<p><strong>Material:</strong> Sheffield high-carbon steel, HRC 58-62 hardness. Teeth are CNC-machined with precision, inter-tooth tolerance ±0.02mm.</p>
<p><strong>Ideal Use:</strong></p>
<ul><li>Thick PE/PP films (100+ micron)</li><li>Aluminum foil laminates</li><li>PET/PVC rigid packaging</li><li>Multi-layer barrier films</li></ul>
<p><strong>Compatible Machines:</strong> Multivac, Tiromat, GEA, Opack, Betapak, Alcan, Ulma, Variovac.</p>`,
  },
  'st': {
    name: 'Top "Plate" Blades',
    description: 'Top plate blades for machine cutting applications.',
    features: ['Plate design', 'Top mount', 'Industrial grade'],
    applications: ['Machine cutting', 'Industrial applications'],
  },
  'alt': {
    name: 'Bottom Blades',
    description: 'Bottom blades for machine cutting applications.',
    features: ['Bottom mount', 'Industrial grade'],
    applications: ['Machine cutting', 'Industrial applications'],
  },
  'pelet': {
    name: 'Pellet Blades',
    description: 'Pellet blades for pelletizing machines.',
    features: ['Pellet design', 'Industrial grade'],
    applications: ['Pelletizing', 'Granulating'],
  },
  'taneciklendirici': {
    name: 'Granulator Blade',
    description: 'Granulator blade for granulating machines.',
    features: ['Granulator design', 'Industrial grade'],
    applications: ['Granulating', 'Size reduction'],
  },
  'paralayici': {
    name: 'Shredder Blade',
    description: 'Shredder blade for industrial shredding applications.',
    features: ['Shredder design', 'Heavy duty', 'Industrial grade'],
    applications: ['Shredding', 'Material destruction'],
  },
  'oluklu': {
    name: 'Corrugated Cardboard Slitting Blades',
    description: 'Blades for slitting corrugated cardboard materials.',
    features: ['Corrugated compatible', 'Slitting design'],
    applications: ['Cardboard slitting', 'Packaging industry'],
  },
  'disiz': {
    name: 'Non-Serrated Rotary Cutting Blades',
    description: 'Smooth edge rotary cutting blades.',
    features: ['Smooth edge', 'Rotary design'],
    applications: ['Clean cuts', 'Rotary cutting'],
  },
  'dili-2': {
    name: 'Serrated Rotary Cutting Blades',
    description: 'Serrated rotary cutting blades for tough materials.',
    features: ['Serrated edge', 'Rotary design'],
    applications: ['Tough materials', 'Rotary cutting'],
  },
  'dili-3': {
    name: 'Serrated Blade',
    description: 'Serrated blade for industrial cutting.',
    features: ['Serrated edge', 'Industrial grade'],
    applications: ['Industrial cutting'],
  },
  'biak': {
    name: 'Blade Holder Apparatus',
    description: 'Blade holder apparatus for machine mounting.',
    features: ['Holder design', 'Machine compatible'],
    applications: ['Blade mounting', 'Machine setup'],
  },
  'dairesel-2': {
    name: 'Circular Crusher Blades',
    description: 'Circular crusher blades for crushing applications.',
    features: ['Crusher design', 'Circular', 'Heavy duty'],
    applications: ['Crushing', 'Industrial processing'],
  },
  'et': {
    name: 'Meat Opening (Derinder) Blade',
    description: 'Blade for meat skinning and derinding operations.',
    features: ['Derinder design', 'Food grade'],
    applications: ['Meat processing', 'Skinning'],
  },
  'log-saw': {
    name: 'Log-Saw Blades',
    description: 'Log-saw blades for paper and tissue log cutting.',
    features: ['Log-saw design', 'Precision cutting'],
    applications: ['Paper industry', 'Log cutting'],
  },
  'masura': {
    name: 'Core Cutting Blades',
    description: 'Blades for cutting paper and cardboard cores.',
    features: ['Core cutting design', 'Precision'],
    applications: ['Core cutting', 'Paper industry'],
  },
  'kutu': {
    name: 'Box Sealing Blades – Tape Cutting Blades',
    description: 'Blades for box sealing and tape cutting machines.',
    features: ['Box sealing compatible', 'Tape cutting'],
    applications: ['Packaging', 'Box sealing'],
  },
  'erit': {
    name: 'Band Blades',
    description: 'Band blades for continuous cutting applications.',
    features: ['Band design', 'Continuous cutting'],
    applications: ['Industrial cutting', 'Continuous operation'],
  },
  'tray': {
    name: 'Tray (Bowl) Mold Blades',
    description: 'Blades for tray and bowl mold cutting.',
    features: ['Mold compatible', 'Tray cutting'],
    applications: ['Tray cutting', 'Packaging industry'],
  },
  'sosis': {
    name: 'Sausage Stripping Blades',
    description: 'Blades for sausage casing stripping operations.',
    features: ['Stripping design', 'Food grade'],
    applications: ['Sausage processing', 'Food industry'],
  },

  // =============================================================================
  // İŞ GÜVENLİĞİ & EL BIÇAKLARI
  // =============================================================================
  'h014-001-x01': {
    name: 'RETRACTABLE TRIM KNIFE – Cast Metal Hand Knife',
    description: 'Retractable trim knife with cast metal body for professional use.',
    features: ['Retractable blade', 'Cast metal body', 'Professional grade'],
    applications: ['Trimming', 'General cutting', 'Industrial use'],
  },
  'h015-001-z01': {
    name: 'RETRO HEAVY DUTY – Cast Metal Hand Knife',
    description: 'Heavy duty cast metal hand knife for demanding applications.',
    features: ['Heavy duty', 'Cast metal body', 'Durable'],
    applications: ['Heavy cutting', 'Industrial use'],
  },
  'h016-001-j01': {
    name: 'SAFETY ROLL STRIPPER – Safety Hand Knife',
    description: 'Safety roll stripper knife for film and packaging removal.',
    features: ['Roll stripper', 'Safety design'],
    applications: ['Film removal', 'Packaging', 'Warehouse'],
  },
  'h016-101-a03': {
    name: 'SAFETY ROLL STRIPPER PLUS – Safety Hand Knife',
    description: 'Enhanced safety roll stripper with additional features.',
    features: ['Roll stripper', 'Enhanced safety', 'Plus features'],
    applications: ['Film removal', 'Packaging', 'Warehouse'],
  },
  'h016-201-a03': {
    name: 'ROLL STRIPPER HEAVY DUTY – Safety Hand Knife',
    description: 'Heavy duty roll stripper for demanding applications.',
    features: ['Heavy duty', 'Roll stripper', 'Industrial grade'],
    applications: ['Heavy duty stripping', 'Industrial use'],
  },
  'h020-001-s05': {
    name: 'FIXED SLIM KNIFE – Fixed Blade Hand Knife',
    description: 'Slim profile fixed blade knife for precision work.',
    features: ['Fixed blade', 'Slim profile', 'Precision'],
    applications: ['Precision cutting', 'Detail work'],
  },
  'h023-002-s05': {
    name: 'RETRACTABLE "SLIM" KNIFE – Cast Metal Hand Knife',
    description: 'Slim retractable knife with cast metal body.',
    features: ['Retractable', 'Slim design', 'Cast metal'],
    applications: ['General cutting', 'Office use'],
  },
  'h028-002-x01': {
    name: 'EASY CHANGE KNIFE – Cast Metal Hand Knife',
    description: 'Easy blade change knife with cast metal construction.',
    features: ['Easy change', 'Cast metal', 'Quick blade swap'],
    applications: ['High volume cutting', 'Industrial use'],
  },
  'h030-001-a03': {
    name: 'POLYTRIM – Safety Film Cutter',
    description: 'Safety film cutter designed for polytrim applications.',
    features: ['Film cutter', 'Safety design', 'Polytrim compatible'],
    applications: ['Film cutting', 'Packaging'],
  },
  'h032-001-a03': {
    name: 'SQUEEZE KNIFE – Auto-Retractable',
    description: 'Squeeze-activated auto-retractable safety knife.',
    features: ['Squeeze activation', 'Auto-retract', 'Safety'],
    applications: ['Warehouse', 'Logistics', 'Production'],
  },
  'h033-001-n03': {
    name: 'YELLOW/BLACK SLITTER – Ceramic Tip Safety Knife',
    description: 'Ceramic tip safety knife for safe slitting operations.',
    features: ['Ceramic tip', 'Safety design', 'Slitter'],
    applications: ['Safe cutting', 'Film slitting'],
  },
  'h041-004-a01': {
    name: 'GLASS SCRAPER BLADE – Cast Metal Hand Knife',
    description: 'Glass scraper blade for cleaning and scraping operations.',
    features: ['Scraper design', 'Glass safe', 'Cast metal'],
    applications: ['Glass cleaning', 'Scraping'],
  },
  'h063-001-x01': {
    name: 'ORANGE SPRING SAFETY CUTTER – Safety Hand Knife',
    description: 'Spring-loaded safety cutter with high visibility orange color.',
    features: ['Spring loaded', 'Safety design', 'High visibility'],
    applications: ['Safe cutting', 'Industrial use'],
  },
  'h081': {
    name: 'H081 - Ring Knife (Separate) – Orange',
    description: 'Ring-style finger knife in high visibility orange.',
    features: ['Ring design', 'Finger mounted', 'High visibility'],
    applications: ['Quick cuts', 'One-hand operation'],
  },
  'h501-001-t03': {
    name: 'UTILITY HAND KNIFE – Snap-Off',
    description: 'Snap-off utility knife for general use.',
    features: ['Snap-off blade', 'Utility design'],
    applications: ['General cutting', 'Office', 'Warehouse'],
  },
  'h502-001-t03': {
    name: 'UTILITY HAND KNIFE – Snap-Off',
    description: 'Snap-off utility knife for general use.',
    features: ['Snap-off blade', 'Utility design'],
    applications: ['General cutting', 'Office', 'Warehouse'],
  },
  'h503-001-t03': {
    name: 'UTILITY KNIFE – Snap-Off',
    description: 'Snap-off utility knife.',
    features: ['Snap-off blade', 'Utility design'],
    applications: ['General cutting'],
  },
  'h504-001-t03': {
    name: 'UTILITY HAND KNIFE – Snap-Off',
    description: 'Snap-off utility knife for general use.',
    features: ['Snap-off blade', 'Utility design'],
    applications: ['General cutting', 'Office', 'Warehouse'],
  },
  'h531-001-z01': {
    name: 'AUTOMATIC TRIMMING KNIFE – Cast Metal Hand Knife',
    description: 'Automatic trimming knife with cast metal construction.',
    features: ['Automatic', 'Trimming design', 'Cast metal'],
    applications: ['Trimming', 'Industrial use'],
  },
  'h600-001-t03': {
    name: '9mm UTILITY HAND KNIFE – Snap-Off',
    description: '9mm width snap-off utility knife.',
    features: ['9mm width', 'Snap-off', 'Compact'],
    applications: ['Precision cutting', 'Detail work'],
  },
  'h605-001-t03': {
    name: '9mm UTILITY HAND KNIFE – Snap-Off',
    description: '9mm width snap-off utility knife.',
    features: ['9mm width', 'Snap-off', 'Compact'],
    applications: ['Precision cutting', 'Detail work'],
  },
  'h907-003-t03b': {
    name: 'SUPASLIT – Protected Cap Slitter',
    description: 'Supaslit with protective cap for safe operation.',
    features: ['Protective cap', 'Slitter design', 'Safety'],
    applications: ['Safe slitting', 'Film cutting'],
  },
  'h907-012-a03': {
    name: 'HAND KNIFE – POLYSAFE PLUS FILM CUTTER',
    description: 'Polysafe Plus film cutter for safe film cutting.',
    features: ['Polysafe Plus', 'Film cutter', 'Safety'],
    applications: ['Film cutting', 'Packaging'],
  },
  'h913-008-t03': {
    name: 'POLYSLIT – Safety Hand Knife',
    description: 'Polyslit safety hand knife for protected cutting.',
    features: ['Polyslit design', 'Safety'],
    applications: ['Safe cutting', 'Industrial use'],
  },
  'h914-001-a03': {
    name: 'SPRINGER KNIFE – Metal Safety Hand Knife (Left Hand)',
    description: 'Left-hand spring-loaded safety knife.',
    features: ['Spring loaded', 'Left hand', 'Safety'],
    applications: ['Left hand users', 'Safe cutting'],
  },
  'h914-002-a03': {
    name: 'SPRINGER KNIFE – Metal Safety Hand Knife',
    description: 'Spring-loaded metal safety knife.',
    features: ['Spring loaded', 'Metal body', 'Safety'],
    applications: ['Safe cutting', 'Industrial use'],
  },
  'h917-001-t10': {
    name: 'FISH KNIFE – Sack Opening Hand Knife',
    description: 'Fish-shaped knife for opening sacks and bags.',
    features: ['Fish shape', 'Sack opener', 'Ergonomic'],
    applications: ['Sack opening', 'Bag opening'],
  },
  'h918-001-t10': {
    name: 'FISH KNIFE – Sack Opening Hand Knife',
    description: 'Fish-shaped knife for opening sacks and bags.',
    features: ['Fish shape', 'Sack opener', 'Ergonomic'],
    applications: ['Sack opening', 'Bag opening'],
  },
  'h944-001-t03': {
    name: 'AMBI SAFE SPRING – Safety Hand Knife',
    description: 'Ambidextrous spring-loaded safety knife.',
    features: ['Ambidextrous', 'Spring loaded', 'Safety'],
    applications: ['Safe cutting', 'Both hands'],
  },
  'h946-001': {
    name: 'U-CUT – Hook Type Hand Knife',
    description: 'U-shaped hook knife for specialized cutting.',
    features: ['Hook design', 'U-shape', 'Specialized'],
    applications: ['Hook cutting', 'Strapping'],
  },
  'is-guvenligi-muhafaza-atik-kutusu': {
    name: 'Safety Blade Disposal Container',
    description: 'Safe disposal container for used blades.',
    features: ['Safe disposal', 'Container', 'Safety'],
    applications: ['Blade disposal', 'Workplace safety'],
  },
  'olfa-sk-12': {
    name: 'OLFA SK-12 - Stainless NSF Certified Hand Knife',
    description: 'NSF certified stainless steel safety knife for food environments.',
    features: ['NSF certified', 'Stainless steel', 'Food safe'],
    applications: ['Food industry', 'Sanitary environments'],
  },
  'olfa-sk-15': {
    name: 'OLFA SK-15 - Safety Hand Knife',
    description: 'OLFA safety hand knife with enhanced protection.',
    features: ['Safety design', 'OLFA quality'],
    applications: ['Safe cutting', 'General use'],
  },
  'suka01': {
    name: 'SUKA01 - HAND KNIFE – Sliding Hook',
    description: 'Sliding hook hand knife for strapping and banding.',
    features: ['Sliding hook', 'Strapping design'],
    applications: ['Strapping', 'Banding', 'Warehouse'],
  },
  'p1-t': {
    name: 'Deburring / Hobby Hand Knife – Twist Screw',
    description: 'Twist screw deburring and hobby hand knife.',
    features: ['Twist screw mount', 'Precision'],
    applications: ['Deburring', 'Hobby work'],
  },
  'p2-a': {
    name: 'Deburring / Hobby Hand Knife – Allen Screw',
    description: 'Allen screw deburring and hobby hand knife, model 2.',
    features: ['Allen screw mount', 'Precision'],
    applications: ['Deburring', 'Hobby work'],
  },
  'p2-t': {
    name: 'Deburring / Hobby Hand Knife – Twist Screw',
    description: 'Twist screw deburring and hobby hand knife, model 2.',
    features: ['Twist screw mount', 'Precision'],
    applications: ['Deburring', 'Hobby work'],
  },
  'p9-ss': {
    name: 'Deburring / Hobby Hand Knife – 2x Slotted Screw',
    description: 'Deburring knife with dual slotted screw mount.',
    features: ['Dual mount', 'Precision'],
    applications: ['Deburring', 'Hobby work'],
  },
  'ws-1': {
    name: 'Deburring / Hobby Workstation',
    description: 'Complete deburring workstation for hobby and professional use.',
    features: ['Workstation', 'Complete set'],
    applications: ['Deburring', 'Professional hobby work'],
  },
  'f01': {
    name: 'Deburring Blade – Universal Type',
    description: 'Universal type deburring blade for general applications.',
    features: ['Universal', 'Deburring'],
    applications: ['Deburring', 'Edge finishing'],
  },
  'f21': {
    name: 'Deburring Blade – Short Type',
    description: 'Short type deburring blade for confined spaces.',
    features: ['Short type', 'Compact'],
    applications: ['Tight spaces', 'Deburring'],
  },
  'f22': {
    name: 'Deburring Blade – Durable Type',
    description: 'Durable type deburring blade for heavy use.',
    features: ['Durable', 'Heavy duty'],
    applications: ['Heavy deburring', 'Industrial use'],
  },
  'f03': {
    name: 'Deburring Blade – Pointed Type',
    description: 'Pointed type deburring blade for detail work.',
    features: ['Pointed tip', 'Detail work'],
    applications: ['Detailed deburring', 'Precision work'],
  },
  'f04': {
    name: 'Deburring Blade – Round Tip Type',
    description: 'Round tip deburring blade for safe operation.',
    features: ['Round tip', 'Safety'],
    applications: ['Safe deburring', 'General use'],
  },
  'g01': {
    name: 'Deburring Blade – Universal Type G',
    description: 'G-series universal deburring blade.',
    features: ['G-series', 'Universal'],
    applications: ['Deburring', 'General use'],
  },

  // =============================================================================
  // EKSİK ÜRÜNLER - İŞ GÜVENLİĞİ & OLFA
  // =============================================================================
  'h024': {
    name: 'H024 001 S05 – Metal Body Slim Knife',
    description: 'Metal body slim design hand knife for precision work.',
    features: ['Metal body', 'Slim design', 'Precision'],
    applications: ['Precision cutting', 'Detail work'],
  },
  'h040': {
    name: 'H040 004 L01 – Long Handle Safety Knife',
    description: 'Long handle safety knife for extended reach.',
    features: ['Long handle', 'Safety design'],
    applications: ['Extended reach', 'Safety cutting'],
  },
  'h042': {
    name: 'H042 001 A01 – Auto-Retract Safety Knife',
    description: 'Auto-retractable safety knife with A01 mechanism.',
    features: ['Auto-retract', 'Safety mechanism'],
    applications: ['Safe cutting', 'Industrial use'],
  },
  'h050': {
    name: 'H050 002 P02 – Precision Safety Knife',
    description: 'Precision safety knife model 050.',
    features: ['Precision', 'Safety'],
    applications: ['Precision work', 'Safe cutting'],
  },
  'h051': {
    name: 'H051 002 P02 – Precision Safety Knife',
    description: 'Precision safety knife model 051.',
    features: ['Precision', 'Safety'],
    applications: ['Precision work', 'Safe cutting'],
  },
  'h052': {
    name: 'H052 002 P02 – Precision Safety Knife',
    description: 'Precision safety knife model 052.',
    features: ['Precision', 'Safety'],
    applications: ['Precision work', 'Safe cutting'],
  },
  'h060': {
    name: 'H060 001 A03 – Auto-Retract Safety Knife',
    description: 'Auto-retractable safety knife with A03 mechanism.',
    features: ['Auto-retract', 'Safety mechanism'],
    applications: ['Safe cutting', 'Industrial use'],
  },
  'h090': {
    name: 'H090 001 S05 – Slim Safety Knife',
    description: 'Slim profile safety knife.',
    features: ['Slim profile', 'Safety'],
    applications: ['Detail work', 'Safe cutting'],
  },
  'h091': {
    name: 'H091 001 S05 – Slim Safety Knife',
    description: 'Slim profile safety knife model 091.',
    features: ['Slim profile', 'Safety'],
    applications: ['Detail work', 'Safe cutting'],
  },
  'h101': {
    name: 'H101 001 O01 / OLFA RTY-1/G – Rotary Cutter 28mm',
    description: 'OLFA 28mm rotary cutter for fabric and paper.',
    features: ['Rotary blade', 'OLFA quality', '28mm'],
    applications: ['Fabric cutting', 'Paper cutting', 'Quilting'],
  },
  'h102': {
    name: 'H102 001 O01 / RTY-2/G – Rotary Cutter 45mm',
    description: 'OLFA 45mm rotary cutter for fabric and paper.',
    features: ['Rotary blade', 'OLFA quality', '45mm'],
    applications: ['Fabric cutting', 'Paper cutting', 'Quilting'],
  },
  'h506': {
    name: 'H506 001 O01 / OLFA ML 18mm – Cast Metal Heavy Duty',
    description: 'OLFA 18mm heavy duty cast metal utility knife.',
    features: ['18mm blade', 'Cast metal', 'Heavy duty'],
    applications: ['Heavy cutting', 'Industrial use'],
  },
  'h507': {
    name: 'H507 001 O01 / OLFA NL-AL – Aluminum Heavy Duty',
    description: 'OLFA NL-AL aluminum body heavy duty knife.',
    features: ['Aluminum body', 'Heavy duty', 'OLFA quality'],
    applications: ['Heavy cutting', 'Professional use'],
  },
  'h508': {
    name: 'H508 001 O01 / OLFA L-2 – Heavy Duty Rubber Grip',
    description: 'OLFA L-2 heavy duty knife with rubber grip.',
    features: ['Rubber grip', 'Heavy duty', 'Comfort'],
    applications: ['Heavy cutting', 'Extended use'],
  },
  'h512': {
    name: 'H512 001 S04 – Snap-Off Utility Knife',
    description: 'Snap-off blade utility knife.',
    features: ['Snap-off', 'Utility'],
    applications: ['General cutting', 'Office use'],
  },
  'h525': {
    name: 'H525 001 Z01 – Die-Cast Metal Knife',
    description: 'Die-cast metal body utility knife.',
    features: ['Die-cast metal', 'Durable'],
    applications: ['Heavy use', 'Professional'],
  },
  'h603': {
    name: 'H603 001 O01 / OLFA ML 9mm – Cast Metal Compact',
    description: 'OLFA 9mm compact cast metal utility knife.',
    features: ['9mm blade', 'Compact', 'Cast metal'],
    applications: ['Precision work', 'Detail cutting'],
  },
  'h606': {
    name: 'H606 001 S04 – Compact Snap-Off Knife',
    description: 'Compact snap-off blade knife.',
    features: ['Compact', 'Snap-off'],
    applications: ['Detail work', 'Office use'],
  },
  'h907': {
    name: 'H907 003 T03 – Protected Cap Slitter',
    description: 'Protected cap film slitter.',
    features: ['Protective cap', 'Film slitter'],
    applications: ['Film cutting', 'Packaging'],
  },
  'h909': {
    name: 'H909 001 O01 / OLFA TK-1 – Pocket Touch Knife',
    description: 'OLFA TK-1 pocket touch knife, compact design.',
    features: ['Pocket size', 'Touch design', 'OLFA quality'],
    applications: ['Portable cutting', 'Quick tasks'],
  },
  'h911': {
    name: 'H911 002 O01 / OLFA MARU Cutter – Circle Cutter',
    description: 'OLFA MARU circle cutter for perfect circles.',
    features: ['Circle cutting', 'OLFA quality', 'Precision'],
    applications: ['Circle cutting', 'Crafts', 'Design'],
  },
  'h913': {
    name: 'H913 007 S02 – Safety Film Cutter',
    description: 'Safety film cutter for packaging.',
    features: ['Safety design', 'Film cutter'],
    applications: ['Film cutting', 'Packaging'],
  },
  'h915': {
    name: 'H915 003 A02 – Auto-Retract Film Cutter',
    description: 'Auto-retractable film cutter for safety.',
    features: ['Auto-retract', 'Film cutter', 'Safety'],
    applications: ['Film cutting', 'Safe operation'],
  },
  'h941': {
    name: 'H941 001 O01 / OLFA HOK-1 – Hook Blade Knife',
    description: 'OLFA HOK-1 hook blade knife for specialized cutting.',
    features: ['Hook blade', 'OLFA quality', 'Specialized'],
    applications: ['Hook cutting', 'Strapping'],
  },
  'kk01': {
    name: 'KK01 – Concealed Blade Safety Knife',
    description: 'Concealed blade safety knife for secure operation.',
    features: ['Concealed blade', 'Safety'],
    applications: ['Safe cutting', 'Warehouse'],
  },
  'sk01': {
    name: 'SK01 – Safety Knife',
    description: 'Standard safety knife.',
    features: ['Safety design'],
    applications: ['General safe cutting'],
  },
  'saka01t': {
    name: 'SAKA01T – Tape Dispenser Safety Knife',
    description: 'Safety knife with tape dispenser function.',
    features: ['Tape dispenser', 'Safety'],
    applications: ['Tape cutting', 'Packaging'],
  },
  'suka02': {
    name: 'SUKA02 – Safety Utility Knife',
    description: 'Safety utility knife for general use.',
    features: ['Safety', 'Utility'],
    applications: ['General cutting'],
  },
  'olfa': {
    name: 'OLFA PRC-3/C – Plastic Rotary Cutter',
    description: 'OLFA PRC-3/C plastic rotary cutter.',
    features: ['Rotary cutter', 'OLFA quality'],
    applications: ['Rotary cutting', 'Crafts'],
  },
  'olfa-2': {
    name: 'OLFA 12.5mm CS-5 – Compass Cutter',
    description: 'OLFA CS-5 compass cutter for circles.',
    features: ['Compass design', '12.5mm', 'Circle cutting'],
    applications: ['Circle cutting', 'Crafts'],
  },
  'olfa-3': {
    name: 'OLFA SK-10 – Safety Knife',
    description: 'OLFA SK-10 safety knife.',
    features: ['OLFA quality', 'Safety design'],
    applications: ['Safe cutting'],
  },
  'test': {
    name: 'Test Product',
    description: 'Test product for system validation.',
    features: ['Test'],
    applications: ['Testing'],
  },

  // =============================================================================
  // 3-HOLE SLITTING BLADES - NEW PRODUCT LINE (2026)
  // =============================================================================
  '3dj-karbon-celik': {
    name: '3-Hole Slitting Blade - Carbon Steel',
    description: 'Industrial-grade slitting blade with high carbon content (0.85-1.00% C). Unlike consumer razor blades, manufactured from special steel alloy with controlled atmosphere heat treatment (austenitizing + quenching + tempering) to achieve homogeneous martensitic microstructure. This process ensures the cutting edge is both hard and tough, preventing premature dulling and cracking. Our blades feature an optimum 22° sharpening angle for precision cutting. The reason market blades dull quickly: improper edge angles and inadequate heat treatment.',
    features: ['High carbon content (0.85-1.00%)', 'Martensitic microstructure', 'Optimum 22° edge angle', 'Precision heat treatment process', 'Industrial-grade durability', '3-5x longer life than razor blades'],
    applications: ['Textile cutting', 'Film and foil slitting', 'Paper cutting', 'Plastic slitting', 'Packaging cutting'],
    seo: {
      title: '3-Hole Slitting Blade Carbon Steel 43x22mm | Industrial Razor Blade',
      description: 'High carbon 3-hole slitting blade for BOPP film, textile, and packaging. SK5 steel, 22° edge angle, 3-5x longer life than razor blades. Sheffield quality.',
      keywords: ['3 hole blade', '3 hole slitting blade', 'carbon steel blade', 'industrial blade', 'industrial blade', 'slitting blade', 'slitting blade', 'three hole blade', '43x22 blade', '43x22mm blade', '43x22x0.10mm', '43x22x0.15mm', '43x22x0.20mm', '43x22x0.30mm', '43x22x0.40mm', 'textile blade', 'film cutting blade', 'paper cutting blade', 'packaging blade', 'high carbon blade', 'SK5 blade', 'industrial blade', 'professional blade', 'long lasting blade', 'sharp blade', 'slitter blade']
    },
  },
  '3dj-karbon-titanyum': {
    name: '3-Hole Slitting Blade - Carbon Steel + Titanium Coating',
    description: 'High carbon steel body with TiN (Titanium Nitride) coating. PVD (Physical Vapor Deposition) applied titanium nitride coating achieves 2300 HV hardness on the cutting surface. This gold-colored coating reduces friction coefficient by 40%, minimizing heat generation during cutting. Wear resistance increases 2-3x compared to uncoated version while maintaining edge sharpness longer. Superior performance for cutting adhesive tapes, laminations, and heat-sensitive materials.',
    features: ['TiN coating (2300 HV)', 'PVD application method', '40% reduced friction', 'Increased heat resistance', '2-3x longer life', 'Ideal for adhesive materials'],
    applications: ['Adhesive tape cutting', 'Lamination slitting', 'Heat-sensitive film cutting', 'Label cutting', 'Protective film slitting'],
    seo: {
      title: '3-Hole Blade TiN Titanium Coating | Gold Industrial Slitting Blade',
      description: 'TiN titanium coated 3-hole slitting blade, 2300 HV. 40% lower friction for adhesive tape, lamination, and heat-sensitive film cutting.',
      keywords: ['3 hole blade titanium', '3 hole slitting blade TiN', 'titanium coated blade', 'TiN coating blade', 'PVD coating blade', 'gold blade', 'adhesive tape blade', 'lamination blade', '43x22 titanium blade', 'film slitting blade', 'label cutting blade', 'industrial titanium blade', 'professional coated blade', 'long lasting titanium', 'slitting blade TiN']
    },
  },
  '3dj-paslanmaz-titanyum': {
    name: '3-Hole Slitting Blade - Stainless Steel + Titanium Coating',
    description: 'Stainless steel body with TiN (Titanium Nitride) coating. Stainless steel is preferred because its chromium oxide layer enhances titanium nitride coating adhesion. This metallurgical compatibility minimizes coating delamination risk, maintaining high performance throughout blade life. Coating adhesion is 25-30% stronger than carbon steel. The stainless substrate provides additional corrosion resistance for humid environments, food sector, and corrosive material applications.',
    features: ['Superior coating adhesion', 'Stainless substrate', 'Corrosion resistance', 'Humid environment compatible', 'Food sector safe', 'Long-lasting coating'],
    applications: ['Food packaging cutting', 'Humid environment applications', 'Hygienic cutting requirements', 'Lamination cutting', 'Film slitting'],
    seo: {
      title: '3-Hole Blade Stainless + Titanium | FDA Safe Food Industry Blade',
      description: '3-hole stainless steel + TiN coated blade with superior coating adhesion. Corrosion resistant for food packaging, pharmaceutical, and humid environment applications.',
      keywords: ['3 hole blade stainless titanium', 'stainless titanium coating blade', 'stainless TiN blade', 'food packaging blade', 'hygienic blade', 'FDA compliant blade', 'corrosion resistant blade', 'humid environment blade', '43x22 stainless TiN', 'food industry blade', 'pharmaceutical blade', 'dual protection blade']
    },
  },
  '3dj-paslanmaz-titanyum-cizikli': {
    name: '3-Hole Slitting Blade - Stainless Steel + Titanium Coating, Scored',
    description: 'Stainless steel + TiN coated blade with center score line for splitting. In some textile and packaging applications, half-length blades are used. The precision laser-etched center score line enables controlled splitting into two halves. This allows one blade to be used in two different machines or workstations. Score depth is calibrated to maintain structural integrity; no risk of accidental breakage during normal use.',
    features: ['Center-splittable design', 'Laser score line', 'Half-length usage option', 'Stainless + TiN coating', 'Economical usage', 'Dual machine compatible'],
    applications: ['Half-blade textile machines', 'Narrow cut applications', 'Multi-station systems', 'Packaging machines'],
    seo: {
      title: '3-Hole Blade Scored Splittable | Half-Blade Economical Design',
      description: '3-hole scored blade for splitting into halves. Laser etched center line, stainless + TiN coating. Economical for multi-station systems and textile machines.',
      keywords: ['3 hole blade scored', 'splittable blade', 'half blade', 'scored slitting blade', 'center score blade', 'economical blade', 'dual station blade', 'textile half blade', 'multi machine blade', 'stainless TiN scored', 'laser scored blade', 'breakable blade']
    },
  },
  '3dj-karbon-seramik': {
    name: '3-Hole Slitting Blade - Carbon Steel + Ceramic Coating',
    description: 'High carbon steel body with advanced ceramic coating. Titanium-based advanced ceramic coatings, dark gray/black in color, offer higher temperature resistance than standard titanium coating (up to 800°C). Heat generated during high-speed cutting operations does not degrade coating performance. Friction coefficient is significantly lower (50-60% reduction), providing advantage for cutting friction-sensitive materials. Superior oxidation resistance.',
    features: ['Advanced ceramic coating (3200+ HV)', '800°C temperature resistance', '50-60% friction reduction', 'High-speed compatible', 'Oxidation resistance', 'Superior performance'],
    applications: ['High-speed slitting', 'Heat-sensitive materials', 'Friction-critical applications', 'Extended cutting operations', 'Abrasive material cutting'],
    seo: {
      title: '3-Hole Blade Ceramic Coating 3200 HV | High-Speed Heat Resistant',
      description: '3-hole ceramic coated blade, 3200+ HV, 800°C resistance. 50-60% lower friction for high-speed slitting and abrasive material cutting.',
      keywords: ['3 hole blade ceramic', 'ceramic coated blade', 'high temperature blade', '800 degree blade', 'high speed blade', 'abrasive material blade', 'low friction blade', '3200 HV blade', 'oxidation resistant blade', 'heat resistant blade', 'industrial ceramic blade', 'advanced coating blade']
    },
  },
  '3dj-yekpare-tungsten': {
    name: '3-Hole Slitting Blade - Solid Tungsten Carbide',
    description: 'Solid tungsten carbide (WC-Co) alloy blade. Tungsten carbide particles are homogeneously distributed in cobalt matrix; this structure provides both extreme hardness and impact resistance. Hardness value HRA 89-92 (approximately HRC 72-76 equivalent) far exceeds steel blades. Offers 10-50x longer life than steel blades when cutting abrasive materials. Disadvantage: High brittleness requires careful handling—sensitive to impact and bending. Proper mounting and usage is critical.',
    features: ['Solid tungsten carbide', 'HRA 89-92 extreme hardness', '10-50x longer life', 'Abrasive material resistance', 'Fine grain structure', 'Premium grade'],
    applications: ['Abrasive material cutting', 'Fiberglass cutting', 'Carbon fiber slitting', 'Sandpaper cutting', 'Ceramic-coated materials'],
    seo: {
      title: '3-Hole Blade Tungsten Carbide | HRA 89-92 Ultra-Hard Blade',
      description: 'Solid tungsten carbide 3-hole blade, HRA 89-92, 10-50x longer life. For abrasive materials, fiberglass, carbon fiber, and sandpaper cutting.',
      keywords: ['3 hole blade tungsten', 'tungsten carbide blade', 'solid carbide blade', 'WC blade', 'HRA 92 blade', 'ultra hard blade', 'abrasive material blade', 'fiberglass blade', 'carbon fiber blade', 'sandpaper blade', 'ceramic paper blade', 'monolithic carbide blade', 'premium tungsten blade']
    },
  },
  '3dj-yekpare-seramik': {
    name: '3-Hole Slitting Blade - Solid Ceramic',
    description: 'Solid advanced ceramic material (Zirconium Oxide based) blade. This gray ceramic structure, being non-metallic, offers near-zero friction coefficient. Heat generation during cutting is minimal, eliminating deformation risk in heat-sensitive materials. Hardness value HV 1200-1400 far exceeds steel blades. Chemically inert structure allows safe use with reactive materials. Critical disadvantage: Extremely brittle—absolutely no tolerance for impact or bending.',
    features: ['Solid ceramic structure', 'Near-zero friction', 'Minimal heat generation', 'Chemically inert', 'HV 1200-1400 hardness', 'No metal contamination'],
    applications: ['Extremely heat-sensitive films', 'Food sector (metal detector compatible)', 'Reactive chemical materials', 'Clean room applications', 'Electronic component cutting'],
    seo: {
      title: '3-Hole Blade Zirconia Ceramic | Metal-Free Food Industry Blade',
      description: 'Solid zirconia ceramic 3-hole blade, HV 1200-1400, metal-free. Near-zero friction for food industry, cleanroom, and electronic component cutting.',
      keywords: ['3 hole blade ceramic', 'zirconia blade', 'solid ceramic blade', 'metal-free blade', 'food industry blade', 'cleanroom blade', 'electronic blade', 'chemical inert blade', 'heat sensitive blade', 'zero friction blade', 'non-conductive blade', 'biocompatible blade']
    },
  },
  '3dj-karbon-yuvarlak-kenar': {
    name: '3-Hole Slitting Blade - Carbon Steel, Round Edge',
    description: 'High carbon steel industrial blade with round edge profile similar to razor blades. Ergonomic design compatible with operators who have used razor blades for slitting operations for years. While featuring the round edge profile of razor blades, industrial-grade high carbon steel and optimized heat treatment provide much longer life than consumer razor blades. Ideal entry product for businesses transitioning to industrial blades.',
    features: ['Razor blade form factor', 'Round edge profile', 'Industrial-grade durability', 'Ideal for transition users', 'Ergonomic design', 'High carbon steel'],
    applications: ['Businesses transitioning from razor blades', 'Textile cutting', 'Film slitting', 'General purpose slitting'],
    seo: {
      title: '3-Hole Blade Round Edge | Razor Blade Form Industrial Grade',
      description: '3-hole round edge blade for operators transitioning from razor blades. Industrial-grade carbon steel, ergonomic razor blade form, longer life.',
      keywords: ['3 hole blade round edge', 'round edge blade', 'razor form blade', 'transition blade', 'ergonomic blade', 'textile blade', 'film slitting blade', 'industrial razor blade', 'carbon steel round', 'user friendly blade']
    },
  },
  '3dj-paslanmaz-titanyum-yuvarlak': {
    name: '3-Hole Slitting Blade - Stainless Steel + Titanium Coating, Round Edge',
    description: 'Stainless steel + TiN coated blade with razor blade-style round edge. Maintains familiar razor blade ergonomics while delivering superior performance of stainless steel substrate and titanium nitride coating. Corrosion resistance in humid environments, low friction from TiN coating, and ergonomic advantage of round edge—all in one product. Premium choice for businesses wanting to transition from razor blades to professional industrial blades.',
    features: ['Round edge + TiN coating', 'Stainless substrate', 'Corrosion resistance', 'Low friction', 'Razor blade ergonomics', 'Premium combination'],
    applications: ['Humid environment applications', 'Food sector transition users', 'Adhesive material cutting', 'Ergonomics-priority operations'],
    seo: {
      title: '3-Hole Blade Round Edge Stainless TiN | Premium Ergonomic Blade',
      description: '3-hole round edge blade with stainless + TiN coating. Premium ergonomic design for food sector, humid environments, and adhesive material cutting.',
      keywords: ['3 hole blade round edge TiN', 'round edge stainless blade', 'ergonomic TiN blade', 'food sector blade', 'humid environment blade', 'premium round edge', 'transition blade', 'corrosion resistant round', 'low friction round blade']
    },
  },
  '3dj-karbon-seramik-yuvarlak': {
    name: '3-Hole Slitting Blade - Carbon Steel + Ceramic Coating, Round Edge',
    description: 'Carbon steel + ceramic coated blade with razor blade-style round edge. Combines high temperature resistance (800°C) and low friction properties of ceramic coating with ergonomic advantage of round edge. Designed for operators working with heat-sensitive materials at high speed who are accustomed to razor blade form. Dark gray/black ceramic coating provides wear and oxidation resistance.',
    features: ['Round edge + ceramic coating', '800°C temperature resistance', 'Low friction', 'Razor blade ergonomics', 'Oxidation resistance', 'High-speed compatible'],
    applications: ['High-speed ergonomic cutting', 'Heat-sensitive materials', 'Premium segment transition users'],
    seo: {
      title: '3-Hole Blade Round Edge Ceramic | High-Speed Ergonomic Blade',
      description: '3-hole round edge ceramic coated blade, 800°C resistance. Ergonomic design for high-speed cutting of heat-sensitive materials.',
      keywords: ['3 hole blade round edge ceramic', 'round edge ceramic blade', 'ergonomic ceramic blade', 'high speed ergonomic blade', 'heat resistant round blade', 'premium ceramic round', 'transition user blade', '800 degree round blade']
    },
  },
  '3dj-paslanmaz-titanyum-60x22': {
    name: '3-Hole Slitting Blade - Stainless Steel + Titanium Coating, 60x22',
    description: '60x22mm large format, stainless steel + TiN coated blade. Offers longer cutting line than standard 43x22mm size. Preferred for cutting wide webs, multiple band slitting operations, and high-capacity machines. Corrosion resistance of stainless steel and low friction advantage of TiN coating maintained in large format. Means longer blade life and fewer blade changes. Available thicknesses: 0.15mm, 0.20mm, 0.30mm.',
    features: ['60x22mm large format', 'Extended cutting line', 'Stainless + TiN coating', 'For high-capacity machines', 'Fewer blade changes', 'Wide web compatible'],
    applications: ['Wide web slitting', 'Multiple band operations', 'High-capacity slitting machines', 'Industrial-scale production'],
    seo: {
      title: '3-Hole Blade 60x22mm Large Format | Wide Web Slitting Blade',
      description: '60x22mm large format 3-hole blade with stainless + TiN coating. Extended cutting line for wide web slitting and high-capacity machines.',
      keywords: ['3 hole blade 60x22', 'large format blade', '60x22 blade', 'wide web blade', 'high capacity blade', 'extended cutting blade', 'stainless TiN 60x22', 'industrial scale blade', 'multiple band blade', 'large slitting blade']
    },
  },
  '3dj-paslanmaz-titanyum-cizikli-60x22': {
    name: '3-Hole Slitting Blade - Stainless Steel + Titanium Coating, Scored, 60x22',
    description: '60x22mm large format, stainless steel + TiN coated, center-splittable scored blade. Combines large format advantages with scored design flexibility. When 60mm blade is split at center, two 30mm half blades are obtained. These halves can be used in different stations or machines requiring narrow cuts. Provides advantage for economical usage and inventory management. Available thicknesses: 0.15mm, 0.20mm, 0.30mm.',
    features: ['60x22mm large format', 'Center-splittable', '2x 30mm half blade option', 'Stainless + TiN coating', 'Flexible usage', 'Economical inventory management'],
    applications: ['Multi-machine systems', 'Different workstations', 'Economy-focused operations', 'Flexible production lines'],
    seo: {
      title: '3-Hole Blade 60x22mm Scored | Splittable Large Format Blade',
      description: '60x22mm scored 3-hole blade, splittable to 2x 30mm halves. Stainless + TiN coating for multi-machine systems and economical inventory management.',
      keywords: ['3 hole blade 60x22 scored', 'large format scored blade', '60x22 splittable blade', 'half blade system', 'economical blade', 'multi station blade', 'flexible production blade', 'inventory management blade', '30mm half blade', 'stainless TiN scored 60x22']
    },
  },

  // =============================================================================
  // BİSTÜRİ / NEŞTER JİLETLERİ — SCALPEL BLADES
  // =============================================================================
  'b301': {
    name: 'B301 - Scalpel Blade No.10',
    subtitle: 'Carbon Steel Surgical Blade No.10 — 41×8.3×0.40mm',
    description: 'Scalpel blade No.10 — 41×8.3×0.40mm. Curved cutting edge with unsharpened back edge. The most commonly used surgical blade profile for general surgery, abdominal operations, and skin/muscle incisions. #3 handle compatible (Bard-Parker fitment). Carbon steel, precision honed edge, non-sterile industrial grade. 100 pcs/box (20×5 strips). Swann Morton compatible.',
    shortDescription: 'Scalpel blade No.10, 41×8.3×0.40mm. Curved cutting edge. #3 handle. 100 pcs/box.',
    features: [
      'No.10 — the most widely used surgical blade profile',
      '41×8.3×0.40mm precision dimensions',
      'Curved cutting edge, unsharpened back edge',
      '#3 handle compatible (Bard-Parker fitment)',
      'Carbon steel, precision honed',
      'Non-sterile industrial grade',
      '100 pcs/box (20×5 strip packaging)',
    ],
    applications: ['General surgery', 'Histology laboratory', 'Pathology', 'Autopsy', 'Industrial precision cutting'],
    benefits: [
      { title: 'No.10 Universal Standard', description: 'The most commonly used scalpel blade worldwide — curved cutting edge for general incisions per BS 2982 & ISO 7740.', icon: 'Award' },
      { title: '#3 Handle Compatible', description: 'Bard-Parker #3 fitment ensures universal compatibility with standard surgical handles.', icon: 'Link' },
      { title: 'Precision Honed Edge', description: 'Carbon steel body heat-treated to HRC 55-58, precision honed for consistent cutting performance.', icon: 'Target' },
    ],
    longDescription: `<p>The B301 is a <strong>No.10 scalpel blade</strong> measuring 41×8.3×0.40mm, the most universally used surgical blade profile in the world. The curved cutting edge with unsharpened back edge is designed for making incisions in skin and muscle tissue.</p><h3>Technical Specifications</h3><ul><li>Blade number: No.10</li><li>Dimensions: 41×8.3×0.40mm</li><li>Material: Carbon steel, HRC 55-58</li><li>Handle: #3 compatible (Bard-Parker fitment)</li><li>Packaging: 100 pcs/box (20×5 strips), non-sterile</li><li>Standards: BS 2982, ISO 7740</li></ul><h3>Applications</h3><p>General surgery, abdominal operations, histology, pathology, autopsy, and industrial precision cutting. Swann Morton compatible form factor.</p>`,
    seo: {
      title: 'Scalpel Blade No.10 (B301) 41×8.3mm Carbon Steel | Surgical Blade #3 Handle',
      description: 'No.10 scalpel blade 41×8.3×0.40mm carbon steel, #3 handle compatible. BS 2982, ISO 7740. 100 pcs/box. For surgery, histology, pathology. Swann Morton compatible.',
      keywords: ['scalpel blade no 10', 'surgical blade no 10', 'carbon steel scalpel', '#10 blade', 'scalpel blade #3 handle', 'BS 2982 blade', 'ISO 7740', 'Swann Morton compatible', 'histology blade', 'pathology blade', 'autopsy blade', 'non sterile scalpel', 'surgical blade supplier', 'B301 scalpel', 'disposable scalpel blade'],
    },
  },
  'b302': {
    name: 'B302 - Scalpel Blade No.10A',
    subtitle: 'Carbon Steel Surgical Blade No.10A — 40×7.8×0.40mm',
    description: 'Scalpel blade No.10A — 40×7.8×0.40mm. Flat, wide-bellied profile — the straight version of No.10. Preferred in dermatology, plastic surgery, and tissue cutting applications. #3 handle compatible (Bard-Parker fitment). Carbon steel, precision honed edge, non-sterile industrial grade. 100 pcs/box (20×5 strips). Swann Morton compatible.',
    shortDescription: 'Scalpel blade No.10A, 40×7.8×0.40mm. Flat wide-bellied profile. #3 handle. 100 pcs/box.',
    features: [
      'No.10A — flat wide-bellied profile',
      '40×7.8×0.40mm precision dimensions',
      'Straight version of No.10',
      '#3 handle compatible (Bard-Parker fitment)',
      'Carbon steel, precision honed',
      'Non-sterile industrial grade',
      '100 pcs/box (20×5 strip packaging)',
    ],
    applications: ['Dermatology', 'Plastic surgery', 'Tissue cutting', 'Laboratory', 'Industrial precision cutting'],
    benefits: [
      { title: 'Flat Wide-Bellied Profile', description: 'Straight version of the No.10 — ideal for controlled, flat-plane incisions in dermatological procedures.', icon: 'Maximize' },
      { title: '#3 Handle Compatible', description: 'Bard-Parker #3 fitment ensures universal compatibility with standard surgical handles.', icon: 'Link' },
      { title: 'Industrial Non-Sterile Grade', description: '100 pcs/box bulk packaging for high-volume laboratory and industrial applications.', icon: 'Package' },
    ],
    longDescription: `<p>The B302 is a <strong>No.10A scalpel blade</strong> measuring 40×7.8×0.40mm. The flat, wide-bellied profile is the straight version of the classic No.10, offering a broader cutting surface for flat-plane incisions.</p><h3>Technical Specifications</h3><ul><li>Blade number: No.10A</li><li>Dimensions: 40×7.8×0.40mm</li><li>Material: Carbon steel, HRC 55-58</li><li>Handle: #3 compatible (Bard-Parker fitment)</li><li>Packaging: 100 pcs/box (20×5 strips), non-sterile</li><li>Standards: BS 2982, ISO 7740</li></ul><h3>Applications</h3><p>Dermatology, plastic surgery, tissue sectioning, laboratory dissection, and industrial applications requiring flat-plane precision cuts.</p>`,
    seo: {
      title: 'Scalpel Blade No.10A (B302) 40×7.8mm Carbon Steel | Flat Surgical Blade',
      description: 'No.10A scalpel blade 40×7.8×0.40mm, flat wide-bellied profile. Carbon steel, #3 handle. Dermatology, plastic surgery, tissue cutting. 100 pcs/box. BS 2982.',
      keywords: ['scalpel blade no 10A', 'surgical blade no 10A', '#10A blade', 'flat scalpel blade', 'dermatology blade', 'plastic surgery blade', 'tissue cutting blade', 'Swann Morton 10A', 'B302 scalpel', 'wide belly scalpel', 'non sterile scalpel 10A'],
    },
  },
  'b303': {
    name: 'B303 - Scalpel Blade No.11',
    subtitle: 'Carbon Steel Surgical Blade No.11 — 41×6.5×0.40mm',
    description: 'Scalpel blade No.11 — 41×6.5×0.40mm. Triangular profile with sharp pointed tip, flat cutting edge parallel to handle. Designed for precision stab incisions, puncture cuts, and stencil cutting. #3 handle compatible (Bard-Parker fitment). Carbon steel, precision honed edge, non-sterile industrial grade. 100 pcs/box (20×5 strips). Swann Morton compatible.',
    shortDescription: 'Scalpel blade No.11, 41×6.5×0.40mm. Triangular pointed tip. #3 handle. 100 pcs/box.',
    features: [
      'No.11 — triangular profile, sharp pointed tip',
      '41×6.5×0.40mm precision dimensions',
      'Flat cutting edge parallel to handle',
      '#3 handle compatible (Bard-Parker fitment)',
      'Carbon steel, precision honed',
      'Non-sterile industrial grade',
      '100 pcs/box (20×5 strip packaging)',
    ],
    applications: ['Precision stab incisions', 'Puncture cuts', 'Stencil cutting', 'Laboratory', 'Electronic component trimming'],
    benefits: [
      { title: 'Triangular Sharp Point', description: 'Precision triangular geometry for controlled stab incisions and fine puncture work per ISO 7740.', icon: 'Target' },
      { title: 'Versatile Profile', description: 'Used in both surgical (stab incisions) and industrial (stencil cutting, electronics) applications.', icon: 'Layers' },
      { title: '#3 Handle Compatible', description: 'Bard-Parker #3 fitment ensures universal compatibility with standard surgical handles.', icon: 'Link' },
    ],
    longDescription: `<p>The B303 is a <strong>No.11 scalpel blade</strong> measuring 41×6.5×0.40mm. The triangular profile with sharp pointed tip and flat cutting edge parallel to the handle makes it ideal for precision stab incisions and puncture cuts.</p><h3>Technical Specifications</h3><ul><li>Blade number: No.11</li><li>Dimensions: 41×6.5×0.40mm</li><li>Material: Carbon steel, HRC 55-58</li><li>Handle: #3 compatible (Bard-Parker fitment)</li><li>Packaging: 100 pcs/box (20×5 strips), non-sterile</li><li>Standards: BS 2982, ISO 7740</li></ul><h3>Applications</h3><p>Precision stab incisions, fine puncture work, stencil cutting, electronic component trimming, and laboratory dissection requiring sharp-angle cuts.</p>`,
    seo: {
      title: 'Scalpel Blade No.11 (B303) 41×6.5mm Carbon Steel | Pointed Surgical Blade',
      description: 'No.11 scalpel blade 41×6.5×0.40mm, triangular sharp tip. Carbon steel, #3 handle. Stab incisions, stencil cutting, laboratory. 100 pcs/box. BS 2982, ISO 7740.',
      keywords: ['scalpel blade no 11', 'surgical blade no 11', '#11 pointed blade', 'triangular scalpel', 'stab incision blade', 'stencil cutting blade', 'precision scalpel', 'Swann Morton 11', 'B303 scalpel', 'pointed surgical blade', 'laboratory scalpel 11'],
    },
  },
  'b304': {
    name: 'B304 - Scalpel Blade No.12',
    subtitle: 'Carbon Steel Surgical Blade No.12 — 37×11×0.40mm',
    description: 'Scalpel blade No.12 — 37×11×0.40mm. Small crescent/hook-shaped blade, sharpened on the inside edge of the curve. Used in ophthalmology, ENT (ear-nose-throat), and dental surgery. #3 handle compatible (Bard-Parker fitment). Carbon steel, precision honed edge, non-sterile industrial grade. 100 pcs/box (20×5 strips). Swann Morton compatible.',
    shortDescription: 'Scalpel blade No.12, 37×11×0.40mm. Crescent/hook shape, inside edge. #3 handle. 100 pcs/box.',
    features: [
      'No.12 — crescent/hook-shaped, inside edge sharpened',
      '37×11×0.40mm precision dimensions',
      'Curved inside edge cutting profile',
      '#3 handle compatible (Bard-Parker fitment)',
      'Carbon steel, precision honed',
      'Non-sterile industrial grade',
      '100 pcs/box (20×5 strip packaging)',
    ],
    applications: ['Ophthalmology', 'ENT (Ear-Nose-Throat)', 'Dental surgery', 'Laboratory', 'Precision detail cutting'],
    benefits: [
      { title: 'Crescent Hook Profile', description: 'Inside-edge sharpened crescent geometry for curved incisions in delicate surgical fields.', icon: 'Disc' },
      { title: 'Compact 37mm Form', description: 'Short 37mm length with 11mm width provides maximum control in confined surgical areas.', icon: 'Minimize' },
      { title: '#3 Handle Compatible', description: 'Bard-Parker #3 fitment ensures universal compatibility with standard surgical handles.', icon: 'Link' },
    ],
    longDescription: `<p>The B304 is a <strong>No.12 scalpel blade</strong> measuring 37×11×0.40mm. The small crescent/hook-shaped blade with inside edge sharpening is specifically designed for curved incisions in delicate surgical fields.</p><h3>Technical Specifications</h3><ul><li>Blade number: No.12</li><li>Dimensions: 37×11×0.40mm</li><li>Material: Carbon steel, HRC 55-58</li><li>Handle: #3 compatible (Bard-Parker fitment)</li><li>Packaging: 100 pcs/box (20×5 strips), non-sterile</li><li>Standards: BS 2982, ISO 7740</li></ul><h3>Applications</h3><p>Ophthalmology, ENT surgery, dental procedures, and laboratory applications requiring curved inside-edge incisions.</p>`,
    seo: {
      title: 'Scalpel Blade No.12 (B304) 37×11mm Carbon Steel | Hook Shaped Surgical Blade',
      description: 'No.12 scalpel blade 37×11×0.40mm, crescent hook shape. Carbon steel, #3 handle. Ophthalmology, ENT, dental surgery. 100 pcs/box. BS 2982, ISO 7740.',
      keywords: ['scalpel blade no 12', 'surgical blade no 12', '#12 hook blade', 'crescent scalpel', 'ophthalmology blade', 'ENT blade', 'dental surgery blade', 'Swann Morton 12', 'B304 scalpel', 'curved surgical blade', 'hook shaped blade'],
    },
  },
  'b305': {
    name: 'B305 - Scalpel Blade No.15',
    subtitle: 'Carbon Steel Surgical Blade No.15 — 37×6×0.40mm',
    description: 'Scalpel blade No.15 — 37×6×0.40mm. Smaller version of No.10 — the most popular blade for fine dissection. Preferred in delicate tissue cutting, dermatological procedures, and micro surgery. #3 handle compatible (Bard-Parker fitment). Carbon steel, precision honed edge, non-sterile industrial grade. 100 pcs/box (20×5 strips). Swann Morton compatible.',
    shortDescription: 'Scalpel blade No.15, 37×6×0.40mm. Small curved edge for fine dissection. #3 handle. 100 pcs/box.',
    features: [
      'No.15 — the most popular blade for fine dissection',
      '37×6×0.40mm compact dimensions',
      'Smaller version of No.10 — delicate tissue cutting',
      '#3 handle compatible (Bard-Parker fitment)',
      'Carbon steel, precision honed',
      'Non-sterile industrial grade',
      '100 pcs/box (20×5 strip packaging)',
    ],
    applications: ['Fine dissection', 'Dermatology', 'Micro surgery', 'Histology', 'Pathology laboratory'],
    benefits: [
      { title: 'Fine Dissection Standard', description: 'The most popular scalpel blade for delicate work — compact 37×6mm form for precise tissue manipulation.', icon: 'Target' },
      { title: 'Micro Control', description: 'Compact size delivers superior control for dermatological procedures and micro surgical applications.', icon: 'Minimize' },
      { title: '#3 Handle Compatible', description: 'Bard-Parker #3 fitment ensures universal compatibility with standard surgical handles.', icon: 'Link' },
    ],
    longDescription: `<p>The B305 is a <strong>No.15 scalpel blade</strong> measuring 37×6×0.40mm, the most popular scalpel blade for fine dissection worldwide. As a smaller version of the No.10, it provides superior control for delicate tissue cutting.</p><h3>Technical Specifications</h3><ul><li>Blade number: No.15</li><li>Dimensions: 37×6×0.40mm</li><li>Material: Carbon steel, HRC 55-58</li><li>Handle: #3 compatible (Bard-Parker fitment)</li><li>Packaging: 100 pcs/box (20×5 strips), non-sterile</li><li>Standards: BS 2982, ISO 7740</li></ul><h3>Applications</h3><p>Fine dissection, dermatological procedures, micro surgery, histology, pathology laboratory, and any application requiring precise, controlled incisions in delicate tissue.</p>`,
    seo: {
      title: 'Scalpel Blade No.15 (B305) 37×6mm Carbon Steel | Fine Dissection Blade',
      description: 'No.15 scalpel blade 37×6×0.40mm — the most popular fine dissection blade. Carbon steel, #3 handle. Dermatology, micro surgery, histology. 100 pcs/box. BS 2982.',
      keywords: ['scalpel blade no 15', 'surgical blade no 15', '#15 blade', 'fine dissection blade', 'dermatology scalpel', 'micro surgery blade', 'histology blade', 'Swann Morton 15', 'B305 scalpel', 'small scalpel blade', 'precision surgical blade'],
    },
  },
  'b306': {
    name: 'B306 - Scalpel Blade No.20',
    subtitle: 'Carbon Steel Surgical Blade No.20 — 45×9×0.40mm',
    description: 'Scalpel blade No.20 — 45×9×0.40mm. Larger version of No.10 with curved cutting edge and flat unsharpened back edge. Used in general surgery and orthopaedic surgery on larger tissue areas. #4 handle compatible (large Bard-Parker fitment). Carbon steel, precision honed edge, non-sterile industrial grade. 100 pcs/box (20×5 strips). Swann Morton compatible.',
    shortDescription: 'Scalpel blade No.20, 45×9×0.40mm. Large curved edge. #4 handle. 100 pcs/box.',
    features: [
      'No.20 — larger version of No.10 for #4 handle',
      '45×9×0.40mm dimensions',
      'Curved cutting edge, flat unsharpened back edge',
      '#4 handle compatible (large Bard-Parker fitment)',
      'Carbon steel, precision honed',
      'Non-sterile industrial grade',
      '100 pcs/box (20×5 strip packaging)',
    ],
    applications: ['General surgery', 'Orthopaedic surgery', 'Large tissue incision', 'Veterinary medicine', 'Industrial cutting'],
    benefits: [
      { title: 'Large #4 Handle Format', description: 'Larger version of No.10 on #4 handle — provides greater cutting surface for orthopaedic and general surgical procedures.', icon: 'Maximize' },
      { title: 'Curved Cutting Edge', description: 'Classic curved profile for controlled rocking-motion incisions through tissue and muscle.', icon: 'Activity' },
      { title: 'Multi-Sector Usage', description: 'Used across surgical, veterinary, and industrial sectors for standardized precision cutting.', icon: 'Layers' },
    ],
    longDescription: `<p>The B306 is a <strong>No.20 scalpel blade</strong> measuring 45×9×0.40mm, the larger version of the classic No.10 designed for #4 handle use. The curved cutting edge with flat unsharpened back edge is standard for general and orthopaedic surgery on larger tissue areas.</p><h3>Technical Specifications</h3><ul><li>Blade number: No.20</li><li>Dimensions: 45×9×0.40mm</li><li>Material: Carbon steel, HRC 55-58</li><li>Handle: #4 compatible (large Bard-Parker fitment)</li><li>Packaging: 100 pcs/box (20×5 strips), non-sterile</li><li>Standards: BS 2982, ISO 7740</li></ul><h3>Applications</h3><p>General surgery, orthopaedic procedures, veterinary medicine, and industrial precision cutting requiring larger blade format.</p>`,
    seo: {
      title: 'Scalpel Blade No.20 (B306) 45×9mm Carbon Steel | Large Surgical Blade #4 Handle',
      description: 'No.20 scalpel blade 45×9×0.40mm, large curved edge. Carbon steel, #4 handle. General surgery, orthopaedics, veterinary. 100 pcs/box. BS 2982, ISO 7740.',
      keywords: ['scalpel blade no 20', 'surgical blade no 20', '#20 blade', 'large scalpel blade', '#4 handle blade', 'orthopaedic blade', 'general surgery blade', 'Swann Morton 20', 'B306 scalpel', 'veterinary scalpel', 'large surgical blade'],
    },
  },
  'b307': {
    name: 'B307 - Scalpel Blade No.21',
    subtitle: 'Carbon Steel Surgical Blade No.21 — 53×10×0.40mm',
    description: 'Scalpel blade No.21 — 53×10×0.40mm. Large triangular profile with wide cutting surface similar to No.10 geometry. For wide-area surgery and large tissue incisions. #4 handle compatible (large Bard-Parker fitment). Carbon steel, precision honed edge, non-sterile industrial grade. 100 pcs/box (20×5 strips). Swann Morton compatible.',
    shortDescription: 'Scalpel blade No.21, 53×10×0.40mm. Large triangular profile. #4 handle. 100 pcs/box.',
    features: [
      'No.21 — large triangular profile, wide cutting surface',
      '53×10×0.40mm dimensions',
      'No.10-similar wide cutting geometry',
      '#4 handle compatible (large Bard-Parker fitment)',
      'Carbon steel, precision honed',
      'Non-sterile industrial grade',
      '100 pcs/box (20×5 strip packaging)',
    ],
    applications: ['Wide-area surgery', 'Large tissue incision', 'Veterinary medicine', 'Autopsy', 'Industrial cutting'],
    benefits: [
      { title: 'Wide Cutting Surface', description: '53×10mm dimensions provide the largest triangular cutting area in the #4 handle series.', icon: 'Maximize' },
      { title: 'Versatile Surgical Profile', description: 'Combines the curved cutting geometry of No.10 with the larger #4 handle format.', icon: 'Activity' },
      { title: '#4 Handle Compatible', description: 'Large Bard-Parker #4 fitment for stable, controlled incisions on larger tissue areas.', icon: 'Link' },
    ],
    longDescription: `<p>The B307 is a <strong>No.21 scalpel blade</strong> measuring 53×10×0.40mm. The large triangular profile with wide cutting surface provides extended cutting capability for general surgery on larger tissue areas.</p><h3>Technical Specifications</h3><ul><li>Blade number: No.21</li><li>Dimensions: 53×10×0.40mm</li><li>Material: Carbon steel, HRC 55-58</li><li>Handle: #4 compatible (large Bard-Parker fitment)</li><li>Packaging: 100 pcs/box (20×5 strips), non-sterile</li><li>Standards: BS 2982, ISO 7740</li></ul><h3>Applications</h3><p>Wide-area surgery, large tissue incisions, autopsy, veterinary medicine, and industrial applications requiring extended cutting surface.</p>`,
    seo: {
      title: 'Scalpel Blade No.21 (B307) 53×10mm Carbon Steel | Large Triangular Blade',
      description: 'No.21 scalpel blade 53×10×0.40mm, large triangular profile. Carbon steel, #4 handle. General surgery, autopsy, veterinary. 100 pcs/box. BS 2982.',
      keywords: ['scalpel blade no 21', 'surgical blade no 21', '#21 blade', 'large triangular scalpel', '#4 handle scalpel', 'autopsy blade', 'veterinary blade', 'Swann Morton 21', 'B307 scalpel', 'wide area surgical blade'],
    },
  },
  'b308': {
    name: 'B308 - Scalpel Blade No.22',
    subtitle: 'Carbon Steel Surgical Blade No.22 — 58×11.4×0.40mm',
    description: 'Scalpel blade No.22 — 58×11.4×0.40mm. Slightly larger version of No.20 with curved cutting edge and flat unsharpened back edge. Used for skin incisions in cardiac and thoracic surgery and to cut the bronchus in lung resection. #4 handle compatible (large Bard-Parker fitment). Carbon steel, precision honed edge, non-sterile industrial grade. 100 pcs/box (20×5 strips). Swann Morton compatible.',
    shortDescription: 'Scalpel blade No.22, 58×11.4×0.40mm. Curved edge for cardiac/thoracic. #4 handle. 100 pcs/box.',
    features: [
      'No.22 — widely used in cardiac and thoracic surgery',
      '58×11.4×0.40mm dimensions',
      'Slightly larger version of No.20',
      '#4 handle compatible (large Bard-Parker fitment)',
      'Carbon steel, precision honed',
      'Non-sterile industrial grade',
      '100 pcs/box (20×5 strip packaging)',
    ],
    applications: ['Cardiac surgery', 'Thoracic surgery', 'General surgery', 'Veterinary medicine', 'Industrial cutting'],
    benefits: [
      { title: 'Cardiac & Thoracic Standard', description: 'Standard blade for skin incisions in cardiac surgery and bronchus cutting in lung resection.', icon: 'Heart' },
      { title: 'Extended Cutting Edge', description: '58mm length provides an extended cutting line for long, controlled incisions.', icon: 'Maximize' },
      { title: '#4 Handle Compatible', description: 'Large Bard-Parker #4 fitment for stable handling during critical surgical procedures.', icon: 'Link' },
    ],
    longDescription: `<p>The B308 is a <strong>No.22 scalpel blade</strong> measuring 58×11.4×0.40mm, a slightly larger version of the No.20 designed for cardiac and thoracic surgical procedures. The curved cutting edge with flat unsharpened back provides long, controlled cutting capability.</p><h3>Technical Specifications</h3><ul><li>Blade number: No.22</li><li>Dimensions: 58×11.4×0.40mm</li><li>Material: Carbon steel, HRC 55-58</li><li>Handle: #4 compatible (large Bard-Parker fitment)</li><li>Packaging: 100 pcs/box (20×5 strips), non-sterile</li><li>Standards: BS 2982, ISO 7740</li></ul><h3>Applications</h3><p>Cardiac surgery (skin incisions), thoracic surgery (bronchus cutting in lung resection), general surgery, and veterinary medicine.</p>`,
    seo: {
      title: 'Scalpel Blade No.22 (B308) 58×11.4mm Carbon Steel | Cardiac Surgery Blade',
      description: 'No.22 scalpel blade 58×11.4×0.40mm for cardiac and thoracic surgery. Carbon steel, #4 handle. Lung resection, skin incisions. 100 pcs/box. BS 2982, ISO 7740.',
      keywords: ['scalpel blade no 22', 'surgical blade no 22', '#22 blade', 'cardiac surgery blade', 'thoracic blade', 'lung resection blade', '#4 handle scalpel', 'Swann Morton 22', 'B308 scalpel', 'large curved surgical blade'],
    },
  },
  'b309': {
    name: 'B309 - Scalpel Blade No.23',
    subtitle: 'Carbon Steel Surgical Blade No.23 — 51.5×10×4×0.40mm',
    description: 'Scalpel blade No.23 — 51.5×10×4×0.40mm. Leaf-shaped profile similar to No.22, designed for long incisions. #4 handle compatible (large Bard-Parker fitment). Carbon steel, precision honed edge, non-sterile industrial grade. 100 pcs/box (20×5 strips). Swann Morton compatible.',
    shortDescription: 'Scalpel blade No.23, 51.5×10×4×0.40mm. Leaf-shaped for long incisions. #4 handle. 100 pcs/box.',
    features: [
      'No.23 — leaf-shaped profile for long incisions',
      '51.5×10×4×0.40mm dimensions',
      'No.22-similar but leaf-form geometry',
      '#4 handle compatible (large Bard-Parker fitment)',
      'Carbon steel, precision honed',
      'Non-sterile industrial grade',
      '100 pcs/box (20×5 strip packaging)',
    ],
    applications: ['Long incisions', 'General surgery', 'Plastic surgery', 'Veterinary medicine', 'Industrial precision cutting'],
    benefits: [
      { title: 'Leaf-Shaped Precision', description: 'Unique leaf-shaped geometry provides optimal control for long, continuous incisions.', icon: 'Leaf' },
      { title: 'Long Incision Specialist', description: 'Specifically designed for extended linear incisions — wider cutting line than No.22.', icon: 'ArrowRight' },
      { title: '#4 Handle Compatible', description: 'Large Bard-Parker #4 fitment for stable handling during extended cutting procedures.', icon: 'Link' },
    ],
    longDescription: `<p>The B309 is a <strong>No.23 scalpel blade</strong> measuring 51.5×10×4×0.40mm. The leaf-shaped profile, similar to No.22 but with a distinctive form, is specifically designed for long incisions requiring continuous cutting capability.</p><h3>Technical Specifications</h3><ul><li>Blade number: No.23</li><li>Dimensions: 51.5×10×4×0.40mm</li><li>Material: Carbon steel, HRC 55-58</li><li>Handle: #4 compatible (large Bard-Parker fitment)</li><li>Packaging: 100 pcs/box (20×5 strips), non-sterile</li><li>Standards: BS 2982, ISO 7740</li></ul><h3>Applications</h3><p>Long surgical incisions, general surgery, plastic surgery, veterinary medicine, and industrial precision cutting.</p>`,
    seo: {
      title: 'Scalpel Blade No.23 (B309) 51.5×10mm Carbon Steel | Leaf-Shaped Surgical Blade',
      description: 'No.23 scalpel blade 51.5×10×4×0.40mm, leaf-shaped for long incisions. Carbon steel, #4 handle. General surgery, plastic surgery. 100 pcs/box. BS 2982.',
      keywords: ['scalpel blade no 23', 'surgical blade no 23', '#23 blade', 'leaf shaped scalpel', 'long incision blade', '#4 handle scalpel', 'Swann Morton 23', 'B309 scalpel', 'general surgery blade 23'],
    },
  },
  'b310': {
    name: 'B310 - Scalpel Blade No.24',
    subtitle: 'Carbon Steel Surgical Blade No.24 — 56×11.5×0.40mm',
    description: 'Scalpel blade No.24 — 56×11.5×0.40mm. Wide, flat blade with angled cutting edge. Designed for corner cuts, trimming, stripping, and cutting mats and gaskets. #4 handle compatible (large Bard-Parker fitment). Carbon steel, precision honed edge, non-sterile industrial grade. 100 pcs/box (20×5 strips). Swann Morton compatible.',
    shortDescription: 'Scalpel blade No.24, 56×11.5×0.40mm. Wide flat angled edge. #4 handle. 100 pcs/box.',
    features: [
      'No.24 — wide flat blade with angled cutting edge',
      '56×11.5×0.40mm dimensions',
      'Designed for corner cuts, trimming, and stripping',
      '#4 handle compatible (large Bard-Parker fitment)',
      'Carbon steel, precision honed',
      'Non-sterile industrial grade',
      '100 pcs/box (20×5 strip packaging)',
    ],
    applications: ['Corner cuts', 'Trimming and stripping', 'Gasket and mat cutting', 'Industrial cutting', 'Laboratory'],
    benefits: [
      { title: 'Angled Cutting Edge', description: 'Wide flat angled edge geometry excels in corner cuts, trimming, and gasket cutting operations.', icon: 'CornerDownRight' },
      { title: 'Industrial Versatility', description: 'Equally effective in laboratory dissection and industrial mat/gasket cutting applications.', icon: 'Layers' },
      { title: '#4 Handle Compatible', description: 'Large Bard-Parker #4 fitment provides stable handling for angle-critical cutting tasks.', icon: 'Link' },
    ],
    longDescription: `<p>The B310 is a <strong>No.24 scalpel blade</strong> measuring 56×11.5×0.40mm. The wide, flat blade with angled cutting edge is specifically designed for corner cuts, trimming, stripping, and cutting mats and gaskets.</p><h3>Technical Specifications</h3><ul><li>Blade number: No.24</li><li>Dimensions: 56×11.5×0.40mm</li><li>Material: Carbon steel, HRC 55-58</li><li>Handle: #4 compatible (large Bard-Parker fitment)</li><li>Packaging: 100 pcs/box (20×5 strips), non-sterile</li><li>Standards: BS 2982, ISO 7740</li></ul><h3>Applications</h3><p>Corner cuts, trimming, stripping, mat and gasket cutting, and laboratory applications requiring angled cutting operations.</p>`,
    seo: {
      title: 'Scalpel Blade No.24 (B310) 56×11.5mm Carbon Steel | Angled Cutting Blade',
      description: 'No.24 scalpel blade 56×11.5×0.40mm, wide flat angled edge. Carbon steel, #4 handle. Corner cuts, trimming, gasket cutting. 100 pcs/box. BS 2982.',
      keywords: ['scalpel blade no 24', 'surgical blade no 24', '#24 blade', 'angled scalpel blade', 'trimming blade', 'gasket cutting blade', 'mat cutting blade', 'Swann Morton 24', 'B310 scalpel', 'corner cutting blade'],
    },
  },
  'b311': {
    name: 'B311 - Scalpel Blade No.25',
    subtitle: 'Carbon Steel Surgical Blade No.25 — 56×11.5×0.40mm',
    description: 'Scalpel blade No.25 — 56×11.5×0.40mm. Front-facing straight blade with flat back profile. General purpose blade for surgery and laboratory work. #4 handle compatible (large Bard-Parker fitment). Carbon steel, precision honed edge, non-sterile industrial grade. 100 pcs/box (20×5 strips). Swann Morton compatible.',
    shortDescription: 'Scalpel blade No.25, 56×11.5×0.40mm. Straight front-facing blade. #4 handle. 100 pcs/box.',
    features: [
      'No.25 — front-facing straight blade, flat back',
      '56×11.5×0.40mm dimensions',
      'General purpose — surgery and laboratory',
      '#4 handle compatible (large Bard-Parker fitment)',
      'Carbon steel, precision honed',
      'Non-sterile industrial grade',
      '100 pcs/box (20×5 strip packaging)',
    ],
    applications: ['General surgery', 'Laboratory work', 'Histology', 'Pathology', 'Industrial cutting'],
    benefits: [
      { title: 'Straight Front Edge', description: 'Front-facing straight blade with flat back — versatile profile for general-purpose surgical and laboratory use.', icon: 'ArrowUp' },
      { title: 'Multi-Purpose Design', description: 'Equally effective in surgical, histological, pathological, and industrial applications.', icon: 'Layers' },
      { title: '#4 Handle Compatible', description: 'Large Bard-Parker #4 fitment for stable handling across diverse cutting applications.', icon: 'Link' },
    ],
    longDescription: `<p>The B311 is a <strong>No.25 scalpel blade</strong> measuring 56×11.5×0.40mm. The front-facing straight blade with flat back profile provides a versatile multi-purpose cutting tool for both surgical and laboratory applications.</p><h3>Technical Specifications</h3><ul><li>Blade number: No.25</li><li>Dimensions: 56×11.5×0.40mm</li><li>Material: Carbon steel, HRC 55-58</li><li>Handle: #4 compatible (large Bard-Parker fitment)</li><li>Packaging: 100 pcs/box (20×5 strips), non-sterile</li><li>Standards: BS 2982, ISO 7740</li></ul><h3>Applications</h3><p>General surgery, laboratory dissection, histology, pathology, and industrial cutting requiring straight-edge precision.</p>`,
    seo: {
      title: 'Scalpel Blade No.25 (B311) 56×11.5mm Carbon Steel | Straight Surgical Blade',
      description: 'No.25 scalpel blade 56×11.5×0.40mm, front-facing straight blade. Carbon steel, #4 handle. General surgery, histology, laboratory. 100 pcs/box. BS 2982.',
      keywords: ['scalpel blade no 25', 'surgical blade no 25', '#25 blade', 'straight scalpel blade', 'general purpose scalpel', 'laboratory blade', 'histology blade 25', 'Swann Morton 25', 'B311 scalpel', 'front facing scalpel blade'],
    },
  },
  'b312': {
    name: 'B312 - Scalpel Blade No.26',
    subtitle: 'Carbon Steel Surgical Blade No.26 — 57×10×0.40mm',
    description: 'Scalpel blade No.26 — 57×10×0.40mm. Triangular straight blade with flat back edge taking a downwards angle. Designed for trimming and fine detail work. #4 handle compatible (large Bard-Parker fitment). Carbon steel, precision honed edge, non-sterile industrial grade. 100 pcs/box (20×5 strips). Swann Morton compatible.',
    shortDescription: 'Scalpel blade No.26, 57×10×0.40mm. Triangular, downward angle. #4 handle. 100 pcs/box.',
    features: [
      'No.26 — triangular straight blade, downward angled back',
      '57×10×0.40mm dimensions',
      'Designed for trimming and fine detail work',
      '#4 handle compatible (large Bard-Parker fitment)',
      'Carbon steel, precision honed',
      'Non-sterile industrial grade',
      '100 pcs/box (20×5 strip packaging)',
    ],
    applications: ['Trimming', 'Fine detail cutting', 'Laboratory', 'Histopathology', 'Industrial precision cutting'],
    benefits: [
      { title: 'Downward Angled Profile', description: 'Triangular blade with downward-angled back edge provides precise control for trimming and detail work.', icon: 'TrendingDown' },
      { title: 'Fine Detail Specialist', description: '57×10mm dimensions with triangular geometry excel in histopathology and precision trimming.', icon: 'Target' },
      { title: '#4 Handle Compatible', description: 'Large Bard-Parker #4 fitment for controlled handling in detail-critical operations.', icon: 'Link' },
    ],
    longDescription: `<p>The B312 is a <strong>No.26 scalpel blade</strong> measuring 57×10×0.40mm. The triangular straight blade with flat back edge taking a downwards angle is specifically designed for trimming and fine detail work.</p><h3>Technical Specifications</h3><ul><li>Blade number: No.26</li><li>Dimensions: 57×10×0.40mm</li><li>Material: Carbon steel, HRC 55-58</li><li>Handle: #4 compatible (large Bard-Parker fitment)</li><li>Packaging: 100 pcs/box (20×5 strips), non-sterile</li><li>Standards: BS 2982, ISO 7740</li></ul><h3>Applications</h3><p>Trimming, fine detail cutting, histopathology, laboratory dissection, and industrial precision cutting requiring controlled angled cuts.</p>`,
    seo: {
      title: 'Scalpel Blade No.26 (B312) 57×10mm Carbon Steel | Detail Trimming Blade',
      description: 'No.26 scalpel blade 57×10×0.40mm, triangular downward-angle profile. Carbon steel, #4 handle. Trimming, histopathology, detail cutting. 100 pcs/box. BS 2982.',
      keywords: ['scalpel blade no 26', 'surgical blade no 26', '#26 blade', 'triangular scalpel', 'trimming blade 26', 'detail cutting blade', 'histopathology blade', 'Swann Morton 26', 'B312 scalpel', 'angled surgical blade'],
    },
  },
  'b313': {
    name: 'B313 - Scalpel Blade No.27',
    subtitle: 'Carbon Steel Surgical Blade No.27 — 60×13.3×0.40mm',
    description: 'Scalpel blade No.27 — 60×13.3×0.40mm. Broad blade profile — the widest scalpel blade in the series. Used in general surgery, histology, and large tissue sectioning. #4 handle compatible (large Bard-Parker fitment). Carbon steel, precision honed edge, non-sterile industrial grade. 100 pcs/box (20×5 strips). Swann Morton compatible.',
    shortDescription: 'Scalpel blade No.27, 60×13.3×0.40mm. Broadest blade in series. #4 handle. 100 pcs/box.',
    features: [
      'No.27 — the widest scalpel blade in the series',
      '60×13.3×0.40mm dimensions',
      'Broad blade profile for large tissue sectioning',
      '#4 handle compatible (large Bard-Parker fitment)',
      'Carbon steel, precision honed',
      'Non-sterile industrial grade',
      '100 pcs/box (20×5 strip packaging)',
    ],
    applications: ['General surgery', 'Histology', 'Large tissue sectioning', 'Veterinary medicine', 'Industrial cutting'],
    benefits: [
      { title: 'Broadest Blade Profile', description: '60×13.3mm — the widest scalpel blade in the series. Maximum cutting surface for large tissue sectioning.', icon: 'Maximize' },
      { title: 'Histology Standard', description: 'Broad profile preferred in histology laboratories for large tissue sections and specimen preparation.', icon: 'FileText' },
      { title: '#4 Handle Compatible', description: 'Large Bard-Parker #4 fitment provides stable handling for wide-area cutting operations.', icon: 'Link' },
    ],
    longDescription: `<p>The B313 is a <strong>No.27 scalpel blade</strong> measuring 60×13.3×0.40mm, the widest scalpel blade in the entire series. The broad blade profile provides the maximum cutting surface area for large tissue sectioning operations.</p><h3>Technical Specifications</h3><ul><li>Blade number: No.27</li><li>Dimensions: 60×13.3×0.40mm</li><li>Material: Carbon steel, HRC 55-58</li><li>Handle: #4 compatible (large Bard-Parker fitment)</li><li>Packaging: 100 pcs/box (20×5 strips), non-sterile</li><li>Standards: BS 2982, ISO 7740</li></ul><h3>Applications</h3><p>General surgery, histology, large tissue sectioning, veterinary medicine, and industrial applications requiring the widest cutting surface.</p>`,
    seo: {
      title: 'Scalpel Blade No.27 (B313) 60×13.3mm Carbon Steel | Broadest Surgical Blade',
      description: 'No.27 scalpel blade 60×13.3×0.40mm — the widest blade in the series. Carbon steel, #4 handle. Histology, general surgery, large tissue. 100 pcs/box. BS 2982.',
      keywords: ['scalpel blade no 27', 'surgical blade no 27', '#27 blade', 'broad scalpel blade', 'histology blade 27', 'large tissue blade', 'widest scalpel', 'Swann Morton 27', 'B313 scalpel', 'specimen preparation blade'],
    },
  },

  // =============================================
  // CHOPPED FIBER BLADES — B644 (MARK IV)
  // =============================================

  'b644-paslanmaz': {
    name: 'Fiber Blade (Mark IV) – Stainless Steel',
    subtitle: 'Stainless Steel — 74.5×15.6×0.88mm',
    description: 'Stainless steel fiber blade for Mark IV fiber cutting machines. 74.5×15.6×0.88mm dimensions, providing high-performance cutting on chopped fiber production lines. Long-lasting, corrosion-resistant construction for synthetic and natural fiber cutting.',
    shortDescription: 'Fiber blade for Mark IV machines. 74.5×15.6×0.88mm, stainless steel, corrosion-resistant.',
    features: ['Fully compatible with Mark IV fiber cutting machines', '74.5×15.6×0.88mm precision dimensions', 'Stainless steel — corrosion-resistant', 'Optimized cutting edge for chopped fiber production', 'Long service life'],
    applications: ['Chopped fiber production', 'Synthetic fiber cutting', 'Textile fiber cutting', 'Industrial fiber processing'],
    benefits: [
      { title: 'Corrosion-Resistant Build', description: 'Stainless steel construction resists corrosion in humid production environments, maintaining blade integrity over extended runs.', icon: 'Shield' },
      { title: 'Precision Mark IV Fit', description: 'Manufactured to 74.5×15.6×0.88mm tolerance for direct drop-in replacement on Mark IV fiber cutting machines.', icon: 'Settings' },
      { title: 'Cost-Effective Performance', description: 'Optimal performance-to-cost ratio for standard chopped fiber production — polyester, nylon, viscose, and polypropylene.', icon: 'DollarSign' },
    ],
    longDescription: `<p>The B644 stainless steel fiber blade is a <strong>direct replacement blade for Mark IV chopped fiber cutting machines</strong>, measuring 74.5×15.6×0.88mm. Stainless steel construction provides corrosion resistance in humid production environments.</p><h3>Technical Specifications</h3><ul><li>Dimensions: 74.5×15.6×0.88mm</li><li>Material: Stainless Steel</li><li>Machine Compatibility: Mark IV Fiber Cutting Machine</li></ul><h3>Applications</h3><p>Standard chopped fiber production lines processing polyester, nylon, polypropylene, viscose, and other synthetic and natural fibers. Suitable for glass fiber and textile fiber cutting under normal production conditions.</p>`,
    seo: {
      title: 'Fiber Blade Mark IV Stainless Steel 74.5×15.6mm | Chopped Fiber Blade',
      description: 'Stainless steel fiber blade for Mark IV fiber cutting machines. 74.5×15.6×0.88mm. Corrosion-resistant, long service life. Chopped fiber production.',
      keywords: ['fiber blade mark iv', 'chopped fiber blade', 'fiber cutting blade stainless steel', 'mark iv blade 74.5mm', 'fiber blade stainless', 'chopped fiber cutter', 'mark iv fiber cutting machine blade', 'B644 fiber blade', 'stainless steel chopped fiber', 'polyester fiber blade', 'fiber blade manufacturer', 'fiber blade supplier'],
    },
  },
  'b644-tin-kaplama': {
    name: 'Fiber Blade (Mark IV) – Stainless Steel + TiN Coating',
    subtitle: 'Stainless Steel + TiN Coating — 74.5×15.6×0.88mm',
    description: 'TiN (Titanium Nitride) coated stainless steel fiber blade for Mark IV fiber cutting machines. 74.5×15.6×0.88mm. TiN coating increases surface hardness, extending blade life 2-3 times. Superior performance on abrasive fiber types.',
    shortDescription: 'TiN coated fiber blade for Mark IV machines. 74.5×15.6×0.88mm, 2-3x longer life.',
    features: ['Fully compatible with Mark IV fiber cutting machines', '74.5×15.6×0.88mm precision dimensions', 'TiN coating — 2-3x extended service life', 'Superior performance on abrasive fibers', 'High surface hardness'],
    applications: ['Chopped fiber production', 'Abrasive synthetic fiber cutting', 'Fiberglass cutting', 'High-volume fiber production lines'],
    benefits: [
      { title: 'TiN Surface Hardness', description: 'Titanium Nitride coating increases surface hardness to ~2300 HV, extending blade life 2-3 times versus uncoated steel.', icon: 'Award' },
      { title: 'Reduced Friction & Heat', description: 'TiN coating lowers friction coefficient, reducing heat buildup during high-speed fiber cutting operations.', icon: 'Zap' },
      { title: 'Direct Mark IV Replacement', description: 'Precision 74.5×15.6×0.88mm fitment ensures drop-in installation on Mark IV fiber cutting machines.', icon: 'Settings' },
    ],
    longDescription: `<p>The B644 TiN coated fiber blade is a <strong>premium replacement blade for Mark IV chopped fiber cutting machines</strong>, measuring 74.5×15.6×0.88mm. The Titanium Nitride (TiN) coating multiplies wear resistance, extending service life 2-3 times.</p><h3>Technical Specifications</h3><ul><li>Dimensions: 74.5×15.6×0.88mm</li><li>Material: Stainless Steel + TiN Coating</li><li>Coating: TiN (Titanium Nitride) — ~2300 HV surface hardness</li><li>Machine Compatibility: Mark IV Fiber Cutting Machine</li></ul><h3>Applications</h3><p>High-volume chopped fiber production lines, particularly for abrasive fiber types including fiberglass, aramid, and carbon fiber. The TiN coating reduces blade changes, improving line uptime.</p>`,
    seo: {
      title: 'Fiber Blade Mark IV TiN Coated 74.5×15.6mm | Chopped Fiber Blade',
      description: 'TiN coated stainless steel fiber blade for Mark IV machines. 74.5×15.6×0.88mm. 2-3x longer life. Fiberglass and abrasive fiber cutting.',
      keywords: ['fiber blade tin coated', 'tin coating fiber blade', 'mark iv fiber blade', 'chopped fiber blade tin', 'titanium nitride blade', 'abrasive fiber blade', 'B644 tin fiber blade', 'mark iv tin coated blade', 'fiberglass cutting blade tin', 'fiber blade 2x life', 'tin coated chopped fiber', 'fiber blade manufacturer'],
    },
  },
  'b644-yekpare-tungsten': {
    name: 'Fiber Blade (Mark IV) – Solid Tungsten Carbide',
    subtitle: 'Solid Tungsten Carbide — 74.5×15.5×0.90mm',
    description: 'Solid tungsten carbide fiber blade for Mark IV fiber cutting machines. 74.5×15.5×0.90mm. The superior hardness and wear resistance of tungsten carbide delivers exceptional service life in the most demanding fiber cutting applications.',
    shortDescription: 'Solid tungsten carbide fiber blade for Mark IV machines. 74.5×15.5×0.90mm, maximum wear resistance.',
    features: ['Fully compatible with Mark IV fiber cutting machines', '74.5×15.5×0.90mm precision dimensions', 'Solid tungsten carbide — maximum wear resistance', '3-4x longer life than steel blades', 'Ideal for fiberglass and carbon fiber'],
    applications: ['Fiberglass cutting', 'Carbon fiber cutting', 'Abrasive synthetic fiber cutting', 'High-wear fiber production lines'],
    benefits: [
      { title: 'Maximum Wear Resistance', description: 'Solid tungsten carbide hardness (~1500 HV) delivers 3-4x service life versus steel blades in demanding applications.', icon: 'Shield' },
      { title: 'Superior Edge Retention', description: 'Carbide cutting edge maintains sharpness far longer, reducing blade changes and production downtime.', icon: 'Target' },
      { title: 'Precision Mark IV Fit', description: '74.5×15.5×0.90mm tolerance-matched for Mark IV machines — direct drop-in replacement.', icon: 'Settings' },
    ],
    longDescription: `<p>The B644 solid tungsten carbide fiber blade is the <strong>ultimate performance blade for Mark IV chopped fiber cutting machines</strong>, measuring 74.5×15.5×0.90mm. Solid tungsten carbide provides maximum wear resistance for the most demanding fiber cutting applications.</p><h3>Technical Specifications</h3><ul><li>Dimensions: 74.5×15.5×0.90mm</li><li>Material: Solid Tungsten Carbide</li><li>Hardness: ~1500 HV</li><li>Machine Compatibility: Mark IV Fiber Cutting Machine</li></ul><h3>Applications</h3><p>Fiberglass, carbon fiber, aramid, and other highly abrasive fiber cutting. Ideal for lines where blade longevity is critical and frequent blade changes are costly.</p>`,
    seo: {
      title: 'Fiber Blade Mark IV Tungsten Carbide 74.5×15.5mm | Chopped Fiber Blade',
      description: 'Solid tungsten carbide fiber blade for Mark IV machines. 74.5×15.5×0.90mm. Maximum wear resistance. Fiberglass, carbon fiber cutting.',
      keywords: ['tungsten carbide fiber blade', 'solid tungsten fiber blade', 'mark iv tungsten blade', 'carbide chopped fiber blade', 'fiberglass cutting blade tungsten', 'carbon fiber cutting blade', 'B644 tungsten carbide', 'mark iv carbide blade', 'solid carbide fiber blade', 'fiber blade maximum life', 'tungsten fiber cutter', 'carbide blade manufacturer'],
    },
  },

  // =============================================
  // CHOPPED FIBER BLADES — B645 (MARK V)
  // =============================================

  'b645-paslanmaz': {
    name: 'Fiber Blade (Mark V) – Stainless Steel',
    subtitle: 'Stainless Steel — 117.5×15.6×0.88mm',
    description: 'Stainless steel fiber blade for Mark V fiber cutting machines. 117.5×15.6×0.88mm, longer body than Mark IV provides wider cutting area. High-performance cutting on chopped fiber production lines.',
    shortDescription: 'Fiber blade for Mark V machines. 117.5×15.6×0.88mm, stainless steel, wider cutting area.',
    features: ['Fully compatible with Mark V fiber cutting machines', '117.5×15.6×0.88mm — longer body than Mark IV', 'Stainless steel — corrosion-resistant', 'Wider cutting area for higher efficiency', 'Long service life'],
    applications: ['Chopped fiber production', 'Synthetic fiber cutting', 'Textile fiber cutting', 'Industrial fiber processing'],
    benefits: [
      { title: 'Corrosion-Resistant Build', description: 'Stainless steel construction withstands humid production environments, maintaining cutting integrity over extended runs.', icon: 'Shield' },
      { title: 'Wider Cutting Area', description: '117.5mm body length offers a wider cutting area than Mark IV, increasing throughput on Mark V machines.', icon: 'Maximize' },
      { title: 'Cost-Effective Performance', description: 'Optimal performance-to-cost ratio for standard chopped fiber production — polyester, nylon, viscose, and polypropylene.', icon: 'DollarSign' },
    ],
    longDescription: `<p>The B645 stainless steel fiber blade is a <strong>direct replacement blade for Mark V chopped fiber cutting machines</strong>, measuring 117.5×15.6×0.88mm. The longer body compared to Mark IV provides a wider cutting area for increased throughput.</p><h3>Technical Specifications</h3><ul><li>Dimensions: 117.5×15.6×0.88mm</li><li>Material: Stainless Steel</li><li>Machine Compatibility: Mark V Fiber Cutting Machine</li></ul><h3>Applications</h3><p>Standard chopped fiber production lines processing polyester, nylon, polypropylene, viscose, and other synthetic and natural fibers. The wider cutting area of the Mark V format makes it suitable for higher-throughput production lines.</p>`,
    seo: {
      title: 'Fiber Blade Mark V Stainless Steel 117.5×15.6mm | Chopped Fiber Blade',
      description: 'Stainless steel fiber blade for Mark V fiber cutting machines. 117.5×15.6×0.88mm. Longer body, wider cutting area. Chopped fiber production.',
      keywords: ['fiber blade mark v', 'chopped fiber blade mark v', 'fiber cutting blade 117mm', 'mark v stainless blade', 'fiber blade stainless 117', 'chopped fiber cutter', 'B645 fiber blade', 'mark v fiber cutting machine blade', 'stainless steel fiber blade 117', 'polyester fiber cutter', 'fiber blade manufacturer', 'fiber blade supplier'],
    },
  },
  'b645-tin-kaplama': {
    name: 'Fiber Blade (Mark V) – Stainless Steel + TiN Coating',
    subtitle: 'Stainless Steel + TiN Coating — 117.5×15.6×0.88mm',
    description: 'TiN coated stainless steel fiber blade for Mark V fiber cutting machines. 117.5×15.6×0.88mm. TiN coating extends blade life 2-3 times. Longer body provides wider cutting area.',
    shortDescription: 'TiN coated fiber blade for Mark V machines. 117.5×15.6×0.88mm, 2-3x longer life.',
    features: ['Fully compatible with Mark V fiber cutting machines', '117.5×15.6×0.88mm — wider cutting area', 'TiN coating — 2-3x extended service life', 'Superior performance on abrasive fibers', 'High surface hardness'],
    applications: ['Chopped fiber production', 'Abrasive synthetic fiber cutting', 'Fiberglass cutting', 'High-volume fiber production lines'],
    benefits: [
      { title: 'TiN Surface Hardness', description: 'Titanium Nitride coating increases surface hardness to ~2300 HV, extending blade life 2-3 times versus uncoated steel.', icon: 'Award' },
      { title: 'Reduced Friction & Heat', description: 'TiN coating lowers friction coefficient, reducing heat buildup during high-speed fiber cutting operations.', icon: 'Zap' },
      { title: 'Direct Mark V Replacement', description: 'Precision 117.5×15.6×0.88mm fitment ensures drop-in installation on Mark V fiber cutting machines.', icon: 'Settings' },
    ],
    longDescription: `<p>The B645 TiN coated fiber blade is a <strong>premium replacement blade for Mark V chopped fiber cutting machines</strong>, measuring 117.5×15.6×0.88mm. The Titanium Nitride coating multiplies wear resistance, extending service life 2-3 times.</p><h3>Technical Specifications</h3><ul><li>Dimensions: 117.5×15.6×0.88mm</li><li>Material: Stainless Steel + TiN Coating</li><li>Coating: TiN (Titanium Nitride) — ~2300 HV surface hardness</li><li>Machine Compatibility: Mark V Fiber Cutting Machine</li></ul><h3>Applications</h3><p>High-volume chopped fiber production lines, particularly for abrasive fiber types including fiberglass, aramid, and carbon fiber. The wider cutting area of the Mark V format maximizes throughput.</p>`,
    seo: {
      title: 'Fiber Blade Mark V TiN Coated 117.5×15.6mm | Chopped Fiber Blade',
      description: 'TiN coated stainless steel fiber blade for Mark V machines. 117.5×15.6×0.88mm. 2-3x longer life. Fiberglass and abrasive fibers.',
      keywords: ['fiber blade mark v tin', 'tin coated fiber blade 117mm', 'mark v chopped fiber blade', 'titanium nitride fiber blade', 'abrasive fiber blade mark v', 'B645 tin fiber blade', 'mark v tin coated blade', 'fiberglass cutting blade tin', 'fiber blade 2x life mark v', 'tin coated chopped fiber', 'fiber blade manufacturer'],
    },
  },
  'b645-yekpare-tungsten-centikli': {
    name: 'Fiber Blade (Mark V) – Solid Tungsten Carbide (Notched)',
    subtitle: 'Solid Tungsten Carbide, Notched Edge — 117.5×15.6×0.89mm',
    description: 'Notched-edge solid tungsten carbide fiber blade for Mark V fiber cutting machines. 117.5×15.6×0.89mm. The notched edge structure grips fibers for more controlled cutting. Tungsten carbide provides superior wear resistance.',
    shortDescription: 'Solid tungsten carbide fiber blade (notched) for Mark V machines. 117.5×15.6×0.89mm.',
    features: ['Fully compatible with Mark V fiber cutting machines', '117.5×15.6×0.89mm precision dimensions', 'Solid tungsten carbide — maximum wear resistance', 'Notched edge — grips fibers for controlled cutting', 'Ideal for fiberglass and carbon fiber'],
    applications: ['Fiberglass cutting', 'Carbon fiber cutting', 'Abrasive synthetic fiber cutting', 'High-wear fiber production lines'],
    benefits: [
      { title: 'Maximum Wear Resistance', description: 'Solid tungsten carbide hardness (~1500 HV) delivers 3-4x service life versus steel blades in demanding applications.', icon: 'Shield' },
      { title: 'Notched Edge Grip', description: 'Notched edge structure grips fibers for more controlled, consistent cutting — ideal for slippery fiber types.', icon: 'Target' },
      { title: 'Precision Mark V Fit', description: '117.5×15.6×0.89mm tolerance-matched for Mark V machines — direct drop-in replacement.', icon: 'Settings' },
    ],
    longDescription: `<p>The B645 notched solid tungsten carbide fiber blade is an <strong>advanced performance blade for Mark V chopped fiber cutting machines</strong>, measuring 117.5×15.6×0.89mm. The notched edge structure provides enhanced fiber grip for controlled cutting, while solid tungsten carbide delivers maximum wear resistance.</p><h3>Technical Specifications</h3><ul><li>Dimensions: 117.5×15.6×0.89mm</li><li>Material: Solid Tungsten Carbide</li><li>Edge Type: Notched</li><li>Hardness: ~1500 HV</li><li>Machine Compatibility: Mark V Fiber Cutting Machine</li></ul><h3>Applications</h3><p>Fiberglass, carbon fiber, aramid, and slippery fiber types where the notched edge provides better fiber grip. Ideal for high-wear production lines requiring maximum blade longevity.</p>`,
    seo: {
      title: 'Fiber Blade Mark V Tungsten Carbide Notched 117.5×15.6mm | Chopped Fiber',
      description: 'Notched solid tungsten carbide fiber blade for Mark V machines. 117.5×15.6×0.89mm. Controlled cutting with notched edge. Fiberglass, carbon fiber.',
      keywords: ['tungsten carbide fiber blade notched', 'mark v tungsten blade', 'notched fiber blade', 'carbide chopped fiber blade', 'fiberglass cutting blade notched', 'B645 tungsten notched', 'mark v carbide blade notched', 'notched edge fiber cutter', 'solid carbide fiber blade', 'tungsten fiber blade manufacturer'],
    },
  },
  'b645-yekpare-tungsten-duz': {
    name: 'Fiber Blade (Mark V) – Solid Tungsten Carbide (Plain)',
    subtitle: 'Solid Tungsten Carbide, Plain Edge — 117.5×15.6×0.91mm',
    description: 'Plain-edge solid tungsten carbide fiber blade for Mark V fiber cutting machines. 117.5×15.6×0.91mm. The smooth edge provides clean, burr-free cutting. Tungsten carbide delivers superior wear resistance.',
    shortDescription: 'Solid tungsten carbide fiber blade (plain) for Mark V machines. 117.5×15.6×0.91mm.',
    features: ['Fully compatible with Mark V fiber cutting machines', '117.5×15.6×0.91mm precision dimensions', 'Solid tungsten carbide — maximum wear resistance', 'Plain edge — clean, burr-free cutting', 'Ideal for fiberglass and carbon fiber'],
    applications: ['Fiberglass cutting', 'Carbon fiber cutting', 'Precision fiber cutting applications', 'High-wear fiber production lines'],
    benefits: [
      { title: 'Maximum Wear Resistance', description: 'Solid tungsten carbide hardness (~1500 HV) delivers 3-4x service life versus steel blades in demanding applications.', icon: 'Shield' },
      { title: 'Clean Burr-Free Cutting', description: 'Plain smooth edge delivers clean, burr-free cuts — ideal for applications requiring uniform fiber length.', icon: 'Target' },
      { title: 'Precision Mark V Fit', description: '117.5×15.6×0.91mm tolerance-matched for Mark V machines — direct drop-in replacement.', icon: 'Settings' },
    ],
    longDescription: `<p>The B645 plain solid tungsten carbide fiber blade is an <strong>advanced performance blade for Mark V chopped fiber cutting machines</strong>, measuring 117.5×15.6×0.91mm. The plain smooth edge provides clean, burr-free cutting while solid tungsten carbide delivers maximum wear resistance.</p><h3>Technical Specifications</h3><ul><li>Dimensions: 117.5×15.6×0.91mm</li><li>Material: Solid Tungsten Carbide</li><li>Edge Type: Plain (Smooth)</li><li>Hardness: ~1500 HV</li><li>Machine Compatibility: Mark V Fiber Cutting Machine</li></ul><h3>Applications</h3><p>Fiberglass, carbon fiber, and precision fiber cutting where uniform cut quality is essential. The plain edge provides cleaner cuts than the notched variant, suitable for applications demanding tight fiber length tolerances.</p>`,
    seo: {
      title: 'Fiber Blade Mark V Tungsten Carbide Plain 117.5×15.6mm | Chopped Fiber',
      description: 'Plain solid tungsten carbide fiber blade for Mark V machines. 117.5×15.6×0.91mm. Clean cutting with smooth edge. Fiberglass, carbon fiber.',
      keywords: ['tungsten carbide fiber blade plain', 'mark v tungsten blade plain', 'smooth fiber blade', 'carbide fiber blade 117mm', 'precision fiber cutting blade', 'B645 tungsten plain', 'mark v carbide blade plain', 'plain edge fiber cutter', 'solid carbide fiber blade', 'tungsten fiber blade manufacturer'],
    },
  },

  // =============================================
  // CHOPPED FIBER BLADES — B573-B574 (HERCULES)
  // =============================================

  'b573-paslanmaz': {
    name: 'Fiber Blade (Hercules Short) – Stainless Steel',
    subtitle: 'Stainless Steel — 95×19×0.88mm',
    description: 'Short-type stainless steel fiber blade for Hercules fiber cutting machines. 95×19×0.88mm dimensions. Provides standard cutting performance on Hercules series machines.',
    shortDescription: 'Short fiber blade for Hercules machines. 95×19×0.88mm, stainless steel.',
    features: ['Fully compatible with Hercules fiber cutting machines', '95×19×0.88mm — short type', 'Stainless steel — corrosion-resistant', 'Optimized for chopped fiber production', 'Long service life'],
    applications: ['Chopped fiber production', 'Synthetic fiber cutting', 'Textile fiber cutting', 'Industrial fiber processing'],
    benefits: [
      { title: 'Corrosion-Resistant Build', description: 'Stainless steel construction resists corrosion in humid production environments, maintaining blade integrity over extended runs.', icon: 'Shield' },
      { title: 'Hercules Direct Fit', description: 'Manufactured to 95×19×0.88mm tolerance for direct drop-in replacement on Hercules fiber cutting machines.', icon: 'Settings' },
      { title: 'Cost-Effective Performance', description: 'Optimal performance-to-cost ratio for standard chopped fiber production on Hercules series machines.', icon: 'DollarSign' },
    ],
    longDescription: `<p>The B573 stainless steel fiber blade is a <strong>short-type direct replacement blade for Hercules chopped fiber cutting machines</strong>, measuring 95×19×0.88mm. Stainless steel construction provides corrosion resistance in humid production environments.</p><h3>Technical Specifications</h3><ul><li>Dimensions: 95×19×0.88mm</li><li>Material: Stainless Steel</li><li>Type: Short</li><li>Machine Compatibility: Hercules Fiber Cutting Machine</li></ul><h3>Applications</h3><p>Standard chopped fiber production lines using Hercules series machines. Suitable for polyester, nylon, polypropylene, viscose, and other synthetic and natural fiber cutting.</p>`,
    seo: {
      title: 'Fiber Blade Hercules Short Stainless Steel 95×19mm | Chopped Fiber',
      description: 'Short stainless steel fiber blade for Hercules machines. 95×19×0.88mm. Corrosion-resistant. Chopped fiber production.',
      keywords: ['hercules fiber blade', 'chopped fiber blade hercules', 'fiber blade 95mm', 'hercules stainless blade', 'short fiber blade', 'B573 fiber blade', 'hercules fiber cutting machine blade', 'stainless steel fiber blade 95mm', 'fiber blade manufacturer', 'fiber blade supplier'],
    },
  },
  'b573-tin-kaplama': {
    name: 'Fiber Blade (Hercules Short) – Stainless Steel + TiN Coating',
    subtitle: 'Stainless Steel + TiN Coating — 95×19×0.88mm',
    description: 'Short-type TiN coated stainless steel fiber blade for Hercules fiber cutting machines. 95×19×0.88mm. TiN coating extends blade life 2-3 times.',
    shortDescription: 'TiN coated short fiber blade for Hercules machines. 95×19×0.88mm, 2-3x longer life.',
    features: ['Fully compatible with Hercules fiber cutting machines', '95×19×0.88mm — short type', 'TiN coating — 2-3x extended service life', 'Superior performance on abrasive fibers', 'High surface hardness'],
    applications: ['Chopped fiber production', 'Abrasive synthetic fiber cutting', 'Fiberglass cutting', 'High-volume fiber production lines'],
    benefits: [
      { title: 'TiN Surface Hardness', description: 'Titanium Nitride coating increases surface hardness to ~2300 HV, extending blade life 2-3 times versus uncoated steel.', icon: 'Award' },
      { title: 'Reduced Friction & Heat', description: 'TiN coating lowers friction coefficient, reducing heat buildup during high-speed fiber cutting operations.', icon: 'Zap' },
      { title: 'Direct Hercules Replacement', description: 'Precision 95×19×0.88mm short-type fitment ensures drop-in installation on Hercules fiber cutting machines.', icon: 'Settings' },
    ],
    longDescription: `<p>The B573 TiN coated fiber blade is a <strong>premium short-type replacement blade for Hercules chopped fiber cutting machines</strong>, measuring 95×19×0.88mm. The Titanium Nitride coating extends service life 2-3 times.</p><h3>Technical Specifications</h3><ul><li>Dimensions: 95×19×0.88mm</li><li>Material: Stainless Steel + TiN Coating</li><li>Coating: TiN (Titanium Nitride) — ~2300 HV surface hardness</li><li>Type: Short</li><li>Machine Compatibility: Hercules Fiber Cutting Machine</li></ul><h3>Applications</h3><p>High-volume chopped fiber production on Hercules machines, particularly for abrasive fiber types including fiberglass and aramid.</p>`,
    seo: {
      title: 'Fiber Blade Hercules Short TiN Coated 95×19mm | Chopped Fiber',
      description: 'TiN coated short stainless steel fiber blade for Hercules machines. 95×19×0.88mm. 2-3x longer life. Abrasive fibers.',
      keywords: ['hercules fiber blade tin', 'tin coated fiber blade 95mm', 'hercules chopped fiber blade', 'titanium nitride hercules blade', 'B573 tin fiber blade', 'hercules tin coated blade', 'fiberglass cutting blade tin hercules', 'fiber blade manufacturer', 'fiber blade supplier'],
    },
  },
  'b574-paslanmaz': {
    name: 'Fiber Blade (Hercules Long) – Stainless Steel',
    subtitle: 'Stainless Steel — 114×19×0.88mm',
    description: 'Long-type stainless steel fiber blade for Hercules fiber cutting machines. 114×19×0.88mm dimensions. Longer body provides wider cutting area compared to the short type.',
    shortDescription: 'Long fiber blade for Hercules machines. 114×19×0.88mm, stainless steel, wider cutting area.',
    features: ['Fully compatible with Hercules fiber cutting machines', '114×19×0.88mm — long type', 'Stainless steel — corrosion-resistant', 'Wider cutting area for higher efficiency', 'Long service life'],
    applications: ['Chopped fiber production', 'Synthetic fiber cutting', 'Textile fiber cutting', 'Industrial fiber processing'],
    benefits: [
      { title: 'Corrosion-Resistant Build', description: 'Stainless steel construction withstands humid production environments, maintaining cutting integrity over extended runs.', icon: 'Shield' },
      { title: 'Extended Cutting Area', description: '114mm body length provides a wider cutting area than the short type, increasing throughput on Hercules machines.', icon: 'Maximize' },
      { title: 'Cost-Effective Performance', description: 'Optimal performance-to-cost ratio for standard chopped fiber production on Hercules series machines.', icon: 'DollarSign' },
    ],
    longDescription: `<p>The B574 stainless steel fiber blade is a <strong>long-type direct replacement blade for Hercules chopped fiber cutting machines</strong>, measuring 114×19×0.88mm. The longer body compared to the B573 short type provides a wider cutting area for increased throughput.</p><h3>Technical Specifications</h3><ul><li>Dimensions: 114×19×0.88mm</li><li>Material: Stainless Steel</li><li>Type: Long</li><li>Machine Compatibility: Hercules Fiber Cutting Machine</li></ul><h3>Applications</h3><p>Standard chopped fiber production lines using Hercules series machines. The wider cutting area makes it suitable for higher-throughput production runs with polyester, nylon, and other fibers.</p>`,
    seo: {
      title: 'Fiber Blade Hercules Long Stainless Steel 114×19mm | Chopped Fiber',
      description: 'Long stainless steel fiber blade for Hercules machines. 114×19×0.88mm. Wider cutting area, higher efficiency. Chopped fiber production.',
      keywords: ['hercules long fiber blade', 'chopped fiber blade 114mm', 'hercules stainless blade long', 'fiber blade 114x19mm', 'B574 fiber blade', 'hercules fiber cutting machine blade', 'stainless steel fiber blade 114mm', 'long fiber blade hercules', 'fiber blade manufacturer', 'fiber blade supplier'],
    },
  },
  'b574-tin-kaplama': {
    name: 'Fiber Blade (Hercules Long) – Stainless Steel + TiN Coating',
    subtitle: 'Stainless Steel + TiN Coating — 114×19×0.88mm',
    description: 'Long-type TiN coated stainless steel fiber blade for Hercules fiber cutting machines. 114×19×0.88mm. TiN coating extends blade life 2-3 times. Longer body provides wider cutting area.',
    shortDescription: 'TiN coated long fiber blade for Hercules machines. 114×19×0.88mm, 2-3x longer life.',
    features: ['Fully compatible with Hercules fiber cutting machines', '114×19×0.88mm — long type', 'TiN coating — 2-3x extended service life', 'Superior performance on abrasive fibers', 'Wider cutting area for higher efficiency'],
    applications: ['Chopped fiber production', 'Abrasive synthetic fiber cutting', 'Fiberglass cutting', 'High-volume fiber production lines'],
    benefits: [
      { title: 'TiN Surface Hardness', description: 'Titanium Nitride coating increases surface hardness to ~2300 HV, extending blade life 2-3 times versus uncoated steel.', icon: 'Award' },
      { title: 'Reduced Friction & Heat', description: 'TiN coating lowers friction coefficient, reducing heat buildup during high-speed fiber cutting operations.', icon: 'Zap' },
      { title: 'Direct Hercules Replacement', description: 'Precision 114×19×0.88mm long-type fitment ensures drop-in installation on Hercules fiber cutting machines.', icon: 'Settings' },
    ],
    longDescription: `<p>The B574 TiN coated fiber blade is a <strong>premium long-type replacement blade for Hercules chopped fiber cutting machines</strong>, measuring 114×19×0.88mm. The Titanium Nitride coating extends service life 2-3 times, while the longer body provides a wider cutting area.</p><h3>Technical Specifications</h3><ul><li>Dimensions: 114×19×0.88mm</li><li>Material: Stainless Steel + TiN Coating</li><li>Coating: TiN (Titanium Nitride) — ~2300 HV surface hardness</li><li>Type: Long</li><li>Machine Compatibility: Hercules Fiber Cutting Machine</li></ul><h3>Applications</h3><p>High-volume chopped fiber production on Hercules machines, particularly for abrasive fiber types. The wider cutting area maximizes throughput on demanding production lines.</p>`,
    seo: {
      title: 'Fiber Blade Hercules Long TiN Coated 114×19mm | Chopped Fiber',
      description: 'TiN coated long stainless steel fiber blade for Hercules machines. 114×19×0.88mm. 2-3x longer life. Abrasive fibers.',
      keywords: ['hercules long fiber blade tin', 'tin coated fiber blade 114mm', 'hercules chopped fiber blade long', 'titanium nitride hercules blade', 'B574 tin fiber blade', 'hercules tin coated blade long', 'fiberglass cutting blade tin hercules', 'fiber blade manufacturer', 'fiber blade supplier'],
    },
  },

  // =============================================
  // CHOPPED FIBER BLADES — B048-B064 (KRUPP)
  // =============================================

  'b048-paslanmaz': {
    name: 'Fiber Blade (Krupp) 48mm – Stainless Steel',
    subtitle: 'Stainless Steel — 48×7.9×0.88mm',
    description: 'Stainless steel fiber blade for Krupp fiber cutting machines. 48×7.9×0.88mm compact dimensions. Standard cutting performance on Krupp series machines.',
    shortDescription: 'Compact fiber blade for Krupp machines. 48×7.9×0.88mm, stainless steel.',
    features: ['Fully compatible with Krupp fiber cutting machines', '48×7.9×0.88mm — compact size', 'Stainless steel — corrosion-resistant', 'Optimized for chopped fiber production', 'Long service life'],
    applications: ['Chopped fiber production', 'Synthetic fiber cutting', 'Textile fiber cutting', 'Industrial fiber processing'],
    benefits: [
      { title: 'Corrosion-Resistant Build', description: 'Stainless steel construction resists corrosion in humid production environments, maintaining blade integrity over extended runs.', icon: 'Shield' },
      { title: 'Precision Krupp Fit', description: 'Manufactured to 48×7.9×0.88mm tolerance for direct drop-in replacement on Krupp fiber cutting machines.', icon: 'Settings' },
      { title: 'Cost-Effective Performance', description: 'Optimal performance-to-cost ratio for standard chopped fiber production on Krupp series machines.', icon: 'DollarSign' },
    ],
    longDescription: `<p>The B048 stainless steel fiber blade is a <strong>compact direct replacement blade for Krupp chopped fiber cutting machines</strong>, measuring 48×7.9×0.88mm. The compact format is designed specifically for the Krupp cutting head configuration.</p><h3>Technical Specifications</h3><ul><li>Dimensions: 48×7.9×0.88mm</li><li>Material: Stainless Steel</li><li>Machine Compatibility: Krupp Fiber Cutting Machine</li></ul><h3>Applications</h3><p>Standard chopped fiber production lines using Krupp series machines. Suitable for polyester, nylon, polypropylene, viscose, and other synthetic and natural fiber cutting.</p>`,
    seo: {
      title: 'Fiber Blade Krupp 48mm Stainless Steel 48×7.9mm | Chopped Fiber',
      description: 'Stainless steel fiber blade for Krupp machines. 48×7.9×0.88mm compact. Chopped fiber production. Corrosion-resistant.',
      keywords: ['krupp fiber blade', 'chopped fiber blade krupp', 'fiber blade 48mm', 'krupp stainless blade 48', 'compact fiber blade', 'B048 fiber blade', 'krupp fiber cutting machine blade', 'stainless steel fiber blade 48mm', 'fiber blade manufacturer', 'fiber blade supplier'],
    },
  },
  'b048-tin-kaplama': {
    name: 'Fiber Blade (Krupp) 48mm – Stainless Steel + TiN Coating',
    subtitle: 'Stainless Steel + TiN Coating — 48×7.9×0.88mm',
    description: 'TiN coated stainless steel fiber blade for Krupp fiber cutting machines. 48×7.9×0.88mm. TiN coating extends blade life 2-3 times.',
    shortDescription: 'TiN coated compact fiber blade for Krupp machines. 48×7.9×0.88mm, 2-3x longer life.',
    features: ['Fully compatible with Krupp fiber cutting machines', '48×7.9×0.88mm — compact size', 'TiN coating — 2-3x extended service life', 'Superior performance on abrasive fibers', 'High surface hardness'],
    applications: ['Chopped fiber production', 'Abrasive synthetic fiber cutting', 'Fiberglass cutting', 'High-volume fiber production lines'],
    benefits: [
      { title: 'TiN Surface Hardness', description: 'Titanium Nitride coating increases surface hardness to ~2300 HV, extending blade life 2-3 times versus uncoated steel.', icon: 'Award' },
      { title: 'Reduced Friction & Heat', description: 'TiN coating lowers friction coefficient, reducing heat buildup during high-speed fiber cutting operations.', icon: 'Zap' },
      { title: 'Direct Krupp Replacement', description: 'Precision 48×7.9×0.88mm compact fitment ensures drop-in installation on Krupp fiber cutting machines.', icon: 'Settings' },
    ],
    longDescription: `<p>The B048 TiN coated fiber blade is a <strong>premium compact replacement blade for Krupp chopped fiber cutting machines</strong>, measuring 48×7.9×0.88mm. The Titanium Nitride coating extends service life 2-3 times.</p><h3>Technical Specifications</h3><ul><li>Dimensions: 48×7.9×0.88mm</li><li>Material: Stainless Steel + TiN Coating</li><li>Coating: TiN (Titanium Nitride) — ~2300 HV surface hardness</li><li>Machine Compatibility: Krupp Fiber Cutting Machine</li></ul><h3>Applications</h3><p>High-volume chopped fiber production on Krupp machines, particularly for abrasive fiber types including fiberglass and aramid.</p>`,
    seo: {
      title: 'Fiber Blade Krupp 48mm TiN Coated 48×7.9mm | Chopped Fiber',
      description: 'TiN coated stainless steel fiber blade for Krupp machines. 48×7.9×0.88mm. 2-3x longer life. Abrasive fibers.',
      keywords: ['krupp fiber blade tin', 'tin coated fiber blade 48mm', 'krupp chopped fiber blade', 'titanium nitride krupp blade', 'B048 tin fiber blade', 'krupp tin coated blade', 'fiberglass cutting blade tin krupp', 'fiber blade manufacturer', 'fiber blade supplier'],
    },
  },
  'b048-yekpare-tungsten': {
    name: 'Fiber Blade (Krupp) 48mm – Solid Tungsten Carbide',
    subtitle: 'Solid Tungsten Carbide — 48×7.9×0.88mm',
    description: 'Solid tungsten carbide fiber blade for Krupp fiber cutting machines. 48×7.9×0.88mm. Exceptional service life in the most demanding fiber cutting applications.',
    shortDescription: 'Solid tungsten carbide compact fiber blade for Krupp machines. 48×7.9×0.88mm.',
    features: ['Fully compatible with Krupp fiber cutting machines', '48×7.9×0.88mm — compact size', 'Solid tungsten carbide — maximum wear resistance', '3-4x longer life than steel blades', 'Ideal for fiberglass and carbon fiber'],
    applications: ['Fiberglass cutting', 'Carbon fiber cutting', 'Abrasive synthetic fiber cutting', 'High-wear fiber production lines'],
    benefits: [
      { title: 'Maximum Wear Resistance', description: 'Solid tungsten carbide hardness (~1500 HV) delivers 3-4x service life versus steel blades in demanding applications.', icon: 'Shield' },
      { title: 'Superior Edge Retention', description: 'Carbide cutting edge maintains sharpness far longer, reducing blade changes and production downtime.', icon: 'Target' },
      { title: 'Precision Krupp Fit', description: '48×7.9×0.88mm tolerance-matched for Krupp machines — direct drop-in replacement.', icon: 'Settings' },
    ],
    longDescription: `<p>The B048 solid tungsten carbide fiber blade is the <strong>ultimate performance compact blade for Krupp chopped fiber cutting machines</strong>, measuring 48×7.9×0.88mm. Solid tungsten carbide provides maximum wear resistance for the most demanding fiber cutting applications.</p><h3>Technical Specifications</h3><ul><li>Dimensions: 48×7.9×0.88mm</li><li>Material: Solid Tungsten Carbide</li><li>Hardness: ~1500 HV</li><li>Machine Compatibility: Krupp Fiber Cutting Machine</li></ul><h3>Applications</h3><p>Fiberglass, carbon fiber, aramid, and other highly abrasive fiber cutting on Krupp machines. Ideal for lines where blade longevity is critical.</p>`,
    seo: {
      title: 'Fiber Blade Krupp 48mm Tungsten Carbide 48×7.9mm | Chopped Fiber',
      description: 'Solid tungsten carbide fiber blade for Krupp machines. 48×7.9×0.88mm. Maximum wear resistance. Fiberglass, carbon fiber.',
      keywords: ['tungsten carbide fiber blade krupp', 'krupp tungsten blade 48mm', 'carbide chopped fiber blade', 'fiberglass cutting blade krupp', 'B048 tungsten carbide', 'krupp carbide blade 48mm', 'solid carbide fiber blade krupp', 'fiber blade maximum life', 'tungsten fiber blade manufacturer'],
    },
  },
  'b064-paslanmaz': {
    name: 'Fiber Blade (Krupp) 64mm – Stainless Steel',
    subtitle: 'Stainless Steel — 64×7.9×0.88mm',
    description: 'Stainless steel fiber blade for Krupp fiber cutting machines. 64×7.9×0.88mm, longer body than the 48mm version provides wider cutting area.',
    shortDescription: 'Fiber blade for Krupp machines. 64×7.9×0.88mm, stainless steel, wider cutting area.',
    features: ['Fully compatible with Krupp fiber cutting machines', '64×7.9×0.88mm — longer body than 48mm', 'Stainless steel — corrosion-resistant', 'Wider cutting area for higher efficiency', 'Long service life'],
    applications: ['Chopped fiber production', 'Synthetic fiber cutting', 'Textile fiber cutting', 'Industrial fiber processing'],
    benefits: [
      { title: 'Corrosion-Resistant Build', description: 'Stainless steel construction resists corrosion in humid production environments, maintaining blade integrity over extended runs.', icon: 'Shield' },
      { title: 'Extended Cutting Area', description: '64mm body length provides a wider cutting area than the 48mm variant, increasing throughput on Krupp machines.', icon: 'Maximize' },
      { title: 'Cost-Effective Performance', description: 'Optimal performance-to-cost ratio for standard chopped fiber production on Krupp series machines.', icon: 'DollarSign' },
    ],
    longDescription: `<p>The B064 stainless steel fiber blade is a <strong>direct replacement blade for Krupp chopped fiber cutting machines</strong>, measuring 64×7.9×0.88mm. The longer body compared to the B048 provides a wider cutting area for increased throughput.</p><h3>Technical Specifications</h3><ul><li>Dimensions: 64×7.9×0.88mm</li><li>Material: Stainless Steel</li><li>Machine Compatibility: Krupp Fiber Cutting Machine</li></ul><h3>Applications</h3><p>Standard chopped fiber production lines using Krupp series machines. The wider cutting area makes it suitable for higher-throughput production with polyester, nylon, and other fibers.</p>`,
    seo: {
      title: 'Fiber Blade Krupp 64mm Stainless Steel 64×7.9mm | Chopped Fiber',
      description: 'Stainless steel fiber blade for Krupp machines. 64×7.9×0.88mm. Wider cutting area. Chopped fiber production.',
      keywords: ['krupp fiber blade 64mm', 'chopped fiber blade krupp 64', 'fiber blade 64x7.9mm', 'krupp stainless blade 64', 'B064 fiber blade', 'krupp fiber cutting machine blade 64', 'stainless steel fiber blade 64mm', 'long fiber blade krupp', 'fiber blade manufacturer', 'fiber blade supplier'],
    },
  },
  'b064-tin-kaplama': {
    name: 'Fiber Blade (Krupp) 64mm – Stainless Steel + TiN Coating',
    subtitle: 'Stainless Steel + TiN Coating — 64×7.9×0.88mm',
    description: 'TiN coated stainless steel fiber blade for Krupp fiber cutting machines. 64×7.9×0.88mm. TiN coating extends blade life 2-3 times. Longer body provides wider cutting area.',
    shortDescription: 'TiN coated fiber blade for Krupp machines. 64×7.9×0.88mm, 2-3x longer life.',
    features: ['Fully compatible with Krupp fiber cutting machines', '64×7.9×0.88mm — longer body', 'TiN coating — 2-3x extended service life', 'Superior performance on abrasive fibers', 'High surface hardness'],
    applications: ['Chopped fiber production', 'Abrasive synthetic fiber cutting', 'Fiberglass cutting', 'High-volume fiber production lines'],
    benefits: [
      { title: 'TiN Surface Hardness', description: 'Titanium Nitride coating increases surface hardness to ~2300 HV, extending blade life 2-3 times versus uncoated steel.', icon: 'Award' },
      { title: 'Reduced Friction & Heat', description: 'TiN coating lowers friction coefficient, reducing heat buildup during high-speed fiber cutting operations.', icon: 'Zap' },
      { title: 'Direct Krupp Replacement', description: 'Precision 64×7.9×0.88mm fitment ensures drop-in installation on Krupp fiber cutting machines.', icon: 'Settings' },
    ],
    longDescription: `<p>The B064 TiN coated fiber blade is a <strong>premium replacement blade for Krupp chopped fiber cutting machines</strong>, measuring 64×7.9×0.88mm. The Titanium Nitride coating extends service life 2-3 times, while the longer body provides a wider cutting area.</p><h3>Technical Specifications</h3><ul><li>Dimensions: 64×7.9×0.88mm</li><li>Material: Stainless Steel + TiN Coating</li><li>Coating: TiN (Titanium Nitride) — ~2300 HV surface hardness</li><li>Machine Compatibility: Krupp Fiber Cutting Machine</li></ul><h3>Applications</h3><p>High-volume chopped fiber production on Krupp machines, particularly for abrasive fiber types. The wider cutting area maximizes throughput on demanding production lines.</p>`,
    seo: {
      title: 'Fiber Blade Krupp 64mm TiN Coated 64×7.9mm | Chopped Fiber',
      description: 'TiN coated stainless steel fiber blade for Krupp machines. 64×7.9×0.88mm. 2-3x longer life. Abrasive fiber cutting.',
      keywords: ['krupp fiber blade 64mm tin', 'tin coated fiber blade 64mm', 'krupp chopped fiber blade 64', 'titanium nitride krupp blade 64', 'B064 tin fiber blade', 'krupp tin coated blade 64', 'fiberglass cutting blade tin krupp', 'fiber blade manufacturer', 'fiber blade supplier'],
    },
  },
  'b064-yekpare-tungsten': {
    name: 'Fiber Blade (Krupp) 64mm – Solid Tungsten Carbide',
    subtitle: 'Solid Tungsten Carbide — 64×7.9×0.88mm',
    description: 'Solid tungsten carbide fiber blade for Krupp fiber cutting machines. 64×7.9×0.88mm. Exceptional service life in the most demanding fiber cutting applications.',
    shortDescription: 'Solid tungsten carbide fiber blade for Krupp machines. 64×7.9×0.88mm, maximum wear resistance.',
    features: ['Fully compatible with Krupp fiber cutting machines', '64×7.9×0.88mm — longer body', 'Solid tungsten carbide — maximum wear resistance', '3-4x longer life than steel blades', 'Ideal for fiberglass and carbon fiber'],
    applications: ['Fiberglass cutting', 'Carbon fiber cutting', 'Abrasive synthetic fiber cutting', 'High-wear fiber production lines'],
    benefits: [
      { title: 'Maximum Wear Resistance', description: 'Solid tungsten carbide hardness (~1500 HV) delivers 3-4x service life versus steel blades in demanding applications.', icon: 'Shield' },
      { title: 'Superior Edge Retention', description: 'Carbide cutting edge maintains sharpness far longer, reducing blade changes and production downtime.', icon: 'Target' },
      { title: 'Precision Krupp Fit', description: '64×7.9×0.88mm tolerance-matched for Krupp machines — direct drop-in replacement.', icon: 'Settings' },
    ],
    longDescription: `<p>The B064 solid tungsten carbide fiber blade is the <strong>ultimate performance blade for Krupp chopped fiber cutting machines</strong>, measuring 64×7.9×0.88mm. Solid tungsten carbide provides maximum wear resistance for the most demanding fiber cutting applications.</p><h3>Technical Specifications</h3><ul><li>Dimensions: 64×7.9×0.88mm</li><li>Material: Solid Tungsten Carbide</li><li>Hardness: ~1500 HV</li><li>Machine Compatibility: Krupp Fiber Cutting Machine</li></ul><h3>Applications</h3><p>Fiberglass, carbon fiber, aramid, and other highly abrasive fiber cutting on Krupp machines. Ideal for high-wear production lines requiring maximum blade longevity.</p>`,
    seo: {
      title: 'Fiber Blade Krupp 64mm Tungsten Carbide 64×7.9mm | Chopped Fiber',
      description: 'Solid tungsten carbide fiber blade for Krupp machines. 64×7.9×0.88mm. Maximum wear resistance. Fiberglass, carbon fiber.',
      keywords: ['tungsten carbide fiber blade krupp 64mm', 'krupp tungsten blade 64', 'carbide chopped fiber blade 64', 'fiberglass cutting blade krupp 64mm', 'B064 tungsten carbide', 'krupp carbide blade 64mm', 'solid carbide fiber blade krupp', 'fiber blade maximum life', 'tungsten fiber blade manufacturer'],
    },
  },

  // --- MICROTOME / HISTOLOGY BLADES ---

  'b575': {
    name: 'B575 MICROTOME BLADE – LOW PROFILE',
    subtitle: 'Disposable Microtome Blade for Histology Laboratories',
    description: 'B575 low profile microtome blade. 80.01×8.13×0.25mm, triple facet grind, stainless steel + coating. High-precision disposable blade for routine paraffin tissue sectioning in histology and pathology laboratories. Compatible with Leica, Thermo, Sakura microtomes.',
    shortDescription: 'B575 low profile microtome blade. 80.01×8.13×0.25mm, triple facet grind, stainless steel + coating. For routine paraffin tissue sectioning. Leica, Thermo, Sakura compatible.',
    features: [
      '80.01×8.13×0.25mm low profile dimensions',
      'Triple facet grind for ultra-smooth sections',
      'Stainless steel + special coating',
      '1–50 micron sectioning capacity',
      'Disposable hygienic design',
      'Compatible with Leica, Thermo, Sakura, SLEE microtomes',
      'PTFE / Platinum-Chrome coating options',
      'Sheffield Durham Duplex quality',
    ],
    applications: [
      'Histopathology',
      'Pathology laboratory',
      'Research laboratory',
      'Paraffin sectioning',
      'Veterinary pathology',
      'Medical education',
    ],
    benefits: [
      {
        title: 'High Precision',
        description: 'Triple facet grind technology delivers smooth sections in the 1–50 micron range.',
        icon: 'Target',
      },
      {
        title: 'Low Friction',
        description: 'Special coating prevents tissue adhesion, ensuring consistent quality across consecutive sections.',
        icon: 'Sparkles',
      },
      {
        title: 'Wide Compatibility',
        description: 'Low profile design compatible with all standard rotary microtomes including Leica, Thermo, Sakura and SLEE.',
        icon: 'Link',
      },
    ],
    longDescription: `<p>The <strong>B575 Low Profile Microtome Blade</strong> is a high-precision cutting instrument designed for preparing ultra-thin tissue sections suitable for microscopic examination in histopathology and research laboratories. With 80.01×8.13×0.25mm dimensions, it provides perfect fit for low profile blade holders.</p>

<h3>Technical Specifications</h3>
<ul>
  <li><strong>Dimensions:</strong> 80.01 × 8.13 × 0.25mm</li>
  <li><strong>Profile:</strong> Low Profile</li>
  <li><strong>Grind:</strong> Triple facet grind</li>
  <li><strong>Material:</strong> Stainless steel + special coating</li>
  <li><strong>Section Thickness:</strong> 1–50 micron capacity</li>
</ul>

<h3>Applications</h3>
<p>The B575 is the standard low profile microtome blade for paraffin-embedded soft tissue sectioning. Primary applications include:</p>
<ul>
  <li><strong>Histopathology:</strong> Routine tissue examination and diagnostic reporting</li>
  <li><strong>Pathology Laboratories:</strong> Micron-level sectioning of biopsy and surgical tissue samples</li>
  <li><strong>Research Laboratories:</strong> Immunohistochemistry (IHC) and in-situ hybridization (ISH) preparations</li>
  <li><strong>Veterinary Pathology:</strong> Histological examination of animal tissue samples</li>
  <li><strong>Educational Institutions:</strong> Histology training in medical and biology faculties</li>
</ul>

<h3>Why Low Profile?</h3>
<p>Low profile blades provide stable seating in standard microtome blade holders due to their narrow body structure. The 0.25mm thickness ensures minimal vibration during cutting and guarantees smooth surface quality. Ideal for soft and medium-hardness paraffin blocks.</p>

<h3>Coating & Quality</h3>
<p>The special coating applied to the stainless steel body reduces friction, preventing tissue adhesion to the blade. This ensures consistent section quality between consecutive cuts. Available in PTFE-based or platinum/chrome coating variants.</p>`,
    seo: {
      title: 'B575 Low Profile Microtome Blade 80mm | Histology Blade | Disposable Microtome Blade',
      description: 'B575 low profile microtome blade 80.01×8.13×0.25mm. Triple facet grind, stainless steel with PTFE coating. For histopathology, paraffin sectioning. Leica, Thermo, Sakura compatible. Sheffield quality.',
      keywords: [
        'microtome blade', 'low profile microtome blade', 'disposable microtome blade',
        'histology blade', 'histopathology blade', 'pathology blade', 'tissue sectioning blade',
        'B575 microtome blade', 'paraffin sectioning', 'triple facet grind',
        'Leica microtome blade', 'Thermo microtome blade', 'Sakura microtome blade',
        'microtome blade price', '80mm microtome blade', 'PTFE coated microtome blade',
        'laboratory consumable', 'histology equipment', 'cryostat blade',
        'Feather S35 alternative', 'Leica 819 alternative',
        'microtome blade manufacturer', 'microtome blade supplier',
      ],
    },
  },

  'b724': {
    name: 'B724 MICROTOME BLADE – HIGH PROFILE',
    subtitle: 'High Profile Microtome Blade for Hard Tissue Sectioning',
    description: 'B724 high profile microtome blade. 80.01×13.97×0.30mm, triple facet grind, stainless steel + coating. Stability-focused high profile design for hard tissue specimens, calcified tissues and large paraffin block sectioning. Compatible with Leica, Thermo, Sakura microtomes.',
    shortDescription: 'B724 high profile microtome blade. 80.01×13.97×0.30mm, triple facet grind, stainless steel + coating. For hard tissue and large block sectioning. Leica, Thermo, Sakura compatible.',
    features: [
      '80.01×13.97×0.30mm high profile dimensions',
      'Triple facet grind for ultra-smooth sections',
      'Stainless steel + special coating',
      '1–50 micron sectioning capacity',
      'Optimized for hard and calcified tissue',
      'Disposable hygienic design',
      'Compatible with Leica, Thermo, Sakura, SLEE microtomes',
      'PTFE / Platinum-Chrome / Ceramic coating options',
      'Sheffield Durham Duplex quality',
    ],
    applications: [
      'Hard tissue pathology',
      'Bone pathology',
      'Neuropathology',
      'Cryostat / Frozen section',
      'Dermatology',
      'Large block sectioning',
    ],
    benefits: [
      {
        title: 'Maximum Stability',
        description: '13.97mm wide body and 0.30mm thickness deliver vibration-free smooth sections in hard tissues.',
        icon: 'Shield',
      },
      {
        title: 'Hard Tissue Performance',
        description: 'Optimized for safe sectioning of calcified bone, thick dermal biopsies and large paraffin blocks.',
        icon: 'Target',
      },
      {
        title: 'Extended Blade Life',
        description: 'Advanced coating technology extends blade life even in hard tissues, providing cost advantage.',
        icon: 'Clock',
      },
    ],
    longDescription: `<p>The <strong>B724 High Profile Microtome Blade</strong> is a premium microtome blade engineered for superior performance in cutting hard tissue specimens in histopathology laboratories. With 80.01×13.97×0.30mm dimensions, it provides perfect fit for high profile blade holders.</p>

<h3>Technical Specifications</h3>
<ul>
  <li><strong>Dimensions:</strong> 80.01 × 13.97 × 0.30mm</li>
  <li><strong>Profile:</strong> High Profile</li>
  <li><strong>Grind:</strong> Triple facet grind</li>
  <li><strong>Material:</strong> Stainless steel + special coating</li>
  <li><strong>Section Thickness:</strong> 1–50 micron capacity</li>
</ul>

<h3>Applications</h3>
<p>The B724 high profile blade provides extra stability for hard tissue sectioning thanks to its wide body and 0.30mm thickness. Primary applications include:</p>
<ul>
  <li><strong>Hard Tissue Pathology:</strong> Sectioning of calcified tissue specimens</li>
  <li><strong>Large Block Sectioning:</strong> Stable cutting of large-surface paraffin blocks</li>
  <li><strong>Bone Pathology:</strong> Histological examination of decalcified bone specimens</li>
  <li><strong>Dermatology:</strong> Sectioning of thick skin biopsy specimens</li>
  <li><strong>Neuropathology:</strong> Sectioning of large-volume specimens such as brain tissue</li>
  <li><strong>Cryostat Sectioning:</strong> Suitable for frozen tissue sections</li>
</ul>

<h3>Why High Profile?</h3>
<p>High profile blades with their 13.97mm wide body provide maximum stability in the blade holder. This stability minimizes vibration during hard tissue cutting, enabling smooth, parallel sections. The 0.30mm thickness increases flexural rigidity, allowing safe cutting of large blocks.</p>

<h3>Coating & Quality</h3>
<p>Advanced coating technology applied to the stainless steel body minimizes friction during cutting. This coating extends blade life especially in hard and calcified tissues while preventing tissue morphology distortion. Available in PTFE, platinum/chrome or ceramic coating options.</p>`,
    seo: {
      title: 'B724 High Profile Microtome Blade 80mm | Hard Tissue Histology | Disposable Microtome Blade',
      description: 'B724 high profile microtome blade 80.01×13.97×0.30mm. For hard tissue, calcified bone, cryostat sectioning. Triple facet grind, stainless steel + coating. Leica, Thermo, Sakura compatible. Sheffield quality.',
      keywords: [
        'microtome blade', 'high profile microtome blade', 'disposable microtome blade',
        'histology blade', 'hard tissue blade', 'pathology blade', 'tissue sectioning blade',
        'B724 microtome blade', 'calcified tissue', 'cryostat blade', 'frozen section blade',
        'Leica microtome blade', 'Thermo microtome blade', 'Sakura microtome blade',
        'microtome blade price', '80mm microtome blade', 'bone pathology blade',
        'neuropathology', 'dermatology biopsy', 'large block sectioning',
        'Leica 818 alternative', 'high profile blade supplier',
        'microtome blade manufacturer', 'laboratory consumable',
      ],
    },
  },
};

export default productsEn;
