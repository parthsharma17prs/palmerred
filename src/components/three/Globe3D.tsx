"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useInView } from "framer-motion";
import * as THREE from "three";

function NodeGlobe() {
    const pointsRef = useRef<THREE.Points>(null);

    // Generate random points on a sphere
    const count = 600;
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const phi = Math.acos(-1 + (2 * i) / count);
            const theta = Math.sqrt(count * Math.PI) * phi;
            pos[i * 3] = 2 * Math.cos(theta) * Math.sin(phi);
            pos[i * 3 + 1] = 2 * Math.sin(theta) * Math.sin(phi);
            pos[i * 3 + 2] = 2 * Math.cos(phi);
        }
        return pos;
    }, []);

    useFrame((state) => {
        if (!pointsRef.current) return;
        pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
        pointsRef.current.rotation.z = state.clock.getElapsedTime() * 0.05;
    });

    return (
        <group>
            <Points ref={pointsRef} positions={positions} stride={3}>
                <PointMaterial
                    transparent
                    color="#D0FF00"
                    size={0.05}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
            <mesh>
                <sphereGeometry args={[1.9, 16, 16]} />
                <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.03} />
            </mesh>
        </group>
    );
}

export default function Globe3D() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { margin: "0px" });

    return (
        <div ref={containerRef} className="w-full h-full">
            {isInView && (
                <Canvas dpr={[1, 1]}>
                    <ambientLight intensity={0.5} />
                    <NodeGlobe />
                </Canvas>
            )}
        </div>
    );
}
