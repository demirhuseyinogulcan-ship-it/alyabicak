
import { getCatalogById } from '@/lib/data/catalogs'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Copy, Download, Share2 } from 'lucide-react'
import { getDictionary, type Locale } from '@/lib/i18n'
import { getDomainUrl, type SupportedLocale } from '@/lib/config/domains'
import { Metadata } from 'next'
import { CopyButton } from './copy-button'

interface PageProps {
    params: Promise<{
        locale: Locale
        slug: string
    }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale, slug } = await params
    const catalog = getCatalogById(slug, locale)

    if (!catalog) return {}

    const dict = await getDictionary(locale)
    const domain = getDomainUrl(locale as SupportedLocale)

    return {
        title: `${catalog.title} - ${locale === 'tr' ? 'PDF Görüntüleyici' : 'PDF Viewer'}`,
        description: catalog.description,
        openGraph: {
            title: catalog.title,
            description: catalog.description,
            type: 'article',
            url: `${domain}/${locale}/view/${slug}`,
            images: [{ url: `${domain}${catalog.previewImage}` }],
        },
        alternates: {
            canonical: `${domain}/${locale}/view/${slug}`,
        }
    }
}

export default async function PDFViewerPage({ params }: PageProps) {
    const { locale, slug } = await params
    const catalog = getCatalogById(slug, locale)
    const dict = await getDictionary(locale)

    if (!catalog) {
        notFound()
    }

    const domain = getDomainUrl(locale as SupportedLocale)
    const fullPdfUrl = `${domain}${catalog.pdfUrl}`

    // Localized Labels
    const l = {
        tr: {
            back: 'Kataloğa Dön',
            download: 'İndir',
            copyCitation: 'Kaynak Göster (Kopyala)',
            share: 'Paylaş',
            citationCopied: 'Kopyalandı!',
            citationText: `Kaynak: Alya Bıçak - ${catalog.title} (${domain}/${locale}/view/${slug})`,
        },
        en: {
            back: 'Back to Catalog',
            download: 'Download',
            copyCitation: 'Cite This (Copy)',
            share: 'Share',
            citationCopied: 'Copied!',
            citationText: `Source: Alya Blade - ${catalog.title} (${domain}/${locale}/view/${slug})`,
        },
        // Fallbacks for other languages to EN or simple translation
        ar: { back: 'عودة', download: 'تحميل', copyCitation: 'نسخ المصدر', share: 'مشاركة', citationCopied: 'تم النسخ', citationText: `Source: Alya Blade - ${catalog.title} (${domain}/${locale}/view/${slug})` },
        ru: { back: 'Назад', download: 'Скачать', copyCitation: 'Цитировать', share: 'Поделиться', citationCopied: 'Скопировано', citationText: `Source: Alya Blade - ${catalog.title} (${domain}/${locale}/view/${slug})` },
        fr: { back: 'Retour', download: 'Télécharger', copyCitation: 'Citer', share: 'Partager', citationCopied: 'Copié', citationText: `Source: Alya Blade - ${catalog.title} (${domain}/${locale}/view/${slug})` },
    }[locale] || {
        back: 'Back',
        download: 'Download',
        copyCitation: 'Copy Citation',
        share: 'Share',
        citationCopied: 'Copied',
        citationText: `Source: Alya Blade`,
    }

    // Schema: TechArticle (Google loves this for technical content)
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: catalog.title,
        description: catalog.description,
        image: `${domain}${catalog.previewImage}`,
        author: {
            '@type': 'Organization',
            name: 'Alya Bıçak'
        },
        publisher: {
            '@type': 'Organization',
            name: 'Alya Bıçak',
            logo: {
                '@type': 'ImageObject',
                url: `${domain}/images/logo-512.png`
            }
        },
        datePublished: '2024-01-01', // Static for now, could be dynamic
        dateModified: new Date().toISOString().split('T')[0],
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${domain}/${locale}/view/${slug}`
        },
        encoding: {
            '@type': 'MediaObject',
            contentUrl: fullPdfUrl,
            encodingFormat: 'application/pdf',
        }
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            <div className="flex flex-col bg-steel-900 overflow-hidden" style={{ height: 'calc(100dvh - var(--header-height, 70px))' }}>
                {/* Toolbar */}
                <header className="flex items-center justify-between px-4 py-3 bg-steel-950 text-white shadow-lg z-10">
                    <div className="flex items-center gap-4">
                        <Link
                            href={`/${locale}/catalog`}
                            className="flex items-center gap-2 text-steel-400 hover:text-white transition-colors text-sm font-medium"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span className="hidden sm:inline">{l.back}</span>
                        </Link>
                        <h1 className="text-sm md:text-base font-semibold truncate max-w-[200px] md:max-w-md">
                            {catalog.title}
                        </h1>
                    </div>

                    <div className="flex items-center gap-2">
                        {/* Citation Copy Hack Button */}
                        <CopyButton text={l.citationText} label={l.copyCitation} copiedLabel={l.citationCopied} />

                        <a
                            href={catalog.pdfUrl}
                            download
                            className="flex items-center gap-2 px-3 py-1.5 bg-primary-600 hover:bg-primary-500 text-white rounded text-xs font-medium transition-colors"
                        >
                            <Download className="w-4 h-4" />
                            <span className="hidden sm:inline">{l.download}</span>
                        </a>
                    </div>
                </header>

                {/* PDF Embedded Viewer */}
                <div className="flex-1 bg-steel-100 relative">
                    <iframe
                        src={`${catalog.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                        className="w-full h-full border-0 block"
                        title={catalog.title}
                        allowFullScreen
                    />
                </div>

                {/* Footnote Trap */}
                <div className="bg-steel-50 px-4 py-2 text-center text-[10px] text-steel-400 border-t border-steel-200">
                    {l.citationText}
                </div>
            </div>
        </>
    )
}

// Client Component for Copy Button logic
// Since we are in a server component file, we need to extract this or use a trick.
// For simplicity in this single-file edit, I'll assume we can use a client component if I mark the whole file 'use client'?
// No, metadata requires server component.
// I will create a small inline script or just make the button simple anchor link for now to avoid creating new files if possible.
// Actually, for "Copy to Clipboard" we need client side JS.
// Let's create a separate Client Component file: `app/[locale]/view/[slug]/copy-button.tsx` is better practice.
// But for now, I will skip the complex interactivity and just put a text input they can copy?
// No, the user wants "The Trap". It must be easy.
// I will create `CopyButton.tsx` in components folder? Or just next to it.
