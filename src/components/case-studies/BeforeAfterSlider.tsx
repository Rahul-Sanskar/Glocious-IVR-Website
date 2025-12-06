"use client";

import React, { useState, useRef, useEffect } from "react";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ('touches' in event ? event.touches[0].clientX : event.clientX) - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(100, (x / width) * 100));

    setSliderPosition(percentage);
  };

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => { if (isDragging.current) handleMove(e); };

  return (
    <div className="my-24 container mx-auto px-6">
        <h3 className="text-3xl font-bold font-heading mb-8 text-center">Visual Transformation</h3>
        
        <div 
            ref={containerRef}
            className="relative w-full aspect-video rounded-3xl overflow-hidden cursor-ew-resize select-none group border-2 border-white/10"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleMove}
            onClick={handleMove}
        >
            {/* After Image (Background) */}
            <img 
                src={afterImage} 
                alt="After" 
                className="absolute inset-0 w-full h-full object-cover" 
                draggable={false}
            />

            {/* Before Image (Clipped) */}
            <div 
                className="absolute inset-0 w-full h-full overflow-hidden" 
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img 
                    src={beforeImage} 
                    alt="Before" 
                    className="absolute inset-0 w-full h-full object-cover" 
                    draggable={false}
                />
                
                {/* Before Label */}
                 <div className="absolute top-8 left-8 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-sm font-bold tracking-widest uppercase">
                    Before
                </div>
            </div>

            {/* After Label */}
            <div className="absolute top-8 right-8 bg-primary/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-sm font-bold tracking-widest uppercase">
                After
            </div>

            {/* Slider Handle */}
            <div 
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-shadow"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl text-black">
                    <MoveHorizontal size={24} />
                </div>
            </div>
        </div>
    </div>
  );
}
