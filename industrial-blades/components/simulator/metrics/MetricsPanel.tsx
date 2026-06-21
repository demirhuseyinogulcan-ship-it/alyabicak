// =============================================================================
// MetricsPanel — Performans Metrikleri Paneli
// =============================================================================
// Gauge bileşenleri ve sonuç kartlarıyla tüm simülasyon metriklerini gösterir.
// =============================================================================

'use client';

import { useMemo } from 'react';
import type {
  PerformanceMetrics,
  ForceCalculationResult,
  WearEstimation,
  Recommendation,
} from '@/lib/simulator/types';
import {
  Zap,
  Shield,
  Target,
  Gauge,
  Flame,
  Puzzle,
  Star,
  AlertTriangle,
  CheckCircle2,
  Info,
  Clock,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';

// Büyük sayıları okunabilir formatta göster
function formatNumber(n: number): string {
  if (Math.abs(n) >= 1e6) return n.toExponential(2);
  if (Math.abs(n) >= 1000) return n.toLocaleString('tr-TR', { maximumFractionDigits: 1 });
  return n.toFixed(2);
}

const MONO = "'JetBrains Mono','Cascadia Code','Fira Code','Courier New',monospace";

// Mühendislik skalası: mavi (iyi) → kehribar (orta) → kırmızı (düşük)
const metricColor = (v: number) =>
  v >= 70 ? '#0369a1' : v >= 40 ? '#ca8a04' : '#dc2626';

interface MetricsPanelProps {
  metrics: PerformanceMetrics;
  force: ForceCalculationResult;
  wear: WearEstimation;
  recommendations: Recommendation[];
  materialCompatibility: number;
  showRecommendations: boolean;
}

// Metrik tanımları
interface MetricDef {
  key: keyof PerformanceMetrics;
  label: string;
  icon: LucideIcon;
  description: string;
  colorFn: (v: number) => string;
}

const METRIC_DEFS: MetricDef[] = [
  { key: 'sharpness',             label: 'Keskinlik',      icon: Zap,    description: 'Bıçağın kesim kalitesi potansiyeli',  colorFn: metricColor },
  { key: 'durability',            label: 'Dayanıklılık',   icon: Shield, description: 'Kenardaki mekanik dayanaklılık',      colorFn: metricColor },
  { key: 'edgeRetention',         label: 'Kenar Tutma',    icon: Target, description: 'Keskinliği ne kadar süre korur',      colorFn: metricColor },
  { key: 'cutQuality',            label: 'Kesim Kalitesi', icon: Star,   description: 'Temiz, düzgün kesim yüzeyi',         colorFn: metricColor },
  { key: 'energyEfficiency',      label: 'Enerji Verimi',  icon: Flame,  description: 'Düşük kuvvet ile yüksek performans', colorFn: metricColor },
  { key: 'materialCompatibility', label: 'Malz. Uyumu',    icon: Puzzle, description: 'Malzeme-bıçak eşleşme kalitesi',     colorFn: metricColor },
];

export default function MetricsPanel({
  metrics,
  force,
  wear,
  recommendations,
  materialCompatibility,
  showRecommendations,
}: MetricsPanelProps) {
  return (
    <div className="space-y-6">
      {/* ─── GENEL SKOR ─── */}
      <div className="text-center">
        <OverallGauge score={metrics.overallScore} />
      </div>

      {/* ─── BİREYSEL METRİKLER ─── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {METRIC_DEFS.map(def => (
          <MetricCard
            key={def.key}
            def={def}
            value={metrics[def.key]}
          />
        ))}
      </div>

      {/* ─── KUVVET & AŞINMA DETAYLARI ─── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <DetailCard title="Kesme Kuvveti" icon={Gauge}>
          <DetailRow label="Toplam Kuvvet" value={`${formatNumber(force.totalForce)} N`} />
          <DetailRow label="Ayırma Kuvveti" value={`${formatNumber(force.separationForce)} N`} />
          <DetailRow label="Sürtünme Kuvveti" value={`${formatNumber(force.frictionForce)} N`} />
          <DetailRow label="Spesifik Enerji" value={`${formatNumber(force.specificCuttingEnergy)} J/m²`} />
          <DetailRow label="Güç" value={`${formatNumber(force.powerRequirement)} W`} />
        </DetailCard>

        <DetailCard title="Aşınma Tahmini" icon={Clock}>
          <DetailRow label="Tahmini Kenar Ömrü" value={`${wear.estimatedEdgeLife.toFixed(0)} saat`} />
          <DetailRow label="Bileme Aralığı" value={`${wear.resharpenInterval.toFixed(0)} saat`} />
          <DetailRow label="Kenar Gerilemesi" value={`${wear.edgeRecessionRate.toFixed(2)} µm/saat`} />
          <div className="mt-2 pt-2 border-t border-steel-100">
            <div className="text-[10px] font-medium text-steel-500 mb-1">Aşınma Dağılımı</div>
            <WearDistributionBar distribution={wear.wearDistribution} />
          </div>
        </DetailCard>
      </div>

      {/* ─── TAVSİYELER ─── */}
      {showRecommendations && recommendations.length > 0 && (
        <div className="space-y-2">
            <h3 className="text-xs font-semibold text-steel-400 uppercase tracking-wider">
            Tavsiyeler
          </h3>
          {recommendations.map((rec, i) => (
            <RecommendationCard key={i} rec={rec} />
          ))}
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// OverallGauge — Genel Performans Göstergesi
// ---------------------------------------------------------------------------

function OverallGauge({ score }: { score: number }) {
  const circumference = 2 * Math.PI * 54;
  const dashOffset = circumference - (score / 100) * circumference * 0.75; // 270deg arc
  const color =
    score >= 80
      ? '#0369a1'
      : score >= 60
        ? '#0284c7'
        : score >= 40
          ? '#ca8a04'
          : '#dc2626';

  const grade =
    score >= 90
      ? 'Mükemmel'
      : score >= 75
        ? 'Çok İyi'
        : score >= 60
          ? 'İyi'
          : score >= 40
            ? 'Orta'
            : 'Düşük';

  return (
    <div className="inline-flex flex-col items-center w-full max-w-[200px] mx-auto">
      <svg viewBox="0 0 140 135" className="w-full h-auto">
        {/* Arka plan */}
        <circle
          cx={70}
          cy={70}
          r={54}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth={7}
          strokeLinecap="round"
          strokeDasharray={`${circumference * 0.75} ${circumference * 0.25}`}
          transform="rotate(135, 70, 70)"
        />
        {/* Dolu kısım */}
        <circle
          cx={70}
          cy={70}
          r={54}
          fill="none"
          stroke={color}
          strokeWidth={7}
          strokeLinecap="round"
          strokeDasharray={`${circumference * 0.75} ${circumference * 0.25}`}
          strokeDashoffset={dashOffset}
          transform="rotate(135, 70, 70)"
          className="transition-all duration-700"
        />
        <text
          x={70}
          y={65}
          textAnchor="middle"
          fontSize={24}
          fontWeight={600}
          fill={color}
          style={{ fontFamily: MONO }}
        >
          {score.toFixed(0)}
        </text>
        <text
          x={70}
          y={82}
          textAnchor="middle"
          fontSize={9}
          fill="#94a3b8"
          style={{ fontFamily: MONO }}
        >
          / 100
        </text>
      </svg>
      <div className="text-xs font-semibold" style={{ color }}>
        {grade}
      </div>
      <div className="text-[10px] text-steel-400" style={{ fontFamily: MONO }}>Genel Performans Skoru</div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// MetricCard — Bireysel metrik kartı
// ---------------------------------------------------------------------------

function MetricCard({ def, value }: { def: MetricDef; value: number }) {
  const color = def.colorFn(value);

  return (
    <div className="p-3 rounded-lg bg-white border border-steel-100 hover:shadow-sm transition-shadow">
      <div className="mb-2">
        <span className="text-[11px] font-medium text-steel-600">{def.label}</span>
      </div>

      {/* Mini gauge bar */}
      <div className="h-1.5 rounded-full bg-steel-100 overflow-hidden mb-1">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${value}%`, backgroundColor: color }}
        />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold" style={{ color, fontFamily: MONO }}>
          {value.toFixed(0)}
        </span>
        <span className="text-[9px] text-steel-400">{def.description}</span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// DetailCard — Detay kartı
// ---------------------------------------------------------------------------

function DetailCard({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <div className="p-4 rounded-lg bg-white border border-steel-100">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-3.5 h-3.5 text-steel-400" />
        <span className="text-xs font-semibold text-steel-700">{title}</span>
      </div>
      <div className="space-y-1.5">{children}</div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs text-steel-500">{label}</span>
      <span className="text-xs font-semibold text-steel-700">{value}</span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// WearDistributionBar — Aşınma dağılım çubuğu
// ---------------------------------------------------------------------------

function WearDistributionBar({
  distribution,
}: {
  distribution: { abrasive: number; adhesive: number; oxidative: number; fatigue: number };
}) {
  const items = [
    { label: 'Abrazif', value: distribution.abrasive, color: '#0c4a6e' },
    { label: 'Adezif', value: distribution.adhesive, color: '#0369a1' },
    { label: 'Oksidatif', value: distribution.oxidative, color: '#0ea5e9' },
    { label: 'Yorulma', value: distribution.fatigue, color: '#7dd3fc' },
  ];

  return (
    <div>
      <div className="flex h-2 rounded-full overflow-hidden mb-1">
        {items.map(item => (
          <div
            key={item.label}
            className="transition-all duration-500"
            style={{
              width: `${item.value}%`,
              backgroundColor: item.color,
            }}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-x-3 gap-y-0.5">
        {items.map(item => (
          <div key={item.label} className="flex items-center gap-1">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-[9px] text-steel-500">
              {item.label} %{item.value.toFixed(0)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// RecommendationCard — Tavsiye kartı
// ---------------------------------------------------------------------------

function RecommendationCard({ rec }: { rec: Recommendation }) {
  const iconMap: Record<number, LucideIcon> = {
    1: AlertTriangle,
    2: Info,
    3: TrendingUp,
  };
  // Teknik çizim stili: nötr, profesyonel tonlar
  const colorMap: Record<number, string> = {
    1: 'border-steel-300 bg-steel-50',
    2: 'border-steel-200 bg-white',
    3: 'border-steel-200 bg-white',
  };
  const iconColorMap: Record<number, string> = {
    1: 'text-steel-700',
    2: 'text-steel-500',
    3: 'text-sky-600',
  };

  const Icon = iconMap[rec.priority] ?? Info;

  return (
    <div
      className={`flex gap-3 p-3 rounded-lg border ${colorMap[rec.priority] ?? 'border-steel-200 bg-steel-50'}`}
    >
      <Icon className={`w-4 h-4 flex-shrink-0 mt-0.5 ${iconColorMap[rec.priority] ?? 'text-steel-500'}`} />
      <div>
        <div className="text-xs font-semibold text-steel-800">{rec.title}</div>
        <p className="text-[11px] text-steel-600 mt-0.5 leading-relaxed">{rec.description}</p>
        {rec.improvementPotential > 0 && (
          <div className="mt-1 flex items-center gap-1">
            <TrendingUp className="w-3 h-3 text-sky-600" />
            <span className="text-[10px] font-medium text-sky-700">
              +{rec.improvementPotential.toFixed(0)} puan iyileştirme potansiyeli
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
