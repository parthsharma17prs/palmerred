"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [scrollingDown, setScrollingDown] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setScrolled(currentScrollY > 50);

            if (currentScrollY > lastScrollY && currentScrollY > 150) {
                setScrollingDown(true);
            } else if (currentScrollY < lastScrollY - 10 || currentScrollY <= 50) {
                // Add a small threshold (10px) to prevent jittering on micro-scrolls up
                setScrollingDown(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const links = [
        { name: "Home", href: "/" },
        { name: "The problem", href: "/the-problem" },
        { name: "The solution", href: "/the-solution" },
        { name: "The product", href: "/the-product" },
        { name: "How it works", href: "/how-it-works" },
        { name: "About us", href: "/about-us" },
        { name: "Contact Us", href: "/contact-us" }
    ];

    const isConcise = scrolled && scrollingDown;

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{
                y: 0,
                width: scrolled ? (isConcise ? "60%" : "95%") : "100%",
                top: scrolled ? (isConcise ? 24 : 16) : 0,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.8 }}
            className={`fixed left-1/2 -translate-x-1/2 z-[100] overflow-visible
                ${scrolled
                    ? 'bg-white/5 backdrop-blur-[24px] saturate-[180%] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-[32px]'
                    : 'bg-transparent border-transparent rounded-none'
                }
                transition-colors duration-500 ease-out
            `}
        >
            <div className={`mx-auto px-6 lg:px-12 flex items-center justify-between transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isConcise ? 'h-[56px]' : 'h-[80px]'}`}>

                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <img
                        src="/Logo.png"
                        alt="CompliLedger"
                        className={`object-contain w-auto transform hover:scale-[1.02] transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isConcise ? 'h-5' : 'h-8 md:h-10'}`}
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className={`hidden lg:flex items-center transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isConcise ? 'gap-4' : 'gap-8'}`}>
                    {links.slice(0, 6).map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`font-medium text-white/70 hover:text-white transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] relative group ${isConcise ? 'text-[11px] tracking-wide' : 'text-[13px] sm:text-sm'}`}
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full rounded-full opacity-0 group-hover:opacity-100" />
                        </Link>
                    ))}
                </div>

                {/* CTA Desktop */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link
                        href="/contact-us"
                        className={`font-medium text-white/70 hover:text-white transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isConcise ? 'text-[11px] pr-2' : 'text-sm pr-4'}`}
                    >
                        Contact Us
                    </Link>
                    <button className={`bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02] active:scale-100 shadow-lg ${isConcise ? 'px-4 py-1.5 text-[11px]' : 'px-6 py-2.5 text-sm'}`}>
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
                        className="lg:hidden bg-[#0b0c0f]/95 backdrop-blur-[24px] border-t border-white/[0.05] overflow-hidden rounded-b-[32px]"
                    >
                        <div className="flex flex-col px-6 py-8 gap-6">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-xl font-medium text-white/80 hover:text-white"
                                >
                                    {link.name}
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
