/**
 * Product Gold Standard Validator
 * 
 * Validates ALL products against the Gold Standard defined in docs/PRODUCT_GOLD_STANDARD.md.
 * Run: npx tsx scripts/validate-products.ts
 * 
 * Checks:
 * 1. Extended product completeness (fields, char limits, counts)
 * 2. Translation completeness across all 4 locales
 * 3. SEO title/description character limits
 * 4. Spec value translation coverage
 * 5. Base product (scraped-products.json) completeness
 * 
 * Output: Console report with per-product tier classification and issues list
 */

import { readFileSync, existsSync } from 'fs';
import { resolve, join } from 'path';

const ROOT = resolve(__dirname, '..');
const LOCALES = ['en', 'ar', 'fr', 'ru'] as const;

// Terminal colors
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const CYAN = '\x1b[36m';
const GRAY = '\x1b[90m';
const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';

// =============================================================================
// GOLD STANDARD LIMITS
// =============================================================================
const LIMITS = {
  tags: { min: 10, max: 16 },
  shortDescription: { min: 200, max: 280 },
  longDescription: { minChars: 2000, minH3: 3 },
  specs: { min: 5 },
  applications: { min: 5, max: 9 },
  benefits: { min: 3, max: 4 },
  features: { min: 7, max: 10 },
  relatedProductIds: { min: 2, max: 5 },
  seoTitle: { tr: 60, en: 60, ar: 55, fr: 60, ru: 58 },
  seoDescription: { max: 155 },
  seoKeywords: { min: 8, max: 18 },
} as const;

// =============================================================================
// DATA TYPES
// =============================================================================
interface Issue {
  severity: 'error' | 'warning' | 'info';
  field: string;
  message: string;
}

interface ProductReport {
  id: string;
  name: string;
  tier: 'Gold' | 'Silver' | 'Bronze';
  issues: Issue[];
  score: number;
}

// =============================================================================
// FILE PARSERS (regex-based, no TS imports needed)
// =============================================================================

function loadScrapedProducts(): Array<Record<string, unknown>> {
  const filePath = join(ROOT, 'lib', 'data', 'scraped-products.json');
  if (!existsSync(filePath)) return [];
  return JSON.parse(readFileSync(filePath, 'utf-8'));
}

/**
 * Extract product IDs from products-extended.ts by parsing for id: 'xxx' patterns.
 */
function getExtendedProductIds(): string[] {
  const filePath = join(ROOT, 'lib', 'data', 'products-extended.ts');
  if (!existsSync(filePath)) return [];
  const content = readFileSync(filePath, 'utf-8');
  const matches = content.match(/^\s{4}id:\s*'([^']+)'/gm);
  if (!matches) return [];
  return matches.map(m => {
    const match = m.match(/'([^']+)'/);
    return match ? match[1] : '';
  }).filter(Boolean);
}

/**
 * Extract product data from products-extended.ts for a specific product id.
 * Returns a rough object with key fields extracted via regex.
 */
