"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ------------------------------------------------------------------ */
/*  IVR Call-Routing Visualization                                     */
/*  Visual flow: Incoming Call → IVR Core → Selection → Routing → Dept */
/* ------------------------------------------------------------------ */

/* A single orbiting "call node" that travels along a circular path */
function CallNode({
  radius,
  speed,
  phase,
  yOffset,
  color,
  size = 0.06,
}: {
  radius: number;
  speed: number;
  phase: number;
  yOffset: number;
  color: string;
  size?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + phase;
    if (meshRef.current) {
      meshRef.current.position.x = Math.cos(t) * radius;
      meshRef.current.position.z = Math.sin(t) * radius;
      meshRef.current.position.y = yOffset + Math.sin(t * 2) * 0.15;
    }
    if (ringRef.current) {
      const pulse = 1 + Math.sin(state.clock.getElapsedTime() * 3 + phase) * 0.3;
      ringRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={2}
          toneMapped={false}
        />
      </mesh>
      {/* Pulsing halo around the node */}
      <mesh ref={ringRef}>
        <sphereGeometry args={[size * 1.8, 16, 16]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.15}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

/* Static department nodes positioned around the IVR core */
function DepartmentNode({
  position,
  color,
  label,
}: {
  position: [number, number, number];
  color: string;
  label: string;
}) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      const pulse = 1 + Math.sin(state.clock.getElapsedTime() * 2 + position[0]) * 0.2;
      ringRef.current.scale.setScalar(pulse);
      (ringRef.current.material as THREE.MeshBasicMaterial).opacity =
        0.1 + Math.sin(state.clock.getElapsedTime() * 2 + position[0]) * 0.05;
    }
  });

  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.5}
          toneMapped={false}
        />
      </mesh>
      <mesh ref={ringRef}>
        <sphereGeometry args={[0.14, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.12} toneMapped={false} />
      </mesh>
    </group>
  );
}

/* Animated routing lines from the IVR core to each department */
function RoutingLines() {
  const linesRef = useRef<THREE.LineSegments>(null);
  const materialRef = useRef<THREE.LineBasicMaterial>(null);

  // Department positions (must match DepartmentNode positions)
  const departments: [number, number, number][] = useMemo(
    () => [
      [2.2, 0.8, 0],
      [1.6, -0.6, 1.6],
      [-1.6, -0.6, 1.6],
      [-2.2, 0.8, 0],
      [1.6, -0.6, -1.6],
      [-1.6, -0.6, -1.6],
    ],
    []
  );

  const positions = useMemo(() => {
    const arr: number[] = [];
    departments.forEach((d) => {
      // Line from center (0,0,0) to department
      arr.push(0, 0, 0, d[0], d[1], d[2]);
    });
    return new Float32Array(arr);
  }, [departments]);

  useFrame((state) => {
    if (materialRef.current) {
      // Pulsing opacity to simulate data/call flow
      materialRef.current.opacity =
        0.15 + Math.sin(state.clock.getElapsedTime() * 1.5) * 0.1;
    }
  });

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <lineBasicMaterial
        ref={materialRef}
        color="#00c2ff"
        transparent
        opacity={0.2}
        toneMapped={false}
      />
    </lineSegments>
  );
}

