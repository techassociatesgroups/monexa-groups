import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-[var(--theme-bg)]">
            <div className="relative flex min-h-[420px] items-center justify-center px-4 py-20 text-center sm:min-h-[520px]">
                <div
                    className="absolute inset-0 z-[1] bg-cover bg-center brightness-[0.35]"
                    style={{ backgroundImage: 'url("/images/monexa ventures 1.jpg")' }}
                />

                <div className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[20vw] font-black lowercase leading-none text-white/5 sm:text-[15vw]">
                    monexa
                </div>

                <div className="relative z-[3] mx-auto max-w-4xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl"
                    >
                        Your dream home awaits
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mx-auto mb-10 max-w-2xl text-base leading-8 text-white/80 sm:text-lg"
                    >
                        Whether you&apos;re exploring our homes or envisioning something custom,
                        <br className="hidden sm:block" />
                        we&apos;re here to bring your dream to life.
                    </motion.p>

                    <motion.a
                        href="https://wa.me/6385303666?text=I%20would%20like%20to%20get%20a%20free%20quote"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.08, backgroundColor: 'var(--theme-accent)', color: 'var(--theme-text-inverse)' }}
                        className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[var(--theme-accent)] bg-black/60 p-4 text-center text-sm font-semibold text-[var(--theme-accent)] no-underline backdrop-blur-md transition-all duration-300 sm:h-40 sm:w-40 sm:text-lg"
                    >
                        Get your <br /> free quote
                    </motion.a>
                </div>
            </div>

            <div className="site-shell relative z-10 -mt-10 px-3 pb-14 sm:-mt-16 sm:px-4 sm:pb-16 lg:-mt-24 lg:px-6">
                <div className="flex flex-col gap-10 rounded-[28px] border border-slate-200 bg-white p-7 shadow-2xl sm:rounded-[40px] sm:p-10 lg:flex-row lg:gap-16 lg:p-14">
                    <div className="space-y-6 lg:w-[32%]">
                        <Link to="/" className="inline-block no-underline">
                            <h2 className="font-['Outfit'] text-3xl font-bold tracking-tight text-gray-900">
                                monexa<span className="ml-1 text-[#C5A059]">groups</span>
                            </h2>
                        </Link>
                        <p className="max-w-sm text-lg leading-relaxed text-gray-500">
                            We are creators of transformative spaces that inspire, innovate, and endure. Built on a legacy of structural excellence.
                        </p>
                    </div>

                    <div className="grid flex-1 grid-cols-1 gap-10 sm:grid-cols-2">
                        <div className="space-y-6">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-[#C5A059]">Company</h4>
                            <ul className="space-y-4">
                                {[
                                    { name: 'About Us', path: '/about' },
                                    { name: 'Our Services', path: '/services' },
                                    { name: 'Investor Relations', path: '/invest' },
                                    { name: 'EMI Calculator', path: '/emi-calculator' },
                                    { name: 'Contact Us', path: '/contact' }
                                ].map((item) => (
                                    <li key={item.name}>
                                        <Link to={item.path} className="flex items-center gap-2 text-base font-medium text-gray-600 no-underline transition-colors hover:text-[#C5A059]">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-[#C5A059]">Global Projects</h4>
                            <ul className="space-y-4">
                                {[
                                    { name: 'India Developments', path: '/India' },
                                    { name: 'Malaysia Projects', path: '/Malaysia' },
                                    { name: 'Dubai Operations', path: '/commercial' },
                                    { name: 'Singapore Portfolio', path: '/upcoming' }
                                ].map((item) => (
                                    <li key={item.name}>
                                        <Link to={item.path} className="text-base font-medium text-gray-600 no-underline transition-colors hover:text-[#C5A059]">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-8 lg:w-[24%]">
                        <div className="space-y-2">
                            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-[#C5A059]">Get In Touch</h4>
                            <a href="tel:6385303666" className="block text-2xl font-bold text-gray-900 no-underline transition-colors hover:text-[#C5A059]">6385303666</a>
                            <a href="mailto:monexa@example.com" className="inline-block border-b border-gray-200 pb-1 text-lg text-gray-500 no-underline transition-colors hover:text-gray-900">
                                monexa@example.com
                            </a>
                        </div>

                        <div className="flex flex-wrap items-center gap-6 pt-4">
                            {['Facebook', 'Instagram', 'Youtube', 'Twitter'].map((social) => (
                                <Link key={social} to="#" className="text-sm font-semibold uppercase tracking-wider text-gray-400 no-underline transition-all hover:scale-110 hover:text-[#C5A059]">
                                    {social}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="px-4 pt-10 text-center text-sm tracking-[0.18em] text-slate-500 sm:pt-12">
                    &copy; {new Date().getFullYear()} <span className="font-semibold text-slate-900">Monexa</span>. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
