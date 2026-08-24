import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Compass } from 'lucide-react';
import { animateHero } from '../animations/gsap';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { heroConfig } from '../config/hero';

export default function Hero({ onOpenBooking }) {
  const imageRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    animateHero({
      imageRef,
      eyebrowRef,
      headingRef,
      descRef,
      buttonsRef,
      scrollRef,
    });
  }, []);

  const handleWhatsAppBook = () => {
    const url = getWhatsAppUrl("Hello Ahava Luxury Spa, I would like to book a luxury treatment experience.");
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#151412] pt-28 sm:pt-32 pb-16 lg:pb-24"
    >
      {/* Background Spa Sanctuary Photography */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={imageRef}
          src={heroConfig.image}
          onError={(e) => {
            e.target.src = heroConfig.fallbackImage;
          }}
          alt="Ahava Luxury Spa Sanctuary Atmosphere"
          className="w-full h-full object-cover object-center transform scale-[1.05] filter brightness-[0.92] contrast-[1.02]"
        />
        
        {/* Subtle Layered Overlay: Light Vignette Gradient for Text Contrast, 70% Right Open */}
        <div className="absolute inset-0 bg-[#151412]/20 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#151412]/90 via-[#151412]/50 to-transparent z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#151412] via-transparent to-[#151412]/40 z-0"></div>
      </div>

      {/* Editorial Left-Aligned Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 flex flex-col items-start justify-center pt-8 sm:pt-12 pb-12">
        
        <div className="max-w-[620px] text-left">
          {/* Eyebrow Label */}
          <div ref={eyebrowRef} className="opacity-0 mb-4 flex items-center gap-3">
            <span className="w-6 h-[1px] bg-[#C6A66B]"></span>
            <span className="text-[#C6A66B] text-xs font-sans tracking-[0.3em] uppercase font-medium">
              {heroConfig.eyebrow}
            </span>
          </div>

          {/* Controlled Editorial Left-Aligned Heading */}
          <h1
            ref={headingRef}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] tracking-tight leading-[1.08] uppercase font-light mb-6 max-w-[600px]"
          >
            <span className="hero-line block opacity-0 text-[#F7F3EC]">
              {heroConfig.titleLineOne}
            </span>
            <span className="hero-line block opacity-0 text-[#C6A66B] italic font-normal">
              {heroConfig.titleLineTwo}
            </span>
          </h1>

          {/* Short Supporting Description (Max 450px width) */}
          <p
            ref={descRef}
            className="opacity-0 font-sans text-base sm:text-lg text-[#E8DED0]/85 max-w-[450px] font-light leading-relaxed mb-8 tracking-wide"
          >
            {heroConfig.description}
          </p>

          {/* Action CTAs */}
          <div
            ref={buttonsRef}
            className="opacity-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            {/* Primary CTA: Champagne / Gold */}
            <button
              onClick={handleWhatsAppBook}
              className="px-7 sm:px-8 py-3.5 sm:py-4 bg-[#C6A66B] text-[#151412] text-xs font-sans uppercase tracking-widest font-semibold hover:bg-[#d6b77c] transition-all duration-300 shadow-luxury flex items-center justify-center gap-3 rounded-sm group whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 shrink-0 transition-transform group-hover:scale-105 text-[#151412]" />
              <span>BOOK ON WHATSAPP</span>
            </button>

            {/* Secondary CTA: Outlined Transparent */}
            <Link
              to="/services"
              className="px-7 sm:px-8 py-3.5 sm:py-4 border border-[#C6A66B]/50 hover:border-[#C6A66B] text-[#F7F3EC] hover:text-[#C6A66B] text-xs font-sans uppercase tracking-widest font-medium transition-all duration-300 bg-[#151412]/30 backdrop-blur-xs flex items-center justify-center gap-3 rounded-sm group whitespace-nowrap"
            >
              <Compass className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:rotate-45" />
              <span>EXPLORE TREATMENTS</span>
            </Link>
          </div>
        </div>

      </div>

      {/* Minimal Left-Bottom Scroll Indicator */}
      <div
        ref={scrollRef}
        onClick={() => {
          const nextSec = document.querySelector('section:nth-of-type(2)');
          if (nextSec) nextSec.scrollIntoView({ behavior: 'smooth' });
        }}
        className="opacity-0 absolute bottom-6 left-6 sm:left-10 lg:left-16 xl:left-24 flex items-center gap-3 cursor-pointer z-10 group"
      >
        <span className="w-8 h-[1px] bg-[#C6A66B]/60 group-hover:w-12 transition-all duration-300"></span>
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.35em] text-[#C6A66B]/80 font-sans group-hover:text-[#C6A66B] transition-colors">
          SCROLL TO EXPLORE
        </span>
      </div>
    </section>
  );
}
