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
    seo: {
      title: 'Slotted Blade Ceramic Coating | 3200 HV Ultra-Hard Slitting Blade',
      description: 'Ceramic coated slotted slitting blade with 3200 HV hardness. Ideal for abrasive materials, fiberglass, carbon fiber, and sandpaper cutting. 5-7x longer life.',
      keywords: ['slotted blade ceramic', 'ceramic coated blade', 'abrasive material blade', 'fiberglass blade', 'carbon fiber blade', 'sandpaper blade', 'technical textile blade', 'ultra hard blade', '3200 HV blade', '57x19 blade', '57x19mm blade', 'slotted ceramic blade', 'abrasive cutting blade', 'fiberglass cutting blade', 'carbon fiber blade', 'sandpaper slitting blade', 'industrial ceramic blade', 'high hardness blade']
    },
  },
  'slotted-paslanmaz': {
    name: 'Slotted Slitting Blade - Stainless Steel',
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
    seo: {
      title: 'Slotted Blade Stainless Steel | FDA Approved Food Industry Blade',
      description: 'Stainless steel slotted slitting blade, AISI 420, FDA approved. Corrosion resistant, ideal for food packaging, pharmaceutical, and humid environment applications.',
      keywords: ['slotted blade stainless', 'stainless steel blade', 'food blade', 'hygienic blade', 'FDA approved blade', 'corrosion resistant blade', 'humid environment blade', 'AISI 420 blade', '57x19 blade', '57x19mm blade', 'slotted stainless blade', 'food grade blade', 'hygienic blade', 'corrosion resistant blade', 'medical packaging blade', 'pharmaceutical blade', 'rust free blade', 'inox blade']
    },
  },
  'slotted-paslanmaz-titanyum': {
    name: 'Slotted Slitting Blade - Stainless Steel + Titanium Coating',
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
    seo: {
      title: 'Slotted Blade Stainless + Titanium | Dual Protection Industrial Blade',
      description: 'Stainless steel + TiN titanium coated slotted blade. Dual protection against corrosion and wear. Ideal for food lamination, pharmaceutical blister, and medical foil applications.',
      keywords: ['slotted stainless titanium blade', 'stainless titanium coating', 'stainless titanium blade', 'TiN stainless blade', 'food lamination blade', 'pharmaceutical packaging blade', 'blister cutting blade', 'sterile packaging blade', 'medical foil blade', '57x19 blade', '57x19mm blade', 'slotted stainless TiN', 'dual protection blade', 'corrosion wear resistant', 'hygienic titanium blade', 'pharmaceutical cutting blade', 'medical foil blade', 'premium slotted blade']
    },
  },
  'slotted-paslanmaz-xcd': {
    name: 'Slotted Slitting Blade - Stainless Steel + XCD Coating',
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
    seo: {
      title: 'Slotted Blade XCD Diamond Coating | 5000 HV Non-Stick Blade',
      description: 'XCD diamond-like carbon coated slotted blade, 5000 HV hardness, <0.1 friction. Non-stick properties for ultra-adhesive tapes, silicone coatings, and medical adhesives.',
      keywords: ['slotted blade XCD coating', 'diamond coated blade', 'DLC coated blade', 'diamond coated blade', 'adhesive tape blade', 'silicone cutting blade', 'adhesive label blade', 'ultra low friction blade', '5000 HV blade', '57x19 blade', '57x19mm blade', 'slotted XCD blade', 'diamond like carbon blade', 'non-stick blade', 'adhesive tape blade', 'silicone cutting blade', 'resin impregnated fabric blade', 'medical adhesive blade', 'premium diamond blade']
    },
  },
  'slotted-endurium-seramik': {
    name: 'Slotted Slitting Blade - Endurium Steel + Ceramic Coating',
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
    seo: {
      title: 'Slotted Blade Endurium HSS Ceramic | 600°C High-Speed Blade',
      description: 'Endurium HSS + ceramic coated slotted blade. HRC 64-66 substrate, 3500 HV coating, 600°C resistance. For high-speed slitting, metal foil, and 24/7 production lines.',
      keywords: ['slotted blade Endurium', 'HSS blade', 'high speed steel blade', 'ceramic coated HSS', '600 degree blade', 'metal foil blade', 'composite cutting blade', '57x19 blade', '57x19mm blade', 'slotted HSS blade', 'high speed steel blade', 'Endurium ceramic blade', 'thermal shock resistant blade', 'high temperature blade', 'metal foil slitting', 'composite cutting blade', 'continuous production blade', 'premium industrial blade']
    },
  },
  'slotted-yekpare-tungsten': {
    name: 'Slotted Slitting Blade - Solid Tungsten Carbide',
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
    seo: {
      title: 'Slotted Blade Tungsten Carbide | HRA 92-94 Ultra-Hard Blade',
      description: 'Solid tungsten carbide slotted blade, HRA 92-94 hardness, 20-50x longer life. For ceramic paper, metal foil, battery electrode, and ultra-abrasive material cutting.',
      keywords: ['slotted tungsten carbide blade', 'solid tungsten blade', 'carbide blade', 'WC blade', 'tungsten carbide blade', 'solid carbide blade', 'ceramic paper blade', 'metal foil blade', 'battery electrode blade', '57x19 blade', '57x19mm blade', 'slotted carbide blade', 'monolithic carbide', 'ultra hard blade', 'abrasive material blade', 'battery electrode blade', 'ceramic paper blade', 'premium tungsten blade', 'carbide slitting blade']
    },
  },
  'slotted-yekpare-seramik': {
    name: 'Slotted Slitting Blade - Solid Ceramic (Zirconia)',
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

  '38-2': {
    name: '38 x 19 Single Edge Blade – Cased – Notched B201 (Standard)',
    description: 'Standard single edge blade with protective case and notched design. Sheffield quality.',
    features: ['Protective case', 'Notched design', 'Single edge', 'Standard type'],
    applications: ['General cutting', 'Packaging', 'Industrial use'],
  },
  'b208': {
    name: 'B208 - Pointed Tip (Standard)',
    description: 'Standard pointed tip blade for precision work. Sheffield quality professional blade.',
    features: ['Pointed tip', 'Precision edge', 'Standard type'],
    applications: ['Detailed work', 'Precision cutting', 'Crafts'],
  },
  'b092': {
    name: 'B092 - Holeless Blade',
    description: 'Industrial blade without mounting holes. Sheffield quality professional cutting blade.',
    features: ['Holeless design', 'Sheffield quality', 'Industrial grade'],
    applications: ['Special applications', 'Custom mounting'],
  },
  'b207-2': {
    name: 'B207 - L Size',
    description: 'L-size variant of the B207 blade series. Sheffield quality professional blade.',
    features: ['L size', 'Sheffield quality', 'Professional use'],
    applications: ['Industrial cutting', 'General use'],
  },
  'b226': {
    name: 'B226 - Supaslit Blade',
    description: 'Supaslit precision blade for industrial slitting applications. Sheffield quality.',
    features: ['Supaslit design', 'High precision', 'Sheffield quality'],
    applications: ['Precision slitting', 'Film cutting', 'Industrial use'],
  },
  'b204': {
    name: 'B204 - Classic Blade',
    description: 'Classic design industrial blade. Sheffield quality professional cutting blade.',
    features: ['Classic design', 'Proven performance', 'Sheffield quality'],
    applications: ['General cutting', 'Industrial use', 'Everyday tasks'],
  },
  'b207-3': {
    name: 'B207 - XXL (Extra Long)',
    description: 'Extra long variant of the B207 blade series for extended reach. Sheffield quality.',
    features: ['Extra long', 'Extended reach', 'Sheffield quality'],
    applications: ['Deep cuts', 'Large materials', 'Industrial use'],
  },

  // B1xx Series
  'b111': {
    name: 'B111 Industrial Blade',
    description: 'B111 series industrial blade. Sheffield quality professional cutting blade.',
  },
  'b112': {
    name: 'B112 Industrial Blade',
    description: 'B112 series industrial blade. Sheffield quality professional cutting blade.',
  },
  'b113': {
    name: 'B113 Industrial Blade',
    description: 'B113 series industrial blade. Sheffield quality professional cutting blade.',
  },
  'b114': {
    name: 'B114 Industrial Blade',
    description: 'B114 series industrial blade. Sheffield quality professional cutting blade.',
  },

  // B14x Series
  'b141': {
    name: 'B141 Industrial Blade',
    description: 'B141 series industrial blade. Sheffield quality professional cutting blade.',
  },
  'b142': {
    name: 'B142 - Large',
    description: 'Large size B142 industrial blade. Sheffield quality professional cutting blade.',
  },
  'b143': {
    name: 'B143 Industrial Blade',
    description: 'B143 series industrial blade. Sheffield quality professional cutting blade.',
  },
  'b144': {
    name: 'B144 Industrial Blade',
    description: 'B144 series industrial blade. Sheffield quality professional cutting blade.',
  },
  'b145': {
    name: 'B145 Industrial Blade',
    description: 'B145 series industrial blade. Sheffield quality professional cutting blade.',
  },
  'b146': {
    name: 'B146 Industrial Blade',
    description: 'B146 series industrial blade. Sheffield quality professional cutting blade.',
  },
  'b147': {
    name: 'B147 Industrial Blade',
    description: 'B147 series industrial blade. Sheffield quality professional cutting blade.',
  },
  'b148': {
    name: 'B148 Industrial Blade',
    description: 'B148 series industrial blade. Sheffield quality professional cutting blade.',
  },
  'b149': {
    name: 'B149 Industrial Blade',
    description: 'B149 series industrial blade. Sheffield quality professional cutting blade.',
  },
  'b150': {
    name: 'B150 Industrial Blade',
    description: 'B150 series industrial blade. Sheffield quality professional cutting blade.',
  },
  'b151': {
    name: 'B151 Industrial Blade',
    description: 'B151 series industrial blade. Sheffield quality professional cutting blade.',
  },

  // KB Series
  'kb-5': {
    name: 'KB-5 Industrial Blade',
    description: 'KB-5 series industrial blade. Sheffield quality professional cutting blade.',
  },
  'kb4-r5': {
    name: 'KB4-R/5 Industrial Blade',
    description: 'KB4-R/5 series industrial blade. Sheffield quality professional cutting blade.',
  },
  'kb4-ns3': {
    name: 'KB4-NS/3 Industrial Blade',
    description: 'KB4-NS/3 series industrial blade. Sheffield quality professional cutting blade.',
  },
  'kb4-ws3': {
    name: 'KB4-WS/3 Industrial Blade',
    description: 'KB4-WS/3 series industrial blade. Sheffield quality professional cutting blade.',
  },

  // Other Hobby Blades
  'b581': {
    name: 'B581 Industrial Blade',
    description: 'B581 industrial blade. Sheffield quality professional cutting blade.',
  },
  'b657': {
    name: 'B657 Industrial Blade',
    description: 'B657 industrial blade. Sheffield quality professional cutting blade.',
  },
  '2cs1': {
    name: '2CS1 Industrial Blade',
    description: '2CS1 industrial blade. Sheffield quality professional cutting blade.',
  },
  'b084075': {
    name: 'B084.075 Industrial Blade',
    description: 'B084.075 industrial blade. Sheffield quality professional cutting blade.',
  },

  // =============================================================================
  // SANAYİ JİLETLERİ - TRAPEZ BIÇAKLAR
  // =============================================================================
  'b207': {
    name: 'B207 - Trapezoid – Heavy Duty',
    description: 'Heavy duty trapezoid blade for demanding industrial applications. Sheffield quality.',
    features: ['Heavy duty', 'Trapezoid design', 'Sheffield quality', 'Industrial grade'],
    applications: ['Heavy cutting', 'Industrial packaging', 'Warehouse use'],
  },
  'b206': {
    name: 'B206 - Trapezoid Blade – Thin',
    description: 'Thin trapezoid blade for precision applications. Sheffield quality professional blade.',
    features: ['Thin profile', 'Trapezoid design', 'Sheffield quality'],
    applications: ['Precision cutting', 'Light materials', 'Detail work'],
  },
  'b082': {
    name: 'B082 - Trapezoid – Serrated Edge',
    description: 'Serrated edge trapezoid blade for enhanced grip on tough materials. Sheffield quality.',
    features: ['Serrated edge', 'Enhanced grip', 'Trapezoid design'],
    applications: ['Tough materials', 'Rope cutting', 'Fibrous materials'],
  },
  'trapez': {
    name: 'Trapezoid – Custom Design',
    description: 'Custom design trapezoid blade for specialized applications. Sheffield quality.',
    features: ['Custom design', 'Specialized', 'Sheffield quality'],
    applications: ['Custom applications', 'Special requirements'],
  },

  // =============================================================================
  // SANAYİ JİLETLERİ - KANCA BIÇAKLAR
  // =============================================================================
  'sper': {
    name: 'Super Hook – Long',
    description: 'Long super hook blade for extended reach applications. Sheffield quality professional blade.',
    features: ['Extended length', 'Hook design', 'Sheffield quality'],
    applications: ['Strap cutting', 'Film removal', 'Shrink wrap'],
  },
  'yuvarlatilmi': {
    name: 'Rounded Tip Hook',
    description: 'Safety hook blade with rounded tip to prevent surface damage. Sheffield quality.',
    features: ['Rounded tip', 'Safety design', 'Sheffield quality'],
    applications: ['Safe cutting', 'Surface protection', 'Delicate materials'],
  },
  'if': {
    name: 'IF – Hook (Textile)',
    description: 'Textile industry hook blade designed for fabric cutting. Sheffield quality.',
    features: ['Textile optimized', 'Hook design', 'Sheffield quality'],
    applications: ['Fabric cutting', 'Textile industry', 'Garment production'],
  },
  'b209': {
    name: 'B209 - Single-Sided Hook',
    description: 'Single-sided hook blade for controlled cutting direction. Sheffield quality.',
    features: ['Single-sided', 'Directional cutting', 'Sheffield quality'],
    applications: ['Controlled cuts', 'One-direction slitting', 'Industrial use'],
  },
  'kanca': {
    name: 'Hook HOB-1',
    description: 'HOB-1 series hook blade for general hook cutting applications. Sheffield quality.',
    features: ['HOB-1 series', 'General purpose', 'Sheffield quality'],
    applications: ['General hook cutting', 'Industrial use'],
  },

  // =============================================================================
  // SANAYİ JİLETLERİ - FALÇATA BIÇAKLAR
  // =============================================================================
  'b122': {
    name: 'B122 - Segmented Utility Blade Width: 9mm',
    description: 'Segmented snap-off utility blade, 9mm width. Sheffield quality professional blade.',
    features: ['Segmented design', 'Snap-off sections', '9mm width', 'Sheffield quality'],
    applications: ['General cutting', 'Craft work', 'Office use'],
  },
  'b124': {
    name: 'B124 - Non-Segmented Utility Blade Width: 9mm',
    description: 'Non-segmented utility blade, 9mm width. Sheffield quality professional blade.',
    features: ['Continuous edge', '9mm width', 'Sheffield quality'],
    applications: ['Precision cutting', 'Clean cuts', 'Professional use'],
  },
  'b121': {
    name: 'B121 - Segmented Utility Blade Width: 18mm',
    description: 'Segmented snap-off utility blade, 18mm width for heavy-duty work. Sheffield quality.',
    features: ['Segmented design', 'Snap-off sections', '18mm width', 'Heavy duty'],
    applications: ['Heavy cutting', 'Cardboard', 'Industrial use'],
  },
  'b123': {
    name: 'B123 - Non-Segmented Utility Blade Width: 18mm',
    description: 'Non-segmented utility blade, 18mm width. Sheffield quality professional blade.',
    features: ['Continuous edge', '18mm width', 'Sheffield quality'],
    applications: ['Heavy duty cutting', 'Professional use'],
  },
  'b096': {
    name: 'B096 - Non-Segmented Utility Blade Width: 12mm – Oval Slot',
    description: 'Non-segmented utility blade with oval slot, 12mm width. Sheffield quality.',
    features: ['Oval slot', 'Non-segmented', '12mm width'],
    applications: ['Special holders', 'Industrial use'],
  },
  'segmentli': {
    name: 'Segmented Utility Blade Width: 12.5mm',
    description: 'Segmented utility blade, 12.5mm width. Sheffield quality professional blade.',
    features: ['Segmented design', '12.5mm width', 'Sheffield quality'],
    applications: ['General cutting', 'Industrial use'],
  },
  'lwb': {
    name: 'LWB - Non-Segmented Utility Blade Width: 18mm – Serrated',
    description: 'Serrated non-segmented utility blade, 18mm width. Sheffield quality.',
    features: ['Serrated edge', 'Non-segmented', '18mm width'],
    applications: ['Tough materials', 'Industrial cutting'],
  },
  'b126': {
    name: 'B126 - Segmented Utility Blade Width: 25mm',
    description: 'Extra wide segmented utility blade, 25mm width for maximum cutting depth. Sheffield quality.',
    features: ['Extra wide', 'Segmented design', '25mm width', 'Maximum depth'],
    applications: ['Deep cuts', 'Thick materials', 'Industrial use'],
  },
  'b125': {
    name: 'B125 - Non-Segmented Utility Blade Width: 25mm',
    description: 'Extra wide non-segmented utility blade, 25mm width. Sheffield quality professional blade.',
    features: ['Extra wide', 'Continuous edge', '25mm width'],
    applications: ['Heavy duty', 'Professional cutting'],
  },
  'hswb1': {
    name: 'HSWB1 - Non-Segmented Utility Blade Width: 25mm – Serrated',
    description: 'Serrated extra wide utility blade, 25mm width for demanding applications. Sheffield quality.',
    features: ['Serrated edge', 'Extra wide', '25mm width'],
    applications: ['Tough materials', 'Industrial cutting', 'Heavy duty'],
  },

  // =============================================================================
  // MANUEL ÜRÜNLER - products.ts
  // =============================================================================
  'h006-001-x01': {
    name: 'RETRO LIGHT KNIFE – Cast Metal Hand Knife',
    description: 'Cast metal body hand knife meeting safety standards. Durable cast metal construction with ergonomic design.',
    features: ['Cast metal body', 'Ergonomic design', 'Long lasting'],
    applications: ['General cutting', 'Package opening', 'Cardboard cutting'],
  },
  'h008-001-a03': {
    name: 'AUTO RETRACT – Auto-Retractable Safety Knife',
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
    description: 'Industrial slitting blade with 3 mounting holes, 0.20mm thickness. Sheffield quality steel with titanium coating for extended durability.',
    features: ['3 mounting holes', '0.20mm thickness', 'Sheffield quality', 'Titanium coating'],
    applications: ['Film slitting', 'Paper cutting', 'Textile cutting', 'Industrial slitting'],
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
};

export default productsEn;
