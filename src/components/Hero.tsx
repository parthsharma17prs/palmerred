"use client";

import { motion } from 'framer-motion';

export default function Hero() {
    const textTitle = "Pattern Dimensions and Moments that Connect and Leave a Bold イメージ.";
    const words = textTitle.split(" ");

    return (
        <section className="relative w-full min-h-screen pt-32 pb-24 px-6 flex flex-col justify-center overflow-hidden">

            {/* Top Border Divider */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-28 left-0 right-0 h-[1px] bg-white/10 origin-left mx-6"
            />

            <div className="flex flex-col md:flex-row justify-between items-start pt-16 gap-12 lg:gap-24 relative z-10 w-full max-w-screen-2xl mx-auto">

                {/* Left Side: Massive Text */}
                <div className="flex-1 w-full relative group cursor-default max-w-3xl">
                    <motion.h1
                        className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.05,
                                }
                            }
                        }}
                    >
                        {words.map((word, index) => (
                            <motion.span
                                key={index}
                                className="inline-block mr-4 md:mr-6"
                                variants={{
                                    hidden: { y: 100, opacity: 0, rotateZ: 5 },
                                    visible: {
                                        y: 0,
                                        opacity: 1,
                                        rotateZ: 0,
                                        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                                    }
                                }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.h1>
                </div>

                {/* Right Side: Image Card with hover parallax scale */}
                <motion.div
                    className="w-full md:w-[45%] lg:w-[500px] h-[600px] overflow-hidden rounded-2xl relative flex-shrink-0"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                >
                    <motion.img
                        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                        alt="Hero Graphic"
                        className="w-full h-full object-cover scale-100"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    />

                    {/* Floater Button over Image */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="absolute bottom-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white hover:text-black transition-colors cursor-pointer"
                    >
                        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
