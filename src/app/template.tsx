"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:,.<>/?";

function getRandomChar() {
    return CHARS.charAt(Math.floor(Math.random() * CHARS.length));
}

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(false);

    const text = "Loading CompliLedger...";
    const [revealedCount, setRevealedCount] = useState(0);
    const [displayChars, setDisplayChars] = useState<string[]>([]);

    // Internal preloader is slightly faster
    const PRELOADER_DURATION = 1400;
    const REVEAL_DELAY_MS = 30;
    const FLIP_DELAY_MS = 20;

    // Detect internal route changes (not the first paint, to avoid colliding with Global Preloader)
    useEffect(() => {
        if (pathname === "/") return;

        setIsVisible(true);
        setDisplayChars(Array.from({ length: text.length }).map(c => getRandomChar()));
        setRevealedCount(0);

        let start = performance.now();
        let lastFlip = start;
        let animationFrameId: number;

        const tick = (now: number) => {
            const elapsed = now - start;

            const currentRevealed = Math.min(text.length, Math.floor(elapsed / Math.max(1, REVEAL_DELAY_MS)));
            setRevealedCount(currentRevealed);

            if (currentRevealed >= text.length) {
                return;
            }

            if (now - lastFlip >= Math.max(0, FLIP_DELAY_MS)) {
                setDisplayChars(prev => {
                    const next = [...prev];
                    for (let i = currentRevealed; i < text.length; i++) {
                        if (text[i] !== " ") next[i] = getRandomChar();
                        else next[i] = " ";
                    }
                    return next;
                });
                lastFlip = now;
            }

            animationFrameId = requestAnimationFrame(tick);
        };

        animationFrameId = requestAnimationFrame(tick);

        const timeout = setTimeout(() => {
            setIsVisible(false);
        }, PRELOADER_DURATION);

        return () => {
            cancelAnimationFrame(animationFrameId);
            clearTimeout(timeout);
        };
    }, [pathname]);

    return (
        <>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 z-[100000] bg-black flex items-center justify-center font-sans pointer-events-none"
                    >
                        <div className="text-white text-2xl md:text-4xl tracking-wider select-none">
                            {text.split("").map((char, index) => {
                                const isRevealed = index < revealedCount;
                                const displayChar = isRevealed ? char : (char === " " ? " " : displayChars[index] || getRandomChar());
                                return (
                                    <span
                                        key={index}
                                        className={isRevealed ? "text-white font-semibold" : "text-white/60"}
                                    >
                                        {displayChar}
                                    </span>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: pathname === "/" ? 0 : (PRELOADER_DURATION / 1000) + 0.1 }}
            >
                {children}
            </motion.div>
        </>
    );
}
