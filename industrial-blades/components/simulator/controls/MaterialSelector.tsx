// =============================================================================
// MaterialSelector — Kesilen Malzeme Seçici
// =============================================================================

'use client';

import { useMemo } from 'react';
import type { MaterialCategory } from '@/lib/simulator/types';
import { listMaterials } from '@/lib/simulator/engine';
import {
  Package,
  FileText,
  Layers,
  Scissors,
  Droplets,
  Shirt,
  Box,
  Tag,
  Grid3X3,
  type LucideIcon,
} from 'lucide-react';

// Kategori ikon haritası
const CATEGORY_ICONS: Record<MaterialCategory, LucideIcon> = {
  film: Layers,
  paper: FileText,
  foil: Grid3X3,
  tape: Tag,
  textile: Shirt,
  nonwoven: Scissors,
  rubber: Droplets,
  composite: Layers,
  foam: Box,
  label: Tag,
  laminate: Layers,
  corrugated: Package,
  cardboard: Package,
};

// Kategori etiketi
const CATEGORY_LABELS: Record<MaterialCategory, string> = {
  film: 'Film / Stretch',
  paper: 'Kağıt',
  foil: 'Folyo',
  tape: 'Bant / Yapışkanlı',
  textile: 'Tekstil',
  nonwoven: 'Nonwoven',
  rubber: 'Kauçuk / Elastomer',
  composite: 'Kompozit',
  foam: 'Köpük',
  label: 'Etiket',
  laminate: 'Laminat',
  corrugated: 'Oluklu Mukavva',
  cardboard: 'Karton',
};

interface MaterialSelectorProps {
  selectedId: string;
  onChange: (id: string) => void;
}

export default function MaterialSelector({
  selectedId,
  onChange,
}: MaterialSelectorProps) {
  const materials = useMemo(() => listMaterials(), []);

  // Kategoriye göre grupla
  const grouped = useMemo(() => {
    const map = new Map<MaterialCategory, typeof materials>();
    for (const mat of materials) {
      const list = map.get(mat.category) ?? [];
      list.push(mat);
      map.set(mat.category, list);
    }
    return map;
  }, [materials]);

  const selectedMaterial = materials.find(m => m.id === selectedId);

  return (
    <div className="space-y-3">
      <label className="block text-xs font-semibold text-steel-700">
        Kesilen Malzeme
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
        {Array.from(grouped.entries()).map(([category, items]) => (
          <optgroup key={category} label={CATEGORY_LABELS[category]}>
            {items.map(mat => (
              <option key={mat.id} value={mat.id}>
                {mat.name}
              </option>
            ))}
          </optgroup>
        ))}
      </select>

      {/* Seçili malzeme özet bilgisi */}
      {selectedMaterial && (
        <div className="grid grid-cols-3 gap-2 mt-2">
          <MiniStat
            label="Aşındırıcılık"
            value={selectedMaterial.abrasiveness}
            max={10}
            color="primary"
          />
          <MiniStat
            label="Sürtünme"
            value={Math.round(selectedMaterial.frictionCoefficient * 10)}
            max={10}
            color="accent"
          />
          <MiniStat
            label="Yapışkanlık"
            value={selectedMaterial.adhesionFactor}
            max={10}
            color="steel"
          />
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Mini İstatistik Bar (malzeme özelliği gösterimi)
// ---------------------------------------------------------------------------

function MiniStat({
  label,
  value,
  max,
  color,
}: {
  label: string;
  value: number;
  max: number;
  color: 'primary' | 'accent' | 'steel';
}) {
  const pct = Math.min(100, (value / max) * 100);
  const bgMap = {
    primary: 'bg-primary-500',
    accent: 'bg-accent-500',
    steel: 'bg-steel-400',
  };
  const trackMap = {
    primary: 'bg-primary-100',
    accent: 'bg-accent-100',
    steel: 'bg-steel-100',
  };

  return (
    <div className="text-center">
      <div className="text-[10px] font-medium text-steel-500 mb-1">{label}</div>
      <div className={`h-1.5 rounded-full ${trackMap[color]} overflow-hidden`}>
        <div
          className={`h-full rounded-full ${bgMap[color]} transition-all duration-500`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="text-xs font-semibold text-steel-700 mt-0.5">
        {value}/{max}
      </div>
    </div>
  );
}
