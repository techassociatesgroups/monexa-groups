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
                    backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")',
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

                    <motion.button
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
                            transition: 'all 0.4s ease'
                        }}
                    >
                        Get your <br /> free quote
                    </motion.button>
                </div>
            </div>

            {/* FLOATING FOOTER BOX */}
            <div className="container" style={{
                position: 'relative',
                zIndex: 10,
                marginTop: '-120px',
                paddingBottom: '5rem'
            }}>
                <div style={{
                    backgroundColor: 'var(--theme-card)',
                    borderRadius: '40px',
                    padding: '5rem 4rem',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.8)',
                    border: '1px solid rgba(212, 175, 55, 0.15)',
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 2fr 1fr',
                    gap: '4rem'
                }}>
                    {/* Brand Info */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <div style={{ fontSize: '2.2rem', fontWeight: 700, fontFamily: 'Outfit, sans-serif', color: 'var(--theme-text-main)' }}>
                                <span style={{ color: 'var(--theme-accent)' }}> </span> monexa
                            </div>
                        </Link>
                        <p style={{ color: 'var(--theme-text-muted)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                            We are creators of transformative spaces <br />
                            that inspire, innovate, and endure.
                        </p>
                    </div>

                    {/* Navigation Columns */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--theme-accent)', marginBottom: '0.5rem' }}>Company</li>
                            {[
                                { name: 'About Us', path: '/about' },
                                { name: 'Our Services', path: '/services' },
                                { name: 'Investor Relations', path: '/invest' },
                                { name: 'EMI Calculator', path: '/emi-calculator' },
                                { name: 'Contact Us', path: '/contact' }
                            ].map(item => (
                                <li key={item.name}><Link to={item.path} style={{ textDecoration: 'none', color: 'var(--theme-text-main)', fontSize: '0.95rem', fontWeight: 400, transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = 'var(--theme-accent)'} onMouseLeave={e => e.target.style.color = 'var(--theme-text-main)'}>{item.name}</Link></li>
                            ))}
                        </ul>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--theme-accent)', marginBottom: '0.5rem' }}>Global Projects</li>
                            {[
                                { name: 'India Developments', path: '/India' },
                                { name: 'Malaysia Projects', path: '/ Malaysia' },
                                { name: 'Dubai Operations', path: '/commercial' },
                                { name: 'Singapore Portfolio', path: '/upcoming' }
                            ].map(item => (
                                <li key={item.name}><Link to={item.path} style={{ textDecoration: 'none', color: 'var(--theme-text-main)', fontSize: '0.95rem', fontWeight: 400, transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = 'var(--theme-accent)'} onMouseLeave={e => e.target.style.color = 'var(--theme-text-main)'}>{item.name}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div>
                            <div style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--theme-text-main)', marginBottom: '0.5rem' }}>6385303666</div>
                            <Link to="mailto:monexa@example.com" style={{
                                fontSize: '1.4rem',
                                fontWeight: 500,
                                color: 'var(--theme-text-muted)',
                                textDecoration: 'none',
                                borderBottom: '2px solid var(--theme-accent)',
                                paddingBottom: '2px'
                            }}>
                                monexa@example.com
                            </Link>
                        </div>

                        {/* Social Links */}
                        <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                            {['Facebook', 'Instagram', 'Youtube', 'Twitter'].map(s => (
                                <Link key={s} to="#" style={{ fontSize: '0.85rem', color: 'var(--theme-text-muted)', textDecoration: 'none' }}>{s}</Link>
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

