import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FaArrowRight,
    FaChevronRight,
    FaPhoneAlt,
    FaGlobe,
    FaCity,
    FaBuilding,
    FaLandmark,
    FaHardHat,
    FaStar
} from "react-icons/fa";
const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: "01",
            title: "Great spaces for perfection and class",
            subtitle: "MONEXA HOUSING DEVELOPMENT",
            video: "/video/hero video1 monexa groups.webm",
        },
        {
            id: "02",
            title: "Future-Ready Global Infrastructure",
            subtitle: "INTERNATIONAL DEVELOPMENTS",
            video: "/video/Monexa_Groups_hero_video1.webm",
        },
        {
            id: "03",
            title: "Architectural Excellence Worldwide",
            subtitle: "PREMIUM REAL ESTATE",
            video: "/video/hero video 2 monexa groups.webm",
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            );
        }, 6000);

        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev === slides.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="overflow-hidden bg-white text-slate-900">

            {/* HERO */}
            <section className="relative h-screen overflow-hidden">

                {/* VIDEO BACKGROUND */}
                <div className="absolute inset-0">

                    {slides.map((slide, index) => (
                        <video
                            key={slide.id}
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                            poster="/images/hero-poster.webp"
                            className={`absolute will-change-opacity inset-0 h-full w-full object-cover transition-opacity duration-1000 ${currentSlide === index
                                    ? "opacity-100"
                                    : "opacity-0"
                                }`}
                        >
                            <source
                                src={slide.video}
                                type="video/webm"
                            />
                        </video>
                    ))}

                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/50" />

                {/* CONTENT */}
                <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8 pt-24">

                    <motion.span
                        key={slides[currentSlide].subtitle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="mb-4 text-xs tracking-[4px] text-[#8B6B22]"
                    >
                        {slides[currentSlide].subtitle}
                    </motion.span>

                    <motion.h1
                        key={slides[currentSlide].title}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
                    >
                        {slides[currentSlide].title}

                        <span className="block font-light text-white/90">
                            at best prices.
                        </span>
                    </motion.h1>

                    <div className="mt-8 flex flex-wrap gap-4">

                        <Link
                            to="/India"
                            className="inline-flex items-center gap-3 rounded-full bg-[#8B6B22] px-8 py-4 font-semibold text-white transition hover:bg-[#b89249]"
                        >
                            VIEW PROPERTIES <FaChevronRight size={12} />
                        </Link>

                        <a
                            href="tel:+916385303666"
                            className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-4 text-white backdrop-blur-md transition hover:bg-white/20"
                        >
                            <FaPhoneAlt />
                            +91 63853 03666
                        </a>
                    </div>

                    {/* NAVIGATION */}
                    <div className="mt-10 flex flex-wrap items-center gap-4 text-white">

                        {slides.map((item, idx) => (
                            <button
                                key={item.id}
                                onClick={() => setCurrentSlide(idx)}
                                aria-label={`Go to slide ${item.id}`}
                                className={`text-sm font-semibold transition ${currentSlide === idx
                                    ? "border-b-2 border-white"
                                    : "opacity-40 hover:opacity-100"
                                    }`}
                            >
                                {item.id}
                            </button>
                        ))}

                        <button
                            onClick={nextSlide}
                            aria-label="Next Slide"
                            className="ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-white"
                        >
                            <FaArrowRight size={12} />
                        </button>
                    </div>
                </div>

                {/* FLOATING ENQUIRY */}
                <motion.a
                    href="https://wa.me/916385303666?text=Hey%20I%20want%20to%20know%20more%20about%20Monexa%20Groups%20and%20its%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ x: 70, opacity: 0 }}
                    animate={{
                        x: [0, -10, 0],
                        opacity: [1, 0.88, 1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="fixed right-0 top-1/2 z-50 -translate-y-1/2"
                >
                    <div
                        className="flex h-[210px] w-[58px] items-center justify-center bg-[#8B6B22] text-xs font-bold tracking-[3px] text-white shadow-2xl"
                        style={{
                            writingMode: "vertical-rl",
                            transform: "rotate(180deg)",
                        }}
                    >
                        Enquire Now
                    </div>
                </motion.a>
            </section>

            {/* TRUST STATS */}
            <section className="px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-5">

                    {[
                        ["25+ YEARS OF", "EXCELLENCE", "Industry", <FaLandmark />],
                        ["GLOBAL", "LARGEST", "Developer", <FaCity />],
                        ["5 LAKHS+", "", "Happy Customers", <FaGlobe />],
                        ["51,000CR", "", "Portfolio Value", <FaBuilding />],
                        ["PROJECTS", "FUNDED", "Institutions", <FaHardHat />],
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="rounded-2xl bg-white p-6 text-center shadow-[0_10px_30px_rgba(15,42,68,0.08)]"
                        >
                            <div className="mb-4 text-3xl text-[#0F2A44]">
                                {item[3]}
                            </div>

                            <h3 className="text-lg font-bold leading-tight">
                                {item[0]}
                                {item[1] && <span className="block">{item[1]}</span>}
                            </h3>

                            <p className="mt-2 text-sm text-slate-500">
                                {item[2]}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* WHAT WE OFFER */}
            <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center">
                        <span className="rounded-full border border-[#8B6B22]/40 px-5 py-2 text-xs tracking-[3px] text-[#8B6B22]">
                            WHAT WE OFFER
                        </span>

                        <h2 className="mt-6 text-4xl font-bold text-[#0F2A44] sm:text-5xl">
                            Take a brief look at
                            <span className="block">some of the services</span>
                            <span className="block">we offer</span>
                        </h2>
                    </div>

                    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            ["Construction", "/images/construction.webp"],
                            ["Real Estate", "/images/monexa ventures 5.webp"],
                            ["Gated Community", "/images/gated community.webp"],
                            ["Architecture", "/images/Architecture.webp"],
                            ["Interiors", "/images/interiors.webp"],
                            ["Builders", "/images/builders.webp"],
                        ].map((item, i) => (
                            <Link
                                to="/services"
                                key={i}
                                className="group relative overflow-hidden rounded-3xl bg-white shadow-lg"
                            >
                                <img
                                    width="800"
                                    height="600"
                                    src={item[1]}
                                    alt={item[0]}
                                    className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                                    loading="lazy" decoding="async" />

                                <div className="absolute inset-0 bg-black/30" />

                                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-6 text-white">
                                    <h3 className="text-xl font-semibold">
                                        {item[0]}
                                    </h3>

                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0F2A44]">
                                        <FaArrowRight size={12} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* GLOBAL PRESENCE */}
            <section className="px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-center text-4xl font-bold text-[#0F2A44] sm:text-5xl">
                        Global Presence
                    </h2>

                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                        {[
                            ["IN", "India", "/images/monexa ventures 7.webp"],
                            ["MY", "Malaysia", "/images/monexa ventures 8.webp"],
                            ["SG", "Singapore", "/images/monexa ventures 10.webp"],
                            ["AE", "Dubai", "/images/monexa ventures 11.webp"],
                            ["HK", "Hong Kong", "/images/monexa ventures 12.webp"],
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="group relative h-[420px] overflow-hidden rounded-xl"
                            >
                                <img
                                    src={item[2]}
                                    alt={item[1]}
                                    width="800"
                                    height="600"
                                    className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0"
                                    loading="lazy" decoding="async" />

                                <div className="absolute inset-0 bg-black/55" />

                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                                    <h3 className="text-5xl font-bold">
                                        {item[0]}
                                    </h3>

                                    <p className="mt-4 text-lg font-semibold">
                                        {item[1]}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SIGNATURE PROJECTS */}
            <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">

                    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <span className="text-xs tracking-[3px] text-[#8B6B22]">
                                GLOBAL PORTFOLIO
                            </span>

                            <h2 className="mt-4 text-4xl font-bold text-[#0F2A44] sm:text-5xl">
                                Signature Projects
                            </h2>
                        </div>

                        <Link
                            to="/India"
                            className="inline-flex items-center gap-3 rounded-full bg-[#0F2A44] px-8 py-4 font-semibold text-white"
                        >
                            Explore All Properties <FaArrowRight />
                        </Link>
                    </div>

                    <div className="mt-14 grid gap-6 lg:grid-cols-3">
                        {[
                            [
                                "Monexa Business Park",
                                "Singapore",
                                "/images/monexa ventures 14.webp",
                            ],
                            [
                                "Sapphire Residency",
                                "Trichy, India",
                                "/images/monexa ventures 15.webp",
                            ],
                            [
                                "Golden Enclave",
                                "Dubai",
                                "/images/monexa ventures 16.webp",
                            ],
                        ].map((item, i) => (
                            <Link
                                to="/India"
                                key={i}
                                className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2"
                            >
                                <img
                                    src={item[2]}
                                    alt={item[0]}
                                    className="h-72 w-full object-cover"
                                    width="800"
                                    height="600"
                                    loading="lazy" decoding="async" />

                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold text-[#0F2A44]">
                                        {item[0]}
                                    </h3>

                                    <p className="mt-3 text-slate-500">
                                        {item[1]}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            {/* INVESTOR RELATIONS */}
            <section className="bg-[#404E68] px-4 py-20 text-white sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">

                    <div>
                        <span className="rounded-full border border-white/30 px-5 py-2 text-xs tracking-[3px]">
                            INVESTOR RELATIONS
                        </span>

                        <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
                            Strategic Capital
                            <span className="block">Deployment</span>
                        </h2>

                        <p className="mt-6 max-w-xl text-white/80 leading-8">
                            Partner with Monexa Groups for high-yield structural assets.
                            Our advisory team provides transparent, data-driven investment
                            frameworks for long-term growth and diversification.
                        </p>

                        <Link
                            to="/invest"
                            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-[#0F2A44]"
                        >
                            Explore Investment Plans <FaArrowRight />
                        </Link>
                    </div>

                    <div>
                        <img
                            src="/images/monexa ventures 13.webp"
                            alt="Investor Relations"
                            width="800"
                            height="600"
                            className="h-[420px] w-full rounded-3xl object-cover shadow-2xl"
                            loading="lazy" decoding="async" />
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl text-center">
                    <h2 className="text-4xl font-bold text-[#0F2A44]">
                        What Our Clients Say
                    </h2>

                    <div className="mt-14 overflow-hidden">
                        <div className="testimonial-marquee flex w-max gap-6">
                            {[
                                {
                                    name: "Sarah Jenkins",
                                    role: "Property Investor",
                                    text: "Monexa provided an exceptional experience with total transparency.",
                                },
                                {
                                    name: "David Lee",
                                    role: "CEO, Nexus Corp",
                                    text: "Professional service and premium commercial investment guidance.",
                                },
                                {
                                    name: "Aisha Rahman",
                                    role: "Homeowner",
                                    text: "Smooth process from consultation to handover.",
                                },
                                {
                                    name: "Rahul Menon",
                                    role: "Entrepreneur",
                                    text: "Excellent ROI opportunities and trustworthy team.",
                                },
                                {
                                    name: "Priya Nair",
                                    role: "Investor",
                                    text: "Clear documentation and very responsive support.",
                                },
                                {
                                    name: "Karthik Raj",
                                    role: "Business Owner",
                                    text: "Great support and impressive real-estate investment options.",
                                },
                                {
                                    name: "Meera S",
                                    role: "Home Buyer",
                                    text: "Very smooth experience and professional guidance.",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="w-[320px] shrink-0 rounded-3xl bg-slate-50 p-8 text-left shadow-lg"
                                >
                                    <div className="mb-4 flex gap-1 text-[#8B6B22]">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>

                                    <p className="italic leading-7 text-slate-600">
                                        "{item.text}"
                                    </p>

                                    <div className="mt-6">
                                        <h3 className="text-xl font-semibold text-[#0F2A44]">
                                            {item.name}
                                        </h3>

                                        <p className="text-sm text-slate-500">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* EMI CTA */}
            <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">

                    {/* LEFT CONTENT */}
                    <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                        <span className="text-xs tracking-[3px] text-[#8B6B22]">
                            EMI CALCULATOR
                        </span>

                        <h2 className="mt-4 text-3xl font-bold text-[#0F2A44] sm:text-4xl">
                            Plan Your Investment Smartly
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Calculate your monthly EMI instantly and make confident real-estate
                            investment decisions with accurate planning.
                        </p>

                        <Link
                            to="/emi-calculator"
                            className="mt-8 inline-flex w-fit items-center rounded-full bg-[#0F2A44] px-8 py-4 font-semibold text-white transition hover:bg-[#162f4a]"
                        >
                            Calculate EMI
                        </Link>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="h-[320px] sm:h-[420px] lg:h-full">
                        <img
                            width="800"
                            height="600"
                            src="/images/monexa ventures 15.webp"
                            alt="EMI Calculator"
                            className="h-full w-full object-cover"
                            loading="lazy" decoding="async" />
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Home;