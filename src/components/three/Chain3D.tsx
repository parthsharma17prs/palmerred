"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useInView } from "framer-motion";
import * as THREE from "three";

function Link({ position, rotation }: { position: [number, number, number], rotation: [number, number, number] }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.rotation.x += Math.sin(state.clock.getElapsedTime()) * 0.01;
        meshRef.current.rotation.y += Math.cos(state.clock.getElapsedTime()) * 0.01;
    });

    return (
        <mesh ref={meshRef} position={position} rotation={rotation}>
            <torusGeometry args={[1, 0.2, 12, 16]} />
            <meshPhysicalMaterial color="#ffffff" metalness={0.9} roughness={0.1} />
        </mesh>
    );
}

export default function Chain3D() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { margin: "0px" });

    return (
        <div ref={containerRef} className="w-full h-full">
            {isInView && (
                <Canvas dpr={[1, 1]} camera={{ position: [0, 0, 8] }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <group rotation={[0, 0, Math.PI / 4]}>
                        <Link position={[0, -1.2, 0]} rotation={[0, 0, 0]} />
                        <Link position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
                        <Link position={[0, 1.2, 0]} rotation={[0, 0, 0]} />
                    </group>
                </Canvas>
            )}
        </div>
    );
}
