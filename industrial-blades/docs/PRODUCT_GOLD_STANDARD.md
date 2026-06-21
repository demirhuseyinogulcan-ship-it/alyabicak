# PRODUCT GOLD STANDARD — Alya Blade Quality System

> **Bu döküman, her yeni ürün eklenirken veya mevcut ürün güncellenirken AI ajanları ve geliştiriciler tarafından ZORUNLU olarak takip edilecek kalite standardını tanımlar.**
>
> This document defines the mandatory quality standard for adding or updating any product in this project. All AI agents and developers MUST follow these rules.

---

## 1. QUALITY TIERS

| Tier | Name | Criteria | Current Count |
|------|------|----------|---------------|
| 🥇 **Gold** | Full Enrichment | All fields in `products-extended.ts` + all 4 translations + spec-values | 9 products |
| 🥈 **Silver** | Partial Enrichment | Extended entry exists but missing longDescription h3 sections, fewer tags, no benefits | ~20 products |
| 🥉 **Bronze** | Base Only | Only in `scraped-products.json`, no enrichment | ~64 products |

**Target: ALL new products must be Gold tier. No exceptions.**

---

## 2. REQUIRED FIELDS — TURKISH MASTER (products-extended.ts)

### 2.1 Identity Fields (ZORUNLU)

| Field | Type | Requirement | Example |
|-------|------|-------------|---------|
| `id` | string | Unique, lowercase, kebab-case or short code | `'ok'`, `'b207-3'` |
| `slug` | string | Turkish URL slug, kebab-case | `'ok-bicak'` |
| `slugEN` | string | English URL slug, NO Turkish chars | `'ok-arrow-blade'` |
| `code` | string | Product code, uppercase | `'OK'`, `'B207'` |
| `name` | string | `"CODE — Türkçe Ürün Adı"` format | `'OK BIÇAK — Arrow Blade'` |
| `subtitle` | string | `"Boyut — Malzeme, Özellik, Detay"` format | `'30.4×25.0×0.50mm — Karbon Çelik, Çift Kenar, 2 Slot + 1 Delik'` |

### 2.2 Categorization (ZORUNLU)

| Field | Type | Requirement |
|-------|------|-------------|
| `categoryId` | string | Must match `categories.ts` — e.g. `'industrial-blades'`, `'machine-knives'`, `'safety-knives'` |
| `subcategoryId` | string | Must match subcategory in `categories.ts` |
| `tags[]` | string[] | **10-16 tags** — Mix of TR + EN, include: product name, category, material, application keywords |

### 2.3 Descriptions (ZORUNLU)

| Field | Chars | Format | Requirement |
|-------|-------|--------|-------------|
| `shortDescription` | 200-280 | Plain text | Keyword-rich, includes dimensions + material + top 3 applications |
| `longDescription` | 2000-3500 | HTML | **Minimum 3 `<h3>` sections** + `<ul>` lists. See template below. |

#### longDescription Template:
```html
<p><strong>[Ürün Adı]</strong>, [boyutlar], [malzeme], [ana özellik]. [Montaj/form detayı].</p>

<h3>Neden [Ürün Adı]?</h3>
<p>[Rakip ürünlere kıyasla farkı]. <strong>[Ana avantaj]</strong>. [Teknik detay].</p>

<h3>[Birincil Teknik Özellik]</h3>
<p>[Detaylı teknik açıklama]:</p>
<ul>
  <li><strong>[Fayda 1]</strong> → [Açıklama]</li>
  <li><strong>[Fayda 2]</strong> → [Açıklama]</li>
  <li><strong>[Fayda 3]</strong> → [Açıklama]</li>
</ul>

<h3>[İkincil Teknik Özellik]</h3>
<p>[Teknik detay ve müşteri faydası].</p>

<h3>[Malzeme / Kaplama Detayı]</h3>
<p>[Malzeme özellikleri], [HRC/HV değerleri], [karşılaştırma].</p>

<h3>Kullanım Alanları</h3>
<ul>
  <li><strong>[Uygulama 1]:</strong> [Detay]</li>
  <li><strong>[Uygulama 2]:</strong> [Detay]</li>
  <!-- minimum 5 uygulama alanı -->
</ul>
```

### 2.4 Images (ZORUNLU)

