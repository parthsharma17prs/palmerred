"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Pricing() {
    const [isSubscription, setIsSubscription] = useState(true);

    return (
        <section className="py-24 px-6 md:px-12 bg-black text-white w-full border-t border-white/10">

            <div className="flex flex-col items-center justify-center mb-16 gap-8 text-center max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight uppercase">
                    What It Costs <br />
                    <span className="text-accent underline decoration-4 underline-offset-8">to Do It Right</span>
                </h2>

                {/* Toggle Switch */}
                <div className="flex items-center gap-6 mt-8 bg-white/5 p-2 rounded-full border border-white/10 relative cursor-pointer">
                    <div
                        className="px-6 py-2 text-sm font-bold uppercase tracking-widest z-10 transition-colors"
                        onClick={() => setIsSubscription(true)}
                        style={{ color: isSubscription ? '#000' : '#fff' }}
                    >
                        Subscription
                    </div>
                    <div
                        className="px-6 py-2 text-sm font-bold uppercase tracking-widest z-10 transition-colors"
                        onClick={() => setIsSubscription(false)}
                        style={{ color: !isSubscription ? '#000' : '#fff' }}
                    >
                        Project Based
                    </div>

                    {/* Active Background Pill */}
                    <motion.div
                        className="absolute top-2 bottom-2 bg-accent rounded-full z-0"
                        animate={{
                            left: isSubscription ? '8px' : '50%',
                            right: isSubscription ? '50%' : '8px'
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                </div>
            </div>

            <div className="flex justify-center w-full relative h-[600px] overflow-hidden max-w-lg mx-auto">
                <AnimatePresence mode="wait">
                    {isSubscription ? (
                        <motion.div
                            key="subscription"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            className="absolute w-full h-full bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col justify-between"
                        >
                            <div>
                                <span className="text-accent text-sm font-bold uppercase tracking-widest mb-4 block">Retainer</span>
                                <h3 className="text-4xl md:text-5xl font-black tabular-nums tracking-tighter">
                                    $4,995<span className="text-2xl text-white/50">/mo</span>
                                </h3>

                                <p className="mt-6 text-lg text-white/70">
                                    Ideal for growing agencies and startups looking for continuous premium design support.
                                </p>

                                <ul className="mt-8 flex flex-col gap-4">
                                    {[
                                        "One request at a time",
                                        "Average 48 hour delivery",
                                        "Unlimited revisions",
                                        "Pause or cancel anytime",
                                        "Access to senior designers"
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <span className="w-2 h-2 rounded-full bg-accent"></span>
                                            <span className="font-medium text-white/90">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button className="w-full py-4 mt-12 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-accent hover:text-white transition-colors">
                                Start Subscription
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="project"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            className="absolute w-full h-full bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col justify-between"
                        >
                            <div>
                                <span className="text-accent text-sm font-bold uppercase tracking-widest mb-4 block">Fixed Scope</span>
                                <h3 className="text-4xl md:text-5xl font-black tabular-nums tracking-tighter">
                                    $12,500<span className="text-2xl text-white/50">+</span>
                                </h3>

                                <p className="mt-6 text-lg text-white/70">
                                    Perfect for comprehensive builds requiring a dedicated team from start to finish.
                                </p>

                                <ul className="mt-8 flex flex-col gap-4">
                                    {[
                                        "End-to-end design & dev",
                                        "Dedicated project manager",
                                        "Strategic discovery phase",
                                        "Custom motion design",
                                        "Post-launch support"
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <span className="w-2 h-2 rounded-full bg-accent"></span>
                                            <span className="font-medium text-white/90">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button className="w-full py-4 mt-12 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-colors">
                                Book a Call
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
