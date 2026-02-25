/**
 * Site Progress Indicator — Expandable Development Notes Panel
 * ─────────────────────────────────────────────────────────────
 * Sol alt köşede minimal bar → hover/tap ile açılır geliştirme notları.
 *
 * Masaüstü : fare hover → panel açılır  /  mouse leave → kapanır
 * Mobil    : dokunma → toggle aç/kapat  /  dışarı dokunma → kapanır
 *
 * Notlar font-light + text-[11px] ile "Geliştiriliyor" etiketinden
 * daha ince ve bir tık küçüktür (etiket: font-semibold text-[10px]).
 */
'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useLocale } from '@/components/providers/LocaleProvider'

/* ── Config ─────────────────────────────────────────────────── */
const SITE_PROGRESS = 92

interface DevNote {
  text: string
  done: boolean
}

interface Translation {
  label: string
  notes: DevNote[]
  footer: string
  poweredBy: string
}

/* ── Translations ───────────────────────────────────────────── */
const translations: Record<string, Translation> = {
  tr: {
    label: 'Geliştiriliyor',
    notes: [
      { text: 'Ürün teknik özellikleri ve bilgileri ekleniyor', done: true },
      { text: '5 dil desteği aktif: TR · EN · FR · RU · AR', done: true },
      { text: 'SEO ve yapısal veri optimizasyonu tamamlandı', done: true },
      { text: 'Ürün görselleri ekleniyor', done: false },
      { text: 'Çoklu dil çevirilerinin detaylandırılması devam ediyor', done: false },
      { text: 'Gelişmiş filtreleme ve karşılaştırma araçları hazırlanıyor', done: false },
    ],
    footer:
      'Ürünlerin detaylı bilgileri, fiyat ve ölçü talepleri için ana sitemiz alyatekstil.com\'u ziyaret edebilir veya bizimle iletişime geçebilirsiniz.',
    poweredBy: 'Next.js 15 · Vercel · TypeScript',
  },
  en: {
    label: 'In Development',
    notes: [
      { text: 'Product technical specs & information being added', done: true },
      { text: '5 language support active: TR · EN · FR · RU · AR', done: true },
      { text: 'SEO & structured data optimization completed', done: true },
      { text: 'Product images being uploaded', done: false },
      { text: 'Multi-language translation refinements in progress', done: false },
      { text: 'Advanced filtering & comparison tools coming', done: false },
    ],
    footer:
      'For detailed product information, pricing and dimensions, please visit our main site alyatekstil.com or contact us directly.',
    poweredBy: 'Next.js 15 · Vercel · TypeScript',
  },
  fr: {
    label: 'En Développement',
    notes: [
      { text: 'Spécifications techniques et informations produits en cours d\'ajout', done: true },
      { text: 'Support 5 langues actif : TR · EN · FR · RU · AR', done: true },
      { text: 'Optimisation SEO et données structurées terminée', done: true },
      { text: 'Images produits en cours de téléchargement', done: false },
      { text: 'Affinement des traductions multilingues en cours', done: false },
      { text: 'Outils de filtrage et comparaison avancés à venir', done: false },
    ],
    footer:
      'Pour des informations détaillées, prix et dimensions, visitez notre site principal alyatekstil.com ou contactez-nous.',
    poweredBy: 'Next.js 15 · Vercel · TypeScript',
  },
  ar: {
    label: 'قيد التطوير',
    notes: [
      { text: 'إضافة المواصفات الفنية ومعلومات المنتجات', done: true },
      { text: 'دعم 5 لغات نشط: TR · EN · FR · RU · AR', done: true },
      { text: 'تحسين محركات البحث والبيانات المنظمة مكتمل', done: true },
      { text: 'جاري تحميل صور المنتجات', done: false },
      { text: 'تحسين الترجمات متعددة اللغات قيد التقدم', done: false },
      { text: 'أدوات تصفية ومقارنة متقدمة قادمة', done: false },
    ],
    footer:
      'للحصول على معلومات تفصيلية عن المنتجات والأسعار والأبعاد، يرجى زيارة موقعنا الرئيسي alyatekstil.com أو التواصل معنا.',
    poweredBy: 'Next.js 15 · Vercel · TypeScript',
  },
  ru: {
    label: 'В разработке',
    notes: [
      { text: 'Добавляются технические характеристики продукции', done: true },
      { text: 'Поддержка 5 языков: TR · EN · FR · RU · AR', done: true },
      { text: 'SEO и оптимизация структурных данных завершены', done: true },
      { text: 'Загружаются изображения продукции', done: false },
      { text: 'Уточнение переводов на другие языки', done: false },
      { text: 'Инструменты фильтрации и сравнения в разработке', done: false },
    ],
    footer:
      'Для подробной информации о продукции, ценах и размерах посетите наш основной сайт alyatekstil.com или свяжитесь с нами.',
    poweredBy: 'Next.js 15 · Vercel · TypeScript',
  },
}

