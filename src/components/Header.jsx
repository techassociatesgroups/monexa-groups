import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Properties', path: '/India' },
    { label: 'Investor', path: '/invest' },
    { label: 'EMI Calculator', path: '/emi-calculator' }
];

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const isHome = location.pathname === '/';
    const isSolid = scrolled || isMobileMenuOpen || !isHome;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const getDesktopLinkClass = (path) => {
        const isActive = location.pathname === path;

        return `no-underline text-sm font-semibold uppercase tracking-[0.18em] transition-colors duration-300 hover:text-[#C5A059] ${isSolid ? 'text-slate-800' : 'text-white'
            } ${isActive ? 'text-[#C5A059]' : ''}`;
    };

    const getMobileLinkClass = (path) => {
        const isActive = location.pathname === path;

        return `block rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition-colors duration-300 ${isActive
                ? 'bg-[#C5A059] text-white'
                : 'text-slate-800 hover:bg-slate-100'
            }`;
    };

    return (
        <header
            className={`${isHome ? 'fixed top-0 left-0' : 'sticky top-0'
                } z-[1000] w-full transition-all duration-500 ease-in-out ${isSolid
                    ? 'border-b border-white/40 bg-white/78 shadow-lg backdrop-blur-2xl'
                    : 'border-b border-white/15 bg-white/10 shadow-[0_10px_40px_rgba(15,23,42,0.18)] backdrop-blur-xl'
                }`}
        >
            {/* Added left/right padding */}
            <div className="site-shell px-5 sm:px-8 lg:px-12">
                <div className="flex min-h-[100px] items-center justify-between gap-6">

                    {/* Logo increased size */}
                    {/* Logo Only */}
                    <Link
                        to="/"
                        className="z-[10002] shrink-0 no-underline flex items-center"
                        aria-label="Monexa groups home"
                    >
                        <img
                            src="/images/monexa groups logo.png"
                            alt="Monexa Groups Logo"
                            className="h-18 sm:h-22 lg:h-26 w-auto object-contain"
                        />
                    </Link>



                    {/* Desktop Menu */}
                    <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex xl:gap-10">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                to={item.path}
                                className={getDesktopLinkClass(item.path)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Side */}
                    <div className="flex shrink-0 items-center justify-end gap-3">
                        <Link
                            to="/contact"
                            className="hidden lg:inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#C5A059] px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white no-underline transition-colors duration-300 hover:bg-slate-900"
                        >
                            Contact
                        </Link>

                        <button
                            type="button"
                            className={`inline-flex items-center justify-center rounded-full border p-3 transition-colors duration-300 lg:hidden ${isSolid
                                    ? 'border-slate-200 bg-white/80 text-slate-900 backdrop-blur-xl'
                                    : 'border-white/30 bg-white/10 text-white backdrop-blur-sm'
                                }`}
                            onClick={() => setIsMobileMenuOpen((open) => !open)}
                            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isMobileMenuOpen}
                        >
                            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.2 }}
                        className="border-t border-slate-200 bg-white/95 shadow-xl backdrop-blur-2xl lg:hidden"
                    >
                        <div className="site-shell px-5 py-5">
                            <nav className="flex flex-col gap-2">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        to={item.path}
                                        className={getMobileLinkClass(item.path)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}

                                <Link
                                    to="/contact"
                                    className="mt-2 inline-flex items-center justify-center rounded-2xl bg-[#C5A059] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-white no-underline transition-colors duration-300 hover:bg-slate-900"
                                >
                                    Contact
                                </Link>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;