/**
 * Veri Katmanı - Merkezi Export
 *
 * Tüm veri erişimi bu dosya üzerinden yapılmalı
 */

// Kategori verileri ve fonksiyonları
export {
  CATEGORIES,
  SUBCATEGORIES,
  getAllCategories,
  getAllSubcategories,
  getCategoryById,
  getCategoryBySlug,
  getSubcategoryById,
  getSubcategoryBySlug,
  getSubcategoriesByCategory,
  getParentCategory,
} from './categories';

// Ürün verileri ve fonksiyonları
export {
  PRODUCTS,
  getAllProducts,
  getFeaturedProducts,
  getProductById,
  getProductBySlug,
  getProductsByCategory,
  getProductsBySubcategory,
  getProductCountByCategory,
  getProductCountBySubcategory,
  searchProducts,
  getInStockProducts,
} from './products';

// Hero slider verileri
export {
  HERO_SLIDES,
  getActiveSlides,
  getSlideById,
} from './hero-slides';


