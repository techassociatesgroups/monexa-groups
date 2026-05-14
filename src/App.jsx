import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { Suspense, lazy, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

// Lazy load route components
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const PropertyListings = lazy(() => import('./pages/PropertyListings'));
const Services = lazy(() => import('./pages/Services'));
const InvestorRelations = lazy(() => import('./pages/InvestorRelations'));
const InvestEnquiry = lazy(() => import('./pages/InvestEnquiry'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const EmiCalculator = lazy(() => import('./pages/EmiCalculator'));

import './index.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main className="main-content">
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin"></div></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/India" element={<PropertyListings />} />
              <Route path="/upcoming" element={<PropertyListings />} />
              <Route path="/Malaysia" element={<PropertyListings />} />
              <Route path="/commercial" element={<PropertyListings />} />
              <Route path="/services" element={<Services />} />
              <Route path="/invest" element={<InvestorRelations />} />
              <Route path="/invest/enquiry" element={<InvestEnquiry />} />
              <Route path="/nri" element={<InvestorRelations />} />
              <Route path="/emi-calculator" element={<EmiCalculator />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
