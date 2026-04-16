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
        <div className="page-transition bg-[var(--theme-card)] min-h-screen pb-20 font-['Inter'] w-full overflow-hidden flex flex-col items-center">

            {/* HERO SECTION */}
            <section className="bg-[var(--theme-primary)] text-white pt-40 pb-20 px-4 md:px-8 text-center w-full relative">
                <div className="container mx-auto max-w-7xl relative z-10 w-full overflow-hidden">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 font-['Outfit'] text-white break-words"
                    >
                        EMI Calculator
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed font-light break-words"
                    >
                        Plan your home loan with our easy-to-use EMI calculator.
                    </motion.p>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-8 max-w-7xl mt-20 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start w-full">

                    {/* INPUTS PANEL */}
                    <div className="p-8 md:p-12 border border-slate-200 rounded-xl bg-white w-full max-w-[100vw] overflow-hidden">

                        {/* Loan Amount */}
                        <div className="mb-12 w-full">
                            <div className="flex justify-between mb-4 items-center w-full">
                                <label className="text-[var(--theme-text-muted)] uppercase tracking-wider text-sm">Loan Amount</label>
                                <span className="text-2xl font-bold text-[var(--theme-text-main)] w-min">₹{Number(principal).toLocaleString('en-IN')}</span>
                            </div>
                            <input
                                type="range" min="100000" max="100000000" step="50000" value={principal}
                                onChange={(e) => setPrincipal(e.target.value)}
                                className="w-full accent-[var(--theme-primary)] h-1.5 my-2.5"
                            />
                            <div className="flex justify-between mt-3 text-slate-300 text-xs w-full">
                                <span>₹1L</span>
                                <span>₹10Cr</span>
                            </div>
                        </div>

                        {/* Interest Rate */}
                        <div className="mb-12 w-full">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2 w-full">
                                <label className="text-[var(--theme-text-muted)] uppercase tracking-wider text-sm">Interest Rate (% p.a.)</label>
                                <span className="text-2xl font-bold text-[var(--theme-text-main)]">{(parseFloat(rate) || 0).toFixed(1)}%</span>
                            </div>
                            <input
                                type="range" min="5" max="20" step="0.1" value={rate}
                                onChange={(e) => setRate(e.target.value)}
                                className="w-full accent-[var(--theme-primary)] h-1.5 my-2.5"
                            />
                            <div className="flex justify-between mt-3 text-slate-300 text-xs w-full">
                                <span>5%</span>
                                <span>20%</span>
                            </div>
                        </div>

                        {/* Tenure */}
                        <div className="mb-6 w-full">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2 w-full">
                                <label className="text-[var(--theme-text-muted)] uppercase tracking-wider text-sm">Loan Tenure (Years)</label>
                                <span className="text-2xl font-bold text-[var(--theme-text-main)]">{tenureYears} Years</span>
                            </div>
                            <input
                                type="range" min="1" max="30" step="1" value={tenureYears}
                                onChange={(e) => setTenureYears(e.target.value)}
                                className="w-full accent-[var(--theme-primary)] h-1.5 my-2.5"
                            />
                            <div className="flex justify-between mt-3 text-slate-300 text-xs w-full">
                                <span>1 Yr</span>
                                <span>30 Yrs</span>
                            </div>
                        </div>
                    </div>

                    {/* RESULTS PANEL */}
                    <div className="flex flex-col gap-6 w-full overflow-hidden max-w-full">

                        {/* Monthly EMI Card */}
                        <div className="bg-[#2B6777] text-white p-10 md:p-12 rounded-xl text-center shadow-[0_10px_30px_rgba(43,103,119,0.2)] w-full">
                            <div className="flex justify-center mb-6 text-white/80 w-full">
                                <FaCalculator size={40} />
                            </div>
                            <div className="uppercase tracking-widest text-xs mb-4 opacity-80 font-['Inter'] w-full break-words">Monthly EMI</div>
                            <div className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold font-['Outfit'] w-full break-all">₹{Math.round(emi).toLocaleString('en-IN')}</div>
                        </div>

                        {/* Breakdown Stats */}
                        <div className="p-8 md:p-10 border border-slate-200 rounded-xl bg-white w-full">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 text-slate-600 gap-2 w-full">
                                <span>Principal Amount</span>
                                <span className="font-semibold text-[var(--theme-text-main)] break-all">₹{Number(principal).toLocaleString('en-IN')}</span>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 text-slate-600 gap-2 w-full">
                                <span>Total Interest</span>
                                <span className="font-semibold text-[var(--theme-text-main)] break-all">₹{Math.round(totalInterest).toLocaleString('en-IN')}</span>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-t border-slate-200 pt-6 gap-2 w-full">
                                <span className="font-semibold text-[var(--theme-text-main)]">Total Amount Payable</span>
                                <span className="font-bold text-[#1A56A6] text-lg break-all">₹{Math.round(totalPayment).toLocaleString('en-IN')}</span>
                            </div>
                        </div>

                        {/* Payment Breakdown Bar */}
                        <div className="p-8 border border-slate-200 rounded-xl bg-white w-full">
                            <div className="text-sm text-[var(--theme-text-muted)] mb-6 font-semibold w-full">Payment Breakdown</div>
                            <div className="h-3 w-full bg-slate-200 rounded-full flex overflow-hidden mb-6">
                                <div className="bg-[#4A9E91] h-full" style={{ width: `${principalPercent}%` }}></div>
                                <div className="bg-[#1A56A6] h-full" style={{ width: `${interestPercent}%` }}></div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm w-full">
                                <div className="flex items-center gap-2 text-[var(--theme-text-muted)]">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#4A9E91]"></div>
                                    Principal ({Math.round(principalPercent)}%)
                                </div>
                                <div className="flex items-center gap-2 text-[var(--theme-text-muted)]">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#1A56A6]"></div>
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
