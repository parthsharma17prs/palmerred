"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        "Home", "The problem", "The solution", "The product", "How it works", "About us", "Contact Us"
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 w-full z-[100] transition-colors duration-500 ease-out ${scrolled ? 'bg-[#0b0c0f]/80 backdrop-blur-xl border-b border-white/[0.05]' : 'bg-transparent'
                }`}
        >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-[80px] flex items-center justify-between">

                {/* Same 2 Same Logo as compliledger.com */}
                <Link href="/" className="flex items-center">
                    <img
                        src="https://www.compliledger.com/Logo.png"
                        alt="CompliLedger"
                        className="h-8 md:h-10 object-contain w-auto transform hover:scale-[1.02] transition-transform"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    {links.slice(0, 6).map((link) => (
                        <Link
                            key={link}
                            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-[13px] sm:text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
                        >
                            {link}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full rounded-full opacity-0 group-hover:opacity-100" />
                        </Link>
                    ))}
                </div>

                {/* CTA Desktop */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link
                        href="#contact-us"
                        className="text-sm font-medium text-white/70 hover:text-white transition-colors pr-4"
                    >
                        Contact Us
                    </Link>
                    <button className="px-6 py-2.5 bg-white text-black font-semibold rounded-full text-sm hover:bg-white/90 transition-all transform hover:scale-[1.02] active:scale-100 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        Get Started
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden flex items-center">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="flex flex-col gap-1.5 p-2"
                        aria-label="Toggle Menu"
                    >
                        <motion.div
                            animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 8 : 0 }}
                            className="w-6 h-[2px] bg-white transition-transform origin-left"
                        />
                        <motion.div
                            animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                            className="w-6 h-[2px] bg-white transition-opacity"
                        />
                        <motion.div
                            animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -8 : 0 }}
                            className="w-6 h-[2px] bg-white transition-transform origin-left"
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-[#0b0c0f] border-b border-white/[0.05] overflow-hidden"
                    >
                        <div className="flex flex-col px-6 py-8 gap-6">
                            {links.map((link) => (
                                <Link
                                    key={link}
                                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-xl font-medium text-white/80 hover:text-white"
                                >
                                    {link}
                                </Link>
                            ))}
                            <button className="mt-4 w-full py-4 bg-white text-black font-semibold rounded-full text-lg hover:bg-white/90 transition-all">
                                Get Started
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
