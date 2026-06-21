# AI Agent Rules — Alya Blade Industrial Blades Project

> Bu dosya, bu projede çalışan tüm AI ajanları (GitHub Copilot, Cursor, Claude, vb.) için zorunlu kuralları tanımlar.
> Any AI agent working on this project MUST read and follow these rules.

---

## 1. PROJECT ARCHITECTURE

```
industrial-blades/
├── app/                        # Next.js App Router (pages, API routes)
│   ├── [locale]/               # Locale-prefixed routes (tr/en/fr/ru/ar)
│   │   ├── products/[slug]/    # Product detail pages
│   │   ├── categories/[slug]/  # Category & subcategory pages
│   │   └── ...
│   └── api/                    # API routes
├── lib/
│   ├── data/
│   │   ├── scraped-products.json    # BASE product data (196 products)
│   │   ├── products.ts              # PRODUCTS array (MANUAL + scraped)
│   │   ├── products-extended.ts     # PRODUCTS_EXTENDED (rich detail data)
│   │   └── categories.ts           # Category/subcategory definitions
│   ├── i18n/
│   │   ├── translations/
│   │   │   ├── products/            # Per-locale product translations
│   │   │   │   ├── tr.ts           # Turkish (master, defines interface)
│   │   │   │   ├── en.ts           # English
│   │   │   │   ├── fr.ts           # French
│   │   │   │   ├── ru.ts           # Russian
│   │   │   │   └── ar.ts           # Arabic
│   │   │   └── spec-values.ts      # Spec value translation dictionary
│   │   └── ...
│   ├── services/
│   │   └── product.service.ts       # Product listing service (categories, search)
│   └── types/
│       ├── index.ts                 # Product type (listing)
│       └── product.types.ts         # ProductExtended type (detail)
├── components/                      # React components
└── public/                          # Static files, images
```

### Two-Layer Product Data System

| Layer | Source | Usage | Translation |
|-------|--------|-------|-------------|
| **PRODUCTS** | `scraped-products.json` + `MANUAL_PRODUCTS` | Listing pages, search, category cards | `product.service.ts → translateProduct()` |
| **PRODUCTS_EXTENDED** | `products-extended.ts` | Detail pages (`/products/[slug]`) | `products-extended.ts → translateProductExtended()` |

**Flow:**
```
Detail page → getProductBySlug(slug, locale)
  → PRODUCTS_EXTENDED.find(slug || slugEN)
  → mergeWithBaseProduct(product)    // merges slugEN, availableSizes from base
  → translateProductExtended(product, locale)  // applies translations
```

---

## 2. DUAL-DOMAIN & LOCALE SYSTEM

| Domain | Locale | Purpose |
|--------|--------|---------|
| `alyabicak.com` | `tr` | Turkish market |
| `alyablade.com` | `en`, `fr`, `ru`, `ar` | International markets |

### Slug Rules
- **TR locale**: uses `product.slug` (Turkish)
- **Non-TR locales**: uses `product.slugEN` (English) if available, falls back to `product.slug`
- `slugEN` MUST be added to `scraped-products.json` for EVERY new product
- `slugEN` values must be pure English, no Turkish words
- Product pages do `permanentRedirect` if non-TR user accesses Turkish slug

### URL Structure
```
TR:  alyabicak.com/tr/products/{slug}
EN:  alyablade.com/en/products/{slugEN}
FR:  alyablade.com/fr/products/{slugEN}
RU:  alyablade.com/ru/products/{slugEN}
AR:  alyablade.com/ar/products/{slugEN}
```

---

## 3. TRANSLATION SYSTEM RULES

### 3.1 ProductTranslation Interface (defined in `tr.ts`)

```typescript
interface ProductTranslation {
  name: string;
  subtitle?: string;
  description?: string;
  shortDescription?: string;
  features?: string[];
  applications?: string[];
  benefits?: { title: string; description: string; icon?: string }[];
  longDescription?: string;
  availableSizes?: string[];
  seo?: { title: string; description: string; keywords?: string[] };
}
```

### 3.2 Adding a New Product Translation

When adding translations for a new product, ALL of these fields must be provided for EACH locale (en, fr, ru, ar):

1. **`name`** — Product name in target language
2. **`subtitle`** — Short subtitle
3. **`description`** — Full description
4. **`shortDescription`** — One-line summary
5. **`features`** — Array of feature strings
6. **`applications`** — Array of application strings
7. **`seo.title`** — SEO page title (include brand name)
8. **`seo.description`** — Meta description
9. **`seo.keywords`** — Keyword array
10. **`benefits`** — Array of `{title, description, icon}` objects
11. **`longDescription`** — HTML string with `<p>` tags
12. **`availableSizes`** — Array of size strings (translate Turkish terms!)

### 3.3 Fallback Chain

```
translation[locale].field → product.field (Turkish raw data)
```

