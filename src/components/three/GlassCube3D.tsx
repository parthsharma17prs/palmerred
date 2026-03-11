"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useInView } from "framer-motion";
import * as THREE from "three";

function GlassCube() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[2, 2, 2]} />
            <meshPhysicalMaterial
                transparent
                opacity={0.15}
                color="#ffffff"
                roughness={0.1}
                metalness={0.2}
                transmission={0.8}
                thickness={0.5}
            />
        </mesh>
    );
}

export default function GlassCube3D() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { margin: "100px" });

    return (
        <div ref={containerRef} className="w-full h-full pointer-events-none">
            {isInView && (
                <Canvas dpr={[1, 1]} camera={{ position: [0, 0, 5], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                        <GlassCube />
                    </Float>
                </Canvas>
            )}
        </div>
    );
}
