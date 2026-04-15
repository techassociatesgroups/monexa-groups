import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';

const generateDummyData = () => {
    const data = [];
    const photoIds = [
        "1545324418-cc1a3fa10c00", "1512915922686-57c11dde9b6b", "1449844908441-8829872d2607", "1486406146926-c627a92ad1ab",
        "1582268611958-ebfd161ef9cf", "1613490493576-7fde63acd811", "1564013799919-ab600027ffc6", "1502005097973-2070002e1c9d",
        "1497366216548-37526070297c", "1504307651254-35680f356dfd", "1600596542815-ffad4c1539a9", "1600607687931-cebf004f3645",
        "1600585154340-be6161a56a0c", "1600566753190-17f0baa2a6c3", "1600585153490-76fb20a32601", "1512453979798-5ea266f8880c",
        "1507679799987-c73779587ccf", "1416331108676-a22ccb276e35", "1510698188184-fa1225586616", "1580587771525-78b9dba3b914",
        "1558036117-15d82a90b9b1", "1574362844344-124e396aa4f2", "1479839672679-a464de1ed4c7", "1522708323590-d24dbb6b0267",
        "1480074568708-e7b720bb3f09", "1458245201577-3bccb97a8871", "1464146072230-91cfaa39281bf", "1505843490538-5133c6c7d0e1",
        "1493663281531-bbf2a2cc1439", "1555636222-cae831ea2803", "1422479634994-0994f3876007", "1523408017042-32b0a8eb14ec",
        "1531835553-6112ff5e13d9", "1518780664697-55e1c02abf12", "1553818320-1a1dc5eac91a", "1518738361-b4131b745fb1", "1583847268964-b185b1f0ea2a"
    ];
    let idCounter = 0;
    const countryCounts = {
        'India': 12,
        'Malaysia': 6,
        'Singapore': 6,
        'Dubai': 9,
        'Hong Kong': 3
    };
    const typesList = ['Villa', 'Apartment', 'Commercial', 'Layout'];

    Object.entries(countryCounts).forEach(([country, targetCount]) => {
        for (let i = 0; i < targetCount; i++) {
            const type = typesList[i % typesList.length];
            const safePhotoId = photoIds[idCounter % photoIds.length];
            data.push({
                id: idCounter + 1,
                name: `${country} ${type} Prestige ${i + 1}`,
                location: `Prime Location, ${country}`,
                category: country,
                type: type,
                price: type === 'Commercial' ? 'Corporate Asset' : 'Premium Pricing',
                img: `https://images.unsplash.com/photo-${safePhotoId}?q=80&w=800&auto=format&fit=crop`
            });
            idCounter++;
        }
    });
    return data;
};

const allProperties = generateDummyData();

const PropertyListings = () => {
    // Categories and Type Filters
    const categories = ['India', 'Malaysia', 'Singapore', 'Dubai', 'Hong Kong'];
    const types = ['All', 'Villa', 'Apartment', 'Commercial', 'Layout'];

    const [activeCategory, setActiveCategory] = useState('India');
    const [activeType, setActiveType] = useState('All');

    const filteredProperties = allProperties.filter(p => {
        const categoryMatch = p.category === activeCategory;
        const typeMatch = activeType === 'All' ? true : p.type === activeType;
        return categoryMatch && typeMatch;
    });

    return (
        <div className="page-transition" style={{ backgroundColor: 'var(--theme-bg)', minHeight: '100vh', paddingBottom: '5rem', fontFamily: 'Inter, sans-serif' }}>

            {/* HERO */}
            <div style={{ padding: '10rem 2rem 4rem 2rem', textAlign: 'center', backgroundColor: 'var(--theme-primary)', color: 'white', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--theme-accent)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, display: 'block', marginBottom: '1rem' }}>
                    Institutional Portfolio
                </span>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 600, color: 'white', fontFamily: 'Outfit, sans-serif' }}>
                    {activeCategory} Developments
                </h1>
                <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
                    A curated selection of high-yield structural assets and residential sanctuaries across our global operational grid.
                </p>
            </div>

            <div className="container" style={{ paddingTop: '4rem' }}>

                {/* Category Selector (Top Pill) */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => { setActiveCategory(cat); setActiveType('All'); }}
                            style={{
                                padding: '0.7rem 2rem',
                                borderRadius: '50px',
                                border: '1px solid ' + (activeCategory === cat ? 'var(--theme-primary)' : 'rgba(0,0,0,0.1)'),
                                backgroundColor: activeCategory === cat ? 'var(--theme-primary)' : 'transparent',
                                color: activeCategory === cat ? '#fff' : 'var(--theme-text-muted)',
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                transition: 'all 0.3s'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Sub-Filter (Type Labels) */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '4rem', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '1.5rem' }}>
                    {types.map(type => (
                        <button
                            key={type}
                            onClick={() => setActiveType(type)}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: activeType === type ? 'var(--theme-primary)' : 'var(--theme-text-muted)',
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                fontWeight: activeType === type ? 600 : 400,
                                position: 'relative',
                                padding: '0 0.5rem'
                            }}
                        >
                            {type}
                            {activeType === type && (
                                <motion.div layoutId="underline" style={{ position: 'absolute', bottom: '-1.6rem', left: 0, right: 0, height: '2px', background: 'var(--theme-accent)' }} />
                            )}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid-3" style={{ gap: '2.5rem' }}>
                    <AnimatePresence mode="popLayout">
                        {filteredProperties.map((prop, idx) => (
                            <motion.div
                                key={prop.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                className="glass-panel"
                                style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--theme-card)', borderRadius: '4px', border: '1px solid rgba(0,0,0,0.05)' }}
                            >
                                <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                                    <img src={prop.img} alt={prop.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                        onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                                        onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                                    />
                                    <div style={{ position: 'absolute', top: '20px', left: '20px', backgroundColor: 'rgba(26,43,76,0.9)', color: '#fff', padding: '6px 14px', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
                                        {prop.type}
                                    </div>
                                </div>

                                <div style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--theme-text-muted)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>{prop.location}</span>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--theme-primary)', marginBottom: '1.5rem' }}>{prop.name}</h3>

                                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                                        <span style={{ color: 'var(--theme-accent)', fontWeight: 600, fontSize: '0.95rem' }}>{prop.price}</span>
                                        <Link to="/contact" style={{ background: 'none', border: 'none', color: 'var(--theme-primary)', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                                            Enquire <FaArrowRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredProperties.length === 0 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '10rem 0' }}>
                        <h3 style={{ color: 'var(--theme-text-muted)', fontWeight: 300, fontSize: '1.5rem' }}>No assets currently listed in this category.</h3>
                        <p style={{ marginTop: '1rem', color: '#999' }}>Please contact our global desk for private off-market opportunities.</p>
                    </motion.div>
                )}

            </div>

         
        </div>
    );
};

export default PropertyListings;