| Field | Size | Format |
|-------|------|--------|
| `images.main` | 1920×1080 (16:9) | `{ src, alt, width: 1920, height: 1080 }` — Alt text includes product name + code |
| `images.thumbnail` | 640×360 (16:9) | `{ src, alt, width: 640, height: 360 }` |
| `images.gallery[]` | 1920×1080 (16:9) | Additional angles. Min 0, ideal 2-4 images |

### 2.5 Technical Specifications (ZORUNLU)

**Minimum 5 specs**, each with `{ label, value, icon?, highlight? }`:

| Required Label Key | Description | Example Value |
|--------------------|-------------|---------------|
| `material` | Primary material | `'Karbon Çelik'` |
| `dimensions` | Full dimensions | `'30.4×25.0×0.50mm'` |
| `thickness` | Blade thickness | `'0.50mm'` |
| `hardness` | Hardness rating | `'HRC 58-62'` |
| `edge` OR `form` | Edge type or blade form | `'Çift Taraflı Bileme (Double Edge)'` |

**Optional but recommended:** `coating`, `weight`, `edgeAngle`, `heatTreatment`, `color`, `compatibility`

> **RARE TOKEN INJECTION (ZORUNLU):** Use technical jargon in specs, NOT generic adjectives.
> - ✅ `HRC 58-62`, `SK5 / C85`, `Martensitik`, `PVD`, `TiN`, `WC-Co`, `600°C`
> - ❌ `Çok sert`, `Yüksek kalite`, `Dayanıklı`, `Premium`

### 2.6 Origin (ZORUNLU)

```typescript
origin: {
  brand: 'Durham Duplex',     // or actual brand name
  country: 'İngiltere',       // Turkish name of country
  city: 'Sheffield',          // City name
}
```

### 2.7 Applications (ZORUNLU)

**5-9 items**, each with `{ title, icon, description }`:
```typescript
{ title: 'Etiket / Kablo Soyma', icon: 'Tag', description: 'Etiket makinelerinde kesim, kablo izolasyonu soyma' }
```

### 2.8 Benefits (ZORUNLU)

**3-4 items**, each with `{ title, description, icon }`:
```typescript
{
  title: 'Çift Kenar — 2× Ömür',
  description: 'Her iki kenarı da bilemeli: bir kenar körleşince diğer taraf kullanılır.',
  icon: 'RotateCcw',
}
```

### 2.9 Features (ZORUNLU)

**7-10 string items** — Each feature is a concise technical statement:
```typescript
features: [
  '30.4×25.0×0.50mm kompakt boyut',
  'Çift taraflı bileme — iki keskin kenar',
  'HRC 58-62 sertlik — uzun ömürlü keskinlik',
  // ... 7-10 items total
]
```

### 2.10 Additional Fields (ZORUNLU)

| Field | Type | Requirement |
|-------|------|-------------|
| `availableSizes[]` | string[] | At least 1 variant |
| `certifications[]` | string[] | Minimum `['CE']`, add `'ISO 9001'`, `'DIN'`, `'GOST'` etc. where applicable |
| `relatedProductIds[]` | string[] | 2-5 related product IDs from same subcategory or complementary products |
| `isActive` | boolean | `true` |
| `isFeatured` | boolean | `true` for highlighted products |
| `isNew` | boolean | `true` for newly added products (set to `false` after 3 months) |
| `inStock` | boolean | `true` |
| `order` | number | Display order (higher = later) |

### 2.11 SEO — Turkish (ZORUNLU)

| Field | Chars | Format |
|-------|-------|--------|
| `seo.title` | **Max 60** | `"[Ürün Adı] [Boyut] | [Anahtar Özellik] | Alya Bıçak"` |
| `seo.description` | **Max 155** | Keyword-rich, includes dimensions + material + top applications + `distribütör` |
| `seo.keywords[]` | 12-18 items | Mix of TR + EN keywords, include misspellings if common |

#### SEO Title Formula:
```
[Ürün Kodu] [Ürün Adı] [Boyut] | [Ana Özellik] [Malzeme] | Alya Bıçak
```
Example: `OK Bıçak Arrow Blade 30.4×25mm | Çift Kenar Karbon Çelik | Alya Bıçak`

---

## 3. TRANSLATION FILES — PER-LOCALE REQUIREMENTS

### 3.1 All Locales (en.ts, ar.ts, fr.ts, ru.ts)

Every product MUST have ALL of these fields in EACH translation file:

