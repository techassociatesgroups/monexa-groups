import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import {
  FaHardHat,
  FaCity,
  FaTree,
  FaPencilRuler,
  FaCouch,
  FaHome,
  FaUsers,
  FaDumbbell,
  FaSwimmer,
  FaUtensils,
  FaGraduationCap,
  FaBriefcase,
  FaDesktop,
  FaShieldAlt,
  FaParking,
  FaLeaf,
} from "react-icons/fa";

const Services = () => {
  const location = useLocation();

  const [selectedService, setSelectedService] = useState(
    location.state?.selectedService || "Construction"
  );

  useEffect(() => {
    if (location.state?.selectedService) {
      setSelectedService(location.state.selectedService);
    }
  }, [location.state?.selectedService]);

  const services = [
    {
      name: "Construction",
      icon: <FaHardHat />,
      desc: "End-to-end construction services from foundation to finishing using premium materials and global standards.",
      features: [
        "Structural Engineering",
        "Quality Assurance",
        "Timely Delivery",
        "Green Building",
      ],
      img: "/images/monexa ventures 14.jpg",
    },
    {
      name: "Real Estate",
      icon: <FaCity />,
      desc: "Comprehensive property development, sales and management solutions.",
      features: [
        "Property Development",
        "Sales & Marketing",
        "Property Management",
        "Legal Support",
      ],
      img: "/images/monexa ventures 15.jpg",
    },
    {
      name: "Gated Community",
      icon: <FaTree />,
      desc: "Luxury gated communities with world-class amenities and privacy.",
      features: [
        "24/7 Security",
        "Clubhouse",
        "Gardens",
        "Community Living",
      ],
      img: "/images/monexa ventures 16.jpg",
    },
    {
      name: "Architecture",
      icon: <FaPencilRuler />,
      desc: "Innovative architecture combining elegance and functionality.",
      features: [
        "Urban Planning",
        "Interior Architecture",
        "Sustainable Design",
        "3D Visualization",
      ],
      img: "/images/monexa ventures 17.jpg",
    },
    {
      name: "Interiors",
      icon: <FaCouch />,
      desc: "Luxury interior design for homes and commercial spaces.",
      features: [
        "Space Planning",
        "Custom Furniture",
        "Lighting Design",
        "Material Selection",
      ],
      img: "/images/monexa ventures 18.jpg",
    },
    {
      name: "Builders",
      icon: <FaHome />,
      desc: "Trusted builders delivering high-quality projects on time.",
      features: [
        "Skilled Workforce",
        "Modern Equipment",
        "Safety Standards",
        "Project Management",
      ],
      img: "/images/monexa ventures 1.jpg",
    },
  ];

  const amenities = [
    { title: "Co-Working Space", icon: <FaUsers /> },
    { title: "Gymnasium", icon: <FaDumbbell /> },
    { title: "Swimming Pool", icon: <FaSwimmer /> },
    { title: "Restaurants", icon: <FaUtensils /> },
    { title: "Near Schools", icon: <FaGraduationCap /> },
    { title: "Business Hubs", icon: <FaBriefcase /> },
    { title: "Smart Home Tech", icon: <FaDesktop /> },
    { title: "24/7 Security", icon: <FaShieldAlt /> },
    { title: "Ample Parking", icon: <FaParking /> },
    { title: "Green Spaces", icon: <FaLeaf /> },
  ];

  const active = services.find((item) => item.name === selectedService);

  return (
    <div className="overflow-hidden bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-[#0F2A44] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold sm:text-5xl lg:text-6xl"
          >
            Our Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-3xl text-base text-white/80 sm:text-lg"
          >
            Elite end-to-end real estate and construction solutions crafted for
            modern global standards.
          </motion.p>
        </div>
      </section>

      {/* SERVICE FILTER */}
      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {services.map((item) => (
              <button
                key={item.name}
                onClick={() => setSelectedService(item.name)}
                className={`flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all
                ${
                  selectedService === item.name
                    ? "bg-[#0F2A44] text-white shadow-lg"
                    : "glass-card text-slate-700"
                }`}
              >
                {item.icon}
                {item.name}
              </button>
            ))}
          </div>

          {/* SERVICE DETAIL */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="grid overflow-hidden rounded-3xl glass-card lg:grid-cols-2"
            >
              <div className="p-6 sm:p-8 lg:p-12">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-2xl text-[#0F2A44]">
                    {active.icon}
                  </div>

                  <h2 className="text-2xl font-bold sm:text-4xl">
                    {active.name}
                  </h2>
                </div>

                <p className="mt-6 leading-8 text-slate-600">
                  {active.desc}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {active.features.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-sm text-slate-700"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#1E88E5]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-[280px] sm:h-[380px] lg:h-full">
                <img
                  src={active.img}
                  alt={active.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="bg-slate-50 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Amenities We Provide
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Every Monexa project comes with carefully curated modern lifestyle
              amenities.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="rounded-2xl glass-card p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-2xl text-[#0F2A44]">
                  {item.icon}
                </div>

                <h3 className="font-semibold">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;