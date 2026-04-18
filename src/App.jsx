import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import PropertyListings from './pages/PropertyListings';
import Services from './pages/Services';
import InvestorRelations from './pages/InvestorRelations';
import InvestEnquiry from './pages/InvestEnquiry';
import ContactUs from './pages/ContactUs';
import ThankYou from './pages/ThankYou';
import EmiCalculator from './pages/EmiCalculator';
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
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
