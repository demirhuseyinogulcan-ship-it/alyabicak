'use client';

import {
  Factory,
  Warehouse,
  Package,
  Wrench,
  Scissors,
  Truck,
  ShoppingBag,
  Printer,
  Beef,
  Recycle,
  FileText,
  Film,
  Flame,
  Droplets,
  Sparkles,
  Tag,
  Cpu,
  Heart,
  Battery,
  UtensilsCrossed,
  Layers,
  Shield,
  Zap,
  Wind,
  Target,
  Box,
  Utensils,
  RotateCw,
  Fish,
  Newspaper,
  RefreshCw,
  type LucideIcon
} from 'lucide-react';
import type { ProductApplication } from '@/lib/types/product.types';
import { useLocale } from '@/lib/i18n/client';

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Factory,
  Warehouse,
  Package,
  Wrench,
  Scissors,
  Truck,
  ShoppingBag,
  Printer,
  Beef,
  Recycle,
  FileText,
  Film,
  Flame,
  Droplets,
  Sparkles,
  Tag,
  Cpu,
  Heart,
  Battery,
  UtensilsCrossed,
  Layers,
  Shield,
  Zap,
  Wind,
  Target,
  Box,
  Utensils,
  RotateCw,
  Fish,
  Newspaper,
  RefreshCw,
};

interface ProductApplicationsProps {
  applications: ProductApplication[];
  title?: string;
}

export function ProductApplications({
  applications,
  title
}: ProductApplicationsProps) {
  const { dictionary: t } = useLocale();
  const displayTitle = title || t.productDetail.applications;

  if (!applications || applications.length === 0) return null;

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <h2 className="text-xl font-semibold text-steel-900 mb-6">
          {displayTitle}
        </h2>

        {/* Application Tags */}
        <div className="flex flex-wrap gap-3">
          {applications.map((app, index) => {
            const IconComponent = app.icon ? (iconMap[app.icon] || null) : null;

            return (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-steel-50 border border-steel-100 rounded-lg hover:bg-steel-100 transition-colors"
                title={app.description}
              >
                {IconComponent && (
                  <IconComponent className="w-4 h-4 text-steel-500" />
                )}
                <span className="text-sm font-medium text-steel-700">
                  {app.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Açıklamalı versiyon (eğer description varsa) */}
        {applications.some(app => app.description) && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {applications.filter(app => app.description).map((app, index) => {
              const IconComponent = app.icon ? (iconMap[app.icon] || null) : null;

              return (
                <div
                  key={index}
                  className="p-4 bg-steel-50 rounded-lg"
                >
                  <div className="flex items-center gap-2 mb-2">
                    {IconComponent && (
                      <IconComponent className="w-5 h-5 text-primary-600" />
                    )}
                    <h3 className="font-medium text-steel-900">{app.title}</h3>
                  </div>
                  <p className="text-sm text-steel-600">{app.description}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

