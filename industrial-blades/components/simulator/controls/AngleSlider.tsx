// =============================================================================
// AngleSlider — Bileme Açısı Kontrolü
// =============================================================================
// Hassas açı ayarı — slider + sayısal input kombinasyonu
// Önerilen açı aralığını görsel olarak işaretler
// =============================================================================

'use client';

import { useCallback, useRef, useEffect, useState } from 'react';

interface AngleSliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  recommendedRange?: readonly [number, number];
  unit?: string;
  description?: string;
}

export default function AngleSlider({
  label,
  value,
  onChange,
  min = 5,
  max = 60,
  step = 0.5,
  recommendedRange,
  unit = '°',
  description,
}: AngleSliderProps) {
  const sliderRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState(String(value));

  // Dışarıdan value değişirse input'u güncelle
  useEffect(() => {
    setInputValue(String(value));
  }, [value]);

  // Slider değişimi
  const handleSliderChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = parseFloat(e.target.value);
      if (!isNaN(v)) onChange(v);
    },
    [onChange]
  );

  // Sayısal input değişimi
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    []
  );

  // Input blur → değeri uygula
  const handleInputBlur = useCallback(() => {
    let v = parseFloat(inputValue);
    if (isNaN(v)) v = value;
    v = Math.max(min, Math.min(max, v));
    // Step'e yuvarla
    v = Math.round(v / step) * step;
    v = parseFloat(v.toFixed(1));
    onChange(v);
    setInputValue(String(v));
  }, [inputValue, value, min, max, step, onChange]);

  // Enter tuşu
  const handleInputKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') handleInputBlur();
    },
    [handleInputBlur]
  );

  // Önerilen aralık gösterimi (slider üzerinde)
  const recLeftPct = recommendedRange
    ? ((recommendedRange[0] - min) / (max - min)) * 100
    : 0;
  const recWidthPct = recommendedRange
    ? ((recommendedRange[1] - recommendedRange[0]) / (max - min)) * 100
    : 0;

  // Mevcut değerin önerilen aralıkta olup olmadığı
  const isInRange =
    recommendedRange &&
    value >= recommendedRange[0] &&
    value <= recommendedRange[1];

  // Slider progress yüzdesi
  const progressPct = ((value - min) / (max - min)) * 100;

  // Stepper: +/- butonları
  const handleDecrement = useCallback(() => {
    const v = Math.max(min, parseFloat((value - step).toFixed(4)));
    onChange(v);
  }, [value, min, step, onChange]);

  const handleIncrement = useCallback(() => {
    const v = Math.min(max, parseFloat((value + step).toFixed(4)));
    onChange(v);
  }, [value, max, step, onChange]);

  return (
    <div className="space-y-2">
      {/* Etiket satırı */}
      <div className="flex items-center justify-between">
        <label className="text-sm font-semibold text-steel-700">{label}</label>
        {description && (
          <span className="text-[10px] text-steel-400 hidden sm:inline">{description}</span>
        )}
      </div>

      {/* Değer göstergesi: −  [input]  + */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={handleDecrement}
          disabled={value <= min}
          className="w-9 h-9 flex items-center justify-center rounded-lg border border-steel-200 bg-steel-50 text-steel-600 hover:bg-steel-100 active:bg-steel-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer text-lg font-semibold select-none"
        >
          −
        </button>
        <div className="flex-1 flex items-center justify-center gap-1 bg-white border border-steel-200 rounded-lg px-3 py-1.5">
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyDown={handleInputKeyDown}
            min={min}
            max={max}
            step={step}
            className="w-16 text-center text-base font-semibold text-steel-800 bg-transparent border-none outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          <span className="text-sm font-medium text-steel-400">{unit}</span>
        </div>
        <button
          type="button"
          onClick={handleIncrement}
          disabled={value >= max}
          className="w-9 h-9 flex items-center justify-center rounded-lg border border-steel-200 bg-steel-50 text-steel-600 hover:bg-steel-100 active:bg-steel-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer text-lg font-semibold select-none"
        >
          +
        </button>
      </div>

      {/* Slider container */}
      <div className="relative pt-1">
        {/* Önerilen aralık göstergesi (slider arkasında) */}
        {recommendedRange && (
          <div
            className="absolute top-[10px] h-2 rounded-full bg-green-100 border border-green-200 z-0"
            style={{
              left: `${recLeftPct}%`,
              width: `${recWidthPct}%`,
            }}
          />
        )}

        {/* Custom slider track (progress) */}
        <div className="absolute top-[10px] left-0 right-0 h-2 rounded-full bg-steel-100 z-0">
          <div
            className={`h-full rounded-full transition-all duration-150 ${
              isInRange ? 'bg-green-500' : 'bg-primary-500'
            }`}
            style={{ width: `${progressPct}%` }}
          />
        </div>

        {/* Native range input */}
        <input
          ref={sliderRef}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleSliderChange}
          className="
            relative z-10 w-full h-2 appearance-none bg-transparent cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-6
            [&::-webkit-slider-thumb]:h-6
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-primary-500
            [&::-webkit-slider-thumb]:shadow-md
            [&::-webkit-slider-thumb]:hover:scale-110
            [&::-webkit-slider-thumb]:transition-transform
            [&::-webkit-slider-thumb]:cursor-grab
            [&::-webkit-slider-thumb]:active:cursor-grabbing
            [&::-moz-range-thumb]:w-6
            [&::-moz-range-thumb]:h-6
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-white
            [&::-moz-range-thumb]:border-2
            [&::-moz-range-thumb]:border-primary-500
            [&::-moz-range-thumb]:shadow-md
            [&::-moz-range-thumb]:cursor-grab
          "
        />
      </div>

      {/* Alt bilgi — Min/Max/Önerilen */}
      <div className="flex items-center justify-between text-[10px] text-steel-400">
        <span>{min}{unit}</span>
        {recommendedRange && (
          <span
            className={`font-medium ${
              isInRange ? 'text-green-600' : 'text-amber-500'
            }`}
          >
            Önerilen: {recommendedRange[0]}–{recommendedRange[1]}{unit}
          </span>
        )}
        <span>{max}{unit}</span>
      </div>
    </div>
  );
}