**CRITICAL:** If a field is NOT provided in the translation file, the Turkish raw value bleeds through to the non-TR page. This is the #1 source of Turkish text on international pages.

### 3.4 Spec Value Translation (`spec-values.ts`)

- Spec **labels** are translated via `specLabelTranslations` (key-based)
- Spec **values** are translated via `specValueTranslations` (exact string match)
- When adding new products with new spec values, you MUST add translations to ALL 5 locale sections in `spec-values.ts`: `tr`, `en`, `ar`, `fr`, `ru`
- Turkish identity section (`tr`) maps Turkish values to themselves

### 3.5 Product Key Naming

Product keys in translation files MUST match the product's `id` field:
```typescript
// In en.ts, fr.ts, ru.ts, ar.ts:
'b207': { name: '...', ... },    // matches product.id = 'b207'
'trapez': { name: '...', ... },  // matches product.id = 'trapez'
```

---

## 4. ADDING A NEW PRODUCT — COMPLETE CHECKLIST

### Step 1: Base Product Data
- [ ] Add to `scraped-products.json` with all required fields
- [ ] Include `slugEN` field with English slug (NO Turkish words)
- [ ] Set correct `categoryId` and `subcategoryId`

### Step 2: Extended Product Data (if detail page needed)
- [ ] Add to `PRODUCTS_EXTENDED` array in `products-extended.ts`
- [ ] Include `slugEN` (or rely on merge from base)
- [ ] Add all rich fields: `specs`, `benefits`, `longDescription`, `availableSizes`, `seo`

### Step 3: Translations (ALL 4 locales)
- [ ] Add entry to `lib/i18n/translations/products/en.ts`
- [ ] Add entry to `lib/i18n/translations/products/fr.ts`
- [ ] Add entry to `lib/i18n/translations/products/ru.ts`
- [ ] Add entry to `lib/i18n/translations/products/ar.ts`
- [ ] Each entry must have: name, subtitle, description, shortDescription, features, applications, seo, benefits, longDescription, availableSizes

### Step 4: Spec Value Dictionary
- [ ] Check if any new spec values are introduced
- [ ] Add new values to ALL 5 sections in `spec-values.ts`

### Step 5: Verification
- [ ] Run `npm run build` — must pass with zero errors
- [ ] Verify no Turkish text appears on EN product page
- [ ] Verify `slugEN` is used in non-TR URLs
- [ ] Check canonical URL points to correct localized slug

---

## 5. COMMON PITFALLS — DO NOT REPEAT

| # | Pitfall | Prevention |
|---|---------|------------|
| 1 | Turkish text on non-TR pages | Always provide ALL translation fields. The fallback is Turkish raw data. |
| 2 | Turkish slugs in EN URLs | Always add `slugEN` to `scraped-products.json`. |
| 3 | Duplicate product keys | Check both `scraped-products.json` AND `MANUAL_PRODUCTS` for ID conflicts. |
| 4 | Missing spec-values entry | New spec values MUST be added to all 5 locale sections. |
| 5 | FR file encoding issues | When editing `fr.ts` with accented chars, use `read_file` first to get exact text, then use that exact text in replacements. |
| 6 | Orphan translation keys | Translation keys must match product IDs exactly. Orphan keys cause build size bloat. |
| 7 | Benefits icon mismatch | Icons in translations are optional — they fall back to the base product's icons. |
| 8 | Brand name in titles | Use `getBrandName(locale)` — returns "Alya Bıçak" for TR, "Alya Blade" for others. |
| 9 | SEO title double-brand | Never hardcode "Alya Bıçak" in non-TR translation files. Use "Alya Blade". |

---

## 6. FILE EDITING RULES

### 6.1 scraped-products.json
- JSON format, 2-space indent
- Each product MUST have: `id`, `slug`, `slugEN`, `code`, `name`, `description`, `categoryId`, `subcategoryId`, `image`, `variants`, `specifications`, `features`, `applications`, `isFeatured`, `isActive`, `order`
- `slugEN` is required for all products with Turkish words in `slug`

