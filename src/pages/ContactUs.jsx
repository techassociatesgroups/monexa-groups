import React, { useState } from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const ContactUs = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const web3FormsKey = import.meta.env.VITE_WEB3FORMS_KEY;

    const faqs = [
        { q: 'How do I book a private consultation?', a: 'You can schedule a private consultation by filling out the form on this page or by directly contacting our Capital Management team via email at invest@monexagroups.com.' },
        { q: 'Do you provide assistance with institutional funding?', a: 'Yes, we navigate complex financial structuring and have strategic tie-ups with leading financial institutions to ensure seamless capital flow.' },
        { q: 'What is the typical timeframe for a mega-project?', a: 'Timeframes vary based on zoning, scale, and structural complexity. We execute with precision; specific timelines are provided during the consultation phase.' },
        { q: 'How secure is my capital deployment?', a: 'We ensure maximum security through comprehensive legal frameworks, rigorous compliance structures, and project-specific asset allocations.' }
    ];

    const PinIcon = () => (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
        </svg>
    );

    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-[var(--theme-bg)]">
            <section className="w-full border-b border-white/10 bg-[#1a2b3c] px-4 py-16 text-center text-white sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-7xl">
                    <h1 className="mb-6 font-['Outfit'] text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
                        Contact Support
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                        Connect with our global operations team positioned across key metropolitan hubs to ensure seamless communication.
                    </p>
                </div>
            </section>

            <main className="site-shell py-12 sm:py-16">
                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-10">
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8 lg:p-10">
                        <h2 className="mb-8 text-2xl font-bold tracking-tight text-slate-800">Direct Inquiry</h2>

                        <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-6">
                            <input type="hidden" name="access_key" value={web3FormsKey || ''} />
                            <input type="hidden" name="subject" value="Monexa Contact Inquiry" />
                            <input type="hidden" name="redirect" value={`${window.location.origin}/thank-you`} />

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="first-name" className="text-xs font-bold uppercase tracking-wider text-slate-700">First Name</label>
                                    <input
                                        id="first-name"
                                        name="First Name"
                                        required
                                        type="text"
                                        placeholder="John"
                                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="last-name" className="text-xs font-bold uppercase tracking-wider text-slate-700">Last Name</label>
                                    <input
                                        id="last-name"
                                        name="Last Name"
                                        required
                                        type="text"
                                        placeholder="Smith"
                                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-700">Email Address</label>
                                <input
                                    id="email"
                                    name="email"
                                    required
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-700">Phone Number</label>
                                <input
                                    id="phone"
                                    name="Phone Number"
                                    required
                                    type="tel"
                                    placeholder="+91 63853 03666"
                                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-700">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-lg bg-[#1a2b3c] py-4 font-bold text-white shadow-lg transition-colors hover:bg-slate-800"
                            >
                                Submit Inquiry
                            </button>
                        </form>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div className="h-[320px] w-full overflow-hidden rounded-2xl border border-slate-200 shadow-md sm:h-[350px]">
                            <iframe
                                title="Monexa Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4!2d78.7!3d10.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ4JzAwLjAiTiA3OMKwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                                className="h-full w-full border-0 grayscale"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-8">
                            <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-slate-500">Global Footprint</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="rounded-full bg-slate-100 p-3 text-slate-800">
                                        <PinIcon />
                                    </div>
                                    <div className="text-left">
                                        <p className="font-bold text-slate-900">India - Global HQ</p>
                                        <address className="mt-1 text-sm not-italic leading-relaxed text-slate-600">
                                            Monexa Groups Pvt Ltd
                                            <br />
                                            Pl no 17, Uathamar St, Thentral Nagar
                                            <br />
                                            Trichy - 620021
                                        </address>
                                        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
                                            <a href="tel:6385303666" className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:underline">
                                                <FaPhoneAlt /> +91 63853 03666
                                            </a>
                                            <a href="https://wa.me/6385303666" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-green-600 hover:underline">
                                                <FaWhatsapp className="text-lg" /> WhatsApp Us
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <section className="w-full bg-[#1a2b3c] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
                <div className="mx-auto w-full max-w-3xl">
                    <h2 className="mb-4 text-center text-3xl font-bold text-white">Frequently Asked Questions</h2>
                    <p className="mb-12 text-center text-white/50">Everything you need to know before getting started.</p>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={faq.q} className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
                                <button
                                    type="button"
                                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                    className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-white/10"
                                >
                                    <span className="pr-4 font-medium">{faq.q}</span>
                                    <span className={`text-2xl transition-transform ${activeFaq === idx ? 'rotate-45' : ''}`}>+</span>
                                </button>
                                {activeFaq === idx ? (
                                    <div className="border-t border-white/5 px-6 pb-6 pt-4 text-sm leading-relaxed text-white/60">
                                        {faq.a}
                                    </div>
                                ) : null}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
