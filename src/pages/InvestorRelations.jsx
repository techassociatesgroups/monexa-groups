import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, TrendingUp, Clock, FileText, CheckCircle, AlertTriangle } from 'lucide-react';

const Investor = () => {
    return (
        <div className="pt-0 bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="bg-[#0F2A44] text-white py-20 px-4 md:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Invest With Us – High Growth Real Estate Opportunities</h1>
                    <p className="text-lg md:text-xl text-gray-300">
                        Build Wealth Through Real Estate Investments. We offer structured investment opportunities in construction and real estate projects with strong growth potential, transparent documentation, and secured agreements.
                    </p>
                </div>
            </section>

            {/* Investment Plans */}
            <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#0F2A44] mb-4">Investment Plans</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore our project-based investment plans with strong target returns.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Plan A */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#1E88E5] hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">Plan A – Short Term Investment</h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <Clock className="text-[#1E88E5] mr-3 mt-1" size={20} />
                                <div>
                                    <p className="font-semibold text-gray-800">Duration</p>
                                    <p className="text-gray-600">Less than 12 months</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <TrendingUp className="text-[#1E88E5] mr-3 mt-1" size={20} />
                                <div>
                                    <p className="font-semibold text-gray-800">Expected Return*</p>
                                    <p className="text-gray-600">Up to 12% per annum</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <CheckCircle className="text-[#1E88E5] mr-3 mt-1" size={20} />
                                <div>
                                    <p className="font-semibold text-gray-800">Suitable For</p>
                                    <p className="text-gray-600">Short-term investors</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-xs text-gray-400 mt-6 italic">*Returns are target/expected and subject to project performance.</p>
                    </div>

                    {/* Plan B */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#0F2A44] hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">Plan B – Long Term Investment</h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <Clock className="text-[#0F2A44] mr-3 mt-1" size={20} />
                                <div>
                                    <p className="font-semibold text-gray-800">Duration</p>
                                    <p className="text-gray-600">24 months and above</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <TrendingUp className="text-[#0F2A44] mr-3 mt-1" size={20} />
                                <div>
                                    <p className="font-semibold text-gray-800">Expected Return*</p>
                                    <p className="text-gray-600">Up to 24% per annum</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <CheckCircle className="text-[#0F2A44] mr-3 mt-1" size={20} />
                                <div>
                                    <p className="font-semibold text-gray-800">Suitable For</p>
                                    <p className="text-gray-600">High-growth investors</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-xs text-gray-400 mt-6 italic">*Returns are target/expected and subject to project performance.</p>
                    </div>
                </div>
            </section>

            {/* Security & Documentation */}
            <section className="bg-white py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-[#0F2A44] mb-6">Security & Documentation</h2>
                        <p className="text-gray-600 mb-6">
                            We ensure complete transparency and investor protection through rigorous documentation and legal safeguards.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Legally drafted Investment Agreement",
                                "Signed documents from both parties",
                                "Post-dated cheque (PDC) for security",
                                "Project-based investment allocation",
                                "Regular updates on project progress"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center text-gray-700">
                                    <ShieldCheck className="text-[#1E88E5] mr-3" size={20} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:w-1/2">
                        <div className="bg-blue-50 p-8 rounded-2xl flex flex-col items-center text-center">
                            <FileText size={64} className="text-[#0F2A44] mb-4" />
                            <h3 className="text-xl font-bold text-[#0F2A44] mb-2">Fully Documented</h3>
                            <p className="text-gray-600">Every investment is backed by legally binding agreements and transparent reporting.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process & Why Invest (combined grid) */}
            <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Why Invest With Us */}
                    <div>
                        <h2 className="text-3xl font-bold text-[#0F2A44] mb-8">Why Invest With Us</h2>
                        <div className="space-y-6">
                            {[
                                { title: "High-growth real estate sector", desc: "Capitalize on rapidly appreciating property markets." },
                                { title: "Experienced management team", desc: "Expert oversight of all project developments." },
                                { title: "Transparent financial structure", desc: "Clear reporting and no hidden clauses." },
                                { title: "Multiple ongoing projects", desc: "Diversified portfolio mitigating single-project reliance." },
                                { title: "Strong ROI potential", desc: "Targeted strategies designed to maximize investor returns." }
                            ].map((feature, idx) => (
                                <div key={idx} className="flex">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-[#1E88E5] font-bold">
                                            {idx + 1}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-800">{feature.title}</h4>
                                        <p className="text-gray-600">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Investment Process */}
                    <div>
                        <h2 className="text-3xl font-bold text-[#0F2A44] mb-8">Investment Process</h2>
                        <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                            {[
                                "Submit investor inquiry",
                                "Receive project details",
                                "Sign agreement",
                                "Make investment",
                                "Track project progress",
                                "Receive returns as per agreement"
                            ].map((step, idx) => (
                                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#0F2A44] text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        {idx + 1}
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-slate-200 bg-white shadow">
                                        <div className="font-bold text-slate-900">{step}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Risk Disclosure */}
            <section className="bg-red-50 py-12 px-4 md:px-8">
                <div className="max-w-4xl mx-auto flex items-start">
                    <AlertTriangle className="text-red-600 mr-4 flex-shrink-0 mt-1" size={28} />
                    <div>
                        <h3 className="text-xl font-bold text-red-800 mb-2">Risk Disclosure</h3>
                        <p className="text-red-700">
                            All investments are subject to market risks. Returns are based on project performance and are not guaranteed. Investors are advised to review all documents carefully before investing.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#0F2A44] text-white py-16 px-4 text-center">
                <h2 className="text-3xl font-bold mb-6">Start Investing Today</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    Join our network of investors building wealth through structured, high-potential real estate opportunities.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link to="/invest/enquiry" className="bg-[#1E88E5] text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-600 transition-colors inline-block">
                        Apply Now
                    </Link>
                    <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-[#0F2A44] transition-colors">
                        Download Investment Brochure
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Investor;
