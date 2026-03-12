// =============================================================================
// AngleSweepChart — Açı-Metrik İlişki Grafiği (Recharts)
// =============================================================================
// X ekseni: bileme açısı, Y ekseni: keskinlik, dayanıklılık, kuvvet, genel skor
// =============================================================================

'use client';

import { useMemo } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from 'recharts';
import type { AngleSweepPoint } from '@/lib/simulator/engine';

interface AngleSweepChartProps {
  data: AngleSweepPoint[];
  currentAngle: number;
  recommendedRange?: readonly [number, number];
}

export default function AngleSweepChart({
  data,
  currentAngle,
  recommendedRange,
}: AngleSweepChartProps) {
  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center h-48 rounded-xl bg-steel-50 border border-steel-100">
        <p className="text-sm text-steel-400">
          Açı sweep verisi yok. &quot;Analizi Gör&quot; butonuna tıklayın.
        </p>
      </div>
    );
  }

  // Kuvveti 0-100 aralığına normalize et (grafik okunabilirliği)
  const maxForce = useMemo(
    () => Math.max(...data.map(d => d.totalForce), 1),
    [data]
  );

  const chartData = useMemo(
    () =>
      data.map(d => ({
        angle: d.angle,
        keskinlik: parseFloat(d.sharpnessIndex.toFixed(1)),
        dayanıklılık: parseFloat(d.durabilityIndex.toFixed(1)),
        kuvvet: parseFloat(((d.totalForce / maxForce) * 100).toFixed(1)),
        skor: parseFloat(d.overallScore.toFixed(1)),
        rawForce: d.totalForce,
      })),
    [data, maxForce]
  );

  return (
    <div className="rounded-xl bg-white border border-steel-100 p-4">
      <h3 className="text-xs font-semibold text-steel-600 mb-4">
        Açı–Performans İlişkisi
      </h3>

      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />

          <XAxis
            dataKey="angle"
            tick={{ fontSize: 10, fill: '#94a3b8' }}
            label={{
              value: 'Bileme Açısı (°)',
              position: 'insideBottom',
              offset: -2,
              fontSize: 10,
              fill: '#64748b',
            }}
          />

          <YAxis
            tick={{ fontSize: 10, fill: '#94a3b8' }}
            domain={[0, 100]}
            label={{
              value: 'Skor (0-100)',
              angle: -90,
              position: 'insideLeft',
              fontSize: 10,
              fill: '#64748b',
            }}
          />

          <Tooltip content={<CustomTooltip maxForce={maxForce} />} />

          <Legend
            wrapperStyle={{ fontSize: 10 }}
            iconType="circle"
            iconSize={8}
          />

          {/* Önerilen aralık */}
          {recommendedRange && (
            <>
              <ReferenceLine
                x={recommendedRange[0]}
                stroke="#0369a1"
                strokeDasharray="4 4"
                strokeWidth={1}
                label={{
                  value: `${recommendedRange[0]}°`,
                  fontSize: 9,
                  fill: '#0369a1',
                  position: 'top',
                }}
              />
              <ReferenceLine
                x={recommendedRange[1]}
                stroke="#0369a1"
                strokeDasharray="4 4"
                strokeWidth={1}
                label={{
                  value: `${recommendedRange[1]}°`,
                  fontSize: 9,
                  fill: '#0369a1',
                  position: 'top',
                }}
              />
            </>
          )}

          {/* Mevcut açı */}
          <ReferenceLine
            x={currentAngle}
            stroke="#1a73e8"
            strokeWidth={2}
            label={{
              value: `${currentAngle}°`,
              fontSize: 10,
              fill: '#1a73e8',
              fontWeight: 700,
              position: 'top',
            }}
          />

          <Line
            type="monotone"
            dataKey="keskinlik"
            stroke="#2563eb"
            strokeWidth={2}
            dot={false}
            name="Keskinlik"
          />
          <Line
            type="monotone"
            dataKey="dayanıklılık"
            stroke="#d97706"
            strokeWidth={2}
            dot={false}
            name="Dayanıklılık"
          />
          <Line
            type="monotone"
            dataKey="kuvvet"
            stroke="#dc2626"
            strokeWidth={1.5}
            dot={false}
            strokeDasharray="4 2"
            name="Kuvvet (norm.)"
          />
          <Line
            type="monotone"
            dataKey="skor"
            stroke="#0f766e"
            strokeWidth={2.5}
            dot={false}
            name="Genel Skor"
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Açıklama */}
      <p className="mt-2 text-[10px] text-steel-400 text-center">
        Mavi dikey çizgi = mevcut açı. Mavi kesikli = önerilen aralık. Kuvvet normalize edilmiştir (maks = 100).
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Custom Tooltip
// ---------------------------------------------------------------------------

function CustomTooltip(props: Record<string, unknown> & { maxForce: number }) {
  const active = props.active as boolean | undefined;
  const payload = props.payload as Array<{ color?: string; name?: string; value?: number; dataKey?: string; payload?: { rawForce?: number } }> | undefined;
  const label = props.label as string | undefined;
  const { maxForce } = props;

  if (!active || !payload || payload.length === 0) return null;

  const rawForce = payload[0]?.payload?.rawForce;

  return (
    <div className="bg-white border border-steel-200 rounded-lg shadow-lg p-3 min-w-[160px]">
      <div className="text-xs font-semibold text-steel-700 mb-1">
        Açı: {label}°
      </div>
      {payload.map((entry, i) => (
        <div key={i} className="flex items-center justify-between gap-4 text-[11px]">
          <span style={{ color: entry.color }}>{entry.name}</span>
          <span className="font-semibold text-steel-700">
            {entry.dataKey === 'kuvvet' && rawForce != null
              ? `${rawForce.toFixed(1)} N`
              : `${entry.value}`}
          </span>
        </div>
      ))}
    </div>
  );
}
