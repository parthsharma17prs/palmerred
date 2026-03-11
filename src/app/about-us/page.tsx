"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function AboutUsPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-black pt-32 pb-20">
            <Navbar />

            <div className="max-w-[1200px] mx-auto min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 border border-white/20 text-sm font-medium mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    Our Team
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 leading-[1.1]"
                >
                    Restoring Trust to <br /> The Digital Ledger
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-2xl text-white/50 max-w-4xl leading-relaxed mx-auto text-left flex flex-col items-center"
                >
                    <p className="mb-6 text-center">
                        Originating from the need for absolute data privacy during manual compliance cycles, CompliLedger was built by cybersecurity veterans and cryptography experts to bring mathematical precision to regulatory proofs.
                    </p>
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 mt-6 w-full text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">The Mission</h3>
                        <p className="text-white/60">
                            We believe that organizations should never have to sacrifice competitive secrets, intellectual property, or sensitive data access simply to prove they meet a regulatory framework. Our goal is to make all software and systems seamlessly provable across the globe.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Background Texture Detail */}
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none z-50" />

            <Footer />
        </main>
    );
}
