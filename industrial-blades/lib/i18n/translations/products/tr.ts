/**
 * Ürün Çevirileri - Türkçe
 * 
 * Master data zaten Türkçe olduğu için burada sadece override gerekenleri tanımlıyoruz.
 * Boş bırakılan ürünler orijinal Türkçe değerlerini kullanır.
 * 
 * KULLANIM:
 * Bu dosya sadece Türkçe'de değişiklik yapmak istediğinizde kullanılır.
 * Normalde master data zaten Türkçe olduğu için bu dosya minimal kalabilir.
 */

export interface ProductTranslation {
  name: string;
  subtitle?: string;
  description?: string;
  shortDescription?: string;
  features?: string[];
  applications?: string[];
  benefits?: { title: string; description: string; icon?: string }[];
  longDescription?: string;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

export const productsTr: Record<string, ProductTranslation> = {
  // Türkçe master data zaten doğru, sadece düzeltme gerekenleri ekleyin
  
  // Örnek override:
  // 'ok': {
  //   name: 'OK Bıçak',
  //   description: 'Düzeltilmiş açıklama'
  // }
};

export default productsTr;
