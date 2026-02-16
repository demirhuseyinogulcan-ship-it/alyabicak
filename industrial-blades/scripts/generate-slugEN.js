/**
 * Auto-generate slugEN for products missing English slugs.
 * Run: node scripts/generate-slugEN.js
 */
const fs = require('fs');
const path = require('path');

// Turkish → English slug word mapping
const WORD_MAP = {
  // Materials
  'karbon': 'carbon', 'celik': 'steel', 'paslanmaz': 'stainless',
  'titanyum': 'titanium', 'seramik': 'ceramic', 'tungsten': 'tungsten',
  'karbur': 'carbide', 'zirkonya': 'zirconia', 'endurium': 'endurium',
  'kaplama': 'coated',

  // Blade types
  'jilet': 'blade', 'jileti': 'blade', 'bicak': 'blade', 'bicagi': 'knife',
  'bicaklar': 'blades', 'bicaklari': 'knives', 'biaklar': 'blades',
  'biai': 'blade', 'biak': 'blade',

  // Slitting
  'dilme': 'slitting', 'slotted': 'slotted', 'injektor': 'injector',
  'yuvali': 'slotted', 'yuvasiz': 'slotless', 'kanalli': 'channeled',
  'cizikli': 'scored', 'delikli': '3-hole', 'deliksiz': 'holeless',
  '3': '3',

  // Trapezoid
  'trapez': 'trapezoid', 'kalin': 'heavy-duty', 'ince': 'thin',
  'tirtikli': 'serrated', 'kompakt': 'compact', 'mikro': 'micro',
  'orta': 'medium',

  // Snap-off / Craft
  'segmentli': 'segmented', 'segmentsiz': 'non-segmented',
  'falcata': 'snap-off', 'genislik': 'width', 'disli': 'toothed',

  // Hook blades
  'kanca': 'hook', 'yuvarlatilmi': 'rounded', 'uclu': 'tipped',
  'tekstil': 'textile', 'tek': 'single', 'tarafli': 'sided',
  'hob': 'hobby',

  // Hobby/pointed
  'sivri': 'pointed', 'uc': 'tip', 'standart': 'standard',
  'tip': 'type', 'buyuk': 'large', 'klasik': 'classic',
  'uzun': 'long', 'kisa': 'short', 'supaslit': 'supaslit',
  'ozel': 'custom', 'tasarim': 'design',

  // Safety knives
  'el': 'hand', 'dokum': 'die-cast', 'metal': 'metal',
  'otomatik': 'automatic', 'geri': 'auto', 'cekilebilir': 'retract',
  'maket': 'utility', 'is': 'work', 'guvenligi': 'safety',
  'emniyetli': 'safety', 'koruyucu': 'protective', 'kapakli': 'covered',
  'cuval': 'bag', 'acma': 'opening', 'surgulu': 'sliding',
  'yuzuk': 'ring', 'ayrik': 'separate', 'turuncu': 'orange',
  'cep': 'pocket', 'tipi': 'type', 'pratik': 'compact',
  'cevirmeli': 'twist', 'vida': 'screw', 'vidali': 'screw',
  'alyan': 'allen', 'calisma': 'work', 'istasyonu': 'station',
  'evrensel': 'universal', 'dayanikli': 'durable', 'yuvarlak': 'round',
  'sabit': 'fixed', 'polysafe': 'polysafe', 'polyslit': 'polyslit',
  'muhafaza': 'disposal', 'atik': 'waste', 'kutusu': 'container',
  'film': 'film', 'kesici': 'cutter', 'kanatli': 'winged',
  'ambi': 'ambi', 'spring': 'spring',

  // Deburring
  'capak': 'deburring', 'alma': 'tool', 'hobi': 'hobby',

  // Machine knives
  'vakum': 'vacuum', 'paketleme': 'packaging', 'termoform': 'thermoform',
  'yildiz': 'star', 'zimbalar': 'punches', 'zimbasi': 'punch',
  'yarim': 'half', 'tam': 'full', 'lama': 'straight',
  'dairesel': 'circular', 'hava': 'air', 'oval': 'oval',
  'doner': 'rotary', 'kesim': 'cutting', 'oluklu': 'corrugated',
  'mukavva': 'cardboard', 'pelet': 'pelletizer', 'taneciklendirici': 'granulator',
  'paralayici': 'shredder', 'ezici': 'crusher', 'derinder': 'skinner',
  'masura': 'bobbin', 'kutu': 'box', 'kapama': 'sealing',
  'koli': 'carton', 'bantlama': 'taping', 'bandi': 'tape',
  'siyirma': 'stripping', 'erit': 'band', 'tabak': 'disc',
  'alt': 'bottom', 'kalip': 'mold', 'kase': 'tray',
  'sosis': 'sausage', 'kontr': 'contour', 'dili': 'toothed',
  'disiz': 'toothless', 'dz': 'straight', 'st': 'disc',
  'tutacak': 'holder', 'aparati': 'holder', 'et': 'meat',
  'log': 'log', 'saw': 'saw', 'ok': 'ok', 'tray': 'tray',
  'test': 'test', 'urun': 'product', 'sper': 'hook-long',
  'nsf': 'nsf', 'sertifikali': 'certified',
  'kenar': 'edge', 'yu': 'slot',
  'if': 'textile-hook',
};

