import React, { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const Projects = () => {
    return (
        <div className="page-transition min-h-screen pb-20 bg-[var(--theme-card)]">

            {/* HERO / HEADER SECTION */}
            <div className="pt-40 px-8 pb-24 text-center text-white bg-[var(--theme-primary)]">
                <h1 className="text-5xl font-semibold text-white font-['Outfit'] mb-6">Infrastructure & Real Estate Vault</h1>
                <p className="max-w-3xl mx-auto text-lg text-white/80 leading-relaxed">
                    A comprehensive repository of our high-scale developments and strategic structural assets worldwide.
                </p>
            </div>

            <div className="container mx-auto px-4 mt-20">
                <ProjectShowcase />
            </div>
        </div>
    );
};

// Reusable Counter Component (Same as in Home.jsx)
const Counter = ({ end, duration = 2, suffix = '', formatNumber = false }) => {
    const [count, setCount] = React.useState(0);
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    React.useEffect(() => {
        if (isInView) {
            let startTime;
            let animationFrame;

            const animate = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
                const easeOutQuad = progress * (2 - progress);
                setCount(Math.floor(easeOutQuad * end));

                if (progress < 1) {
                    animationFrame = requestAnimationFrame(animate);
                } else {
                    setCount(end);
                }
            };
            animationFrame = requestAnimationFrame(animate);

            return () => cancelAnimationFrame(animationFrame);
        }
    }, [isInView, end, duration]);

    const displayCount = formatNumber ? new Intl.NumberFormat('en-IN').format(count) : count;

    return <span ref={ref}>{displayCount}{suffix}</span>;
};

