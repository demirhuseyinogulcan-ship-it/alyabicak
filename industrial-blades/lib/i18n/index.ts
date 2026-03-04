/**
 * i18n Module Exports
 */

export { i18nConfig, localePaths, getRouteKey, getLocalizedPath, isLocale, ensureLocale } from './config';
export type { Locale } from './config';
export { getDictionary } from './dictionaries';
export type { Dictionary } from './dictionaries';
export { BRAND_NAME, DATE_LOCALE, SCHEMA_LANGUAGE, YANDEX_VERIFICATION, WHATSAPP_SITE, getBrandName, getDateLocale, getSchemaLanguage, getYandexVerification } from './locale-utils';