### 6.2 Translation Files (en.ts, fr.ts, ru.ts, ar.ts)
- TypeScript, exports `Record<string, ProductTranslation>`
- Organized by section comments (e.g., `// TRAPEZOID BLADES`)
- Keep product entries in same order across all locale files
- Use template literals `` ` `` for `longDescription` HTML

### 6.3 products-extended.ts
- TypeScript array of `ProductExtended` objects
- `mergeWithBaseProduct()` auto-fills `slugEN` and `availableSizes` from base
- `translateProductExtended()` handles all locale translation
- New products added here get full detail pages

---

## 7. SEO & GEO RULES

### Content Authority (for AI citation)
- Use specific technical data: "HRC 58-62", "0.63mm thickness", "SK5 carbon steel"
- Schema.org `additionalProperty` must reflect all specs
- `llms.txt` must stay in sync with product data
- Consistency: Schema ↔ HTML ↔ llms.txt must show same values

### Hreflang
- Product pages auto-generate hreflang via `getProductSlugPair()`
- TR slug → `alyabicak.com/tr/products/{slug}`
- EN/FR/RU/AR slug → `alyablade.com/{locale}/products/{slugEN}`
- `x-default` → EN slug on `alyablade.com`

### Sitemap
- `app/sitemap.ts` correctly uses `slugEN` for non-TR locales
- Image sitemap at `app/image-sitemap.xml/route.ts`

### Noindex for Fallback Content
- If a product has no translation for a locale, `isProductUsingFallback()` returns `true`
- The page is marked `noindex, follow` to prevent indexing Turkish content on non-TR URLs

---

## 8. BUILD & DEPLOY

```bash
npm run build     # Must pass with zero errors before any commit
npm run dev       # Local dev server
```

- Deployment: Vercel (auto-deploy on push to main)
- Config: `vercel.json` for rewrites, `next.config.ts` for Next.js settings
- Middleware: `middleware.ts` handles locale detection and domain routing

---

## 9. KEY FUNCTIONS REFERENCE

| Function | File | Purpose |
|----------|------|---------|
| `translateProduct()` | `product.service.ts` | Translates listing product (name, desc, slug) |
| `translateProductExtended()` | `products-extended.ts` | Translates detail product (all fields) |
| `mergeWithBaseProduct()` | `products-extended.ts` | Merges slugEN, availableSizes from base |
| `getProductBySlug()` | `products-extended.ts` | Finds product by TR or EN slug |
| `getAllProductSlugs()` | `products-extended.ts` | Returns locale-appropriate slugs |
| `getProductSlugPair()` | `products-extended.ts` | Returns `{tr, en}` slug pair |
| `getSpecValueTranslation()` | `spec-values.ts` | Translates spec values by dictionary |
| `getProductTranslation()` | Per locale file | Gets translation for product ID |
| `getBrandName()` | `locale-utils.ts` | Returns locale-appropriate brand name |

---

## 10. PRODUCT GOLD STANDARD

> **MANDATORY: All new products must meet Gold Standard quality.**
> See `docs/PRODUCT_GOLD_STANDARD.md` for the full specification.

### Quick Quality Requirements
| Field | Minimum |
|-------|---------|
| `tags[]` | 10-16 items (TR + EN mix) |
| `shortDescription` | 200-280 chars |
| `longDescription` | 2000+ chars, 3+ `<h3>` sections |
| `specs[]` | 5+ specs (material, dimensions, thickness, hardness, edge/form) |
| `applications[]` | 5-9 items with title + icon + description |
| `benefits[]` | 3-4 items with title + description + icon |
| `features[]` | 7-10 items |
| `seo.title` | Max 60 chars (TR/EN), 55 chars (AR), 58 chars (RU) |
| `seo.description` | Max 155 chars |
| `seo.keywords[]` | 12-18 localized keywords |
| `relatedProductIds[]` | 2-5 related products |
| `certifications[]` | Min `['CE']` |
| Translations | ALL 4 locales (en, ar, fr, ru) with ALL 12 fields |

### Content Authority Rules
- **Rare Token Injection**: Use `HRC 58-62`, `SK5 / C85`, `Martensitik`, `PVD` — NOT `Premium`, `Yüksek kalite`
- **Trinity Rule**: Schema.org `additionalProperty` ↔ `llms.txt` ↔ visible UI must show same values
- **Fact-Based Authority**: Cite standards by name: CE, ISO 9001, DIN, GOST, SASO
- **Arabic SEO**: Include regional keywords — `مصر`, `السعودية`, `الإمارات` in `seo.keywords[]`

### Validation
```bash
# Run Gold Standard validator
npx tsx scripts/validate-products.ts

# Run i18n completeness check
npx tsx scripts/check-i18n.ts
```

---

## 11. QUICK COMMAND REFERENCE

```bash
# Check for TypeScript errors
npx tsc --noEmit

# Build (must pass before commit)
npm run build

# Start dev server
npm run dev

# Validate products against Gold Standard
npx tsx scripts/validate-products.ts

# Check i18n coverage
npx tsx scripts/check-i18n.ts

# Find products without slugEN
node -e "const d=require('./lib/data/scraped-products.json');(d.products||d).filter(p=>!p.slugEN).forEach(p=>console.log(p.id,p.slug))"

# Count translations per locale
node -e "const fs=require('fs');['en','fr','ru','ar'].forEach(l=>{const c=fs.readFileSync('./lib/i18n/translations/products/'+l+'.ts','utf8');const m=c.match(/'[^']+'\s*:\s*\{/g);console.log(l+':',m?m.length:0)})"
```
