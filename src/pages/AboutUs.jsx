import React from "react";
import { motion } from "framer-motion";
import {
    FaBullseye,
    FaRegEye,
    FaGlobe,
    FaClock,
    FaUsers,
} from "react-icons/fa";

const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutUs = () => {
    const countries = [
        {
            id: "IN",
            country: "India",
            projects: "50,000+ Projects",
            desc: "Our home base with the largest portfolio spanning 28 states.",
        },
        {
            id: "MY",
            country: "Malaysia",
            projects: "12,000+ Projects",
            desc: "Premium mixed-use developments and eco townships.",
        },
        {
            id: "SG",
            country: "Singapore",
            projects: "8,500+ Projects",
            desc: "Luxury condominiums and smart commercial spaces.",
        },
        {
            id: "AE",
            country: "Dubai",
            projects: "15,000+ Projects",
            desc: "Iconic towers and waterfront living experiences.",
        },
        {
            id: "HK",
            country: "Hong Kong",
            projects: "5,200+ Projects",
            desc: "Premium retail and high-density residential assets.",
        },
    ];

    const timeline = [
        ["1998", "Founded in India"],
        ["2005", "Crossed 10,000 Projects"],
        ["2010", "Expanded to Dubai"],
        ["2014", "Singapore & Malaysia"],
        ["2018", "Hong Kong Operations"],
        ["2024", "1 Million Projects Milestone"],
    ];

    const leaders = [
        ["RK", "Rajesh Kumar", "Chairman & CEO"],
        ["PS", "Priya Sharma", "COO"],
        ["AM", "Arjun Mehta", "International Operations"],
        ["SC", "Sarah Chen", "VP - Singapore & Hong Kong"],
        ["AF", "Ahmad Faizal", "Malaysia Director"],
        ["VS", "Vikram Singh", "CFO"],
    ];

    return (
        <div className="bg-white text-slate-900 overflow-hidden">
            {/* HERO */}
            <section className="bg-[#0F2A44] text-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                <div className="mx-auto max-w-6xl text-center">
                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
                    >
                        About Monexa Groups
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.1 }}
                        className="mx-auto mt-6 max-w-3xl text-base text-white/80 sm:text-lg lg:text-xl"
                    >
                        A multinational real estate powerhouse shaping skylines and
                        communities across 5 countries for over 25 years.
                    </motion.p>
                </div>
            </section>

            {/* LEGACY */}
            <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-6xl">
                    <p className="text-sm uppercase tracking-[4px] text-slate-500">
                        Established 1998
                    </p>

                    <h2 className="mt-4 text-3xl font-bold leading-tight text-[#0F2A44] sm:text-4xl lg:text-5xl">
                        A Legacy of Scale &
                        <span className="block text-slate-400 italic font-medium">
                            Unwavering Stability
                        </span>
                    </h2>

                    <div className="mt-10 grid gap-8 md:grid-cols-2">
                        <p className="text-slate-600 leading-8">
                            Founded on the principles of structural integrity and financial
                            transparency, Monexa Groups evolved from a boutique developer into
                            a global investment powerhouse.
                        </p>

                        <p className="text-slate-600 leading-8">
                            Today, we manage a portfolio across India and key international
                            hubs with a focus on high-yield infrastructure assets.
                        </p>
                    </div>
                </div>
            </section>

            {/* MANDATE */}
            <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
                    <img
                        src="/images/monexa ventures 2.jpg"
                        alt="Monexa"
                        className="h-[320px] w-full rounded-2xl object-cover sm:h-[420px]"
                    />

                    <div>
                        <h2 className="text-3xl font-bold text-[#0F2A44] sm:text-4xl">
                            The Strategic Mandate
                        </h2>

                        <p className="mt-6 text-slate-600 leading-8">
                            We operate at the intersection of innovation and stability. Every
                            project is vetted through a rigorous multi-tier audit process.
                        </p>

                        <div className="mt-8 grid gap-6 sm:grid-cols-2">
                            <div className="rounded-xl bg-white p-5 shadow-sm">
                                <h4 className="font-semibold text-[#0F2A44]">
                                    01. Structural Grace
                                </h4>
                                <p className="mt-2 text-sm text-slate-600">
                                    Architectural excellence without compromise.
                                </p>
                            </div>

                            <div className="rounded-xl bg-white p-5 shadow-sm">
                                <h4 className="font-semibold text-[#0F2A44]">
                                    02. Ethical Foundation
                                </h4>
                                <p className="mt-2 text-sm text-slate-600">
                                    Transparent governance in every contract.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MISSION VISION */}
            <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
                    <div className="rounded-2xl glass-card p-8">
                        <FaBullseye className="text-3xl text-[#0F2A44]" />
                        <h3 className="mt-5 text-2xl font-bold">Our Mission</h3>
                        <p className="mt-4 leading-8 text-slate-600">
                            Deliver world-class real estate solutions blending innovation,
                            sustainability, and long-term investor value.
                        </p>
                    </div>

                    <div className="rounded-2xl glass-card p-8">
                        <FaRegEye className="text-3xl text-[#0F2A44]" />
                        <h3 className="mt-5 text-2xl font-bold">Our Vision</h3>
                        <p className="mt-4 leading-8 text-slate-600">
                            Become the most trusted multinational real estate brand shaping
                            communities across Asia and the Middle East.
                        </p>
                    </div>
                </div>
            </section>

            {/* FOOTPRINT */}
            <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center">
                        <FaGlobe className="mx-auto text-4xl text-[#0F2A44]" />
                        <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                            Our Global Footprint
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {countries.map((item, i) => (
                            <div
                                key={i}
                                className="rounded-2xl glass-card p-6"
                            >
                                <div className="text-2xl font-bold text-[#0F2A44]">
                                    {item.id}
                                </div>

                                <h3 className="mt-2 text-xl font-semibold">
                                    {item.country}
                                </h3>

                                <p className="mt-1 text-sm font-medium text-[#1E88E5]">
                                    {item.projects}
                                </p>

                                <p className="mt-4 text-sm leading-7 text-slate-600">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* JOURNEY */}
            <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-4xl">
                    <div className="text-center">
                        <FaClock className="mx-auto text-4xl text-[#0F2A44]" />
                        <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                            Our Journey
                        </h2>
                    </div>

                    <div className="mt-12 space-y-6">
                        {timeline.map((item, i) => (
                            <div
                                key={i}
                                className="flex gap-4 rounded-2xl glass-card p-5 sm:items-center"
                            >
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0F2A44] text-sm font-bold text-white">
                                    {item[0]}
                                </div>

                                <div className="font-medium text-slate-700">
                                    {item[1]}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LEADERSHIP */}
            <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center">
                        <FaUsers className="mx-auto text-4xl text-[#0F2A44]" />
                        <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                            Our Leadership Team
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {leaders.map((item, i) => (
                            <div
                                key={i}
                                className="rounded-2xl glass-card p-8 text-center"
                            >
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 font-bold text-[#0F2A44]">
                                    {item[0]}
                                </div>

                                <h3 className="mt-5 text-xl font-semibold">
                                    {item[1]}
                                </h3>

                                <p className="mt-2 text-sm text-slate-500">
                                    {item[2]}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;