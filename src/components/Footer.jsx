import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--theme-bg)', position: 'relative', overflow: 'hidden' }}>

            {/* TOP CTA SECTION - Parallax Backdrop */}
            <div style={{
                height: '600px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '0 2rem'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, width: '100%', height: '100%',
                    backgroundImage: 'url("/images/monexa ventures 1.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.4)',
                    zIndex: 1
                }} />

                {/* Large Background Watermark */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '15vw',
                    fontWeight: 900,
                    color: 'rgba(255,255,255,0.05)',
                    whiteSpace: 'nowrap',
                    zIndex: 2,
                    textTransform: 'lowercase',
                    fontFamily: 'Outfit, sans-serif'
                }}>
                    monexa
                </div>

                <div style={{ position: 'relative', zIndex: 3 }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            fontSize: '4.5rem',
                            color: 'white',
                            marginBottom: '1.5rem',
                            fontFamily: 'Outfit, sans-serif',
                            fontWeight: 600
                        }}
                    >
                        Your dream home awaits
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{
                            fontSize: '1.2rem',
                            color: 'rgba(255,255,255,0.8)',
                            maxWidth: '700px',
                            margin: '0 auto 3rem auto',
                            lineHeight: 1.8
                        }}
                    >
                        Whether you're exploring our homes or envisioning something custom, <br />
                        we're here to bring your dream to life.
                    </motion.p>

                    <motion.a
                        href="https://wa.me/6385303666?text=I%20would%20like%20to%20get%20a%20free%20quote"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, backgroundColor: 'var(--theme-accent)', color: 'var(--theme-text-inverse)' }}
                        style={{
                            width: '160px',
                            height: '160px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(0,0,0,0.6)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid var(--theme-accent)',
                            color: 'var(--theme-accent)',
                            fontSize: '1.1rem',
                            fontWeight: 500,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            padding: '1rem',
                            transition: 'all 0.4s ease',
                            textDecoration: 'none'
                        }}
                    >
                        Get your <br /> free quote
                    </motion.a>
                </div>
            </div>

            {/* FLOATING FOOTER BOX */}
            <div className="container mx-auto px-4 relative z-10 -mt-24 md:-mt-32 pb-20">
                <div className="bg-white rounded-[32px] md:rounded-[48px] p-8 md:p-16 shadow-2xl border border-gray-100 flex flex-col lg:flex-row gap-12 lg:gap-24">

                    {/* Brand Info */}
                    <div className="lg:w-1/3 space-y-6">
                        <Link to="/" className="inline-block group">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 font-['Outfit']">
                                monexa<span className="text-[#C5A059] ml-1">groups</span>
                            </h2>
                        </Link>
                        <p className="text-gray-500 text-lg leading-relaxed max-w-sm">
                            We are creators of transformative spaces that inspire, innovate, and endure. Built on a legacy of structural excellence.
                        </p>
                    </div>

                    {/* Links Grid */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-[#C5A059]">Company</h4>
                            <ul className="space-y-4">
                                {[
                                    { name: 'About Us', path: '/about' },
                                    { name: 'Our Services', path: '/services' },
                                    { name: 'Investor Relations', path: '/invest' },
                                    { name: 'EMI Calculator', path: '/emi-calculator' },
                                    { name: 'Contact Us', path: '/contact' }
                                ].map(item => (
                                    <li key={item.name}>
                                        <Link to={item.path} className="text-gray-600 hover:text-[#C5A059] transition-colors text-base font-medium no-underline flex items-center gap-2">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-[#C5A059]">Global Projects</h4>
                            <ul className="space-y-4">
                                {[
                                    { name: 'India Developments', path: '/India' },
                                    { name: 'Malaysia Projects', path: '/Malaysia' },
                                    { name: 'Dubai Operations', path: '/commercial' },
                                    { name: 'Singapore Portfolio', path: '/upcoming' }
                                ].map(item => (
                                    <li key={item.name}>
                                        <Link to={item.path} className="text-gray-600 hover:text-[#C5A059] transition-colors text-base font-medium no-underline">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:w-1/4 space-y-8">
                        <div className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4">Get In Touch</h4>
                            <a href="tel:6385303666" className="text-2xl font-bold text-gray-900 block no-underline hover:text-[#C5A059] transition-colors">6385303666</a>
                            <a href="mailto:monexa@example.com" className="text-gray-500 hover:text-gray-900 transition-colors text-lg inline-block border-b border-gray-200 pb-1 no-underline">
                                monexa@example.com
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-wrap gap-6 items-center pt-4">
                            {['Facebook', 'Instagram', 'Youtube', 'Twitter'].map(s => (
                                <Link key={s} to="#" className="text-gray-400 hover:text-[#C5A059] transition-all transform hover:scale-110 text-sm font-semibold no-underline uppercase tracking-wider">
                                    {s}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Rights */}
                <div style={{
                    textAlign: 'center',
                    padding: '3rem 0 0 0',
                    color: 'rgba(255,255,255,0.4)',
                    fontSize: '0.9rem',
                    letterSpacing: '1px'
                }}>
                    Â© {new Date().getFullYear()} <span style={{ color: 'white' }}>Monexa</span>. All Rights Reserved.
                </div>
            </div>

        </footer>
    );
};

export default Footer;

