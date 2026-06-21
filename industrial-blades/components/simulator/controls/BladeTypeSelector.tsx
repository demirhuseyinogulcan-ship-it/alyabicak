// =============================================================================
// BladeTypeSelector — Bıçak Tipi Seçici
// =============================================================================

'use client';

import { useMemo } from 'react';
import type { BladeType } from '@/lib/simulator/types';
import { listBladeTypes, type BladeTypeInfo } from '@/lib/simulator/engine';

interface BladeTypeSelectorProps {
  selectedId: BladeType;
  onChange: (id: BladeType) => void;
  compatibleTypes?: BladeType[];
}

export default function BladeTypeSelector({
  selectedId,
  onChange,
  compatibleTypes,
}: BladeTypeSelectorProps) {
  const allTypes = useMemo(() => listBladeTypes(), []);

  const displayTypes = useMemo(() => {
    if (!compatibleTypes || compatibleTypes.length === 0) return allTypes;
    return allTypes.filter(bt => compatibleTypes.includes(bt.id));
  }, [allTypes, compatibleTypes]);

  const selected = allTypes.find(bt => bt.id === selectedId);

  return (
    <div className="space-y-3">
      <label className="block text-xs font-semibold text-steel-700">
        Bıçak Tipi
      </label>

      <div className="grid grid-cols-1 gap-1.5">
        {displayTypes.map(bt => (
          <BladeTypeCard
            key={bt.id}
            info={bt}
            isSelected={bt.id === selectedId}
            onClick={() => onChange(bt.id)}
          />
        ))}
      </div>

      {/* Seçili bıçak detay bilgisi */}
      {selected && (
        <div className="mt-2 p-3 rounded-lg bg-steel-50 border border-steel-100">
          <div className="text-xs font-medium text-steel-600 mb-1">
            {selected.name}
          </div>
          <div className="flex items-center gap-3 text-[11px] text-steel-500">
            <span>Varsayılan açı: <strong className="text-steel-700">{selected.defaultAngle}°</strong></span>
            <span>Bileme: <strong className="text-steel-700">{selected.defaultBevel}</strong></span>
            <span>Kalınlık: <strong className="text-steel-700">{selected.defaultThickness} mm</strong></span>
          </div>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Bıçak Tipi Kart Bileşeni
// ---------------------------------------------------------------------------

function BladeTypeCard({
  info,
  isSelected,
  onClick,
}: {
  info: BladeTypeInfo;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        flex items-center gap-2.5 px-3 py-2 rounded-lg text-left text-xs
        border transition-all duration-150 cursor-pointer
        ${
          isSelected
            ? 'border-primary-500 bg-primary-50 text-primary-700 ring-1 ring-primary-200'
            : 'border-steel-200 bg-white text-steel-600 hover:border-steel-300 hover:bg-steel-50/50'
        }
      `}
    >
      {isSelected && (
        <div className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
      )}
      <span className="font-semibold flex-1 leading-snug">{info.name}</span>
      <span className="text-[10px] text-steel-400 shrink-0">{info.defaultAngle}°</span>
    </button>
  );
}
