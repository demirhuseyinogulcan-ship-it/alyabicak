'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { ZoomIn, ZoomOut, Maximize2, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

// PDF.js worker - CDN üzerinden
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

// WASM decoder URL'leri — JPEG2000 (openjpeg) ve ICC renk profili (qcms) için gerekli
const PDFJS_CDN_BASE = `//unpkg.com/pdfjs-dist@${pdfjs.version}`
const PDF_DOCUMENT_OPTIONS = {
    wasmUrl: `${PDFJS_CDN_BASE}/wasm/`,
    cMapUrl: `${PDFJS_CDN_BASE}/cmaps/`,
    cMapPacked: true,
    standardFontDataUrl: `${PDFJS_CDN_BASE}/standard_fonts/`,
}

interface PDFViewerProps {
    src: string
    title: string
    zoomInLabel?: string
    zoomOutLabel?: string
    resetLabel?: string
    fullscreenLabel?: string
}

const ZOOM_LEVELS = [0.5, 0.75, 1, 1.25, 1.5, 2]
const DEFAULT_ZOOM_INDEX = 2 // 100%

// Masaüstünde rahat okuma genişliği — A4 kağıdın ekrandaki gerçek boyutu (~96dpi)
// Mobilde containerWidth zaten bu değerin altında olduğundan etkilenmez
const MAX_BASE_WIDTH = 800

// A4 aspect ratio (height / width) — placeholder sizing
const A4_ASPECT_RATIO = 1.4142

// ------------------------------------------------------------------
// LazyPage — Intersection Observer ile sadece görünür sayfaları render eder
// Edge & Opera'da canvas bellek limitlerini aşmayı önler
// ------------------------------------------------------------------
function LazyPage({
    pageNumber,
    width,
    scrollRoot,
}: {
    pageNumber: number
    width: number | undefined
    scrollRoot: HTMLDivElement | null
}) {
    const placeholderRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const el = placeholderRef.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            {
                // Scroll container'ı root olarak kullan
                root: scrollRoot,
                // Viewport'un 1 sayfa üstü ve altını önceden yükle
                rootMargin: '800px 0px',
                threshold: 0,
            }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [scrollRoot])

    const placeholderHeight = width ? Math.round(width * A4_ASPECT_RATIO) : 600

    return (
        <div ref={placeholderRef} style={{ minHeight: placeholderHeight }}>
            {isVisible ? (
                <Page
                    pageNumber={pageNumber}
                    width={width}
                    className="shadow-lg"
                    renderTextLayer={true}
                    renderAnnotationLayer={true}
                />
            ) : (
                <div
                    className="bg-white shadow-lg flex items-center justify-center"
                    style={{ width: width ?? '100%', height: placeholderHeight }}
                >
                    <Loader2 className="w-6 h-6 text-steel-300 animate-spin" />
                </div>
            )}
        </div>
    )
}

