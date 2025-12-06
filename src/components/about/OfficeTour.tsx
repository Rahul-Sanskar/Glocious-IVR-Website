"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { InstancedMesh, Object3D, Color } from "three";
import { Environment, PerspectiveCamera, ContactShadows } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function DataFlow({ count = 400 }) {
  const meshRef = useRef<InstancedMesh>(null);
  const lightRef = useRef<any>(null);
  const dummy = useMemo(() => new Object3D(), []);
  const colors = useMemo(() => ["#3b82f6", "#9333ea", "#ffffff", "#000000"], []);
  const particles = useMemo(() => {
    return new Array(count).fill(0).map(() => ({
      position: [
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      ],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
      scale: Math.random() * 0.5 + 0.2,
      speed: Math.random() * 0.5 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
  }, [count, colors]);

  useEffect(() => {
      if(meshRef.current) {
         particles.forEach((p, i) => {
            dummy.position.set(p.position[0], p.position[1], p.position[2]);
            dummy.scale.setScalar(p.scale);
            dummy.updateMatrix();
            meshRef.current!.setMatrixAt(i, dummy.matrix);
            meshRef.current!.setColorAt(i, new Color(p.color));
         });
         meshRef.current.instanceMatrix.needsUpdate = true;
         meshRef.current.instanceColor!.needsUpdate = true;
      }
  }, [particles, dummy]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if(meshRef.current) {
        meshRef.current.rotation.y = t * 0.05;
        meshRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
        
        // Pulse effect
        particles.forEach((p, i) => {
             const scale = p.scale + Math.sin(t * p.speed + i) * 0.1;
             dummy.position.set(p.position[0], p.position[1], p.position[2]);
             dummy.rotation.set(
                 p.rotation[0] + t * 0.1,
                 p.rotation[1] + t * 0.1,
                 p.rotation[2]
             );
             dummy.scale.setScalar(Math.max(0.1, scale));
             dummy.updateMatrix();
             meshRef.current!.setMatrixAt(i, dummy.matrix);
        });
        meshRef.current.instanceMatrix.needsUpdate = true;
    }
    
    if(lightRef.current) {
        lightRef.current.position.x = Math.sin(t) * 10;
        lightRef.current.position.z = Math.cos(t) * 10;
    }
  });

  return (
    <group>
        <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial roughness={0.2} metalness={0.8} />
        </instancedMesh>
        <pointLight ref={lightRef} intensity={20} distance={20} color="#3b82f6" />
    </group>
  );
}

export function OfficeTour() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 2 });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="h-screen w-full relative bg-black overflow-hidden border-y border-white/5">
        <div className="absolute top-12 left-6 z-10 pointer-events-none mix-blend-difference">
            <h2 className="text-sm font-mono font-bold text-accent tracking-widest uppercase mb-2">Virtual HQ</h2>
            <h3 className="text-4xl font-bold font-heading text-white">The SoftBiz Nexus</h3>
        </div>
        
        <div className="absolute inset-0 z-0">
            <Canvas dpr={[1, 2]}> {/* Optimization: Adaptive DPR */}
                <PerspectiveCamera makeDefault position={[0, 0, 12]} />
                <ambientLight intensity={0.2} />
                <DataFlow count={600} />
                <Environment preset="city" />
            </Canvas>
        </div>

        <div className="absolute bottom-12 right-6 z-10 max-w-sm text-right pointer-events-none">
            <div className="glass-panel p-6 rounded-xl border border-white/10">
                 <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Our infrastructure is decentralized, resilient, and infinitely scalable. 
                    Welcome to the engine room of digital transformation.
                </p>
                <div className="flex justify-end gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-white">System Optimal</span>
                </div>
            </div>
        </div>
    </section>
  )
}
