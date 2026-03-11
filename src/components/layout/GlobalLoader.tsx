"use client";

import { useProgress } from "@react-three/drei";
import { useEffect, useState, useRef } from "react";

export function GlobalLoader() {
  const { progress, active } = useProgress();
  const [isReady, setIsReady] = useState(false);
  const [simulatedProgress, setSimulatedProgress] = useState(0);
  const hardCapRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Hard cap: loader always disappears within 800ms
    hardCapRef.current = setTimeout(() => setIsReady(true), 800);

    // Simulate loading because our 3D scene is procedural (no assets to load)
    const interval = setInterval(() => {
        setSimulatedProgress(prev => {
            if (prev >= 100) {
                clearInterval(interval);
                return 100;
            }
            return prev + Math.random() * 10; 
        });
    }, 100);

    return () => {
      clearInterval(interval);
      if (hardCapRef.current) clearTimeout(hardCapRef.current);
    };
  }, []);

  useEffect(() => {
    if (simulatedProgress >= 100) {
        setTimeout(() => setIsReady(true), 300); 
    }
  }, [simulatedProgress]);

  const displayProgress = Math.min(100, Math.max(simulatedProgress, progress));

  return (
    <div 
        className={`fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-light pointer-events-none ${isReady ? "opacity-0" : "opacity-100"}`}
    >
      {!isReady && (
        <div className="flex flex-col items-center">
             <p className="mb-4 text-xl tracking-widest animate-pulse">
                Loading {Math.floor(displayProgress)}%
            </p>
            <div className="relative h-1 overflow-hidden rounded w-60 bg-white/20">
                <div
                className="absolute top-0 left-0 h-full transition-all duration-300 bg-white"
                style={{ width: `${displayProgress}%` }}
                ></div>
            </div>
        </div>
      )}
    </div>
  );
}
