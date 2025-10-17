import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Text, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import FloatingGeometry from './FloatingGeometry';
import { Group } from 'three';

const HeroContent = () => {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Text
          fontSize={2}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          position={[0, 1, 0]}
          font="/fonts/inter-bold.woff"
        >
          ZenStart
        </Text>
      </Float>

      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3}>
        <Text
          fontSize={0.8}
          color="#a855f7"
          anchorX="center"
          anchorY="middle"
          position={[0, -0.5, 0]}
          font="/fonts/inter-regular.woff"
        >
          Digital Agency
        </Text>
      </Float>

      {/* Floating geometries */}
      <FloatingGeometry
        position={[-4, 2, -2]}
        geometry="box"
        color="#8b5cf6"
        scale={0.5}
        speed={1.2}
      />
      <FloatingGeometry
        position={[4, -1, -1]}
        geometry="sphere"
        color="#3b82f6"
        scale={0.7}
        speed={0.8}
      />
      <FloatingGeometry
        position={[-2, -2, 1]}
        geometry="octahedron"
        color="#06b6d4"
        scale={0.6}
        speed={1.5}
      />
      <FloatingGeometry
        position={[3, 2, 2]}
        geometry="box"
        color="#f59e0b"
        scale={0.4}
        speed={2}
      />
    </group>
  );
};

const HeroScene = () => {
  return (
    <motion.div
      className="absolute inset-0 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
          
          <Stars
            radius={300}
            depth={60}
            count={1000}
            factor={7}
            saturation={0}
            fade
            speed={0.5}
          />
          
          <HeroContent />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </motion.div>
  );
};

export default HeroScene;