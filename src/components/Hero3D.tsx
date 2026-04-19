import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Stars } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

const Globe = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.15;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
      <Icosahedron ref={ref} args={[1.6, 2]}>
        <meshStandardMaterial
          color="#e0b04c"
          wireframe
          emissive="#d4a045"
          emissiveIntensity={0.4}
        />
      </Icosahedron>
    </Float>
  );
};

const Hero3D = () => (
  <div className="absolute inset-0 pointer-events-none opacity-40 md:opacity-60">
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#f0c674" />
         
        <Stars radius={50} depth={50} count={1500} factor={3} fade speed={1} />
        <Globe />
      </Suspense>
    </Canvas>
  </div>
);

export default Hero3D;
