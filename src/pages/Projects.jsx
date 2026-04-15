import React, { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const Projects = () => {
    return (
        <div className="page-transition" style={{ backgroundColor: 'var(--theme-card)', minHeight: '100vh', paddingBottom: '5rem' }}>

            {/* HERO / HEADER SECTION */}
            <div style={{ backgroundColor: 'var(--theme-primary)', padding: '10rem 2rem 6rem 2rem', color: 'white', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3.5rem', fontWeight: 600, color: 'white', fontFamily: 'Outfit, sans-serif', marginBottom: '1.5rem' }}>Infrastructure & Real Estate Vault</h1>
                <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
                    A comprehensive repository of our high-scale developments and strategic structural assets worldwide.
                </p>
            </div>

            <div className="container" style={{ marginTop: '5rem' }}>
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
        { id: 1, name: "Skyline Residency", location: "Mumbai, India", country: "India", type: "Apartments", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop" },
        { id: 2, name: "Ganga View", location: "Varanasi, India", country: "India", type: "Flats", img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&auto=format&fit=crop" },
        { id: 3, name: "Green Park Plots", location: "Pune, India", country: "India", type: "Plots", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop" },
        { id: 4, name: "Cyber Hub Flats", location: "Gurgaon, India", country: "India", type: "Flats", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop" },
        { id: 5, name: "Heritage Apartments", location: "Chennai, India", country: "India", type: "Apartments", img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&auto=format&fit=crop" },
        { id: 16, name: "Lotus Flats", location: "Delhi, India", country: "India", type: "Flats", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop" },
        { id: 17, name: "Emerald Plots", location: "Bangalore, India", country: "India", type: "Plots", img: "https://images.unsplash.com/photo-1524813686514-a57563d77965?w=800&auto=format&fit=crop" },
        { id: 18, name: "Imperial Apartments", location: "Hyderabad, India", country: "India", type: "Apartments", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop" },
        { id: 19, name: "Royal Flats", location: "Jaipur, India", country: "India", type: "Flats", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&auto=format&fit=crop" },
        { id: 20, name: "Zion Apartments", location: "Kochi, India", country: "India", type: "Apartments", img: "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=800&auto=format&fit=crop" },

        // Dubai
        { id: 6, name: "Desert Rose", location: "Downtown Dubai", country: "Dubai", type: "Apartments", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop" },
        { id: 7, name: "Palm View Flats", location: "Palm Jumeirah", country: "Dubai", type: "Flats", img: "https://images.unsplash.com/photo-1541339907198-e087562f62b0?w=800&auto=format&fit=crop" },
        { id: 8, name: "Marina Heights", location: "Dubai Marina", country: "Dubai", type: "Apartments", img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&auto=format&fit=crop" },
        { id: 9, name: "Sands Plots", location: "Al Barsha", country: "Dubai", type: "Plots", img: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?w=800&auto=format&fit=crop" },
        { id: 21, name: "Burj Vista", location: "Downtown Dubai", country: "Dubai", type: "Apartments", img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&auto=format&fit=crop" },
        { id: 22, name: "Pearl Flats", location: "Jumeirah", country: "Dubai", type: "Flats", img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop" },
        { id: 23, name: "Oasis Plots", location: "Dubai Hills", country: "Dubai", type: "Plots", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop" },
        { id: 24, name: "Sky Garden", location: "Business Bay", country: "Dubai", type: "Apartments", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&auto=format&fit=crop" },

        // Malaysia
        { id: 10, name: "KL Towers", location: "Kuala Lumpur", country: "Malaysia", type: "Apartments", img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&auto=format&fit=crop" },
        { id: 11, name: "Penang Pearl", location: "Penang", country: "Malaysia", type: "Flats", img: "https://images.unsplash.com/photo-1610444654605-649033320ef4?w=800&auto=format&fit=crop" },
        { id: 12, name: "Langkawi Plots", location: "Langkawi", country: "Malaysia", type: "Plots", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop" },
        { id: 25, name: "Petronas Suites", location: "Kuala Lumpur", country: "Malaysia", type: "Apartments", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop" },
        { id: 26, name: "Batu Flats", location: "Batu Caves", country: "Malaysia", type: "Flats", img: "https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?w=800&auto=format&fit=crop" },
        { id: 27, name: "Genting Plots", location: "Genting Highlands", country: "Malaysia", type: "Plots", img: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?w=800&auto=format&fit=crop" },

        // Singapore
        { id: 13, name: "Orchard Luxury", location: "Orchard Road", country: "Singapore", type: "Apartments", img: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&auto=format&fit=crop" },
        { id: 14, name: "Changi Suites", location: "Changi", country: "Singapore", type: "Flats", img: "https://images.unsplash.com/photo-1525648199074-cee38ba79a4a?w=800&auto=format&fit=crop" },
        { id: 15, name: "Garden Plots", location: "Jurong East", country: "Singapore", type: "Plots", img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format&fit=crop" },
        { id: 28, name: "Marina Bay Suites", location: "Marina Bay", country: "Singapore", type: "Apartments", img: "https://images.unsplash.com/photo-1518005020480-1099289ec090?w=800&auto=format&fit=crop" },
        { id: 29, name: "Sentosa Flats", location: "Sentosa Island", country: "Singapore", type: "Flats", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop" },
        { id: 30, name: "Jurong Plots", location: "Jurong", country: "Singapore", type: "Plots", img: "https://images.unsplash.com/photo-1524813686514-a57563d77965?w=800&auto=format&fit=crop" },
    ];

    const filteredProjects = dummyProjects.filter(p =>
        p.country === activeCountry && (activeType === 'All' || p.type === activeType)
    );

    return (
        <div>
            {/* Country Tabs */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                marginBottom: '3rem',
                flexWrap: 'wrap'
            }}>
                {countries.map(c => (
                    <button
                        key={c}
                        onClick={() => setActiveCountry(c)}
                        style={{
                            padding: '0.8rem 2.5rem',
                            borderRadius: '50px',
                            border: '1px solid #ddd',
                            backgroundColor: activeCountry === c ? 'var(--theme-primary)' : 'white',
                            color: activeCountry === c ? 'white' : 'var(--theme-primary)',
                            fontSize: '1rem',
                            fontWeight: 500,
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: activeCountry === c ? '0 5px 15px rgba(27, 7, 67, 0.2)' : 'none'
                        }}
                    >
                        {c}
                    </button>
                ))}
            </div>

            {/* Type Sub-categories */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '2.5rem',
                marginBottom: '4rem',
                borderBottom: '1px solid #eee',
                paddingBottom: '1rem'
            }}>
                {types.map(t => (
                    <button
                        key={t}
                        onClick={() => setActiveType(t)}
                        style={{
                            background: 'none',
                            border: 'none',
                            fontSize: '0.95rem',
                            fontWeight: activeType === t ? 700 : 400,
                            color: activeType === t ? 'var(--theme-primary)' : 'var(--theme-text-muted)',
                            cursor: 'pointer',
                            position: 'relative',
                            padding: '0 5px'
                        }}
                    >
                        {t}
                        {activeType === t && (
                            <motion.div
                                layoutId="activeTabProjects"
                                style={{
                                    position: 'absolute',
                                    bottom: '-1.1rem',
                                    left: 0,
                                    right: 0,
                                    height: '3px',
                                    backgroundColor: 'var(--theme-accent)'
                                }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Project Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((proj) => (
                        <motion.div
                            key={proj.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="card"
                            style={{ cursor: 'pointer', overflow: 'hidden' }}
                        >
                            <div style={{ position: 'relative', height: '280px' }}>
                                <img src={proj.img} alt={proj.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0, left: 0, width: '100%',
                                    background: 'linear-gradient(to top, rgba(10,25,47,0.9), transparent)',
                                    padding: '2.5rem 1.5rem 1rem 1.5rem'
                                }}>
                                    <h3 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 500, marginBottom: '0.3rem' }}>{proj.name}</h3>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>{proj.location}</p>
                                        <span style={{
                                            fontSize: '0.75rem',
                                            backgroundColor: 'rgba(255,255,255,0.15)',
                                            color: 'white',
                                            padding: '3px 10px',
                                            borderRadius: '15px'
                                        }}>
                                            {proj.type}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '5rem', color: 'var(--theme-text-muted)' }}>
                        No projects found in this category.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;


