import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
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
      <Analytics />
      <div className="min-h-screen bg-[#FAF6F0] text-[#2C2621] font-sans relative selection:bg-[#C6A66B] selection:text-[#FAF6F0]">
        
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
