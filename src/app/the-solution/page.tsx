"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function TheSolutionPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-black pt-32 pb-20">
            <Navbar />

            <div className="max-w-[1200px] mx-auto min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 text-sm font-medium mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    How we fix it
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-12 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 leading-[1.1]"
                >
                    Compliance should be provable,<br />not invasive.
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-5xl w-full"
                >
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                        <h3 className="text-xl font-bold mb-3 text-white">Continuous Compliance</h3>
                        <p className="text-white/60">Prove you are compliant without mirroring systems, copying logs, or centralizing raw evidence.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                        <h3 className="text-xl font-bold mb-3 text-white">Proof Instead of Privileged Access</h3>
                        <p className="text-white/60">Share cryptographic proofs instead of screenshots, exports, or direct access to sensitive environments.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                        <h3 className="text-xl font-bold mb-3 text-white">Automation instead of spreadsheets</h3>
                        <p className="text-white/60">AI agents keep controls mapped, tested, and up to date as your systems change.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                        <h3 className="text-xl font-bold mb-3 text-white">Privacy instead of exposure</h3>
                        <p className="text-white/60">Verification events are anchored across Algorand, Aleo, and Zcash for independent verifiability.</p>
                    </div>
                </motion.div>
            </div>

            {/* Background Texture Detail */}
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none z-50" />

            <Footer />
        </main>
    );
}
