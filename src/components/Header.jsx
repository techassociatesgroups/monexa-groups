import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';

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

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/India' },
        { name: 'Investor', path: '/invest' },
        { name: 'EMI Calculator', path: '/emi-calculator' },
        { name: 'Contact Us', path: '/contact' }
    ];

    const isActive = (path) => {
        if (path === '/' && location.pathname !== '/') return false;
        if (path !== '/' && location.pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <header style={{
            position: 'fixed',
            top: 0,
            zIndex: 1000,
            width: '100%',
            backgroundColor: scrolled ? '#c59f5921' : 'transparent',
            backdropFilter: scrolled ? 'blur(12px) saturate(180%)' : 'none',
            WebkitBackdropFilter: scrolled ? 'blur(12px) saturate(180%)' : 'none', // Safari support    
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: scrolled ? '70px' : '100px',
                transition: 'height 0.3s ease',
                padding: '0 1rem'
            }}>
                {/* Logo Section */}
                <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '9px' }}>
                    <div style={{
                        fontSize: '1.8rem',
                        fontWeight: 700,
                        fontFamily: "'Outfit', sans-serif",
                        letterSpacing: '1px'
                    }}>
                        <span style={{ color: scrolled ? 'var(--theme-text-main)' : 'white' }}>MONEXA</span>
                        <span style={{ color: 'var(--theme-accent)', marginLeft: '8px' }}>groups</span>
                    </div>
                </Link>

                {/* Mobile Menu Icon */}
                <div className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ cursor: 'pointer', fontSize: '1.8rem', color: scrolled || isMobileMenuOpen ? 'black' : 'white', display: 'none', zIndex: 1001 }}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Navigation Links */}
                <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    {navLinks.map((link, idx) => (
                        <Link
                            key={idx}
                            to={link.path}
                            style={{
                                color: scrolled ? (isActive(link.path) ? 'black' : 'black') : 'white',
                                fontWeight: isActive(link.path) ? 600 : 400,
                                fontSize: '0.95rem',
                                textDecoration: 'none',
                                position: 'relative',
                                transition: 'all 0.3s ease',
                                fontFamily: 'Outfit, sans-serif',
                                letterSpacing: '0.5px'
                            }}
                        >
                            {link.name}
                            {isActive(link.path) && (
                                <span style={{
                                    position: 'absolute',
                                    bottom: '-5px',
                                    left: 0,
                                    width: '100%',
                                    height: '2px',
                                    backgroundColor: 'var(--theme-accent)'
                                }} />
                            )}
                        </Link>
                    ))}

                    {/* Contact Button */}
                    <Link
                        to="/contact"
                        className="contact-btn"
                        style={{
                            padding: '0.8rem 1rem',
                            backgroundColor: 'transparent',
                            color: scrolled ? 'var(--theme-accent)' : 'white',
                            border: '1px solid',
                            borderColor: scrolled ? 'var(--theme-accent)' : 'rgba(253, 244, 244, 0.4)',
                            borderRadius: '4px',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            letterSpacing: '1px',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}
                        onMouseOver={(e) => {
                            if (!scrolled) e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                            else {
                                e.currentTarget.style.backgroundColor = 'var(--theme-accent)';
                                e.currentTarget.style.color = 'var(--theme-text-inverse)';
                            }
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            if (scrolled) e.currentTarget.style.color = 'var(--theme-accent)';
                        }}
                    >
                        CONTACT
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
