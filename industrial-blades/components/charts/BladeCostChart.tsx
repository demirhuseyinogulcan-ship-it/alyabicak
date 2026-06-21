'use client'

import {
  Line,
  LineChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceLine,
} from 'recharts'

// ─── Cost vs Distance Data ───
// Models relative total cost over cutting distance
// HSS: 1x cost (base), lasts 75 km → replace at 75, 150, 225...
// Ceramic HSS: 1.8x cost, lasts 300 km → replace at 300, 600...
// WC: 4x cost, lasts 1200 km → replace at 1200...
interface CostDataPoint {
  distance: number
  hss: number
  ceramicHss: number
  wc: number
  [key: string]: number
}

function generateCostData(): CostDataPoint[] {
  const points: CostDataPoint[] = []
  const hssPrice = 1      // base unit
  const hssLife = 75
  const ceramicPrice = 1.8 // ~1.8x HSS
  const ceramicLife = 300
  const wcPrice = 4        // ~4x HSS
  const wcLife = 1200

  for (let d = 0; d <= 1500; d += 50) {
    const val = (price: number, life: number) =>
      d === 0 ? price : Math.round(Math.ceil(d / life) * price * 10) / 10
    points.push({
      distance: d,
      hss: val(hssPrice, hssLife),
      ceramicHss: val(ceramicPrice, ceramicLife),
      wc: val(wcPrice, wcLife),
    })
  }
  return points
}

const costData = generateCostData()

// ─── Translations ───
export interface BladeCostTranslations {
  title: string
  subtitle: string
  xAxis: string
  yAxis: string
  hss: string
  ceramicHss: string
  wc: string
  breakEvenNote: string
}

interface BladeCostChartProps {
  translations?: BladeCostTranslations
}

export default function BladeCostChart({ translations }: BladeCostChartProps) {
  const t = translations || {
    title: 'Toplam Sahip Olma Maliyeti (TCO)',
    subtitle: 'Kesim mesafesine göre kümülatif maliyet karşılaştırması',
    xAxis: 'Kesim Mesafesi (km)',
    yAxis: 'Toplam Maliyet (göreceli)',
    hss: 'Kaplamasız HSS',
    ceramicHss: 'Seramik Kaplamalı HSS',
    wc: 'Tungsten Karbür',
    breakEvenNote: 'Başa baş noktası',
  }

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: {
    active?: boolean
    payload?: Array<{ name: string; value: number; color: string; dataKey: string }>
    label?: number
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-slate-100 text-sm z-50">
          <p className="font-bold text-slate-900 mb-2 border-b border-slate-100 pb-1">
            {label} km
          </p>
          <div className="space-y-1.5">
            {payload.map((entry, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
                <span className="text-slate-600 w-40">{entry.name}:</span>
                <span className="font-semibold text-slate-900">{entry.value}×</span>
              </div>
            ))}
          </div>
        </div>
      )
    }
    return null
  }

  return (
    <div className="w-full bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-slate-100">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900">{t.title}</h3>
        <p className="text-sm text-slate-500">{t.subtitle}</p>
      </div>

      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={costData} margin={{ top: 10, right: 10, left: 5, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
            <XAxis
              dataKey="distance"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748b', fontSize: 12 }}
              tickFormatter={(val: number) => `${val}`}
              label={{
                value: t.xAxis,
                position: 'insideBottom',
                offset: -5,
                style: { fill: '#94a3b8', fontSize: 12 },
              }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748b', fontSize: 12 }}
              tickFormatter={(val: number) => `${val}×`}
              label={{
                value: t.yAxis,
                angle: -90,
                position: 'insideLeft',
                style: { fill: '#94a3b8', fontSize: 12 },
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ paddingTop: '20px' }} iconType="circle" />

            {/* Break-even reference line */}
            <ReferenceLine
              x={300}
              stroke="#94a3b8"
              strokeDasharray="4 4"
              label={{
                value: `← ${t.breakEvenNote}`,
                position: 'top',
                fill: '#94a3b8',
                fontSize: 10,
              }}
            />

            <Line
              type="stepAfter"
              dataKey="hss"
              name={t.hss}
              stroke="#64748b"
              strokeWidth={2.5}
              dot={false}
              animationDuration={1200}
            />
            <Line
              type="stepAfter"
              dataKey="ceramicHss"
              name={t.ceramicHss}
              stroke="#2563eb"
              strokeWidth={2.5}
              dot={false}
              animationDuration={1400}
            />
            <Line
              type="stepAfter"
              dataKey="wc"
              name={t.wc}
              stroke="#dc2626"
              strokeWidth={2.5}
              dot={false}
              animationDuration={1600}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Key insight box */}
      <div className="mt-4 bg-blue-50 border border-blue-100 rounded-xl p-4">
        <p className="text-sm text-blue-800">
          <span className="font-bold">💡 </span>
          300 km+ → WC &amp; {t.ceramicHss} ≈ TCO |
          1000 km+ → WC {t.breakEvenNote}
        </p>
      </div>
    </div>
  )
}
