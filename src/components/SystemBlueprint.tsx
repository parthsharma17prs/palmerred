"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const blocks = [
    { title: 'Inference Layer', desc: 'Agentic AI that processes system metadata at scale to extract compliance signals.', icon: '01' },
    { title: 'Trust Anchor', desc: 'Secure anchoring of proofs onto distributed ledgers for permanent verifiability.', icon: '02' },
    { title: 'ZKP Engine', desc: 'Proprietary Zero-Knowledge circuits that validate system states privately.', icon: '03' },
    { title: 'Governance API', desc: 'Seamless integration into existing CI/CD workflows for real-time policy enforcement.', icon: '04' },
];

export default function SystemBlueprint() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

    return (
        <section ref={targetRef} className="relative h-[180vh] bg-black">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                <div className="px-6 md:px-12 mb-12 xl:pl-44">
                    <span className="text-accent font-bebas text-sm tracking-[0.4em] uppercase flex items-center gap-4">
                        Blueprint <span className="text-white/10 text-[10px] tracking-widest font-sans">// SYSTEM_ARCHITECTURE</span>
                    </span>
                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-normal font-bebas tracking-tighter uppercase leading-[0.8] text-white">
                        THE STACK <br /> <span className="text-white/20">HIERARCHY</span>
                    </h2>
                </div>

                <motion.div style={{ x }} className="flex gap-12 px-6 md:px-12 xl:pl-44">
                    {blocks.map((block, i) => (
                        <div key={i} className="min-w-[450px] md:min-w-[600px] h-[400px] md:h-[500px] bg-white/[0.03] border border-white/10 rounded-[2rem] p-12 flex flex-col justify-between relative group hover:border-accent/40 transition-colors duration-700">
                            <span className="text-8xl font-bebas text-white/5 group-hover:text-accent/10 transition-colors duration-700 absolute top-4 right-8 select-none">
                                {block.icon}
                            </span>

                            <div className="relative z-10">
                                <h3 className="text-4xl md:text-6xl font-normal font-bebas uppercase tracking-tighter text-white mb-6">
                                    {block.title}
                                </h3>
                                <p className="text-xl md:text-2xl font-light text-white/40 leading-relaxed max-w-md">
                                    {block.desc}
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="h-[1px] w-12 bg-accent" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-accent">Active Protocol</span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
