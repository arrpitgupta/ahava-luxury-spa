import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function FloatingWhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Reveal after 1 second for a quiet, elegant entrance
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const url = getWhatsAppUrl("Hello Ahava Luxury Spa, I would like to inquire about treatments and availability.");
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <aside
      aria-label="Floating WhatsApp Desk"
      className={`fixed bottom-6 right-6 z-40 transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <button
        onClick={handleWhatsAppClick}
        aria-label="Chat with Ahava Luxury Spa on WhatsApp"
        className="group flex items-center gap-2.5 px-3.5 py-3 sm:px-4 sm:py-3 bg-[#FFFDF9] border border-[#25D366]/60 text-[#2C2621] rounded-full shadow-luxury hover:bg-[#25D366] hover:text-[#FAF6F0] hover:border-[#25D366] transition-all duration-400 focus:outline-none"
      >
        <div className="relative flex items-center justify-center">
          <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:text-[#FAF6F0] transition-colors fill-current" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#25D366]"></span>
        </div>

        <span className="hidden md:inline-block font-sans text-[11px] uppercase tracking-widest font-semibold text-[#2C2621] group-hover:text-[#FAF6F0] transition-colors pr-1">
          CHAT WITH US
        </span>
      </button>
    </aside>
  );
}