/* ── Component ──────────────────────────────────────────────── */
export default function SiteProgress() {
  const { locale } = useLocale()
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  const t = translations[locale as keyof typeof translations] || translations.en

  /* Sayfa yüklendikten sonra göster + progress animasyonu */
  useEffect(() => {
    const t1 = setTimeout(() => setIsVisible(true), 2000)
    const t2 = setTimeout(() => setProgress(SITE_PROGRESS), 2500)
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  /* Mobilde dışarı dokunarak kapatma */
  useEffect(() => {
    if (!isMobile || !isExpanded) return
    const close = (e: MouseEvent | TouchEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setIsExpanded(false)
      }
    }
    document.addEventListener('touchstart', close)
    document.addEventListener('mousedown', close)
    return () => {
      document.removeEventListener('touchstart', close)
      document.removeEventListener('mousedown', close)
    }
  }, [isMobile, isExpanded])

  const handleMouseEnter = useCallback(() => {
    if (!isMobile) setIsExpanded(true)
  }, [isMobile])

  const handleMouseLeave = useCallback(() => {
    if (!isMobile) setIsExpanded(false)
  }, [isMobile])

  const handleBarClick = useCallback(() => {
    if (isMobile) setIsExpanded((prev) => !prev)
  }, [isMobile])

  /* Yüzde formatı: TR/AR → %92  diğerleri → 92% */
  const pct =
    locale === 'tr' || locale === 'ar' ? `%${progress}` : `${progress}%`

  if (!isVisible) return null

  return (
    <div
      ref={panelRef}
      className="fixed bottom-4 left-4 z-40"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`
          flex flex-col bg-steel-900/95 backdrop-blur-md rounded-xl
          shadow-2xl overflow-hidden
          transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
          ${
            isExpanded
              ? 'w-[290px] sm:w-[320px] border border-primary-500/20 shadow-primary-900/20'
              : 'w-auto border border-steel-700/50 opacity-70 hover:opacity-100'
          }
        `}
      >
        {/* ── Expandable notes panel ─────────────────────────── */}
        <div
          className={`
            transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
            overflow-hidden
            ${isExpanded ? 'max-h-[380px] opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div
            className="
              px-4 pt-4 pb-2 overflow-y-auto max-h-[320px]
              [&::-webkit-scrollbar]:w-[3px]
              [&::-webkit-scrollbar-thumb]:rounded-full
              [&::-webkit-scrollbar-thumb]:bg-steel-600/50
              [&::-webkit-scrollbar-track]:bg-transparent
            "
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(71,85,105,.5) transparent',
            }}
          >
            {/* Status items */}
            <div className="space-y-2.5 mb-3">
              {t.notes.map((note, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span
                    className={`
                      mt-[1px] flex-shrink-0 text-[11px] leading-none
                      ${note.done ? 'text-emerald-400' : 'text-amber-400/80'}
                    `}
                  >
                    {note.done ? '✓' : '◔'}
                  </span>
                  <span className="text-[11px] font-light text-steel-300/90 leading-relaxed">
                    {note.text}
                  </span>
                </div>
              ))}
            </div>

            {/* ── Gradient divider ── */}
            <div className="h-px bg-gradient-to-r from-transparent via-steel-600/40 to-transparent my-3" />

            {/* Footer notice — font-light, bir tık küçük */}
            <p className="text-[10px] font-light text-steel-400/80 leading-relaxed mb-2">
              {t.footer}
            </p>

            {/* alyatekstil.com link */}
            <a
              href="https://alyatekstil.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-1 text-[10px] font-normal
                text-primary-400/70 hover:text-primary-300
                transition-colors mb-3
              "
            >
              alyatekstil.com
              <svg
                className="w-2.5 h-2.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>

            {/* ── Gradient divider ── */}
            <div className="h-px bg-gradient-to-r from-transparent via-steel-600/30 to-transparent mb-3" />

            {/* Tech stack badge */}
            <div className="flex items-center gap-1.5 mb-1">
              <svg
                className="w-3 h-3 text-steel-500/50 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
              <span className="text-[9px] font-light text-steel-500/50 tracking-wide">
                {t.poweredBy}
              </span>
            </div>
          </div>

          {/* Accent line — panel ile bar arasında */}
          <div className="h-px bg-gradient-to-r from-primary-500/20 via-primary-500/40 to-primary-500/20" />
        </div>

        {/* ── Bottom bar (always visible) ─────────────────────── */}
        <div
          className="
            flex items-center gap-2.5 px-3.5 py-2.5
            cursor-pointer md:cursor-default select-none
          "
          onClick={handleBarClick}
        >
          {/* Live pulsing dot */}
          <div className="relative flex-shrink-0 w-2 h-2">
            <span className="absolute inset-0 bg-emerald-400 rounded-full" />
            <span className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-60" />
          </div>

          {/* Label */}
          <span className="text-[10px] font-semibold text-steel-300 uppercase tracking-wider whitespace-nowrap">
            {t.label}
          </span>

          {/* Progress bar */}
          <div className="w-20 h-1.5 bg-steel-700/70 rounded-full overflow-hidden flex-shrink-0">
            <div
              className="h-full bg-primary-500 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Percentage */}
          <span className="text-[10px] font-medium text-steel-400 tabular-nums">
            {pct}
          </span>

          {/* Chevron */}
          <svg
            className={`
              w-3 h-3 text-steel-500 flex-shrink-0
              transition-transform duration-300
              ${isExpanded ? 'rotate-180' : ''}
            `}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
