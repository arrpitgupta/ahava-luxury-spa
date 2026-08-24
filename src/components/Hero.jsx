import React, { useEffect, useRef } from 'react';
import { ArrowDown, Calendar, Compass } from 'lucide-react';
import { animateHero } from '../animations/gsap';

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

  const handleScrollToServices = (e) => {
    e.preventDefault();
    const servicesSec = document.querySelector('#services');
    if (servicesSec) {
      servicesSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#151412] -mt-20 pt-20"
    >
      {/* Background Image with Dark Luxury Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={imageRef}
          src="https://res.cloudinary.com/e6ehhcen/image/upload/v1787575394/WhatsApp_Image_2026-08-24_at_1.37.52_PM.jpg"
          alt="Ahava Luxury Spa Sanctuary Atmosphere"
          className="w-full h-full object-cover object-center transform scale-110 filter brightness-[0.65]"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#151412] via-[#151412]/40 to-[#151412]/70"></div>
        <div className="absolute inset-0 bg-radial-luxury opacity-60"></div>
      </div>

      {/* Decorative Accent Lines */}
      <div className="absolute top-1/4 left-8 hidden lg:block w-[1px] h-32 bg-gradient-to-b from-transparent via-[#C6A66B]/30 to-transparent"></div>
      <div className="absolute bottom-1/4 right-8 hidden lg:block w-[1px] h-32 bg-gradient-to-b from-transparent via-[#C6A66B]/30 to-transparent"></div>

      {/* Main Content Box */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center justify-center py-20">

        {/* Eyebrow Label */}
        <div ref={eyebrowRef} className="opacity-0 mb-6 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-[#C6A66B]/60 hidden sm:inline-block"></span>
          <span className="text-[#C6A66B] text-xs sm:text-sm font-sans tracking-[0.35em] uppercase font-medium">
            AHAVA LUXURY SPA
          </span>
          <span className="w-8 h-[1px] bg-[#C6A66B]/60 hidden sm:inline-block"></span>
        </div>

        {/* Main Editorial Heading */}
        <h1
          ref={headingRef}
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#F7F3EC] tracking-tight leading-[0.95] uppercase font-light mb-8 max-w-4xl"
        >
          <span className="hero-line block opacity-0">WHERE BEAUTY</span>
          <span className="hero-line block opacity-0 text-gold-gradient italic font-normal">
            MEETS SERENITY
          </span>
        </h1>

        {/* Supporting Description */}
        <p
          ref={descRef}
          className="opacity-0 font-sans text-sm sm:text-base md:text-lg text-[#E8DED0]/85 max-w-2xl font-light leading-relaxed mb-12 tracking-wide"
        >
          Escape the ordinary and enter a world of refined relaxation, restorative treatments and timeless wellness.
        </p>

        {/* CTA Action Buttons */}
        <div
          ref={buttonsRef}
          className="opacity-0 flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-9 py-4 bg-[#C6A66B] text-[#151412] text-xs font-sans uppercase tracking-ultra font-semibold hover:bg-[#F7F3EC] transition-all duration-500 shadow-luxury flex items-center justify-center gap-3 group"
          >
            <Calendar className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>BOOK YOUR EXPERIENCE</span>
          </button>

          <a
            href="#services"
            onClick={handleScrollToServices}
            className="w-full sm:w-auto px-9 py-4 border border-[#C6A66B]/50 hover:border-[#C6A66B] text-[#F7F3EC] hover:text-[#C6A66B] text-xs font-sans uppercase tracking-ultra font-medium transition-all duration-500 bg-[#151412]/40 backdrop-blur-sm flex items-center justify-center gap-3 group"
          >
            <Compass className="w-4 h-4 transition-transform group-hover:rotate-45" />
            <span>EXPLORE TREATMENTS</span>
          </a>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div
        ref={scrollRef}
        className="opacity-0 absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        onClick={handleScrollToServices}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#C6A66B]/70 font-sans">
          SCROLL
        </span>
        <div className="w-6 h-10 border border-[#C6A66B]/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-[#C6A66B] rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
