"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshWobbleMaterial, PerspectiveCamera } from "@react-three/drei";
import { useInView } from "framer-motion";
import * as THREE from "three";

function HexagonShield() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
        meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    });

    return (
        <group>
            {/* Outer Glass Hexagon */}
            <mesh ref={meshRef}>
                <cylinderGeometry args={[2, 2, 0.4, 6]} />
                <meshPhysicalMaterial
                    transparent
                    opacity={0.2}
                    color="#64748B"
                    roughness={0.1}
                    metalness={0.9}
                    transmission={0.5}
                    thickness={1}
                />
            </mesh>

            {/* Inner Glowing Core */}
            <mesh scale={[0.8, 0.8, 0.8]}>
                <cylinderGeometry args={[1.5, 1.5, 0.2, 6]} />
                <meshPhysicalMaterial
                    color="#D0FF00"
                    transparent
                    opacity={0.8}
                    emissive="#D0FF00"
                    emissiveIntensity={0.5}
                />
            </mesh>

            {/* Decorative Wireframe */}
            <mesh scale={[1.1, 1.1, 1.1]}>
                <cylinderGeometry args={[2, 2, 0.4, 6]} />
                <meshBasicMaterial
                    color="#ffffff"
                    wireframe
                    transparent
                    opacity={0.1}
                />
            </mesh>
        </group>
    );
}

export default function Shield3D() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { margin: "0px" });

    return (
        <div ref={containerRef} className="w-full h-full">
            {isInView && (
                <Canvas dpr={[1, 1]}>
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1.5} />
                    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                        <HexagonShield />
                    </Float>
                </Canvas>
            )}
        </div>
    );
}
