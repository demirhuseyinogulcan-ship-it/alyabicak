'use client'

/**
 * BladeEngineer - Ana Interaktif Komponent
 * 7 geometri + parametrik form + canli canvas onizleme + PDF export
 */

import { useState, useRef, useEffect, useCallback } from 'react'
import type {
  BladeGeometry,
  BladeSpec,
  CanvasState,
  WizardStep,
  EdgeType,
  BevelType,
  ToothProfile,
  ParamField,
} from '@/lib/blade-engineer/types'
import {
  getDefaultParams,
  getFieldsForGeometry,
  GEOMETRY_LIST,
} from '@/lib/blade-engineer/geometry-config'
import { renderBlade } from '@/lib/blade-engineer/canvas-renderer'

// ---- i18n dict type ----
interface BladeDict {
  pageTitle: string
  pageSubtitle: string
  step1: string
  step2: string
  step3: string
  step4: string
  step5: string
  selectGeometry: string
  dimensions: string
  edge: string
  mounting: string
  preview: string
  edgeType: string
  toothPitch: string
  toothDepth: string
  toothAngle: string
  applySides: string
  exportPdf: string
  exportPng: string
  requestQuote: string
  resetAll: string
  zoomIn: string
  zoomOut: string
  fitToView: string
  toggleGrid: string
  toggleDimensions: string
  toggleCenterLines: string
  back: string
  next: string
  material: string
  hardness: string
  coating: string
  notes: string
  bladeName: string
  // Geometry labels
  circularLabel: string
  circularDesc: string
  rectangularLabel: string
  rectangularDesc: string
  oblongLabel: string
  oblongDesc: string
  trapezoidLabel: string
  trapezoidDesc: string
  triangularLabel: string
  triangularDesc: string
  hookLabel: string
  hookDesc: string
  customLabel: string
  customDesc: string
  // Param labels
  outerDiameter: string
  innerDiameter: string
  thickness: string
  bevelAngle: string
  bevelType: string
  dishAngle: string
  length: string
  width: string
  cornerRadius: string
  holeCount: string
  holeSpacing: string
  holeDiameter: string
  hasSlot: string
  cornerShape: string
  topWidth: string
  bottomWidth: string
  height: string
  notchCount: string
  baseWidth: string
  tipAngle: string
  shankType: string
  shankDiameter: string
  overallLength: string
  overallWidth: string
  hookDepth: string
  curveRadius: string
  hasBackEdge: string
  mountingType: string
  boundingWidth: string
  boundingHeight: string
  sideCount: string
  circumscribedDiameter: string
  centerHoleDiameter: string
  // Select options
  bevelNone: string
  bevelSingle: string
  bevelDouble: string
  bevelHollow: string
  noHoles: string
  twoHoles: string
  threeHoles: string
  cornerSquare: string
  cornerRounded: string
  cornerAngled: string
  noNotches: string
  oneNotch: string
  twoNotches: string
  threeNotches: string
  shankNone: string
  shankRound: string
  shankFlat: string
  mountNotch: string
  mountTang: string
  mountHole: string
  // Edge types
  edgePlain: string
  edgeSerrated: string
  edgeWavy: string
  edgePerforating: string
  edgeScalloped: string
  edgeZigzag: string
  // Quote form
  quoteTitle: string
  quoteName: string
  quoteEmail: string
  quotePhone: string
  quoteCompany: string
  quoteQuantity: string
  quoteMessage: string
  quoteSend: string
  quoteSuccess: string
  [key: string]: string
}

// ---- STEPS ----
const STEPS: WizardStep[] = ['geometry', 'parameters', 'edge', 'preview']

// ---- DEFAULT CANVAS STATE ----
const DEFAULT_CANVAS: CanvasState = {
  zoom: 1,
  panX: 0,
  panY: 0,
  showGrid: true,
  showDimensions: true,
  showCenterLines: true,
  snapToGrid: true,
  gridSpacing: 5,
  selectedElement: null,
  isDragging: false,
  dragTarget: null,
}

// =============================================================================
// ANA KOMPONENT
// =============================================================================

interface Props {
  dict: BladeDict
  locale: string
}

