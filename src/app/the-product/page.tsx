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

export default function TheProductPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-black pt-32 pb-20 overflow-hidden">
            <Navbar />

            {/* Hero Section */}
            <div className="max-w-[1200px] mx-auto min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-sm font-medium mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    CompliLedger Platform
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 leading-[1.1]"
                >
                    The system of record.
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-2xl text-white/50 max-w-3xl leading-relaxed mx-auto text-left flex flex-col items-center"
                >
                    <p className="mb-6 text-center">
                        The CompliLedger Platform is the system of record, verification engine, and control plane for compliance. Everything connects to this.
                    </p>

                    <h3 className="text-2xl font-bold text-white mb-4 mt-8">Audit-ready outputs</h3>
                    <ul className="space-y-4 mb-8 text-left inline-block w-full max-w-xl">
                        <li className="flex items-start gap-4">
                            <span className="text-emerald-500 mt-1">•</span>
                            <span>SSPs, SAPs, SARs, POA&Ms, PIAs</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="text-emerald-500 mt-1">•</span>
                            <span>Cryptographic proof bundles</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="text-emerald-500 mt-1">•</span>
                            <span>Regulator-verifiable attestations</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="text-emerald-500 mt-1">•</span>
                            <span>Time-bound compliance certificates</span>
                        </li>
                    </ul>
                </motion.div>
            </div>

            {/* Section 1: Dashboard Plane */}
            <div className="max-w-[1200px] mx-auto px-6 py-24 border-t border-white/5">
                <FadeInSection className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">The Unified <br /><span className="text-white/50">Dashboard</span></h2>
                        <p className="text-lg text-white/60 leading-relaxed mb-6">
                            Instantly view your global compliance posture without touching a single spreadsheet. Our interface aggregates agent activities, zero-knowledge verification proofs, and control mappings into one cohesive overview.
                        </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden h-64 flex flex-col justify-end">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px]" />
                        <div className="w-full h-1/2 bg-gradient-to-t from-emerald-500/20 to-transparent border-t border-emerald-500/50 rounded-t-xl" />
                    </div>
                </FadeInSection>
            </div>

            {/* Section 2: Real-time OSCAL Generation */}
            <div className="max-w-[1200px] mx-auto px-6 py-24 border-t border-white/5">
                <FadeInSection className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden h-64 font-mono text-xs text-emerald-400 overflow-y-hidden">
                        <div className="absolute inset-0 bg-black/60 z-10 hidden" />
                        <pre className="opacity-70">
                            {`{
  "system-security-plan": {
    "uuid": "7a35-4325",
    "metadata": {
      "title": "CompliLedger Agent Proofs",
      "last-modified": "2026-03-11T10:00:00Z",
      "version": "v1.0.0"
    },
    "system-characteristics": {
      "security-sensitivity-level": "high"
    }
}`}
                        </pre>
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Real-time <br /><span className="text-white/50">OSCAL Formats</span></h2>
                        <p className="text-lg text-white/60 leading-relaxed mb-6">
                            Regulators and auditors need data in specific languages. We instantly translate your continuous compliance proofs into NIST OSCAL standard formats, ready for immediate ingestion by authorized federal systems or audit suites.
                        </p>
                    </div>
                </FadeInSection>
            </div>

            {/* Section 3: SBOM Mapping */}
            <div className="max-w-[1200px] mx-auto px-6 py-24 text-center">
                <FadeInSection>
                    <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8">
                        <div className="px-6 py-2 bg-black rounded-full border border-white/10 text-sm tracking-widest text-white/70">
                            SUPPLY CHAIN SECURITY
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight max-w-4xl mx-auto">
                        Automated SBOM Tracking.
                    </h2>
                    <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
                        Compile exact Software Bill of Material lists continuously. Because if you do not strictly map what connects to your platform, you cannot defend it.
                    </p>
                </FadeInSection>
            </div>

            {/* Background Texture Detail */}
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none z-[-1]" />

            <Footer />
        </main>
    );
}
