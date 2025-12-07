"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

function ParticleNetwork({ count = 200 }) {
  const pointsRef = useRef<any>(null);
  const linesRef = useRef<any>(null);

  // Generate random points in a sphere
  const [positions, linkPositions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const linkPos = [];
    const radius = 3.2;

    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = Math.cbrt(Math.random()) * radius;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      // Create lines for close points (pseudo-network)
      // Connect every 5th point to previous for a sparse network look
      if (i > 0 && i % 5 === 0) {
        linkPos.push(x, y, z);
        linkPos.push(
          pos[(i - 1) * 3],
          pos[(i - 1) * 3 + 1],
          pos[(i - 1) * 3 + 2]
        );
      }
    }
    return [pos, new Float32Array(linkPos)];
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.x =
        Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
    }
    if (linesRef.current && pointsRef.current) {
      linesRef.current.rotation.copy(pointsRef.current.rotation);
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={pointsRef}
        positions={positions}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#a855f7"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.9}
          toneMapped={false}
        />
      </Points>
      {/* Simple lines connecting some points */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linkPositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#5808a3"
          transparent
          opacity={0.3}
          toneMapped={false}
        />
      </lineSegments>
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <fog attach="fog" args={["#030305", 2, 8]} />
      <ambientLight intensity={0.9} />
      <ParticleNetwork count={1000} />
    </Canvas>
  );
}