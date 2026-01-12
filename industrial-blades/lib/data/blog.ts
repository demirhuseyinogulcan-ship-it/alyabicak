/**
 * Blog/Bülten Data - Çoklu Dil Destekli
 * 
 * YAPI:
 * - Her yazı benzersiz bir slug'a sahip
 * - Her dil için ayrı içerik (title, excerpt, content, seo)
 * - Görsel ve kategori tüm dillerde ortak
 * 
 * YENİ YAZI EKLEME:
 * 1. BLOG_POSTS_LOCALIZED dizisine yeni obje ekle
 * 2. tr alanını doldur (zorunlu)
 * 3. Diğer dilleri ekle (en, ar, ru - opsiyonel)
 */

import { BlogPost, BlogCategory, DEFAULT_AUTHOR, BLOG_CATEGORIES } from '@/lib/types/blog'
import { Locale } from '@/lib/i18n'

// Çoklu dil destekli blog yazısı yapısı
interface LocalizedBlogContent {
  title: string
  excerpt: string
  content: string
  seo?: {
    title?: string
    description?: string
    keywords?: string[]
    focusKeyword?: string
  }
}

interface LocalizedBlogPost {
  id: string
  slug: string
  coverImage: string
  author: typeof DEFAULT_AUTHOR
  category: BlogCategory
  tags: {
    tr: string[]
    en: string[]
    ar?: string[]
    ru?: string[]
  }
  publishedAt: string
  updatedAt?: string
  readingTime: number
  featured: boolean
  // Dil bazlı içerik
  tr: LocalizedBlogContent
  en: LocalizedBlogContent
  ar?: LocalizedBlogContent
  ru?: LocalizedBlogContent
}

// =============================================================================
// BLOG YAZILARI - ÇOK DİLLİ
// =============================================================================