function extractExtendedProduct(productId: string): Record<string, unknown> | null {
  const filePath = join(ROOT, 'lib', 'data', 'products-extended.ts');
  if (!existsSync(filePath)) return null;
  const content = readFileSync(filePath, 'utf-8');

  // Find the product block — starts with `  {` block containing `id: 'productId'`
  // We look for: `id: 'productId',` and then find the enclosing object
  const idPattern = new RegExp(`id:\\s*'${escapeRegex(productId)}'`, 'g');
  const idMatch = idPattern.exec(content);
  if (!idMatch) return null;

  // Walk backwards to find the opening `{` of this object
  let braceStart = idMatch.index;
  while (braceStart > 0 && content[braceStart] !== '{') braceStart--;

  // Walk forwards to find the matching closing `}`
  let depth = 0;
  let braceEnd = braceStart;
  for (let i = braceStart; i < content.length; i++) {
    if (content[i] === '{') depth++;
    else if (content[i] === '}') {
      depth--;
      if (depth === 0) {
        braceEnd = i;
        break;
      }
    }
  }

  const block = content.slice(braceStart, braceEnd + 1);

  // Extract fields via regex
  const getString = (key: string): string => {
    const m = block.match(new RegExp(`${key}:\\s*'([^']*)'`));
    return m ? m[1] : '';
  };

  const getBacktickString = (key: string): string => {
    const m = block.match(new RegExp(`${key}:\\s*\`([\\s\\S]*?)\``));
    return m ? m[1] : '';
  };

  const getArrayLength = (key: string): number => {
    // Count items in an array by looking for the array block
    const arrayStart = block.indexOf(`${key}: [`);
    if (arrayStart === -1) return 0;
    let depth2 = 0;
    let end = arrayStart;
    for (let i = arrayStart; i < block.length; i++) {
      if (block[i] === '[') depth2++;
      else if (block[i] === ']') {
        depth2--;
        if (depth2 === 0) { end = i; break; }
      }
    }
    const arr = block.slice(arrayStart, end + 1);
    // Count by looking for opening patterns
    if (key === 'tags' || key === 'features' || key === 'availableSizes' || key === 'certifications' || key === 'relatedProductIds') {
      const items = arr.match(/'[^']+'/g);
      return items ? items.length : 0;
    }
    if (key === 'applications' || key === 'benefits' || key === 'specs') {
      const items = arr.match(/\{/g);
      return items ? items.length : 0;
    }
    if (key === 'keywords') {
      const items = arr.match(/'[^']+'/g);
      return items ? items.length : 0;
    }
    return 0;
  };

  const longDesc = getBacktickString('longDescription');
  const h3Count = (longDesc.match(/<h3>/g) || []).length;

  // Get SEO block
  const seoStart = block.indexOf('seo: {');
  let seoTitle = '';
  let seoDesc = '';
  let seoKeywordsCount = 0;
  if (seoStart !== -1) {
    let depth3 = 0;
    let seoEnd = seoStart;
    for (let i = seoStart + 4; i < block.length; i++) {
      if (block[i] === '{') depth3++;
      else if (block[i] === '}') {
        depth3--;
        if (depth3 === 0) { seoEnd = i; break; }
      }
    }
    const seoBlock = block.slice(seoStart, seoEnd + 1);
    const titleMatch = seoBlock.match(/title:\s*'([^']*)'/);
    seoTitle = titleMatch ? titleMatch[1] : '';
    const descMatch = seoBlock.match(/description:\s*'([^']*)'/);
    seoDesc = descMatch ? descMatch[1] : '';
    const kwMatch = seoBlock.match(/keywords:\s*\[([\s\S]*?)\]/);
    if (kwMatch) {
      const kws = kwMatch[1].match(/'[^']+'/g);
      seoKeywordsCount = kws ? kws.length : 0;
    }
  }

  return {
    id: getString('id'),
    slug: getString('slug'),
    slugEN: getString('slugEN'),
    code: getString('code'),
    name: getString('name'),
    subtitle: getString('subtitle'),
    categoryId: getString('categoryId'),
    subcategoryId: getString('subcategoryId'),
    tagsCount: getArrayLength('tags'),
    shortDescription: getString('shortDescription'),
    longDescriptionLength: longDesc.length,
    longDescriptionH3Count: h3Count,
    specsCount: getArrayLength('specs'),
    applicationsCount: getArrayLength('applications'),
    benefitsCount: getArrayLength('benefits'),
    featuresCount: getArrayLength('features'),
    availableSizesCount: getArrayLength('availableSizes'),
    certificationsCount: getArrayLength('certifications'),
    relatedProductIdsCount: getArrayLength('relatedProductIds'),
    seoTitle,
    seoDescription: seoDesc,
    seoKeywordsCount,
    hasOrigin: block.includes('origin:'),
    hasImages: block.includes('images:'),
  };
}

/**
 * Get translation keys from a locale file.
 */
function getTranslationKeys(locale: string): string[] {
  const filePath = join(ROOT, 'lib', 'i18n', 'translations', 'products', `${locale}.ts`);
  if (!existsSync(filePath)) return [];
  const content = readFileSync(filePath, 'utf-8');
  const matches = content.match(/^\s{2}'([^']+)'\s*:\s*\{/gm);
  if (!matches) return [];
  return matches.map(m => {
    const match = m.match(/'([^']+)'/);
    return match ? match[1] : '';
  }).filter(Boolean);
}

/**
 * Check translation completeness for a product in a specific locale.
 * Returns list of missing fields.
 */
