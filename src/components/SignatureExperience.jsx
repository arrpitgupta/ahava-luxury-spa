import React, { useEffect, useRef } from 'react';
import { Calendar, Sparkles } from 'lucide-react';
import { initParallax, animateFadeUp } from '../animations/gsap';

export default function SignatureExperience({ onOpenBooking }) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      initParallax(imageRef.current, 0.15);
    }
    if (contentRef.current) {
      animateFadeUp(contentRef.current, { y: 40, duration: 1.0 });
    }
  }, []);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#151412] py-24 text-center border-t border-b border-[#C6A66B]/20"
    >
      {/* Background Parallax Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=2000&q=90"
          alt="Cinematic Ahava Signature Spa Ritual Sanctuary"
          className="w-full h-[120%] object-cover object-center transform -translate-y-[10%] filter brightness-[0.45] contrast-[1.05]"
          loading="lazy"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#151412] via-[#151412]/50 to-[#151412]"></div>
        <div className="absolute inset-0 bg-radial-luxury opacity-70"></div>
      </div>

      {/* Decorative Golden Corner Accents */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-[#C6A66B]/40 hidden sm:block"></div>
      <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-[#C6A66B]/40 hidden sm:block"></div>
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-[#C6A66B]/40 hidden sm:block"></div>
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-[#C6A66B]/40 hidden sm:block"></div>

      {/* Immersive Overlay Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 flex flex-col items-center justify-center text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#C6A66B]/40 rounded-full bg-[#151412]/60 backdrop-blur-md mb-8">
          <Sparkles className="w-3.5 h-3.5 text-[#C6A66B]" />
          <span className="text-[#C6A66B] text-xs font-sans tracking-[0.3em] uppercase font-medium">
            THE AHAVA RITUAL
          </span>
        </div>

        <p className="font-serif italic text-2xl sm:text-3xl text-[#E8DED0] mb-6 font-light">
          A moment created entirely for you.
        </p>

        <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#F7F3EC] uppercase tracking-wider leading-[1.0] font-light mb-10">
          DISCONNECT. <br />
          <span className="text-gold-gradient font-normal italic">BREATHE.</span> <br />
          RESTORE.
        </h2>

        <div className="max-w-xl mx-auto mb-10 text-sm sm:text-base text-[#E8DED0]/80 font-sans font-light leading-relaxed">
          Embark on a two-hour immersive journey combining aromatherapy, hot basalt stones, cell-renewing botanical facial serums, and soothing acoustic resonance.
        </div>

        <button
          onClick={onOpenBooking}
          className="px-10 py-4 bg-[#C6A66B] text-[#151412] text-xs font-sans uppercase tracking-ultra font-semibold hover:bg-[#F7F3EC] transition-all duration-500 shadow-luxury flex items-center gap-3 group"
        >
          <Calendar className="w-4 h-4 transition-transform group-hover:scale-110" />
          <span>EXPLORE THE EXPERIENCE</span>
        </button>
      </div>
    </section>
  );
}