export default function BladeEngineer({ dict, locale }: Props) {
  // ---- STATE ----
  const [step, setStep] = useState<WizardStep>('geometry')
  const [geometry, setGeometry] = useState<BladeGeometry | null>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [params, setParams] = useState<any>(null)
  const [edgeProfile, setEdgeProfile] = useState<ToothProfile | null>(null)
  const [canvasState, setCanvasState] = useState<CanvasState>(DEFAULT_CANVAS)
  const [bladeName, setBladeName] = useState('')
  const [material, setMaterial] = useState('')
  const [hardness, setHardness] = useState('')
  const [showQuoteForm, setShowQuoteForm] = useState(false)
  const [quoteSubmitted, setQuoteSubmitted] = useState(false)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // ---- CANVAS RESIZE ----
  const updateCanvasSize = useCallback(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const rect = container.getBoundingClientRect()
    const dpr = window.devicePixelRatio || 1
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    canvas.style.width = `${rect.width}px`
    canvas.style.height = `${rect.height}px`

    const ctx = canvas.getContext('2d')
    if (ctx) ctx.scale(dpr, dpr)
  }, [])

  useEffect(() => {
    updateCanvasSize()
    window.addEventListener('resize', updateCanvasSize)
    return () => window.removeEventListener('resize', updateCanvasSize)
  }, [updateCanvasSize])

  // ---- CANVAS RENDER ----
  useEffect(() => {
    if (!geometry || !params) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const width = canvas.width / dpr
    const height = canvas.height / dpr

    renderBlade(ctx, {
      geometry,
      params,
      edgeProfile: edgeProfile || undefined,
      canvasState,
      width,
      height,
    })
  }, [geometry, params, edgeProfile, canvasState])

  // ---- MOUSE INTERACTION (pan & zoom) ----
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button === 0 || e.button === 1) {
      setDragStart({ x: e.clientX - canvasState.panX, y: e.clientY - canvasState.panY })
    }
  }
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragStart) return
    setCanvasState(prev => ({
      ...prev,
      panX: e.clientX - dragStart.x,
      panY: e.clientY - dragStart.y,
    }))
  }
  const handleMouseUp = () => setDragStart(null)

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? 0.9 : 1.1
    setCanvasState(prev => ({
      ...prev,
      zoom: Math.min(10, Math.max(0.1, prev.zoom * delta)),
    }))
  }

  // ---- GEOMETRY SELECTION ----
  const handleSelectGeometry = (geo: BladeGeometry) => {
    setGeometry(geo)
    setParams(getDefaultParams(geo))
    setEdgeProfile(null)
    setCanvasState(DEFAULT_CANVAS)
    setStep('parameters')
  }

  // ---- PARAM UPDATE ----
  const handleParamChange = (key: string, value: number | string | boolean) => {
    setParams((prev: Record<string, unknown>) => ({ ...prev, [key]: value }))
  }

  // ---- EDGE PROFILE ----
  const handleEdgeTypeChange = (type: EdgeType) => {
    if (type === 'plain') {
      setEdgeProfile(null)
    } else {
      setEdgeProfile(prev => ({
        type,
        pitch: prev?.pitch || 5,
        depth: prev?.depth || 2,
        angle: prev?.angle || 60,
        sides: prev?.sides || ['top'],
      }))
    }
  }

  // ---- NAVIGATION ----
  const stepIndex = STEPS.indexOf(step)
  const canGoBack = stepIndex > 0
  const canGoNext = stepIndex < STEPS.length - 1 && (step !== 'geometry' || geometry !== null)

  const goBack = () => {
    if (canGoBack) setStep(STEPS[stepIndex - 1])
  }
  const goNext = () => {
    if (canGoNext) setStep(STEPS[stepIndex + 1])
  }

  // ---- PDF EXPORT ----
  const handleExportPdf = async () => {
    if (!geometry || !params) return
    const { exportBladeAsPdf } = await import('@/lib/blade-engineer/pdf-export')
    const spec: BladeSpec = {
      id: crypto.randomUUID(),
      name: bladeName || dict[`${geometry}Label`] || '',
      geometry,
      params,
      edgeProfile: edgeProfile || undefined,
      material,
      hardness,
      createdAt: new Date(),
    }
    exportBladeAsPdf({
      spec,
      locale,
      canvasElement: canvasRef.current || undefined,
    })
  }

  // ---- PNG EXPORT ----
  const handleExportPng = async () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const { exportCanvasAsPng } = await import('@/lib/blade-engineer/canvas-renderer')
    exportCanvasAsPng(canvas, `blade-${geometry}-${Date.now()}.png`)
  }

  // ---- QUOTE FORM ----
  const handleQuoteSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Fake success (contact form disabled)
    setQuoteSubmitted(true)
    setTimeout(() => {
      setShowQuoteForm(false)
      setQuoteSubmitted(false)
    }, 3000)
  }

  // ---- RESET ----
  const handleReset = () => {
    setGeometry(null)
    setParams(null)
    setEdgeProfile(null)
    setCanvasState(DEFAULT_CANVAS)
    setBladeName('')
    setMaterial('')
    setHardness('')
    setStep('geometry')
  }

  // =============================================================================
  // RENDER
  // =============================================================================

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-steel-200 bg-steel-50">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-xl font-semibold text-steel-900">{dict.pageTitle}</h1>
          <p className="text-sm text-steel-500 mt-1">{dict.pageSubtitle}</p>
        </div>
      </div>

      {/* Step Indicator */}
      <div className="border-b border-steel-100 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1 py-3 overflow-x-auto">
            {STEPS.map((s, i) => {
              const labels = [dict.step1, dict.step2, dict.step3, dict.step4]
              const isActive = s === step
              const isPast = STEPS.indexOf(s) < STEPS.indexOf(step)
              return (
                <button
                  key={s}
                  onClick={() => {
                    if (isPast || (s === 'parameters' && geometry)) setStep(s)
                  }}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? 'bg-primary-600 text-white'
                      : isPast
                        ? 'bg-steel-100 text-steel-700 hover:bg-steel-200 cursor-pointer'
                        : 'bg-steel-50 text-steel-400'
                  }`}
                  disabled={!isPast && !isActive && !(s === 'parameters' && geometry)}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    isActive ? 'bg-white text-primary-600' : isPast ? 'bg-steel-300 text-white' : 'bg-steel-200 text-steel-400'
                  }`}>
                    {isPast ? '\u2713' : i + 1}
                  </span>
                  {labels[i]}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row gap-4" style={{ minHeight: 'calc(100vh - 200px)' }}>

          {/* LEFT: Controls Panel */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="bg-white border border-steel-200 rounded-lg overflow-hidden">

              {/* STEP 1: Geometry Selection */}
              {step === 'geometry' && (
                <div className="p-4">
                  <h2 className="text-sm font-semibold text-steel-900 mb-3">{dict.selectGeometry}</h2>
                  <div className="grid grid-cols-2 gap-2">
                    {GEOMETRY_LIST.map(geo => (
                      <button
                        key={geo.id}
                        onClick={() => handleSelectGeometry(geo.id)}
                        className={`p-3 border rounded-lg text-left transition-all hover:border-primary-300 hover:shadow-sm ${
                          geometry === geo.id
                            ? 'border-primary-500 bg-primary-50 shadow-sm'
                            : 'border-steel-200 bg-white'
                        }`}
                      >
                        <div className="mb-2">
                          <svg viewBox="0 0 24 24" className="w-8 h-8 text-steel-400" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d={geo.icon} />
                          </svg>
                        </div>
                        <div className="text-xs font-medium text-steel-800">{dict[geo.labelKey]}</div>
                        <div className="text-[10px] text-steel-500 mt-0.5 line-clamp-2">{dict[geo.descriptionKey]}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: Parameters */}
              {step === 'parameters' && geometry && (
                <div className="p-4">
                  <h2 className="text-sm font-semibold text-steel-900 mb-3">{dict.dimensions}</h2>
                  <div className="space-y-3">
                    {/* Blade name */}
                    <div>
                      <label className="block text-[11px] text-steel-500 mb-1">{dict.bladeName}</label>
                      <input
                        type="text"
                        value={bladeName}
                        onChange={e => setBladeName(e.target.value)}
                        placeholder={dict[`${geometry}Label`]}
                        className="w-full px-2.5 py-1.5 text-sm border border-steel-200 rounded focus:outline-none focus:border-primary-400 bg-white text-steel-900"
                      />
                    </div>

                    {/* Dynamic param fields grouped */}
                    {renderParamFields(getFieldsForGeometry(geometry), params, handleParamChange, dict)}

                    {/* Material & Hardness */}
                    <div className="pt-2 border-t border-steel-100">
                      <label className="block text-[11px] text-steel-500 mb-1">{dict.material}</label>
                      <input
                        type="text"
                        value={material}
                        onChange={e => setMaterial(e.target.value)}
                        placeholder="e.g. D2, SKD11, HSS, WC"
                        className="w-full px-2.5 py-1.5 text-sm border border-steel-200 rounded focus:outline-none focus:border-primary-400 bg-white text-steel-900"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-steel-500 mb-1">{dict.hardness}</label>
                      <input
                        type="text"
                        value={hardness}
                        onChange={e => setHardness(e.target.value)}
                        placeholder="e.g. 58-62 HRC"
                        className="w-full px-2.5 py-1.5 text-sm border border-steel-200 rounded focus:outline-none focus:border-primary-400 bg-white text-steel-900"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Edge Profile */}
              {step === 'edge' && (
                <div className="p-4">
                  <h2 className="text-sm font-semibold text-steel-900 mb-3">{dict.edgeType}</h2>
                  <div className="space-y-2">
                    {(['plain', 'serrated', 'wavy', 'perforating', 'scalloped', 'zigzag'] as EdgeType[]).map(et => (
                      <button
                        key={et}
                        onClick={() => handleEdgeTypeChange(et)}
                        className={`w-full px-3 py-2 text-left text-sm rounded border transition-colors ${
                          (edgeProfile?.type || 'plain') === et
                            ? 'border-primary-500 bg-primary-50 text-primary-700'
                            : 'border-steel-200 text-steel-700 hover:border-steel-300'
                        }`}
                      >
                        {dict[`edge${et.charAt(0).toUpperCase() + et.slice(1)}`]}
                      </button>
                    ))}
                  </div>

                  {edgeProfile && edgeProfile.type !== 'plain' && (
                    <div className="mt-4 space-y-3 pt-3 border-t border-steel-100">
                      <div>
                        <label className="block text-[11px] text-steel-500 mb-1">{dict.toothPitch} (mm)</label>
                        <input
                          type="number"
                          value={edgeProfile.pitch}
                          onChange={e => setEdgeProfile(prev => prev ? { ...prev, pitch: parseFloat(e.target.value) || 1 } : prev)}
                          min={0.5} max={50} step={0.5}
                          className="w-full px-2.5 py-1.5 text-sm border border-steel-200 rounded focus:outline-none focus:border-primary-400 bg-white text-steel-900"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-steel-500 mb-1">{dict.toothDepth} (mm)</label>
                        <input
                          type="number"
                          value={edgeProfile.depth}
                          onChange={e => setEdgeProfile(prev => prev ? { ...prev, depth: parseFloat(e.target.value) || 0.5 } : prev)}
                          min={0.1} max={20} step={0.1}
                          className="w-full px-2.5 py-1.5 text-sm border border-steel-200 rounded focus:outline-none focus:border-primary-400 bg-white text-steel-900"
                        />
                      </div>
                      {(edgeProfile.type === 'serrated' || edgeProfile.type === 'zigzag') && (
                        <div>
                          <label className="block text-[11px] text-steel-500 mb-1">{dict.toothAngle} (\u00B0)</label>
                          <input
                            type="number"
                            value={edgeProfile.angle}
                            onChange={e => setEdgeProfile(prev => prev ? { ...prev, angle: parseFloat(e.target.value) || 60 } : prev)}
                            min={15} max={120} step={5}
                            className="w-full px-2.5 py-1.5 text-sm border border-steel-200 rounded focus:outline-none focus:border-primary-400 bg-white text-steel-900"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* STEP 4: Preview & Export */}
              {step === 'preview' && (
                <div className="p-4 space-y-3">
                  <h2 className="text-sm font-semibold text-steel-900 mb-3">{dict.preview}</h2>

                  <button
                    onClick={handleExportPdf}
                    className="w-full px-3 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded transition-colors"
                  >
                    {dict.exportPdf}
                  </button>

                  <button
                    onClick={handleExportPng}
                    className="w-full px-3 py-2 border border-steel-200 hover:border-steel-300 text-steel-700 text-sm rounded transition-colors"
                  >
                    {dict.exportPng}
                  </button>

                  <button
                    onClick={() => setShowQuoteForm(true)}
                    className="w-full px-3 py-2.5 bg-accent-500 hover:bg-accent-600 text-white text-sm font-medium rounded transition-colors"
                  >
                    {dict.requestQuote}
                  </button>

                  <hr className="border-steel-100" />

                  <button
                    onClick={handleReset}
                    className="w-full px-3 py-2 text-steel-500 text-sm hover:text-steel-700 transition-colors"
                  >
                    {dict.resetAll}
                  </button>
                </div>
              )}

              {/* Navigation buttons */}
              {step !== 'geometry' && (
                <div className="flex gap-2 p-4 border-t border-steel-100">
                  <button
                    onClick={goBack}
                    disabled={!canGoBack}
                    className="flex-1 px-3 py-2 border border-steel-200 text-steel-700 text-sm rounded hover:bg-steel-50 disabled:opacity-40 transition-colors"
                  >
                    {dict.back}
                  </button>
                  {canGoNext && (
                    <button
                      onClick={goNext}
                      className="flex-1 px-3 py-2 bg-steel-900 text-white text-sm rounded hover:bg-steel-800 transition-colors"
                    >
                      {dict.next}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: Canvas Area */}
          <div className="flex-1 flex flex-col">
            {/* Canvas toolbar */}
            <div className="flex items-center gap-1 mb-2 flex-wrap">
              <ToolbarButton
                onClick={() => setCanvasState(p => ({ ...p, zoom: Math.min(10, p.zoom * 1.2) }))}
                title={dict.zoomIn}
              >
                <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor"><path d="M9 5a1 1 0 0 1 2 0v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 0 1 0-2h3V5z" /></svg>
              </ToolbarButton>
              <ToolbarButton
                onClick={() => setCanvasState(p => ({ ...p, zoom: Math.max(0.1, p.zoom / 1.2) }))}
                title={dict.zoomOut}
              >
                <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor"><path d="M6 9a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H6z" /></svg>
              </ToolbarButton>
              <ToolbarButton
                onClick={() => setCanvasState(p => ({ ...p, zoom: 1, panX: 0, panY: 0 }))}
                title={dict.fitToView}
              >
                <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor"><path d="M3 3h4V1H1v6h2V3zm14 0v4h2V1h-6v2h4zm0 14h-4v2h6v-6h-2v4zM3 17v-4H1v6h6v-2H3z" /></svg>
              </ToolbarButton>
              <span className="w-px h-5 bg-steel-200 mx-1" />
              <ToolbarToggle
                active={canvasState.showGrid}
                onClick={() => setCanvasState(p => ({ ...p, showGrid: !p.showGrid }))}
                title={dict.toggleGrid}
              >
                Grid
              </ToolbarToggle>
              <ToolbarToggle
                active={canvasState.showDimensions}
                onClick={() => setCanvasState(p => ({ ...p, showDimensions: !p.showDimensions }))}
                title={dict.toggleDimensions}
              >
                Dim
              </ToolbarToggle>
              <ToolbarToggle
                active={canvasState.showCenterLines}
                onClick={() => setCanvasState(p => ({ ...p, showCenterLines: !p.showCenterLines }))}
                title={dict.toggleCenterLines}
              >
                CL
              </ToolbarToggle>
              <span className="ml-auto text-[11px] text-steel-400">
                {Math.round(canvasState.zoom * 100)}%
              </span>
            </div>

            {/* Canvas */}
            <div
              ref={containerRef}
              className="flex-1 border border-steel-200 rounded-lg overflow-hidden bg-white cursor-grab active:cursor-grabbing relative"
              style={{ minHeight: '400px' }}
            >
              <canvas
                ref={canvasRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onWheel={handleWheel}
                className="w-full h-full"
              />

              {/* Empty state */}
              {!geometry && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-steel-400">
                    <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-3 opacity-30" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 4a6 6 0 1 1 0 12 6 6 0 0 1 0-12z" />
                    </svg>
                    <p className="text-sm">{dict.selectGeometry}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Quote form modal */}
      {showQuoteForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 p-6">
            <h3 className="text-lg font-semibold text-steel-900 mb-4">{dict.quoteTitle}</h3>
            {quoteSubmitted ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <svg viewBox="0 0 20 20" className="w-6 h-6" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <p className="text-sm text-steel-600">{dict.quoteSuccess}</p>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit} className="space-y-3">
                <input type="text" required placeholder={dict.quoteName} className="w-full px-3 py-2 text-sm border border-steel-200 rounded focus:outline-none focus:border-primary-400" />
                <input type="email" required placeholder={dict.quoteEmail} className="w-full px-3 py-2 text-sm border border-steel-200 rounded focus:outline-none focus:border-primary-400" />
                <input type="tel" placeholder={dict.quotePhone} className="w-full px-3 py-2 text-sm border border-steel-200 rounded focus:outline-none focus:border-primary-400" />
                <input type="text" placeholder={dict.quoteCompany} className="w-full px-3 py-2 text-sm border border-steel-200 rounded focus:outline-none focus:border-primary-400" />
                <input type="number" placeholder={dict.quoteQuantity} min={1} className="w-full px-3 py-2 text-sm border border-steel-200 rounded focus:outline-none focus:border-primary-400" />
                <textarea placeholder={dict.quoteMessage} rows={3} className="w-full px-3 py-2 text-sm border border-steel-200 rounded focus:outline-none focus:border-primary-400 resize-none" />
                <div className="flex gap-2 pt-2">
                  <button type="button" onClick={() => setShowQuoteForm(false)} className="flex-1 px-3 py-2 border border-steel-200 text-steel-700 text-sm rounded hover:bg-steel-50 transition-colors">
                    {dict.back}
                  </button>
                  <button type="submit" className="flex-1 px-3 py-2 bg-primary-600 text-white text-sm rounded hover:bg-primary-700 transition-colors">
                    {dict.quoteSend}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// =============================================================================
// SUB COMPONENTS
// =============================================================================

function ToolbarButton({ onClick, title, children }: { onClick: () => void; title: string; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      title={title}
      className="p-1.5 rounded border border-steel-200 text-steel-600 hover:bg-steel-50 hover:text-steel-800 transition-colors"
    >
      {children}
    </button>
  )
}

function ToolbarToggle({ active, onClick, title, children }: { active: boolean; onClick: () => void; title: string; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      title={title}
      className={`px-2 py-1 rounded text-[11px] font-medium transition-colors ${
        active
          ? 'bg-primary-100 text-primary-700 border border-primary-200'
          : 'bg-steel-50 text-steel-400 border border-steel-200 hover:text-steel-600'
      }`}
    >
      {children}
    </button>
  )
}

// ---- Dynamic param field renderer ----
function renderParamFields(
  fields: ParamField[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any,
  onChange: (key: string, value: number | string | boolean) => void,
  dict: BladeDict,
) {
  // Group fields
  const groups: Record<string, ParamField[]> = {}
  fields.forEach(f => {
    if (!groups[f.group]) groups[f.group] = []
    groups[f.group].push(f)
  })

  return Object.entries(groups).map(([group, groupFields]) => (
    <div key={group}>
      <div className="text-[10px] font-semibold uppercase tracking-wider text-steel-400 mb-1.5 mt-2">
        {dict[group] || group}
      </div>
      <div className="space-y-2">
        {groupFields.map(field => {
          const val = params?.[field.key]
          return (
            <div key={field.key}>
              <label className="flex items-center justify-between text-[11px] text-steel-600 mb-0.5">
                <span>{dict[field.labelKey] || field.key}</span>
                {field.unit && <span className="text-steel-400">{field.unit}</span>}
              </label>
              {field.type === 'number' && (
                <input
                  type="number"
                  value={val ?? field.defaultValue}
                  onChange={e => onChange(field.key, parseFloat(e.target.value) || 0)}
                  min={field.min}
                  max={field.max}
                  step={field.step}
                  className="w-full px-2.5 py-1.5 text-sm border border-steel-200 rounded focus:outline-none focus:border-primary-400 bg-white text-steel-900"
                />
              )}
              {field.type === 'select' && field.options && (
                <select
                  value={String(val ?? field.defaultValue)}
                  onChange={e => {
                    const v = e.target.value
                    // Number veya string
                    onChange(field.key, isNaN(Number(v)) ? v : Number(v))
                  }}
                  className="w-full px-2.5 py-1.5 text-sm border border-steel-200 rounded focus:outline-none focus:border-primary-400 bg-white text-steel-900"
                >
                  {field.options.map(opt => (
                    <option key={opt.value} value={opt.value}>
                      {dict[opt.labelKey] || opt.value}
                    </option>
                  ))}
                </select>
              )}
              {field.type === 'boolean' && (
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={!!val}
                    onChange={e => onChange(field.key, e.target.checked)}
                    className="w-4 h-4 rounded border-steel-300 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="text-xs text-steel-600">{dict[field.labelKey]}</span>
                </label>
              )}
            </div>
          )
        })}
      </div>
    </div>
  ))
}
