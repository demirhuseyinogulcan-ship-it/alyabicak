'use client'

import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'

interface DataPoint {
    name: string
    metalUrunleri: number
    otomotiv: number
    boru: number
    makine: number
    insaat: number
    yapiCeligi: number
    elektrik: number
    gemi: number
    diger: number
    [key: string]: string | number
}

const data: DataPoint[] = [
    {
        name: '2006',
        metalUrunleri: 10.5,
        otomotiv: 6.2,
        boru: 4.1,
        makine: 5.5,
        insaat: 5.8,
        yapiCeligi: 2.5,
        elektrik: 1.2,
        gemi: 1.0,
        diger: 3.0,
    },
    {
        name: '2007',
        metalUrunleri: 11.0,
        otomotiv: 6.8,
        boru: 4.3,
        makine: 6.0,
        insaat: 6.0,
        yapiCeligi: 2.7,
        elektrik: 1.3,
        gemi: 1.1,
        diger: 2.5,
    },
    {
        name: '2008',
        metalUrunleri: 10.8,
        otomotiv: 6.5,
        boru: 4.2,
        makine: 5.9,
        insaat: 5.9,
        yapiCeligi: 2.6,
        elektrik: 1.3,
        gemi: 1.2,
        diger: 2.7,
    },
    {
        name: '2009',
        metalUrunleri: 7.5,
        otomotiv: 4.0,
        boru: 3.0,
        makine: 3.5,
        insaat: 4.5,
        yapiCeligi: 2.0,
        elektrik: 1.0,
        gemi: 0.8,
        diger: 2.3,
    },
    {
        name: '2010',
        metalUrunleri: 9.0,
        otomotiv: 5.5,
        boru: 3.5,
        makine: 4.5,
        insaat: 5.0,
        yapiCeligi: 2.2,
        elektrik: 1.1,
        gemi: 0.9,
        diger: 2.1,
    },
    {
        name: '2011',
        metalUrunleri: 9.8,
        otomotiv: 6.0,
        boru: 3.8,
        makine: 5.2,
        insaat: 5.5,
        yapiCeligi: 2.4,
        elektrik: 1.2,
        gemi: 1.0,
        diger: 2.0,
    },
    {
        name: '2012',
        metalUrunleri: 10.2,
        otomotiv: 6.3,
        boru: 4.0,
        makine: 5.6,
        insaat: 5.8,
        yapiCeligi: 2.5,
        elektrik: 1.2,
        gemi: 1.0,
        diger: 2.6,
    },
    {
        name: '2013',
        metalUrunleri: 10.0,
        otomotiv: 6.1,
        boru: 3.9,
        makine: 5.4,
        insaat: 5.7,
        yapiCeligi: 2.4,
        elektrik: 1.2,
        gemi: 1.0,
        diger: 3.1,
    },
]

const colors: Record<string, string> = {
    metalUrunleri: '#1e3a8a', // blue-900
    otomotiv: '#374151',    // gray-700
    boru: '#991b1b',        // red-800
    makine: '#2563eb',      // blue-600
    insaat: '#4b5563',      // gray-600
    yapiCeligi: '#60a5fa',  // blue-400
    elektrik: '#d97706',    // amber-600
    gemi: '#059669',        // emerald-600
    diger: '#9ca3af',       // gray-400
}

interface SteelUsageChartProps {
    translations?: {
        title: string
        yAxis: string
        tooltipTotal: string
        legend: {
            [key: string]: string
        }
    }
}

