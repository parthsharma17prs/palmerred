"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function GiantText({ text }: { text: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Moves horizontally slightly and scales up
    const x = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.1]);

    return (
        <section ref={ref} className="py-32 w-full overflow-hidden flex items-center justify-center min-h-[50vh]">
            <motion.h2
                style={{ x, scale }}
                className="text-[12vw] md:text-[15vw] font-black tracking-tighter uppercase whitespace-nowrap text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
                {text}
            </motion.h2>
        </section>
    );
}
