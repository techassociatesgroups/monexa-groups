import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaChartLine, FaShieldAlt, FaChartBar, FaHourglassHalf, FaFilePdf, FaDownload, FaRegClock, FaBuilding } from 'react-icons/fa';

const InvestorRelations = () => {
    const navigate = useNavigate();

    const investReasons = [
        { title: 'High Returns', icon: <FaChartLine />, desc: 'Real estate investments with Monexa groups have historically delivered 12-18% annual returns, outperforming traditional savings and fixed deposits.' },
        { title: 'Secured Investment', icon: <FaShieldAlt />, desc: 'All investments are backed by tangible assets — land and property. Your capital is protected by physical value that appreciates over time.' },
        { title: 'Portfolio Diversification', icon: <FaChartBar />, desc: 'Spread your investments across residential, commercial, and mixed-use projects in multiple countries for reduced risk.' },
        { title: 'Flexible Tenure', icon: <FaHourglassHalf />, desc: 'Choose from short-term (1-3 years) to long-term (5-15 years) investment plans tailored to your financial goals.' }
    ];

    return (
        <div className="page-transition bg-[var(--theme-card)] min-h-screen font-['Inter'] w-full overflow-hidden flex flex-col items-center">

            {/* HERO PITCH */}
            <section className="pt-90 px-8 pb-24 bg-[var(--theme-primary)] text-white text-center w-full">
                <div className="container mx-auto max-w-4xl w-full">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl lg:text-[3.5rem] mb-6 font-semibold font-['Outfit'] text-white break-words"
                    >
                        Capital Growth & Transparency
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-10 h-0.5 bg-[var(--theme-accent)] mx-auto mb-8"
                    ></motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-lg text-white/80 leading-relaxed text-left max-w-full break-words">
                        <p className="mb-6">
                            Investing with Monexa groups means aligning with a multinational conglomerate committed to unparalleled structural integrity and uncompromising financial yields. We operate on a foundation of trust, executing massive architectural paradigms that guarantee long-term appreciation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* WHY INVEST WITH US */}
            <section className="py-24 px-4 md:px-8 bg-[var(--theme-card)] w-full">
                <div className="container mx-auto w-full max-w-full">
                    <div className="text-center mb-20 w-full">
                        <h2 className="text-4xl font-semibold text-[var(--theme-primary)] mb-6 font-['Outfit'] break-words">Why Invest With Us?</h2>
                        <p className="max-w-3xl mx-auto text-[var(--theme-text-muted)] text-lg leading-relaxed break-words">
                            Real estate remains one of the safest and most rewarding asset classes. Here is why Monexa groups is your ideal investment partner.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto w-full">
                        {investReasons.map((item, idx) => (
                            <motion.div
                                key={idx} initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                                className="flex flex-col sm:flex-row gap-6 w-full max-w-full"
                            >
                                <div className="min-w-[60px] w-[60px] h-[60px] bg-slate-100 rounded-xl flex items-center justify-center text-2xl text-[var(--theme-primary)] flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div className="max-w-full overflow-hidden">
                                    <h3 className="text-xl font-semibold text-[var(--theme-text-main)] mb-3 font-['Outfit'] break-words">{item.title}</h3>
                                    <p className="text-[var(--theme-text-muted)] text-base leading-relaxed break-words">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INVESTMENT PLANS */}
            <section className="pt-16 pb-32 px-4 md:px-8 bg-[var(--theme-card)] w-full">
                <div className="container mx-auto max-w-5xl w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">

                        {/* Plan A */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-xl p-10 md:p-14 shadow-[0_8px_30px_rgba(0,0,50,0.06)] flex flex-col gap-8 border border-slate-100 w-full overflow-hidden">
                            <div className="w-full">
                                <div className="w-10 h-1 bg-[#1A56A6] rounded-sm mb-8"></div>
                                <h3 className="text-2xl font-bold text-slate-900 font-['Outfit'] break-words">Plan A &ndash; Short Term Investment</h3>
                            </div>
                            <div className="flex flex-col gap-7 w-full overflow-hidden">
                                <div className="flex gap-4 items-start break-words max-w-full">
                                    <FaRegClock className="text-[#1A56A6] mt-1 text-lg flex-shrink-0" />
                                    <div className="max-w-full overflow-hidden">
                                        <div className="text-sm text-slate-500 mb-1 leading-none">Duration</div>
                                        <div className="text-lg font-semibold text-slate-900 break-words">Less than 12 months</div>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start break-words max-w-full">
                                    <FaChartLine className="text-[#1A56A6] mt-1 text-lg flex-shrink-0" />
                                    <div className="max-w-full overflow-hidden">
                                        <div className="text-sm text-slate-500 mb-1 leading-none">Expected Return*</div>
                                        <div className="text-lg font-semibold text-slate-900 break-words">Up to 12% per annum</div>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start break-words max-w-full">
                                    <FaBuilding className="text-[#1A56A6] mt-1 text-lg flex-shrink-0" />
                                    <div className="max-w-full overflow-hidden">
                                        <div className="text-sm text-slate-500 mb-1 leading-none">Suitable For</div>
                                        <div className="text-lg font-semibold text-slate-900 break-words">Short-term investors</div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-xs text-slate-400 italic mt-6 break-words w-full">
                                *Returns are target/expected and subject to project performance.
                            </div>
                        </motion.div>

                        {/* Plan B */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-xl p-10 md:p-14 shadow-[0_8px_30px_rgba(0,0,50,0.06)] flex flex-col gap-8 border border-slate-100 w-full overflow-hidden">
                            <div className="w-full">
                                <div className="w-10 h-1 bg-[#1A56A6] rounded-sm mb-8"></div>
                                <h3 className="text-2xl font-bold text-slate-900 font-['Outfit'] break-words">Plan B &ndash; Long Term Investment</h3>
                            </div>
                            <div className="flex flex-col gap-7 w-full overflow-hidden">
                                <div className="flex gap-4 items-start break-words max-w-full">
                                    <FaRegClock className="text-[#1A56A6] mt-1 text-lg flex-shrink-0" />
                                    <div className="max-w-full overflow-hidden">
                                        <div className="text-sm text-slate-500 mb-1 leading-none">Duration</div>
                                        <div className="text-lg font-semibold text-slate-900 break-words">24 months and above</div>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start break-words max-w-full">
                                    <FaChartLine className="text-[#1A56A6] mt-1 text-lg flex-shrink-0" />
                                    <div className="max-w-full overflow-hidden">
                                        <div className="text-sm text-slate-500 mb-1 leading-none">Expected Return*</div>
                                        <div className="text-lg font-semibold text-slate-900 break-words">Up to 24% per annum</div>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start break-words max-w-full">
                                    <FaBuilding className="text-[#1A56A6] mt-1 text-lg flex-shrink-0" />
                                    <div className="max-w-full overflow-hidden">
                                        <div className="text-sm text-slate-500 mb-1 leading-none">Suitable For</div>
                                        <div className="text-lg font-semibold text-slate-900 break-words">High-growth investors</div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-xs text-slate-400 italic mt-6 break-words w-full">
                                *Returns are target/expected and subject to project performance.
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* HOW TO GET STARTED */}
            <section className="py-24 px-4 md:px-8 bg-[var(--theme-card)] w-full">
                <div className="container mx-auto w-full">
                    <div className="text-center mb-20 w-full">
                        <h2 className="text-4xl font-semibold text-[var(--theme-primary)] font-['Outfit'] break-words">How to Get Started</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center w-full">
                        {[
                            { step: '1', title: 'Enquire', desc: 'Contact us or fill the enquiry form' },
                            { step: '2', title: 'Consult', desc: 'Meet our investment advisor' },
                            { step: '3', title: 'Choose', desc: 'Select your preferred plan' },
                            { step: '4', title: 'Invest', desc: 'Complete documentation and start earning' }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                                className="flex flex-col items-center gap-6 w-full max-w-full"
                            >
                                <div className="w-[50px] h-[50px] rounded-full bg-[var(--theme-primary)] text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                                    {item.step}
                                </div>
                                <div className="max-w-full overflow-hidden px-4">
                                    <h3 className="text-xl font-bold text-[var(--theme-text-main)] mb-3 font-['Outfit'] break-words">{item.title}</h3>
                                    <p className="text-[var(--theme-text-muted)] text-sm leading-relaxed break-words">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INVESTOR DOCUMENTS */}
            <section className="py-12 px-4 md:px-8 bg-[var(--theme-card)] w-full">
                <div className="container mx-auto max-w-4xl w-full">
                    <div className="text-center mb-20 w-full">
                        <div className="text-[var(--theme-primary)] flex justify-center mb-6">
                            <FaFilePdf size={45} />
                        </div>
                        <h2 className="text-4xl font-semibold text-[var(--theme-primary)] mb-6 font-['Outfit'] break-words">Investor Documents</h2>
                        <p className="text-[var(--theme-text-muted)] text-lg break-words">Download detailed documents about our investment plans, features, and approach.</p>
                    </div>

                    <div className="flex flex-col gap-6 w-full">
                        {[
                            { title: 'Investment Overview Brochure', size: '2.4 MB', desc: 'Complete guide to investing with Monexa groups' },
                        ].map((doc, idx) => (
                            <motion.div
                                key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                className="p-8 border border-slate-200 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 transition-all duration-300 w-full max-w-full overflow-hidden hover:border-[var(--theme-primary)] hover:shadow-[0_5px_20px_rgba(0,0,0,0.03)]"
                            >
                                <div className="flex gap-6 items-center w-full max-w-full overflow-hidden">
                                    <div className="min-w-[50px] w-[50px] h-[50px] bg-slate-100 rounded-lg flex items-center justify-center text-[var(--theme-primary)] flex-shrink-0">
                                        <FaFilePdf size={20} />
                                    </div>
                                    <div className="w-full overflow-hidden">
                                        <h3 className="text-lg font-semibold text-[var(--theme-text-main)] font-['Outfit'] whitespace-normal break-words">{doc.title}</h3>
                                        <p className="text-[var(--theme-text-muted)] text-sm whitespace-normal break-words">{doc.desc} &bull; {doc.size}</p>
                                    </div>
                                </div>
                                <button className="border-none bg-none text-[var(--theme-primary)] font-semibold cursor-pointer flex items-center gap-2 flex-shrink-0">
                                    <span>Download</span> <FaDownload size={14} />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HIGH TOUCH CTA */}
            <section className="py-4 bg-[var(--theme-primary)] text-center w-full">
                <div className="container mx-auto max-w-3xl px-4 md:px-8 w-full">
                    <h2 className="text-4xl md:text-5xl mb-6 font-semibold font-['Outfit'] text-white break-words">Connect With Capital Management</h2>
                    <p className="opacity-80 text-lg mb-12 text-white break-words">
                        Our institutional advisory team is available for private consultations regarding capital deployment, portfolio diversification, and long-term yield strategies.
                    </p>
                    <button
                        onClick={() => window.open('https://wa.me/6385303666?text=I%20would%20like%20to%20request%20a%20Private%20Consultation', '_blank')}
                        className="py-5 px-10 md:px-12 text-base bg-white text-[var(--theme-primary)] border-none rounded-md font-semibold cursor-pointer max-w-full truncate hover:bg-slate-50 transition-colors"
                    >
                        Request Private Consultation
                    </button>
                    <p className="mt-8 text-sm opacity-50 break-words text-white">
                        All inquiries are handled with strict confidentiality. Minimum investment thresholds apply.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default InvestorRelations;