export default function SteelUsageChart({ translations }: SteelUsageChartProps) {
    // Fallback if translations are missing (prevents crash)
    const safeTranslations = translations || {
        title: 'Sektörel Çelik Kullanım Dağılımı (Veri Yükleniyor...)',
        yAxis: 'Milyon Ton',
        tooltipTotal: 'Toplam',
        legend: {
            metalUrunleri: 'Metal Ürünleri',
            otomotiv: 'Otomotiv',
            boru: 'Boru & Profil',
            makine: 'Makine İmalat',
            insaat: 'İnşaat',
            yapiCeligi: 'Yapı Çeliği',
            elektrik: 'Elektrik & Elektronik',
            gemi: 'Gemi İnşaa',
            diger: 'Diğer',
        }
    }

    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            const total = payload.reduce((acc: number, curr: any) => acc + curr.value, 0)

            return (
                <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-slate-100 text-sm z-50">
                    <p className="font-bold text-slate-900 mb-2 border-b border-slate-100 pb-1">{label} Yılı Dağılımı</p>
                    <div className="space-y-1">
                        {payload.map((entry: any, index: number) => (
                            <div key={index} className="flex items-center gap-2">
                                <div
                                    className="w-2 h-2 rounded-full"
                                    style={{ backgroundColor: entry.color }}
                                />
                                <span className="text-slate-600 w-32">{safeTranslations.legend[entry.name]}:</span>
                                <span className="font-semibold text-slate-900">{entry.value.toFixed(1)} MT</span>
                            </div>
                        ))}
                        <div className="pt-2 mt-2 border-t border-slate-100 flex justify-between font-bold text-slate-900">
                            <span>{safeTranslations.tooltipTotal}:</span>
                            <span>{total.toFixed(1)} {safeTranslations.yAxis}</span>
                        </div>
                    </div>
                </div>
            )
        }
        return null
    }

    return (
        <div className="w-full bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-slate-100">
            <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900">{safeTranslations.title}</h3>
                <p className="text-sm text-slate-500">{safeTranslations.yAxis} / Yıl</p>
            </div>

            <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 10,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <defs>
                            {Object.entries(colors).map(([key, color]) => (
                                <linearGradient key={key} id={`color-${key}`} x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                                    <stop offset="95%" stopColor={color} stopOpacity={0.1} />
                                </linearGradient>
                            ))}
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" opacity={0.1} vertical={false} />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#64748b', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#64748b', fontSize: 12 }}
                            label={{
                                value: safeTranslations.yAxis,
                                angle: -90,
                                position: 'insideLeft',
                                style: { fill: '#94a3b8', fontSize: 12 }
                            }}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />

                        {/* Areas stacked on top of each other */}
                        <Area type="monotone" dataKey="metalUrunleri" stackId="1" stroke={colors.metalUrunleri} fill={`url(#color-metalUrunleri)`} animationDuration={1500} />
                        <Area type="monotone" dataKey="otomotiv" stackId="1" stroke={colors.otomotiv} fill={`url(#color-otomotiv)`} animationDuration={1600} />
                        <Area type="monotone" dataKey="boru" stackId="1" stroke={colors.boru} fill={`url(#color-boru)`} animationDuration={1700} />
                        <Area type="monotone" dataKey="makine" stackId="1" stroke={colors.makine} fill={`url(#color-makine)`} animationDuration={1800} />
                        <Area type="monotone" dataKey="insaat" stackId="1" stroke={colors.insaat} fill={`url(#color-insaat)`} animationDuration={1900} />
                        <Area type="monotone" dataKey="yapiCeligi" stackId="1" stroke={colors.yapiCeligi} fill={`url(#color-yapiCeligi)`} animationDuration={2000} />
                        <Area type="monotone" dataKey="elektrik" stackId="1" stroke={colors.elektrik} fill={`url(#color-elektrik)`} animationDuration={2100} />
                        <Area type="monotone" dataKey="gemi" stackId="1" stroke={colors.gemi} fill={`url(#color-gemi)`} animationDuration={2200} />
                        <Area type="monotone" dataKey="diger" stackId="1" stroke={colors.diger} fill={`url(#color-diger)`} animationDuration={2300} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            {/* Custom Legend - HTML based for better layout control */}
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 px-2 border-t border-slate-50 pt-6">
                {Object.entries(colors).map(([key, color]) => (
                    <div key={key} className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: color }} />
                        <span className="text-xs font-medium text-slate-600">{safeTranslations.legend[key]}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
