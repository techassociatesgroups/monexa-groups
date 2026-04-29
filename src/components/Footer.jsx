import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-white">

      {/* TOP HERO CTA */}
      <section className="relative overflow-hidden px-4 pt-20 pb-40 text-center sm:px-6 lg:px-8">

        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.35]"
          style={{
            backgroundImage: 'url("/images/monexa ventures 1.jpg")',
          }}
        />

        <div className="absolute inset-0 bg-[#0F2A44]/70" />

        <div className="relative z-10 mx-auto max-w-4xl">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
          >
            Your dream home awaits
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-2xl leading-8 text-white/80"
          >
            Whether you're exploring our homes or envisioning something custom,
            we're here to bring your dream to life.
          </motion.p>

          <motion.a
            href="https://wa.me/916385303666?text=I%20would%20like%20to%20get%20a%20free%20quote"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            className="mx-auto mt-10 flex h-28 w-28 items-center justify-center rounded-full bg-[#C5A059] text-center text-sm font-semibold text-white shadow-2xl sm:h-36 sm:w-36"
          >
            Connect
            <br />
            With Us
          </motion.a>
        </div>
      </section>

      {/* MAIN FOOTER CARD */}
      <section className="relative z-20 -mt-24 px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-white p-8 shadow-2xl sm:p-10 lg:p-14">

          <div className="grid gap-10 lg:grid-cols-4">

            {/* Brand */}
            <div className="lg:col-span-1">
              <Link to="/">
                <h2 className="text-3xl font-bold text-[#0F2A44]">
                  MONEXA
                  <span className="ml-1 text-[#C5A059]">groups</span>
                </h2>
              </Link>

              <p className="mt-5 leading-8 text-slate-500">
                We create transformative spaces that inspire, innovate and endure.
              </p>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-5 text-sm font-bold uppercase tracking-[3px] text-[#C5A059]">
                Company
              </h4>

              <div className="space-y-3 text-slate-600">
                <Link to="/about" className="block hover:text-[#C5A059]">About</Link>
                <Link to="/services" className="block hover:text-[#C5A059]">Services</Link>
                <Link to="/invest" className="block hover:text-[#C5A059]">Investor</Link>
                <Link to="/contact" className="block hover:text-[#C5A059]">Contact</Link>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h4 className="mb-5 text-sm font-bold uppercase tracking-[3px] text-[#C5A059]">
                Projects
              </h4>

              <div className="space-y-3 text-slate-600">
                <Link to="/India" className="block hover:text-[#C5A059]">India</Link>
                <Link to="/Malaysia" className="block hover:text-[#C5A059]">Malaysia</Link>
                <Link to="/commercial" className="block hover:text-[#C5A059]">Dubai</Link>
                <Link to="/upcoming" className="block hover:text-[#C5A059]">Singapore</Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-5 text-sm font-bold uppercase tracking-[3px] text-[#C5A059]">
                Contact
              </h4>

              <a
                href="tel:+916385303666"
                className="block text-xl font-bold text-[#0F2A44]"
              >
                +91 63853 03666
              </a>

              <a
                href="mailto:info@monexagroups.in"
                className="mt-3 block text-slate-500"
              >
               info@monexagroups.in
              </a>

              {/* <div className="mt-6 flex gap-4 text-sm font-semibold text-slate-400">
                <span>FB</span>
                <span>IG</span>
                <span>YT</span>
                <span>X</span>
              </div> */}
            </div>
          </div>

          <div className="mt-10 border-t pt-6 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Monexa Groups. All Rights Reserved.
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;