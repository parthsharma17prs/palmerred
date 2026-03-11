"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function TheProblemPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-black pt-32 pb-20">
            <Navbar />

            <div className="max-w-[1200px] mx-auto min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-500 border border-red-500/20 text-sm font-medium mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    The problem we set out to solve
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 leading-[1.1]"
                >
                    Modern compliance is broken.
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-2xl text-white/50 max-w-3xl leading-relaxed mx-auto text-left flex flex-col items-center"
                >
                    <p className="mb-6 font-semibold text-white/90">Organizations are forced to:</p>
                    <ul className="space-y-4 mb-8 text-left inline-block">
                        <li className="flex items-start gap-4">
                            <span className="text-white mt-1">•</span>
                            <span>Hand over sensitive logs and architectural data</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="text-white mt-1">•</span>
                            <span>Grant external auditors access to internal environments</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="text-white mt-1">•</span>
                            <span>Rely on trust instead of math</span>
                        </li>
                    </ul>
                    <p className="text-white/80 font-semibold mb-6">
                        This approach increases risk, slows innovation, and erodes proof.
                    </p>
                    <p className="text-white font-bold text-2xl">
                        CompliLedger was built to change that.
                    </p>
                </motion.div>
            </div>

            {/* Background Texture Detail */}
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none z-50" />

            <Footer />
        </main>
    );
}
