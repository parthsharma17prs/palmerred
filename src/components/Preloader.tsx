"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sequences = [
    { label: "Initializing ZK Circuits", code: "INIT_ZK_001" },
    { label: "Loading OSCAL Modules", code: "LOAD_OSCAL" },
    { label: "Binding Agentic AI", code: "BIND_AGNT" },
    { label: "Verifying SBOM Integrity", code: "SBOM_VFY" },
    { label: "Anchoring to Blockchain", code: "CHAIN_ANCH" },
    { label: "Compliance Ready", code: "STATUS_OK" },
];

const STEP_DURATION = 700; // ms per step

export default function Preloader({ onComplete }: { onComplete: () => void }) {
    const [index, setIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [done, setDone] = useState(false);

    // Advance step index
    useEffect(() => {
        document.body.style.overflow = "hidden";

        if (index >= sequences.length - 1) {
            setTimeout(() => {
                setDone(true);
                setTimeout(() => {
                    document.body.style.overflow = "auto";
                    onComplete();
                }, 900);
            }, 700);
            return;
        }

        const t = setTimeout(() => setIndex((i) => i + 1), STEP_DURATION);
        return () => clearTimeout(t);
    }, [index, onComplete]);

    // Smooth progress bar
    useEffect(() => {
        const targetProgress = Math.round(((index + 1) / sequences.length) * 100);
        let current = progress;
        const step = () => {
            if (current < targetProgress) {
                current += 1;
                setProgress(current);
                setTimeout(step, STEP_DURATION / (targetProgress - progress || 1));
            }
        };
        step();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index]);

    return (
        <AnimatePresence>
            {!done && (
                <motion.div
                    key="preloader"
                    className="fixed inset-0 z-[999999] bg-[#0b0c0f] text-white flex flex-col items-center justify-center overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{
                        clipPath: "inset(0 0 100% 0)",
                        transition: { duration: 1.0, ease: [0.76, 0, 0.24, 1] },
                    }}
                >
                    {/* Background grid */}
                    <div
                        className="absolute inset-0 opacity-[0.04] pointer-events-none"
                        style={{
                            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                            backgroundSize: "60px 60px",
                        }}
                    />

                    {/* Radial glow */}
                    <div className="absolute inset-0 pointer-events-none" style={{
                        background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(100,116,139,0.08) 0%, transparent 70%)"
                    }} />

                    {/* Logo / Brand */}
                    <motion.div
                        className="flex flex-col items-center gap-3 mb-20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Animated hex/shield icon */}
                        <motion.svg
                            width="52"
                            height="52"
                            viewBox="0 0 52 52"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <motion.path
                                d="M26 4L46 14V28C46 37.94 37.05 46.68 26 49C14.95 46.68 6 37.94 6 28V14L26 4Z"
                                stroke="rgba(100,116,139,0.6)"
                                strokeWidth="1.5"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                            <motion.path
                                d="M26 14L34 18V26C34 30.97 30.52 35.34 26 36.5C21.48 35.34 18 30.97 18 26V18L26 14Z"
                                stroke="rgba(208,255,0,0.5)"
                                strokeWidth="1"
                                fill="rgba(208,255,0,0.04)"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
                            />
                        </motion.svg>

                        <div className="text-center">
                            <motion.h1
                                className="text-2xl md:text-3xl font-bold tracking-[0.15em] uppercase"
                                style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.2em" }}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                Compli<span className="text-[#D0FF00]">Ledger</span>
                            </motion.h1>
                            <motion.p
                                className="text-[10px] text-white/30 tracking-[0.4em] uppercase mt-1 font-mono"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                            >
                                Provable Compliance. Zero Exposure.
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* Animated step label */}
                    <div className="relative h-10 w-full max-w-sm flex items-center justify-center overflow-hidden mb-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                className="absolute flex items-center gap-3"
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -16 }}
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <span className="text-[10px] font-mono text-[#D0FF00]/60 tracking-widest">
                                    [{sequences[index].code}]
                                </span>
                                <span className="text-sm font-light text-white/70 tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    {sequences[index].label}
                                </span>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Progress bar */}
                    <div className="w-64 md:w-80 relative">
                        {/* Track */}
                        <div className="h-[1px] w-full bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-white/40 to-[#D0FF00]"
                                style={{ width: `${progress}%` }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            />
                        </div>

                        {/* Percentage */}
                        <div className="flex justify-between mt-2">
                            <span className="text-[9px] font-mono text-white/20 tracking-widest uppercase">
                                System Boot
                            </span>
                            <motion.span
                                className="text-[9px] font-mono text-[#D0FF00]/60 tracking-widest"
                                key={progress}
                            >
                                {progress}%
                            </motion.span>
                        </div>
                    </div>

                    {/* Completed steps */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-start gap-1 opacity-30">
                        {sequences.slice(0, index).map((s, i) => (
                            <motion.div
                                key={i}
                                className="flex items-center gap-2"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <span className="text-[8px] font-mono text-[#D0FF00]">✓</span>
                                <span className="text-[8px] font-mono text-white/40 tracking-wider">{s.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
