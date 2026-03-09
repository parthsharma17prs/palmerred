"use client";

import { motion } from 'framer-motion';

const testimonials = [
    { quote: "CompliLedger didn't just automate our audits; they replaced them with mathematical certainty. Invaluable infrastructure.", author: "Marcus Thorne", role: "CTO @ Global FinStream" },
    { quote: "The ZK implementation is the most robust we've seen. We now verify our governance protocols without exposing a single line of sensitive metadata.", author: "Dr. Elena Vance", role: "Head of Infrastructure @ Protocol Labs" },
    { quote: "Finally, a solution that understands enterprise privacy. Persistent verification is the new standard for government standards.", author: "Agent X-90", role: "Security Architect @ Cyber Command" },
];

export default function GoodWords() {
    return (
        <section className="py-40 px-6 md:px-12 bg-black text-white w-full border-t border-white/10 relative overflow-hidden xl:pl-32">

            <div className="flex flex-col md:flex-row justify-between items-end mb-32 relative z-10 border-l border-white/5 pl-12">
                <div className="flex flex-col gap-4">
                    <span className="text-accent font-bebas text-sm tracking-[0.4em] uppercase flex items-center gap-4">
                        Validation <span className="text-white/10 text-[10px] tracking-widest font-sans">// TRUST_SIGNAL</span>
                    </span>
                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-normal font-bebas tracking-tighter uppercase leading-[0.8]">
                        GOOD <br /> <span className="text-white/20">WORDS</span>
                    </h2>
                </div>
            </div>

            <div className="flex flex-col gap-0 relative z-10 border-l border-white/5 pl-12">
                {testimonials.map((t, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="py-16 md:py-24 border-b border-white/10 group cursor-default transition-all duration-700 hover:bg-white/[0.01]"
                    >
                        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
                            <span className="text-accent font-bebas text-2xl tabular-nums opacity-20">0{idx + 1}</span>
                            <div className="flex flex-col gap-8 max-w-5xl">
                                <p className="text-4xl md:text-6xl lg:text-7xl font-normal font-bebas uppercase leading-none tracking-tighter group-hover:text-white transition-colors duration-500 text-white/40">
                                    "{t.quote}"
                                </p>
                                <div className="flex items-center gap-6">
                                    <div className="h-[1px] w-12 bg-accent opacity-30" />
                                    <div className="flex flex-col">
                                        <span className="text-xl font-bebas uppercase tracking-widest text-white">{t.author}</span>
                                        <span className="text-accent text-[10px] font-black uppercase tracking-[0.3em]">{t.role}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

        </section>
    );
}