export const BLOG_POSTS_LOCALIZED: LocalizedBlogPost[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // YAZI 1: Çelik - Endüstrinin Omurgası
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'celik-endustrinin-omurgasi',
    slug: 'celik-endustrinin-omurgasi',
    coverImage: '/images/blog/celik-endustrinin-omurgasi.webp',
    author: DEFAULT_AUTHOR,
    category: BLOG_CATEGORIES[0], // Teknik Yazılar (index 0)
    tags: {
      tr: ['çelik', 'metalürji', 'sheffield çeliği', 'endüstriyel üretim', 'D2 çelik', 'M2 çelik'],
      en: ['steel', 'metallurgy', 'sheffield steel', 'industrial production', 'D2 steel', 'M2 steel'],
      ar: ['الفولاذ', 'علم المعادن', 'فولاذ شيفيلد', 'الإنتاج الصناعي'],
      ru: ['сталь', 'металлургия', 'шеффилдская сталь', 'промышленное производство'],
    },
    publishedAt: '2025-01-12',
    readingTime: 8,
    featured: true,
    tr: {
      title: 'Çelik: Endüstrinin Omurgası, Geleceğin Garantisi',
      excerpt: 'Dünya ham çelik üretimi 1900\'de 40 milyon tondan 2013\'te 1,6 milyar tona ulaştı. Çeliğin vazgeçilmezliğinin ardındaki bilim ve ekonomi.',
      content: `
        <p class="lead">Bir mühendislik malzemesinin değerini anlamak için onun tarihine bakmak gerekir. Çelik, insanlık tarihinde köprü kurdu, gökdelenler dikti, üretim hatlarını dönüştürdü. Bugün hâlâ aynı soruyu soruyoruz: Neden çelik? Cevap, rakamların ve metalürjinin kesiştiği noktada yatıyor.</p>

        <h2>Rakamlar Ne Söylüyor?</h2>
        <p>Dünya ham çelik üretimi 1900 yılında 40 milyon ton civarındayken, 2013 yılında 1,6 milyar tona ulaştı. Bu sadece bir büyüme hikâyesi değil; çeliğin vazgeçilmezliğinin kanıtı. Aynı dönemde alüminyum, magnezyum ve plastikler sahneye çıktı, ancak hiçbiri çeliğin tahtını sarsamadı.</p>
        
        <p>Nedeni basit bir enerji denkleminde gizli: Demiri elde etmek için gereken enerji, birincil alüminyum üretiminin yalnızca onda biri kadar. Ekonomik olarak değerlendirilebilecek ham demir cevheri rezervleri yaklaşık 170 milyar ton seviyesinde. Yani demir esaslı malzemeler, kaynak güvenliği açısından uzun vadeli bir garanti sunuyor.</p>

        <h2>Çeliği Çelik Yapan Nedir?</h2>
        <p>Bir malzemenin bu denli geniş bir kullanım alanı bulmasının ardında, eşsiz bir özellikler kombinasyonu var. Çelik, yüksek ve ultra yüksek mukavemeti aynı anda sunabilen nadir malzemelerden biri. Sıcak ve soğuk şekillendirmeye uygun, kaynak edilebilir, işlenebilir. Sertlik ile süneklik arasındaki dengeyi kurabilir; aşınmaya, korozyona, yüksek sıcaklıklarda ısıya ve deformasyona dayanabilir.</p>

        <p>Bu esnekliğin sırrı, çeliğin "tasarlanabilir" bir malzeme olmasında yatıyor. VDEh Çelik Enstitüsü'nün Avrupa Çelik Tescil Dairesi ile yayınladığı Avrupa Çelikleri Kütüğü'nde 1.500 özel çelik çeşidi sınıflandırılmış durumda; toplam çelik cinsi sayısı ise 2.000'i buluyor.</p>

        <h2>Araştırma ve Geliştirmenin Pusulası</h2>
        <p>Çelik ile ilgili Ar-Ge çalışmaları, imalat ve ısıl işlem dahil tüm aşamaları sistematik olarak ele alıyor. Metalürji bilimi, bu gelişim için gerekli temeli sağlıyor. Günümüzde sürmekte olan araştırmalar belirli odak noktalarına yoğunlaşmış durumda:</p>
        
        <ul>
          <li>Kimyasal kompozisyonda dar bileşim aralıklarını sağlamak</li>
          <li>Yapının yüksek temizliğini ve düzenliliğini garanti etmek</li>
          <li>Mevcut fazların kimyasal bileşimini ve yapısını saptamak</li>
          <li>Mikro yapıdaki fazların oranını ve dağılımını bulmak ve kontrol etmek</li>
          <li>Tane büyüklüğünü tam olarak gereksinime uygun şekilde ayarlamak</li>
        </ul>

        <h2>Geleceğe Uzanan Yollar</h2>
        <p>Çeliğin daha ileri boyutlarda geliştirilmesi, malzemenin hızlı katılaştırılması ve döküm yapısının rafinasyonu ile mümkün. Çok hassas bir döküm yapısı, "püskürtmeli yığma" (spray deposition) yöntemiyle elde edilebiliyor.</p>

        <p>"Ergiyik bükme" (melt spinning) ve "ergiyik atomizasyon" (melt atomizing) yöntemlerinde ise şeritler veya toz parçacıkları öyle bir hızda soğutuluyor ki, bor ve silis alaşımlı demir gibi bazı alaşımlar mikro kristal, amorf veya camsı yapıda kristalleşmeden katılaşıyor.</p>

        <h2>Alya'nın Perspektifi</h2>
        <p>Sheffield'ın çelik mirasını Türkiye'ye taşıyan Alya olarak, bu gelişmeleri yakından takip ediyoruz. 30 yılı aşkın deneyimimiz, çeliğin sadece bir malzeme değil, bir mühendislik felsefesi olduğunu bize öğretti.</p>

        <p>Endüstriyel bıçak üretiminde kullandığımız <strong>D2</strong>, <strong>M2</strong>, <strong>440B</strong> gibi çelik kaliteleri, bu küresel Ar-Ge çabalarının somut ürünleri. Her HRC değeri, her mikro yapı kararı, her kaplama seçimi bu birikimin üzerine inşa ediliyor.</p>

        <p><em>Çelik sadece bugünün değil, yarının da malzemesi. Ve biz bu geleceği şekillendiren üreticilerin yanında olmaya devam edeceğiz.</em></p>
      `,
      seo: {
        title: 'Çelik: Endüstrinin Omurgası | Alya Bıçak Teknik Bülten',
        description: 'Çelik neden hâlâ en önemli mühendislik malzemesi? 1900-2013 arası üretim verileri, enerji verimliliği ve geleceğe uzanan Ar-Ge yolları.',
        keywords: ['çelik üretimi', 'ham çelik', 'sheffield çeliği', 'endüstriyel bıçak çeliği', 'D2 çelik özellikleri', 'metalürji'],
        focusKeyword: 'çelik endüstrisi',
      },
    },
    en: {
      title: 'Steel: The Backbone of Industry, The Guarantee of the Future',
      excerpt: 'World crude steel production grew from 40 million tons in 1900 to 1.6 billion tons in 2013. The science and economics behind steel\'s indispensability.',
      content: `
        <p class="lead">To understand the value of an engineering material, one must look at its history. Steel built bridges, erected skyscrapers, and transformed production lines throughout human history. Today we still ask the same question: Why steel? The answer lies at the intersection of numbers and metallurgy.</p>

        <h2>What Do the Numbers Say?</h2>
        <p>World crude steel production was around 40 million tons in 1900, reaching 1.6 billion tons by 2013. This is not just a growth story; it's proof of steel's indispensability. During the same period, aluminum, magnesium, and plastics entered the scene, but none could shake steel's throne.</p>
        
        <p>The reason lies in a simple energy equation: The energy required to obtain iron is only one-tenth of primary aluminum production. Economically viable raw iron ore reserves stand at approximately 170 billion tons. This means iron-based materials offer a long-term guarantee in terms of resource security.</p>

        <h2>What Makes Steel Special?</h2>
        <p>Behind such a wide range of applications lies a unique combination of properties. Steel is one of the rare materials that can offer both high and ultra-high strength simultaneously. It's suitable for hot and cold forming, weldable, and machinable. It can balance hardness with ductility; resist wear, corrosion, high-temperature heat, and deformation.</p>

        <p>The secret to this flexibility lies in steel being a "designable" material. The European Steel Register published by VDEh Steel Institute classifies 1,500 special steel types; the total number of steel grades reaches 2,000.</p>

        <h2>The Compass of Research and Development</h2>
        <p>R&D work on steel systematically addresses all stages including manufacturing and heat treatment. Metallurgy science provides the necessary foundation for this development. Ongoing research focuses on specific areas:</p>
        
        <ul>
          <li>Achieving narrow composition ranges in chemical composition</li>
          <li>Guaranteeing high cleanliness and regularity of structure</li>
          <li>Determining the chemical composition and structure of existing phases</li>
          <li>Finding and controlling the ratio and distribution of phases in microstructure</li>
          <li>Adjusting grain size exactly according to requirements</li>
        </ul>

        <h2>Alya's Perspective</h2>
        <p>As Alya, bringing Sheffield's steel heritage to Turkey, we closely follow these developments. Our 30+ years of experience has taught us that steel is not just a material, but an engineering philosophy.</p>

        <p>Steel grades like <strong>D2</strong>, <strong>M2</strong>, and <strong>440B</strong> that we use in industrial blade production are concrete products of these global R&D efforts. Every HRC value, every microstructure decision, every coating choice builds upon this accumulation.</p>

        <p><em>Steel is not just today's material, but tomorrow's as well. And we will continue to stand by the manufacturers shaping this future.</em></p>
      `,
      seo: {
        title: 'Steel: The Backbone of Industry | Alya Blade Technical Bulletin',
        description: 'Why is steel still the most important engineering material? Production data from 1900-2013, energy efficiency, and R&D paths extending to the future.',
        keywords: ['steel production', 'crude steel', 'sheffield steel', 'industrial blade steel', 'D2 steel properties', 'metallurgy'],
        focusKeyword: 'steel industry',
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // YAZI 2: Endüstriyel Bıçak Seçimi Rehberi
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'endustriyel-bicak-secimi-rehberi',
    slug: 'endustriyel-bicak-secimi-rehberi',
    coverImage: '/images/blog/endustriyel-bicak-secimi.webp',
    author: DEFAULT_AUTHOR,
    category: BLOG_CATEGORIES[1], // Ürün Rehberleri
    tags: {
      tr: ['bıçak seçimi', 'endüstriyel kesici', 'rehber', 'üretim verimliliği'],
      en: ['blade selection', 'industrial cutter', 'guide', 'production efficiency'],
    },
    publishedAt: '2025-01-15',
    readingTime: 5,
    featured: true,
    tr: {
      title: 'Endüstriyel Bıçak Seçimi: 5 Kritik Faktör',
      excerpt: 'Doğru endüstriyel bıçak seçimi, üretim verimliliğinizi doğrudan etkiler. Bu rehberde dikkat etmeniz gereken 5 kritik faktörü inceliyoruz.',
      content: `
        <p class="lead">Endüstriyel üretimde bıçak seçimi, çoğu zaman göz ardı edilen ancak üretim verimliliğini doğrudan etkileyen kritik bir karardır.</p>

        <h2>1. Malzeme Uyumu</h2>
        <p>Keseceğiniz malzemenin özellikleri, bıçak seçiminin temelini oluşturur. Kağıt, plastik, metal veya kompozit - her malzeme farklı bir bıçak karakteristiği gerektirir.</p>

        <h2>2. Kesim Tipi</h2>
        <p>Dilme, zımbalama, guillotine kesim veya rotary kesim - her yöntem için optimize edilmiş bıçak geometrileri vardır.</p>

        <h2>3. Çelik Kalitesi</h2>
        <p>D2, M2, HSS veya karbür - malzeme ve kesim tipine göre doğru çelik seçimi, bıçak ömrünü 3-5 kat artırabilir.</p>

        <h2>4. Sertlik (HRC)</h2>
        <p>Çok sert bıçaklar kırılgan olabilir, çok yumuşak olanlar ise çabuk körleşir. Optimum sertlik dengesi kritiktir.</p>

        <h2>5. Bakım ve Bileme</h2>
        <p>Bıçağın bileme kolaylığı ve bakım gereksinimleri, toplam sahip olma maliyetini doğrudan etkiler.</p>

        <h2>Sonuç</h2>
        <p>Doğru bıçak seçimi için ücretsiz danışmanlık hizmetimizden yararlanabilirsiniz. Alya teknik ekibi, 30 yılı aşkın tecrübesiyle sizin için en uygun çözümü belirleyecektir.</p>
      `,
      seo: {
        title: 'Endüstriyel Bıçak Seçimi: 5 Kritik Faktör | Alya Bıçak',
        description: 'Doğru endüstriyel bıçak nasıl seçilir? Malzeme uyumu, kesim tipi, çelik kalitesi, sertlik ve bakım faktörlerini inceliyoruz.',
        keywords: ['endüstriyel bıçak seçimi', 'kesici bıçak rehberi', 'bıçak çelik kalitesi', 'HRC sertlik'],
        focusKeyword: 'endüstriyel bıçak seçimi',
      },
    },
    en: {
      title: 'Industrial Blade Selection: 5 Critical Factors',
      excerpt: 'Choosing the right industrial blade directly affects your production efficiency. In this guide, we examine 5 critical factors you need to consider.',
      content: `
        <p class="lead">Blade selection in industrial production is a critical decision that directly affects production efficiency, yet is often overlooked.</p>

        <h2>1. Material Compatibility</h2>
        <p>The properties of the material you'll be cutting form the foundation of blade selection. Paper, plastic, metal, or composite - each material requires different blade characteristics.</p>

        <h2>2. Cutting Type</h2>
        <p>Slitting, punching, guillotine cutting, or rotary cutting - there are blade geometries optimized for each method.</p>

        <h2>3. Steel Quality</h2>
        <p>D2, M2, HSS, or carbide - selecting the right steel based on material and cutting type can increase blade life 3-5 times.</p>

        <h2>4. Hardness (HRC)</h2>
        <p>Very hard blades can be brittle, while very soft ones dull quickly. Optimal hardness balance is critical.</p>

        <h2>5. Maintenance and Sharpening</h2>
        <p>The blade's ease of sharpening and maintenance requirements directly affect the total cost of ownership.</p>

        <h2>Conclusion</h2>
        <p>Take advantage of our free consulting service for the right blade selection. Alya's technical team will determine the most suitable solution for you with over 30 years of experience.</p>
      `,
      seo: {
        title: 'Industrial Blade Selection: 5 Critical Factors | Alya Blade',
        description: 'How to choose the right industrial blade? We examine material compatibility, cutting type, steel quality, hardness, and maintenance factors.',
        keywords: ['industrial blade selection', 'cutting blade guide', 'blade steel quality', 'HRC hardness'],
        focusKeyword: 'industrial blade selection',
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // YAZI 3: Sheffield Çeliği
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'sheffield-celigi-neden-onemli',
    slug: 'sheffield-celigi-neden-onemli',
    coverImage: '/images/blog/sheffield-celigi.webp',
    author: DEFAULT_AUTHOR,
    category: BLOG_CATEGORIES[0], // Teknik Yazılar
    tags: {
      tr: ['sheffield', 'çelik kalitesi', 'İngiltere', 'endüstriyel bıçak'],
      en: ['sheffield', 'steel quality', 'England', 'industrial blade'],
    },
    publishedAt: '2025-01-10',
    readingTime: 7,
    featured: true,
    tr: {
      title: 'Sheffield Çeliği Neden Dünya Standardı?',
      excerpt: 'İngiltere\'nin Sheffield şehrinden gelen çelik geleneği, endüstriyel bıçaklarda neden altın standart olarak kabul ediliyor?',
      content: `
        <p class="lead">Sheffield, İngiltere'nin kuzeyinde yer alan ve 700 yılı aşkın çelik üretim geçmişiyle dünya çapında tanınan bir şehirdir.</p>

        <h2>Tarihi Miras</h2>
        <p>14. yüzyıldan bu yana bıçak üretiminin merkezi olan Sheffield, özellikle 18. yüzyılda geliştirilen pota çeliği (crucible steel) ile dünya çapında ün kazandı. Bu yöntem, çeliğin homojenliğini ve kalitesini önemli ölçüde artırdı.</p>

        <h2>Kalite Standardı</h2>
        <p>"Made in Sheffield" damgası, bugün hâlâ kalite ve güvenilirliğin sembolü olarak kabul edilmektedir. Sheffield çelikleri, aşağıdaki özellikleriyle öne çıkar:</p>
        
        <ul>
          <li>Yüksek sertlik ve dayanıklılık</li>
          <li>Mükemmel kenar tutma kapasitesi</li>
          <li>Korozyona karşı üstün direnç</li>
          <li>Hassas ısıl işlem kontrolü</li>
        </ul>

        <h2>Modern Sheffield</h2>
        <p>Bugün Sheffield, geleneksel metalürji bilgisini modern teknolojilerle birleştiren araştırma merkezlerine ev sahipliği yapmaktadır. Sheffield Üniversitesi'nin ileri malzemeler bölümü, çelik teknolojisinde dünya lideri konumundadır.</p>

        <h2>Alya ve Sheffield Bağlantısı</h2>
        <p>Alya Bıçak olarak, Sheffield'ın yüzyıllık bilgi birikimini Türkiye'ye taşıyoruz. Kullandığımız çelik formülasyonları ve üretim standartları bu mirasa dayanmaktadır. Durham-Duplex ortaklığımız, bu bağlantının somut bir göstergesidir.</p>

        <p><em>Sheffield, sadece bir şehir değil - kesici takım endüstrisinin kutsal topraklarıdır.</em></p>
      `,
      seo: {
        title: 'Sheffield Çeliği Neden Dünya Standardı? | Alya Bıçak',
        description: 'Sheffield çelik geleneği ve endüstriyel bıçaklarda neden altın standart olduğunu keşfedin. 700 yıllık kalite mirası.',
        keywords: ['sheffield çeliği', 'sheffield bıçak', 'İngiltere çeliği', 'kaliteli endüstriyel bıçak'],
        focusKeyword: 'sheffield çeliği',
      },
    },
    en: {
      title: 'Why is Sheffield Steel the World Standard?',
      excerpt: 'The steel tradition from Sheffield, England - why is it considered the gold standard in industrial blades?',
      content: `
        <p class="lead">Sheffield is a city in northern England, renowned worldwide for its steel production history spanning over 700 years.</p>

        <h2>Historical Heritage</h2>
        <p>The center of blade production since the 14th century, Sheffield gained worldwide fame especially with crucible steel developed in the 18th century. This method significantly improved the homogeneity and quality of steel.</p>

        <h2>Quality Standard</h2>
        <p>The "Made in Sheffield" stamp is still accepted today as a symbol of quality and reliability. Sheffield steels stand out with these properties:</p>
        
        <ul>
          <li>High hardness and durability</li>
          <li>Excellent edge retention</li>
          <li>Superior corrosion resistance</li>
          <li>Precise heat treatment control</li>
        </ul>

        <h2>Modern Sheffield</h2>
        <p>Today, Sheffield hosts research centers that combine traditional metallurgy knowledge with modern technologies. The University of Sheffield's advanced materials department is a world leader in steel technology.</p>

        <h2>Alya and Sheffield Connection</h2>
        <p>As Alya Blade, we bring Sheffield's centuries-old knowledge to Turkey. Our steel formulations and production standards are based on this heritage. Our Durham-Duplex partnership is a tangible indicator of this connection.</p>

        <p><em>Sheffield is not just a city - it's the holy ground of the cutting tool industry.</em></p>
      `,
      seo: {
        title: 'Why is Sheffield Steel the World Standard? | Alya Blade',
        description: 'Discover the Sheffield steel tradition and why it\'s the gold standard in industrial blades. 700 years of quality heritage.',
        keywords: ['sheffield steel', 'sheffield blade', 'england steel', 'quality industrial blade'],
        focusKeyword: 'sheffield steel',
      },
    },
  },
]

// =============================================================================
// BLOG SERVİSLERİ
// =============================================================================

/**
 * Locale'e göre BlogPost formatına dönüştür
 */
function toLocalized(post: LocalizedBlogPost, locale: Locale): BlogPost {
  const content = post[locale] || post.tr // Fallback to Turkish
  const tags = post.tags[locale] || post.tags.tr
  
  return {
    id: post.id,
    slug: post.slug,
    title: content.title,
    excerpt: content.excerpt,
    content: content.content,
    coverImage: post.coverImage,
    author: post.author,
    category: post.category,
    tags: tags,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    readingTime: post.readingTime,
    featured: post.featured,
    seo: content.seo,
  }
}

// Eski BLOG_POSTS uyumluluk için (deprecated - blogService kullanın)
export const BLOG_POSTS: BlogPost[] = BLOG_POSTS_LOCALIZED.map(post => toLocalized(post, 'tr'))

export const blogService = {
  /**
   * Tüm yazıları getir (locale bazlı)
   */
  getAllPosts(locale: Locale = 'tr'): BlogPost[] {
    return BLOG_POSTS_LOCALIZED
      .map(post => toLocalized(post, locale))
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  },

  /**
   * Öne çıkan yazıları getir
   */
  getFeaturedPosts(limit = 3, locale: Locale = 'tr'): BlogPost[] {
    return this.getAllPosts(locale)
      .filter(post => post.featured)
      .slice(0, limit)
  },

  /**
   * Son yazıları getir
   */
  getRecentPosts(limit = 3, locale: Locale = 'tr'): BlogPost[] {
    return this.getAllPosts(locale).slice(0, limit)
  },

  /**
   * Slug ile yazı getir
   */
  getPostBySlug(slug: string, locale: Locale = 'tr'): BlogPost | undefined {
    const post = BLOG_POSTS_LOCALIZED.find(p => p.slug === slug)
    if (!post) return undefined
    return toLocalized(post, locale)
  },

  /**
   * Kategoriye göre yazıları getir
   */
  getPostsByCategory(categorySlug: string, locale: Locale = 'tr'): BlogPost[] {
    return this.getAllPosts(locale).filter(
      post => post.category.slug === categorySlug
    )
  },

  /**
   * Etikete göre yazıları getir
   */
  getPostsByTag(tag: string, locale: Locale = 'tr'): BlogPost[] {
    return this.getAllPosts(locale).filter(post =>
      post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
    )
  },

  /**
   * Tüm etiketleri getir
   */
  getAllTags(locale: Locale = 'tr'): string[] {
    const tags = new Set<string>()
    this.getAllPosts(locale).forEach(post => 
      post.tags.forEach(tag => tags.add(tag))
    )
    return Array.from(tags).sort()
  },

  /**
   * Tüm slug'ları getir (sitemap için)
   */
  getAllSlugs(): string[] {
    return BLOG_POSTS_LOCALIZED.map(post => post.slug)
  },
}

