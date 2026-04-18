import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalculator } from 'react-icons/fa';

const formatCurrency = (value) => `₹${Math.round(value).toLocaleString('en-IN')}`;

const EmiCalculator = () => {
    const [principal, setPrincipal] = useState(5000000);
    const [rate, setRate] = useState(8.5);
    const [tenureYears, setTenureYears] = useState(20);

    const [emi, setEmi] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);
    const [totalPayment, setTotalPayment] = useState(0);

    useEffect(() => {
        const p = Number(principal);
        const monthlyRate = Number(rate) / 12 / 100;
        const months = Number(tenureYears) * 12;

        if (p > 0 && monthlyRate > 0 && months > 0) {
            const emiValue = (p * monthlyRate * (1 + monthlyRate) ** months) / ((1 + monthlyRate) ** months - 1);
            const repayment = emiValue * months;
            const interest = repayment - p;

            setEmi(emiValue);
            setTotalInterest(interest);
            setTotalPayment(repayment);
        } else {
            setEmi(0);
            setTotalInterest(0);
            setTotalPayment(0);
        }
    }, [principal, rate, tenureYears]);

    const principalPercent = totalPayment > 0 ? (Number(principal) / totalPayment) * 100 : 50;
    const interestPercent = 100 - principalPercent;

    const sliderClass = 'h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-100 accent-[#2f69a7]';

    return (
        <div className="page-transition min-h-screen w-full bg-[#f8fafc] pb-16 font-['Inter']">
            <section className="w-full bg-[#2f69a7] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-5xl text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-5 text-4xl font-semibold !text-white sm:text-5xl lg:text-6xl"
                    >
                        EMI Calculator
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mx-auto max-w-2xl text-base text-white/85 sm:text-lg"
                    >
                        Plan your home loan with our easy-to-use EMI calculator.
                    </motion.p>
                </div>
            </section>

            <section className="site-shell py-10 sm:py-14 lg:py-16">
                <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-[1fr_0.95fr]">
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)] sm:p-8">
                        <div className="space-y-10">
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-slate-500 sm:text-base">Loan Amount</label>
                                <div className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                                    {formatCurrency(principal)}
                                </div>
                                <input
                                    type="range"
                                    min="500000"
                                    max="50000000"
                                    step="50000"
                                    value={principal}
                                    onChange={(e) => setPrincipal(Number(e.target.value))}
                                    className={sliderClass}
                                />
                                <div className="mt-2 flex justify-between text-sm text-slate-500">
                                    <span>₹5L</span>
                                    <span>₹5Cr</span>
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-slate-500 sm:text-base">Interest Rate (% p.a.)</label>
                                <div className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                                    {Number(rate).toFixed(1)}%
                                </div>
                                <input
                                    type="range"
                                    min="5"
                                    max="20"
                                    step="0.1"
                                    value={rate}
                                    onChange={(e) => setRate(Number(e.target.value))}
                                    className={sliderClass}
                                />
                                <div className="mt-2 flex justify-between text-sm text-slate-500">
                                    <span>5%</span>
                                    <span>20%</span>
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-slate-500 sm:text-base">Loan Tenure (Years)</label>
                                <div className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                                    {tenureYears} Years
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="30"
                                    step="1"
                                    value={tenureYears}
                                    onChange={(e) => setTenureYears(Number(e.target.value))}
                                    className={sliderClass}
                                />
                                <div className="mt-2 flex justify-between text-sm text-slate-500">
                                    <span>1 Yr</span>
                                    <span>30 Yrs</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="rounded-2xl bg-[#2f69a7] px-6 py-8 text-center text-white shadow-[0_16px_40px_rgba(47,105,167,0.24)] sm:px-8 sm:py-10">
                            <div className="mb-4 flex justify-center text-white/90">
                                <FaCalculator size={28} />
                            </div>
                            <div className="mb-2 text-lg text-white/85">Monthly EMI</div>
                            <div className="text-4xl font-bold !text-white sm:text-5xl">
                                {formatCurrency(emi)}
                            </div>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)] sm:p-8">
                            <div className="space-y-5">
                                <div className="flex items-center justify-between gap-4 text-slate-600">
                                    <span>Principal Amount</span>
                                    <span className="text-lg font-semibold text-slate-900 sm:text-2xl">
                                        {formatCurrency(principal)}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between gap-4 text-slate-600">
                                    <span>Total Interest</span>
                                    <span className="text-lg font-semibold text-slate-900 sm:text-2xl">
                                        {formatCurrency(totalInterest)}
                                    </span>
                                </div>
                                <div className="border-t border-slate-200 pt-5">
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="font-semibold text-slate-900">Total Amount Payable</span>
                                        <span className="text-lg font-bold text-[#2f69a7] sm:text-2xl">
                                            {formatCurrency(totalPayment)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)] sm:p-8">
                            <div className="mb-5 text-base font-semibold text-slate-500 sm:text-lg">
                                Payment Breakdown
                            </div>
                            <div className="mb-4 flex h-4 w-full overflow-hidden rounded-full bg-slate-100">
                                <div className="h-full bg-[#2f69a7]" style={{ width: `${principalPercent}%` }} />
                                <div className="h-full bg-[#4aa294]" style={{ width: `${interestPercent}%` }} />
                            </div>
                            <div className="flex flex-col gap-3 text-sm text-slate-700 sm:flex-row sm:justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="h-3 w-3 rounded-full bg-[#2f69a7]" />
                                    Principal ({Math.round(principalPercent)}%)
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="h-3 w-3 rounded-full bg-[#4aa294]" />
                                    Interest ({Math.round(interestPercent)}%)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EmiCalculator;
