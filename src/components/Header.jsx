import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/India' },
        { name: 'Investor', path: '/invest' },
        { name: 'EMI Calculator', path: '/emi-calculator' },
    ];

    const isActive = (path) => {
        if (path === '/' && location.pathname !== '/') return false;
        if (path !== '/' && location.pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${scrolled
                    ? 'bg-white/80 backdrop-blur-xl shadow-sm py-4'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="no-underline z-[1001]">
                    <div className="text-2xl md:text-3xl font-bold font-['Outfit'] tracking-tighter">
                        <span className={scrolled ? 'text-gray-900' : 'text-white'}>MONEXA</span>
                        <span className="text-[#C5A059] ml-1">groups</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link, idx) => (
                        <Link
                            key={idx}
                            to={link.path}
                            className={`no-underline text-sm font-semibold tracking-wide uppercase transition-all duration-300 relative group ${scrolled ? 'text-gray-700' : 'text-white/90'
                                } hover:text-[#C5A059]`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#C5A059] transition-transform duration-300 ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                }`} />
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 no-underline ${scrolled
                                ? 'bg-gray-900 text-white hover:bg-[#C5A059]'
                                : 'bg-white text-gray-900 hover:bg-[#C5A059] hover:text-white'
                            }`}
                    >
                        Contact
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className={`lg:hidden text-2xl z-[1001] transition-colors ${(isMobileMenuOpen || scrolled) ? 'text-gray-900' : 'text-white'
                        }`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed inset-0 bg-white z-[1000] lg:hidden flex flex-col p-12"
                        >
                            <div className="flex flex-col gap-8 mt-16">
                                {navLinks.map((link, idx) => (
                                    <Link
                                        key={idx}
                                        to={link.path}
                                        className="text-3xl font-bold text-gray-900 no-underline hover:text-[#C5A059] transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Link
                                    to="/contact"
                                    className="text-3xl font-bold text-[#C5A059] no-underline"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Contact Us
                                </Link>
                            </div>
                            <div className="mt-auto space-y-4">
                                <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">Follow Us</p>
                                <div className="flex gap-6 text-xl text-gray-600">
                                    <span>FB</span><span>IG</span><span>YT</span><span>TW</span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;
