"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const lines = [
    "COMPLIANCE IS NOT A POINT-IN-TIME EVENT.",
    "IT IS A CONTINUOUS STATE OF VERIFICATION.",
    "WE BELIEVE IN ZERO ACCESS, FULL ASSURANCE.",
    "PROVING TRUTH WITHOUT REVEALING DATA.",
    "THE FUTURE OF AUDIT IS CRYPTOGRAPHIC."
];

export default function CoreManifesto() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <section ref={containerRef} className="py-40 px-6 md:px-12 bg-black text-white w-full border-t border-white/10 relative overflow-hidden xl:pl-32">
            <div className="flex flex-col gap-8 md:gap-12 relative z-10 border-l border-white/5 pl-12">
                {lines.map((line, i) => (
                    <ManifestoLine key={i} text={line} index={i} scrollYProgress={scrollYProgress} />
                ))}
            </div>

            <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none select-none">
                <span className="text-[20rem] font-black font-bebas text-white leading-none tracking-tighter uppercase">
                    MANIFESTO
                </span>
            </div>
        </section>
    );
}

function ManifestoLine({ text, index, scrollYProgress }: any) {
    const opacity = useTransform(
        scrollYProgress,
        [0.1 + index * 0.1, 0.2 + index * 0.1, 0.8 - index * 0.05, 0.9 - index * 0.05],
        [0.1, 1, 1, 0.1]
    );

    const x = useTransform(
        scrollYProgress,
        [0.1 + index * 0.1, 0.3 + index * 0.1],
        [-50, 0]
    );

    return (
        <motion.h3
            style={{ opacity, x }}
            className="text-4xl md:text-7xl lg:text-8xl font-normal font-bebas tracking-tighter uppercase leading-[0.9]"
        >
            {text}
        </motion.h3>
    );
}
