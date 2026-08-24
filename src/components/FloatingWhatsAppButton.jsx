import React, { useEffect, useRef } from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { animatePulse } from '../animations/gsap';

export default function FloatingWhatsAppButton() {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      animatePulse(buttonRef.current);
    }
  }, []);

  const handleWhatsAppClick = () => {
    const url = getWhatsAppUrl("Hello Ahava Luxury Spa, I would like to inquire about treatments and availability.");
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      ref={buttonRef}
      className="fixed bottom-6 right-6 z-40 flex items-center group cursor-pointer"
      onClick={handleWhatsAppClick}
      aria-label="Chat with Ahava Luxury Spa on WhatsApp"
    >
      <div className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] text-[#151412] rounded-full shadow-luxury hover:bg-[#20ba5a] transition-all duration-300 border border-white/20">
        <MessageCircle className="w-5 h-5 fill-[#151412] text-[#25D366]" />
        <span className="hidden sm:inline-block font-sans text-xs uppercase tracking-widest font-semibold text-[#151412]">
          Chat with us
        </span>
      </div>

      {/* Subtle Glowing Pulse Ring */}
      <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 -z-10 animate-ping opacity-40"></span>
    </div>
  );
}