| # | Field | Notes |
|---|-------|-------|
| 1 | `name` | Product name in target language |
| 2 | `subtitle` | Translated subtitle |
| 3 | `description` | Full description (~200-280 chars) |
| 4 | `shortDescription` | One-line summary |
| 5 | `features[]` | ALL features translated (match count with TR) |
| 6 | `applications[]` | ALL application titles as string[] |
| 7 | `benefits[]` | `[{ title, description, icon }]` — ALL translated |
| 8 | `longDescription` | Full HTML with `<h3>` sections translated |
| 9 | `availableSizes[]` | Translated if units differ |
| 10 | `seo.title` | **Max char limits vary by language** — see below |
| 11 | `seo.description` | **Max 155 chars** in all languages |
| 12 | `seo.keywords[]` | **Localized keywords** — NOT direct translations of TR keywords |

### 3.2 SEO Character Limits Per Language

| Language | Title Max | Description Max | Notes |
|----------|-----------|-----------------|-------|
| Turkish (TR) | 60 chars | 155 chars | Master language |
| English (EN) | 60 chars | 155 chars | Use British English (Sheffield heritage) |
| Arabic (AR) | **55 chars** | 150 chars | Arabic chars render wider in SERP |
| French (FR) | 60 chars | 155 chars | Include accents properly |
| Russian (RU) | 58 chars | 155 chars | Cyrillic chars render slightly wider |

### 3.3 Arabic-Specific Rules (RTL)

1. **Use Modern Standard Arabic (MSA/فصحى)** — understood across all MENA markets
2. **Include regional market keywords** in `seo.keywords[]`:
   - Add `'مصر'` (Egypt), `'السعودية'` (Saudi), `'الإمارات'` (UAE) for major markets
   - Add `'سعر'` + product type for purchase-intent keywords
3. **Technical terms**: Keep international standards as-is (`HRC`, `TiN`, `PVD`, `ISO`)
4. **Measurements**: `mm → مم`, `°C → °م` (use Arabic unit suffixes)
5. **Brand name**: Always `Alya Blade` (Latin script, not arabized)
6. **seo.title formula**: `[كود المنتج] [اسم المنتج] [البُعد] | [خاصية] | Alya Blade`

### 3.4 English-Specific Rules

1. Use **British English** where applicable (centre, colour, specialised)
2. Include both British and American spellings in `seo.keywords[]` if different
3. **Rare Token Injection**: Use Sheffield steel terminology: `"Cryogenic heat treatment"`, `"Burr-free edge"`, `"HRC 60-62"`, `"M2 High-Speed Steel"`

### 3.5 French-Specific Rules

1. Proper accents required (é, è, ê, ë, à, ù, ç, ô, etc.)
2. Use `Alya Blade` brand name (not `Alya Lame`)
3. Technical terms: Keep `HRC`, `TiN`, `PVD` as-is

### 3.6 Russian-Specific Rules

1. Reference **GOST standards** where applicable
2. Use `Alya Blade` brand name (not Cyrillic transliteration)
3. Include CIS market keywords if relevant

---

## 4. SPEC-VALUES.TS UPDATE RULES

When a product introduces **ANY new spec value** not already in `spec-values.ts`:

1. **Add to ALL 5 language blocks**: `tr`, `en`, `ar`, `fr`, `ru`
2. **Turkish block** maps value to itself: `'Karbon Çelik': 'Karbon Çelik'`
3. **Other blocks** translate: `'Karbon Çelik': 'Carbon Steel'` (en), `'فولاذ كربوني'` (ar), etc.
4. **Keep international codes as-is**: HRC, HV, mm, PVD, TiN, PTFE, ISO, DIN
5. **Measurement conversions**: Always use metric (mm, °C, g, kg)

---

## 5. TRINITY CONSISTENCY RULE

> **Schema.org + llms.txt + Visible UI must show the same values.**

When adding/updating a product, verify these three layers are consistent:

### Layer 1: Schema.org (JSON-LD)
- `generateEnhancedProductSchema()` in `lib/seo/schemas/product.ts`
- Specs appear as `PropertyValue` in `additionalProperty`
- `manufacturer`, `brand`, `material` auto-extracted from product data

### Layer 2: llms.txt
- `public/llms.txt` — AI crawler knowledge base
- If you add a NEW subcategory or significantly change product categories, update this file
- Product-level changes don't require llms.txt updates (schema handles it)

### Layer 3: Visible UI
- Product page renders `specs[]`, `features[]`, `benefits[]`, `applications[]`
- All translated values must match schema output
- `longDescription` HTML must contain the same technical values as `specs[]`

