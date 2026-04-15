import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { FaHardHat, FaCity, FaTree, FaPencilRuler, FaCouch, FaHome, FaUsers, FaDumbbell, FaSwimmer, FaUtensils, FaGraduationCap, FaBriefcase, FaDesktop, FaShieldAlt, FaParking, FaLeaf } from 'react-icons/fa';

const Services = () => {
    const location = useLocation();
    const [selectedService, setSelectedService] = useState(location.state?.selectedService || 'Construction');

    useEffect(() => {
        if (location.state?.selectedService) {
            setSelectedService(location.state.selectedService);
        }
    }, [location.state?.selectedService]);

    const services = [
        {
            name: 'Construction',
            icon: <FaHardHat />,
            desc: 'End-to-end construction services from foundation to finishing, using modern techniques and quality materials. Our construction team handles residential towers, commercial complexes, and infrastructure projects with precision and adherence to international safety standards.',
            features: ['Structural Engineering', 'Quality Assurance', 'Timely Delivery', 'Green Building Practices'],
            img: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop'
        },
        {
            name: 'Real Estate',
            icon: <FaCity />,
            desc: 'Comprehensive real estate solutions including property development, sales, and property management across residential, commercial, and retail segments. We help you find or build the perfect property.',
            features: ['Property Development', 'Sales & Marketing', 'Property Management', 'Legal Support'],
            img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop'
        },
        {
            name: 'Gated Community',
            icon: <FaTree />,
            desc: 'Premium gated community developments with world-class amenities, 24/7 security, and thoughtfully designed common spaces. Our communities foster a sense of belonging while ensuring privacy.',
            features: ['24/7 Security', 'Clubhouse & Recreation', 'Landscaped Gardens', 'Community Events'],
            img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2000&auto=format&fit=crop'
        },
        {
            name: 'Architecture',
            icon: <FaPencilRuler />,
            desc: 'Innovative architectural design that combines aesthetic appeal with functional efficiency. Our architects create sustainable and iconic structures tailored to user needs.',
            features: ['Urban Planning', 'Interior Architecture', 'Sustainable Design', '3D Visualization'],
            img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop'
        },
        {
            name: 'Interiors',
            icon: <FaCouch />,
            desc: 'Bespoke interior design services for residential and commercial spaces. From modern minimalist to classic luxury, our designers bring your vision to life with meticulous attention to detail.',
            features: ['Space Planning', 'Material Selection', 'Custom Furniture', 'Lighting Design'],
            img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop'
        },
        {
            name: 'Builders',
            icon: <FaHome />,
            desc: 'As trusted builders with over two decades of experience, we execute projects of all scales with commitment to quality, safety, and on-time delivery. Our skilled workforce ensures every project meets global standards.',
            features: ['Skilled Workforce', 'Modern Equipment', 'Safety Compliance', 'Project Management'],
            img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop'
        }
    ];

    const amenities = [
        { title: 'Co-Working Space', desc: 'Modern shared workspaces within residential complexes', icon: <FaUsers /> },
        { title: 'Gymnasium', desc: 'State-of-the-art fitness centers with professional equipment', icon: <FaDumbbell /> },
        { title: 'Swimming Pool', desc: 'Temperature-controlled pools with lounging areas', icon: <FaSwimmer /> },
        { title: 'Restaurants & Cafés', desc: 'In-house dining options for residents and guests', icon: <FaUtensils /> },
        { title: 'Near Schools', desc: 'Proximity to reputed educational institutions', icon: <FaGraduationCap /> },
        { title: 'Near Office Areas', desc: 'Strategic locations close to business districts', icon: <FaBriefcase /> },
        { title: 'Smart Home Tech', desc: 'IoT-enabled homes with automation systems', icon: <FaDesktop /> },
        { title: '24/7 Security', desc: 'CCTV surveillance and gated access control', icon: <FaShieldAlt /> },
        { title: 'Ample Parking', desc: 'Covered and open parking with EV charging', icon: <FaParking /> },
        { title: 'Green Spaces', desc: 'Parks, jogging tracks, and meditation zones', icon: <FaLeaf /> }
    ];

    return (
        <div className="page-transition" style={{ backgroundColor: 'var(--theme-card)', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>

            {/* HERO SECTION */}
            <section style={{ backgroundColor: 'var(--theme-primary)', color: 'white', padding: '10rem 2rem 6rem 2rem', textAlign: 'center' }}>
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        style={{ fontSize: '3.5rem', fontWeight: 600, marginBottom: '1.5rem', fontFamily: 'Outfit, sans-serif', color: 'white' }}
                    >
                        Our Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}
                    >
                        As a premier multinational real estate conglomerate, we offer elite end-to-end solutions tailored to meet the highest international standards of structural integrity and aesthetic grace.
                    </motion.p>
                </div>
            </section>




            {/* INTERACTIVE SERVICE SELECTION */}
            <section style={{ padding: '6rem 2rem' }}>
                <div className="container">
                    {/* Filter Pills */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
                        {services.map(service => (
                            <button
                                key={service.name}
                                onClick={() => setSelectedService(service.name)}
                                style={{
                                    padding: '0.8rem 1.8rem',
                                    borderRadius: '50px',
                                    border: '1px solid ' + (selectedService === service.name ? 'var(--theme-primary)' : 'rgba(0,0,0,0.1)'),
                                    backgroundColor: selectedService === service.name ? 'var(--theme-primary)' : 'white',
                                    color: selectedService === service.name ? 'white' : '#555',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    fontSize: '0.95rem',
                                    fontWeight: 500,
                                    transition: 'all 0.3s ease',
                                    boxShadow: selectedService === service.name ? '0 4px 15px rgba(26,86,166,0.2)' : 'none',
                                    fontFamily: 'Inter, sans-serif'
                                }}
                            >
                                <span style={{ fontSize: '1.2rem' }}>{service.icon}</span>
                                {service.name}
                            </button>
                        ))}
                    </div>

                    {/* Service Details Card */}
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <AnimatePresence mode="wait">
                            {services.filter(s => s.name === selectedService).map(s => (
                                <motion.div
                                    key={s.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                    style={{
                                        backgroundColor: 'white',
                                        borderRadius: '12px',
                                        boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                                        border: '1px solid rgba(0,0,0,0.05)',
                                        display: 'flex',
                                        overflow: 'hidden',
                                        flexWrap: 'wrap'
                                    }}
                                >
                                    <div style={{ flex: '1 1 500px', padding: '4rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                                            <div style={{ width: '60px', height: '60px', backgroundColor: '#F0F4F8', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', color: 'var(--theme-primary)' }}>
                                                {s.icon}
                                            </div>
                                            <h2 style={{ fontSize: '2.4rem', fontWeight: 600, color: 'var(--theme-text-main)', fontFamily: 'Outfit, sans-serif' }}>{s.name}</h2>
                                        </div>
                                        <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-muted)', lineHeight: 1.8, marginBottom: '3rem' }}>
                                            {s.desc}
                                        </p>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                            {s.features.map((feat, i) => (
                                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--theme-text-muted)', fontSize: '0.95rem' }}>
                                                    <span style={{ color: 'var(--theme-accent)', fontWeight: 900 }}>&bull;</span>
                                                    {feat}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div style={{ flex: '1 1 400px', minHeight: '350px' }}>
                                        <img src={s.img} alt={s.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* AMENITIES SECTION */}
            <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--theme-bg)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5.5rem' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: 600, color: 'var(--theme-text-main)', marginBottom: '1.5rem' }}>Amenities We Provide</h2>
                        <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--theme-text-muted)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                            Every Monexa groups project comes with carefully curated amenities designed for modern living.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {amenities.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                style={{
                                    backgroundColor: 'white',
                                    padding: '2.5rem',
                                    borderRadius: '8px',
                                    textAlign: 'center',
                                    border: '1px solid rgba(0,0,0,0.03)',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                                }}
                            >
                                <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#1A56A6' }}>{item.icon}</div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--theme-text-main)', marginBottom: '0.8rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--theme-text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
