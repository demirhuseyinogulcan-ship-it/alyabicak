/**
 * Hero Slides Translations Index
 *
 * Yeni dil eklemek için:
 * 1. Bu klasöre yeni dosya ekleyin (örn: hi.ts)
 * 2. heroSlidesTranslations objesine import edin
 */

import { heroSlidesTr, type HeroSlideTranslations } from './tr';
import { heroSlidesEn } from './en';
import { heroSlidesAr } from './ar';
import { heroSlidesRu } from './ru';
import { heroSlidesFr } from './fr';

export const heroSlidesTranslations: Record<string, HeroSlideTranslations> = {
  tr: heroSlidesTr,
  en: heroSlidesEn,
  ar: heroSlidesAr,
  ru: heroSlidesRu,
  fr: heroSlidesFr,
};

export type { HeroSlideTranslations };
