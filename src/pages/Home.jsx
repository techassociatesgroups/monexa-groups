import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion'; // Added AnimatePresence
import {
    FaGlobe, FaLandmark, FaBuilding, FaArrowRight, FaHardHat,
    FaCity, FaTree, FaPencilRuler, FaCouch, FaHome,
    FaChevronRight, FaPhoneAlt, FaMapMarkerAlt, FaStar
} from 'react-icons/fa'; // Ensure FaPhoneAlt, FaChevronRight, FaStar are here

// Reusable Counter Animation Hook
const Counter = ({ end, duration = 1, suffix = '', formatNumber = false }) => {
    const [count, setCount] = useState(0);
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            let startTime;
            let animationFrame;
            const animate = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
                const easeOutQuad = progress * (1 - progress);
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

const Home = () => {
    const navigate = useNavigate();
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // --- SLIDER STATE (Crucial for fixing the ReferenceError) ---
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: "01",
            image: "/images/monexa groups 9.png",
            title: "Great spaces for perfection and class",
            subtitle: "MONEXA HOUSING DEVELOPMENT"
        },
        {
            id: "02",
            image: "/images/monexa ventures 3.jpg",
            title: "Future-Ready Global Infrastructure",
            subtitle: "INTERNATIONAL DEVELOPMENTS"
        },
        {
            id: "03",
            image: "/images/monexa ventures 4.jpg",
            title: "Architectural Excellence Worldwide",
            subtitle: "PREMIUM REAL ESTATE"
        }
    ];

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const videoSources = [
        "/video/hero video 1 monexa groups.mp4",
        "/video/Monexa_Groups_hero_video1.mp4 ",
        "/video/hero video 2 monexa groups.mp4"
    ];

    return (
        <div className="page-transition" style={{ backgroundColor: 'var(--theme-bg)', overflow: 'hidden' }}>


            {/* HERO SECTION - REPAIRED */}
            <section style={{ height: '100vh', position: 'relative', display: 'flex', alignItems: 'center', backgroundColor: '#00000093', overflow: 'hidden' }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 0.5, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        style={{
                            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                            zIndex: 1
                        }}
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        >
                            <source src={videoSources[currentSlide]} type="video/mp4" />
                        </video>
                    </motion.div>
                </AnimatePresence>

                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.45)', zIndex: 2 }} />

                <div className="container hero-container" style={{ position: 'relative', zIndex: 10, padding: '120px 5% 40px 5%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ maxWidth: '800px', color: 'white' }}>
                        <motion.span key={`sub-${currentSlide}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#C5A059', letterSpacing: '3px', fontSize: '0.8rem', display: 'block', marginBottom: '1rem' }}>
                            {slides[currentSlide].subtitle}
                        </motion.span>
                        <motion.h1 key={`title-${currentSlide}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1.1, marginBottom: '3rem', fontFamily: 'Outfit, sans-serif', color: 'white' }}>
                            {slides[currentSlide].title} <br />
                            <span style={{ fontWeight: 300, opacity: 0.9, color: 'white' }}>at best prices.</span>
                        </motion.h1>

                        {/* SPACING FIX: Added margin here */}
                        <div className="hero-projects-btn" style={{ marginBottom: '2rem' }}>
                            <Link to="/projects" className="btn" style={{ padding: '1.2rem 3rem', backgroundColor: '#C5A059', color: 'white', display: 'inline-flex', alignItems: 'center', gap: '15px', textDecoration: 'none', fontWeight: 600 }}>
                                VIEW PROJECTS <FaChevronRight size={12} />
                            </Link>
                        </div>

                        {/* FOOTER BAR WITH FaPhoneAlt FIX */}
                        <div className="hero-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
                            <div className="hero-contact" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'nowrap' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <FaPhoneAlt size={18} />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.75rem', opacity: 0.6 }}>CALL US NOW</p>
                                    <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>6385303666</p>
                                </div>
                            </div>
                            <div className="hero-slider-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'nowrap' }}>
                                {slides.map((s, idx) => (
                                    <span key={s.id} onClick={() => setCurrentSlide(idx)} style={{ cursor: 'pointer', opacity: currentSlide === idx ? 1 : 0.3, borderBottom: currentSlide === idx ? '2px solid white' : 'none', fontWeight: 600 }}>{s.id}</span>
                                ))}
                                <button onClick={handleNext} style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid white', background: 'transparent', color: 'white', cursor: 'pointer' }}>
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fixed Enquiry Button */}
                <div style={{ position: 'fixed', right: '0', top: '50%', transform: 'translateY(-50%)', zIndex: 1000 }}>
                    <Link to="/contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', writingMode: 'vertical-rl', transform: 'rotate(180deg)', height: '180px', backgroundColor: '#C5A059', color: '#fff', padding: '20px 14px', textDecoration: 'none', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem', boxShadow: '-4px 0 12px rgba(0,0,0,0.2)', borderRadius: '4px 0 0 4px' }}>
                        ENQUIRE NOW
                    </Link>
                </div>
            </section>

            {/* TRUST STATS SECTION */}
            <section style={{ padding: '4rem 0', backgroundColor: 'var(--theme-bg)' }}>
                <div className="container" style={{ padding: '0 5%' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                        gap: '1.5rem'
                    }}>
                        {[
                            { icon: <FaLandmark />, title: "25+ YEARS OF", highlight: "EXCELLENCE", sub: "in the Real Estate Industry" },
                            { icon: <FaCity />, title: "GLOBAL", highlight: "LARGEST", sub: "Real Estate Developer" },
                            { icon: <FaGlobe />, title: "5 Lakhs+", highlight: "", sub: "Happy Customers" },
                            { icon: <FaBuilding />, title: "51,000CR", highlight: "", sub: "Real Estate Portfolio" },
                            { icon: <FaHardHat />, title: "PROJECTS FUNDED", highlight: "", sub: "By World Leading Financial Institutions" }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                style={{
                                    backgroundColor: 'var(--theme-card)',
                                    padding: '2.5rem 1.5rem',
                                    borderRadius: '12px',
                                    textAlign: 'center',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.8)',
                                    border: '1px solid rgba(212, 175, 55, 0.1)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    minHeight: '220px'
                                }}
                            >
                                {/* Icon Container */}
                                <div style={{
                                    color: 'var(--theme-accent)',
                                    fontSize: '2rem',
                                    marginBottom: '1.5rem',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    {stat.icon}
                                </div>

                                {/* Text Content */}
                                <h4 style={{
                                    fontSize: '0.9rem',
                                    fontWeight: '700',
                                    color: 'var(--theme-text-main)',
                                    margin: '0 0 0.5rem 0',
                                    lineHeight: '1.2',
                                    textTransform: 'uppercase'
                                }}>
                                    {stat.title} <br />
                                    {stat.highlight && <span style={{ display: 'block' }}>{stat.highlight}</span>}
                                </h4>

                                <p style={{
                                    fontSize: '0.75rem',
                                    color: '#888',
                                    margin: 0,
                                    lineHeight: '1.4'
                                }}>
                                    {stat.sub}x
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* WHAT WE OFFER - BENTO GRID SECTION */}
            <section style={{ padding: '8rem 0', backgroundColor: 'var(--theme-bg)', color: 'black' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '3px', border: '1px solid rgba(212, 175, 55, 0.4)', padding: '8px 20px', borderRadius: '50px', fontWeight: 500, display: 'inline-block', marginBottom: '1.5rem', color: 'var(--theme-accent)' }}>WHAT WE OFFER</span>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: 600, lineHeight: '1.2', fontFamily: 'Outfit, sans-serif', color: 'black' }}>
                            Take a brief look at<br />some of the services<br />we offer
                        </h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {[
                            { name: 'Construction', img: '/images/construction.webp' },
                            { name: 'Real Estate', img: '/images/monexa ventures 5.jpg' },
                            { name: 'Gated Community', img: '/images/monexa ventures 7.jpg' },
                            { name: 'Architecture', img: '/images/Architecture.webp' },
                            { name: 'Interiors', img: '/images/interiors.webp' },
                            { name: 'Builders', img: '/images/builders.webp' }
                        ].map((service, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.02 }}
                                onMouseEnter={() => setHoveredIndex(`srv-${idx}`)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{ backgroundColor: 'var(--theme-card)', borderRadius: '24px', position: 'relative', overflow: 'hidden', minHeight: '340px', padding: '2rem', display: 'flex', flexDirection: 'column', cursor: 'pointer', border: '1px solid rgba(0, 102, 255, 0.1)' }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', zIndex: 2 }}>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'black' }}>{service.name}</h3>
                                    <Link to="/services" state={{ selectedService: service.name }} style={{ width: '32px', height: '32px', backgroundColor: hoveredIndex === `srv-${idx}` ? 'var(--theme-accent)' : 'var(--theme-bg)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'background-color 0.3s ease' }}>
                                        <FaArrowRight style={{ transform: 'rotate(-45deg)' }} size={12} color={hoveredIndex === `srv-${idx}` ? "var(--theme-text-inverse)" : "var(--theme-text-main)"} />
                                    </Link>
                                </div>
                                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '65%' }}>
                                    <img src={service.img} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.8)' }} alt={service.name} />
                                </div>
                                {/* Make the entire card a clickable link mask */}
                                <Link to="/services" state={{ selectedService: service.name }} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 3 }} />
                            </motion.div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <p style={{ fontSize: '0.9rem', fontWeight: 600 }}>Discover top-tier real estate development services. <Link to="/services" style={{ color: 'var(--theme-accent)', textDecoration: 'underline' }}>View all services</Link></p>
                    </div>
                </div>
            </section>

            {/* GLOBAL PRESENCE SECTION */}
            <section style={{ padding: '0 0 4rem 0', backgroundColor: 'var(--theme-bg)' }}>
                <div className="container" style={{ padding: '0 5%', maxWidth: '1400px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '3rem', textAlign: 'center', color: 'var(--theme-text-main)' }}>Global Presence</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '1rem',
                        alignItems: 'stretch'
                    }}>
                        {[
                            {
                                code: "IN",
                                country: "India",
                                desc: "Headquarters with 50,000+ projects across 28 states",
                                image: "/images/monexa ventures 7.jpg"
                            },
                            {
                                code: "MY",
                                country: "Malaysia",
                                desc: "Premium developments in Kuala Lumpur & Penang",
                                image: "/images/monexa ventures 8.jpg"
                            },
                            {
                                code: "SG",
                                country: "Singapore",
                                desc: "Luxury condominiums and commercial spaces",
                                image: "/images/monexa ventures 10.jpg"
                            },
                            {
                                code: "AE",
                                country: "Dubai",
                                desc: "Iconic towers and waterfront properties",
                                image: "/images/monexa ventures 11.jpg"
                            },
                            {
                                code: "HK",
                                country: "Hong Kong",
                                desc: "High-rise residential and mixed-use developments",
                                image: "/images/monexa ventures 12.jpg"
                            }
                        ].map((loc, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                onMouseEnter={() => setHoveredIndex(`global-${idx}`)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{
                                    position: 'relative',
                                    height: '100%',
                                    minHeight: '480px',
                                    borderRadius: '6px',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: 'white',
                                    padding: '2rem',
                                    textAlign: 'center',
                                    cursor: 'pointer'
                                }}
                            >
                                {/* Background Image with Grayscale Filter */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0, left: 0, right: 0, bottom: 0,
                                    background: `url('${loc.image}') center/cover no-repeat`,
                                    filter: hoveredIndex === `global-${idx}` ? 'grayscale(0%)' : 'grayscale(100%)',
                                    transition: 'filter 0.5s ease',
                                    zIndex: 0
                                }} />

                                {/* Dark Overlay for text readability */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0, left: 0, right: 0, bottom: 0,
                                    backgroundColor: hoveredIndex === `global-${idx}` ? 'rgba(15, 25, 40, 0.6)' : 'rgba(15, 25, 40, 0.8)',
                                    transition: 'background-color 0.5s ease',
                                    zIndex: 1
                                }} />

                                <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '100%' }}>
                                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <h2 style={{ fontSize: '3.5rem', fontWeight: '700', margin: 0, fontFamily: 'Outfit, sans-serif', textShadow: '0px 2px 10px rgba(0,0,0,0.6)' }}>
                                            {loc.code}
                                        </h2>
                                    </div>
                                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', margin: '0 0 1rem 0', textShadow: '0px 2px 8px rgba(0,0,0,0.6)' }}>
                                            {loc.country}
                                        </h3>
                                        <p style={{ fontSize: '0.85rem', lineHeight: '1.6', margin: 0, padding: '0 10px', textShadow: '0px 2px 6px rgba(0,0,0,0.6)', fontWeight: 500 }}>
                                            {loc.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SELECTED PROJ SECTION */}
            <section className="flex-col-mobile" style={{ display: 'flex', minHeight: '600px', backgroundColor: '' }}>
                {/* Left Side */}
                <div style={{ flex: 1, padding: '5rem 5% 5rem 8%', display: 'flex', flexDirection: 'column', justifyContent: 'center', color: 'var(--theme-text-main)' }}>
                    <div>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: 700, margin: '0 0 0 0', lineHeight: '1.15', fontFamily: 'Outfit, sans-serif' }}>
                            Innovative<br />designs, lasting<br />impressions
                        </h2>
                    </div>
                </div>

                {/* Right Side */}
                <div style={{ flex: 1, position: 'relative' }}>
                    <img src="/images/monexa ventures 13.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Vista at Councill Square" />
                </div>
            </section>
            {/* FEATURED PROJECTS OVERVIEW */}
            <section style={{ padding: '8rem 0', backgroundColor: 'var(--theme-bg)' }}>
                <div className="container" style={{ padding: '0 5%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
                        <div>
                            <span style={{ color: 'var(--theme-accent)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>Global Portfolio</span>
                            <h2 style={{ fontSize: '3.5rem', fontWeight: 600, margin: 0, fontFamily: 'Outfit, sans-serif', color: 'var(--theme-primary)' }}>Signature Projects</h2>
                        </div>
                        <Link to="/India" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            Explore All Properties <FaArrowRight />
                        </Link>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
                        {[
                            { name: 'Monexa Business Park', loc: 'Singapore', category: 'Commercial', img: '/images/monexa ventures 14.jpg' },
                            { name: 'Sapphire Residency', loc: 'Trichy, India', category: 'Villa', img: '/images/monexa ventures 15.jpg' },
                            { name: 'The Golden Enclave', loc: 'Dubai', category: 'Upcoming', img: '/images/monexa ventures 16.jpg' }
                        ].map((proj, i) => (
                            <Link to="/India" key={i} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                                <motion.div whileHover={{ y: -10 }} style={{ borderRadius: '12px', overflow: 'hidden', backgroundColor: 'var(--theme-card)', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', border: '1px solid rgba(212, 175, 55, 0.1)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ height: '280px', overflow: 'hidden', flexShrink: 0 }}>
                                        <img src={proj.img} alt={proj.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <span style={{ color: 'var(--theme-accent)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>{proj.category}</span>
                                        <h3 style={{ fontSize: '1.4rem', color: 'var(--theme-text-main)', margin: '0.5rem 0 1rem 0', fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}>{proj.name}</h3>
                                        <div style={{ display: 'flex', alignItems: 'center', color: '#888', fontSize: '0.9rem', gap: '8px', marginTop: 'auto' }}><FaMapMarkerAlt /> {proj.loc}</div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FORMAL INVESTOR RELATIONS SECTION */}
            <section style={{ padding: '8rem 0', backgroundColor: '#404E68', color: 'white' }}>
                <div className="container" style={{ padding: '0 5%', display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 400px' }}>
                        <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '3px', border: '1px solid rgba(240, 232, 232, 1)', padding: '8px 20px', borderRadius: '50px', fontWeight: 500, display: 'inline-block', marginBottom: '2rem', color: 'white' }}>INVESTOR RELATIONS</span>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: 600, lineHeight: '1.1', fontFamily: 'Outfit, sans-serif', marginBottom: '2rem', color: 'white' }}>
                            Strategic Capital<br />Deployment
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '3rem', maxWidth: '500px' }}>
                            Partner with Monexa groups for high-yield structural assets. Our institutional advisory team provides transparent, data-driven frameworks for portfolio diversification.
                        </p>
                        <Link to="/invest" style={{ display: 'inline-flex', alignItems: 'center', gap: '15px', backgroundColor: 'white', color: 'var(--theme-primary)', padding: '1rem 2.5rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', letterSpacing: '1px', textTransform: 'uppercase', transition: 'all 0.3s' }}>
                            Explore Investment Plans <FaArrowRight />
                        </Link>
                    </div>
                    <div style={{ flex: '1 1 400px', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: '-15px', left: '-15px', right: '15px', bottom: '15px', border: '2px solid rgba(233, 228, 228, 0)', borderRadius: '12px' }}></div>
                        <img src="https://i.pinimg.com/736x/46/83/01/46830197b1eae7b96897efa5583efa77.jpg?q=80&w=2071&auto=format&fit=crop" alt="Investor Relations" style={{ width: '100%', height: '450px', objectFit: 'cover', borderRadius: '12px', position: 'relative', zIndex: 2 }} />
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS SECTION */}
            <section style={{ padding: '8rem 0', backgroundColor: 'var(--theme-bg)' }}>
                <div className="container" style={{ padding: '0 5%' }}>
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '3px', border: '1px solid rgba(212, 175, 55, 0.2)', padding: '8px 20px', borderRadius: '50px', fontWeight: 500, display: 'inline-block', marginBottom: '1.5rem', color: 'var(--theme-accent)' }}>TESTIMONIALS</span>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: 600, margin: 0, fontFamily: 'Outfit, sans-serif', color: 'var(--theme-primary)' }}>What Our Clients Say</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
                        {[
                            { name: 'Sarah Jenkins', role: 'Property Investor', text: 'Monexa provided an unparalleled level of service. Their transparency and meticulous attention to structural integrity is truly world-class.' },
                            { name: 'David Lee', role: 'CEO, Nexus Corp', text: 'Our commercial lease through Monexa was handled flawlessly. They understand the exact needs of modern institutional clients.' },
                            { name: 'Aisha Rahman', role: 'Homeowner', text: 'From the initial consult to handing over the keys, the journey was incredibly smooth. They donâ€™t just build homes, they build trust.' }
                        ].map((test, i) => (
                            <motion.div key={i} whileHover={{ y: -10 }} style={{ backgroundColor: 'var(--theme-card)', padding: '3rem', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.1)', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.8)' }}>
                                <div style={{ color: 'var(--theme-accent)', fontSize: '5rem', position: 'absolute', top: '-10px', right: '30px', opacity: 0.1, fontFamily: 'serif', lineHeight: 1 }}>"</div>
                                <div style={{ display: 'flex', gap: '4px', color: 'var(--theme-accent)', marginBottom: '1.5rem' }}>
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </div>
                                <p style={{ fontSize: '1.05rem', color: 'var(--theme-text-muted)', lineHeight: 1.8, marginBottom: '2rem', fontStyle: 'italic' }}>"{test.text}"</p>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--theme-primary)', margin: '0 0 4px 0', fontFamily: 'Outfit, sans-serif' }}>{test.name}</h4>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--theme-text-muted)' }}>{test.role}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EMI CALCULATOR CTA */}
            <section style={{ padding: '6rem 0', backgroundColor: 'var(--theme-bg)' }}>
                <div className="container">
                    <div style={{ backgroundColor: 'var(--theme-card)', borderRadius: '16px', padding: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', boxShadow: '0 10px 40px rgba(0,0,0,0.8)', border: '1px solid rgba(212, 175, 55, 0.1)' }}>
                        <div style={{ flex: '1 1 500px' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--theme-primary)', margin: '0 0 1rem 0', fontFamily: 'Outfit, sans-serif' }}>Plan Your Investment</h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--theme-text-muted)', margin: 0, lineHeight: 1.6, maxWidth: '600px' }}>
                                Use our advanced EMI Calculator to accurately forecast your monthly commitments. Tailor your tenure, interest rates, and principal amounts seamlessly.
                            </p>
                        </div>
                        <div>
                            <Link to="/emi-calculator" style={{ display: 'inline-flex', alignItems: 'center', gap: '15px', backgroundColor: 'var(--theme-primary)', color: 'var(--theme-text-inverse)', padding: '1.2rem 3rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', transition: 'all 0.3s', boxShadow: '0 4px 15px rgba(212, 175, 55, 0.15)' }}>
                                Calculate EMI Now <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
