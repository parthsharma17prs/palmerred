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

export default function TheSolutionPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-black pt-32 pb-20 overflow-hidden">
            <Navbar />

            {/* Hero Section */}
            <div className="max-w-[1200px] mx-auto min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-10">
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
                        <p className="text-white/60">Prove compliance without mirroring systems, copying logs, or centralizing raw evidence.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                        <h3 className="text-xl font-bold mb-3 text-white">Proof Instead of Access</h3>
                        <p className="text-white/60">Share cryptographic proofs instead of screenshots, exports, or direct access.</p>
                    </div>
                </motion.div>
            </div>

            {/* Section 1: ZK Proofs */}
            <div className="max-w-[1200px] mx-auto px-6 py-24 border-t border-white/5">
                <FadeInSection className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Zero-Knowledge <br /><span className="text-white/50">Verifications</span></h2>
                        <p className="text-lg text-white/60 leading-relaxed mb-6">
                            By leveraging advanced ZK-SNARKs and cryptographic hashes on the Algorand and Aleo blockchains, we verify your system's compliance posture at the edge. The actual sensitive data never leaves your environment, only the mathematical certainty that controls are in place.
                        </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden h-64 flex items-center justify-center">
                        <div className="absolute inset-0 bg-blue-500/5 blur-[100px]" />
                        <div className="border border-blue-500/20 px-6 py-3 rounded-full bg-black/50 text-blue-400 font-mono text-sm tracking-widest shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                            Generating Proof π (ZK-SNARK) ...
                        </div>
                    </div>
                </FadeInSection>
            </div>

            {/* Section 2: Agentic Automation */}
            <div className="max-w-[1200px] mx-auto px-6 py-24 border-t border-white/5">
                <FadeInSection className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden h-64 flex items-center justify-center">
                        <div className="absolute inset-0 bg-purple-500/5 blur-[100px]" />
                        <div className="flex flex-col gap-4 w-full">
                            <div className="w-full h-8 bg-white/5 rounded-md animate-pulse" />
                            <div className="w-3/4 h-8 bg-white/5 rounded-md animate-pulse delay-75" />
                            <div className="w-5/6 h-8 bg-purple-500/20 border border-purple-500/30 rounded-md" />
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Agentic AI <br /><span className="text-white/50">Automation</span></h2>
                        <p className="text-lg text-white/60 leading-relaxed mb-6">
                            CompliLedger uses dynamic AI master agents to automatically scan your repositories, orchestrate SBOM mapping, and intelligently interpret control mappings against major frameworks like SOC2 and ISO27001 continuously without human intervention.
                        </p>
                    </div>
                </FadeInSection>
            </div>

            {/* Section 3: Immutable Trail */}
            <div className="max-w-[1200px] mx-auto px-6 py-24 text-center">
                <FadeInSection>
                    <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8">
                        <div className="px-6 py-2 bg-black rounded-full border border-white/10 text-sm tracking-widest text-white/70">
                            THE LEDGER PROTOCOL
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight max-w-4xl mx-auto">
                        An immutable trail of evidence.
                    </h2>
                    <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
                        Every single verification event is securely anchored to robust decentralized networks, meaning your auditors and regulators can trust the timestamps exactly as written.
                    </p>
                </FadeInSection>
            </div>

            {/* Background Texture Detail */}
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none z-[-1]" />

            <Footer />
        </main>
    );
}
