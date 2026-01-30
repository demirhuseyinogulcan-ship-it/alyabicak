'use client';

import {
  Layers,
  Shield,
  Box,
  Scale,
  Ruler,
  Palette,
  Gauge,
  Package,
  Settings,
  type LucideIcon
} from 'lucide-react';
import type { ProductSpec } from '@/lib/types/product.types';
import { useLocale } from '@/lib/i18n/client';

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Layers,
  Shield,
  Box,
  Scale,
  Ruler,
  Palette,
  Gauge,
  Package,
  Settings,
};

interface ProductSpecsProps {
  specs: ProductSpec[];
  title?: string;
}

export function ProductSpecs({ specs, title }: ProductSpecsProps) {
  const { dictionary: t } = useLocale();
  const displayTitle = title || t.productDetail.technicalSpecs;

  if (!specs || specs.length === 0) return null;

  return (
    <section className="py-12 bg-steel-50">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <h2 className="text-xl font-semibold text-steel-900 mb-6">
          {displayTitle}
        </h2>

        {/* Özellik Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {specs.map((spec, index) => {
            const IconComponent = spec.icon ? iconMap[spec.icon] : null;

            return (
              <div
                key={index}
                className={`
                  flex flex-col items-center text-center p-4 bg-white rounded-lg border
                  ${spec.highlight
                    ? 'border-primary-200 bg-primary-50/50'
                    : 'border-steel-100'
                  }
                `}
              >
                {/* Icon */}
                {IconComponent && (
                  <IconComponent className="w-5 h-5 text-steel-400 mb-2" />
                )}

                {/* Label */}
                <span className="text-xs text-steel-500 mb-1">
                  {spec.label}
                </span>

                {/* Value */}
                <span className={`
                  text-sm font-medium
                  ${spec.highlight ? 'text-primary-700' : 'text-steel-900'}
                `}>
                  {spec.value}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Alternatif: Tablo formatında
export function ProductSpecsTable({ specs, title }: ProductSpecsProps) {
  const { dictionary: t } = useLocale();
  const displayTitle = title || t.productDetail.technicalSpecs;

  if (!specs || specs.length === 0) return null;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-semibold text-steel-900 mb-6">
          {displayTitle}
        </h2>

        <div className="bg-white rounded-lg border border-steel-100 overflow-hidden">
          <table className="w-full">
            <tbody className="divide-y divide-steel-100">
              {specs.map((spec, index) => {
                const IconComponent = spec.icon ? iconMap[spec.icon] : null;

                return (
                  <tr
                    key={index}
                    className={spec.highlight ? 'bg-primary-50/30' : ''}
                  >
                    <td className="px-4 py-3 w-1/3">
                      <div className="flex items-center gap-2">
                        {IconComponent && (
                          <IconComponent className="w-4 h-4 text-steel-400" />
                        )}
                        <span className="text-sm text-steel-600">{spec.label}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`
                        text-sm font-medium
                        ${spec.highlight ? 'text-primary-700' : 'text-steel-900'}
                      `}>
                        {spec.value}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

