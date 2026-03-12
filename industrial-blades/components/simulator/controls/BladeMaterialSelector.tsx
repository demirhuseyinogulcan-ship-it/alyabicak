// =============================================================================
// BladeMaterialSelector — Bıçak Malzemesi Seçici
// =============================================================================

'use client';

import { useMemo } from 'react';
import { listBladeMaterials } from '@/lib/simulator/engine';

interface BladeMaterialSelectorProps {
  selectedId: string;
  onChange: (id: string) => void;
}

export default function BladeMaterialSelector({
  selectedId,
  onChange,
}: BladeMaterialSelectorProps) {
  const materials = useMemo(() => listBladeMaterials(), []);
  const selected = materials.find(m => m.id === selectedId);

  return (
    <div className="space-y-3">
      <label className="block text-xs font-semibold text-steel-700">
        Bıçak Malzemesi
      </label>

      <select
        value={selectedId}
        onChange={e => onChange(e.target.value)}
        className="
          w-full px-3 py-2.5 rounded-lg border border-steel-200
          bg-white text-steel-800 text-xs font-medium
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500
          transition-colors
        "
      >
        {materials.map(m => (
          <option key={m.id} value={m.id}>
            {m.name} — {m.hardnessHRC[0]}–{m.hardnessHRC[1]} HRC
          </option>
        ))}
      </select>

      {/* Malzeme özellik barları */}
      {selected && (
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-2">
          <PropertyBar
            label="Sertlik"
            value={(selected.hardnessHRC[0] + selected.hardnessHRC[1]) / 2}
            min={40}
            max={95}
            unit="HRC"
            color="primary"
          />
          <PropertyBar
            label="Tokluk"
            value={selected.fractureToughness}
            min={0}
            max={40}
            color="green"
          />
          <PropertyBar
            label="Aşınma Dir."
            value={selected.wearResistance}
            min={0}
            max={10}
            color="accent"
          />
          <PropertyBar
            label="Bilenebilirlik"
            value={selected.sharpenability}
            min={0}
            max={10}
            color="steel"
          />
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// PropertyBar — Yatay özellik çubuğu
// ---------------------------------------------------------------------------

function PropertyBar({
  label,
  value,
  min,
  max,
  unit,
  color,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  unit?: string;
  color: 'primary' | 'accent' | 'green' | 'steel';
}) {
  const pct = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));
  const barColors: Record<string, string> = {
    primary: 'bg-primary-500',
    accent: 'bg-accent-500',
    green: 'bg-green-500',
    steel: 'bg-steel-400',
  };
  const trackColors: Record<string, string> = {
    primary: 'bg-primary-50',
    accent: 'bg-accent-50',
    green: 'bg-green-50',
    steel: 'bg-steel-50',
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-0.5">
        <span className="text-[10px] font-medium text-steel-500">{label}</span>
        <span className="text-[10px] font-semibold text-steel-700">
          {value}{unit ? ` ${unit}` : '/10'}
        </span>
      </div>
      <div className={`h-1 rounded-full ${trackColors[color]} overflow-hidden`}>
        <div
          className={`h-full rounded-full ${barColors[color]} transition-all duration-500`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