// Special full-slug overrides for complex / multi-word products
const SLUG_OVERRIDES = {
  // OK blade
  'ok': 'ok-blade',
  // Slotted slitting blades
  'slotted-karbon-celik': 'slotted-slitting-blade-carbon-steel',
  'slotted-karbon-titanyum': 'slotted-slitting-blade-carbon-titanium-coated',
  'slotted-karbon-seramik': 'slotted-slitting-blade-carbon-ceramic-coated',
  'slotted-paslanmaz': 'slotted-slitting-blade-stainless-steel',
  'slotted-paslanmaz-titanyum': 'slotted-slitting-blade-stainless-titanium-coated',
  'slotted-paslanmaz-xcd': 'slotted-slitting-blade-stainless-xcd-coated',
  'slotted-endurium-seramik': 'slotted-slitting-blade-endurium-ceramic-coated',
  'slotted-yekpare-tungsten': 'slotted-slitting-blade-solid-tungsten-carbide',
  'slotted-yekpare-seramik': 'slotted-slitting-blade-solid-ceramic-zirconia',
  // Injector slitting blades
  'injektor-karbon-celik': 'injector-blade-carbon-steel-2-slot',
  'injektor-paslanmaz': 'injector-blade-stainless-steel-2-slot',
  'injektor-paslanmaz-ptfe': 'injector-blade-stainless-ptfe-coated-2-slot',
  'injektor-paslanmaz-seramik': 'injector-blade-stainless-ceramic-coated-2-slot',
  'injektor-paslanmaz-titanyum': 'injector-blade-stainless-titanium-coated-2-slot',
  'injektor-paslanmaz-titanyum-2-kanalli': 'injector-blade-stainless-titanium-2-channel',
  'injektor-paslanmaz-xcd': 'injector-blade-stainless-xcd-coated-2-slot',
  'injektor-yekpare-tungsten': 'injector-blade-solid-tungsten-carbide-slotless',
  'injektor-yekpare-seramik-030': 'injector-blade-solid-ceramic-zirconia-030',
  'injektor-yekpare-seramik-064': 'injector-blade-solid-ceramic-zirconia-064',
  'injektor-endurium-seramik': 'injector-blade-endurium-ceramic-coated-2-slot',
  // 3-hole slitting blades
  '3dj-karbon-celik': '3-hole-slitting-blade-carbon-steel',
  '3dj-karbon-titanyum': '3-hole-slitting-blade-carbon-titanium-coated',
  '3dj-paslanmaz-titanyum': '3-hole-slitting-blade-stainless-titanium-coated',
  '3dj-paslanmaz-titanyum-cizikli': '3-hole-slitting-blade-stainless-titanium-scored',
  '3dj-karbon-seramik': '3-hole-slitting-blade-carbon-ceramic-coated',
  '3dj-yekpare-tungsten': '3-hole-slitting-blade-solid-tungsten',
  '3dj-yekpare-seramik': '3-hole-slitting-blade-solid-ceramic',
  '3dj-karbon-yuvarlak-kenar': '3-hole-slitting-blade-carbon-round-edge',
  '3dj-paslanmaz-titanyum-yuvarlak': '3-hole-slitting-blade-stainless-titanium-round-edge',
  '3dj-karbon-seramik-yuvarlak': '3-hole-slitting-blade-carbon-ceramic-round-edge',
  '3dj-paslanmaz-titanyum-60x22': '3-hole-slitting-blade-stainless-titanium-60x22',
  '3dj-paslanmaz-titanyum-cizikli-60x22': '3-hole-slitting-blade-stainless-titanium-scored-60x22',
  // Trapezoid blades
  'b207': 'b207-trapezoid-heavy-duty',
  'b206': 'b206-thin-trapezoid-blade',
  'b082': 'b082-serrated-trapezoid-blade',
  'trapez': 'trapezoid-custom-design',
  'b213': 'b213-compact-trapezoid',
  'b218': 'b218-special-medium-trapezoid',
  'b214': 'b214-micro-trapezoid',
  'b207-2': 'b207-l-long-trapezoid',
  'b207-3': 'b207-xxl-extra-long-trapezoid',
  // Hobby / pointed blades
  'b208': 'b208-pointed-blade-standard',
  'b092': 'b092-holeless-blade',
  'b226': 'b226-supaslit-blade',
  'b204': 'b204-classic-blade',
  'b142': 'b142-large-blade',
  // Hook blades
  'sper': 'hook-blade-long',
  'yuvarlatilmi': 'rounded-tip-hook-blade',
  'if': 'textile-hook-blade',
  'b209': 'b209-single-sided-hook-blade',
  'kanca': 'hook-blade-hobby',
  // Snap-off blades
  'b122': 'b122-segmented-snap-off-9mm',
  'b124': 'b124-non-segmented-snap-off-9mm',
  'b121': 'b121-segmented-snap-off-18mm',
  'b123': 'b123-non-segmented-snap-off-18mm',
  'b096': 'b096-non-segmented-snap-off-12mm-oval-slot',
  'segmentli': 'segmented-snap-off-125mm',
  'lwb': 'lwb-non-segmented-snap-off-18mm-toothed',
  'b126': 'b126-segmented-snap-off-25mm',
  'b125': 'b125-non-segmented-snap-off-25mm',
  'hswb1': 'hswb1-non-segmented-snap-off-25mm-toothed',
  // Safety knives - full overrides needed for complex long slugs
  'h006-001-x01': 'h006-001-x01-retro-light-knife-die-cast-metal',
  'h008-001-a03': 'h008-001-a03-auto-retract-safety-knife',
  'h014-001-x01': 'h014-001-x01-retractable-trim-knife-die-cast-metal',
  'h015-001-z01': 'h015-001-z01-retro-heavy-duty-die-cast-metal',
  'h016-001-j01': 'h016-001-j01-safety-roll-stripper',
  'h016-101-a03': 'h016-101-a03-safety-roll-stripper-plus',
  'h016-201-a03': 'h016-201-a03-roll-stripper-heavy-duty',
  'h020-001-s05': 'h020-001-s05-fixed-slim-knife',
  'h023-002-s05': 'h023-002-s05-retractable-slim-knife-die-cast',
  'h028-002-x01': 'h028-002-x01-easy-change-knife-die-cast-metal',
  'h030-001-a03': 'h030-001-a03-polytrim-safety-film-cutter',
  'h032-001-a03': 'h032-001-a03-squeeze-knife-auto-retract',
  'h033-001-n03': 'h033-001-n03-yellowblack-slitter-ceramic-tip',
  'h041-004-a01': 'h041-004-a01-glass-scraper-die-cast-metal',
  'h063-001-x01': 'h063-001-x01-orange-spring-safety-cutter',
  'h081': 'h081-501-k01-ring-knife-orange',
  'h501-001-t03': 'h501-001-t03-utility-craft-knife',
  'h502-001-t03': 'h502-001-t03-utility-craft-knife',
  'h503-001-t03': 'h503-001-t03-utility-craft-knife',
  'h504-001-t03': 'h504-001-t03-utility-craft-knife',
  'h506': 'h506-001-o01-olfa-ml-18mm-die-cast-metal',
  'h507': 'h507-001-o01-olfa-nl-al',
  'h508': 'h508-001-o01-olfa-l-2',
  'h531-001-z01': 'h531-001-z01-automatic-trimming-knife-die-cast',
  'h600-001-t03': 'h600-001-t03-9mm-utility-craft-knife',
  'h603': 'h603-001-o01-olfa-ml-9mm-die-cast-metal',
  'h605-001-t03': 'h605-001-t03-9mm-utility-craft-knife',
  'h907-003-t03b': 'h907-003-t03b-supaslit-protective-cover-slitter',
  'h907-012-a03': 'h907-012-a03-polysafe-plus-film-cutter',
  'h909': 'h909-001-o01-olfa-tk-1-pocket-utility',
  'h911': 'h911-002-o01-olfa-maru-cutter',
  'h913-008-t03': 'h913-008-t03-polyslit-safety-knife',
  'h914-001-a03': 'h914-001-a03-springer-knife-metal-safety',
  'h914-002-a03': 'h914-002-a03-springer-knife-metal-safety',
  'h917-001-t10': 'h917-001-t10-fish-knife-bag-opening',
  'h918-001-t10': 'h918-001-t10-fish-knife-bag-opening',
  'h944-001-t03': 'h944-001-t03-ambi-safe-spring-safety-knife',
  'h946-001': 'h946-001-u-cut-hook-knife',
  'is-guvenligi-muhafaza-atik-kutusu': 'safety-blade-disposal-container',
  'olfa-sk-12': 'olfa-sk-12-stainless-nsf-certified',
  'olfa-sk-15': 'olfa-sk-15-safety-knife',
  'suka01': 'suka01-sliding-hook-knife',
  'vent-cutter': 'vent-cutter-winged-cutting-blade',
  // Machine knives - thermoform/vacuum
  'kontr-biai': 'contour-blade-thermoform-vacuum',
  'yarim': 'half-star-punches-vacuum-packaging',
  'tam': 'full-star-punches-vacuum-packaging',
  'dz-biaklar': 'straight-blades-thermoform',
  'dairesel': 'circular-blades-vacuum-packaging',
  'yuvarlak': 'round-air-punch-vacuum-packaging',
  'oval': 'oval-air-punch-vacuum-packaging',
  'dili': 'toothed-blades-vacuum-packaging',
  // Rotary cutting
  'st': 'disc-blades-rotary',
  'alt': 'bottom-blades-rotary',
  'pelet': 'pelletizer-blades',
  'taneciklendirici': 'granulator-blade',
  'paralayici': 'shredder-blade',
  'oluklu': 'corrugated-cardboard-slitting-blades',
  'disiz': 'toothless-rotary-cutting-blades',
  'dili-2': 'toothed-rotary-cutting-blades',
  'dili-3': 'toothed-blade-rotary',
  'biak': 'blade-holder-rotary',
  'dairesel-2': 'circular-crusher-blades',
  'et': 'meat-skinner-derinder-blade',
  'log-saw': 'log-saw-blades',
  'masura': 'bobbin-cutting-blades',
  'kutu': 'box-sealing-blades-tape-cutting',
  'test': 'test-product',
  'erit': 'band-blades-rotary',
  'tray': 'tray-mold-blades',
  'sosis': 'sausage-stripping-blades',
  // Deburring
  'p1-a': 'p1-a-deburring-hobby-knife-allen-screw',
  'p1-t': 'p1-t-deburring-hobby-knife-twist-screw',
  'p2-a': 'p2-a-deburring-hobby-knife-allen-screw',
  'p2-t': 'p2-t-deburring-hobby-knife-twist-screw',
  'p9-ss': 'p9-ss-deburring-hobby-knife-dual-slot',
  'ws-1': 'ws-1-deburring-hobby-workstation',
  'f01': 'f01-deburring-blade-universal',
  'f21': 'f21-deburring-blade-short',
  'f22': 'f22-deburring-blade-durable',
  'f03': 'f03-deburring-blade-pointed',
  'f04': 'f04-deburring-blade-round-tip',
  'g01': 'g01-deburring-blade-universal',
};

