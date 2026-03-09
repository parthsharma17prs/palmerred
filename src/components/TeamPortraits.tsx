"use client";

import { motion } from 'framer-motion';

const team = [
    { name: 'AXON v1.0', role: 'Chief Inference Engine', bio: 'Specializing in recursive compliance mapping and automated risk classification across multi-cloud architectures.', img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2074&auto=format&fit=crop' },
    { name: 'SIGMA 0x', role: 'ZK Infrastructure Lead', bio: 'Pioneering the application of PLONK and Halo2 circuits for private, high-throughput regulatory state verification.', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop' },
    { name: 'KRONOS', role: 'Immutability Architect', bio: 'Expert in distributed ledger anchoring and cryptographic time-stamping for permanent audit integrity.', img: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2070&auto=format&fit=crop' },
];

export default function TeamPortraits() {
    return (
        <section className="py-40 px-6 md:px-12 bg-black text-white w-full border-t border-white/10 relative overflow-hidden xl:pl-32">

            <div className="flex flex-col md:flex-row justify-between items-end mb-32 relative z-10 border-l border-white/5 pl-12">
                <div className="flex flex-col gap-4">
                    <span className="text-accent-lime font-bebas text-sm tracking-[0.4em] uppercase flex items-center gap-4">
                        Personnel <span className="text-white/10 text-[10px] tracking-widest font-sans">// AGENTIC_LEADERSHIP</span>
                    </span>
                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-normal font-bebas tracking-tighter uppercase leading-[0.8]">
                        CORE <br /> <span className="text-white/20">FOUNDERS</span>
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 border-l border-white/5 pl-12">
                {team.map((member, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="group flex flex-col gap-8"
                    >
                        <div className="w-full aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-neutral-900 border border-white/10 group-hover:border-accent/40 transition-all duration-700">
                            <img
                                src={member.img}
                                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-110 group-hover:scale-100"
                                alt={member.name}
                            />
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-baseline">
                                <h3 className="text-3xl md:text-5xl font-normal font-bebas uppercase tracking-tighter text-white">{member.name}</h3>
                                <span className="text-accent text-[10px] font-black uppercase tracking-widest">{member.role}</span>
                            </div>
                            <p className="text-white/40 text-lg font-light leading-relaxed font-sans italic">
                                {member.bio}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

        </section>
    );
}
