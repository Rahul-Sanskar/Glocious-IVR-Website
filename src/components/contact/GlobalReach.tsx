"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

function Globe() {
  const meshRef = useRef<any>(null);
  useFrame(() => {
    if (meshRef.current) {
        meshRef.current.rotation.y += 0.005;
        meshRef.current.rotation.x += 0.002;
    }
  });
  return (
    <Sphere args={[1, 32, 32]} ref={meshRef} scale={2.2}>
        <MeshDistortMaterial 
            color="#3b82f6" 
            wireframe 
            distort={0.3}
            speed={1.5}
        />
    </Sphere>
  );
}

export function GlobalReach() {
    return (
        <div className="w-full h-[500px] rounded-3xl overflow-hidden relative bg-black/50 border border-white/5">
            <div className="absolute top-6 left-6 z-10">
                <h3 className="text-xl font-bold font-heading text-white">Global Reach</h3>
                <p className="text-sm text-muted-foreground">Serving clients in 15+ countries.</p>
            </div>
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Globe />
            </Canvas>
        </div>
    )
}
