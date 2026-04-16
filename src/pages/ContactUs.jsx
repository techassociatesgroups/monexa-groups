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
        <div className="page-transition bg-[var(--theme-bg)] min-h-screen pb-20 w-full overflow-hidden flex flex-col items-center">

            {/* HERO */}
            <div className="pt-40 px-8 pb-24 text-center bg-[var(--theme-primary)] text-white border-b border-white/10 w-full relative">
                <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-semibold text-white font-['Outfit']">
                    Contact Support
                </h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed">
                    Connect with our global operations team. We are positioned across key metropolitan hubs to ensure seamless communication and project execution.
                </p>
            </div>

            <section className="container mx-auto py-20 px-4 md:px-8 max-w-7xl w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start w-full">

                    {/* Contact Form */}
                    <div className="glass-panel p-8 md:p-14 border border-black/5 rounded-md w-full max-w-[100vw] overflow-hidden">
                        <h2 className="mb-10 text-3xl font-medium text-[var(--theme-primary)]">Direct Inquiry</h2>
                        <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-6 w-full">
                            <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_KEY || ''} />
                            <input type="hidden" name="redirect" value={window.location.origin + "/thank-you"} />
                            <input type="hidden" name="subject" value="New Monexa Website Inquiry" />
                            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                                <div className="w-full text-left">
                                    <label className="block mb-2 font-medium text-sm text-[var(--theme-text-muted)]">First Name</label>
                                    <input type="text" name="First Name" required className="w-full p-4 border border-slate-200 rounded-md bg-[var(--theme-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--theme-accent)]" />
                                </div>
                                <div className="w-full text-left">
                                    <label className="block mb-2 font-medium text-sm text-[var(--theme-text-muted)]">Last Name</label>
                                    <input type="text" name="Last Name" required className="w-full p-4 border border-slate-200 rounded-md bg-[var(--theme-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--theme-accent)]" />
                                </div>
                            </div>

                            <div className="w-full text-left">
                                <label className="block mb-2 font-medium text-sm text-[var(--theme-text-muted)]">Email Address</label>
                                <input type="email" name="email" required className="w-full p-4 border border-slate-200 rounded-md bg-[var(--theme-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--theme-accent)]" />
                            </div>

                            <div className="w-full text-left">
                                <label className="block mb-2 font-medium text-sm text-[var(--theme-text-muted)]">Phone Number</label>
                                <input type="tel" name="Phone Number" required className="w-full p-4 border border-slate-200 rounded-md bg-[var(--theme-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--theme-accent)]" />
                            </div>

                            <div className="w-full overflow-hidden text-left max-w-full">
                                <label className="block mb-2 font-medium text-sm text-[var(--theme-text-muted)]">Area of Interest</label>
                                <select name="Area of Interest" className="w-full p-4 border border-slate-200 rounded-md bg-[var(--theme-bg)] text-[var(--theme-text-main)] overflow-hidden text-ellipsis whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[var(--theme-accent)]">
                                    <option value="Strategic Investment Consultation">Strategic Investment Consultation</option>
                                    <option value="Commercial Development Partnership">Commercial Development Partnership</option>
                                    <option value="Institutional Capital Deployment">Institutional Capital Deployment</option>
                                    <option value="General Corporate Inquiry">General Corporate Inquiry</option>
                                </select>
                            </div>

                            <div className="w-full text-left max-w-full">
                                <label className="block mb-2 font-medium text-sm text-[var(--theme-text-muted)]">Message</label>
                                <textarea name="message" required rows="5" className="w-full p-4 border border-slate-200 rounded-md bg-[var(--theme-bg)] resize-y focus:outline-none focus:ring-2 focus:ring-[var(--theme-accent)]"></textarea>
                            </div>

                            <button className="btn btn-primary w-full p-5 mt-4" type="submit">Submit Inquiry</button>
                        </form>
                    </div>

                    {/* Contact Details & Map */}
                    <div className="flex flex-col gap-8 w-full overflow-hidden max-w-full">
                        {/* Map Placeholder */}
                        <div className="w-full h-[350px] bg-slate-200 rounded-md overflow-hidden relative border border-black/5">
                            <iframe
                                title="Google Maps"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.840656094255!2d78.6834011!3d10.7951523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa8e0ab8580001%3A0xeab5cd22ea67d1!2sK.K.Nagar%2C%20Tiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                                className="w-full h-full border-0 grayscale opacity-80"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>

                        {/* Office Details */}
                        <div className="glass-panel p-8 md:p-10 border border-black/5 rounded-md w-full overflow-hidden max-w-full">
                            <h3 className="mb-6 text-xl font-medium text-[var(--theme-primary)]">Global Footprint</h3>

                            <div className="flex flex-col gap-8 w-full max-w-full">
                                {/* HQ */}
                                <div className="flex items-start gap-4 max-w-full break-words">
                                    <span className="text-2xl text-[var(--theme-accent)] flex-shrink-0">📍</span>
                                    <div className="text-left w-full overflow-hidden">
                                        <p className="font-semibold text-[var(--theme-text-main)] mb-1">India (Global HQ)</p>
                                        <p className="text-[var(--theme-text-muted)] text-base leading-relaxed mb-2 break-words">
                                            Monexa groups Pvt Ltd<br />Pl no 17, Uathamar St, Thentral Nagar<br />Trichy - 620021
                                        </p>
                                        <a href="tel:6385303666" className="text-[var(--theme-primary)] font-medium block">6385303666</a>
                                    </div>
                                </div>

                                <div className="h-px bg-black/10 w-full"></div>

                                {/* Regional: Malaysia */}
                                <div className="flex items-start gap-4 max-w-full break-words">
                                    <span className="text-2xl text-[var(--theme-accent)] flex-shrink-0">📍</span>
                                    <div className="text-left w-full overflow-hidden">
                                        <p className="font-semibold text-[var(--theme-text-main)] mb-1">Malaysia (Operations)</p>
                                        <a href="tel:+60179944796" className="text-[var(--theme-primary)] font-medium block break-words">+60 17 994 4796</a>
                                    </div>
                                </div>

                                <div className="h-px bg-black/10 w-full"></div>

                                {/* Regional: Dubai */}
                                <div className="flex items-start gap-4 max-w-full break-words">
                                    <span className="text-2xl text-[var(--theme-accent)] flex-shrink-0">📍</span>
                                    <div className="text-left w-full overflow-hidden">
                                        <p className="font-semibold text-[var(--theme-text-main)] mb-1">Dubai, UAE (Capital Management)</p>
                                        <a href="mailto:invest@monexagroups.com" className="text-[var(--theme-primary)] font-medium block break-all">invest@monexagroups.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-[var(--theme-primary)] text-[var(--theme-card)] py-24 px-4 w-full mt-8 flex flex-col items-center overflow-hidden">
                <div className="container mx-auto max-w-4xl w-full">
                    <h2 className="text-center mb-16 text-4xl font-normal text-white">Frequently Asked Questions</h2>
                    <div className="flex flex-col gap-4 w-full max-w-[100vw]">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 rounded-md overflow-hidden w-full">
                                <div
                                    className="p-6 md:px-8 cursor-pointer flex justify-between items-center font-medium text-lg text-white/90"
                                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                >
                                    <span className="text-left w-full pr-4">{faq.q}</span>
                                    <span className="text-[var(--theme-accent)] text-2xl font-light w-8 text-right flex-shrink-0">{activeFaq === idx ? '−' : '+'}</span>
                                </div>
                                {activeFaq === idx && (
                                    <div className="px-6 md:px-8 pb-8 text-white/60 leading-relaxed text-left max-w-full break-words">
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
