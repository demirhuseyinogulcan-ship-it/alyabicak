# Middleware Migration Prep — Next.js 16+ i18n Strategy

> Created: June 2025 | Next.js 16.1.1 | Faz 6

## Current Middleware Behavior

The `middleware.ts` file handles three responsibilities:

### 1. Locale Detection Priority Chain
```
Domain → URL Path → Cookie → Accept-Language → Default
```

| Step | Source | Example |
|------|--------|---------|
| 1 | Domain | `alyabicak.com` → `tr`, `alyablade.com` → `en` |
| 2 | URL path | `/fr/products/...` → `fr` |
| 3 | Cookie | `NEXT_LOCALE=ar` → `ar` |
| 4 | Accept-Language | `Accept-Language: ru` → `ru` |
| 5 | Fallback | `tr` (default locale) |

**Special rule:** On alyabicak.com (TR domain), cookie preferences other than `tr` are ignored.

### 2. Slug Redirects (301)
Non-TR locales redirect old Turkish slugs → English slugs:
```
/en/products/vakum-paketleme-bicagi → /en/products/vacuum-packaging-knife
```
- Only triggers for `/[non-tr-locale]/products/[slug]` patterns
- 28 slug mappings in `SLUG_REDIRECTS` map

### 3. Locale Prefix Injection
Requests without locale prefix get redirected:
```
/products → /en/products (on alyablade.com)
/products → /tr/products (on alyabicak.com)
```
- Sets `NEXT_LOCALE` cookie (1 year, secure, lax)
- Preserves query strings

## Skip Patterns
Middleware skips these paths (via `config.matcher + pathname checks`):
- `/_next/*` (internal)
- `/api/*` (API routes)
- `/images/*` (static assets)
- Any path with `.` (static files)
- `robots.txt`, `sitemap.xml`, `favicon.ico`

## Current Architecture Assessment

### ✅ Working Well
- Domain-based locale detection (core business need)
- Slug redirects for legacy SEO preservation
- Cookie persistence for language preference
- Static file exclusion

### ⚠️ Potential Improvements (Non-Breaking)

#### A. Move slug redirects to `next.config.ts → redirects()`
The `SLUG_REDIRECTS` map can be expressed as Next.js config redirects, removing logic from middleware:
```ts
// next.config.ts
async redirects() {
  const slugPairs = [
    ['vakum-paketleme-bicagi', 'vacuum-packaging-knife'],
    // ...28 more
  ];

  return slugPairs.flatMap(([oldSlug, newSlug]) =>
    ['en', 'ar', 'ru', 'fr'].map(locale => ({
      source: `/${locale}/products/${oldSlug}`,
      destination: `/${locale}/products/${newSlug}`,
      permanent: true,
    }))
  );
}
```
**Benefit:** Slightly faster — config redirects happen at the edge before middleware executes.

#### B. Simplify matcher pattern
Current:
```ts
matcher: ['/', '/((?!_next|api|images|favicon.ico|robots.txt|sitemap.xml).*)']
```
The regex + pathname.includes('.') check is redundant. Can simplify to:
```ts
matcher: ['/((?!_next|api|images|.*\\..*).*)', '/']
```

## Future Migration Notes (Next.js 17+)

### Middleware is NOT Deprecated
As of Next.js 16.1.1, middleware remains fully supported. The `config.matcher` pattern is standard.

### If Next.js Moves to Route-Level i18n
If future Next.js versions introduce built-in i18n routing (like the old `next-intl` pattern), the migration path would be:

1. **Keep middleware for domain detection only** — this is custom logic that no framework handles natively
2. **Move locale prefix injection** to `app/[locale]/layout.tsx` with `generateStaticParams`
3. **Move slug redirects** to `next.config.ts → redirects()`

### Recommended Pre-Migration Checklist
- [ ] Extract `SLUG_REDIRECTS` to `lib/i18n/slug-redirects.ts` (shared config)
- [ ] Extract `getLocaleFromDomain()` to `lib/i18n/domain-utils.ts`
- [ ] Add integration tests for all redirect scenarios
- [ ] Document all 28 slug redirect pairs with their Google Search Console status

## File References
- Middleware: `middleware.ts` (176 lines)
- i18n Config: `lib/i18n/config.ts`
- Domain Config: `lib/config/domains.ts`
- Locale Utils: `lib/i18n/locale-utils.ts`
