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

export default function ContactUsPage() {
    return (
        <main className="min-h-screen bg-[#0b0c0f] text-white selection:bg-accent selection:text-black pt-32 pb-20 overflow-hidden">
            <Navbar />

            {/* Hero Section */}
            <div className="max-w-[1200px] mx-auto min-h-[50vh] flex flex-col items-center justify-center text-center px-6 pt-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-500/10 text-zinc-300 border border-zinc-500/20 text-sm font-medium mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-zinc-500 animate-pulse" />
                    Secure comms
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 leading-[1.1]"
                >
                    Ready to prove it?
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-white/50 max-w-2xl mx-auto mb-12"
                >
                    Book a specialized demonstration or reach out to our cryptographic architecture team.
                </motion.p>
            </div>

            {/* Contact Grid */}
            <div className="max-w-[1200px] mx-auto px-6 py-12 border-t border-white/5 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* General Inquiry */}
                    <FadeInSection delay={0.1} className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 border border-white/20">
                            <svg className="w-8 h-8 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold mb-4">Email Us</h3>
                        <p className="text-white/60 mb-6 leading-relaxed">
                            For general inquiries, demonstrations, or to discuss how Zero-Knowledge Proofs can secure your next audit.
                        </p>
                        <a href="mailto:maranda@compliledger.com" className="inline-flex text-xl text-white font-mono hover:text-white/70 transition-colors border-b border-white/30 pb-1">
                            maranda@compliledger.com
                        </a>
                    </FadeInSection>

                    {/* HQ */}
                    <FadeInSection delay={0.2} className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 border border-white/20">
                            <svg className="w-8 h-8 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold mb-4">Headquarters</h3>
                        <p className="text-white/60 mb-6 leading-relaxed">
                            We operate fully globally, but our core cryptographic teams and founding leadership are based out of:
                        </p>
                        <div className="text-xl font-mono text-white/90">
                            San Francisco, CA<br />
                            <span className="text-sm text-white/50 underline">United States</span>
                        </div>
                    </FadeInSection>
                </div>
            </div>

            {/* Newsletter/Footer Callout */}
            <div className="max-w-[1200px] mx-auto px-6 py-24 text-center border-t border-white/5">
                <FadeInSection>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Don't wait for your next audit.</h2>
                    <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
                        Connect with our engineering team today to see a live demonstration of our continuous validation protocol.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="mailto:maranda@compliledger.com" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                            Book a Demo
                        </a>
                        <button className="px-10 py-5 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-colors">
                            Request Info Pack
                        </button>
                    </div>
                </FadeInSection>
            </div>

            {/* Background Texture Detail */}
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none z-50" />

            <Footer />
        </main>
    );
}
