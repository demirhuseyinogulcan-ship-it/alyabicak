'use client';

/**
 * Blade Configurator - Main Interactive Component
 * 4-step wizard: Category -> Dimensions -> Specifications -> Review
 * 
 * Professional blade specification tool for customers.
 * Generates PDF specification sheets and quote requests.
 */

import { useState, useCallback } from 'react';
import type {
  BladeCategory,
  BladeConfiguratorDict,
  WizardStep,
  MaterialSpec,
  EdgeType,
  BevelType,
  ToleranceClass,
} from '@/lib/blade-configurator/types';
import { CATEGORIES, getDimensionFields } from '@/lib/blade-configurator/categories';
import type { DimensionField } from '@/lib/blade-configurator/categories';
import BladeSchematic from './BladeSchematic';

// ─── Props ──────────────────────────────────────────────────────────────────

interface BladeConfiguratorProps {
  dict: BladeConfiguratorDict;
  locale: string;
}

// ─── Default Material Spec ──────────────────────────────────────────────────

const DEFAULT_MATERIAL: MaterialSpec = {
  material: '',
  hardness: '',
  coating: 'none',
  surfaceFinish: 'standard',
  toleranceClass: 'standard',
  customTolerance: '',
  edgeType: 'plain',
  bevelType: 'none',
  quantity: 1,
  notes: '',
};

// ─── Select Options ─────────────────────────────────────────────────────────

const MATERIAL_OPTIONS = [
  { value: 'carbonSteel', labelKey: 'matCarbonSteel' },
  { value: 'stainlessSteel', labelKey: 'matStainlessSteel' },
  { value: 'toolSteel', labelKey: 'matToolSteel' },
  { value: 'hss', labelKey: 'matHSS' },
  { value: 'tungstenCarbide', labelKey: 'matTungstenCarbide' },
  { value: 'ceramic', labelKey: 'matCeramic' },
  { value: 'other', labelKey: 'matOther' },
];

const COATING_OPTIONS = [
  { value: 'none', labelKey: 'coatingNone' },
  { value: 'tin', labelKey: 'coatingTiN' },
  { value: 'ticn', labelKey: 'coatingTiCN' },
  { value: 'tialn', labelKey: 'coatingTiAlN' },
  { value: 'chrome', labelKey: 'coatingChrome' },
  { value: 'nickel', labelKey: 'coatingNickel' },
  { value: 'other', labelKey: 'coatingOther' },
];

const FINISH_OPTIONS = [
  { value: 'standard', labelKey: 'finishStandard' },
  { value: 'ground', labelKey: 'finishGround' },
  { value: 'polished', labelKey: 'finishPolished' },
  { value: 'mirror', labelKey: 'finishMirror' },
];

const TOLERANCE_OPTIONS = [
  { value: 'standard', labelKey: 'tolStandard' },
  { value: 'precision', labelKey: 'tolPrecision' },
  { value: 'custom', labelKey: 'tolCustom' },
];

const EDGE_OPTIONS: { value: EdgeType; labelKey: string }[] = [
  { value: 'plain', labelKey: 'edgePlain' },
  { value: 'serrated', labelKey: 'edgeSerrated' },
  { value: 'wavy', labelKey: 'edgeWavy' },
  { value: 'perforating', labelKey: 'edgePerforating' },
  { value: 'scalloped', labelKey: 'edgeScalloped' },
  { value: 'zigzag', labelKey: 'edgeZigzag' },
];

const BEVEL_OPTIONS: { value: BevelType; labelKey: string }[] = [
  { value: 'none', labelKey: 'bevelNone' },
  { value: 'single', labelKey: 'bevelSingle' },
  { value: 'double', labelKey: 'bevelDouble' },
  { value: 'hollow', labelKey: 'bevelHollow' },
];

// ─── Step Labels ────────────────────────────────────────────────────────────

