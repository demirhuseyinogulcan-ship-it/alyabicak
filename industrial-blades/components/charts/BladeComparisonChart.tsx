'use client'

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from 'recharts'

// ─── Radar Data: HSS vs WC (normalized 0-100) ───
interface RadarDataPoint {
  subject: string
  hss: number
  wc: number
  fullMark: number
  [key: string]: string | number
}

// ─── Bar Data: Lifespan comparison ───
interface LifespanDataPoint {
  name: string
  value: number
  color: string
  [key: string]: string | number
}

// ─── Translations ───
export interface BladeComparisonTranslations {
  radarTitle: string
  radarSubtitle: string
  lifespanTitle: string
  lifespanSubtitle: string
  hss: string
  wc: string
  yAxisKm: string
  axes: {
    hardness: string
    toughness: string
    wearResistance: string
    cost: string
    sharpenability: string
    thermalResistance: string
  }
  bars: {
    plainHss: string
    ceramicHss: string
    tungstenCarbide: string
  }
}

interface BladeComparisonChartProps {
  translations?: BladeComparisonTranslations
}

export default function BladeComparisonChart({ translations }: BladeComparisonChartProps) {
  const t = translations || {
    radarTitle: 'HSS vs Tungsten Karbür',
    radarSubtitle: 'Altı kritik parametrede karşılaştırma',
    lifespanTitle: 'Kesim Ömrü Karşılaştırması',
    lifespanSubtitle: 'Ortalama kesim mesafesi (km)',
    hss: 'HSS',
    wc: 'Tungsten Karbür',
    yAxisKm: 'km',
    axes: {
      hardness: 'Sertlik',
      toughness: 'Tokluk',
      wearResistance: 'Aşınma Direnci',
      cost: 'Maliyet Avantajı',
      sharpenability: 'Bileme Kolaylığı',
      thermalResistance: 'Termal Dayanım',
    },
    bars: {
      plainHss: 'Kaplamasız HSS',
      ceramicHss: 'Seramik Kaplamalı HSS',
      tungstenCarbide: 'Tungsten Karbür',
    },
  }

  const radarData: RadarDataPoint[] = [
    { subject: t.axes.hardness, hss: 45, wc: 90, fullMark: 100 },
    { subject: t.axes.toughness, hss: 85, wc: 40, fullMark: 100 },
    { subject: t.axes.wearResistance, hss: 35, wc: 95, fullMark: 100 },
    { subject: t.axes.cost, hss: 90, wc: 30, fullMark: 100 },
    { subject: t.axes.sharpenability, hss: 90, wc: 25, fullMark: 100 },
    { subject: t.axes.thermalResistance, hss: 70, wc: 80, fullMark: 100 },
  ]

  const lifespanData: LifespanDataPoint[] = [
    { name: t.bars.plainHss, value: 75, color: '#64748b' },
    { name: t.bars.ceramicHss, value: 300, color: '#2563eb' },
    { name: t.bars.tungstenCarbide, value: 1200, color: '#dc2626' },
  ]

  return (
    <div className="space-y-10">
      {/* ═══ Radar Chart ═══ */}
      <div className="w-full bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-slate-100">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-slate-900">{t.radarTitle}</h3>
          <p className="text-sm text-slate-500">{t.radarSubtitle}</p>
        </div>

        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis
                dataKey="subject"
                tick={{ fill: '#475569', fontSize: 12 }}
              />
              <PolarRadiusAxis
                angle={30}
                domain={[0, 100]}
                tick={false}
                axisLine={false}
              />
              <Radar
                name={t.hss}
                dataKey="hss"
                stroke="#2563eb"
                fill="#2563eb"
                fillOpacity={0.2}
                strokeWidth={2}
                animationDuration={1200}
              />
              <Radar
                name={t.wc}
                dataKey="wc"
                stroke="#dc2626"
                fill="#dc2626"
                fillOpacity={0.2}
                strokeWidth={2}
                animationDuration={1400}
              />
              <Legend
                wrapperStyle={{ paddingTop: '20px' }}
                iconType="circle"
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ═══ Lifespan Bar Chart ═══ */}
      <div className="w-full bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-slate-100">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-slate-900">{t.lifespanTitle}</h3>
          <p className="text-sm text-slate-500">{t.lifespanSubtitle}</p>
        </div>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={lifespanData}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} horizontal={false} />
              <XAxis
                type="number"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#64748b', fontSize: 12 }}
                tickFormatter={(val: number) => `${val} km`}
              />
              <YAxis
                type="category"
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#475569', fontSize: 11 }}
                width={160}
              />
              <Tooltip
                formatter={(value: number | undefined) => [`${value ?? 0} ${t.yAxisKm}`, '']}
                contentStyle={{
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                }}
              />
              <Bar dataKey="value" radius={[0, 6, 6, 0]} animationDuration={1200}>
                {lifespanData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Multiplier annotations */}
        <div className="mt-4 flex flex-wrap gap-4 justify-center text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#64748b' }} />
            <span className="text-slate-600">{t.bars.plainHss} — 1x</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#2563eb' }} />
            <span className="text-slate-600">{t.bars.ceramicHss} — 3-5x</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#dc2626' }} />
            <span className="text-slate-600">{t.bars.tungstenCarbide} — 10-20x</span>
          </div>
        </div>
      </div>
    </div>
  )
}
