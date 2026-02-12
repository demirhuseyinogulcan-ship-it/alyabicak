/**
 * i18n Completeness Checker
 * 
 * Build-time script to audit translation coverage across all locales.
 * Run: npx tsx scripts/check-i18n.ts
 * 
 * Checks:
 * 1. Product translations — which products have native translations per locale
 * 2. Blog translations — which posts have native content per locale
 * 3. FAQ translations — which locales have FAQ data files
 * 4. Dictionary keys — missing keys in non-TR dictionaries
 * 
 * Output: Console table with coverage percentages
 */

import { readFileSync, existsSync } from 'fs';
import { join, resolve } from 'path';

const ROOT = resolve(__dirname, '..');
const LOCALES = ['tr', 'en', 'ar', 'ru', 'fr'] as const;
type Locale = (typeof LOCALES)[number];

// Colors for terminal output
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const CYAN = '\x1b[36m';
const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';

function colorPercent(pct: number): string {
  if (pct >= 100) return `${GREEN}${pct.toFixed(0)}%${RESET}`;
  if (pct >= 70) return `${YELLOW}${pct.toFixed(0)}%${RESET}`;
  return `${RED}${pct.toFixed(0)}%${RESET}`;
}

/**
 * Count top-level keys in a TS file that exports a Record<string, ...>.
 * Looks for patterns like:  'product-slug': { ... }
 */
function countProductKeys(filePath: string): number {
  if (!existsSync(filePath)) return 0;
  const content = readFileSync(filePath, 'utf-8');
  // Match quoted keys at 2-space indent (product entries)
  const matches = content.match(/^\s{2}'[^']+'\s*:\s*\{/gm);
  return matches ? matches.length : 0;
}

// =============================================================================
// 1. PRODUCT TRANSLATIONS CHECK
// =============================================================================
function checkProductTranslations(): Record<Locale, { total: number; translated: number }> {
  const result: Record<string, { total: number; translated: number }> = {};
  const translationsDir = join(ROOT, 'lib', 'i18n', 'translations', 'products');

  // Count total products from scraped-products.json (master data)
  let totalProducts = 0;
  const scrapedPath = join(ROOT, 'lib', 'data', 'scraped-products.json');
  if (existsSync(scrapedPath)) {
    const scraped = JSON.parse(readFileSync(scrapedPath, 'utf-8'));
    totalProducts = Array.isArray(scraped) ? scraped.length : Object.keys(scraped).length;
  }

  // If scraped file doesn't determine count, use EN as reference
  if (totalProducts === 0) {
    totalProducts = countProductKeys(join(translationsDir, 'en.ts'));
  }

  for (const locale of LOCALES) {
    if (locale === 'tr') {
      // TR is master data, always 100%
      result[locale] = { total: totalProducts, translated: totalProducts };
      continue;
    }

    const filePath = join(translationsDir, `${locale}.ts`);
    const count = countProductKeys(filePath);
    result[locale] = { total: totalProducts, translated: count };
  }

  return result as Record<Locale, { total: number; translated: number }>;
}

// =============================================================================
// 2. BLOG TRANSLATIONS CHECK
// =============================================================================
function checkBlogTranslations(): Record<Locale, { total: number; translated: number }> {
  const result: Record<string, { total: number; translated: number }> = {};

  // Read blog.ts to count posts and translations
  // We can't import TS directly, so we'll parse the file for patterns
  const blogPath = join(ROOT, 'lib', 'data', 'blog.ts');
  if (!existsSync(blogPath)) {
    for (const locale of LOCALES) {
      result[locale] = { total: 0, translated: 0 };
    }
    return result as Record<Locale, { total: number; translated: number }>;
  }

  const blogContent = readFileSync(blogPath, 'utf-8');
  
  // Count total posts by counting slug patterns
  const slugMatches = blogContent.match(/slug:\s*'[^']+'/g);
  const totalPosts = slugMatches ? slugMatches.length : 0;

  // TR and EN are required fields, so always 100%
  result['tr'] = { total: totalPosts, translated: totalPosts };
  result['en'] = { total: totalPosts, translated: totalPosts };

  // For optional locales, count how many posts have that locale's content
  for (const locale of ['ar', 'ru', 'fr'] as const) {
    // Count occurrences of locale key with content (e.g., "ar: {" at proper indentation)
    const pattern = new RegExp(`^\\s{2,4}${locale}:\\s*\\{`, 'gm');
    const matches = blogContent.match(pattern);
    result[locale] = { total: totalPosts, translated: matches ? matches.length : 0 };
  }

  return result as Record<Locale, { total: number; translated: number }>;
}

