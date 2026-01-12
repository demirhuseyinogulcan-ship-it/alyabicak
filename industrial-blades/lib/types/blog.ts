/**
 * Blog/Bülten Type Definitions
 */

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  author: BlogAuthor
  category: BlogCategory
  tags: string[]
  publishedAt: string
  updatedAt?: string
  readingTime: number // dakika
  featured?: boolean
  seo?: BlogSEO
}

export interface BlogAuthor {
  id: string
  name: string
  title: string
  avatar?: string
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  description?: string
  dictionaryKey: 'technicalArticles' | 'productGuides' | 'sectorNews' | 'fairsEvents' | 'companyNews'
}

export interface BlogSEO {
  title?: string
  description?: string
  keywords?: string[]
  focusKeyword?: string
}

// Sabit kategoriler - Teknik Yazılar öncelikli (B2B değer sıralaması)
export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    id: 'teknik-yazilar',
    name: 'Teknik Yazılar',
    slug: 'teknik-yazilar',
    description: 'Çelik kalitesi, metalürji ve teknik bilgiler',
    dictionaryKey: 'technicalArticles',
  },
  {
    id: 'urun-rehberleri',
    name: 'Ürün Rehberleri',
    slug: 'urun-rehberleri',
    description: 'Doğru bıçak seçimi için kapsamlı rehberler',
    dictionaryKey: 'productGuides',
  },
  {
    id: 'sektor-haberleri',
    name: 'Sektör Haberleri',
    slug: 'sektor-haberleri',
    description: 'Endüstriyel kesici sektöründen güncel haberler',
    dictionaryKey: 'sectorNews',
  },
  {
    id: 'fuarlar',
    name: 'Fuarlar & Etkinlikler',
    slug: 'fuarlar',
    description: 'Sektörel fuarlar ve etkinlikler',
    dictionaryKey: 'fairsEvents',
  },
  {
    id: 'sirket-haberleri',
    name: 'Şirket Haberleri',
    slug: 'sirket-haberleri',
    description: 'Alya Bıçak kurumsal haberler',
    dictionaryKey: 'companyNews',
  },
]

// Varsayılan yazar
export const DEFAULT_AUTHOR: BlogAuthor = {
  id: 'alya-bicak',
  name: 'Alya Bıçak',
  title: 'Editör',
}