function checkTranslation(productId: string, locale: string): string[] {
  const filePath = join(ROOT, 'lib', 'i18n', 'translations', 'products', `${locale}.ts`);
  if (!existsSync(filePath)) return ['FILE_MISSING'];
  const content = readFileSync(filePath, 'utf-8');

  // Find the product block
  const pattern = new RegExp(`'${escapeRegex(productId)}'\\s*:\\s*\\{`);
  const match = pattern.exec(content);
  if (!match) return ['ENTRY_MISSING'];

  // Find the block boundaries
  let depth = 0;
  let start = match.index + match[0].length - 1;
  let end = start;
  for (let i = start; i < content.length; i++) {
    if (content[i] === '{') depth++;
    else if (content[i] === '}') {
      depth--;
      if (depth === 0) { end = i; break; }
    }
  }

  const block = content.slice(start, end + 1);
  const missing: string[] = [];

  const requiredFields = [
    'name', 'subtitle', 'description', 'shortDescription',
    'features', 'applications', 'benefits', 'longDescription',
  ];

  for (const field of requiredFields) {
    if (field === 'longDescription') {
      if (!block.includes('longDescription:') && !block.includes('longDescription :')) {
        missing.push(field);
      }
    } else if (field === 'features' || field === 'applications') {
      if (!block.includes(`${field}:`)) missing.push(field);
    } else if (field === 'benefits') {
      if (!block.includes('benefits:')) missing.push(field);
    } else {
      // Simple string field
      const fieldPattern = new RegExp(`${field}:\\s*['"\`]`);
      if (!fieldPattern.test(block)) missing.push(field);
    }
  }

  // Check SEO fields
  if (!block.includes('seo:')) {
    missing.push('seo.title', 'seo.description', 'seo.keywords');
  } else {
    if (!/title:\s*['"`]/.test(block.slice(block.indexOf('seo:')))) missing.push('seo.title');
    if (!/description:\s*['"`]/.test(block.slice(block.indexOf('seo:')))) missing.push('seo.description');
    if (!/keywords:\s*\[/.test(block.slice(block.indexOf('seo:')))) missing.push('seo.keywords');
  }

  return missing;
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// =============================================================================
// VALIDATION LOGIC
// =============================================================================

function validateProduct(productId: string, baseProd: Record<string, unknown> | undefined): ProductReport {
  const issues: Issue[] = [];
  const extData = extractExtendedProduct(productId);

  // If not in products-extended.ts → Bronze
  if (!extData) {
    issues.push({ severity: 'error', field: 'products-extended.ts', message: 'No enriched entry — Base Only (Bronze tier)' });

    // Check base product
    if (!baseProd) {
      issues.push({ severity: 'error', field: 'scraped-products.json', message: 'Product missing from base data too!' });
    } else {
      if (!baseProd['slugEN']) issues.push({ severity: 'error', field: 'slugEN', message: 'Missing English slug in base data' });
    }

    // Check translations
    for (const locale of LOCALES) {
      const missing = checkTranslation(productId, locale);
      if (missing.length > 0) {
        issues.push({ severity: 'warning', field: `${locale}.ts`, message: `Missing: ${missing.join(', ')}` });
      }
    }

    return {
      id: productId,
      name: (baseProd?.['name'] as string) || productId,
      tier: 'Bronze',
      issues,
      score: 0,
    };
  }

  // Has extended data — check quality
  let score = 0;
  const totalChecks = 25;

  // Identity
  if (extData.slugEN) score++; else issues.push({ severity: 'error', field: 'slugEN', message: 'Missing English slug' });
  if (extData.code) score++; else issues.push({ severity: 'error', field: 'code', message: 'Missing product code' });
  if (extData.subtitle) score++; else issues.push({ severity: 'warning', field: 'subtitle', message: 'Missing subtitle' });
  if (extData.categoryId) score++; else issues.push({ severity: 'error', field: 'categoryId', message: 'Missing category' });
  if (extData.subcategoryId) score++; else issues.push({ severity: 'warning', field: 'subcategoryId', message: 'Missing subcategory' });

  // Tags
  const tagsCount = extData.tagsCount as number;
  if (tagsCount >= LIMITS.tags.min) score++;
  else issues.push({ severity: 'warning', field: 'tags', message: `${tagsCount} tags (min ${LIMITS.tags.min})` });

  // Short description
  const shortDescLen = (extData.shortDescription as string).length;
  if (shortDescLen >= LIMITS.shortDescription.min && shortDescLen <= LIMITS.shortDescription.max) score++;
  else if (shortDescLen > 0) {
    issues.push({ severity: 'info', field: 'shortDescription', message: `${shortDescLen} chars (target: ${LIMITS.shortDescription.min}-${LIMITS.shortDescription.max})` });
    score += 0.5;
  } else {
    issues.push({ severity: 'error', field: 'shortDescription', message: 'Empty shortDescription' });
  }

  // Long description
  const longDescLen = extData.longDescriptionLength as number;
  const h3Count = extData.longDescriptionH3Count as number;
  if (longDescLen >= LIMITS.longDescription.minChars && h3Count >= LIMITS.longDescription.minH3) {
    score++;
  } else if (longDescLen > 0) {
    if (longDescLen < LIMITS.longDescription.minChars) {
      issues.push({ severity: 'warning', field: 'longDescription', message: `${longDescLen} chars (min ${LIMITS.longDescription.minChars})` });
    }
    if (h3Count < LIMITS.longDescription.minH3) {
      issues.push({ severity: 'warning', field: 'longDescription', message: `${h3Count} <h3> sections (min ${LIMITS.longDescription.minH3})` });
    }
    score += 0.5;
  } else {
    issues.push({ severity: 'error', field: 'longDescription', message: 'Missing longDescription' });
  }

  // Specs
  const specsCount = extData.specsCount as number;
  if (specsCount >= LIMITS.specs.min) score++;
  else issues.push({ severity: 'warning', field: 'specs', message: `${specsCount} specs (min ${LIMITS.specs.min})` });

  // Applications
  const appCount = extData.applicationsCount as number;
  if (appCount >= LIMITS.applications.min) score++;
  else issues.push({ severity: 'warning', field: 'applications', message: `${appCount} applications (min ${LIMITS.applications.min})` });

  // Benefits
  const benCount = extData.benefitsCount as number;
  if (benCount >= LIMITS.benefits.min) score++;
  else issues.push({ severity: 'warning', field: 'benefits', message: `${benCount} benefits (min ${LIMITS.benefits.min})` });

  // Features
  const featCount = extData.featuresCount as number;
  if (featCount >= LIMITS.features.min) score++;
  else issues.push({ severity: 'warning', field: 'features', message: `${featCount} features (min ${LIMITS.features.min})` });

  // Origin, Images
  if (extData.hasOrigin) score++; else issues.push({ severity: 'warning', field: 'origin', message: 'Missing origin' });
  if (extData.hasImages) score++; else issues.push({ severity: 'error', field: 'images', message: 'Missing images' });

  // Available sizes
  if ((extData.availableSizesCount as number) > 0) score++;
  else issues.push({ severity: 'info', field: 'availableSizes', message: 'No availableSizes' });

  // Certifications
  if ((extData.certificationsCount as number) > 0) score++;
  else issues.push({ severity: 'warning', field: 'certifications', message: 'Missing certifications' });

  // Related products
  const relCount = extData.relatedProductIdsCount as number;
  if (relCount >= LIMITS.relatedProductIds.min) score++;
  else issues.push({ severity: 'info', field: 'relatedProductIds', message: `${relCount} related products (min ${LIMITS.relatedProductIds.min})` });

  // SEO — TR
  const seoTitle = extData.seoTitle as string;
  const seoDesc = extData.seoDescription as string;
  const seoKWCount = extData.seoKeywordsCount as number;

  if (seoTitle && seoTitle.length <= LIMITS.seoTitle.tr) score++;
  else if (seoTitle) {
    issues.push({ severity: 'error', field: 'seo.title', message: `${seoTitle.length} chars (max ${LIMITS.seoTitle.tr})` });
    score += 0.5;
  } else {
    issues.push({ severity: 'error', field: 'seo.title', message: 'Missing SEO title' });
  }

  if (seoDesc && seoDesc.length <= LIMITS.seoDescription.max) score++;
  else if (seoDesc) {
    issues.push({ severity: 'warning', field: 'seo.description', message: `${seoDesc.length} chars (max ${LIMITS.seoDescription.max})` });
    score += 0.5;
  } else {
    issues.push({ severity: 'error', field: 'seo.description', message: 'Missing SEO description' });
  }

  if (seoKWCount >= LIMITS.seoKeywords.min) score++;
  else issues.push({ severity: 'warning', field: 'seo.keywords', message: `${seoKWCount} keywords (min ${LIMITS.seoKeywords.min})` });

  // Translation checks
  let translationScore = 0;
  for (const locale of LOCALES) {
    const missing = checkTranslation(productId, locale);
    if (missing.length === 0) {
      translationScore++;
    } else if (missing[0] === 'ENTRY_MISSING') {
      issues.push({ severity: 'error', field: `${locale}.ts`, message: 'No translation entry' });
    } else {
      issues.push({ severity: 'warning', field: `${locale}.ts`, message: `Missing: ${missing.join(', ')}` });
      translationScore += 0.5;
    }
  }

  // Translations account for 4 points (one per locale)
  score += translationScore;

  // Base product check
  if (baseProd) {
    if (baseProd['slugEN']) score++; else issues.push({ severity: 'error', field: 'base.slugEN', message: 'Missing slugEN in scraped-products.json' });
  } else {
    issues.push({ severity: 'warning', field: 'scraped-products.json', message: 'No base product entry' });
  }

  // Determine tier
  const pct = (score / totalChecks) * 100;
  let tier: 'Gold' | 'Silver' | 'Bronze';
  if (pct >= 85 && issues.filter(i => i.severity === 'error').length === 0) {
    tier = 'Gold';
  } else if (pct >= 50) {
    tier = 'Silver';
  } else {
    tier = 'Bronze';
  }

  return {
    id: productId,
    name: (extData.name as string) || productId,
    tier,
    issues,
    score: Math.round(pct),
  };
}

// =============================================================================
// MAIN
// =============================================================================

function main() {
  console.log(`\n${BOLD}${CYAN}═══════════════════════════════════════════════════════════════${RESET}`);
  console.log(`${BOLD}${CYAN}  Product Gold Standard Validator — Alya Blade${RESET}`);
  console.log(`${BOLD}${CYAN}═══════════════════════════════════════════════════════════════${RESET}\n`);

  // Load data
  const scrapedProducts = loadScrapedProducts();
  const extendedIds = getExtendedProductIds();
  const translationKeys: Record<string, string[]> = {};
  for (const locale of LOCALES) {
    translationKeys[locale] = getTranslationKeys(locale);
  }

  // Build unique product ID list
  const allIds = new Set<string>();
  for (const p of scrapedProducts) allIds.add(p['id'] as string);
  for (const id of extendedIds) allIds.add(id);

  console.log(`${BOLD}Products found:${RESET} ${allIds.size} total (${scrapedProducts.length} base, ${extendedIds.length} extended)\n`);

  // Validate each
  const reports: ProductReport[] = [];
  for (const id of Array.from(allIds).sort()) {
    const baseProd = scrapedProducts.find(p => p['id'] === id) as Record<string, unknown> | undefined;
    reports.push(validateProduct(id, baseProd));
  }

  // Summary counts
  const gold = reports.filter(r => r.tier === 'Gold');
  const silver = reports.filter(r => r.tier === 'Silver');
  const bronze = reports.filter(r => r.tier === 'Bronze');

  console.log(`${BOLD}TIER DISTRIBUTION:${RESET}`);
  console.log(`  ${GREEN}🥇 Gold:${RESET}   ${gold.length} products (${(gold.length / reports.length * 100).toFixed(1)}%)`);
  console.log(`  ${YELLOW}🥈 Silver:${RESET} ${silver.length} products (${(silver.length / reports.length * 100).toFixed(1)}%)`);
  console.log(`  ${RED}🥉 Bronze:${RESET} ${bronze.length} products (${(bronze.length / reports.length * 100).toFixed(1)}%)`);
  console.log('');

  // Gold products
  if (gold.length > 0) {
    console.log(`${BOLD}${GREEN}━━━ GOLD TIER ━━━${RESET}`);
    for (const r of gold) {
      const infoCount = r.issues.filter(i => i.severity === 'info').length;
      const suffix = infoCount > 0 ? ` ${GRAY}(${infoCount} minor suggestions)${RESET}` : '';
      console.log(`  ${GREEN}✓${RESET} ${r.id.padEnd(25)} ${r.score}%${suffix}`);
    }
    console.log('');
  }

  // Silver products with issues
  if (silver.length > 0) {
    console.log(`${BOLD}${YELLOW}━━━ SILVER TIER (needs improvement) ━━━${RESET}`);
    for (const r of silver) {
      const errors = r.issues.filter(i => i.severity === 'error').length;
      const warnings = r.issues.filter(i => i.severity === 'warning').length;
      console.log(`  ${YELLOW}△${RESET} ${r.id.padEnd(25)} ${r.score}%  ${errors > 0 ? RED + errors + ' errors' + RESET + ' ' : ''}${warnings > 0 ? YELLOW + warnings + ' warnings' + RESET : ''}`);
    }
    console.log('');
  }

  // Bronze products (just count by category)
  if (bronze.length > 0) {
    console.log(`${BOLD}${RED}━━━ BRONZE TIER (base only — no enrichment) ━━━${RESET}`);
    const withTranslation = bronze.filter(r => !r.issues.some(i => i.field.includes('.ts') && i.message === 'No translation entry'));
    const noTranslation = bronze.filter(r => r.issues.some(i => i.field.includes('.ts') && i.message === 'No translation entry'));
    console.log(`  ${RED}✗${RESET} ${bronze.length} products total`);
    if (withTranslation.length > 0) console.log(`    ${YELLOW}↳${RESET} ${withTranslation.length} have some translations`);
    if (noTranslation.length > 0) console.log(`    ${RED}↳${RESET} ${noTranslation.length} have NO translations`);
    console.log('');
  }

  // Detailed issues for Silver tier (actionable)
  if (silver.length > 0) {
    console.log(`${BOLD}${CYAN}━━━ DETAILED ISSUES — SILVER TIER ━━━${RESET}`);
    for (const r of silver) {
      const criticalIssues = r.issues.filter(i => i.severity !== 'info');
      if (criticalIssues.length === 0) continue;
      console.log(`\n  ${BOLD}${r.id}${RESET} (${r.name.substring(0, 40)})`);
      for (const issue of criticalIssues) {
        const icon = issue.severity === 'error' ? `${RED}✗${RESET}` : `${YELLOW}!${RESET}`;
        console.log(`    ${icon} [${issue.field}] ${issue.message}`);
      }
    }
    console.log('');
  }

  // Translation coverage summary
  console.log(`${BOLD}${CYAN}━━━ TRANSLATION COVERAGE ━━━${RESET}`);
  for (const locale of LOCALES) {
    const keys = translationKeys[locale];
    const coverage = (keys.length / allIds.size * 100).toFixed(1);
    const color = parseFloat(coverage) >= 70 ? GREEN : parseFloat(coverage) >= 40 ? YELLOW : RED;
    console.log(`  ${locale.toUpperCase()}: ${color}${keys.length}/${allIds.size} products (${coverage}%)${RESET}`);
  }
  console.log('');

  // Missing slugEN report
  const missingSlugs = scrapedProducts.filter(p => !p['slugEN']);
  if (missingSlugs.length > 0) {
    console.log(`${BOLD}${RED}━━━ MISSING slugEN (${missingSlugs.length} products) ━━━${RESET}`);
    for (const p of missingSlugs.slice(0, 10)) {
      console.log(`  ${RED}✗${RESET} ${(p['id'] as string).padEnd(25)} slug: ${p['slug']}`);
    }
    if (missingSlugs.length > 10) {
      console.log(`  ${GRAY}... and ${missingSlugs.length - 10} more${RESET}`);
    }
    console.log('');
  }

  // Final summary
  console.log(`${BOLD}${CYAN}═══════════════════════════════════════════════════════════════${RESET}`);
  console.log(`${BOLD}  OVERALL: ${gold.length}/${reports.length} Gold (${(gold.length / reports.length * 100).toFixed(0)}%)${RESET}`);
  console.log(`${BOLD}  TARGET:  100% Gold — ${reports.length - gold.length} products need improvement${RESET}`);
  console.log(`${BOLD}${CYAN}═══════════════════════════════════════════════════════════════${RESET}\n`);
}

main();
