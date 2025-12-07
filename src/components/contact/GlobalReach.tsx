"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Sparkles } from "@react-three/drei";

function Globe() {
    const meshRef = useRef<any>(null);
    
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.005;
            meshRef.current.rotation.x += 0.002;
            
            // Optional: Make the sphere "breathe" slightly by animating scale
            // const t = state.clock.getElapsedTime();
            // meshRef.current.scale.y = 2.5 + Math.sin(t) * 0.1;
        }
    });

    return (
        <group>
            <Sphere args={[1, 64, 64]} ref={meshRef} scale={2.5}>
                <MeshDistortMaterial
                    color="#3b82f6"
                    wireframe={true} // Keep true for tech look, false for liquid look
                    distort={0}    // CHANGED: Increased from 0 to see the wobble
                    speed={1}      // CHANGED: Speed of the wobble
                    roughness={0.1}
                    metalness={0.1}  // CHANGED: Adds some reflective shine
                    emissive="#3b82f6" // CHANGED: Make it glow the same color as the sphere
                    emissiveIntensity={0.1} 
                    toneMapped={false} // CRITICAL: Allows the color to be "neon" bright
                />
            </Sphere>
            
            {/* ADDED: The Stars/Particles */}
            <Sparkles 
                count={9000} 
                scale={5}
                size={1} 
                speed={0.3} 
                opacity={0.7}
                color="#3b82f6"
            />
        </group>
    );
}

export function GlobalReach() {
    return (
        <div className="w-full h-[500px] rounded-3xl overflow-hidden relative bg-black/90 border border-white/5">
            <div className="absolute top-6 left-6 z-10">
                <h3 className="text-xl font-bold font-heading text-white">Global Reach</h3>
                <p className="text-sm text-muted-foreground">Serving clients in 15+ countries.</p>
            </div>
            
            <Canvas camera={{ position: [0, 0, 5] }}>
                {/* Lighting helps the wireframe pop */}
                <ambientLight intensity={2} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                
                <Globe />
            </Canvas>
        </div>
    )
}