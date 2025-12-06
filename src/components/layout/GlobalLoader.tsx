"use client";

import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export function GlobalLoader() {
  const { progress, active } = useProgress();
  const [isReady, setIsReady] = useState(false);
  const [simulatedProgress, setSimulatedProgress] = useState(0);

  useEffect(() => {
    // Simulate loading because our 3D scene is procedural (no assets to load)
    // allowing "useProgress" to stay at 0.
    const interval = setInterval(() => {
        setSimulatedProgress(prev => {
            if (prev >= 100) {
                clearInterval(interval);
                return 100;
            }
            // Add random increment
            return prev + Math.random() * 10; 
        });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (simulatedProgress >= 100) {
        // Short delay to show 100%
        setTimeout(() => setIsReady(true), 500); 
    }
  }, [simulatedProgress]);

  // Use simulated progress unless real progress is somehow slower (unlikely here)
  const displayProgress = Math.max(simulatedProgress, progress);

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
