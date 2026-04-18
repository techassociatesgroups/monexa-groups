import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaShieldAlt, FaChartBar, FaHourglassHalf, FaFilePdf, FaDownload, FaRegClock, FaBuilding } from 'react-icons/fa';

const InvestorRelations = () => {
    const investReasons = [
        { title: 'High Returns', icon: <FaChartLine />, desc: 'Real estate investments with Monexa groups have historically delivered 12-18% annual returns, outperforming traditional savings and fixed deposits.' },
        { title: 'Secured Investment', icon: <FaShieldAlt />, desc: 'All investments are backed by tangible assets - land and property. Your capital is protected by physical value that appreciates over time.' },
        { title: 'Portfolio Diversification', icon: <FaChartBar />, desc: 'Spread your investments across residential, commercial, and mixed-use projects in multiple countries for reduced risk.' },
        { title: 'Flexible Tenure', icon: <FaHourglassHalf />, desc: 'Choose from short-term (1-3 years) to long-term (5-15 years) investment plans tailored to your financial goals.' }
    ];

    return (
        <div className="page-transition flex min-h-screen w-full flex-col items-center overflow-hidden bg-[var(--theme-card)] font-['Inter']">
            <section className="w-full bg-[var(--theme-primary)] px-4 pb-16 pt-28 text-white sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pt-20">
                <div className="container mx-auto w-full max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-6 text-center text-3xl font-semibold text-white md:text-5xl lg:text-[3.5rem]"
                    >
                        Capital Growth & Transparency
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mx-auto mb-8 h-0.5 w-10 bg-[var(--theme-accent)]"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mx-auto max-w-3xl text-base leading-8 text-white/80 sm:text-lg"
                    >
                        <p className="mb-6">
                            Investing with Monexa groups means aligning with a multinational conglomerate committed to unparalleled structural integrity and uncompromising financial yields. We operate on a foundation of trust, executing massive architectural paradigms that guarantee long-term appreciation.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="w-full bg-[var(--theme-card)] px-4 py-20 md:px-8 lg:py-24">
                <div className="container mx-auto w-full max-w-full">
                    <div className="mb-20 w-full text-center">
                        <h2 className="mb-6 font-['Outfit'] text-4xl font-semibold break-words text-[var(--theme-primary)]">Why Invest With Us?</h2>
                        <p className="mx-auto max-w-3xl break-words text-lg leading-relaxed text-[var(--theme-text-muted)]">
                            Real estate remains one of the safest and most rewarding asset classes. Here is why Monexa groups is your ideal investment partner.
                        </p>
                    </div>

                    <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
                        {investReasons.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex w-full max-w-full flex-col gap-6 sm:flex-row"
                            >
                                <div className="flex h-[60px] w-[60px] min-w-[60px] flex-shrink-0 items-center justify-center rounded-xl bg-slate-100 text-2xl text-[var(--theme-primary)]">
                                    {item.icon}
                                </div>
                                <div className="max-w-full overflow-hidden">
                                    <h3 className="mb-3 font-['Outfit'] text-xl font-semibold break-words text-[var(--theme-text-main)]">{item.title}</h3>
                                    <p className="break-words text-base leading-relaxed text-[var(--theme-text-muted)]">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full bg-[var(--theme-card)] px-4 pb-24 pt-8 md:px-8 md:pt-16 md:pb-32">
                <div className="container mx-auto w-full max-w-5xl">
                    <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex w-full flex-col gap-8 overflow-hidden rounded-xl border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgba(0,0,50,0.06)] md:p-14">
                            <div className="w-full">
                                <div className="mb-8 h-1 w-10 rounded-sm bg-[#1A56A6]" />
                                <h3 className="font-['Outfit'] text-2xl font-bold break-words text-slate-900">Plan A - Short Term Investment</h3>
                            </div>
                            <div className="flex w-full flex-col gap-7 overflow-hidden">
                                <div className="flex max-w-full items-start gap-4 break-words">
                                    <FaRegClock className="mt-1 text-lg text-[#1A56A6]" />
                                    <div className="max-w-full overflow-hidden">
                                        <div className="mb-1 text-sm leading-none text-slate-500">Duration</div>
                                        <div className="text-lg font-semibold break-words text-slate-900">Less than 12 months</div>
                                    </div>
                                </div>
                                <div className="flex max-w-full items-start gap-4 break-words">
                                    <FaChartLine className="mt-1 text-lg text-[#1A56A6]" />
                                    <div className="max-w-full overflow-hidden">
                                        <div className="mb-1 text-sm leading-none text-slate-500">Expected Return*</div>
                                        <div className="text-lg font-semibold break-words text-slate-900">Up to 12% per annum</div>
                                    </div>
                                </div>
                                <div className="flex max-w-full items-start gap-4 break-words">
                                    <FaBuilding className="mt-1 text-lg text-[#1A56A6]" />
                                    <div className="max-w-full overflow-hidden">
                                        <div className="mb-1 text-sm leading-none text-slate-500">Suitable For</div>
                                        <div className="text-lg font-semibold break-words text-slate-900">Short-term investors</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 w-full break-words text-xs italic text-slate-400">
                                *Returns are target/expected and subject to project performance.
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex w-full flex-col gap-8 overflow-hidden rounded-xl border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgba(0,0,50,0.06)] md:p-14">
                            <div className="w-full">
                                <div className="mb-8 h-1 w-10 rounded-sm bg-[#1A56A6]" />
                                <h3 className="font-['Outfit'] text-2xl font-bold break-words text-slate-900">Plan B - Long Term Investment</h3>
                            </div>
                            <div className="flex w-full flex-col gap-7 overflow-hidden">
                                <div className="flex max-w-full items-start gap-4 break-words">
                                    <FaRegClock className="mt-1 text-lg text-[#1A56A6]" />
                                    <div className="max-w-full overflow-hidden">
                                        <div className="mb-1 text-sm leading-none text-slate-500">Duration</div>
                                        <div className="text-lg font-semibold break-words text-slate-900">24 months and above</div>
                                    </div>
                                </div>
                                <div className="flex max-w-full items-start gap-4 break-words">
                                    <FaChartLine className="mt-1 text-lg text-[#1A56A6]" />
                                    <div className="max-w-full overflow-hidden">
                                        <div className="mb-1 text-sm leading-none text-slate-500">Expected Return*</div>
                                        <div className="text-lg font-semibold break-words text-slate-900">Up to 24% per annum</div>
                                    </div>
                                </div>
                                <div className="flex max-w-full items-start gap-4 break-words">
                                    <FaBuilding className="mt-1 text-lg text-[#1A56A6]" />
                                    <div className="max-w-full overflow-hidden">
                                        <div className="mb-1 text-sm leading-none text-slate-500">Suitable For</div>
                                        <div className="text-lg font-semibold break-words text-slate-900">High-growth investors</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 w-full break-words text-xs italic text-slate-400">
                                *Returns are target/expected and subject to project performance.
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-[var(--theme-card)] px-4 py-20 md:px-8 lg:py-24">
                <div className="container mx-auto w-full">
                    <div className="mb-20 w-full text-center">
                        <h2 className="font-['Outfit'] text-4xl font-semibold break-words text-[var(--theme-primary)]">How to Get Started</h2>
                    </div>

                    <div className="grid w-full grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { step: '1', title: 'Enquire', desc: 'Contact us or fill the enquiry form' },
                            { step: '2', title: 'Consult', desc: 'Meet our investment advisor' },
                            { step: '3', title: 'Choose', desc: 'Select your preferred plan' },
                            { step: '4', title: 'Invest', desc: 'Complete documentation and start earning' }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex w-full max-w-full flex-col items-center gap-6"
                            >
                                <div className="flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center rounded-full bg-[var(--theme-primary)] text-xl font-bold text-white">
                                    {item.step}
                                </div>
                                <div className="max-w-full overflow-hidden px-4">
                                    <h3 className="mb-3 font-['Outfit'] text-xl font-bold break-words text-[var(--theme-text-main)]">{item.title}</h3>
                                    <p className="break-words text-sm leading-relaxed text-[var(--theme-text-muted)]">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full bg-[var(--theme-card)] px-4 py-12 md:px-8">
                <div className="container mx-auto w-full max-w-4xl">
                    <div className="mb-20 w-full text-center">
                        <div className="mb-6 flex justify-center text-[var(--theme-primary)]">
                            <FaFilePdf size={45} />
                        </div>
                        <h2 className="mb-6 font-['Outfit'] text-4xl font-semibold break-words text-[var(--theme-primary)]">Investor Documents</h2>
                        <p className="text-lg break-words text-[var(--theme-text-muted)]">Download detailed documents about our investment plans, features, and approach.</p>
                    </div>

                    <div className="flex w-full flex-col gap-6">
                        {[{ title: 'Investment Overview Brochure', size: '2.4 MB', desc: 'Complete guide to investing with Monexa groups' }].map((doc, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex w-full max-w-full flex-col items-start justify-between gap-6 overflow-hidden rounded-xl border border-slate-200 p-8 transition-all duration-300 hover:border-[var(--theme-primary)] hover:shadow-[0_5px_20px_rgba(0,0,0,0.03)] md:flex-row md:items-center"
                            >
                                <div className="flex w-full max-w-full items-center gap-6 overflow-hidden">
                                    <div className="flex h-[50px] w-[50px] min-w-[50px] flex-shrink-0 items-center justify-center rounded-lg bg-slate-100 text-[var(--theme-primary)]">
                                        <FaFilePdf size={20} />
                                    </div>
                                    <div className="w-full overflow-hidden">
                                        <h3 className="font-['Outfit'] text-lg font-semibold whitespace-normal break-words text-[var(--theme-text-main)]">{doc.title}</h3>
                                        <p className="text-sm whitespace-normal break-words text-[var(--theme-text-muted)]">{doc.desc} &bull; {doc.size}</p>
                                    </div>
                                </div>
                                <button className="flex flex-shrink-0 items-center gap-2 border-none bg-none font-semibold text-[var(--theme-primary)]">
                                    <span>Download</span> <FaDownload size={14} />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full bg-[var(--theme-primary)] py-10 text-center">
                <div className="container mx-auto w-full max-w-3xl px-4 md:px-8">
                    <h2 className="mb-6 font-['Outfit'] text-4xl font-semibold break-words text-white md:text-5xl">Connect With Capital Management</h2>
                    <p className="mb-12 text-lg break-words text-white/80">
                        Our institutional advisory team is available for private consultations regarding capital deployment, portfolio diversification, and long-term yield strategies.
                    </p>
                    <button
                        onClick={() => window.open('https://wa.me/6385303666?text=I%20would%20like%20to%20request%20a%20Private%20Consultation', '_blank')}
                        className="max-w-full rounded-md border-none bg-white px-8 py-4 text-base font-semibold text-[var(--theme-primary)] transition-colors hover:bg-slate-50 md:px-12 md:py-5"
                    >
                        Request Private Consultation
                    </button>
                    <p className="mt-8 break-words text-sm text-white/50">
                        All inquiries are handled with strict confidentiality. Minimum investment thresholds apply.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default InvestorRelations;