// =============================================================================
// 3. FAQ TRANSLATIONS CHECK
// =============================================================================
function checkFAQTranslations(): Record<Locale, { total: number; translated: number }> {
  const result: Record<string, { total: number; translated: number }> = {};
  const faqDir = join(ROOT, 'lib', 'data', 'faq', 'locales');

  // Get total questions from TR (master)
  let totalQuestions = 0;
  const trPath = join(faqDir, 'tr.json');
  if (existsSync(trPath)) {
    const trData = JSON.parse(readFileSync(trPath, 'utf-8'));
    totalQuestions = trData.questions?.length || 0;
  }

  for (const locale of LOCALES) {
    const filePath = join(faqDir, `${locale}.json`);
    if (existsSync(filePath)) {
      try {
        const data = JSON.parse(readFileSync(filePath, 'utf-8'));
        result[locale] = { total: totalQuestions, translated: data.questions?.length || 0 };
      } catch {
        result[locale] = { total: totalQuestions, translated: 0 };
      }
    } else {
      result[locale] = { total: totalQuestions, translated: 0 };
    }
  }

  return result as Record<Locale, { total: number; translated: number }>;
}

// =============================================================================
// 4. DICTIONARY CHECK (*.ts files)
// =============================================================================
function checkDictionaries(): Record<Locale, { total: number; translated: number }> {
  const result: Record<string, { total: number; translated: number }> = {};
  const dictDir = join(ROOT, 'lib', 'i18n', 'dictionaries');

  /**
   * Count leaf-level keys in a dictionary .ts file by counting
   * lines that match  key: 'value' or key: `value` patterns
   */
  function countDictKeys(filePath: string): number {
    if (!existsSync(filePath)) return 0;
    const content = readFileSync(filePath, 'utf-8');
    // Match lines like: keyName: 'value', or keyName: `template ${var}`,
    const leafKeyPattern = /^\s+\w+:\s*(?:'[^']*'|`[^`]*`|"[^"]*")\s*,?\s*$/gm;
    const matches = content.match(leafKeyPattern);
    return matches ? matches.length : 0;
  }

  const trCount = countDictKeys(join(dictDir, 'tr.ts'));

  for (const locale of LOCALES) {
    const filePath = join(dictDir, `${locale}.ts`);
    const localeCount = countDictKeys(filePath);
    result[locale] = { total: trCount, translated: localeCount };
  }

  return result as Record<Locale, { total: number; translated: number }>;
}

// =============================================================================
// MAIN OUTPUT
// =============================================================================
function main() {
  console.log(`\n${BOLD}${CYAN}═══════════════════════════════════════════════════════${RESET}`);
  console.log(`${BOLD}${CYAN}  i18n Completeness Report — Alya Blade${RESET}`);
  console.log(`${BOLD}${CYAN}═══════════════════════════════════════════════════════${RESET}\n`);

  const products = checkProductTranslations();
  const blog = checkBlogTranslations();
  const faq = checkFAQTranslations();
  const dict = checkDictionaries();

  // Header
  const header = `${'Category'.padEnd(20)} | ${'TR'.padStart(6)} | ${'EN'.padStart(6)} | ${'AR'.padStart(6)} | ${'RU'.padStart(6)} | ${'FR'.padStart(6)}`;
  console.log(header);
  console.log('-'.repeat(header.length));

  // Row helper
  function printRow(label: string, data: Record<Locale, { total: number; translated: number }>) {
    const cols = LOCALES.map(locale => {
      const { total, translated } = data[locale];
      const pct = total > 0 ? (translated / total) * 100 : 0;
      return `${colorPercent(pct).padStart(15)} (${translated}/${total})`;
    });
    // Simple version for alignment
    const simpleCols = LOCALES.map(locale => {
      const { total, translated } = data[locale];
      const pct = total > 0 ? (translated / total) * 100 : 0;
      return colorPercent(pct);
    });
    console.log(`${label.padEnd(20)} | ${simpleCols.join(' | ')}`);
  }

  printRow('Products', products);
  printRow('Blog Posts', blog);
  printRow('FAQ', faq);
  printRow('Dictionary', dict);

  console.log('-'.repeat(header.length));

  // Summary
  let warnings = 0;
  for (const locale of LOCALES) {
    if (locale === 'tr') continue;
    const checks = [products[locale], blog[locale], faq[locale], dict[locale]];
    for (const check of checks) {
      if (check.total > 0 && (check.translated / check.total) < 0.5) {
        warnings++;
      }
    }
  }

  if (warnings > 0) {
    console.log(`\n${YELLOW}⚠ ${warnings} categories below 50% coverage — consider adding translations${RESET}`);
  } else {
    console.log(`\n${GREEN}✓ All categories have acceptable coverage${RESET}`);
  }

  console.log(`\n${CYAN}Tip: Run this before each deployment to track i18n progress${RESET}\n`);
}

main();