// Project Showcase Component with Filtering (Same as in Home.jsx)
const ProjectShowcase = () => {
    const [activeCountry, setActiveCountry] = React.useState('India');
    const [activeType, setActiveType] = React.useState('All');

    const countries = ['India', 'Dubai', 'Malaysia', 'Singapore'];
    const types = ['All', 'Flats', 'Apartments', 'Plots'];

    const dummyProjects = [
        // India
        { id: 1, name: "Skyline Residency", location: "Mumbai, India", country: "India", type: "Apartments", img: "/images/monexa ventures 17.jpg" },
        { id: 2, name: "Ganga View", location: "Varanasi, India", country: "India", type: "Flats", img: "/images/monexa ventures 18.jpg" },
        { id: 3, name: "Green Park Plots", location: "Pune, India", country: "India", type: "Plots", img: "/images/monexa ventures 1.jpg" },
        { id: 4, name: "Cyber Hub Flats", location: "Gurgaon, India", country: "India", type: "Flats", img: "/images/monexa ventures 2.jpg" },
        { id: 5, name: "Heritage Apartments", location: "Chennai, India", country: "India", type: "Apartments", img: "/images/monexa ventures 3.jpg" },
        { id: 16, name: "Lotus Flats", location: "Delhi, India", country: "India", type: "Flats", img: "/images/monexa ventures 4.jpg" },
        { id: 17, name: "Emerald Plots", location: "Bangalore, India", country: "India", type: "Plots", img: "/images/monexa ventures 5.jpg" },
        { id: 18, name: "Imperial Apartments", location: "Hyderabad, India", country: "India", type: "Apartments", img: "/images/monexa ventures 6.jpg" },
        { id: 19, name: "Royal Flats", location: "Jaipur, India", country: "India", type: "Flats", img: "/images/monexa ventures 7.jpg" },
        { id: 20, name: "Zion Apartments", location: "Kochi, India", country: "India", type: "Apartments", img: "/images/monexa ventures 8.jpg" },

        // Dubai
        { id: 6, name: "Desert Rose", location: "Downtown Dubai", country: "Dubai", type: "Apartments", img: "/images/monexa ventures 10.jpg" },
        { id: 7, name: "Palm View Flats", location: "Palm Jumeirah", country: "Dubai", type: "Flats", img: "/images/monexa ventures 11.jpg" },
        { id: 8, name: "Marina Heights", location: "Dubai Marina", country: "Dubai", type: "Apartments", img: "/images/monexa ventures 12.jpg" },
        { id: 9, name: "Sands Plots", location: "Al Barsha", country: "Dubai", type: "Plots", img: "/images/monexa ventures 13.jpg" },
        { id: 21, name: "Burj Vista", location: "Downtown Dubai", country: "Dubai", type: "Apartments", img: "/images/monexa ventures 14.jpg" },
        { id: 22, name: "Pearl Flats", location: "Jumeirah", country: "Dubai", type: "Flats", img: "/images/monexa ventures 15.jpg" },
        { id: 23, name: "Oasis Plots", location: "Dubai Hills", country: "Dubai", type: "Plots", img: "/images/monexa ventures 16.jpg" },
        { id: 24, name: "Sky Garden", location: "Business Bay", country: "Dubai", type: "Apartments", img: "/images/monexa ventures 17.jpg" },

        // Malaysia
        { id: 10, name: "KL Towers", location: "Kuala Lumpur", country: "Malaysia", type: "Apartments", img: "/images/monexa ventures 18.jpg" },
        { id: 11, name: "Penang Pearl", location: "Penang", country: "Malaysia", type: "Flats", img: "/images/monexa ventures 1.jpg" },
        { id: 12, name: "Langkawi Plots", location: "Langkawi", country: "Malaysia", type: "Plots", img: "/images/monexa ventures 2.jpg" },
        { id: 25, name: "Petronas Suites", location: "Kuala Lumpur", country: "Malaysia", type: "Apartments", img: "/images/monexa ventures 3.jpg" },
        { id: 26, name: "Batu Flats", location: "Batu Caves", country: "Malaysia", type: "Flats", img: "/images/monexa ventures 4.jpg" },
        { id: 27, name: "Genting Plots", location: "Genting Highlands", country: "Malaysia", type: "Plots", img: "/images/monexa ventures 5.jpg" },

        // Singapore
        { id: 13, name: "Orchard Luxury", location: "Orchard Road", country: "Singapore", type: "Apartments", img: "/images/monexa ventures 6.jpg" },
        { id: 14, name: "Changi Suites", location: "Changi", country: "Singapore", type: "Flats", img: "/images/monexa ventures 7.jpg" },
        { id: 15, name: "Garden Plots", location: "Jurong East", country: "Singapore", type: "Plots", img: "/images/monexa ventures 8.jpg" },
        { id: 28, name: "Marina Bay Suites", location: "Marina Bay", country: "Singapore", type: "Apartments", img: "/images/monexa ventures 10.jpg" },
        { id: 29, name: "Sentosa Flats", location: "Sentosa Island", country: "Singapore", type: "Flats", img: "/images/monexa ventures 11.jpg" },
        { id: 30, name: "Jurong Plots", location: "Jurong", country: "Singapore", type: "Plots", img: "/images/monexa ventures 12.jpg" },
    ];

    const filteredProjects = dummyProjects.filter(p =>
        p.country === activeCountry && (activeType === 'All' || p.type === activeType)
    );

    return (
        <div className="w-full">
            {/* Country Tabs */}
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
                {countries.map(c => (
                    <button
                        key={c}
                        onClick={() => setActiveCountry(c)}
                        className={`px-8 py-3 rounded-full border border-gray-200 text-base font-medium cursor-pointer transition-all duration-300 ${activeCountry === c ? 'bg-[var(--theme-primary)] text-white shadow-[0_5px_15px_rgba(27,7,67,0.2)]' : 'bg-white text-[var(--theme-primary)]'}`}
                    >
                        {c}
                    </button>
                ))}
            </div>

            {/* Type Sub-categories */}
            <div className="flex justify-center gap-6 md:gap-10 mb-16 border-b border-gray-100 pb-4 flex-wrap">
                {types.map(t => (
                    <button
                        key={t}
                        onClick={() => setActiveType(t)}
                        className={`bg-transparent border-none text-base cursor-pointer relative px-2 transition-colors ${activeType === t ? 'font-bold text-[var(--theme-primary)]' : 'font-normal text-[var(--theme-text-muted)]'}`}
                    >
                        {t}
                        {activeType === t && (
                            <motion.div
                                layoutId="activeTabProjects"
                                className="absolute -bottom-[1.1rem] left-0 right-0 h-[3px] bg-[var(--theme-accent)]"
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((proj) => (
                        <motion.div
                            key={proj.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="card cursor-pointer overflow-hidden rounded-md relative group h-[280px]"
                        >
                            <img src={proj.img} alt={proj.name} className="w-full h-full object-cover" />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[rgba(10,25,47,0.9)] to-transparent pt-10 pb-4 px-6">
                                <h3 className="text-white text-xl font-medium mb-1">{proj.name}</h3>
                                <div className="flex justify-between items-center">
                                    <p className="text-white/70 text-sm">{proj.location}</p>
                                    <span className="text-xs bg-white/15 text-white py-1 px-3 rounded-full">
                                        {proj.type}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <div className="col-span-full text-center p-20 text-[var(--theme-text-muted)]">
                        No projects found in this category.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;


