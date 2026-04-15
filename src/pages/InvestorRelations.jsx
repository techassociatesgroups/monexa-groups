import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaChartLine, FaShieldAlt, FaChartBar, FaHourglassHalf, FaCheck, FaFilePdf, FaDownload, FaRegClock, FaBuilding } from 'react-icons/fa';

const InvestorRelations = () => {
    const navigate = useNavigate();

    const investReasons = [
        { title: 'High Returns', icon: <FaChartLine />, desc: 'Real estate investments with Monexa groups have historically delivered 12-18% annual returns, outperforming traditional savings and fixed deposits.' },
        { title: 'Secured Investment', icon: <FaShieldAlt />, desc: 'All investments are backed by tangible assets &mdash; land and property. Your capital is protected by physical value that appreciates over time.' },
        { title: 'Portfolio Diversification', icon: <FaChartBar />, desc: 'Spread your investments across residential, commercial, and mixed-use projects in multiple countries for reduced risk.' },
        { title: 'Flexible Tenure', icon: <FaHourglassHalf />, desc: 'Choose from short-term (1-3 years) to long-term (5-15 years) investment plans tailored to your financial goals.' }
    ];

    return (
        <div className="page-transition" style={{ backgroundColor: 'var(--theme-card)', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>

            {/* HERO PITCH */}
            <section style={{
                padding: '10rem 2rem 6rem 2rem',
                backgroundColor: 'var(--theme-primary)',
                color: 'white',
                textAlign: 'center'
            }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                        style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 600, color: 'white', fontFamily: 'Outfit, sans-serif' }}
                    >
                        Capital Growth & Transparency
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ width: '40px', height: '2px', background: 'var(--theme-accent)', margin: '0 auto 2rem auto' }}
                    ></motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Investing with Monexa groups means aligning with a multinational conglomerate committed to unparalleled structural integrity and uncompromising financial yields. We operate on a foundation of trust, executing massive architectural paradigms that guarantee long-term appreciation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* WHY INVEST WITH US */}
            <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--theme-card)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '2.8rem', fontWeight: 600, color: 'var(--theme-primary)', marginBottom: '1.5rem', fontFamily: 'Outfit, sans-serif' }}>Why Invest With Us?</h2>
                        <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--theme-text-muted)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                            Real estate remains one of the safest and most rewarding asset classes. Here is why Monexa groups is your ideal investment partner.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem 5rem', maxWidth: '1000px', margin: '0 auto' }}>
                        {investReasons.map((item, idx) => (
                            <motion.div
                                key={idx} initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                                style={{ display: 'flex', gap: '1.5rem' }}
                            >
                                <div style={{
                                    minWidth: '60px', height: '60px', backgroundColor: '#F0F4F8', borderRadius: '12px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: 'var(--theme-primary)'
                                }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--theme-text-main)', marginBottom: '0.8rem', fontFamily: 'Outfit, sans-serif' }}>{item.title}</h3>
                                    <p style={{ color: 'var(--theme-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            {/* INVESTMENT PLANS */}
            <section style={{ padding: '4rem 2rem 8rem 2rem', backgroundColor: 'var(--theme-card)' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>

                        {/* Plan A */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ backgroundColor: 'white', borderRadius: '12px', padding: '3.5rem', boxShadow: '0 8px 30px rgba(0,0,50,0.06)', display: 'flex', flexDirection: 'column', gap: '2rem', border: '1px solid #F1F4F9' }}>
                            <div>
                                <div style={{ width: '40px', height: '4px', backgroundColor: '#1A56A6', borderRadius: '2px', marginBottom: '2rem' }}></div>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0F172A', fontFamily: 'Outfit, sans-serif' }}>Plan A &ndash; Short Term Investment</h3>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <FaRegClock style={{ color: '#1A56A6', marginTop: '4px', fontSize: '1.1rem' }} />
                                    <div>
                                        <div style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '4px' }}>Duration</div>
                                        <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#0F172A' }}>Less than 12 months</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <FaChartLine style={{ color: '#1A56A6', marginTop: '4px', fontSize: '1.1rem' }} />
                                    <div>
                                        <div style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '4px' }}>Expected Return*</div>
                                        <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#0F172A' }}>Up to 12% per annum</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <FaBuilding style={{ color: '#1A56A6', marginTop: '4px', fontSize: '1.1rem' }} />
                                    <div>
                                        <div style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '4px' }}>Suitable For</div>
                                        <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#0F172A' }}>Short-term investors</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontStyle: 'italic', marginTop: '1.5rem' }}>
                                *Returns are target/expected and subject to project performance.
                            </div>
                        </motion.div>

                        {/* Plan B */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ backgroundColor: 'white', borderRadius: '12px', padding: '3.5rem', boxShadow: '0 8px 30px rgba(0,0,50,0.06)', display: 'flex', flexDirection: 'column', gap: '2rem', border: '1px solid #F1F4F9' }}>
                            <div>
                                <div style={{ width: '40px', height: '4px', backgroundColor: '#1A56A6', borderRadius: '2px', marginBottom: '2rem' }}></div>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0F172A', fontFamily: 'Outfit, sans-serif' }}>Plan B &ndash; Long Term Investment</h3>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <FaRegClock style={{ color: '#1A56A6', marginTop: '4px', fontSize: '1.1rem' }} />
                                    <div>
                                        <div style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '4px' }}>Duration</div>
                                        <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#0F172A' }}>24 months and above</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <FaChartLine style={{ color: '#1A56A6', marginTop: '4px', fontSize: '1.1rem' }} />
                                    <div>
                                        <div style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '4px' }}>Expected Return*</div>
                                        <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#0F172A' }}>Up to 24% per annum</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <FaBuilding style={{ color: '#1A56A6', marginTop: '4px', fontSize: '1.1rem' }} />
                                    <div>
                                        <div style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '4px' }}>Suitable For</div>
                                        <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#0F172A' }}>High-growth investors</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontStyle: 'italic', marginTop: '1.5rem' }}>
                                *Returns are target/expected and subject to project performance.
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* HOW TO GET STARTED */}
            <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--theme-card)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '2.8rem', fontWeight: 600, color: 'var(--theme-primary)', fontFamily: 'Outfit, sans-serif' }}>How to Get Started</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
                        {[
                            { step: '1', title: 'Enquire', desc: 'Contact us or fill the enquiry form' },
                            { step: '2', title: 'Consult', desc: 'Meet our investment advisor' },
                            { step: '3', title: 'Choose', desc: 'Select your preferred plan' },
                            { step: '4', title: 'Invest', desc: 'Complete documentation and start earning' }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}
                            >
                                <div style={{
                                    width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--theme-primary)',
                                    color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '1.2rem', fontWeight: 700
                                }}>
                                    {item.step}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--theme-text-main)', marginBottom: '0.8rem', fontFamily: 'Outfit, sans-serif' }}>{item.title}</h3>
                                    <p style={{ color: 'var(--theme-text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INVESTOR DOCUMENTS */}
            <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--theme-card)' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <div style={{ color: 'var(--theme-primary)', display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                            <FaFilePdf size={45} />
                        </div>
                        <h2 style={{ fontSize: '2.8rem', fontWeight: 600, color: 'var(--theme-primary)', marginBottom: '1.5rem', fontFamily: 'Outfit, sans-serif' }}>Investor Documents</h2>
                        <p style={{ color: 'var(--theme-text-muted)', fontSize: '1.1rem' }}>Download detailed documents about our investment plans, features, and approach.</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {[
                            { title: 'Investment Overview Brochure', size: '2.4 MB', desc: 'Complete guide to investing with Monexa groups' },
                        ].map((doc, idx) => (
                            <motion.div
                                key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                style={{
                                    padding: '2rem', border: '1px solid #eee', borderRadius: '12px',
                                    display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                                }}
                                whileHover={{ borderColor: 'var(--theme-primary)', boxShadow: '0 5px 20px rgba(0,0,0,0.03)' }}
                            >
                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                    <div style={{ width: '50px', height: '50px', backgroundColor: '#F0F4F8', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--theme-primary)' }}>
                                        <FaFilePdf size={20} />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--theme-text-main)', fontFamily: 'Outfit, sans-serif' }}>{doc.title}</h3>
                                        <p style={{ color: 'var(--theme-text-muted)', fontSize: '0.85rem' }}>{doc.desc} &bull; {doc.size}</p>
                                    </div>
                                </div>
                                <button style={{ border: 'none', background: 'none', color: 'var(--theme-primary)', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span>Download</span> <FaDownload size={14} />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HIGH TOUCH CTA */}
            <section style={{ padding: '1rem 0', backgroundColor: 'var(--theme-primary)', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '750px' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontWeight: 600, fontFamily: 'Outfit, sans-serif', color: 'white' }}>Connect With Capital Management</h2>
                    <p style={{ opacity: 0.8, fontSize: '1.15rem', marginBottom: '3rem', color: 'white' }}>
                        Our institutional advisory team is available for private consultations regarding capital deployment, portfolio diversification, and long-term yield strategies.
                    </p>
                    <button
                        onClick={() => navigate('/contact')}
                        style={{ padding: '1.2rem 3rem', fontSize: '1rem', backgroundColor: 'white', color: 'var(--theme-primary)', border: 'none', borderRadius: '6px', fontWeight: 600, cursor: 'pointer' }}
                    >
                        Request Private Consultation
                    </button>
                    <p style={{ marginTop: '2rem', fontSize: '0.85rem', opacity: 0.5 }}>
                        All inquiries are handled with strict confidentiality. Minimum investment thresholds apply.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default InvestorRelations;
