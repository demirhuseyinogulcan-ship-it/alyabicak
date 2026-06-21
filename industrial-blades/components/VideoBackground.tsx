/**
 * Progressive Video Background Component
 * Poster image + lazy load video with smooth fade-in
 */

'use client'

import { useState, useEffect, useRef } from 'react'

interface VideoBackgroundProps {
  videoSrc: string
  posterSrc: string
  overlay?: boolean
  overlayOpacity?: number
}

export default function VideoBackground({
  videoSrc,
  posterSrc,
  overlay = true,
  overlayOpacity = 0.7
}: VideoBackgroundProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      const handleLoadedData = () => {
        setIsVideoLoaded(true)
      }
      videoRef.current.addEventListener('loadeddata', handleLoadedData)

      // Cleanup
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('loadeddata', handleLoadedData)
        }
      }
    }
  }, [])

  return (
    <div className="absolute inset-0 z-0">
      {/* Poster Image - Anında gösterilir */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${posterSrc})`,
          opacity: isVideoLoaded ? 0 : 1,
          pointerEvents: isVideoLoaded ? 'none' : 'auto'
        }}
      />

      {/* Video - Arka planda yüklenir, hazır olunca fade-in yapar */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        style={{ opacity: isVideoLoaded ? 1 : 0 }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Optional Overlay */}
      {overlay && (
        <div
          className="absolute inset-0 bg-steel-900"
          style={{ opacity: overlayOpacity / 100 }}
        />
      )}
    </div>
  )
}

