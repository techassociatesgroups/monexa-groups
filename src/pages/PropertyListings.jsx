import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// 1. DATA GENERATION (Must be outside or before the component)
const generateDummyData = () => {
    const data = [];
    const photoIds = [
        "1545324418-cc1a3fa10c00", "1512915922686-57c11dde9b6b", "1449844908441-8829872d2607", "1486406146926-c627a92ad1ab"
    ];
    let idCounter = 0;
    const countryCounts = {
        'India': 12, 'Malaysia': 6, 'Singapore': 6, 'Dubai': 9, 'Hong Kong': 3
    };
    const typesList = ['Villa', 'Apartment', 'Commercial', 'Layout'];

    Object.entries(countryCounts).forEach(([country, targetCount]) => {
        for (let i = 0; i < targetCount; i++) {
            const type = typesList[i % typesList.length];
            data.push({
                id: idCounter + 1,
                name: `${country} ${type} Prestige ${i + 1}`,
                location: `Prime Location, ${country}`,
                category: country,
                type: type,
                price: type === 'Commercial' ? 'Corporate Asset' : 'Premium Pricing',
                img: `https://images.unsplash.com/photo-${photoIds[idCounter % photoIds.length]}?auto=format&fit=crop&w=800&q=80`
            });
            idCounter++;
        }
    });
    return data;
};

const allProperties = generateDummyData();

// 2. COMPONENT
const PropertyListings = () => {
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
        <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '5rem', overflowX: 'hidden' }}>

            {/* HERO */}
            <div style={{ padding: '8rem 1.5rem 4rem 1.5rem', textAlign: 'center', backgroundColor: '#1e293b', color: 'white' }}>
                <h1 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', marginBottom: '1.5rem', fontWeight: 700 }}>
                    {activeCategory} Developments
                </h1>
                <p style={{ maxWidth: '700px', margin: '0 auto', opacity: 0.8 }}>
                    A curated selection of high-yield structural assets across our global grid.
                </p>
            </div>

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>

                {/* Categories (Horizontal Scroll on Mobile) */}
                <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '2.5rem', overflowX: 'auto', paddingBottom: '10px', scrollbarWidth: 'none' }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => { setActiveCategory(cat); setActiveType('All'); }}
                            style={{
                                padding: '0.7rem 1.8rem',
                                borderRadius: '50px',
                                border: '1px solid ' + (activeCategory === cat ? '#C5A059' : '#e2e8f0'),
                                backgroundColor: activeCategory === cat ? '#C5A059' : 'white',
                                color: activeCategory === cat ? 'white' : '#64748b',
                                whiteSpace: 'nowrap',
                                cursor: 'pointer',
                                transition: '0.3s'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Sub-Filter Types (Horizontal Scroll on Mobile) */}
                <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', borderBottom: '1px solid #e2e8f0', overflowX: 'auto', paddingBottom: '1rem', scrollbarWidth: 'none' }}>
                    {types.map(type => (
                        <button
                            key={type}
                            onClick={() => setActiveType(type)}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: activeType === type ? '#1e293b' : '#94a3b8',
                                fontSize: '0.9rem',
                                fontWeight: activeType === type ? 700 : 500,
                                whiteSpace: 'nowrap',
                                cursor: 'pointer',
                                position: 'relative',
                                padding: '0 0.5rem'
                            }}
                        >
                            {type}
                            {activeType === type && (
                                <motion.div layoutId="underline" style={{ position: 'absolute', bottom: '-1.1rem', left: 0, right: 0, height: '3px', background: '#C5A059' }} />
                            )}
                        </button>
                    ))}
                </div>

                {/* Property Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                    <AnimatePresence mode="popLayout">
                        {filteredProperties.map((prop) => (
                            <motion.div
                                key={prop.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            >
                                <div style={{ height: '240px', overflow: 'hidden' }}>
                                    <img src={prop.img} alt={prop.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ padding: '1.5rem' }}>
                                    <span style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>{prop.location}</span>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0.5rem 0 1.5rem 0' }}>{prop.name}</h3>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
                                        <span style={{ color: '#C5A059', fontWeight: 700 }}>{prop.price}</span>
                                        <Link to="/contact" style={{ color: '#1e293b', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem' }}>
                                            Enquire <FaArrowRight style={{ marginLeft: '5px' }} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default PropertyListings;