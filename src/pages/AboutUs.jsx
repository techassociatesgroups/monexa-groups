import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaRegEye, FaGlobe, FaClock, FaUsers, FaArrowRight } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const AboutUs = () => {
    return (
        <div className="page-transition" style={{ backgroundColor: 'var(--theme-card)', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>

            {/* HERO SECTION */}
            <section style={{
                backgroundColor: 'var(--theme-primary)',
                padding: '10rem 2rem 6rem 2rem',
                textAlign: 'center',
                color: 'white'
            }}>
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        style={{ fontSize: '3.5rem', fontWeight: 600, marginBottom: '1.5rem', fontFamily: 'Outfit, sans-serif', color: 'white' }}
                    >
                        About Monexa groups
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, fontFamily: 'Outfit, sans-serif' }}
                    >
                        A multinational real estate powerhouse shaping skylines and communities across 5 countries for over 25 years.
                    </motion.p>
                </div>
            </section>

            {/* PREVIOUS CONTENT: THE LEGACY OF SCALE */}
            <section style={{ padding: '8rem 0', backgroundColor: 'var(--theme-card)' }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <motion.span
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            style={{ fontSize: '0.85rem', color: 'var(--theme-text-muted)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block' }}
                        >
                            Established 1998
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            style={{ fontSize: '3rem', fontWeight: 400, color: 'var(--theme-primary)', marginBottom: '2.5rem', lineHeight: 1.2 }}
                        >
                            A Legacy of Scale and <br />
                            <span style={{ color: 'var(--theme-text-muted)', fontStyle: 'italic', fontFamily: 'serif' }}>Unwavering Stability.</span>
                        </motion.h2>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginTop: '4rem' }}>
                            <motion.p
                                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}
                                style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--theme-text-muted)' }}
                            >
                                Founded on the principles of structural integrity and financial transparency, Monexa groups has evolved from a boutique regional developer into a global investment powerhouse. Our journey is defined by the spaces we create and the trust we build.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}
                                style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--theme-text-muted)' }}
                            >
                                Today, we manage a portfolio that spans 28 Indian states and key international hubs. Our operational mandate remains focused: delivering high-yield infrastructure assets that serve both the community and the investor.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PREVIOUS CONTENT: OPERATIONAL MANDATE */}
            <section style={{ padding: '8rem 0', backgroundColor: 'var(--theme-bg)' }}>
                <div className="container">
                    <div className="flex-col-mobile" style={{ display: 'flex', gap: '5rem', alignItems: 'center' }}>
                        <div style={{ flex: 1 }}>
                            <img
                                src="/images/monexa ventures 2.jpg"
                                alt="Modern Architecture"
                                style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '4px' }}
                            />
                        </div>
                        <div style={{ flex: 1 }}>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 400 }}>The Strategic Mandate</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: 'var(--theme-text-muted)', marginBottom: '2rem' }}>
                                We operate at the intersection of innovation and stability. Every project in our vault is vetted through a rigorous multi-tier audit process, ensuring that the 'Quiet Luxury' we promise is backed by 'Loud Stability.'
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <div>
                                    <h4 style={{ color: 'var(--theme-accent)', marginBottom: '0.5rem' }}>01. Structural Grace</h4>
                                    <p style={{ fontSize: '0.9rem', color: '#666' }}>Architectural excellence without compromise.</p>
                                </div>
                                <div>
                                    <h4 style={{ color: 'var(--theme-accent)', marginBottom: '0.5rem' }}>02. Ethical Foundation</h4>
                                    <p style={{ fontSize: '0.9rem', color: '#666' }}>Transparent governance in every contract.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MISSION & VISION */}
            <section style={{ padding: '6rem 2rem' }}>
                <div className="container">
                    <div className="grid-2" style={{ gap: '4rem' }}>
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-col-mobile" style={{ display: 'flex', gap: '2rem' }}>
                            <div style={{ color: 'var(--theme-primary)', fontSize: '2.5rem', display: 'flex', alignItems: 'center' }}>
                                <FaBullseye />
                            </div>
                            <div>
                                <h2 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--theme-text-main)', fontFamily: 'Outfit, sans-serif' }}>Our Mission</h2>
                                <p style={{ color: 'var(--theme-text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                                    To deliver world-class real estate solutions that blend innovation, sustainability, and cultural sensitivity â€” creating spaces where communities flourish and investments grow.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-col-mobile" style={{ display: 'flex', gap: '2rem' }}>
                            <div style={{ color: 'var(--theme-primary)', fontSize: '2.5rem', marginTop: '5px' }}>
                                <FaRegEye />
                            </div>
                            <div>
                                <h2 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--theme-text-main)' }}>Our Vision</h2>
                                <p style={{ color: 'var(--theme-text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                                    To be the most trusted multinational real estate company, recognized for transforming landscapes and lives through responsible development across Asia and the Middle East.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* GLOBAL FOOTPRINT */}
            <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--theme-bg)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <div style={{ color: 'var(--theme-primary)', display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                            <FaGlobe size={45} />
                        </div>
                        <h2 style={{ fontSize: '2.8rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--theme-text-main)' }}>Our Global Footprint</h2>
                        <p style={{ color: 'var(--theme-text-muted)', fontSize: '1.1rem' }}>Present in 5 countries with localized expertise and global standards.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '2rem' }}>
                        {[
                            { id: 'IN', country: 'India', projects: '50,000+ Projects', desc: 'Our home base with the largest portfolio spanning 28 states.', cities: 'Key Cities: Mumbai, Delhi, Bangalore, Chennai, Hyderabad & more' },
                            { id: 'MY', country: 'Malaysia', projects: '12,000+ Projects', desc: 'Premium mixed-use developments and eco-friendly townships.', cities: 'Key Cities: Kuala Lumpur, Penang, Johor Bahru' },
                            { id: 'SG', country: 'Singapore', projects: '8,500+ Projects', desc: 'Luxury condominiums and smart commercial spaces.', cities: 'Key Cities: Central, East Coast, Sentosa' },
                            { id: 'AE', country: 'Dubai', projects: '15,000+ Projects', desc: 'Iconic towers and waterfront living experiences.', cities: 'Key Cities: Downtown, Marina, Palm Jumeirah' },
                            { id: 'HK', country: 'Hong Kong', projects: '5,200+ Projects', desc: 'High-density residential and premium retail developments.', cities: 'Key Cities: Central, Kowloon, New Territories' }
                        ].map((hub, idx) => (
                            <motion.div
                                key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                                style={{ backgroundColor: 'white', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.05)' }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                    <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--theme-text-main)', minWidth: '50px' }}>{hub.id}</div>
                                    <div>
                                        <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--theme-text-main)' }}>{hub.country}</h3>
                                        <div style={{ color: '#1A56A6', fontWeight: 600, fontSize: '0.9rem' }}>{hub.projects}</div>
                                    </div>
                                </div>
                                <p style={{ color: 'var(--theme-text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>{hub.desc}</p>
                                <p style={{ color: 'var(--theme-text-muted)', fontSize: '0.85rem' }}>{hub.cities}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* OUR JOURNEY - TIMELINE */}
            <section style={{ padding: '6rem 2rem' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <div style={{ color: 'var(--theme-primary)', display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                            <FaClock size={45} />
                        </div>
                        <h2 style={{ fontSize: '2.8rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--theme-text-main)' }}>Our Journey</h2>
                    </div>

                    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                        {[
                            { year: '1998', title: 'Founded in India', desc: 'Started with a vision to build quality homes.' },
                            { year: '2005', title: 'Crossed 10,000 Projects', desc: 'Established as a leading builder in South India.' },
                            { year: '2010', title: 'Expanded to Dubai', desc: 'First international venture in the Middle East.' },
                            { year: '2014', title: 'Singapore & Malaysia', desc: 'Extended footprint to Southeast Asia.' },
                            { year: '2018', title: 'Hong Kong Operations', desc: 'Entered the premium Hong Kong market.' },
                            { year: '2024', title: '1 Million Projects', desc: 'Achieved the landmark milestone globally.' }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                                style={{ display: 'flex', gap: '2.5rem', marginBottom: '3rem', position: 'relative' }}
                            >
                                <div style={{
                                    minWidth: '60px', height: '60px', backgroundColor: '#1A56A6', borderRadius: '50%',
                                    display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center',
                                    color: 'white', fontWeight: 600, fontSize: '1rem'
                                }}>
                                    {item.year}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--theme-text-main)', marginBottom: '0.3rem' }}>{item.title}</h3>
                                    <p style={{ color: 'var(--theme-text-muted)', fontSize: '0.95rem' }}>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--theme-bg)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <div style={{ color: 'var(--theme-primary)', display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                            <FaUsers size={45} />
                        </div>
                        <h2 style={{ fontSize: '2.8rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--theme-text-main)', fontFamily: 'Outfit, sans-serif' }}>Our Leadership Team</h2>
                        <p style={{ color: 'var(--theme-text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                            A diverse team of industry veterans driving innovation and excellence across continents.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '2rem' }}>
                        {[
                            { initial: 'RK', name: 'Rajesh Kumar', role: 'Chairman & CEO' },
                            { initial: 'PS', name: 'Priya Sharma', role: 'Chief Operating Officer' },
                            { initial: 'AM', name: 'Arjun Mehta', role: 'Director of International Operations' },
                            { initial: 'SC', name: 'Sarah Chen', role: 'VP - Singapore & Hong Kong' },
                            { initial: 'AF', name: 'Ahmad Faizal', role: 'Director - Malaysia Operations' },
                            { initial: 'VS', name: 'Vikram Singh', role: 'Chief Financial Officer' },
                            { initial: 'DN', name: 'Deepika Nair', role: 'Head of Architecture' },
                            { initial: 'OR', name: 'Omar Al-Rashid', role: 'Director - Dubai Operations' }
                        ].map((lead, idx) => (
                            <motion.div
                                key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
                                style={{ backgroundColor: 'white', padding: '3rem 2rem', textAlign: 'center', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.05)' }}
                            >
                                <div style={{
                                    width: '70px', height: '70px', borderRadius: '50%', backgroundColor: '#F0F4F8',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: '#1A56A6', fontWeight: 700, fontSize: '1.2rem', margin: '0 auto 1.5rem'
                                }}>
                                    {lead.initial}
                                </div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--theme-text-main)', marginBottom: '0.4rem' }}>{lead.name}</h3>
                                <p style={{ color: 'var(--theme-text-muted)', fontSize: '0.85rem' }}>{lead.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;


