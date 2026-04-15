import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const faqs = [
        { q: "How do I book a private consultation?", a: "You can schedule a private consultation by filling out the form on this page or by directly contacting our Capital Management team via email at invest@monexagroups.com." },
        { q: "Do you provide assistance with institutional funding?", a: "Yes, we navigate complex financial structuring and have strategic tie-ups with leading financial institutions to ensure seamless capital flow." },
        { q: "What is the typical timeframe for a mega-project?", a: "Timeframes vary based on zoning, scale, and structural complexity. We execute with precision; specific timelines are provided during the consultation phase." },
        { q: "How secure is my capital deployment?", a: "We ensure maximum security through comprehensive legal frameworks, rigorous compliance structures, and project-specific asset allocations." }
    ];

    return (
        <div className="page-transition" style={{ backgroundColor: 'var(--theme-bg)', minHeight: '100vh', paddingBottom: '5rem' }}>

            {/* HERO */}
            <div style={{ padding: '10rem 2rem 5.5rem 2rem', textAlign: 'center', backgroundColor: 'var(--theme-primary)', color: 'white', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 600, color: 'white', fontFamily: 'Outfit, sans-serif' }}>
                    Contact Support
                </h1>
                <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
                    Connect with our global operations team. We are positioned across key metropolitan hubs to ensure seamless communication and project execution.
                </p>
            </div>

            <section className="container" style={{ padding: '5rem 20px' }}>
                <div className="grid-2" style={{ gap: '4rem', alignItems: 'flex-start' }}>

                    {/* Contact Form */}
                    <div className="glass-panel" style={{ padding: '3.5rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '4px' }}>
                        <h2 style={{ marginBottom: '2.5rem', fontSize: '1.8rem', fontWeight: 400, color: 'var(--theme-primary)' }}>Direct Inquiry</h2>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div className="grid-2" style={{ gap: '1.5rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.9rem', color: 'var(--theme-text-muted)' }}>First Name</label>
                                    <input type="text" className="glass-input" style={{ width: '100%', padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '4px', background: 'var(--theme-bg)' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.9rem', color: 'var(--theme-text-muted)' }}>Last Name</label>
                                    <input type="text" className="glass-input" style={{ width: '100%', padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '4px', background: 'var(--theme-bg)' }} />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.9rem', color: 'var(--theme-text-muted)' }}>Email Address</label>
                                <input type="email" className="glass-input" style={{ width: '100%', padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '4px', background: 'var(--theme-bg)' }} />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.9rem', color: 'var(--theme-text-muted)' }}>Phone Number</label>
                                <input type="tel" className="glass-input" style={{ width: '100%', padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '4px', background: 'var(--theme-bg)' }} />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.9rem', color: 'var(--theme-text-muted)' }}>Area of Interest</label>
                                <select className="glass-input" style={{ width: '100%', padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '4px', background: 'var(--theme-bg)', color: 'var(--theme-text-main)' }}>
                                    <option>Strategic Investment Consultation</option>
                                    <option>Commercial Development Partnership</option>
                                    <option>Institutional Capital Deployment</option>
                                    <option>General Corporate Inquiry</option>
                                </select>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.9rem', color: 'var(--theme-text-muted)' }}>Message</label>
                                <textarea rows="5" className="glass-input" style={{ width: '100%', padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '4px', background: 'var(--theme-bg)', resize: 'vertical' }}></textarea>
                            </div>

                            <button className="btn" type="button" style={{ padding: '1.2rem', marginTop: '1rem', width: '100%' }}>Submit Inquiry</button>
                        </form>
                    </div>

                    {/* Contact Details & Map */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                        {/* Map Placeholder */}
                        <div style={{ width: '100%', height: '350px', backgroundColor: '#e2e8f0', borderRadius: '4px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(0,0,0,0.05)' }}>
                            <iframe
                                title="Google Maps"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.840656094255!2d78.6834011!3d10.7951523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa8e0ab8580001%3A0xeab5cd22ea67d1!2sK.K.Nagar%2C%20Tiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) opacity(0.8)' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>

                        {/* Office Details */}
                        <div className="glass-panel" style={{ padding: '2.5rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '4px' }}>
                            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.3rem', fontWeight: 500, color: 'var(--theme-primary)' }}>Global Footprint</h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                {/* HQ */}
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                                    <span style={{ fontSize: '1.5rem', color: 'var(--theme-accent)' }}>ðŸ“</span>
                                    <div>
                                        <p style={{ fontWeight: 600, color: 'var(--theme-text-main)', marginBottom: '0.3rem' }}>India (Global HQ)</p>
                                        <p style={{ color: 'var(--theme-text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                                            Monexa groups Pvt Ltd<br />Pl no 17, Uathamar St, Thentral Nagar<br />Trichy - 620021
                                        </p>
                                        <a href="tel:6385303666" style={{ color: 'var(--theme-primary)', fontWeight: 500 }}>6385303666</a>
                                    </div>
                                </div>

                                <div style={{ height: '1px', background: 'var(--glass-border)' }}></div>

                                {/* Regional: Malaysia */}
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                                    <span style={{ fontSize: '1.5rem', color: 'var(--theme-accent)' }}>ðŸ“</span>
                                    <div>
                                        <p style={{ fontWeight: 600, color: 'var(--theme-text-main)', marginBottom: '0.3rem' }}>Malaysia (Operations)</p>
                                        <a href="tel:+60179944796" style={{ color: 'var(--theme-primary)', fontWeight: 500 }}>+60 17 994 4796</a>
                                    </div>
                                </div>

                                <div style={{ height: '1px', background: 'var(--glass-border)' }}></div>

                                {/* Regional: Dubai */}
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                                    <span style={{ fontSize: '1.5rem', color: 'var(--theme-accent)' }}>ðŸ“</span>
                                    <div>
                                        <p style={{ fontWeight: 600, color: 'var(--theme-text-main)', marginBottom: '0.3rem' }}>Dubai, UAE (Capital Management)</p>
                                        <a href="mailto:invest@monexagroups.com" style={{ color: 'var(--theme-primary)', fontWeight: 500 }}>invest@monexagroups.com</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section style={{ backgroundColor: 'var(--theme-primary)', color: 'var(--theme-card)', padding: '6rem 20px', marginTop: '2rem' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '2.5rem', fontWeight: 400 }}>Frequently Asked Questions</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {faqs.map((faq, idx) => (
                            <div key={idx} style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                                <div
                                    style={{ padding: '1.5rem 2rem', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: '500', fontSize: '1.1rem' }}
                                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                >
                                    {faq.q}
                                    <span style={{ color: 'var(--theme-accent)', fontSize: '1.5rem', fontWeight: 300 }}>{activeFaq === idx ? 'âˆ’' : '+'}</span>
                                </div>
                                {activeFaq === idx && (
                                    <div style={{ padding: '0 2rem 2rem 2rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.8' }}>
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;


