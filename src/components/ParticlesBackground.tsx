'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, PerspectiveCamera, Environment } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function Particles() {
  const count = 2000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const colors = useMemo(() => {
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const color = new THREE.Color();
      const rand = Math.random();
      if (rand < 0.33) {
        color.setHex(0xf472b6); // pink
      } else if (rand < 0.66) {
        color.setHex(0xa78bfa); // purple
      } else {
        color.setHex(0x2dd4bf); // teal
      }
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    return col;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function FloatingShapes() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={[3, 2, -2]}>
        <torusKnotGeometry args={[0.3, 0.1, 100, 16]} />
        <meshStandardMaterial
          color="#f472b6"
          emissive="#f472b6"
          emissiveIntensity={0.2}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      <mesh position={[-3, -1, -3]}>
        <octahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial
          color="#2dd4bf"
          emissive="#2dd4bf"
          emissiveIntensity={0.2}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

export default function ParticlesBackground() {
  return (
    <div className="fixed inset-0 -z-10 opacity-40">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#f472b6" />
        <pointLight position={[-10, -10, 10]} intensity={1} color="#2dd4bf" />
        <Particles />
        <FloatingShapes />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
