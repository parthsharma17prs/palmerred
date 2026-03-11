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

export default function AboutUsPage() {
    const blockchainStack = [
        { name: "Algorand", purpose: "immutable audit anchoring" },
        { name: "Aleo", purpose: "private zero-knowledge computation" },
        { name: "Zcash", purpose: "confidential attestations" }
    ];

    const additionalStack = [
        "Decentralized Identifiers (DIDs)",
        "Verifiable Credentials (VCs)",
        "Zero-knowledge proofs",
        "Privacy-preserving automation"
    ];

    return (
        <main className="min-h-screen bg-[#0b0c0f] text-white selection:bg-accent selection:text-black pt-32 pb-20 overflow-hidden">
            <Navbar />

            {/* Hero Section */}
            <div className="max-w-[1200px] mx-auto min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-10">
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
                </motion.div>
            </div>

            {/* Section: Built for the real world */}
            <div className="max-w-[1200px] mx-auto px-6 py-24 border-t border-white/5">
                <FadeInSection className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Built for the <br /><span className="text-white/50">Real World</span></h2>
                        <p className="text-lg text-white/60 leading-relaxed mb-8">
                            CompliLedger uses modern cryptographic infrastructure to meet real regulatory expectations. Our architecture spans robust decentralized protocols and next-generation privacy networks.
                        </p>
                        <div className="space-y-4">
                            {blockchainStack.map((stack, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl">
                                    <span className="text-white bg-white/10 px-3 py-1 rounded text-sm font-mono">{stack.name}</span>
                                    <span className="text-white/60 text-sm">for {stack.purpose}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {additionalStack.map((item, i) => (
                            <div key={i} className="aspect-square bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center p-6 text-center text-sm font-medium text-white/40 border-dashed">
                                {item}
                            </div>
                        ))}
                    </div>
                </FadeInSection>
            </div>

            {/* Section: The Mission */}
            <div className="max-w-[1200px] mx-auto px-6 py-24 border-t border-white/5">
                <FadeInSection className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden h-64 flex flex-col items-center justify-center">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 blur-[100px]" />
                        <div className="text-3xl font-bold text-white/90 mb-2">Cryptographic</div>
                        <div className="text-xl text-white/40 font-mono tracking-widest uppercase">Certainty</div>
                    </div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">The <br /><span className="text-white/50">Mission</span></h2>
                        <p className="text-lg text-white/60 leading-relaxed mb-6">
                            We believe that organizations should never have to sacrifice competitive secrets, intellectual property, or sensitive data access simply to prove they meet a regulatory framework. Our goal is to make all software and systems seamlessly provable across the globe.
                        </p>
                    </div>
                </FadeInSection>
            </div>

            {/* Section: Privacy Principles */}
            <div className="max-w-[1200px] mx-auto px-6 py-24 border-t border-white/5 text-center">
                <FadeInSection>
                    <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tight">Our Core Principles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                            <h3 className="text-2xl font-bold mb-4">No Selling Data</h3>
                            <p className="text-white/60">We do not sell data. Your compliance posture is yours alone.</p>
                        </div>
                        <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                            <h3 className="text-2xl font-bold mb-4">No IP Re-use</h3>
                            <p className="text-white/60">We do not train on customer inputs or reuse intellectual property.</p>
                        </div>
                        <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                            <h3 className="text-2xl font-bold mb-4">No Surveillance</h3>
                            <p className="text-white/60">We do not rely on surveillance. We rely on mathematical proof.</p>
                        </div>
                    </div>
                </FadeInSection>
            </div>

            {/* Background Texture Detail */}
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none z-50" />

            <Footer />
        </main>
    );
}
