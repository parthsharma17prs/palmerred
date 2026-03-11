"use client";

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Padlock3D from './three/Padlock3D';

export default function PrivacyFirst() {
    return (
        <section className="py-40 px-6 md:px-12 bg-black text-white w-full border-t border-white/10 relative overflow-hidden xl:pl-32">

            {/* 3D Visual Accent */}
            <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-20 z-0">
                <Padlock3D />
            </div>

            <div className="flex flex-col gap-12 relative z-10 border-l border-white/5 pl-12 max-w-6xl">
                <div className="flex flex-col gap-4">
                    <span className="text-accent font-bebas text-sm tracking-[0.4em] uppercase flex items-center gap-4">
                        Core Principle <span className="text-white/10 text-[10px] tracking-widest font-sans">// ZERO_DATA_ARCHITECTURE</span>
                    </span>
                    <h2 className="text-7xl md:text-[10rem] font-normal font-bebas tracking-tighter uppercase leading-[0.8]">
                        PRIVACY <br /> <span className="text-accent text-shadow-glow">FIRST</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-2xl md:text-3xl font-light text-white/60 leading-tight font-sans"
                    >
                        We believe that privacy is not a feature—it is the <span className="text-white">default state</span> of a secure digital world. CompliLedger verifies compliance status without ever touching the underlying sensitive data.
                    </motion.p>

                    <div className="flex flex-col gap-8 border-l border-white/10 pl-12">
                        <div className="flex flex-col gap-2">
                            <h4 className="text-accent font-bebas text-2xl uppercase tracking-tighter">Zero Exposure</h4>
                            <p className="text-sm text-white/40 leading-relaxed">Your data stays in your environment. Only the cryptographic proof of compliance is shared with the ledger.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-accent font-bebas text-2xl uppercase tracking-tighter">Mathematical Truth</h4>
                            <p className="text-sm text-white/40 leading-relaxed">Proofs generated via ZK-circuits provide 100% mathematical certainty without the need for manual data inspection.</p>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 flex items-center gap-8 group cursor-pointer"
                >
                    <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                        <span className="text-3xl text-white group-hover:text-black transition-colors">→</span>
                    </div>
                    <span className="text-xl font-bebas uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">Explore Verification Logic</span>
                </motion.div>
            </div>

            {/* Background Decorative Text */}
            <div className="absolute -bottom-10 right-0 opacity-[0.02] pointer-events-none select-none">
                <span className="text-[20rem] font-black font-bebas uppercase leading-none">+PROVABLE</span>
            </div>
        </section>
    );
}
