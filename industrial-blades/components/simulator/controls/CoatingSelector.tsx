// =============================================================================
// CoatingSelector — Kaplama Seçici
// =============================================================================

'use client';

import { useMemo } from 'react';
import type { CoatingType } from '@/lib/simulator/types';
import { listCoatings, type CoatingInfo } from '@/lib/simulator/engine';

interface CoatingSelectorProps {
  selectedId: CoatingType;
  onChange: (id: CoatingType) => void;
  recommendedCoatings?: CoatingType[];
}

export default function CoatingSelector({
  selectedId,
  onChange,
  recommendedCoatings,
}: CoatingSelectorProps) {
  const coatings = useMemo(() => listCoatings(), []);

  return (
    <div className="space-y-3">
      <label className="block text-xs font-semibold text-steel-700">
        Kaplama
      </label>

      <div className="grid grid-cols-2 gap-2">
        {coatings.map(c => {
          const isRecommended = recommendedCoatings?.includes(c.id);
          const isSelected = c.id === selectedId;

          return (
            <button
              key={c.id}
              type="button"
              onClick={() => onChange(c.id)}
              className={`
                relative px-3 py-2 rounded-lg text-left text-xs
                border-2 transition-all duration-200 cursor-pointer
                hover:shadow-md
                ${
                  isSelected
                    ? 'border-primary-500 bg-primary-50 text-primary-700 shadow-sm'
                    : 'border-steel-200 bg-white text-steel-600 hover:border-steel-300'
                }
              `}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold">{c.name}</span>

              </div>
              <div className="text-[10px] text-steel-400 mt-0.5">
                Sertlik: {c.hardnessHV > 0 ? `${c.hardnessHV} HV` : '—'}
                {' · '}
                Sürtünme: ×{c.frictionReduction.toFixed(2)}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
