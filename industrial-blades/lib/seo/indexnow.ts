/**
 * IndexNow API Integration
 *
 * IndexNow, Bing ve Yandex'e URL'lerin anÃ„Â±nda indexlenmesini saÃ„Å¸lar.
 * Google desteklemiyor, kendi crawl sistemini kullanÃ„Â±yor.
 *
 * Destekleyen arama motorlarÃ„Â±:
 * - Bing (Microsoft)
 * - Yandex (Russia)
 * - Seznam.cz (Czech Republic)
 * - Naver (South Korea)
 *
 * @see https://www.indexnow.org/documentation
 */

import { i18nConfig, type Locale } from '@/lib/i18n/config';
import { getDomainHost } from '@/lib/config/domains';

// IndexNow API endpoint'leri (herhangi birini kullanabilirsiniz)
const INDEXNOW_ENDPOINTS = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
  'https://yandex.com/indexnow',
] as const;

interface IndexNowPayload {
  host: string;
  key: string;
  keyLocation?: string;
  urlList: string[];
}

interface IndexNowResult {
  success: boolean;
  endpoint: string;
  status?: number;
  error?: string;
  submittedUrls: number;
}

/**
 * IndexNow API'ye URL listesi gÃƒÂ¶nderir
 * @param urls - Indexlenmesi istenen URL listesi
 * @param host - Domain adÃ„Â± (alyabicak.com veya alyablade.com)
 * @returns IndexNow API yanÃ„Â±tÃ„Â±
 */
export async function submitToIndexNow(
  urls: string[],
  host: string = 'alyablade.com'
): Promise<IndexNowResult> {
  const key = process.env.INDEXNOW_API_KEY;

  if (!key) {
    console.warn('[IndexNow] API key not configured. Set INDEXNOW_API_KEY in environment variables.');
    return {
      success: false,
      endpoint: '',
      error: 'API key not configured',
      submittedUrls: 0,
    };
  }

  // URL'leri validate et ve normalize et
  const validUrls = urls
    .filter(url => url && url.startsWith('https://'))
    .slice(0, 10000); // IndexNow max 10,000 URL/request

  if (validUrls.length === 0) {
    return {
      success: false,
      endpoint: '',
      error: 'No valid URLs to submit',
      submittedUrls: 0,
    };
  }

  const payload: IndexNowPayload = {
    host,
    key,
    keyLocation: `https://${host}/${key}.txt`,
    urlList: validUrls,
  };

  // Ã„Â°lk baÃ…Å¸arÃ„Â±lÃ„Â± endpoint'i kullan
  for (const endpoint of INDEXNOW_ENDPOINTS) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      // 200, 202 = Success, 400 = Invalid, 403 = Key mismatch, 422 = Invalid URL, 429 = Rate limit
      if (response.ok || response.status === 202) {
        console.log(`[IndexNow] Successfully submitted ${validUrls.length} URLs to ${endpoint}`);
        return {
          success: true,
          endpoint,
          status: response.status,
          submittedUrls: validUrls.length,
        };
      }

      console.warn(`[IndexNow] ${endpoint} returned ${response.status}`);
    } catch (error) {
      console.error(`[IndexNow] Failed to submit to ${endpoint}:`, error);
    }
  }

  return {
    success: false,
    endpoint: INDEXNOW_ENDPOINTS[0],
    error: 'All endpoints failed',
    submittedUrls: 0,
  };
}

/**
 * TÃƒÂ¼m site URL'lerini IndexNow'a gÃƒÂ¶nderir
 * Build sonrasÃ„Â± veya bÃƒÂ¼yÃƒÂ¼k iÃƒÂ§erik gÃƒÂ¼ncellemesinde kullanÃ„Â±lÃ„Â±r
 */
export async function submitAllUrlsToIndexNow(): Promise<IndexNowResult[]> {
  const results: IndexNowResult[] = [];

  for (const locale of i18nConfig.locales) {
    const host = getDomainHost(locale);
    const baseUrl = `https://${host}/${locale}`;

    // Ana sayfalar
    const staticUrls = [
      baseUrl,
      `${baseUrl}/about`,
      `${baseUrl}/contact`,
      `${baseUrl}/categories`,
      `${baseUrl}/faq`,
      `${baseUrl}/quality-standards`,
      `${baseUrl}/consulting`,
      `${baseUrl}/catalog`,
      `${baseUrl}/newsletter`,
    ];

    const result = await submitToIndexNow(staticUrls, host);
    results.push(result);
  }

  return results;
}

/**
 * Belirli bir ÃƒÂ¼rÃƒÂ¼n URL'ini IndexNow'a gÃƒÂ¶nderir
 * Yeni ÃƒÂ¼rÃƒÂ¼n eklendiÃ„Å¸inde veya ÃƒÂ¼rÃƒÂ¼n gÃƒÂ¼ncellendiÃ„Å¸inde kullanÃ„Â±lÃ„Â±r
 */
export async function submitProductToIndexNow(
  productSlug: string
): Promise<IndexNowResult[]> {
  const results: IndexNowResult[] = [];

  for (const locale of i18nConfig.locales) {
    const host = getDomainHost(locale);
    const productUrl = `https://${host}/${locale}/products/${productSlug}`;

    const result = await submitToIndexNow([productUrl], host);
    results.push(result);
  }

  return results;
}

/**
 * Belirli bir kategori URL'ini IndexNow'a gÃƒÂ¶nderir
 */
export async function submitCategoryToIndexNow(
  categorySlug: string
): Promise<IndexNowResult[]> {
  const results: IndexNowResult[] = [];

  for (const locale of i18nConfig.locales) {
    const host = getDomainHost(locale);
    const categoryUrl = `https://${host}/${locale}/categories/${categorySlug}`;

    const result = await submitToIndexNow([categoryUrl], host);
    results.push(result);
  }

  return results;
}
