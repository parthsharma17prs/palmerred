"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:,.<>/?";

function getRandomChar() {
    return CHARS.charAt(Math.floor(Math.random() * CHARS.length));
}

export default function PageReveal() {
    const [isVisible, setIsVisible] = useState(true);
    const text = "Loading CompliLedger...";
    const [revealedCount, setRevealedCount] = useState(0);
    const [displayChars, setDisplayChars] = useState<string[]>([]);

    // Setup animation params matching the live site
    const PRELOADER_DURATION = 2200;
    const REVEAL_DELAY_MS = 60;
    const FLIP_DELAY_MS = 40;

    useEffect(() => {
        // Prevent scroll
        document.body.style.overflow = "hidden";

        let start = performance.now();
        let lastFlip = start;
        let animationFrameId: number;

        // Initialize with random chars
        setDisplayChars(Array.from({ length: text.length }).map(c => getRandomChar()));

        const tick = (now: number) => {
            const elapsed = now - start;

            // Calculate how many characters should be revealed by now
            const currentRevealed = Math.min(text.length, Math.floor(elapsed / Math.max(1, REVEAL_DELAY_MS)));
            setRevealedCount(currentRevealed);

            if (currentRevealed >= text.length) {
                return; // Finished revealing
            }

            // Flip the remaining unrevealed characters
            if (now - lastFlip >= Math.max(0, FLIP_DELAY_MS)) {
                setDisplayChars(prev => {
                    const next = [...prev];
                    for (let i = currentRevealed; i < text.length; i++) {
                        if (text[i] !== " ") {
                            next[i] = getRandomChar();
                        } else {
                            next[i] = " ";
                        }
                    }
                    return next;
                });
                lastFlip = now;
            }

            animationFrameId = requestAnimationFrame(tick);
        };

        animationFrameId = requestAnimationFrame(tick);

        // Hide preloader completely after PRELOADER_DURATION
        const timeout = setTimeout(() => {
            setIsVisible(false);
            document.body.style.overflow = "auto";
        }, PRELOADER_DURATION);

        return () => {
            cancelAnimationFrame(animationFrameId);
            clearTimeout(timeout);
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100000] bg-black flex items-center justify-center font-sans"
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
    );
}
