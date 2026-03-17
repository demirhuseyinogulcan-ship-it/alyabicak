'use client';

import { Check, X } from 'lucide-react';
import { useLocale } from '@/lib/i18n/client';
import type { SpecTableData } from '@/lib/types/product.types';

/* ── Translations ──────────────────────────────────────────── */
const translations: Record<string, { title: string; note: string }> = {
  tr: {
    title: 'Ürün Ölçü Tablosu',
    note: 'Belirtilen standart ürünler dışında farklı ölçüler bulunmaktadır.',
  },
  en: {
    title: 'Product Specification Table',
    note: 'Different sizes are available beyond the listed standard products.',
  },
  fr: {
    title: 'Tableau des Spécifications',
    note: 'Des tailles différentes sont disponibles au-delà des produits standard listés.',
  },
  ar: {
    title: 'جدول المواصفات',
    note: 'تتوفر مقاسات مختلفة بخلاف المنتجات القياسية المذكورة.',
  },
  ru: {
    title: 'Таблица Характеристик',
    note: 'Доступны размеры, отличающиеся от перечисленных стандартных продуктов.',
  },
};

/* ── Column label translations ─────────────────────────────── */
const colLabels: Record<string, Record<string, string>> = {
  // Groups
  'Ölçüler':    { en: 'Dimensions', fr: 'Dimensions', ar: 'الأبعاد', ru: 'Размеры' },
  'Bileme':     { en: 'Grinding', fr: 'Affûtage', ar: 'الشحذ', ru: 'Заточка' },
  'Çelik':      { en: 'Steel', fr: 'Acier', ar: 'الفولاذ', ru: 'Сталь' },
  'Montaj':     { en: 'Mounting', fr: 'Montage', ar: 'التركيب', ru: 'Монтаж' },
  // Columns
  'Dış Çap':    { en: 'Outer Ø', fr: 'Ø Ext.', ar: 'القطر الخارجي', ru: 'Нар. Ø' },
  'İç Çap':     { en: 'Inner Ø', fr: 'Ø Int.', ar: 'القطر الداخلي', ru: 'Вн. Ø' },
  'Kalınlık':   { en: 'Thickness', fr: 'Épaisseur', ar: 'السماكة', ru: 'Толщина' },
  'Tek Açı':    { en: 'Single Bevel', fr: 'Simple', ar: 'أحادي', ru: 'Одностор.' },
  'Çift Açı':   { en: 'Double Bevel', fr: 'Double', ar: 'مزدوج', ru: 'Двустор.' },
  'Konkav':     { en: 'Concave', fr: 'Concave', ar: 'مقعر', ru: 'Вогнутая' },
  'Serbest':    { en: 'Free-Running', fr: 'Libre', ar: 'حر', ru: 'Свободный' },
  'Kilitli':    { en: 'Self-Locking', fr: 'Auto-bloquant', ar: 'ذاتي القفل', ru: 'Самоблок.' },
  'Kesici Kalınlık': { en: 'Edge Th.', fr: 'Ép. Coupe', ar: 'سمك القطع', ru: 'Толщ. реза' },
};

function tCol(label: string, locale: string): string {
  if (locale === 'tr') return label;
  return colLabels[label]?.[locale] || label;
}

/* ── Component ─────────────────────────────────────────────── */
interface Props {
  data: SpecTableData;
}

/** Shared table renderer — used by both full-section and inline variants */
function SpecTableCore({ data, locale, t }: { data: SpecTableData; locale: string; t: { title: string; note: string } }) {
  return (
    <div className="bg-white rounded-xl border border-steel-200 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-[13px]">
          {/* Sütun grupları (üst header) */}
          {data.columnGroups && data.columnGroups.length > 0 && (
            <thead>
              <tr className="bg-steel-800 text-white">
                <th className="px-2 py-2 text-center text-[10px] font-medium uppercase tracking-wider border-r border-steel-700 w-8">
                  #
                </th>
                {data.columnGroups.map((group, gi) => (
                  <th
                    key={gi}
                    colSpan={group.span}
                    className="px-2 py-2 text-center text-[10px] font-medium uppercase tracking-wider border-r border-steel-700 last:border-r-0"
                  >
                    {tCol(group.label, locale)}
                  </th>
                ))}
              </tr>
            </thead>
          )}

          {/* Alt header — sütun başlıkları */}
          <thead>
            <tr className="bg-steel-100 border-b-2 border-steel-300">
              <th className="px-2 py-1.5 text-center text-[10px] font-semibold text-steel-600 uppercase tracking-wider border-r border-steel-200 w-8">
                #
              </th>
              {data.columns.map((col, ci) => (
                <th
                  key={ci}
                  className="px-2 py-1.5 text-center text-[10px] font-semibold text-steel-600 uppercase tracking-wider border-r border-steel-200 last:border-r-0 whitespace-nowrap"
                >
                  {tCol(col.label, locale)}
                  {col.unit && (
                    <span className="font-normal text-steel-400 ml-0.5">
                      ({col.unit})
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>

          {/* Veri satırları */}
          <tbody className="divide-y divide-steel-100">
            {data.rows.map((row, ri) => (
              <tr
                key={ri}
                className={`
                  transition-colors hover:bg-primary-50/40
                  ${ri % 2 === 0 ? 'bg-white' : 'bg-steel-50/50'}
                `}
              >
                <td className="px-2 py-1.5 text-center text-[11px] font-medium text-steel-400 border-r border-steel-100">
                  {ri + 1}
                </td>
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className="px-2 py-1.5 text-center border-r border-steel-100 last:border-r-0"
                  >
                    {typeof cell === 'boolean' ? (
                      cell ? (
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100">
                          <Check className="w-3 h-3 text-emerald-600" strokeWidth={3} />
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-steel-50">
                          <X className="w-2.5 h-2.5 text-steel-300" strokeWidth={2} />
                        </span>
                      )
                    ) : (
                      <span className="text-[13px] font-medium text-steel-800">
                        {cell}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer notu */}
      {data.note !== false && (
        <div className="px-3 py-2 bg-amber-50 border-t border-amber-200">
          <p className="text-[10px] text-amber-700 font-medium">
            📌 {data.note || t.note}
          </p>
        </div>
      )}
    </div>
  );
}

/** Full-width section version (standalone use) */
export function ProductSpecTable({ data }: Props) {
  const { locale } = useLocale();
  const t = translations[locale] || translations.en;

  if (!data || !data.rows || data.rows.length === 0) return null;

  return (
    <section className="py-12 bg-steel-50">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-semibold text-steel-900 mb-6">
          {data.title || t.title}
        </h2>
        <SpecTableCore data={data} locale={locale} t={t} />
      </div>
    </section>
  );
}

/** Inline version — for embedding inside ProductHero left column */
export function ProductSpecTableInline({ data }: Props) {
  const { locale } = useLocale();
  const t = translations[locale] || translations.en;

  if (!data || !data.rows || data.rows.length === 0) return null;

  return (
    <div className="mt-6">
      <h3 className="text-sm font-semibold text-steel-800 mb-3">
        {data.title || t.title}
      </h3>
      <SpecTableCore data={data} locale={locale} t={t} />
    </div>
  );
}
