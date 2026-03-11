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
    const steps = [
        {
            title: "Ingest securely",
            description: "Systems, policies, SBOMs, and signals — minimally and privately",
            color: "purple"
        },
        {
            title: "Analyze automatically",
            description: "AI agents classify, map, and test compliance requirements",
            color: "indigo"
        },
        {
            title: "Prove cryptographically",
            description: "Zero-knowledge proofs validate controls without revealing data",
            color: "blue"
        },
        {
            title: "Anchor immutably",
            description: "Verification events anchored across Algorand, Aleo, and Zcash",
            color: "emerald"
        },
        {
            title: "Monitor continuously",
            description: "Compliance stays current as systems change",
            color: "cyan"
        }
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

            {/* Step-by-step Detailed Scroll */}
            <div className="max-w-[1200px] mx-auto px-6 py-24 border-t border-white/5 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-white/10 to-transparent hidden md:block" />

                <div className="space-y-32">
                    {steps.map((step, i) => (
                        <FadeInSection key={i} className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                                <div className={`w-14 h-14 rounded-2xl bg-${step.color}-500/10 border border-${step.color}-500/20 flex items-center justify-center font-bold font-mono text-2xl text-${step.color}-500 mb-6`}>
                                    0{i + 1}
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{step.title}</h2>
                                <p className="text-xl text-white/60 leading-relaxed">{step.description}</p>
                            </div>
                            <div className="md:w-1/2 w-full aspect-video bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden flex items-center justify-center">
                                <div className={`absolute inset-0 bg-${step.color}-500/5 blur-[80px]`} />
                                <div className={`w-32 h-32 rounded-full border-4 border-dashed border-${step.color}-500/20 animate-[spin_10s_linear_infinite]`} />
                                <div className={`absolute w-16 h-16 rounded-2xl bg-black border border-${step.color}-500/40 shadow-[0_0_30px_rgba(0,0,0,0.5)]`} />
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>

            {/* Section 1: Ingestion Detail */}
            <div className="max-w-[1200px] mx-auto px-6 py-24 border-t border-white/5">
                <FadeInSection className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Agentic <br /><span className="text-white/50">Ingestion</span></h2>
                        <p className="text-lg text-white/60 leading-relaxed mb-6">
                            Our master agents continuously ingest state from your repositories, identity providers, and cloud environments to ensure live configurations map cleanly to NIST guidelines and required security controls.
                        </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden h-64 flex items-center justify-center gap-4">
                        <div className="absolute inset-0 bg-purple-500/5 blur-[100px]" />
                        <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center shrink-0">AWS</div>
                        <div className="w-full h-px border-t border-dashed border-white/30" />
                        <div className="w-16 h-16 rounded-2xl bg-black border border-white/20 flex items-center justify-center shrink-0">GCP</div>
                    </div>
                </FadeInSection>
            </div>

            {/* Section 2: Verification Detail */}
            <div className="max-w-[1200px] mx-auto px-6 py-24 border-t border-white/5">
                <FadeInSection className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden h-64 flex flex-col justify-center font-mono text-sm text-indigo-400 p-8">
                        <div className="absolute inset-0 bg-indigo-500/5 blur-[100px]" />
                        <div className="mb-2 opacity-50">&gt; Generating zkSNARK circuit</div>
                        <div className="mb-2 opacity-70">&gt; Proving compliance control: CC2.3</div>
                        <div className="font-bold">&gt; Hash validated: 0x9f8c...3a1b</div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Zero-Knowledge <br /><span className="text-white/50">Verification</span></h2>
                        <p className="text-lg text-white/60 leading-relaxed mb-6">
                            Raw intelligence is mathematically hashed and validated through cryptographic zero-knowledge proofs onsite inside your domain, ensuring absolutely no underlying secrets or architectures are ever seen by outside parties.
                        </p>
                    </div>
                </FadeInSection>
            </div>

            {/* Background Texture Detail */}
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none z-50" />

            <Footer />
        </main>
    );
}
