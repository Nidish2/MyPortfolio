"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Text,
  Float,
  Stars,
  MeshDistortMaterial,
} from "@react-three/drei";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Download } from "lucide-react";
import type * as THREE from "three";

type AnimatedSphereProps = {
  position: [number, number, number];
  color: string;
  speed: number;
  distort: number;
};

function AnimatedSphere({
  position,
  color,
  speed,
  distort,
}: AnimatedSphereProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        Math.sin(clock.getElapsedTime() * speed) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color={color}
        speed={0.5}
        distort={distort}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
}

function FloatingName() {
  const { viewport } = useThree();
  const isMobile = viewport.width < 5;

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <Text
        font="/fonts/Inter-Bold.ttf"
        fontSize={isMobile ? 0.8 : 1.2}
        color="#5e1fff"
        position={[0, 0.2, 0]}
        maxWidth={4}
        textAlign="center"
      >
        NIDISH
      </Text>
    </Float>
  );
}

function Scene() {
  const { viewport } = useThree();
  const isMobile = viewport.width < 5;

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />

      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#5e1fff" />
      <pointLight position={[10, -10, 5]} intensity={0.5} color="#2ee5ff" />

      <Stars
        radius={50}
        depth={50}
        count={1000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      <group scale={isMobile ? 0.6 : 1}>
        <AnimatedSphere
          position={[-3, 0, -2]}
          color="#5e1fff"
          speed={0.3}
          distort={0.4}
        />
        <AnimatedSphere
          position={[3, 0, -2]}
          color="#2ee5ff"
          speed={0.5}
          distort={0.3}
        />
        <FloatingName />
      </group>
    </>
  );
}

export default function Hero3D() {
  const [words] = useTypewriter({
    words: [
      "Web Developer",
      "Problem Solver",
      "CS Engineer",
      "MERN Stack Developer",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas className="w-full h-full" dpr={[1, 2]}>
          <Scene />
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b dark:from-[#0f0c29]/30 dark:via-[#302b63]/30 dark:to-[#24243e]/30 from-white/30 via-blue-50/30 to-gray-100/30 z-0"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#5e1fff] to-[#2ee5ff]">
            NIDISH
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-800 dark:text-white h-8"
          >
            <span>{words}</span>
            <Cursor cursorColor="#2ee5ff" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {isMounted ? (
              <>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full px-8 py-4 bg-gradient-to-r from-[#5e1fff] to-[#2ee5ff] text-white font-bold hover:shadow-lg hover:shadow-[#5e1fff]/50 transition-all duration-300 w-full sm:w-auto"
                  onClick={() => {
                    window.scrollTo({
                      top: window.innerHeight,
                      behavior: "smooth",
                    });
                  }}
                >
                  Explore My Work
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="Nidish - Resume.pdf"
                  download
                  className="rounded-full px-8 py-4 bg-transparent border-2 border-[#5e1fff] text-[#5e1fff] dark:text-white font-bold hover:shadow-lg hover:bg-[#5e1fff]/10 transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
                >
                  <Download className="mr-2" size={18} />
                  Download Resume
                </motion.a>
              </>
            ) : (
              <>
                <div className="rounded-full px-8 py-4 bg-gradient-to-r from-[#5e1fff] to-[#2ee5ff] text-white font-bold w-full sm:w-auto text-center">
                  Explore My Work
                </div>
                <div className="rounded-full px-8 py-4 bg-transparent border-2 border-[#5e1fff] text-[#5e1fff] dark:text-white font-bold flex items-center justify-center w-full sm:w-auto">
                  <Download className="mr-2" size={18} />
                  Download Resume
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
