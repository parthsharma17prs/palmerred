"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useInView } from "framer-motion";
import * as THREE from "three";

function Token({ label, speed, radius }: { label: string, speed: number, radius: number }) {
    const meshRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        const t = state.clock.getElapsedTime() * speed;
        meshRef.current.position.x = Math.cos(t) * radius;
        meshRef.current.position.z = Math.sin(t) * radius;
        meshRef.current.rotation.y += 0.05;
    });

    return (
        <group ref={meshRef}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.5, 0.5, 0.1, 16]} />
                <meshPhysicalMaterial color="#D0FF00" metalness={0.9} roughness={0.1} />
            </mesh>
            <Text
                position={[0, 0, 0.06]}
                fontSize={0.2}
                color="black"
                anchorX="center"
                anchorY="middle"
            >
                {label}
            </Text>
        </group>
    );
}

export default function OrbitingTokens3D() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { margin: "0px" });

    return (
        <div ref={containerRef} className="w-full h-[400px]">
            {isInView && (
                <Canvas dpr={[1, 1]} camera={{ position: [0, 5, 10] }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <Token label="ZK" speed={0.5} radius={3} />
                    <Token label="OSCAL" speed={0.7} radius={4.5} />
                    <Token label="SBOM" speed={0.4} radius={6} />
                    <gridHelper args={[20, 20, "#ffffff", "#ffffff"]} position={[0, -1, 0]}>
                        <meshBasicMaterial transparent opacity={0.05} />
                    </gridHelper>
                </Canvas>
            )}
        </div>
    );
}
