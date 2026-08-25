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
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95 pointer-events-none'
      }`}
    >
      <button
        onClick={handleWhatsAppClick}
        aria-label="Chat with Ahava Luxury Spa on WhatsApp"
        className="group flex items-center gap-2.5 sm:gap-3 p-3 sm:px-5 sm:py-3.5 bg-[#1C1A17]/95 border border-[#C6A66B]/60 hover:border-[#25D366] text-[#F7F3EC] rounded-full shadow-2xl backdrop-blur-md hover:bg-[#151412] transition-all duration-400 focus:outline-none hover:shadow-gold-glow"
      >
        <div className="relative flex items-center justify-center">
          <div className="p-1 sm:p-1.5 bg-[#25D366]/20 rounded-full border border-[#25D366]/40 group-hover:bg-[#25D366] transition-all duration-300">
            <MessageCircle className="w-5 h-5 sm:w-4 sm:h-4 text-[#25D366] group-hover:text-[#151412] transition-colors fill-current" />
          </div>
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
        </div>

        <span className="hidden sm:inline-block font-sans text-[11px] uppercase tracking-widest font-semibold text-[#F7F3EC] group-hover:text-[#C6A66B] transition-colors pr-1">
          CHAT WITH US
        </span>
      </button>
    </aside>
  );
}