const STEP_KEYS: Record<WizardStep, string> = {
  1: 'step1',
  2: 'step2',
  3: 'step3',
  4: 'step4',
};

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export default function BladeConfigurator({ dict, locale }: BladeConfiguratorProps) {
  const [step, setStep] = useState<WizardStep>(1);
  const [category, setCategory] = useState<BladeCategory | null>(null);
  const [dimensions, setDimensions] = useState<Record<string, number | string>>({});
  const [materialSpec, setMaterialSpec] = useState<MaterialSpec>({ ...DEFAULT_MATERIAL });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  // Quote form state
  const [quoteName, setQuoteName] = useState('');
  const [quoteEmail, setQuoteEmail] = useState('');
  const [quotePhone, setQuotePhone] = useState('');
  const [quoteCompany, setQuoteCompany] = useState('');
  const [quoteMessage, setQuoteMessage] = useState('');

  const t = useCallback((key: string) => dict[key] || key, [dict]);

  // ── Navigation ──
  const canGoNext = (): boolean => {
    if (step === 1) return category !== null;
    if (step === 2) {
      if (!category) return false;
      const fields = getDimensionFields(category);
      const required = fields.filter(f => f.required);
      return required.every(f => {
        const v = dimensions[f.key];
        return v !== undefined && v !== '' && v !== 0;
      });
    }
    return true;
  };

  const goNext = () => {
    if (step < 4 && canGoNext()) setStep((s) => (s + 1) as WizardStep);
  };

  const goBack = () => {
    if (step > 1) setStep((s) => (s - 1) as WizardStep);
  };

  const resetAll = () => {
    setStep(1);
    setCategory(null);
    setDimensions({});
    setMaterialSpec({ ...DEFAULT_MATERIAL });
    setFocusedField(null);
    setShowQuoteForm(false);
    setQuoteSubmitted(false);
  };

  // ── Dimension handlers ──
  const updateDimension = (key: string, value: number | string) => {
    setDimensions(prev => ({ ...prev, [key]: value }));
  };

  // ── Material spec handlers ──
  const updateSpec = <K extends keyof MaterialSpec>(key: K, value: MaterialSpec[K]) => {
    setMaterialSpec(prev => ({ ...prev, [key]: value }));
  };

  // ── PDF Export ──
  const handleExportPdf = async () => {
    if (!category) return;
    const { exportBladeSpecPdf } = await import('@/lib/blade-configurator/pdf-spec');
    await exportBladeSpecPdf(
      { category, dimensions, material: materialSpec },
      dict,
    );
  };

  // ── Quote Submit ──
  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Fake success (contact form disabled pattern)
    setQuoteSubmitted(true);
    setTimeout(() => {
      setShowQuoteForm(false);
      setQuoteSubmitted(false);
    }, 3000);
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDER
  // ═══════════════════════════════════════════════════════════════════════════

  return (
    <div className="min-h-screen bg-steel-50">
      {/* ── Header ── */}
      <div className="bg-steel-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold font-montserrat">
            {t('pageTitle')}
          </h1>
          <p className="mt-2 text-steel-300 text-sm sm:text-base">
            {t('pageSubtitle')}
          </p>
        </div>
      </div>

      {/* ── Step Indicator ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex items-center justify-between mb-8">
          {([1, 2, 3, 4] as WizardStep[]).map((s) => (
            <div key={s} className="flex items-center flex-1">
              <div
                className={`
                  flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold transition-colors
                  ${s === step ? 'bg-primary text-white' : s < step ? 'bg-primary/20 text-primary' : 'bg-steel-200 text-steel-400'}
                `}
              >
                {s < step ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  s
                )}
              </div>
              <span className={`ml-2 text-xs sm:text-sm font-medium hidden sm:block ${s === step ? 'text-steel-900' : 'text-steel-400'}`}>
                {t(STEP_KEYS[s])}
              </span>
              {s < 4 && (
                <div className={`flex-1 h-0.5 mx-3 ${s < step ? 'bg-primary/30' : 'bg-steel-200'}`} />
              )}
            </div>
          ))}
        </div>

        {/* ── Step Content ── */}
        <div className="bg-white rounded-lg shadow-sm border border-steel-200 overflow-hidden">

          {/* ═══ STEP 1: Category Selection ═══ */}
          {step === 1 && (
            <div className="p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-steel-900 mb-2">
                {t('selectCategory')}
              </h2>
              <p className="text-sm text-steel-500 mb-6">{t('selectCategoryHelp')}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setCategory(cat.id);
                      setDimensions({});
                    }}
                    className={`
                      group relative p-5 rounded-lg border-2 text-left transition-all
                      ${category === cat.id
                        ? 'border-primary bg-primary/5 shadow-md'
                        : 'border-steel-200 hover:border-steel-300 hover:shadow-sm'
                      }
                    `}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`
                        w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0
                        ${category === cat.id ? 'bg-primary text-white' : 'bg-steel-100 text-steel-500 group-hover:bg-steel-200'}
                      `}>
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d={cat.icon} />
                        </svg>
                      </div>
                      <div>
                        <h3 className={`font-semibold text-sm ${category === cat.id ? 'text-primary' : 'text-steel-800'}`}>
                          {t(cat.titleKey)}
                        </h3>
                        <p className="text-xs text-steel-500 mt-1 leading-relaxed">
                          {t(cat.descKey)}
                        </p>
                      </div>
                    </div>
                    {category === cat.id && (
                      <div className="absolute top-3 right-3">
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ═══ STEP 2: Dimensions ═══ */}
          {step === 2 && category && (
            <div className="p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-steel-900 mb-1">
                {t('step2')} - {t(`${category}Title`)}
              </h2>
              <p className="text-sm text-steel-500 mb-6">{t('dimensionsHelp')}</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* SVG Schematic */}
                <div className="order-2 lg:order-1 bg-steel-50 rounded-lg p-4 border border-steel-200">
                  <BladeSchematic
                    category={category}
                    focusedField={focusedField}
                    dimensions={dimensions}
                    dict={dict}
                  />
                </div>

                {/* Dimension Form */}
                <div className="order-1 lg:order-2 space-y-4">
                  {getDimensionFields(category).map((field: DimensionField) => (
                    <div key={field.key}>
                      <label className="flex items-center gap-2 text-sm font-medium text-steel-700 mb-1.5">
                        {field.schematicLabel && (
                          <span className={`
                            inline-flex items-center justify-center w-5 h-5 rounded text-xs font-bold
                            ${focusedField === field.key ? 'bg-primary text-white' : 'bg-steel-200 text-steel-600'}
                          `}>
                            {field.schematicLabel}
                          </span>
                        )}
                        {t(field.labelKey)}
                        {field.required && <span className="text-red-500 text-xs">*</span>}
                        {field.unit && <span className="text-steel-400 text-xs">({field.unit})</span>}
                      </label>

                      {field.type === 'number' && (
                        <input
                          type="number"
                          value={dimensions[field.key] ?? ''}
                          onChange={(e) => updateDimension(field.key, e.target.value ? parseFloat(e.target.value) : '')}
                          onFocus={() => setFocusedField(field.key)}
                          onBlur={() => setFocusedField(null)}
                          min={field.min}
                          max={field.max}
                          step={field.step}
                          placeholder={field.placeholder}
                          className={`
                            w-full px-3 py-2 rounded-lg border text-sm transition-colors
                            ${focusedField === field.key
                              ? 'border-primary ring-2 ring-primary/20'
                              : 'border-steel-300 hover:border-steel-400'
                            }
                            focus:outline-none bg-white
                          `}
                        />
                      )}

                      {field.type === 'text' && (
                        <input
                          type="text"
                          value={dimensions[field.key] ?? ''}
                          onChange={(e) => updateDimension(field.key, e.target.value)}
                          onFocus={() => setFocusedField(field.key)}
                          onBlur={() => setFocusedField(null)}
                          placeholder={field.placeholder}
                          className="w-full px-3 py-2 rounded-lg border border-steel-300 hover:border-steel-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none text-sm bg-white transition-colors"
                        />
                      )}

                      {field.type === 'select' && field.options && (
                        <select
                          value={dimensions[field.key] ?? ''}
                          onChange={(e) => updateDimension(field.key, e.target.value)}
                          onFocus={() => setFocusedField(field.key)}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-3 py-2 rounded-lg border border-steel-300 hover:border-steel-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none text-sm bg-white transition-colors"
                        >
                          <option value="">--</option>
                          {field.options.map((opt) => (
                            <option key={opt.value} value={opt.value}>{t(opt.labelKey)}</option>
                          ))}
                        </select>
                      )}

                      {field.type === 'textarea' && (
                        <textarea
                          value={dimensions[field.key] ?? ''}
                          onChange={(e) => updateDimension(field.key, e.target.value)}
                          onFocus={() => setFocusedField(field.key)}
                          onBlur={() => setFocusedField(null)}
                          rows={3}
                          className="w-full px-3 py-2 rounded-lg border border-steel-300 hover:border-steel-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none text-sm bg-white transition-colors resize-none"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ═══ STEP 3: Material & Specifications ═══ */}
          {step === 3 && (
            <div className="p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-steel-900 mb-1">
                {t('step3')}
              </h2>
              <p className="text-sm text-steel-500 mb-6">{t('specsHelp')}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
                {/* Material */}
                <div>
                  <label className="block text-sm font-medium text-steel-700 mb-1.5">{t('material')}</label>
                  <select
                    value={materialSpec.material}
                    onChange={(e) => updateSpec('material', e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-steel-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none text-sm bg-white"
                  >
                    <option value="">--</option>
                    {MATERIAL_OPTIONS.map(o => (
                      <option key={o.value} value={o.value}>{t(o.labelKey)}</option>
                    ))}
                  </select>
                </div>

                {/* Hardness */}
                <div>
                  <label className="block text-sm font-medium text-steel-700 mb-1.5">{t('hardness')}</label>
                  <input
                    type="text"
                    value={materialSpec.hardness}
                    onChange={(e) => updateSpec('hardness', e.target.value)}
                    placeholder="48-52 HRC"
                    className="w-full px-3 py-2 rounded-lg border border-steel-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none text-sm bg-white"
                  />
                </div>

                {/* Coating */}
                <div>
                  <label className="block text-sm font-medium text-steel-700 mb-1.5">{t('coating')}</label>
                  <select
                    value={materialSpec.coating}
                    onChange={(e) => updateSpec('coating', e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-steel-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none text-sm bg-white"
                  >
                    {COATING_OPTIONS.map(o => (
                      <option key={o.value} value={o.value}>{t(o.labelKey)}</option>
                    ))}
                  </select>
                </div>

                {/* Surface Finish */}
                <div>
                  <label className="block text-sm font-medium text-steel-700 mb-1.5">{t('surfaceFinish')}</label>
                  <select
                    value={materialSpec.surfaceFinish}
                    onChange={(e) => updateSpec('surfaceFinish', e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-steel-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none text-sm bg-white"
                  >
                    {FINISH_OPTIONS.map(o => (
                      <option key={o.value} value={o.value}>{t(o.labelKey)}</option>
                    ))}
                  </select>
                </div>

                {/* Tolerance */}
                <div>
                  <label className="block text-sm font-medium text-steel-700 mb-1.5">{t('toleranceClass')}</label>
                  <select
                    value={materialSpec.toleranceClass}
                    onChange={(e) => updateSpec('toleranceClass', e.target.value as ToleranceClass)}
                    className="w-full px-3 py-2 rounded-lg border border-steel-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none text-sm bg-white"
                  >
                    {TOLERANCE_OPTIONS.map(o => (
                      <option key={o.value} value={o.value}>{t(o.labelKey)}</option>
                    ))}
                  </select>
                </div>

                {/* Custom Tolerance (conditional) */}
                {materialSpec.toleranceClass === 'custom' && (
                  <div>
                    <label className="block text-sm font-medium text-steel-700 mb-1.5">{t('customTolerance')}</label>
                    <input
                      type="text"
                      value={materialSpec.customTolerance}
                      onChange={(e) => updateSpec('customTolerance', e.target.value)}
                      placeholder="+0.025 / -0.000"
                      className="w-full px-3 py-2 rounded-lg border border-steel-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none text-sm bg-white"
                    />
                  </div>
                )}

                {/* Edge Type */}
                <div>
                  <label className="block text-sm font-medium text-steel-700 mb-1.5">{t('edgeType')}</label>
                  <select
                    value={materialSpec.edgeType}
                    onChange={(e) => updateSpec('edgeType', e.target.value as EdgeType)}
                    className="w-full px-3 py-2 rounded-lg border border-steel-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none text-sm bg-white"
                  >
                    {EDGE_OPTIONS.map(o => (
                      <option key={o.value} value={o.value}>{t(o.labelKey)}</option>
                    ))}
                  </select>
                </div>

                {/* Bevel Type */}
                <div>
                  <label className="block text-sm font-medium text-steel-700 mb-1.5">{t('bevelType')}</label>
                  <select
                    value={materialSpec.bevelType}
                    onChange={(e) => updateSpec('bevelType', e.target.value as BevelType)}
                    className="w-full px-3 py-2 rounded-lg border border-steel-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none text-sm bg-white"
                  >
                    {BEVEL_OPTIONS.map(o => (
                      <option key={o.value} value={o.value}>{t(o.labelKey)}</option>
                    ))}
                  </select>
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-sm font-medium text-steel-700 mb-1.5">{t('quantity')}</label>
                  <input
                    type="number"
                    value={materialSpec.quantity}
                    onChange={(e) => updateSpec('quantity', parseInt(e.target.value) || 1)}
                    min={1}
                    className="w-full px-3 py-2 rounded-lg border border-steel-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none text-sm bg-white"
                  />
                </div>

                {/* Notes - full width */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-steel-700 mb-1.5">{t('notes')}</label>
                  <textarea
                    value={materialSpec.notes}
                    onChange={(e) => updateSpec('notes', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 rounded-lg border border-steel-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none text-sm bg-white resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* ═══ STEP 4: Review & Submit ═══ */}
          {step === 4 && category && (
            <div className="p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-steel-900 mb-6">
                {t('reviewTitle')}
              </h2>

              <div className="space-y-6 max-w-3xl">
                {/* Blade Type */}
                <div className="bg-steel-50 rounded-lg p-4 border border-steel-200">
                  <h3 className="text-sm font-semibold text-steel-600 uppercase tracking-wide mb-2">
                    {t('reviewBladeType')}
                  </h3>
                  <p className="text-lg font-bold text-steel-900">
                    {t(`${category}Title`)}
                  </p>
                </div>

                {/* Dimensions Summary */}
                <div className="bg-steel-50 rounded-lg p-4 border border-steel-200">
                  <h3 className="text-sm font-semibold text-steel-600 uppercase tracking-wide mb-3">
                    {t('reviewDimensions')}
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {getDimensionFields(category).map((field: DimensionField) => {
                      const val = dimensions[field.key];
                      if (val === undefined || val === '' || val === 0) return null;
                      return (
                        <div key={field.key} className="flex justify-between py-1 px-2 rounded bg-white">
                          <span className="text-sm text-steel-600">{t(field.labelKey)}</span>
                          <span className="text-sm font-semibold text-steel-900">
                            {val}{field.unit ? ` ${field.unit}` : ''}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Specifications Summary */}
                <div className="bg-steel-50 rounded-lg p-4 border border-steel-200">
                  <h3 className="text-sm font-semibold text-steel-600 uppercase tracking-wide mb-3">
                    {t('reviewSpecifications')}
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: t('material'), value: materialSpec.material ? t(`mat${cap(materialSpec.material)}`) : '-' },
                      { label: t('hardness'), value: materialSpec.hardness || '-' },
                      { label: t('coating'), value: t(`coating${cap(materialSpec.coating)}`) },
                      { label: t('surfaceFinish'), value: t(`finish${cap(materialSpec.surfaceFinish)}`) },
                      { label: t('toleranceClass'), value: t(`tol${cap(materialSpec.toleranceClass)}`) },
                      { label: t('edgeType'), value: t(`edge${cap(materialSpec.edgeType)}`) },
                      { label: t('bevelType'), value: t(`bevel${cap(materialSpec.bevelType)}`) },
                    ].map((row, i) => (
                      <div key={i} className="flex justify-between py-1 px-2 rounded bg-white">
                        <span className="text-sm text-steel-600">{row.label}</span>
                        <span className="text-sm font-semibold text-steel-900">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quantity & Notes */}
                <div className="bg-steel-50 rounded-lg p-4 border border-steel-200">
                  <h3 className="text-sm font-semibold text-steel-600 uppercase tracking-wide mb-2">
                    {t('reviewQuantityNotes')}
                  </h3>
                  <p className="text-sm text-steel-900">
                    <span className="font-semibold">{t('quantity')}:</span> {materialSpec.quantity} {t('pcs')}
                  </p>
                  {materialSpec.notes && (
                    <p className="text-sm text-steel-700 mt-1">
                      <span className="font-semibold">{t('notes')}:</span> {materialSpec.notes}
                    </p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <button
                    onClick={handleExportPdf}
                    className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {t('downloadPdf')}
                  </button>

                  <button
                    onClick={() => setShowQuoteForm(true)}
                    className="flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-lg font-medium text-sm hover:bg-accent/90 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {t('requestQuote')}
                  </button>

                  <button
                    onClick={resetAll}
                    className="flex items-center gap-2 px-5 py-2.5 border border-steel-300 text-steel-600 rounded-lg font-medium text-sm hover:bg-steel-50 transition-colors"
                  >
                    {t('resetAll')}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ── Navigation Footer ── */}
          {step !== 4 && (
            <div className="px-6 sm:px-8 py-4 bg-steel-50 border-t border-steel-200 flex justify-between">
              <button
                onClick={goBack}
                disabled={step === 1}
                className="px-5 py-2 rounded-lg text-sm font-medium text-steel-600 hover:bg-steel-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                {t('back')}
              </button>
              <button
                onClick={goNext}
                disabled={!canGoNext()}
                className="px-5 py-2 rounded-lg text-sm font-medium bg-primary text-white hover:bg-primary/90 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                {t('next')}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ── Quote Modal ── */}
      {showQuoteForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative">
            <button
              onClick={() => setShowQuoteForm(false)}
              className="absolute top-4 right-4 text-steel-400 hover:text-steel-600"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-lg font-bold text-steel-900 mb-4">{t('quoteTitle')}</h3>

            {quoteSubmitted ? (
              <div className="text-center py-8">
                <svg className="w-12 h-12 text-green-500 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-steel-700">{t('quoteSuccess')}</p>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit} className="space-y-3">
                <input
                  type="text"
                  value={quoteName}
                  onChange={(e) => setQuoteName(e.target.value)}
                  placeholder={t('quoteName')}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-steel-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none text-sm"
                />
                <input
                  type="email"
                  value={quoteEmail}
                  onChange={(e) => setQuoteEmail(e.target.value)}
                  placeholder={t('quoteEmail')}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-steel-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none text-sm"
                />
                <input
                  type="tel"
                  value={quotePhone}
                  onChange={(e) => setQuotePhone(e.target.value)}
                  placeholder={t('quotePhone')}
                  className="w-full px-3 py-2 rounded-lg border border-steel-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none text-sm"
                />
                <input
                  type="text"
                  value={quoteCompany}
                  onChange={(e) => setQuoteCompany(e.target.value)}
                  placeholder={t('quoteCompany')}
                  className="w-full px-3 py-2 rounded-lg border border-steel-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none text-sm"
                />
                <textarea
                  value={quoteMessage}
                  onChange={(e) => setQuoteMessage(e.target.value)}
                  placeholder={t('quoteMessage')}
                  rows={3}
                  className="w-full px-3 py-2 rounded-lg border border-steel-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none text-sm resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-primary text-white rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors"
                >
                  {t('quoteSend')}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Utility ────────────────────────────────────────────────────────────────

function cap(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
