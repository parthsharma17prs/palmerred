"use client";

import { motion } from 'framer-motion';

export default function LabNotes() {
    const posts = [
        {
            id: 1,
            title: 'The Power of Minimalism: Why Less is More in Design',
            category: 'Design Theory',
            date: 'Oct 12, 2025'
        },
        {
            id: 2,
            title: 'The Future of Web Design: Trends You Can’t Ignore',
            category: 'Web Trends',
            date: 'Sep 28, 2025'
        },
        {
            id: 3,
            title: 'My Web Design Process: From Concept to Completion',
            category: 'Process',
            date: 'Sep 15, 2025'
        },
        {
            id: 4,
            title: 'Why Investing in Good Design Pays Off for Your Business',
            category: 'Business Value',
            date: 'Aug 04, 2025'
        }
    ];

    return (
        <section className="py-24 px-6 md:px-12 bg-black text-white w-full border-t border-white/10 relative overflow-hidden">

            {/* Background massive text overlay */}
            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] md:text-[20vw] font-black text-white/5 whitespace-nowrap uppercase tracking-tighter mix-blend-screen pointer-events-none z-0">
                NOTES FROM THE LAB
            </h2>

            <div className="flex justify-between items-end mb-16 relative z-10">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight uppercase flex items-center gap-4">
                    Notes from <br />the Lab
                </h2>

                <button className="hidden md:flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-sm hover:text-white transition-colors">
                    View All Notes <span className="text-lg">→</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                {posts.map((post, idx) => (
                    <motion.article
                        key={post.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="group cursor-pointer border border-white/10 rounded-2xl p-8 md:p-12 hover:bg-white/5 transition-colors duration-300 relative overflow-hidden backdrop-blur-sm bg-black/40"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <span className="text-accent text-sm font-bold uppercase tracking-widest bg-accent/10 px-4 py-1 rounded-full">{post.category}</span>
                            <span className="text-white/40 text-sm font-medium">{post.date}</span>
                        </div>

                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tighter leading-tight group-hover:text-accent transition-colors duration-300">
                            {post.title}
                        </h3>

                        {/* Glowing red accent bar at bottom on hover */}
                        <div className="absolute bottom-0 left-0 h-1 bg-accent w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-b-2xl"></div>
                    </motion.article>
                ))}
            </div>

        </section>
    );
}