/* The central IVR core — a pulsing, rotating wireframe sphere */
function IVRCore() {
  const coreRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.3;
      coreRef.current.rotation.x = t * 0.15;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = -t * 0.5;
      innerRef.current.rotation.z = t * 0.2;
    }
    if (glowRef.current) {
      const pulse = 1 + Math.sin(t * 2) * 0.08;
      glowRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group>
      {/* Outer wireframe icosahedron */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.55, 1]} />
        <meshBasicMaterial
          color="#7c3aed"
          wireframe
          transparent
          opacity={0.6}
          toneMapped={false}
        />
      </mesh>
      {/* Inner solid core */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[0.3, 0]} />
        <meshStandardMaterial
          color="#7c3aed"
          emissive="#7c3aed"
          emissiveIntensity={1.5}
          toneMapped={false}
        />
      </mesh>
      {/* Outer glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshBasicMaterial
          color="#7c3aed"
          transparent
          opacity={0.08}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

/* Voice waveform — animated bars at the bottom of the scene */
function VoiceWaveform() {
  const groupRef = useRef<THREE.Group>(null);
  const barCount = 24;
  const barsRef = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    barsRef.current.forEach((bar, i) => {
      if (bar) {
        const wave = Math.sin(t * 4 + i * 0.5) * 0.5 + 0.5;
        const height = 0.05 + wave * 0.35;
        bar.scale.y = height;
        (bar.material as THREE.MeshBasicMaterial).opacity = 0.3 + wave * 0.4;
      }
    });
  });

  const barPositions = useMemo(() => {
    const spacing = 0.12;
    const startX = -((barCount - 1) * spacing) / 2;
    return Array.from({ length: barCount }, (_, i) => startX + i * spacing);
  }, []);

  return (
    <group ref={groupRef} position={[0, -1.8, 0]}>
      {barPositions.map((x, i) => (
        <mesh
          key={i}
          ref={(el) => {
            barsRef.current[i] = el;
          }}
          position={[x, 0, 0]}
        >
          <boxGeometry args={[0.04, 1, 0.04]} />
          <meshBasicMaterial
            color={i % 3 === 0 ? "#00c2ff" : "#7c3aed"}
            transparent
            opacity={0.5}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

/* Orbital rings representing call routing paths */
function OrbitalRings() {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ring1Ref.current) ring1Ref.current.rotation.z = t * 0.1;
    if (ring2Ref.current) ring2Ref.current.rotation.z = -t * 0.15;
    if (ring3Ref.current) ring3Ref.current.rotation.z = t * 0.08;
  });

  return (
    <group rotation={[Math.PI / 2.5, 0, 0]}>
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.2, 0.008, 8, 64]} />
        <meshBasicMaterial color="#00c2ff" transparent opacity={0.3} toneMapped={false} />
      </mesh>
      <mesh ref={ring2Ref}>
        <torusGeometry args={[1.8, 0.006, 8, 64]} />
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.2} toneMapped={false} />
      </mesh>
      <mesh ref={ring3Ref}>
        <torusGeometry args={[2.4, 0.005, 8, 64]} />
        <meshBasicMaterial color="#00c2ff" transparent opacity={0.15} toneMapped={false} />
      </mesh>
    </group>
  );
}

/* Main scene composition */
function IVRScene() {
  const departmentColors = [
    "#00c2ff",
    "#7c3aed",
    "#00c2ff",
    "#7c3aed",
    "#00c2ff",
    "#7c3aed",
  ];

  const departmentPositions: [number, number, number][] = [
    [2.2, 0.8, 0],
    [1.6, -0.6, 1.6],
    [-1.6, -0.6, 1.6],
    [-2.2, 0.8, 0],
    [1.6, -0.6, -1.6],
    [-1.6, -0.6, -1.6],
  ];

  return (
    <>
      <fog attach="fog" args={["#080a2e", 3, 9]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 0, 0]} intensity={2} color="#7c3aed" />
      <pointLight position={[3, 3, 3]} intensity={1} color="#00c2ff" />

      {/* Central IVR core */}
      <IVRCore />

      {/* Orbital routing rings */}
      <OrbitalRings />

      {/* Routing lines from core to departments */}
      <RoutingLines />

      {/* Department nodes around the core */}
      {departmentPositions.map((pos, i) => (
        <DepartmentNode
          key={i}
          position={pos}
          color={departmentColors[i]}
          label={`Dept ${i + 1}`}
        />
      ))}

      {/* Orbiting call nodes (active calls being routed) */}
      <CallNode radius={1.2} speed={0.6} phase={0} yOffset={0.3} color="#00c2ff" size={0.05} />
      <CallNode radius={1.8} speed={-0.4} phase={1.5} yOffset={-0.2} color="#7c3aed" size={0.045} />
      <CallNode radius={2.4} speed={0.3} phase={3} yOffset={0.5} color="#00c2ff" size={0.04} />
      <CallNode radius={1.5} speed={-0.5} phase={2} yOffset={-0.4} color="#a855f7" size={0.05} />
      <CallNode radius={2.0} speed={0.45} phase={4.5} yOffset={0.1} color="#00c2ff" size={0.035} />

      {/* Voice waveform at the bottom */}
      <VoiceWaveform />
    </>
  );
}

export default function ThreeBackground() {
  const [isMobile, setIsMobile] = React.useState(false);
  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(rm.matches);
  }, []);

  // Reduce complexity on mobile for performance
  const dpr: [number, number] = isMobile ? [1, 1.5] : [1, 2];
  const cameraPosition: [number, number, number] = isMobile ? [0, 0.3, 4.5] : [0, 0.5, 5];
  const fov = isMobile ? 55 : 50;

  return (
    <Canvas
      camera={{ position: cameraPosition, fov }}
      dpr={dpr}
      gl={{ antialias: !isMobile, alpha: true }}
      style={{ opacity: reducedMotion ? 0.6 : 1 }}
    >
      <IVRScene />
    </Canvas>
  );
}
