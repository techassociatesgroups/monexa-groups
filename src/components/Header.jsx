import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    FaBars,
    FaTimes,
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaPhoneAlt
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/India' },
        { name: 'Investor', path: '/invest' },
        { name: 'EMI Calculator', path: '/emi-calculator' },
    ];

    return (
        <header
            className={`fixed top-10 left-0 w-full z-[1000] transition-all duration-500 ${
                scrolled || isMobileMenuOpen
                    ? 'bg-white/95 backdrop-blur-xl shadow-md py-6'
                    : 'bg-transparent py-10'
            }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                
                {/* Logo */}
                <Link
                    to="/"
                    className="no-underline z-[10002]"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <div className="text-2xl md:text-3xl font-bold tracking-tight">
                        <span className={scrolled || isMobileMenuOpen ? 'text-gray-900' : 'text-white'}>
                            MONEXA
                        </span>
                        <span className="text-[#C5A059] ml-1">groups</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link, idx) => (
                        <Link
                            key={idx}
                            to={link.path}
                            className={`no-underline text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                                scrolled ? 'text-gray-700' : 'text-white'
                            } hover:text-[#C5A059]`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Fixed Contact Button */}
                    <Link
                        to="/contact"
                        className="bg-[#C5A059] text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wide no-underline whitespace-nowrap leading-none hover:bg-black transition-all duration-300"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className={`lg:hidden text-2xl z-[10002] p-2 ${
                        scrolled || isMobileMenuOpen
                            ? 'text-gray-900'
                            : 'text-white'
                    }`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-white/95 backdrop-blur-2xl z-[10001] lg:hidden flex flex-col h-[100dvh]"
                        >
                            <div className="h-24 w-full flex-shrink-0" />

                            <div className="flex-1 overflow-y-auto px-6">
                                <nav className="flex flex-col gap-8 py-8">
                                    {navLinks.map((link, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: idx * 0.05 }}
                                        >
                                            <Link
                                                to={link.path}
                                                className="block ml-4 text-2xl font-bold text-gray-900 no-underline hover:text-[#C5A059]"
                                                onClick={() =>
                                                    setIsMobileMenuOpen(false)
                                                }
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.div>
                                    ))}

                                    <div className="mt-4 pt-8 border-t border-gray-200 ml-4">
                                        <p className="text-[#C5A059] text-xs font-black uppercase tracking-widest mb-4">
                                            Get In Touch
                                        </p>

                                        <a
                                            href="tel:6385303666"
                                            className="flex items-center gap-4 text-xl font-bold text-gray-900 no-underline"
                                        >
                                            <div className="w-10 h-10 rounded-full bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059]">
                                                <FaPhoneAlt size={16} />
                                            </div>
                                            6385303666
                                        </a>
                                    </div>
                                </nav>
                            </div>

                            <div className="p-8 border-t border-gray-100 bg-white/60">
                                <div className="flex gap-6 text-xl text-gray-600">
                                    <a href="#"><FaFacebookF /></a>
                                    <a href="#"><FaInstagram /></a>
                                    <a href="#"><FaYoutube /></a>
                                    <a href="#"><FaTwitter /></a>
                                </div>

                                <p className="text-gray-400 text-[10px] mt-5">
                                    © {new Date().getFullYear()} MONEXA GROUPS.
                                    ALL RIGHTS RESERVED.
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;