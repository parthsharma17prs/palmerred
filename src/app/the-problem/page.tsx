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

export default function TheProblemPage() {
    const problems = [
        "Centralize sensitive data in 3rd party systems",
        "Grant broad system access to external auditors",
        "Manually collect evidence via screenshots and logs",
        "Rely on point-in-time audits that expire instantly",
        "Expose more than regulators actually require"
    ];

    const beliefs = [
        "Compliance should be provable, not subjective",
        "Privacy should be preserved, not traded",
        "Proof should be engineered, not assumed",
        "Evidence should be cryptographic, not anecdotal",
        "Audits should be continuous, not episodic",
        "Regulators should verify outcomes — not inspect systems"
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
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left w-full mt-4">
                        {problems.map((problem, i) => (
                            <li key={i} className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                                <span className="text-red-500 mt-1">•</span>
                                <span className="text-white/80 text-base">{problem}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-white/80 font-semibold mb-6 text-center">
                        This approach increases risk, slows innovation, and erodes proof.
                    </p>
                </motion.div>
            </div>

            {/* Section: Our Beliefs */}
            <div className="max-w-[1200px] mx-auto px-6 py-24 border-t border-white/5">
                <FadeInSection className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Our Belief</h2>
                    <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
                        The fundamental way compliance is conducted hasn't changed in decades, while technology has evolved exponentially.
                    </p>
                </FadeInSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {beliefs.map((belief, i) => (
                        <FadeInSection key={i} delay={i * 0.1} className="p-8 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center mb-6">
                                <span className="text-red-500 font-mono text-lg">{i + 1}</span>
                            </div>
                            <p className="text-lg font-medium text-white/90">{belief}</p>
                        </FadeInSection>
                    ))}
                </div>
            </div>

            {/* Section 1: The Cost of Manual Audits */}
            <div className="max-w-[1200px] mx-auto px-6 py-24 border-t border-white/5">
                <FadeInSection className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">The Exhaustion of <br /><span className="text-white/50">Manual Evidence</span></h2>
                        <p className="text-lg text-white/60 leading-relaxed mb-6">
                            Compliance teams spend thousands of hours manually taking screenshots, compiling spreadsheets, and chasing engineering teams for proof of security controls. This is not only inefficient, but it creates a fragile, point-in-time snapshot that is outdated the moment it's captured.
                        </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[50px] rounded-full" />
                        <div className="space-y-4 font-mono text-sm text-white/40">
                            <div className="p-4 border border-white/5 rounded-xl bg-black/50">Request 104: Provide AWS Route53 config... [PENDING 14 DAYS]</div>
                            <div className="p-4 border border-white/5 rounded-xl bg-black/50 line-through">Request 105: Screenshot of DB encryption... [EXPIRED]</div>
                            <div className="p-4 border border-white/5 rounded-xl bg-black/50">Request 106: Identity provider MFA logs... [PENDING]</div>
                        </div>
                    </div>
                </FadeInSection>
            </div>

            {/* Section 2: Data Privacy Risks */}
            <div className="max-w-[1200px] mx-auto px-6 py-24 border-t border-white/5">
                <FadeInSection className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden flex flex-col items-center justify-center min-h-[300px]">
                        <div className="absolute top-0 left-0 w-40 h-40 bg-orange-500/10 blur-[60px] rounded-full" />
                        <div className="text-center">
                            <div className="text-red-500 font-bold tracking-widest mb-2">CRITICAL VULNERABILITY</div>
                            <p className="text-white/60">Raw data exposure during third-party audit.</p>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Over-exposing <br /><span className="text-white/50">Core Data</span></h2>
                        <p className="text-lg text-white/60 leading-relaxed mb-6">
                            To prove you are doing things securely, traditional frameworks demand you expose your most secure inner workings to third parties. Auditors receive vast dumps of raw customer data, architectural schematics, and sensitive access logs simply to verify compliance flags.
                        </p>
                    </div>
                </FadeInSection>
            </div>

            {/* Section 3: The Breaking Point */}
            <div className="max-w-[1200px] mx-auto px-6 py-24 mb-20 text-center">
                <FadeInSection>
                    <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8">
                        <div className="px-6 py-2 bg-black rounded-full border border-white/10 text-sm tracking-widest text-white/70">
                            THE INEVITABLE SHIFT
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight max-w-4xl mx-auto">
                        CompliLedger was built to change that.
                    </h2>
                    <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
                        We believed there had to be a way to prove adherence to complex regulatory frameworks without ever moving, copying, or seeing the underlying data.
                    </p>
                </FadeInSection>
            </div>

            {/* Background Texture Detail */}
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none z-50" />

            <Footer />
        </main>
    );
}
