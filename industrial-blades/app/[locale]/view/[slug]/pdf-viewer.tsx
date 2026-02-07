'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { ZoomIn, ZoomOut, RotateCcw, Maximize2 } from 'lucide-react'

interface PDFViewerProps {
    src: string
    title: string
    zoomInLabel?: string
    zoomOutLabel?: string
    resetLabel?: string
    fullscreenLabel?: string
}

const ZOOM_LEVELS = [50, 75, 100, 125, 150, 200]
const DEFAULT_ZOOM_INDEX = 2 // 100%

export function PDFViewer({ src, title, zoomInLabel = 'Yakınlaştır', zoomOutLabel = 'Uzaklaştır', resetLabel = 'Sıfırla', fullscreenLabel = 'Tam Ekran' }: PDFViewerProps) {
    const [zoomIndex, setZoomIndex] = useState(DEFAULT_ZOOM_INDEX)
    const containerRef = useRef<HTMLDivElement>(null)
    const iframeRef = useRef<HTMLIFrameElement>(null)

    const zoom = ZOOM_LEVELS[zoomIndex]
    const canZoomIn = zoomIndex < ZOOM_LEVELS.length - 1
    const canZoomOut = zoomIndex > 0
    const isDefault = zoomIndex === DEFAULT_ZOOM_INDEX

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

    // Keyboard shortcuts: Ctrl +/- for zoom
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
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [handleZoomIn, handleZoomOut, handleReset])

    return (
        <div ref={containerRef} className="flex-1 bg-steel-100 relative flex flex-col">
            {/* PDF Content */}
            <div className="flex-1 overflow-auto relative">
                <iframe
                    ref={iframeRef}
                    src={`${src}#toolbar=0&navpanes=0&scrollbar=0`}
                    className="border-0 block origin-top-left"
                    style={{
                        width: `${(100 / zoom) * 100}%`,
                        height: `${(100 / zoom) * 100}%`,
                        transform: `scale(${zoom / 100})`,
                        transformOrigin: 'top left',
                    }}
                    title={title}
                    allowFullScreen
                />
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
                    {zoom}%
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
