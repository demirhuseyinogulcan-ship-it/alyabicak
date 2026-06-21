'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';

interface ImageMagnifierProps {
  src: string;
  alt: string;
  /** Zoom factor for the magnified panel */
  zoomLevel?: number;
  /** Size of the lens rectangle in pixels */
  lensSize?: number;
}

/**
 * Amazon-style image magnifier.
 * Desktop: hover over image → lens rectangle follows cursor → side panel shows zoomed area (NO watermark).
 * Mobile: disabled (touch devices skip magnifier).
 */
export function ImageMagnifier({
  src,
  alt,
  zoomLevel = 2.5,
  lensSize = 140,
}: ImageMagnifierProps) {
  const [isActive, setIsActive] = useState(false);
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const [panelRect, setPanelRect] = useState({ top: 0, left: 0, width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const handleMouseEnter = useCallback(() => {
    if (!isTouchDevice) setIsActive(true);
  }, [isTouchDevice]);

  const handleMouseLeave = useCallback(() => {
    setIsActive(false);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current || isTouchDevice) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Clamp lens position so it stays within bounds
      const halfLens = lensSize / 2;
      const clampedX = Math.max(halfLens, Math.min(x, rect.width - halfLens));
      const clampedY = Math.max(halfLens, Math.min(y, rect.height - halfLens));

      setLensPos({ x: clampedX, y: clampedY });
    },
    [lensSize, isTouchDevice]
  );

  const handleTouchStart = useCallback(() => {
    setIsTouchDevice(true);
    setIsActive(false);
  }, []);

  // Update the zoom panel position to sit next to the image container
  useEffect(() => {
    if (!isActive || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPanelRect({
      top: rect.top,
      left: rect.right + 16, // 16px gap
      width: rect.width,
      height: rect.height,
    });
  }, [isActive, lensPos]);

  // Calculate background position for the zoomed panel
  const getZoomBgPosition = () => {
    if (!containerRef.current) return { x: '0%', y: '0%' };
    const rect = containerRef.current.getBoundingClientRect();
    const percX = ((lensPos.x - lensSize / 2) / (rect.width - lensSize)) * 100;
    const percY = ((lensPos.y - lensSize / 2) / (rect.height - lensSize)) * 100;
    return {
      x: `${Math.max(0, Math.min(100, percX))}%`,
      y: `${Math.max(0, Math.min(100, percY))}%`,
    };
  };

  const bgPos = getZoomBgPosition();

  return (
    <>
      {/* Main Image Container */}
      <div
        ref={containerRef}
        className="relative w-full h-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        style={{ cursor: isActive ? 'crosshair' : 'default' }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />

        {/* Lens Rectangle - only visible on hover */}
        {isActive && (
          <div
            className="absolute border-2 border-primary-500/80 bg-primary-500/10 pointer-events-none z-10"
            style={{
              width: lensSize,
              height: lensSize,
              left: lensPos.x - lensSize / 2,
              top: lensPos.y - lensSize / 2,
              boxShadow: '0 0 0 9999px rgba(0,0,0,0.12)',
            }}
          />
        )}

        {/* Zoom hint - shown when not hovering */}
        {!isActive && !isTouchDevice && (
          <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1.5 bg-steel-900/60 backdrop-blur-sm text-white text-xs font-medium rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none">
            <Search className="w-3.5 h-3.5" />
            <span>Yakınlaştır</span>
          </div>
        )}
      </div>

      {/* Zoom Panel — fixed position, appears right of image, NO watermark */}
      {isActive && panelRect.width > 0 && (
        <div
          className="fixed z-[100] hidden lg:block rounded-xl border border-steel-200 shadow-2xl overflow-hidden bg-white"
          style={{
            top: panelRect.top,
            left: panelRect.left,
            width: panelRect.width,
            height: panelRect.height,
          }}
        >
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: `${zoomLevel * 100}%`,
              backgroundPosition: `${bgPos.x} ${bgPos.y}`,
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>
      )}
    </>
  );
}
