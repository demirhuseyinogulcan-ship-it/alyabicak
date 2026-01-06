/**
 * Site Konfigürasyonu
 * Merkezi yapılandırma dosyası - Production'da environment variable kullanın
 * 
 * Environment Variables (.env.local):
 * NEXT_PUBLIC_SITE_URL=https://www.alyabicak.com
 * NEXT_PUBLIC_PHONE=+90 (216) 575 17 91
 * NEXT_PUBLIC_WHATSAPP=905350504613
 * NEXT_PUBLIC_EMAIL=info@alyatekstil.com
 */

export const siteConfig = {
  // Site Bilgileri
  name: 'Alya Bıçak',
  tagline: 'Endüstriyel Kesici Bıçaklar | Sheffield Kalitesi',
  description: 'Alya Bıçak - Endüstriyel kesici bıçaklar, makina bıçakları, sanayi jiletleri. Sheffield kalitesi ile üretilmiş profesyonel bıçaklar. 30 yıllık tecrübe.',
  
  // URL'ler
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.alyabicak.com',
  mainSiteUrl: 'https://www.alyatekstil.com',
  
  // İletişim Bilgileri
  contact: {
    phone: process.env.NEXT_PUBLIC_PHONE || '+90 (216) 575 17 91',
    phoneRaw: '+902165751791',
    phoneLines: '3 hat',
    fax: '+90 (216) 575 17 67',
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '905350504613',
    email: process.env.NEXT_PUBLIC_EMAIL || 'info@alyatekstil.com',
    address: {
      line1: 'Dudullu Organize Sanayi Bölgesi',
      line2: 'DES Sanayi Sitesi, 101. Sokak B4 Blok No: 2',
      postalCode: '34776',
      district: 'Ümraniye',
      city: 'İstanbul',
      country: 'Türkiye',
      full: 'Dudullu Organize Sanayi Bölgesi, DES Sanayi Sitesi, 101. Sokak B4 Blok No: 2, 34776 Ümraniye-İstanbul/TÜRKİYE',
    },
    workingHours: {
      weekdays: '09:00 - 18:00',
      saturday: 'Kapalı',
      sunday: 'Kapalı',
      description: 'Pazartesi - Cuma: 09:00 - 18:00 | Hafta sonu: Kapalı',
    },
  },
  
  // Şirket Bilgileri
  company: {
    legalName: 'Alya Tekstil Sanayi Ticaret Ltd. Şti.',
    foundedYear: 1996,
    yearsOfExperience: new Date().getFullYear() - 1996,
    exportCountries: 35,
    distributorRegions: ['Türkiye', 'Orta Doğu', 'Balkanlar', 'Orta Asya'],
  },
  
  // Sosyal Medya
  social: {
    facebook: '',
    instagram: 'https://www.instagram.com/alya_tekstil_sanayi/',
    linkedin: 'https://www.linkedin.com/company/alya-ltd./',
    twitter: '',
    youtube: '',
  },
  
  // SEO
  seo: {
    keywords: [
      'alya bıçak',
      'alya bıçakları', 
      'endüstriyel bıçak',
      'kesici bıçak',
      'makina bıçağı',
      'sanayi jileti',
      'sheffield bıçak',
      'özel üretim bıçak',
      'endüstriyel kesici',
      'martor alternatifi',
      'lutz blade alternatifi',
      'tekstil bıçağı',
      'ambalaj bıçağı',
      'gıda sanayi bıçak',
    ] as const,
    defaultOgImage: '/images/og-image.jpg',
  },
  
  // Özellikler
  features: {
    enableWhatsApp: true,
    enableContactForm: true,
    enableProductSearch: true, // Aktif
    enableBlog: false, // TODO: Blog eklendiğinde true yap
    enableMultiLanguage: false, // TODO: Çoklu dil eklendiğinde true yap
    enableAnalytics: false, // TODO: Analytics eklendiğinde true yap
    enableCookieConsent: true, // KVKK uyumu için aktif
  },
} as const;

// Type exports
export type SiteConfig = typeof siteConfig;

// Helper functions
export function getWhatsAppUrl(message?: string): string {
  const baseUrl = `https://wa.me/${siteConfig.contact.whatsapp}`;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
}

export function getPhoneUrl(): string {
  return `tel:${siteConfig.contact.phoneRaw}`;
}

export function getEmailUrl(subject?: string): string {
  const baseUrl = `mailto:${siteConfig.contact.email}`;
  if (subject) {
    return `${baseUrl}?subject=${encodeURIComponent(subject)}`;
  }
  return baseUrl;
}

export function getGoogleMapsUrl(): string {
  // Doğrudan Google Maps short link - Alya Tekstil konumu
  return 'https://maps.app.goo.gl/YRMreTyTnF4mGg578';
}
