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
  'b101': {
    name: 'B101 - Slotted Slicing Blade – Type A',
    description: 'Industrial slotted slicing blade Type A. Sheffield quality professional cutting blade for precision slitting.',
    features: ['Precision edge', 'Sheffield quality', 'Industrial grade'],
    applications: ['Film slitting', 'Tape cutting', 'Label cutting'],
  },
  'b102': {
    name: 'B102 - Slotted Slicing Blade – Type B',
    description: 'Industrial slotted slicing blade Type B. Sheffield quality professional cutting blade.',
    features: ['Precision edge', 'Sheffield quality', 'Industrial grade'],
    applications: ['Film slitting', 'Tape cutting', 'Label cutting'],
  },
  'b103': {
    name: 'B103 - Slotted Slicing Blade – Type C (Standard)',
    description: 'Industrial slotted slicing blade Type C, the standard model. Sheffield quality professional cutting blade.',
    features: ['Standard type', 'Sheffield quality', 'Industrial grade', 'Most popular'],
    applications: ['Film slitting', 'Tape cutting', 'Label cutting', 'General industrial use'],
  },
  'b104': {
    name: 'B104 - Slotted Slicing Blade – Type D',
    description: 'Industrial slotted slicing blade Type D. Sheffield quality professional cutting blade.',
    features: ['Precision edge', 'Sheffield quality', 'Industrial grade'],
    applications: ['Film slitting', 'Tape cutting', 'Label cutting'],
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
  '38': {
    name: '38 x 8 Injector Slicing Blade – Slotless B203',
    description: 'Injector type slicing blade without slot. Sheffield quality professional cutting blade.',
    features: ['Slotless design', 'Sheffield quality', 'Injector compatible'],
    applications: ['Precision cutting', 'Industrial slitting'],
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
    description: 'Specialized blade for vacuum packaging machines. Clean, precise cuts for packaging applications.',
    features: ['Packaging optimized', 'Clean cuts', 'Industrial grade'],
    applications: ['Vacuum packaging', 'Food industry', 'Industrial packaging'],
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
    description: 'Contour blade designed for thermoform vacuum packaging machines.',
    features: ['Contour design', 'Thermoform compatible', 'Clean cuts'],
    applications: ['Vacuum packaging', 'Thermoforming', 'Food packaging'],
  },
  'yarim': {
    name: 'Half Star Punches',
    description: 'Half star punch blades for industrial punching applications.',
    features: ['Half star design', 'Industrial grade'],
    applications: ['Punching operations', 'Industrial cutting'],
  },
  'tam': {
    name: 'Full Star Punches',
    description: 'Full star punch blades for industrial punching applications.',
    features: ['Full star design', 'Industrial grade'],
    applications: ['Punching operations', 'Industrial cutting'],
  },
  'dz-biaklar': {
    name: 'Straight Blades - Lama Blades',
    description: 'Straight lama blades for industrial cutting machines.',
    features: ['Straight edge', 'Lama design', 'Industrial grade'],
    applications: ['Industrial cutting', 'Machine cutting'],
  },
  'dairesel': {
    name: 'Circular Blades',
    description: 'Circular blades for rotary cutting applications.',
    features: ['Circular design', 'Rotary compatible', 'Industrial grade'],
    applications: ['Rotary cutting', 'Industrial applications'],
  },
  'yuvarlak': {
    name: 'Round Air Punch',
    description: 'Round air punch blades for pneumatic punching systems.',
    features: ['Round design', 'Air compatible', 'Precision'],
    applications: ['Pneumatic punching', 'Industrial applications'],
  },
  'oval': {
    name: 'Oval Air Punch',
    description: 'Oval air punch blades for pneumatic punching systems.',
    features: ['Oval design', 'Air compatible', 'Precision'],
    applications: ['Pneumatic punching', 'Industrial applications'],
  },
  'dili': {
    name: 'Serrated Blades',
    description: 'Serrated blades for cutting tough materials.',
    features: ['Serrated edge', 'Enhanced grip', 'Industrial grade'],
    applications: ['Tough material cutting', 'Industrial use'],
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
};

export default productsEn;
