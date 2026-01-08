/**
 * Hero Slider Verileri
 */

import { HeroSlide } from '../types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    title: 'Sheffield Kalitesinde Endüstriyel Bıçaklar',
    subtitle: 'Dünya Çapında Tanınan Kalite',
    description: 'Üstün çelik kalitesi ile uzun ömürlü ve keskin performans',
    image: '/images/hero/sheffield-quality.jpg',
    ctaText: 'Ürünleri İncele',
    ctaLink: '/categories',
    order: 1,
    isActive: true,
  },
  {
    id: 'slide-2',
    title: 'Özel Tasarım Bıçaklar',
    subtitle: 'İhtiyacınıza Özel Çözümler',
    description: 'İhtiyacınıza özel üretim, mükemmel kesim kalitesi',
    image: '/images/hero/ozel-tasarim.jpg',
    ctaText: 'Ücretsiz Danışmanlık Alın',
    ctaLink: '/consulting',
    order: 2,
    isActive: true,
  },
  {
    id: 'slide-3',
    title: 'Profesyonel Danışmanlık',
    subtitle: 'Uzman Teknik Destek',
    description: 'Doğru malzeme seçimi için uzman desteği',
    image: '/images/hero/profesyonel-danismanlik.jpg',
    ctaText: 'Ücretsiz Danışmanlık Alın',
    ctaLink: '/contact',
    order: 3,
    isActive: true,
  },
  {
    id: 'slide-4',
    title: 'Kesimin En Güvenilir Hali',
    subtitle: 'İş Güvenliği & El Bıçakları',
    description: 'Kesim bitiminde otomatik geri çekilebilen mekanizmasıyla iş kazalarını engeller',
    image: '/images/squeeze_knife_hero.jpg',
    ctaText: 'Ürünleri İncele',
    ctaLink: '/categories/safety-knives',
    order: 4,
    isActive: true,
  },
];

// Yardımcı fonksiyonlar
export function getActiveSlides(): HeroSlide[] {
  return HERO_SLIDES
    .filter(slide => slide.isActive)
    .sort((a, b) => a.order - b.order);
}

export function getSlideById(id: string): HeroSlide | undefined {
  return HERO_SLIDES.find(slide => slide.id === id);
}

