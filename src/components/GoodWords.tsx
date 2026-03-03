"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
    {
        id: 1,
        text: "+XZERO® delivered a stunning transformation for our brand. The attention to detail and bold design aesthetic elevated our whole digital presence.",
        author: "Jane Doe, CEO",
        company: "Acme Corp"
    },
    {
        id: 2,
        text: "Their strategic process and flawless execution made the complex seem simple. The new site is an absolute game changer for our conversion rates.",
        author: "John Smith, Marketer",
        company: "Global Tech"
    },
    {
        id: 3,
        text: "Working with them was an absolute pleasure. They pushed the boundaries of what we thought was possible, resulting in an award-winning experience.",
        author: "Alice Johnson, Founder",
        company: "NextGen Startups"
    }
];

export default function GoodWords() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section
            ref={containerRef}
            className="relative w-full bg-black text-white px-6 md:px-12 py-24 min-h-[250vh]"
        >
            {/* Sticky Background Text */}
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden pointer-events-none">
                <h2 className="text-[15vw] md:text-[20vw] font-black text-white/5 whitespace-nowrap uppercase tracking-tighter mix-blend-screen">
                    GOOD WORDS
                </h2>
            </div>

            {/* Scrolling Cards Overlay */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center pt-[50vh] pb-[50vh] gap-32 md:gap-64 z-10 pointer-events-none">
                {testimonials.map((test, idx) => (
                    <div
                        key={test.id}
                        className="w-full max-w-3xl bg-[#111] p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative pointer-events-auto shadow-black/50"
                    >
                        {/* Orange-Red Dot */}
                        <div className="absolute top-8 left-8 w-3 h-3 rounded-full bg-accent"></div>

                        <p className="mt-8 text-2xl md:text-4xl font-bold italic leading-tight text-white/90">
                            "{test.text}"
                        </p>

                        <div className="mt-12 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/20"></div>
                            <div>
                                <h4 className="font-bold text-lg">{test.author}</h4>
                                <span className="text-white/50 text-sm">{test.company}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
