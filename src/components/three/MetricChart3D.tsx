"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useInView } from "framer-motion";
import * as THREE from "three";

function Bar({ position, height, color }: { position: [number, number, number], height: number, color: string }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        const targetHeight = height + Math.sin(state.clock.getElapsedTime() * 2 + position[0]) * 0.2;
        meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, targetHeight, 0.1);
        meshRef.current.position.y = meshRef.current.scale.y / 2;
    });

    return (
        <mesh ref={meshRef} position={position}>
            <boxGeometry args={[0.5, 1, 0.5]} />
            <meshStandardMaterial color={color} metalness={0.6} roughness={0.4} emissive={color} emissiveIntensity={0.1} />
        </mesh>
    );
}

function Chart() {
    return (
        <group position={[-1.5, -1, 0]}>
            <Bar position={[0, 0, 0]} height={2} color="#64748B" />
            <Bar position={[0.7, 0, 0]} height={3.5} color="#D0FF00" />
            <Bar position={[1.4, 0, 0]} height={2.5} color="#ffffff" />
            <Bar position={[2.1, 0, 0]} height={4} color="#64748B" />
            <Bar position={[2.8, 0, 0]} height={3} color="#D0FF00" />

            {/* Base Grid */}
            <gridHelper args={[10, 10, "#ffffff", "#ffffff"]} position={[1.4, 0, 0]}>
                <meshBasicMaterial transparent opacity={0.1} />
            </gridHelper>
        </group>
    );
}

export default function MetricChart3D() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { margin: "0px" });

    return (
        <div ref={containerRef} className="w-full h-full">
            {isInView && (
                <Canvas dpr={[1, 1]} camera={{ position: [0, 2, 8] }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <Chart />
                </Canvas>
            )}
        </div>
    );
}
