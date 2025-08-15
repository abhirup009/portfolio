'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { X, ZoomIn, RotateCcw, Maximize, ZoomOut, RotateCw } from 'lucide-react';

interface ZoomableImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  showInlineControls?: boolean;
}

export default function ZoomableImage({ src, alt, width, height, className = "", showInlineControls = true }: ZoomableImageProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [inlineScale, setInlineScale] = useState(1);
  const [inlinePosition, setInlinePosition] = useState({ x: 0, y: 0 });
  const [fullscreenScale, setFullscreenScale] = useState(1);
  const [fullscreenPosition, setFullscreenPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [lastTouchDistance, setLastTouchDistance] = useState(0);
  const inlineImageRef = useRef<HTMLDivElement>(null);
  const fullscreenImageRef = useRef<HTMLDivElement>(null);

  const getCurrentScale = () => isFullscreen ? fullscreenScale : inlineScale;
  const getCurrentPosition = () => isFullscreen ? fullscreenPosition : inlinePosition;
  const setCurrentScale = (scale: number) => isFullscreen ? setFullscreenScale(scale) : setInlineScale(scale);
  const setCurrentPosition = (position: { x: number; y: number }) => isFullscreen ? setFullscreenPosition(position) : setInlinePosition(position);

  const handleFullscreenToggle = () => {
    setIsFullscreen(!isFullscreen);
    if (!isFullscreen) {
      setFullscreenScale(1);
      setFullscreenPosition({ x: 0, y: 0 });
    }
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
    setFullscreenScale(1);
    setFullscreenPosition({ x: 0, y: 0 });
  };

  const resetZoom = () => {
    setCurrentScale(1);
    setCurrentPosition({ x: 0, y: 0 });
  };

  const zoomIn = () => {
    // Reduced button zoom increment for finer control
    const newScale = Math.min(getCurrentScale() * 1.15, 5);
    setCurrentScale(newScale);
  };

  const zoomOut = () => {
    // Reduced button zoom decrement for finer control
    const newScale = Math.max(getCurrentScale() * 0.85, 0.5);
    setCurrentScale(newScale);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseFullscreen();
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    // Reduced sensitivity: smaller increments for smoother zooming
    const delta = e.deltaY > 0 ? 0.95 : 1.05;
    const newScale = Math.min(Math.max(getCurrentScale() * delta, 0.5), 5);
    setCurrentScale(newScale);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (getCurrentScale() > 1) {
      setIsDragging(true);
      const currentPos = getCurrentPosition();
      setDragStart({
        x: e.clientX - currentPos.x,
        y: e.clientY - currentPos.y
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && getCurrentScale() > 1) {
      setCurrentPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const getTouchDistance = (touches: TouchList) => {
    const touch1 = touches[0];
    const touch2 = touches[1];
    return Math.sqrt(
      Math.pow(touch2.clientX - touch1.clientX, 2) + 
      Math.pow(touch2.clientY - touch1.clientY, 2)
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && getCurrentScale() > 1) {
      setIsDragging(true);
      const currentPos = getCurrentPosition();
      setDragStart({
        x: e.touches[0].clientX - currentPos.x,
        y: e.touches[0].clientY - currentPos.y
      });
    } else if (e.touches.length === 2) {
      const distance = getTouchDistance(e.touches);
      setLastTouchDistance(distance);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    if (e.touches.length === 1 && isDragging && getCurrentScale() > 1) {
      setCurrentPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y
      });
    } else if (e.touches.length === 2 && lastTouchDistance > 0) {
      const distance = getTouchDistance(e.touches);
      const rawScaleMultiplier = distance / lastTouchDistance;
      
      // Reduce pinch sensitivity by dampening the scale multiplier
      // Only apply a fraction of the scale change for smoother interaction
      const dampingFactor = 0.3; // Adjust between 0.1 (very slow) and 1.0 (full sensitivity)
      const dampedMultiplier = 1 + (rawScaleMultiplier - 1) * dampingFactor;
      
      const newScale = Math.min(Math.max(getCurrentScale() * dampedMultiplier, 0.5), 5);
      setCurrentScale(newScale);
      setLastTouchDistance(distance);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsDragging(false);
    if (e.touches.length < 2) {
      setLastTouchDistance(0);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isFullscreen && e.key === 'Escape') {
        handleCloseFullscreen();
      }
    };

    if (isFullscreen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isFullscreen]);

  return (
    <>
      {/* Inline Image with Controls */}
      <div className={`relative group ${className}`}>
        {/* Inline Zoom Controls */}
        {showInlineControls && (
          <div className="absolute top-2 right-2 flex gap-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={zoomOut}
              className="bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-1.5 rounded-md transition-colors text-xs"
              aria-label="Zoom out"
              title="Zoom out"
            >
              <ZoomOut size={14} />
            </button>
            <button
              onClick={zoomIn}
              className="bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-1.5 rounded-md transition-colors text-xs"
              aria-label="Zoom in"
              title="Zoom in"
            >
              <ZoomIn size={14} />
            </button>
            <button
              onClick={resetZoom}
              className="bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-1.5 rounded-md transition-colors text-xs"
              aria-label="Reset zoom"
              title="Reset zoom"
            >
              <RotateCcw size={14} />
            </button>
            <button
              onClick={handleFullscreenToggle}
              className="bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-1.5 rounded-md transition-colors text-xs"
              aria-label="Fullscreen"
              title="Fullscreen"
            >
              <Maximize size={14} />
            </button>
          </div>
        )}

        {/* Zoom indicator */}
        {inlineScale !== 1 && showInlineControls && (
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs z-10">
            {Math.round(inlineScale * 100)}%
          </div>
        )}

        <div 
          ref={inlineImageRef}
          className="relative overflow-hidden rounded-lg group"
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            cursor: inlineScale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
          }}
        >
          <div
            style={{
              transform: `translate(${inlinePosition.x}px, ${inlinePosition.y}px) scale(${inlineScale})`,
              transformOrigin: 'center',
              transition: isDragging ? 'none' : 'transform 0.1s ease-out'
            }}
          >
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="w-full h-auto object-contain pointer-events-none transition-shadow duration-300 hover:shadow-lg"
              draggable={false}
            />
          </div>
        </div>

        {/* Instructions */}
        {showInlineControls && (
          <div className="text-center mt-2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
            Scroll to zoom • Drag to pan • Click fullscreen for more options
          </div>
        )}
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
          onClick={handleOverlayClick}
        >
          {/* Fullscreen Control buttons */}
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <button
              onClick={zoomOut}
              className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-lg transition-colors"
              aria-label="Zoom out"
              title="Zoom out"
            >
              <ZoomOut size={20} />
            </button>
            <button
              onClick={zoomIn}
              className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-lg transition-colors"
              aria-label="Zoom in"
              title="Zoom in"
            >
              <ZoomIn size={20} />
            </button>
            <button
              onClick={resetZoom}
              className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-lg transition-colors"
              aria-label="Reset zoom"
              title="Reset zoom"
            >
              <RotateCcw size={20} />
            </button>
            <button
              onClick={handleCloseFullscreen}
              className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-lg transition-colors"
              aria-label="Close fullscreen"
              title="Close fullscreen (Esc)"
            >
              <X size={20} />
            </button>
          </div>

          {/* Fullscreen Zoom indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg text-sm z-10">
            Zoom: {Math.round(fullscreenScale * 100)}% | Scroll to zoom | Drag to pan | Pinch to zoom
          </div>

          <div 
            ref={fullscreenImageRef}
            className="relative max-w-[95vw] max-h-[95vh] overflow-hidden"
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              cursor: fullscreenScale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
            }}
          >
            <div
              style={{
                transform: `translate(${fullscreenPosition.x}px, ${fullscreenPosition.y}px) scale(${fullscreenScale})`,
                transformOrigin: 'center',
                transition: isDragging ? 'none' : 'transform 0.1s ease-out'
              }}
            >
              <Image
                src={src}
                alt={alt}
                width={width * 1.5}
                height={height * 1.5}
                className="max-w-full max-h-full object-contain pointer-events-none"
                priority
                draggable={false}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}