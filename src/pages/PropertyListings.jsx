import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const generateDummyData = () => {
    const data = [];
    const photoIds = [
        '1545324418-cc1a3fa10c00', '1512915922686-57c11dde9b6b', '1449844908441-8829872d2607', '1486406146926-c627a92ad1ab'
    ];
    let idCounter = 0;
    const countryCounts = {
        India: 12, Malaysia: 6, Singapore: 6, Dubai: 9, 'Hong Kong': 3
    };
    const typesList = ['Villa', 'Apartment', 'Commercial', 'Layout'];

    Object.entries(countryCounts).forEach(([country, targetCount]) => {
        for (let i = 0; i < targetCount; i += 1) {
            const type = typesList[i % typesList.length];
            data.push({
                id: idCounter + 1,
                name: `${country} ${type} Prestige ${i + 1}`,
                location: `Prime Location, ${country}`,
                category: country,
                type,
                price: type === 'Commercial' ? 'Corporate Asset' : 'Premium Pricing',
                img: `https://images.unsplash.com/photo-${photoIds[idCounter % photoIds.length]}?auto=format&fit=crop&w=800&q=80`
            });
            idCounter += 1;
        }
    });
    return data;
};

const allProperties = generateDummyData();

const PropertyListings = () => {
    const categories = ['India', 'Malaysia', 'Singapore', 'Dubai', 'Hong Kong'];
    const types = ['All', 'Villa', 'Apartment', 'Commercial', 'Layout'];

    const [activeCategory, setActiveCategory] = useState('India');
    const [activeType, setActiveType] = useState('All');

    const filteredProperties = allProperties.filter((property) => {
        const categoryMatch = property.category === activeCategory;
        const typeMatch = activeType === 'All' ? true : property.type === activeType;
        return categoryMatch && typeMatch;
    });

    return (
        <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '5rem', overflowX: 'hidden' }}>
            <div style={{ padding: '6rem 1.5rem 4rem 1.5rem', textAlign: 'center', backgroundColor: '#1e293b', color: 'white' }}>
                <h1 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', marginBottom: '1.5rem', fontWeight: 700, color: 'white' }}>
                    {activeCategory} Developments
                </h1>
                <p style={{ maxWidth: '700px', margin: '0 auto', opacity: 0.8, color: 'white' }}>
                    A curated selection of high-yield structural assets across our global grid.
                </p>
            </div>

            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem 1rem' }}>
                <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '2.5rem', overflowX: 'auto', paddingBottom: '10px', scrollbarWidth: 'none' }}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => { setActiveCategory(category); setActiveType('All'); }}
                            style={{
                                padding: '0.7rem 1.8rem',
                                borderRadius: '50px',
                                border: `1px solid ${activeCategory === category ? '#C5A059' : '#e2e8f0'}`,
                                backgroundColor: activeCategory === category ? '#C5A059' : 'white',
                                color: activeCategory === category ? 'white' : '#64748b',
                                whiteSpace: 'nowrap',
                                cursor: 'pointer',
                                transition: '0.3s'
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', borderBottom: '1px solid #e2e8f0', overflowX: 'auto', paddingBottom: '1rem', scrollbarWidth: 'none' }}>
                    {types.map((type) => (
                        <button
                            key={type}
                            onClick={() => setActiveType(type)}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: activeType === type ? '#1e293b' : '#494a4bff',
                                fontSize: '0.9rem',
                                fontWeight: activeType === type ? 700 : 500,
                                whiteSpace: 'nowrap',
                                cursor: 'pointer',
                                position: 'relative',
                                padding: '0 0.5rem'
                            }}
                        >
                            {type}
                            {activeType === type ? (
                                <motion.div layoutId="underline" style={{ position: 'absolute', bottom: '-1.1rem', left: 0, right: 0, height: '3px', background: '#C5A059' }} />
                            ) : null}
                        </button>
                    ))}
                </div>

                <div
  className="property-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem'
                    }}
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProperties.map((property) => (
                            <motion.div
                                key={property.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            >
                                <div style={{ height: '240px', overflow: 'hidden' }}>
                                    <img src={property.img} alt={property.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ padding: '1.5rem' }}>
                                    <span style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>{property.location}</span>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0.5rem 0 1.5rem 0' }}>{property.name}</h3>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
                                        <span style={{ color: '#C5A059', fontWeight: 700 }}>{property.price}</span>
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
