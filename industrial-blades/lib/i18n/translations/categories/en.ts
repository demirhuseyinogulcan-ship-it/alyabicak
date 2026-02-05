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
  // =============================================================================
  // INDUSTRIAL BLADES SUBCATEGORIES
  // =============================================================================
  
  '3-hole-slitting': {
    name: '3-Hole Slitting Blades',
    description: 'Professional 3-hole slitting blades for film, foil, paper and packaging cutting. High carbon steel manufacturing with coating options for long-lasting cutting performance. Industry standard for slitter rewinder machines in BOPP, COPP, PE, PP film converting.',
    seoKeywords: [
      // Primary terms
      '3 hole blade', 'three hole blade', '3-hole slitting blade', 'slitting blade', 'industrial razor blade',
      // Industry - Film & Packaging
      'film slitting blade', 'BOPP slitting blade', 'COPP slitting blade', 'PE film blade', 'PP film blade',
      'flexible packaging blade', 'packaging slitting blade', 'converter blade',
      // Industry - Paper & Foil
      'paper slitting blade', 'foil slitting blade', 'aluminum foil blade', 'paper converting blade',
      // Machine terms
      'slitter rewinder blade', 'rewinder blade', 'converting blade', 'slitter blade',
      // Technical - Material
      'carbon steel blade', 'high carbon blade', 'SK5 blade', 'C85 blade', 'titanium coated blade',
      'ceramic coated blade', 'TiN coated blade', 'stainless steel blade',
      // Dimensions
      '43x22 blade', '60x22 blade', '43mm slitting blade', '60mm slitting blade',
      // Commercial
      'slitting blade manufacturer', 'industrial blade supplier', 'bulk slitting blades',
      // Regional variants
      'razor slitting blade', 'slitting razor', 'web slitting blade'
    ],
  },
  
  'slotted-slitting': {
    name: 'Slotted Slitting Blades',
    description: 'Center-slotted slitting blades for quick machine mounting. High-performance blades designed for slitter rewinder machines. Preferred in BOPP, lamination, adhesive tape and flexible packaging industries.',
    seoKeywords: [
      // Primary terms
      'slotted blade', 'slotted slitting blade', 'center slot blade', 'slot mount blade',
      // Industry - Adhesive Tape
      'adhesive tape blade', 'tape slitting blade', 'BOPP tape blade', 'masking tape blade',
      'double sided tape blade', 'tape converting blade',
      // Industry - Lamination
      'lamination blade', 'laminating blade', 'coating blade',
      // Industry - Label
      'label slitting blade', 'sticker blade', 'barcode label blade',
      // Technical - Coating
      'titanium slotted', 'ceramic slotted', 'TiN coated slotted', 'XCD coating',
      'diamond coated blade', 'DLC coating', 'Endurium blade',
      // Technical - Material
      'carbon steel slotted', 'stainless slotted', 'tungsten carbide blade', 'HSS blade',
      // Machine
      'slitter rewinder', 'slitting machine', 'converting machine',
      // Dimensions
      '43x22 slotted', '60x22 slotted',
      // Commercial
      'slotted blade price', 'slotted blade manufacturer', 'slotted blade supplier'
    ],
  },
  
  'injector-slitting': {
    name: 'Injector Slitting Blades',
    description: 'Precision 38x8mm injector type slitting blades. Dual channel slot design for secure machine grip. Provides micron-level precision in label, thin film, optical film and precision foil cutting.',
    seoKeywords: [
      // Primary terms
      'injector blade', 'injector slitting blade', '38x8 blade', 'injector razor blade',
      // Dimensions
      '38x8x0.25 blade', '38x8x0.30 blade', '38x8x0.64 blade', '38mm blade',
      // Industry - Label
      'label cutting blade', 'label slitting blade', 'sticker blade', 'barcode blade',
      // Industry - Film
      'thin film blade', 'optical film blade', 'precision film cutting', 'micro cutting blade',
      // Industry - Laboratory
      'laboratory blade', 'precision cutting blade', 'micron cutting',
      // Technical - Coating
      'PTFE coated injector', 'teflon coated blade', 'titanium injector', 'ceramic injector',
      'XCD coated injector', 'tungsten injector', 'zirconia blade',
      // Technical - Material
      'carbon steel injector', 'stainless injector', 'HSS injector', 'Endurium injector',
      // Technical - Feature
      'dual channel blade', 'double channel injector', '2-slot blade',
      // Commercial
      'injector blade price', 'injector blade manufacturer', 'precision blade supplier'
    ],
  },
  
  'single-edge': {
    name: 'Single Edge Blades',
    description: 'Single cutting edge industrial blades for safe use. Preferred solution for glass scraping, label removal, surface cleaning and precision cutting applications.',
    seoKeywords: [
      // Primary terms
      'single edge blade', 'single edge razor', 'one sided blade', 'safety razor blade',
      // Applications
      'glass scraper blade', 'label remover blade', 'surface cleaning blade', 'paint scraper blade',
      'sticker removal', 'adhesive cleaning', 'residue scraping',
      // Industry
      'automotive blade', 'glass industry blade', 'cleaning blade', 'industrial scraper',
      // Technical
      'carbon steel single edge', 'stainless single edge', 'coated single edge',
      // Dimensions
      '40mm single edge', 'standard single edge', 'wide single edge',
      // Commercial
      'single edge blade price', 'single edge bulk'
    ],
  },
  
  'trapezoid-blades': {
    name: 'Trapezoid Blades',
    description: 'Multi-purpose trapezoid cutting blades. Standard trapezoid form used in utility knives, safety cutters and professional hand tools. Long-lasting performance in cardboard, carpet, linoleum, PVC and packaging cutting.',
    seoKeywords: [
      // Primary terms
      'trapezoid blade', 'trapezoidal blade', 'utility blade', 'utility knife blade',
      // Applications
      'cardboard cutting blade', 'carpet cutting blade', 'linoleum blade', 'PVC cutting blade',
      'box cutter blade', 'package opening blade', 'stretch cutting',
      // Compatibility
      'Stanley blade', 'utility blade replacement', 'cutter blade', 'cutting tip',
      // Technical
      'carbon steel trapezoid', 'stainless trapezoid', 'titanium trapezoid', 'coated trapezoid',
      'double end trapezoid', 'hook point trapezoid',
      // Commercial
      'trapezoid blade price', 'trapezoid blade bulk', 'utility blade supplier'
    ],
  },
  
  'hook-blades': {
    name: 'Hook Blades',
    description: 'Hook-point blades for special applications. Ergonomic design used in carpet, linoleum, roofing material, insulation and shrink film cutting. Provides safe cutting with pull motion.',
    seoKeywords: [
      // Primary terms
      'hook blade', 'hooked blade', 'hook point blade', 'curved blade',
      // Applications
      'carpet cutting blade', 'linoleum blade', 'roofing blade', 'membrane cutting',
      'insulation cutting', 'shrink cutting', 'stretch cutting', 'nylon cutting',
      // Industry
      'construction blade', 'flooring blade', 'insulation blade',
      // Technical
      'carbon hook blade', 'stainless hook blade', 'coated hook blade',
      // Commercial
      'hook blade price', 'hook blade bulk'
    ],
  },
  
  'craft-blades': {
    name: 'Snap-off Blades | Cutter',
    description: 'Professional craft blade tips and snap-off cutter blades. Sharp and durable tips preferred in graphic design, model making, hobby work and industrial precision cutting applications.',
    seoKeywords: [
      // Primary terms
      'craft blade', 'snap-off blade', 'cutter blade', 'hobby blade', 'precision blade',
      // Applications
      'graphic design blade', 'model making blade', 'precision cutting', 'fine cutting',
      'paper cutting', 'cardboard cutting', 'stencil cutting', 'mask cutting',
      // Compatibility
      'X-Acto blade', 'scalpel tip', 'hobby knife blade',
      // Types
      '#11 blade', '#10 blade', 'pointed tip', 'angled tip', 'round tip',
      // Technical
      'carbon craft blade', 'stainless craft blade', 'titanium craft blade',
      // Commercial
      'craft blade price', 'craft blade bulk', 'hobby blade supplier'
    ],
  },
  
  'hobby-blades': {
    name: 'Hobby Blades',
    description: 'Various blade types for hobby and craft work. Professional quality blades used in model making, scrapbook, origami, mock-up work and detailed cutting tasks.',
    seoKeywords: [
      // Primary terms
      'hobby blade', 'hobby knife blade', 'craft razor', 'art blade',
      // Applications
      'model making blade', 'scrapbook blade', 'origami blade', 'mock-up blade',
      'detail cutting', 'fine work blade', 'precision hobby',
      // Industry
      'architectural model', 'prototype cutting', 'crafts',
      // Commercial
      'hobby blade price', 'hobby knife set'
    ],
  },
  
  'scalpel-blades': {
    name: 'Scalpel – Surgical Blades',
    description: 'Scalpel and surgical blades for medical and industrial precision cutting. Surgical grade sharpness, used in histology laboratories, biological sample preparation and micro cutting applications.',
    seoKeywords: [
      // Primary terms
      'scalpel blade', 'surgical blade', 'scalpel', 'surgery knife', 'medical blade',
      // Medical
      'surgical razor', 'surgery blade', 'sterile scalpel', 'disposable scalpel',
      'pathology blade', 'autopsy knife',
      // Laboratory
      'histology blade', 'biology blade', 'laboratory cutter', 'sample preparation',
      'microtome alternative', 'tissue cutting',
      // Industrial
      'precision cutting blade', 'micro cutting', 'fine cutting',
      // Compatibility
      '#10 scalpel', '#11 scalpel', '#15 scalpel', '#20 scalpel', '#22 scalpel',
      // Commercial
      'scalpel price', 'surgical blade bulk', 'scalpel supplier'
    ],
  },
  
  'chopped-fiber': {
    name: 'Chopped Fiber Blades',
    description: 'Industrial blades specially designed for fiber cutting. High wear-resistant blades for cutting glass fiber, carbon fiber, aramid and technical fibers in chopper machines.',
    seoKeywords: [
      // Primary terms
      'chopped fiber blade', 'fiber cutting blade', 'fiber chopper blade', 'chopper blade',
      // Material types
      'glass fiber cutting', 'carbon fiber cutting', 'aramid cutting', 'kevlar cutting',
      'technical fiber blade', 'composite cutting',
      // Machine
      'chopper blade', 'fiber chopping blade', 'fiber chopper',
      // Technical
      'tungsten carbide fiber', 'ceramic fiber blade', 'wear resistant',
      // Industry
      'automotive composite', 'aerospace fiber', 'wind turbine',
      // Commercial
      'fiber blade price', 'chopper blade supplier'
    ],
  },
  
  'fiberglass': {
    name: 'Glass Fiber Blades',
    description: 'High-performance blades for glass fiber cutting. Special alloy blades with extreme wear resistance used in fiberglass production, insulation material cutting and composite industry.',
    seoKeywords: [
      // Primary terms
      'fiberglass blade', 'glass fiber blade', 'glass fiber knife', 'GRP blade',
      // Industry
      'insulation cutting blade', 'insulation blade', 'rock wool blade', 'glass wool cutting',
      'composite blade', 'GRP cutting', 'SMC cutting',
      // Applications
      'fiberglass slitting', 'fiber sizing', 'mat cutting', 'roving cutting',
      // Technical
      'tungsten carbide', 'ceramic coating', 'high hardness', 'wear resistance',
      // Commercial
      'fiberglass blade price', 'fiberglass cutter supplier'
    ],
  },
  
  'circular-blades': {
    name: 'Circular Blades',
    description: 'Circular blades for rotary cutting. Round blades in various diameters used in rotary cutters, fabric cutting, paper sizing and packaging machines.',
    seoKeywords: [
      // Primary terms
      'circular blade', 'round blade', 'rotary blade', 'rotary cutter blade',
      // Applications
      'fabric cutting blade', 'textile blade', 'rotary cutter', 'rotary cutter',
      'paper cutting', 'cardboard cutting', 'packaging blade',
      // Dimensions
      '28mm circular', '45mm circular', '60mm circular', 'large diameter blade',
      // Compatibility
      'OLFA rotary', 'Fiskars rotary', 'rotary cutter replacement',
      // Technical
      'sharp edge', 'wave edge', 'wavy edge', 'pinking blade',
      // Commercial
      'circular blade price', 'rotary blade bulk'
    ],
  },
  
  'pentagon-blades': {
    name: 'Pentagon Blades',
    description: 'Special geometry pentagon cutting blades. 5-corner industrial blades designed for cutting and piercing operations in shrink film, stretch film and packaging machines.',
    seoKeywords: [
      // Primary terms
      'pentagon blade', '5 corner blade', 'five sided blade', 'pentagonal blade',
      // Applications
      'shrink cutting', 'stretch cutting', 'film piercing', 'packaging blade',
      // Industry
      'packaging blade', 'box blade', 'packaging machine',
      // Commercial
      'pentagon blade price'
    ],
  },
  
  'lamella-blades': {
    name: 'Lamella / Leaf Blades',
    description: 'Lamella blades for thin and precise cuts. Ultra-thin leaf-shaped blades used in special cutting applications and precision slitting operations.',
    seoKeywords: [
      // Primary terms
      'lamella blade', 'leaf blade', 'thin blade', 'ultra thin blade',
      // Applications
      'precision slitting', 'thin cutting', 'micro cutting', 'ultra thin razor',
      // Technical
      'flexible blade', 'spring steel',
      // Commercial
      'lamella blade price', 'leaf blade supplier'
    ],
  },
  
  'microtome-blades': {
    name: 'Histology / Microtome Blades',
    description: 'Microtome blades for laboratory and histology applications. Special blades with ultra-sharp, optically flat surfaces for preparing tissue sections at micron thickness.',
    seoKeywords: [
      // Primary terms
      'microtome blade', 'histology blade', 'tissue cutting blade', 'sectioning blade',
      // Medical/Laboratory
      'pathology blade', 'biopsy blade', 'tissue section', 'paraffin cutting',
      'frozen section', 'cryostat blade', 'vibratome blade',
      // Technical
      'high profile', 'low profile', 'disposable microtome',
      '35 degree', '80mm microtome', 'S35 blade', 'R35 blade',
      // Brand compatibility
      'Leica microtome', 'Thermo microtome', 'Sakura microtome',
      // Commercial
      'microtome blade price', 'histology blade supplier'
    ],
  },
  
  'microkeratome-blades': {
    name: 'LASIK / Microkeratome Blades',
    description: 'Microkeratome blades for eye surgery and medical applications. Ultra-precise, single-use surgical blades used for corneal flap creation in LASIK operations.',
    seoKeywords: [
      // Primary terms
      'microkeratome blade', 'LASIK blade', 'eye surgery blade', 'corneal blade',
      // Medical
      'corneal blade', 'refractive surgery', 'flap cutting', 'ophthalmic blade',
      'eye surgery knife', 'keratome blade',
      // Brand compatibility
      'Moria microkeratome', 'Hansatome blade', 'Zyoptix blade',
      // Technical
      'single use', 'sterile blade', '130 micron', '160 micron',
      // Commercial
      'microkeratome price', 'LASIK blade supplier'
    ],
  },
  
  'glass-scraper': {
    name: 'Glass Scraper',
    description: 'Scraper blades for label and residue cleaning on glass surfaces. Used for paint, adhesive, label and film residue removal in automotive, construction and cleaning industries.',
    seoKeywords: [
      // Primary terms
      'glass scraper', 'glass scraper blade', 'scraper blade', 'window scraper',
      // Applications
      'label removal', 'adhesive cleaning', 'paint scraping', 'film removal',
      'glass cleaning', 'sticker scraping', 'residue cleaning',
      // Industry
      'automotive scraper', 'construction scraper', 'cleaning blade',
      'window cleaning', 'aquarium scraper',
      // Dimensions
      '40mm scraper', '100mm scraper', 'wide scraper',
      // Technical
      'carbon steel scraper', 'stainless scraper', 'plastic scraper',
      // Commercial
      'glass scraper price', 'scraper blade bulk'
    ],
  },
  
  'classic-blades': {
    name: 'Classic Razor Blades',
    description: 'Traditional double-edge classic razor blades. Standard form factor blades preferred in industrial use and special applications.',
    seoKeywords: [
      // Primary terms
      'classic blade', 'double edge blade', 'DE blade', 'traditional blade',
      // Industrial
      'industrial classic blade', 'industrial razor', 'factory blade',
      // Technical
      'carbon steel', 'stainless steel', 'platinum coated',
      // Commercial
      'classic blade bulk', 'double edge price'
    ],
  },
  
  'drywall-blades': {
    name: 'Drywall Blades',
    description: 'Special blades for drywall and gypsum board cutting. Used for precise cutting of drywall, chipboard and similar materials in construction industry.',
    seoKeywords: [
      // Primary terms
      'drywall blade', 'gypsum board blade', 'plasterboard blade', 'drywall cutter',
      // Materials
      'chipboard blade', 'MDF cutting', 'panel blade', 'board cutter',
      // Industry
      'construction blade', 'renovation blade', 'decoration blade',
      // Technical
      'serrated edge', 'straight edge', 'double sided',
      // Commercial
      'drywall blade price', 'drywall blade bulk'
    ],
  },
  
  'arrow-blades': {
    name: 'Arrow Blades',
    description: 'Professional arrow blades and razors. Arrow-shaped special cutting blades used in various industrial applications.',
    seoKeywords: [
      // Primary terms
      'arrow blade', 'arrow point blade', 'arrow razor', 'arrow cutter',
      // Applications
      'special cutting', 'industrial arrow', 'professional blade',
      // Commercial
      'arrow blade price'
    ],
  },

  // =============================================================================
  // MACHINE KNIVES SUBCATEGORIES
  // =============================================================================
  
  'advanced-processing': {
    name: 'Advanced Processing Knives',
    description: 'Professional knives for industrial advanced processing applications. Cutting systems used in special production processes requiring high precision.',
    seoKeywords: [
      // Primary terms
      'advanced processing knife', 'processing blade', 'custom production knife',
      // Industry
      'industrial process', 'production line knife', 'factory knife',
      // Technical
      'precision cutting', 'high tolerance', 'special alloy',
      // Commercial
      'processing knife price'
    ],
  },
  
  'thermoform-vacuum': {
    name: 'Vacuum Packaging Blades',
    description: 'Professional blades for thermoform and vacuum packaging machines. Compatible with Multivac, Tiromat, Opack, Betapak, GEA, Alcan, Ulma, Variovac, Colimatic, Ilpra machines. Star punches, triangle blades, air hole punches, contour and lama blades. Hygienic stainless steel meeting food industry standards.',
    seoKeywords: [
      // Primary terms
      'vacuum packaging blade', 'thermoform blade', 'MAP blade', 'vacuum knife',
      // Brand compatibility
      'Multivac blade', 'Tiromat blade', 'Opack blade', 'Betapak blade',
      'GEA blade', 'Alcan blade', 'Ulma blade', 'Variovac blade',
      'Colimatic blade', 'Ilpra blade', 'Webomatic blade',
      // Types
      'star punch', 'triangle blade', 'punch blade', 'contour blade',
      'lama blade', 'cutting blade', 'hole punch',
      // Industry
      'food packaging blade', 'meat packaging', 'cheese packaging', 'deli blade',
      // Technical
      'stainless steel', 'food grade', 'FDA compliant', 'hygienic blade',
      // Commercial
      'vacuum blade price', 'thermoform blade supplier', 'Multivac spare parts'
    ],
  },
  
  'circular-slitting': {
    name: 'Circular Slitting Knives',
    description: 'Professional knives for circular slitting machines. Round cutting knives used in bottom-top slitting systems, slitter rewinder machines and converting lines.',
    seoKeywords: [
      // Primary terms
      'circular slitting knife', 'circular slitting blade', 'round slitting knife',
      'bottom top knife', 'shear cut blade',
      // Industry
      'slitter rewinder knife', 'converting knife', 'winding knife',
      'paper slitting knife', 'film slitting knife', 'foil slitting knife',
      // Technical
      'tungsten carbide circular', 'HSS circular', 'D2 steel',
      'cutting angle', 'sharpening service',
      // Dimensions
      'various diameters', 'custom size', 'standard slitting',
      // Commercial
      'circular knife price', 'slitting knife supplier'
    ],
  },
  
  'recycling-knives': {
    name: 'Recycling Knives',
    description: 'Professional knives for recycling facilities. Durable cutting systems used in plastic, paper, metal and textile recycling with crusher, granulator and shredder machines.',
    seoKeywords: [
      // Primary terms
      'recycling knife', 'recycling blade', 'crusher knife', 'granulator knife',
      // Machine types
      'shredder blade', 'chipper knife', 'shredder knife', 'grinder knife',
      // Material types
      'plastic crusher knife', 'PET bottle crusher', 'film recycling',
      'paper crusher', 'textile crusher', 'rubber crusher',
      // Technical
      'high wear resistance', 'impact resistance', 'hardened steel',
      'rotor knife', 'fixed knife', 'moving knife',
      // Commercial
      'recycling knife price', 'crusher knife supplier'
    ],
  },
  
  'corrugated-slitting': {
    name: 'Corrugated Slitting Knives',
    description: 'Special knives for corrugated and cardboard slitting. Cutting and scoring knives used in corrugated cardboard production lines, box factories and packaging industry.',
    seoKeywords: [
      // Primary terms
      'corrugated knife', 'cardboard slitting knife', 'corrugated blade', 'corrugated slitter',
      // Machine
      'slotter knife', 'slitter scorer', 'cut score knife',
      // Industry
      'box factory knife', 'packaging knife', 'carton production',
      // Technical
      'tungsten carbide', 'HSS', 'chrome coating', 'sharpening service',
      // Commercial
      'corrugated knife price', 'cardboard knife supplier'
    ],
  },
  
  'rotary-cutting': {
    name: 'Rotary Cutting Knives',
    description: 'Professional knives for rotary cutting machines. Precision production knives used in high-speed rotary die cut, rotary punch and continuous cutting systems.',
    seoKeywords: [
      // Primary terms
      'rotary cutting knife', 'rotary die cut', 'rotary knife', 'rotary blade',
      // Machine
      'die cutting knife', 'punch knife', 'punch blade', 'perforation knife',
      // Industry
      'label die cut', 'packaging die cut', 'cardboard die cut',
      // Technical
      'flexible die', 'solid die', 'magnetic cylinder', 'anvil',
      // Commercial
      'rotary knife price', 'die cut supplier'
    ],
  },
  
  'serrated-knives': {
    name: 'Serrated Knives',
    description: 'Saw-toothed cutting knives. Blades with special tooth geometry used for slicing bread, cake, foam, insulation and similar materials.',
    seoKeywords: [
      // Primary terms
      'serrated knife', 'saw blade', 'toothed knife', 'scalloped knife',
      // Applications
      'bread knife', 'cake knife', 'foam cutting', 'sponge cutting',
      'insulation knife', 'styrofoam cutting',
      // Industry
      'bakery knife', 'food slicing', 'industrial slicing',
      // Technical
      'wave edge', 'scallop edge', 'tooth geometry',
      // Commercial
      'serrated knife price', 'serrated blade bulk'
    ],
  },
  
  'circular-crusher': {
    name: 'Circular Crusher Knives',
    description: 'Professional knives for circular crushing and cutting operations. High-strength knives used in crusher machines, compactors and pressing systems.',
    seoKeywords: [
      // Primary terms
      'crusher knife', 'crusher blade', 'crushing knife', 'circular crusher',
      // Machine
      'compactor knife', 'press knife', 'compression knife',
      // Technical
      'high strength', 'impact resistance', 'wear resistance',
      // Commercial
      'crusher knife price'
    ],
  },
  
  'derinder-knives': {
    name: 'Derinder Knives',
    description: 'Professional meat processing and derinder knives. Hygienic stainless knives used for skinning, fat trimming and portioning operations in meat industry.',
    seoKeywords: [
      // Primary terms
      'derinder knife', 'meat opening knife', 'skinning knife', 'skinning blade',
      // Operations
      'fat trimming knife', 'portioning knife', 'trimming knife', 'meat processing knife',
      // Brands
      'Maja derinder', 'Townsend derinder', 'Grasselli knife',
      // Industry
      'meat factory knife', 'slaughterhouse knife', 'abattoir knife',
      // Technical
      'stainless steel', 'food grade', 'sharpening service',
      // Commercial
      'derinder knife price', 'meat knife supplier'
    ],
  },
  
  'logsaw-knives': {
    name: 'Log-Saw Knives',
    description: 'Log-saw knives for toilet paper and paper towels. Special geometry circular knives used for roll cutting in paper converting facilities.',
    seoKeywords: [
      // Primary terms
      'log saw knife', 'log cutting knife', 'roll cutting knife', 'tissue knife',
      // Industry
      'toilet paper knife', 'paper towel knife', 'napkin cutting',
      'tissue converting', 'paper roll cutting',
      // Brands
      'Perini knife', 'PCMC knife', 'Gambini knife',
      // Technical
      'tungsten carbide', 'HSS', 'sharpening service',
      // Commercial
      'log saw price', 'tissue knife supplier'
    ],
  },
  
  'core-cutting': {
    name: 'Core Cutting Knives',
    description: 'Professional knives for core and bobbin cutting. Special design knives for cutting cores of paper, textile and film reels.',
    seoKeywords: [
      // Primary terms
      'core cutting knife', 'core cutting blade', 'bobbin cutting knife', 'tube cutting',
      // Materials
      'cardboard core', 'plastic core', 'spiral core',
      // Industry
      'paper factory', 'textile factory', 'film reel',
      // Technical
      'circular cutting', 'precision cutting',
      // Commercial
      'core knife price'
    ],
  },
  
  'case-sealer': {
    name: 'Case Sealer - Tape Knives',
    description: 'Cutting knives for packaging and case taping machines. Sharp and durable knives used for tape cutting in automatic taping lines.',
    seoKeywords: [
      // Primary terms
      'case sealer blade', 'tape knife', 'taping knife', 'tape cutter',
      // Machine
      'case sealing machine', 'automatic taping', 'packaging line',
      // Brands
      '3M knife', 'Siat knife', 'Belco knife',
      // Technical
      'sharp edge', 'long life', 'fast cutting',
      // Commercial
      'taping knife price'
    ],
  },
  
  'zig-zag-knives': {
    name: 'Zig Zag Knives',
    description: 'Special knives for zig zag cutting patterns. Special profile knives used for decorative edge cutting in fabric, paper and packaging materials.',
    seoKeywords: [
      // Primary terms
      'zig zag knife', 'zigzag cutter', 'pinking blade', 'wave knife',
      // Applications
      'fabric zig zag', 'paper cutting', 'decorative edge', 'fray prevention',
      // Industry
      'textile knife', 'fabric scissors', 'tailor scissors',
      // Commercial
      'zig zag knife price'
    ],
  },
  
  'band-knives': {
    name: 'Band Knives',
    description: 'Band saw and cutting knives. Continuous band knives used for high-precision slitting operations in foam, sponge, leather, textile and food industries.',
    seoKeywords: [
      // Primary terms
      'band knife', 'band blade', 'endless blade', 'continuous knife',
      // Industry
      'foam cutting knife', 'sponge slitting', 'leather cutting', 'textile slitting',
      'meat slicing knife', 'fish slicing', 'food band knife',
      // Technical
      'welded band', 'stainless band', 'carbon band', 'bi-metal',
      // Dimensions
      'various widths', 'custom size', 'standard length',
      // Commercial
      'band knife price', 'band knife supplier'
    ],
  },
  
  'tray-mold': {
    name: 'Tray (Bowl) Mold Knives',
    description: 'Professional knives for tray and bowl mold cutting. Cutting knives for foam tray, plastic bowl and thermo container production used in food packaging.',
    seoKeywords: [
      // Primary terms
      'tray knife', 'bowl knife', 'tray mold blade', 'mold knife',
      // Industry
      'foam tray', 'EPS cutting', 'plastic bowl', 'food container',
      // Machine
      'thermoform mold', 'vacuum mold', 'pressure mold',
      // Commercial
      'tray knife price'
    ],
  },
  
  'sausage-peeling': {
    name: 'Sausage Peeling Knives',
    description: 'Peeling knives for sausage production lines. Special design knives used for natural and artificial casing peeling operations.',
    seoKeywords: [
      // Primary terms
      'sausage peeling knife', 'peeling blade', 'casing peeling knife',
      // Operations
      'natural casing peeling', 'artificial casing', 'cellulose casing', 'collagen casing',
      // Brands
      'Townsend peeler', 'Marel peeler', 'Weber peeler',
      // Industry
      'meat processing', 'sausage factory', 'deli',
      // Commercial
      'sausage knife price'
    ],
  },
  
  'cnc-knives': {
    name: 'CNC Knives',
    description: 'Professional cutting knives for CNC machines. Special geometry knives for automatic cutting of fabric, leather, composite and packaging materials in digital cutting centers.',
    seoKeywords: [
      // Primary terms
      'CNC knife', 'CNC blade', 'digital cutter blade', 'automation knife',
      // Brands
      'Zund knife', 'Esko Kongsberg knife', 'Lectra knife', 'Gerber knife',
      'Bullmer knife', 'FK Group knife', 'Atom knife',
      // Materials
      'fabric CNC', 'leather CNC', 'carbon fiber CNC', 'composite CNC',
      'corrugated CNC', 'foam CNC',
      // Types
      'oscillating blade', 'drag blade', 'tangential blade', 'kiss cut',
      // Commercial
      'CNC knife price', 'digital cutter supplier'
    ],
  },
  
  'plotter-knives': {
    name: 'Plotter Knives',
    description: 'Professional knives for digital cutting plotters. Precision plotter tips used in vinyl cutting, foil cutting, sticker production and advertising industry.',
    seoKeywords: [
      // Primary terms
      'plotter knife', 'plotter blade', 'vinyl cutter blade', 'cutting plotter',
      // Brands
      'Roland plotter', 'Graphtec plotter', 'Mimaki plotter', 'Summa plotter',
      'Silhouette blade', 'Cricut blade',
      // Materials
      'vinyl cutting', 'foil cutting', 'sticker cutting', 'transfer film',
      'vehicle wrap', 'signage cutting',
      // Types
      '45 degree', '60 degree', 'standard tip', 'precision tip',
      // Commercial
      'plotter knife price', 'vinyl cutter supplier'
    ],
  },

  // =============================================================================
  // SAFETY & HAND KNIVES SUBCATEGORIES
  // =============================================================================
  
  'auto-retract': {
    name: 'Auto-Retract Safety Knives',
    description: 'Safety knives with blade that automatically retracts after cutting. Smart mechanism preventing workplace accidents for safe cutting in warehouse, logistics and production facilities.',
    seoKeywords: [
      // Primary terms
      'auto retract knife', 'automatic retract knife', 'safety knife',
      'auto knife', 'self-retracting knife',
      // Industry
      'warehouse knife', 'logistics knife', 'factory safety', 'workplace safety knife',
      // Brands
      'Martor knife', 'Olfa safety', 'Slice safety', 'PHC knife',
      // Applications
      'box opening', 'stretch cutting', 'package opening', 'tape cutting',
      // Commercial
      'safety knife price', 'auto retract bulk'
    ],
  },
  
  'fixed-blade': {
    name: 'Fixed Blade Knives',
    description: 'Professional safety cutters with fixed blade tips. Ergonomic hand knives designed for durable and safe cutting in heavy-duty applications.',
    seoKeywords: [
      // Primary terms
      'fixed blade knife', 'fixed blade', 'fixed knife', 'safety cutter',
      // Applications
      'heavy duty knife', 'industrial hand knife',
      // Industry
      'warehouse cutter', 'factory knife', 'production knife',
      // Commercial
      'fixed blade price'
    ],
  },
  
  'safety-cutters': {
    name: 'Safety Cutters',
    description: 'Specially designed certified safety knives. Professional cutters minimizing workplace accidents with cut depth control, guarded blade edge and ergonomic design.',
    seoKeywords: [
      // Primary terms
      'safety cutter', 'safety knife', 'workplace safety knife', 'safe cutter',
      // Features
      'cut depth control', 'guarded blade', 'hidden blade', 'concealed blade',
      // Certification
      'TUV approved', 'CE certified', 'safety certified',
      // Industry
      'food safety knife', 'warehouse safety', 'logistics safety',
      // Brands
      'Martor', 'Slice', 'Klever', 'PHC', 'Secumax',
      // Commercial
      'safety cutter price', 'safety knife bulk', 'workplace cutter'
    ],
  },
  
  'utility-knives': {
    name: 'Utility Knives',
    description: 'Professional utility and box cutters. Replaceable tip utility knives with ergonomic handles for general purpose cutting tasks.',
    seoKeywords: [
      // Primary terms
      'utility knife', 'box cutter', 'cutting knife', 'general purpose knife',
      // Types
      'snap-off utility', 'snap blade', 'replaceable tip',
      'retractable utility', 'adjustable utility',
      // Applications
      'cardboard cutting', 'paper cutting', 'package opening', 'general cutting',
      // Brands
      'Stanley utility', 'Olfa utility', 'Wurth utility', 'Irwin utility',
      // Dimensions
      '9mm utility', '18mm utility', '25mm utility', 'wide utility',
      // Commercial
      'utility knife price', 'box cutter bulk'
    ],
  },
  
  'deburring-hobby': {
    name: 'Deburring & Hobby Knives',
    description: 'Special knives for detailed work, deburring and hobby applications. Ergonomic hand tools for edge correction and precision cutting in metal, plastic and wood processing.',
    seoKeywords: [
      // Primary terms
      'deburring knife', 'deburring tool', 'hobby knife', 'detail knife',
      // Applications
      'metal deburring', 'plastic deburring', 'edge correction', 'burr removal',
      'precision cutting', 'model making',
      // Brands
      'Noga deburring', 'Shaviv deburring', 'X-Acto hobby',
      // Industry
      'machine shop', 'model workshop', 'prototype',
      // Commercial
      'deburring price', 'hobby knife bulk'
    ],
  },
  
  'olfa-rotary': {
    name: 'OLFA Rotary Cutters',
    description: 'OLFA brand rotary cutting blades and rotary cutter systems. World standard quality for precision cutting of fabric, paper, leather and various materials.',
    seoKeywords: [
      // Primary terms
      'OLFA rotary', 'OLFA circular', 'rotary cutter', 'rotary cutter',
      // Models
      'OLFA RTY-2', 'OLFA RTY-3', '28mm rotary', '45mm rotary', '60mm rotary',
      // Applications
      'fabric cutting', 'leather cutting', 'paper cutting', 'patchwork',
      'quilting', 'tailoring', 'sewing',
      // Commercial
      'OLFA rotary price', 'rotary cutter replacement blade'
    ],
  },
  
  'olfa-craft': {
    name: 'OLFA Craft Knives',
    description: 'OLFA professional craft and precision cutting knife series. Original Japanese quality preferred in graphic design, model making and detailed cutting tasks.',
    seoKeywords: [
      // Primary terms
      'OLFA craft knife', 'OLFA precision', 'OLFA hobby',
      // Models
      'OLFA AK-1', 'OLFA AK-4', 'OLFA CK-2', 'OLFA SVR-1',
      // Applications
      'graphic cutting', 'stencil cutting', 'model making', 'detail cutting',
      'mask cutting', 'paper art',
      // Commercial
      'OLFA craft price', 'OLFA craft blade'
    ],
  },
  
  'olfa-safety': {
    name: 'OLFA Safety Knives',
    description: 'OLFA safety certified professional cutter products. OLFA safety knives with smart mechanisms preventing accidents that comply with workplace safety standards.',
    seoKeywords: [
      // Primary terms
      'OLFA safety', 'OLFA safety knife', 'OLFA workplace safety',
      // Models
      'OLFA SK-4', 'OLFA SK-6', 'OLFA SK-9', 'OLFA SK-10', 'OLFA SK-16',
      // Features
      'auto retract', 'hidden blade', 'safe cutting',
      // Industry
      'warehouse safety', 'logistics knife', 'factory safety',
      // Commercial
      'OLFA safety price', 'OLFA safety bulk'
    ],
  },
  
  'blade-disposal': {
    name: 'Blade Disposal Containers',
    description: 'Storage containers for safe collection of cutting tool waste. Workplace safety equipment for safe disposal of used blades, blade tips and cutting tools.',
    seoKeywords: [
      // Primary terms
      'blade disposal', 'blade disposal box', 'blade storage', 'cutting waste',
      // Types
      'blade collection box', 'blade tip box', 'sharps container',
      'safe disposal', 'waste container',
      // Industry
      'workplace safety equipment', 'workshop equipment', 'factory safety',
      // Brands
      'OLFA DC-2', 'OLFA DC-3', 'Martor blade box',
      // Commercial
      'disposal box price', 'blade storage bulk'
    ],
  },
};
