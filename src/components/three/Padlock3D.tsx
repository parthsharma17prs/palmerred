"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshWobbleMaterial } from "@react-three/drei";
import { useInView } from "framer-motion";
import * as THREE from "three";

function Padlock() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!groupRef.current) return;
        groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
    });

    return (
        <group ref={groupRef}>
            {/* Body */}
            <mesh position={[0, -0.5, 0]}>
                <boxGeometry args={[2, 1.5, 0.8]} />
                <meshPhysicalMaterial color="#64748B" metalness={0.9} roughness={0.1} reflectivity={1} />
            </mesh>

            {/* Shackle */}
            <mesh position={[0, 0.7, 0]} rotation={[0, 0, Math.PI / 2]}>
                <torusGeometry args={[0.8, 0.1, 12, 16]} />
                <meshStandardMaterial color="#D0FF00" metalness={0.5} roughness={0.5} />
            </mesh>

            {/* Keyhole */}
            <mesh position={[0, -0.5, 0.45]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.2, 0.2, 0.1, 12]} />
                <meshBasicMaterial color="#000000" />
            </mesh>
        </group>
    );
}

export default function Padlock3D() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { margin: "0px" });

    return (
        <div ref={containerRef} className="w-full h-full">
            {isInView && (
                <Canvas dpr={[1, 1]} camera={{ position: [0, 0, 5] }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1.5} />
                    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                        <Padlock />
                    </Float>
                </Canvas>
            )}
        </div>
    );
}
