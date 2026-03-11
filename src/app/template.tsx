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
    const [isRouting, setIsRouting] = useState(false);
    const [scramble, setScramble] = useState("");

    // Detect internal route changes (not the first paint, to avoid colliding with Global Preloader)
    useEffect(() => {
        // Skip root page since the global PageReveal handles the huge 2.2s intro there.
        if (pathname === "/") return;

        setIsRouting(true);
        let flips = 0;
        const targetText = "SECURE_ROUTE_ESTABLISHED";

        const interval = setInterval(() => {
            flips++;
            setScramble(Array.from({ length: targetText.length }).map(() => getRandomChar()).join(""));

            if (flips > 8) {
                clearInterval(interval);
                setScramble(targetText);
                setTimeout(() => setIsRouting(false), 300);
            }
        }, 40);

        return () => clearInterval(interval);
    }, [pathname]);

    return (
        <>
            <AnimatePresence>
                {isRouting && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[99998] bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center font-mono pointer-events-none"
                    >
                        <div className="text-blue-500/80 text-sm mb-4 tracking-[0.3em]">ROUTING PROTOCOL</div>
                        <div className="text-white text-xl sm:text-2xl font-bold tracking-widest">
                            {scramble}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: pathname === "/" ? 0 : 0.6 }}
            >
                {children}
            </motion.div>
        </>
    );
}