// Read scraped-products.json
const filePath = path.join(__dirname, '..', 'lib', 'data', 'scraped-products.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
const products = data.products || data;

// Turkish word detection regex
const turkishPattern = /[çÇğĞıİöÖşŞüÜ]|bicak|jilet|dilme|kesim|delik|capak|bicagi|ozel|tasarim|paketleme|vakum|ambalaj|falcata|segmentli|segmentsiz|genislik|tirtikli|kanca|yuvarlatilmi|guvenligi|emniyetli|maket|dokum|otomatik|cekilebilir|disli|dairesel|oluklu|mukavva|pelet|paralayici|taneciklendirici|ezici|masura|siyirma|erit|tabak|zimbalar|zimbasi|sosis|derinder|lama|kalin|ince|sivri|supaslit|cuval|koruyucu|polysafe|polyslit|sertifikali|muhafaza|atik|kutusu|yildiz|kanatli|surgulu|cevirmeli|kapakli|calisma|istasyonu|kontr|biai|biaklar|tutacak|aparati|buyuk|klasik|uzun|kisa|kompakt|mikro|orta|hob|tekstil|trapez|doner|kapama|kalip|kase|bantlama/;

let updated = 0;
let skipped = 0;
let alreadyNeutral = 0;

products.forEach(p => {
  if (p.slugEN) return; // Already has slugEN

  // Check if product ID has an override
  if (SLUG_OVERRIDES[p.id]) {
    p.slugEN = SLUG_OVERRIDES[p.id];
    updated++;
    return;
  }

  // Check if slug contains Turkish words
  if (!turkishPattern.test(p.slug)) {
    alreadyNeutral++;
    return; // Slug is already language-neutral
  }

  // Auto-translate slug word by word
  const words = p.slug.split('-');
  const translated = words.map(w => WORD_MAP[w] || w);
  const newSlug = translated.join('-');

  // Only use if it differs from original (i.e., something was translated)
  if (newSlug !== p.slug) {
    // Remove consecutive duplicate words
    const deduped = newSlug.split('-').filter((w, i, arr) => w !== arr[i - 1]);
    p.slugEN = deduped.join('-');
    updated++;
  } else {
    console.log('UNTRANSLATED:', p.id, '|', p.slug);
    skipped++;
  }
});

console.log(`\nResults: ${updated} slugEN added, ${alreadyNeutral} already neutral, ${skipped} untranslated`);

// Show all generated slugEN for review
console.log('\n--- Generated slugEN values ---');
products.forEach(p => {
  if (p.slugEN) {
    console.log(`${p.id}: ${p.slug} → ${p.slugEN}`);
  }
});

// Write back
fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
console.log('\n✓ scraped-products.json updated');
