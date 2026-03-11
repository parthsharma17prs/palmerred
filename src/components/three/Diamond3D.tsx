"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useInView } from "framer-motion";
import * as THREE from "three";

function Diamond() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    });

    return (
        <mesh ref={meshRef}>
            <octahedronGeometry args={[2, 0]} />
            <meshPhysicalMaterial
                transparent
                opacity={0.3}
                color="#64748B"
                roughness={0.1}
                metalness={0.8}
                transmission={0.5}
                thickness={1}
            />
        </mesh>
    );
}

export default function Diamond3D() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { margin: "100px" });

    return (
        <div ref={containerRef} className="w-full h-full pointer-events-none">
            {isInView && (
                <Canvas dpr={[1, 1]}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1.5} />
                    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                        <Diamond />
                    </Float>
                </Canvas>
            )}
        </div>
    );
}
