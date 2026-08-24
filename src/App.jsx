import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Booking from './pages/Booking';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#151412] text-[#F7F3EC] font-sans relative selection:bg-[#C6A66B] selection:text-[#151412]">
        
        {/* Custom Desktop Cursor */}
        <CustomCursor />

        {/* Global Sticky Navbar */}
        <Navbar />

        {/* Page Routes */}
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>

        {/* Reusable Global Floating WhatsApp Button */}
        <FloatingWhatsAppButton />

        {/* Reusable Global Footer */}
        <Footer />

      </div>
    </Router>
  );
}