export function PDFViewer({ src, title, zoomInLabel = 'Yakınlaştır', zoomOutLabel = 'Uzaklaştır', resetLabel = 'Sıfırla', fullscreenLabel = 'Tam Ekran' }: PDFViewerProps) {
    const [zoomIndex, setZoomIndex] = useState(DEFAULT_ZOOM_INDEX)
    const [numPages, setNumPages] = useState<number>(0)
    const [pageNumber, setPageNumber] = useState(1)
    const [containerWidth, setContainerWidth] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const scrollRef = useRef<HTMLDivElement>(null)

    const zoom = ZOOM_LEVELS[zoomIndex]
    const canZoomIn = zoomIndex < ZOOM_LEVELS.length - 1
    const canZoomOut = zoomIndex > 0
    const isDefault = zoomIndex === DEFAULT_ZOOM_INDEX
    const zoomPercent = Math.round(zoom * 100)

    // Measure container width for responsive scaling
    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.clientWidth)
            }
        }
        updateWidth()
        window.addEventListener('resize', updateWidth)
        return () => window.removeEventListener('resize', updateWidth)
    }, [])

    const handleZoomIn = useCallback(() => {
        if (canZoomIn) setZoomIndex(prev => prev + 1)
    }, [canZoomIn])

    const handleZoomOut = useCallback(() => {
        if (canZoomOut) setZoomIndex(prev => prev - 1)
    }, [canZoomOut])

    const handleReset = useCallback(() => {
        setZoomIndex(DEFAULT_ZOOM_INDEX)
    }, [])

    const handleFullscreen = useCallback(() => {
        const container = containerRef.current
        if (!container) return
        if (document.fullscreenElement) {
            document.exitFullscreen()
        } else {
            container.requestFullscreen()
        }
    }, [])

    const handlePrevPage = useCallback(() => {
        setPageNumber(prev => Math.max(1, prev - 1))
    }, [])

    const handleNextPage = useCallback(() => {
        setPageNumber(prev => Math.min(numPages, prev + 1))
    }, [numPages])

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages)
    }

    // Keyboard shortcuts
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey || e.metaKey) {
                if (e.key === '=' || e.key === '+') {
                    e.preventDefault()
                    handleZoomIn()
                } else if (e.key === '-') {
                    e.preventDefault()
                    handleZoomOut()
                } else if (e.key === '0') {
                    e.preventDefault()
                    handleReset()
                }
            }
            if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                handlePrevPage()
            }
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                handleNextPage()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [handleZoomIn, handleZoomOut, handleReset, handlePrevPage, handleNextPage])

    // Calculate page width: cap at MAX_BASE_WIDTH so desktop doesn't over-zoom
    const baseWidth = containerWidth > 0 ? Math.min(containerWidth, MAX_BASE_WIDTH) : 0
    const pageWidth = baseWidth > 0 ? baseWidth * zoom : undefined

    return (
        <div ref={containerRef} className="flex-1 min-h-0 bg-steel-100 relative flex flex-col">
            {/* PDF Content - react-pdf canvas rendering (works on mobile) */}
            <div
                ref={scrollRef}
                className="flex-1 min-h-0 overflow-auto"
                style={{
                    WebkitOverflowScrolling: 'touch',
                    overscrollBehavior: 'contain',
                    touchAction: 'pan-y pinch-zoom',
                }}
            >
                <Document
                    file={src}
                    onLoadSuccess={onDocumentLoadSuccess}
                    options={PDF_DOCUMENT_OPTIONS}
                    loading={
                        <div className="flex items-center justify-center h-full min-h-[400px]">
                            <div className="flex flex-col items-center gap-3">
                                <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
                                <span className="text-sm text-steel-500">PDF yükleniyor...</span>
                            </div>
                        </div>
                    }
                    error={
                        <div className="flex items-center justify-center h-full min-h-[400px]">
                            <div className="text-center">
                                <p className="text-steel-600 mb-4">PDF yüklenemedi.</p>
                                <a
                                    href={src}
                                    download
                                    className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm hover:bg-primary-700 transition-colors"
                                >
                                    PDF'i İndir
                                </a>
                            </div>
                        </div>
                    }
                    className="flex flex-col items-center gap-2 py-4"
                >
                    {Array.from(new Array(numPages), (_, index) => (
                        <LazyPage
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            width={pageWidth}
                            scrollRoot={scrollRef.current}
                        />
                    ))}
                </Document>
            </div>

            {/* Floating Zoom Controls */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 bg-steel-900/90 backdrop-blur-sm rounded-full px-2 py-1.5 shadow-xl border border-steel-700/50">
                <button
                    onClick={handleZoomOut}
                    disabled={!canZoomOut}
                    className="w-8 h-8 flex items-center justify-center rounded-full text-steel-300 hover:text-white hover:bg-steel-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    aria-label={zoomOutLabel}
                    title={zoomOutLabel}
                >
                    <ZoomOut className="w-4 h-4" />
                </button>

                <button
                    onClick={handleReset}
                    className={`min-w-[52px] h-8 px-2 flex items-center justify-center rounded-full text-xs font-medium transition-colors ${isDefault ? 'text-steel-400' : 'text-white hover:bg-steel-700 cursor-pointer'}`}
                    aria-label={resetLabel}
                    title={resetLabel}
                >
                    {zoomPercent}%
                </button>

                <button
                    onClick={handleZoomIn}
                    disabled={!canZoomIn}
                    className="w-8 h-8 flex items-center justify-center rounded-full text-steel-300 hover:text-white hover:bg-steel-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    aria-label={zoomInLabel}
                    title={zoomInLabel}
                >
                    <ZoomIn className="w-4 h-4" />
                </button>

                <div className="w-px h-5 bg-steel-600 mx-0.5" />

                <button
                    onClick={handleFullscreen}
                    className="w-8 h-8 flex items-center justify-center rounded-full text-steel-300 hover:text-white hover:bg-steel-700 transition-colors"
                    aria-label={fullscreenLabel}
                    title={fullscreenLabel}
                >
                    <Maximize2 className="w-4 h-4" />
                </button>
            </div>
        </div>
    )
}
