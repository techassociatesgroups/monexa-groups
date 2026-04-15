import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCalculator } from 'react-icons/fa';

const EmiCalculator = () => {
    const [principal, setPrincipal] = useState(5000000); // 50 Lakhs
    const [rate, setRate] = useState(8.5); // 8.5%
    const [tenureYears, setTenureYears] = useState(20); // 20 years

    const [emi, setEmi] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);
    const [totalPayment, setTotalPayment] = useState(0);

    // Calculate EMI on input change
    useEffect(() => {
        const p = parseFloat(principal);
        const r = parseFloat(rate) / 12 / 100;
        const n = parseFloat(tenureYears) * 12;

        if (p > 0 && r > 0 && n > 0) {
            const emiCalc = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            const totalRepayment = emiCalc * n;
            const totalInt = totalRepayment - p;

            setEmi(emiCalc);
            setTotalPayment(totalRepayment);
            setTotalInterest(totalInt);
        } else {
            setEmi(0);
            setTotalPayment(0);
            setTotalInterest(0);
        }
    }, [principal, rate, tenureYears]);

    const principalPercent = totalPayment > 0 ? (principal / totalPayment) * 100 : 50;
    const interestPercent = 100 - principalPercent;

    return (
        <div className="page-transition" style={{ backgroundColor: 'var(--theme-card)', minHeight: '100vh', paddingBottom: '5rem', fontFamily: 'Inter, sans-serif' }}>

            {/* HERO SECTION */}
            <section style={{ backgroundColor: 'var(--theme-primary)', color: 'white', padding: '10rem 2rem 5rem 2rem', textAlign: 'center' }}>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        style={{ fontSize: '3.5rem', fontWeight: 600, marginBottom: '1.5rem', fontFamily: 'Outfit, sans-serif', color: 'white' }}
                    >
                        EMI Calculator
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9, lineHeight: 1.6 }}
                    >
                        Plan your home loan with our easy-to-use EMI calculator.
                    </motion.p>
                </div>
            </section>

            <div className="container" style={{ marginTop: '5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'flex-start' }}>

                    {/* INPUTS PANEL */}
                    <div style={{ padding: '3rem', border: '1px solid #eee', borderRadius: '12px', backgroundColor: 'white' }}>

                        {/* Loan Amount */}
                        <div style={{ marginBottom: '3rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <label style={{ color: 'var(--theme-text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Loan Amount</label>
                                <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--theme-text-main)' }}>â‚¹{Number(principal).toLocaleString('en-IN')}</span>
                            </div>
                            <input
                                type="range" min="100000" max="100000000" step="50000" value={principal}
                                onChange={(e) => setPrincipal(e.target.value)}
                                style={{ width: '100%', accentColor: 'var(--theme-primary)', height: '6px' }}
                            />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.8rem', color: '#ccc', fontSize: '0.75rem' }}>
                                <span>â‚¹1L</span>
                                <span>â‚¹10Cr</span>
                            </div>
                        </div>

                        {/* Interest Rate */}
                        <div style={{ marginBottom: '3rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <label style={{ color: 'var(--theme-text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Interest Rate (% p.a.)</label>
                                <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--theme-text-main)' }}>{rate}%</span>
                            </div>
                            <input
                                type="range" min="5" max="20" step="0.1" value={rate}
                                onChange={(e) => setRate(e.target.value)}
                                style={{ width: '100%', accentColor: 'var(--theme-primary)', height: '6px' }}
                            />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.8rem', color: '#ccc', fontSize: '0.75rem' }}>
                                <span>5%</span>
                                <span>20%</span>
                            </div>
                        </div>

                        {/* Tenure */}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <label style={{ color: 'var(--theme-text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Loan Tenure (Years)</label>
                                <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--theme-text-main)' }}>{tenureYears} Years</span>
                            </div>
                            <input
                                type="range" min="1" max="30" step="1" value={tenureYears}
                                onChange={(e) => setTenureYears(e.target.value)}
                                style={{ width: '100%', accentColor: 'var(--theme-primary)', height: '6px' }}
                            />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.8rem', color: '#ccc', fontSize: '0.75rem' }}>
                                <span>1 Yr</span>
                                <span>30 Yrs</span>
                            </div>
                        </div>
                    </div>

                    {/* RESULTS PANEL */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                        {/* Monthly EMI Card */}
                        <div style={{ backgroundColor: '#2B6777', color: 'white', padding: '3rem', borderRadius: '12px', textAlign: 'center', boxShadow: '0 10px 30px rgba(43,103,119,0.2)' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.8)' }}>
                                <FaCalculator size={40} />
                            </div>
                            <div style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.75rem', marginBottom: '1rem', opacity: 0.8, fontFamily: 'Inter, sans-serif' }}>Monthly EMI</div>
                            <div style={{ fontSize: '3.5rem', fontWeight: 600, fontFamily: 'Outfit, sans-serif' }}>â‚¹{Math.round(emi).toLocaleString('en-IN')}</div>
                        </div>

                        {/* Breakdown Stats */}
                        <div style={{ padding: '2.5rem', border: '1px solid #eee', borderRadius: '12px', backgroundColor: 'white' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', color: '#666' }}>
                                <span>Principal Amount</span>
                                <span style={{ fontWeight: 600, color: 'var(--theme-text-main)' }}>â‚¹{Number(principal).toLocaleString('en-IN')}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', color: '#666' }}>
                                <span>Total Interest</span>
                                <span style={{ fontWeight: 600, color: 'var(--theme-text-main)' }}>â‚¹{Math.round(totalInterest).toLocaleString('en-IN')}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>
                                <span style={{ fontWeight: 600, color: 'var(--theme-text-main)' }}>Total Amount Payable</span>
                                <span style={{ fontWeight: 700, color: '#1A56A6', fontSize: '1.1rem' }}>â‚¹{Math.round(totalPayment).toLocaleString('en-IN')}</span>
                            </div>
                        </div>

                        {/* Payment Breakdown Bar */}
                        <div style={{ padding: '2rem', border: '1px solid #eee', borderRadius: '12px', backgroundColor: 'white' }}>
                            <div style={{ fontSize: '0.85rem', color: 'var(--theme-text-muted)', marginBottom: '1.5rem', fontWeight: 600 }}>Payment Breakdown</div>
                            <div style={{ height: '12px', width: '100%', backgroundColor: '#eee', borderRadius: '50px', display: 'flex', overflow: 'hidden', marginBottom: '1.5rem' }}>
                                <div style={{ width: `${principalPercent}%`, backgroundColor: '#4A9E91', height: '100%' }}></div>
                                <div style={{ width: `${interestPercent}%`, backgroundColor: '#1A56A6', height: '100%' }}></div>
                            </div>
                            <div style={{ display: 'flex', gap: '2rem', fontSize: '0.85rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--theme-text-muted)' }}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#4A9E91' }}></div>
                                    Principal ({Math.round(principalPercent)}%)
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--theme-text-muted)' }}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#1A56A6' }}></div>
                                    Interest ({Math.round(interestPercent)}%)
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EmiCalculator;


