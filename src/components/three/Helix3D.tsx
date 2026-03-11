"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useInView } from "framer-motion";
import * as THREE from "three";

function Helix() {
    const groupRef = useRef<THREE.Group>(null);

    const spheres = useMemo(() => {
        const items = [];
        for (let i = 0; i < 30; i++) {
            const y = (i - 15) * 0.5;
            const angle = i * 0.5;
            items.push({ pos1: [Math.sin(angle), y, Math.cos(angle)], pos2: [Math.sin(angle + Math.PI), y, Math.cos(angle + Math.PI)] });
        }
        return items;
    }, []);

    useFrame((state) => {
        if (!groupRef.current) return;
        groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    });

    return (
        <group ref={groupRef}>
            {spheres.map((item, i) => (
                <group key={i}>
                    <mesh position={item.pos1 as any}>
                        <sphereGeometry args={[0.08, 8, 8]} />
                        <meshBasicMaterial color="#D0FF00" />
                    </mesh>
                    <mesh position={item.pos2 as any}>
                        <sphereGeometry args={[0.08, 8, 8]} />
                        <meshBasicMaterial color="#ffffff" />
                    </mesh>
                </group>
            ))}
        </group>
    );
}

export default function Helix3D() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { margin: "0px" });

    return (
        <div ref={containerRef} className="w-full h-full">
            {isInView && (
                <Canvas dpr={[1, 1]} camera={{ position: [0, 0, 10] }}>
                    <Helix />
                </Canvas>
            )}
        </div>
    );
}
