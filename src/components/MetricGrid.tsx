"use client";

import { motion } from 'framer-motion';

const metrics = [
    { label: 'Network Uptime', value: '99.99%', sub: '// CONTINUOUS_VERIFICATION', color: 'text-accent-lime' },
    { label: 'Security Nodes', value: '2,401', sub: '// DISTRIBUTED_TRUST', color: 'text-white' },
    { label: 'Proof Generation', value: '< 1.2s', sub: '// ZERO_KNOWLEDGE_LATENCY', color: 'text-accent' },
    { label: 'Compliance Coverage', value: '100%', sub: '// FULL_OSCAL_MAPPING', color: 'text-white' },
];

export default function MetricGrid() {
    return (
        <section className="bg-black text-white w-full border-t border-white/10 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-white/5">
                {metrics.map((metric, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="p-12 md:p-16 border-r border-b border-white/10 flex flex-col gap-8 group hover:bg-white/[0.02] transition-colors duration-700"
                    >
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.4em]">{metric.sub}</span>
                            <div className="h-[1px] w-8 bg-accent/30 group-hover:w-full transition-all duration-700 origin-left" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <h3 className={`text-6xl md:text-8xl font-normal font-bebas leading-none tracking-tighter ${metric.color}`}>
                                {metric.value}
                            </h3>
                            <span className="text-xl font-bebas text-white/50 uppercase tracking-tight">{metric.label}</span>
                        </div>

                        <div className="mt-auto flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent-lime animate-pulse" />
                            <span className="text-[9px] font-black uppercase tracking-widest text-white/20">Live Status: Nominal</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
