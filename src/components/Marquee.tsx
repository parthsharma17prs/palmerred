"use client";

import { motion } from 'framer-motion';

export default function Marquee({ text }: { text: string }) {
    // Duplicate the text multiple times to ensure seamless scrolling
    const fullText = text.repeat(10);

    return (
        <div className="w-full border-t border-b border-white/10 bg-white text-black py-4 overflow-hidden relative flex">
            <motion.div
                className="whitespace-nowrap flex font-semibold text-lg md:text-xl uppercase tracking-widest pl-4"
                animate={{ x: [0, -1000] }}
                transition={{ ease: 'linear', duration: 15, repeat: Infinity }}
            >
                <span>{fullText}</span>
            </motion.div>
        </div>
    );
}
