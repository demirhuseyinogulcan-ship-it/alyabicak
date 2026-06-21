export interface Catalog {
    id: string;
    title: string;
    description: string;
    pdfUrl: string;
    previewImage: string;
}

export const CATALOGS: Record<string, Catalog[]> = {
    tr: [
        {
            id: 'industrial-blades',
            title: 'Sanayi Jiletleri',
            description: 'Ok bıçaklar, dilme jiletleri, trapez jiletler',
            pdfUrl: '/catalogs/Sanayi-Jiletleri-Urun-Katalogu.pdf',
            previewImage: '/catalogs/previews/sanayi-jiletleri.jpg',
        },
        {
            id: 'makine-bicaklari',
            title: 'Makine Bıçakları',
            description: 'Giyotin bıçakları, dilme bıçakları',
            pdfUrl: '/catalogs/Makine-Bicaklari-Urun-Katalogu.pdf',
            previewImage: '/catalogs/previews/makine-bicaklari.jpg',
        },
        {
            id: 'safety-knives',
            title: 'İş Güvenliği & El Bıçakları',
            description: 'Güvenlik bıçakları, maket bıçakları',
            pdfUrl: '/catalogs/Is-Guvenligi-El-Bicaklari-Urun-Katalogu.pdf',
            previewImage: '/catalogs/previews/is-guvenligi.jpg',
        },
        {
            id: 'thermoform-vacuum',
            title: 'Vakum Paketleme Bıçakları',
            description: 'Gıda sanayi kesim bıçakları',
            pdfUrl: '/catalogs/Vakum-PaketlemeBicaklari-Katalugu.pdf',
            previewImage: '/catalogs/previews/vakum-paketleme.jpg',
        },
    ],
    en: [
        {
            id: 'industrial-blades',
            title: 'Industrial Blades',
            description: 'Arrow blades, slitting blades, trapezoidal blades',
            pdfUrl: '/catalogs/Sanayi-Jiletleri-Urun-Katalogu.pdf',
            previewImage: '/catalogs/previews/sanayi-jiletleri.jpg',
        },
        {
            id: 'makine-bicaklari',
            title: 'Machine Blades',
            description: 'Guillotine blades, slitting blades',
            pdfUrl: '/catalogs/Makine-Bicaklari-Urun-Katalogu.pdf',
            previewImage: '/catalogs/previews/makine-bicaklari.jpg',
        },
        {
            id: 'safety-knives',
            title: 'Safety & Hand Knives',
            description: 'Safety knives, utility knives',
            pdfUrl: '/catalogs/Is-Guvenligi-El-Bicaklari-Urun-Katalogu.pdf',
            previewImage: '/catalogs/previews/is-guvenligi.jpg',
        },
        {
            id: 'thermoform-vacuum',
            title: 'Vacuum Packaging Blades',
            description: 'Food industry cutting blades',
            pdfUrl: '/catalogs/Vakum-PaketlemeBicaklari-Katalugu.pdf',
            previewImage: '/catalogs/previews/vakum-paketleme.jpg',
        },
    ],
    ar: [
        {
            id: 'industrial-blades',
            title: 'الشفرات الصناعية',
            description: 'شفرات السهم، شفرات التقطيع، الشفرات شبه المنحرفة',
            pdfUrl: '/catalogs/Sanayi-Jiletleri-Urun-Katalogu.pdf',
            previewImage: '/catalogs/previews/sanayi-jiletleri.jpg',
        },
        {
            id: 'makine-bicaklari',
            title: 'شفرات الآلات',
            description: 'شفرات المقصلة، شفرات التقطيع',
            pdfUrl: '/catalogs/Makine-Bicaklari-Urun-Katalogu.pdf',
            previewImage: '/catalogs/previews/makine-bicaklari.jpg',
        },
        {
            id: 'safety-knives',
            title: 'سكاكين السلامة واليدوية',
            description: 'سكاكين الأمان، سكاكين متعددة الاستخدامات',
            pdfUrl: '/catalogs/Is-Guvenligi-El-Bicaklari-Urun-Katalogu.pdf',
            previewImage: '/catalogs/previews/is-guvenligi.jpg',
        },
        {
            id: 'thermoform-vacuum',
            title: 'شفرات التغليف الفراغي',
            description: 'شفرات قطع الصناعات الغذائية',
            pdfUrl: '/catalogs/Vakum-PaketlemeBicaklari-Katalugu.pdf',
            previewImage: '/catalogs/previews/vakum-paketleme.jpg',
        },
    ],
    ru: [
        {
            id: 'industrial-blades',
            title: 'Промышленные лезвия',
            description: 'Стреловидные лезвия, лезвия для продольной резки, трапециевидные лезвия',
            pdfUrl: '/catalogs/Sanayi-Jiletleri-Urun-Katalogu.pdf',
            previewImage: '/catalogs/previews/sanayi-jiletleri.jpg',
        },
        {
            id: 'makine-bicaklari',
            title: 'Машинные ножи',
            description: 'Гильотинные ножи, ножи для продольной резки',
            pdfUrl: '/catalogs/Makine-Bicaklari-Urun-Katalogu.pdf',
            previewImage: '/catalogs/previews/makine-bicaklari.jpg',
        },
        {
            id: 'safety-knives',
            title: 'Безопасные и ручные ножи',
            description: 'Безопасные ножи, канцелярские ножи',
            pdfUrl: '/catalogs/Is-Guvenligi-El-Bicaklari-Urun-Katalogu.pdf',
            previewImage: '/catalogs/previews/is-guvenligi.jpg',
        },
        {
            id: 'thermoform-vacuum',
            title: 'Ножи для вакуумной упаковки',
            description: 'Режущие ножи для пищевой промышленности',
            pdfUrl: '/catalogs/Vakum-PaketlemeBicaklari-Katalugu.pdf',
            previewImage: '/catalogs/previews/vakum-paketleme.jpg',
        },
    ],
    fr: [
        {
            id: 'industrial-blades',
            title: 'Lames Industrielles',
            description: 'Lames flèches, lames de refendage, lames trapézoïdales',
            pdfUrl: '/catalogs/Sanayi-Jiletleri-Urun-Katalogu.pdf',
            previewImage: '/catalogs/previews/sanayi-jiletleri.jpg',
        },
        {
            id: 'makine-bicaklari',
            title: 'Lames de Machine',
            description: 'Lames de guillotine, lames de refendage',
            pdfUrl: '/catalogs/Makine-Bicaklari-Urun-Katalogu.pdf',
            previewImage: '/catalogs/previews/makine-bicaklari.jpg',
        },
        {
            id: 'safety-knives',
            title: 'Couteaux de Sécurité et Manuels',
            description: 'Couteaux de sécurité, cutters',
            pdfUrl: '/catalogs/Is-Guvenligi-El-Bicaklari-Urun-Katalogu.pdf',
            previewImage: '/catalogs/previews/is-guvenligi.jpg',
        },
        {
            id: 'thermoform-vacuum',
            title: 'Lames de Conditionnement sous Vide',
            description: 'Lames de coupe pour l’industrie alimentaire',
            pdfUrl: '/catalogs/Vakum-PaketlemeBicaklari-Katalugu.pdf',
            previewImage: '/catalogs/previews/vakum-paketleme.jpg',
        },
    ],
};

export function getCatalogById(id: string, locale: string): Catalog | undefined {
    const catalogs = CATALOGS[locale] || CATALOGS.en;
    return catalogs.find(c => c.id === id);
}

export function getAllCatalogIds(): string[] {
    return CATALOGS.en.map(c => c.id);
}