**Verification**: After adding a product, spot-check that:
- `specs[0].value` in code === `additionalProperty[0].value` in page source JSON-LD === visible text on page

---

## 6. SCRAPED-PRODUCTS.JSON ENTRY

Every Gold product must also have a proper base entry in `scraped-products.json`:

```json
{
  "id": "ok",
  "slug": "ok-bicak",
  "slugEN": "ok-arrow-blade",
  "code": "OK",
  "name": "OK Bıçak",
  "description": "OK Bıçak (Arrow Blade). 30.4×25.0×0.50mm, karbon çelik...",
  "categoryId": "industrial-blades",
  "subcategoryId": "arrow-blades",
  "image": "/images/products/ok-bicak.jpg",
  "variants": [
    { "id": "ok-01", "name": "OK — Karbon Çelik", "sku": "OK-CS", "material": "Karbon Çelik", "inStock": true }
  ],
  "specifications": {
    "material": "Karbon Çelik",
    "dimensions": "30.4×25.0×0.50mm",
    "thickness": "0.50mm",
    "hardness": "HRC 58-62"
  },
  "features": ["Çift taraflı bileme", "2 slot + 1 delik", "Karbon çelik"],
  "applications": ["Etiket soyma", "Kablo soyma", "Bant kesme"],
  "seoKeywords": ["ok bıçak", "arrow blade"],
  "isFeatured": true,
  "isActive": true,
  "order": 347
}
```

---

## 7. FACT-BASED AUTHORITY — GLOBAL STANDARDS

When writing product content, always cite specific standards:

| Market | Standards to Reference |
|--------|----------------------|
| Turkey | TSE, CE |
| Europe | CE, DIN, EN (European Norms) |
| Russia/CIS | GOST (add GOST equivalents for materials) |
| Saudi Arabia | SASO |
| Middle East/North Africa | ISO 9001 (universally recognized) |
| UAE | ESMA |

**In content**: Instead of "yüksek kaliteli çelik" → write "CE sertifikalı, HRC 58-62 sertlik, Sheffield çeliği"

---

## 8. NEW LANGUAGE SCALE-UP TEMPLATE

When adding a new locale (e.g., `de`, `es`, `it`, `pl`), use this checklist:

### 8.1 Infrastructure (One-time per language)
- [ ] Add locale to `lib/i18n/config.ts` — `SUPPORTED_LOCALES` array
- [ ] Create dictionary: `lib/i18n/dictionaries/[locale].ts`
- [ ] Create category translations: `lib/i18n/translations/categories/[locale].ts`
- [ ] Create product translations: `lib/i18n/translations/products/[locale].ts`
- [ ] Add locale block to `spec-values.ts`
- [ ] Update `middleware.ts` — add locale to routing
- [ ] Update `lib/config/domains.ts` — add `OG_LOCALE_MAP` and `SCHEMA_LANGUAGE` entries
- [ ] Add font support if needed (Cyrillic: Noto Sans; Arabic/Hebrew: Noto Sans Arabic/Hebrew; CJK: Noto Sans CJK)
- [ ] Add RTL support if needed (`ar`, `he`, `fa` → `dir="rtl"`)
- [ ] Update `app/robots.ts` — no changes needed (auto-includes all locales)
- [ ] Update `app/sitemap.ts` — auto-includes new locale via config
- [ ] Update `public/llms.txt` — add new language note if significant

### 8.2 Per-Product Translation Template
```typescript
'product-id': {
  name: '',                    // Product name in [LANGUAGE]
  subtitle: '',                // Technical subtitle
  description: '',             // Full description (200-280 chars)
  shortDescription: '',        // One-line summary
  features: [                  // ALL features (match TR count)
    '',
  ],
  applications: [              // ALL application titles (match TR order)
    '',
  ],
  seo: {
    title: '',                 // Max [X] chars — "[Product] [Size] | [Feature] | Alya Blade"
    description: '',           // Max 155 chars
    keywords: [                // 8-12 localized keywords
      '',
    ],
  },
  benefits: [
    { title: '', description: '', icon: '' },  // Match TR count
  ],
  longDescription: ``,         // HTML with <h3> sections
  availableSizes: [''],
},
```

### 8.3 Locale Configuration Reference

