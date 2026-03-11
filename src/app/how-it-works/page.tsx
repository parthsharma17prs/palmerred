"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

function FadeInSection({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default function HowItWorksPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-black pt-32 pb-20 overflow-hidden">
            <Navbar />

            {/* Hero Section */}
            <div className="max-w-[1200px] mx-auto min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-500 border border-purple-500/20 text-sm font-medium mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                    Automated Mechanics
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 leading-[1.1]"
                >
                    Connected. Verified.
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-2xl text-white/50 max-w-4xl leading-relaxed mx-auto"
                >
                    <p className="mb-12">
                        Agents plug into the CompliLedger Platform, where outputs become cryptographically verifiable evidence, framework-aligned artifacts, audit-ready records, and regulator-verifiable proofs.
                    </p>
                </motion.div>
            </div>

            {/* Step 1: Ingestion */}
            <div className="max-w-[1200px] mx-auto px-6 py-24 border-t border-white/5 relative">
                <div className="absolute top-0 left-12 w-px h-full bg-gradient-to-b from-purple-500/50 to-transparent hidden md:block" />
                <FadeInSection className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-2 hidden md:flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500 flex items-center justify-center z-10 font-bold font-mono">
                            01
                        </div>
                    </div>
                    <div className="md:col-span-5">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Agentic <br /><span className="text-white/50">Ingestion</span></h2>
                        <p className="text-lg text-white/60 leading-relaxed mb-6">
                            Our master agents continuously ingest state from your repositories, identity providers, and cloud environments to ensure live configurations map cleanly to NIST guidelines and required security controls.
                        </p>
                    </div>
                    <div className="md:col-span-5 bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden h-64 flex items-center justify-center gap-4">
                        <div className="absolute inset-0 bg-purple-500/5 blur-[100px]" />
                        <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center shrink-0">AWS</div>
                        <div className="w-full h-px border-t border-dashed border-white/30" />
                        <div className="w-16 h-16 rounded-2xl bg-black border border-white/20 flex items-center justify-center shrink-0">GCP</div>
                    </div>
                </FadeInSection>
            </div>

            {/* Step 2: Verification */}
            <div className="max-w-[1200px] mx-auto px-6 py-24 border-t border-white/5 relative">
                <div className="absolute top-0 left-12 w-px h-full bg-gradient-to-b from-indigo-500/50 to-transparent hidden md:block" />
                <FadeInSection className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-2 hidden md:flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-500 flex items-center justify-center z-10 font-bold font-mono">
                            02
                        </div>
                    </div>
                    <div className="md:col-span-5 order-2 md:order-1 bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden h-64 flex flex-col justify-center font-mono text-sm text-indigo-400">
                        <div className="absolute inset-0 bg-indigo-500/5 blur-[100px]" />
                        <div className="mb-2 opacity-50">&gt; Generating zkSNARK circuit</div>
                        <div className="mb-2 opacity-70">&gt; Proving compliance control: CC2.3</div>
                        <div className="font-bold">&gt; Hash validated: 0x9f8c...3a1b</div>
                    </div>
                    <div className="md:col-span-5 order-1 md:order-2">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Zero-Knowledge <br /><span className="text-white/50">Verification</span></h2>
                        <p className="text-lg text-white/60 leading-relaxed mb-6">
                            Raw intelligence is mathematically hashed and validated through cryptographic zero-knowledge proofs onsite inside your domain, ensuring absolutely no underlying secrets or architectures are ever seen by outside parties.
                        </p>
                    </div>
                </FadeInSection>
            </div>

            {/* Step 3: Distribution */}
            <div className="max-w-[1200px] mx-auto px-6 py-24 border-t border-white/5 relative">
                <div className="absolute top-0 left-12 w-px h-full bg-gradient-to-b from-blue-500/50 to-transparent hidden md:block opacity-50" />
                <FadeInSection className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-2 hidden md:flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center z-10 font-bold font-mono">
                            03
                        </div>
                    </div>
                    <div className="md:col-span-5">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Vault & <br /><span className="text-white/50">Distribute</span></h2>
                        <p className="text-lg text-white/60 leading-relaxed mb-6">
                            Verified mathematical proofs are timestamped onto the Algorand and Aleo blockchains. When regulators request proof, you export the proof bundle directly to them—verifiable anywhere, anytime, without you handing over passwords.
                        </p>
                    </div>
                    <div className="md:col-span-5 bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden h-64 flex items-center justify-center">
                        <div className="absolute inset-0 bg-blue-500/5 blur-[100px]" />
                        <div className="w-32 h-32 rounded-full border-4 border-dashed border-blue-500/30 animate-[spin_10s_linear_infinite]" />
                        <div className="absolute w-20 h-20 rounded-full border border-blue-500/50 flex items-center justify-center bg-black">
                            <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    </div>
                </FadeInSection>
            </div>

            {/* Background Texture Detail */}
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none z-[-1]" />

            <Footer />
        </main>
    );
}
