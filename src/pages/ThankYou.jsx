import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ThankYou = () => {
    return (
        <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--theme-bg)', padding: '2rem' }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="glass-card"
                style={{ maxWidth: '600px', width: '100%', padding: '4rem 2rem', textAlign: 'center', backgroundColor: 'white' }}
            >
                <div style={{ width: '80px', height: '80px', backgroundColor: '#e6f4ea', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                    <span style={{ color: '#34a853', fontSize: '3rem' }}>âœ“</span>
                </div>
                <h1 style={{ color: 'var(--theme-primary)', marginBottom: '1rem' }}>Thank You!</h1>
                <p style={{ color: '#666', fontSize: '1.2rem', marginBottom: '2rem' }}>
                    Your investment inquiry has been successfully received. A senior wealth advisor from Monexa groups will contact you shortly to structure your profile.
                </p>

                <div style={{ backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '8px', border: '1px solid #eee', marginBottom: '2.5rem' }}>
                    <h3 style={{ marginBottom: '1rem', color: 'var(--theme-primary)' }}>Investment Brochure</h3>
                    <p style={{ color: 'var(--theme-text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Download our comprehensive guide detailing project pipelines and historical ROI data.</p>
                    <a href="/brochure-placeholder.pdf" download className="btn btn-primary" style={{ padding: '0.8rem 2rem', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                        <span>Download PDF</span>
                    </a>
                </div>

                <Link to="/" className="btn btn-outline" style={{ display: 'inline-block' }}>Return to Homepage</Link>
            </motion.div>
        </div>
    );
};

export default ThankYou;