| New Locale | OG Locale | Schema Language | Font | RTL? |
|------------|-----------|-----------------|------|------|
| `de` | `de_DE` | `de-DE` | Inter (Latin) | No |
| `es` | `es_ES` | `es-ES` | Inter (Latin) | No |
| `it` | `it_IT` | `it-IT` | Inter (Latin) | No |
| `pl` | `pl_PL` | `pl-PL` | Inter (Latin) | No |
| `az` | `az_AZ` | `az-AZ` | Inter (Latin) | No |
| `uz` | `uz_UZ` | `uz-UZ` | Inter (Latin) | No |
| `ro` | `ro_RO` | `ro-RO` | Inter (Latin) | No |
| `bg` | `bg_BG` | `bg-BG` | Noto Sans (Cyrillic) | No |
| `ka` | `ka_GE` | `ka-GE` | Noto Sans Georgian | No |
| `he` | `he_IL` | `he-IL` | Noto Sans Hebrew | **Yes** |
| `fa` | `fa_IR` | `fa-IR` | Noto Sans Arabic | **Yes** |
| `kk` | `kk_KZ` | `kk-KZ` | Inter (Cyrillic) | No |
| `ja` | `ja_JP` | `ja-JP` | Noto Sans JP | No |
| `zh` | `zh_CN` | `zh-CN` | Noto Sans SC | No |
| `ko` | `ko_KR` | `ko-KR` | Noto Sans KR | No |
| `hi` | `hi_IN` | `hi-IN` | Noto Sans Devanagari | No |

---

## 9. PRODUCT VALIDATION CHECKLIST

Before committing any product addition, verify:

### Turkish Master Data (products-extended.ts)
- [ ] `id` is unique across all products
- [ ] `slug` is kebab-case, no spaces, valid Turkish chars
- [ ] `slugEN` exists, pure English, no Turkish chars (ı, ş, ç, ö, ü, ğ forbidden)
- [ ] `code` is uppercase
- [ ] `tags[]` has 10-16 items
- [ ] `shortDescription` is 200-280 chars
- [ ] `longDescription` has 3+ `<h3>` sections
- [ ] `specs[]` has 5+ items including material, dimensions, thickness, hardness
- [ ] `applications[]` has 5-9 items with title + icon + description
- [ ] `benefits[]` has 3-4 items with title + description + icon
- [ ] `features[]` has 7-10 items
- [ ] `relatedProductIds[]` has 2-5 valid product IDs
- [ ] `certifications[]` has at least `['CE']`
- [ ] `seo.title` ≤ 60 chars
- [ ] `seo.description` ≤ 155 chars
- [ ] `seo.keywords[]` has 12-18 items

### Base Data (scraped-products.json)
- [ ] Entry exists with matching `id`
- [ ] `slugEN` field is present
- [ ] All required JSON fields present

### Translations (en.ts, ar.ts, fr.ts, ru.ts)
- [ ] Entry exists in ALL 4 translation files
- [ ] All 12 fields present (name, subtitle, description, shortDescription, features, applications, seo, benefits, longDescription, availableSizes, seo.title, seo.description)
- [ ] `seo.title` within char limit for each language
- [ ] `seo.description` ≤ 155 chars
- [ ] `seo.keywords[]` has 7+ localized keywords (not just translated TR keywords)
- [ ] Arabic: includes regional keywords (مصر, السعودية, الإمارات)
- [ ] No Turkish text bleeding through in any locale

### Spec Values (spec-values.ts)
- [ ] All new spec values added to ALL 5 language blocks (tr, en, ar, fr, ru)

### Build
- [ ] `npm run build` passes with zero errors
- [ ] No TypeScript errors in modified files

---

## 10. FILE MODIFICATION ORDER

When adding a new product, follow this exact file order:

```
1. scraped-products.json        → Add base product entry
2. products-extended.ts         → Add enriched product entry
3. spec-values.ts               → Add new spec value translations (if any)
4. translations/products/en.ts  → English translation
5. translations/products/ar.ts  → Arabic translation
6. translations/products/fr.ts  → French translation
7. translations/products/ru.ts  → Russian translation
8. npm run build                → Verify zero errors
```

---

## APPENDIX A: GOLD STANDARD REFERENCE PRODUCT

See the `'ok'` (Arrow Blade) entry in `products-extended.ts` as the reference implementation. It has:
- 13 tags
- 7 applications with descriptions
- 4 benefits with descriptions
- 7 features
- 6 specs with icons and highlights
- 3000+ char longDescription with 5 `<h3>` sections
- 18 SEO keywords (mixed TR + EN)
- Complete translations in all 4 locales
- 2 relatedProductIds

---

*Last updated: March 2026*
*Maintained by: Alya Blade Development Team*
