"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useInView } from "framer-motion";
import * as THREE from "three";

function Wave() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        const positions = meshRef.current.geometry.attributes.position;
        const time = state.clock.getElapsedTime();
        for (let i = 0; i < positions.count; i++) {
            const x = positions.getX(i);
            const y = positions.getY(i);
            const z = Math.sin(x * 0.5 + time) * Math.cos(y * 0.5 + time) * 0.5;
            positions.setZ(i, z);
        }
        positions.needsUpdate = true;
    });

    return (
        <mesh ref={meshRef} rotation={[-Math.PI / 3, 0, 0]}>
            <planeGeometry args={[10, 10, 20, 20]} />
            <meshBasicMaterial color="#64748B" wireframe transparent opacity={0.15} />
        </mesh>
    );
}

export default function WaveMesh3D() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { margin: "0px" });

    return (
        <div ref={containerRef} className="w-full h-full opacity-50">
            {isInView && (
                <Canvas dpr={[1, 1]} camera={{ position: [0, 0, 5] }}>
                    <Wave />
                </Canvas>
            )}
        </div>
    );
}
