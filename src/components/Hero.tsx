"use client";

import { motion } from 'framer-motion';
import Shield3D from './three/Shield3D';
import GlassCube3D from './three/GlassCube3D';
import { GLSLHills } from './ui/glsl-hills';

export default function Hero() {
    return (
        <section className="hero-section relative w-full pt-48 pb-32 px-6 lg:px-12 flex flex-col items-center justify-center overflow-hidden bg-[#0b0c0f] selection:bg-white/20" style={{ minHeight: '100vh' }}>

            {/* Ambient Lighting Accents */}
            <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
                <div className="absolute top-[10%] left-[20%] w-[350px] h-[350px] bg-blue-500/10 blur-[100px] rounded-full" />
                <div className="absolute top-[30%] right-[15%] w-[450px] h-[450px] bg-indigo-500/10 blur-[120px] rounded-full" />
            </div>

            {/* Background Texture from compliledger.com */}
            <div
                className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'url(https://www.compliledger.com/images/privacy-bg.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    mixBlendMode: 'screen'
                }}
            />

            {/* GLSL Hills Background Effect from 21st.dev component */}
            <div className="absolute inset-0 pointer-events-none z-[0] w-full h-full overflow-hidden">
                <GLSLHills width="100vw" height="100vh" />
            </div>

            {/* Subtle 3D Elements as Background Elements (not overpowering) */}
            <div className="absolute left-[-15%] top-[20%] w-[700px] h-[700px] pointer-events-none opacity-20 z-0 mix-blend-screen">
                <GlassCube3D />
            </div>
            <div className="absolute right-[-10%] top-[40%] w-[600px] h-[600px] pointer-events-none opacity-20 z-0 mix-blend-screen">
                <Shield3D />
            </div>

            {/* Central Content representing 21st.dev style high-impact typography */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-[1000px] mx-auto w-full gap-6">

                {/* Micro-badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl mb-4 shadow-xl"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    <span className="text-white/80 text-sm font-medium tracking-wide">
                        CompliLedger Platform v2.0
                    </span>
                    <span className="text-blue-400 text-sm ml-2 font-bold cursor-pointer hover:underline">
                        Read Announcement →
                    </span>
                </motion.div>

                {/* Main Hero Text (using tracking-tighter for that modern corporate look) */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl sm:text-6xl md:text-[5.5rem] lg:text-[6.5rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 leading-[1.02]"
                    style={{ fontFamily: 'var(--font-sans)' }}
                >
                    Proof Based Compliance <br className="hidden md:block" /> Infrastructure
                </motion.h1>

                {/* Description Text */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg md:text-xl lg:text-2xl text-white/50 max-w-3xl leading-relaxed mt-4 font-sans font-light"
                >
                    Continuous, privacy-preserving compliance proof for companies, auditors, and regulators.
                </motion.p>

                {/* Feature Tags or Checkmarks */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-4 text-sm font-medium text-white/40"
                >
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        Zero-Knowledge Proofs
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        Agentic AI Analysis
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        Automated Reporting
                    </div>
                </motion.div>

                {/* Primary CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full sm:w-auto"
                >
                    <button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all text-base shadow-[0_0_40px_rgba(255,255,255,0.15)] transform hover:scale-[1.02] active:scale-100">
                        Get Started
                    </button>
                    <button className="group w-full sm:w-auto px-8 py-4 bg-white/[0.03] text-white font-semibold rounded-full border border-white/10 hover:bg-white/[0.08] transition-all text-base transform hover:scale-[1.02] active:scale-100 flex items-center justify-center gap-2">
                        Book a Demo
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </motion.div>

            </div>

            {/* Trusted By / Built Across block */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
                className="relative z-10 mt-32 w-full max-w-5xl mx-auto flex flex-col items-center gap-8 border-t border-white/[0.05] pt-12"
            >
                <span className="text-white/30 text-xs font-semibold uppercase tracking-[0.2em]">built across multiple privacy-focused blockchains</span>
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                    <span className="text-2xl font-bold font-sans tracking-tight">Algorand</span>
                    <span className="text-2xl font-bold font-sans tracking-tight">Aleo</span>
                    <span className="text-2xl font-bold font-sans tracking-tight">Zcash</span>
                    <span className="text-2xl font-bold font-sans tracking-tight">Ethereum</span>
                </div>
            </motion.div>

            {/* Background Texture Detail */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none z-50 rounded-lg" />

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0b0c0f] to-transparent pointer-events-none" />
        </section>
    );
}
