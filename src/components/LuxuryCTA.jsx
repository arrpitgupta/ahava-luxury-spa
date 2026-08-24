import React, { useEffect, useRef } from 'react';
import { Calendar, PhoneCall } from 'lucide-react';
import { animateFadeUp } from '../animations/gsap';

export default function LuxuryCTA({ onOpenBooking }) {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      animateFadeUp(contentRef.current, { y: 40, duration: 1.0 });
    }
  }, []);

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSec = document.querySelector('#contact');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-28 lg:py-40 bg-[#151412] text-[#F7F3EC] overflow-hidden border-b border-[#C6A66B]/20 flex items-center justify-center text-center"
    >
      {/* Background Photography Texture */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury Spa Atmosphere Background Texture"
          className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.1]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151412] via-[#151412]/60 to-[#151412]"></div>
        <div className="absolute inset-0 bg-radial-luxury opacity-80"></div>
      </div>

      {/* Decorative Gold Framing */}
      <div className="absolute inset-8 sm:inset-12 border border-[#C6A66B]/20 pointer-events-none"></div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 py-8 flex flex-col items-center justify-center"
      >
        <span className="text-[#C6A66B] text-xs font-sans tracking-[0.35em] uppercase font-medium mb-6">
          RESERVE YOUR SANCTUARY TIME
        </span>

        <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl uppercase tracking-wider text-[#F7F3EC] leading-[0.95] font-light mb-8">
          YOUR MOMENT <br />
          <span className="italic text-gold-gradient font-normal">AWAITS.</span>
        </h2>

        <p className="font-sans text-base sm:text-lg text-[#E8DED0]/90 font-light leading-relaxed mb-12 max-w-xl">
          Step away from the everyday and make time for yourself. Experience Ahava Luxury Spa.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-10 py-4 bg-[#C6A66B] text-[#151412] text-xs font-sans uppercase tracking-ultra font-semibold hover:bg-[#F7F3EC] transition-all duration-500 shadow-luxury flex items-center justify-center gap-3 group"
          >
            <Calendar className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>BOOK YOUR EXPERIENCE</span>
          </button>

          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="w-full sm:w-auto px-10 py-4 border border-[#C6A66B]/60 text-[#F7F3EC] hover:text-[#C6A66B] hover:border-[#C6A66B] text-xs font-sans uppercase tracking-ultra font-medium transition-all duration-500 bg-[#151412]/40 backdrop-blur-sm flex items-center justify-center gap-3"
          >
            <PhoneCall className="w-4 h-4" />
            <span>CONTACT AHAVA</span>
          </a>
        </div>
      </div>
    </section>
  );
}
