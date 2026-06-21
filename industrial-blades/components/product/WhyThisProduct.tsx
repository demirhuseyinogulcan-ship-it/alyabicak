'use client';

import {
  Clock,
  Shield,
  Wrench,
  TrendingUp,
  CheckCircle2,
  CheckCircle,
  Zap,
  Target,
  Settings,
  Gauge,
  DollarSign,
  Eye,
  Award,
  Check,
  Sparkles,
  Box,
  Diamond,
  Heart,
  Flame,
  Wind,
  Star,
  RotateCw,
  RefreshCw,
  Droplet,
  Layers,
  Scissors,
  Triangle,
  Maximize,
  Lock,
  type LucideIcon
} from 'lucide-react';
import type { ProductBenefit } from '@/lib/types/product.types';
import { useLocale } from '@/lib/i18n/client';

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Clock,
  Shield,
  Wrench,
  TrendingUp,
  CheckCircle2,
  CheckCircle,
  Zap,
  Target,
  Settings,
  Gauge,
  DollarSign,
  Eye,
  Award,
  Check,
  Sparkles,
  Box,
  Diamond,
  Heart,
  Flame,
  Wind,
  Star,
  RotateCw,
  RefreshCw,
  Droplet,
  Layers,
  Scissors,
  Triangle,
  Maximize,
  Lock,
};

interface WhyThisProductProps {
  benefits?: ProductBenefit[];
  title?: string;
}

export function WhyThisProduct({
  benefits,
  title
}: WhyThisProductProps) {
  const { dictionary: t } = useLocale();

  // Default benefits - çeviri destekli
  const defaultBenefits: ProductBenefit[] = [
    {
      title: t.productDetail.benefits.longLife,
      description: t.productDetail.benefits.longLifeDesc,
      icon: 'Clock',
    },
    {
      title: t.productDetail.benefits.continuity,
      description: t.productDetail.benefits.continuityDesc,
      icon: 'TrendingUp',
    },
    {
      title: t.productDetail.benefits.support,
      description: t.productDetail.benefits.supportDesc,
      icon: 'Wrench',
    },
  ];

  const displayTitle = title || t.productDetail.whyThisProduct;
  const displayBenefits = benefits && benefits.length > 0 ? benefits : defaultBenefits;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <h2 className="text-xl font-semibold text-steel-900 mb-8">
          {displayTitle}
        </h2>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayBenefits.map((benefit, index) => {
            const IconComponent = benefit.icon ? (iconMap[benefit.icon] || CheckCircle2) : CheckCircle2;

            return (
              <div
                key={index}
                className="flex gap-4 p-5 bg-white rounded-lg border border-steel-100 hover:border-steel-200 transition-colors"
              >
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-steel-100 flex items-center justify-center">
                  <IconComponent className="w-5 h-5 text-steel-600" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-medium text-steel-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-1 text-sm text-steel-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

