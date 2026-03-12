// =============================================================================
// BevelTypeSelector — Bileme Tipi Seçici
// =============================================================================
// Görsel SVG ikonlarıyla bileme tipini seçer.
// =============================================================================

'use client';

import { useMemo } from 'react';
import type { BevelType } from '@/lib/simulator/types';
import { listBevelTypes, type BevelTypeInfo } from '@/lib/simulator/engine';

interface BevelTypeSelectorProps {
  selectedId: BevelType;
  onChange: (id: BevelType) => void;
}

/** Mini SVG ikon — bileme tipi görselleştirmesi */
function BevelIcon({ type, size = 32 }: { type: BevelType; size?: number }) {
  const s = size;
  const mid = s / 2;

  // Her bileme tipi için basit kesit SVG
  const paths: Record<BevelType, string> = {
    double: `M${mid},2 L${s - 4},${s - 2} L4,${s - 2} Z`, // V-şekli
    single: `M${mid},2 L${s - 4},${s - 2} L4,${s - 2} L4,2 Z`, // Tek taraflı
    compound: `M${mid},2 L${mid + 6},${mid - 2} L${s - 4},${s - 2} L4,${s - 2} L${mid - 6},${mid - 2} Z`, // Çift açılı
    hollow: `M${mid},2 Q${mid + 10},${mid} ${s - 4},${s - 2} L4,${s - 2} Q${mid - 10},${mid} ${mid},2 Z`, // İçbükey
    convex: `M${mid},2 Q${mid - 8},${mid} 4,${s - 2} L${s - 4},${s - 2} Q${mid + 8},${mid} ${mid},2 Z`, // Dışbükey
    flat: `M${mid - 3},2 L${s - 4},${s - 2} L4,${s - 2} L${mid + 3},2 Z`, // Düz
  };

  return (
    <svg
      width={s}
      height={s}
      viewBox={`0 0 ${s} ${s}`}
      className="flex-shrink-0"
    >
      <path
        d={paths[type]}
        fill="currentColor"
        opacity={0.15}
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BevelTypeSelector({
  selectedId,
  onChange,
}: BevelTypeSelectorProps) {
  const bevelTypes = useMemo(() => listBevelTypes(), []);

  return (
    <div className="space-y-3">
      <label className="block text-xs font-semibold text-steel-700">
        Bileme Tipi
      </label>

      <div className="grid grid-cols-2 gap-1.5">
        {bevelTypes.map(bt => (
          <button
            key={bt.id}
            type="button"
            onClick={() => onChange(bt.id)}
            className={`
              flex items-center gap-2 px-2.5 py-2 rounded-lg
              border transition-all duration-150 cursor-pointer
              ${
                bt.id === selectedId
                  ? 'border-primary-500 bg-primary-50 text-primary-600'
                  : 'border-steel-200 bg-white text-steel-500 hover:border-steel-300 hover:bg-steel-50/50'
              }
            `}
            title={bt.description}
          >
            <BevelIcon type={bt.id} size={24} />
            <span className="text-[10px] font-semibold leading-snug">
              {bt.name}
            </span>
          </button>
        ))}
      </div>

      {/* Seçili bileme tipi açıklaması */}
      {(() => {
        const sel = bevelTypes.find(bt => bt.id === selectedId);
        if (!sel) return null;
        return (
          <p className="text-xs text-steel-500 mt-1">
            {sel.description}
          </p>
        );
      })()}
    </div>
  );
}
