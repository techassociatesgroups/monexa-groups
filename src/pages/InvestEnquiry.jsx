import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const InvestEnquiry = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    // default states if directly accessed
    const planDetails = location.state || {
        planName: "General Investment",
        targetReturn: "TBD",
        planType: "GENERAL_INQUIRY"
    };

    const web3FormsKey = import.meta.env.VITE_WEB3FORMS_KEY;

    useEffect(() => {
        // Simulate luxury loader transition mapped to the requirements
        const timer = setTimeout(() => {
            setLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    style={{ width: '300px', height: '400px', backgroundColor: '#e2e8f0', borderRadius: '8px' }}
                />
            </div>
        );
    }

    return (
        <div style={{ backgroundColor: 'var(--theme-bg)', paddingBottom: '5rem' }}>



            <div style={{ backgroundColor: 'var(--theme-primary)', padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h1>Investor Registration</h1>
                    <p style={{ maxWidth: '600px', margin: '1rem auto 0', color: 'grey', fontSize: '1.2rem' }}>
                        Enquiring for: <strong style={{ color: 'rgba(10, 36, 63, 0.9)' }}>{planDetails.planName}</strong> with <strong style={{ color: 'rgba(10, 36, 63, 0.9)' }}>{planDetails.targetReturn}</strong> Expected Return
                    </p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass-card"
                        style={{ maxWidth: '700px', margin: '0 auto', padding: '3rem', backgroundColor: 'white' }}
                    >
                        <form action="https://api.web3forms.com/submit" method="POST" style={{ display: 'grid', gap: '1.5rem' }}>
                            <input type="hidden" name="access_key" value={web3FormsKey || ''} />
                            <input type="hidden" name="subject" value="Monexa Investment Inquiry" />
                            <input type="hidden" name="redirect" value={`${window.location.origin}/`} />

                            {/* Hidden Metata Segment for Sales Team */}
                            <input type="hidden" name="planType" value={planDetails.planType} />

                            <div className="grid-2" style={{ gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>First Name</label>
                                    <input type="text" name="First Name" required style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Last Name</label>
                                    <input type="text" name="Last Name" required style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }} />
                                </div>
                            </div>

                            <div className="grid-2" style={{ gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Email Address</label>
                                    <input type="email" name="Email" required style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Phone Number</label>
                                    <input type="tel" name="Phone Number" required style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }} />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Investment Horizon</label>
                                <select name="Investment Horizon" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px', fontFamily: 'inherit' }}>
                                    <option>Less than 1 Year (Plan A Focus)</option>
                                    <option>1 - 2 Years</option>
                                    <option>More than 2 Years (Plan B Focus)</option>
                                </select>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Additional Comments / Source of Funds</label>
                                <textarea name="Additional Comments" rows="4" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px', fontFamily: 'inherit' }}></textarea>
                            </div>

                            <div style={{ backgroundColor: '#fffbe6', padding: '1rem', borderLeft: '4px solid var(--theme-accent)', borderRadius: '4px' }}>
                                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.5 }}>
                                    <strong>LEGAL DISCLOSURE:</strong> Returns are target-based and subject to project performance. Please consult your financial advisor before depositing capital. All funds are secured via legally drafted agreements and PDC.
                                </p>
                            </div>

                            <button
                                className="btn btn-primary"
                                type="submit"
                                style={{
                                    padding: '1rem',
                                    fontSize: '1.1rem',
                                    backgroundColor: 'rgba(10, 36, 63, 0.9)',
                                    color: 'white',
                                    marginTop: '1rem'
                                }}
                            >
                                Complete Registration
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default InvestEnquiry;


