import React, { useState, useEffect, useRef } from 'react';
import { services } from '../data/services';
import ServiceItem from './ServiceItem';
import { Sparkles, Calendar } from 'lucide-react';
import { animateBatch, animateFadeUp } from '../animations/gsap';

export default function Services({ onSelectService, onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      animateFadeUp(headerRef.current, { y: 40, duration: 1.0 });
    }
  }, []);

  const categories = ['All', 'Body Therapy', 'Therapeutic', 'Skincare', 'Signature Experience'];

  const filteredServices = activeCategory === 'All'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 lg:py-36 bg-[#151412] text-[#F7F3EC] relative overflow-hidden"
    >
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#C6A66B]/5 rounded-full filter blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 pb-8 border-b border-[#C6A66B]/20">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#C6A66B]"></span>
              <span className="text-[#C6A66B] text-xs font-sans tracking-[0.3em] uppercase font-medium">
                THE SPA MENU
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#F7F3EC] font-light">
              OUR SIGNATURE <span className="italic text-gold-gradient font-normal">TREATMENTS</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#E8DED0]/80 font-light leading-relaxed">
              Thoughtfully designed rituals for complete relaxation, restoration and renewal. Select any treatment to reserve your experience.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="self-start md:self-auto px-8 py-3 bg-[#C6A66B] text-[#151412] text-xs font-sans uppercase tracking-ultra font-semibold hover:bg-[#F7F3EC] transition-colors flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Custom Ritual</span>
          </button>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-6 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs font-sans tracking-widest uppercase transition-all duration-300 whitespace-nowrap rounded-full ${
                activeCategory === cat
                  ? 'bg-[#C6A66B] text-[#151412] font-medium shadow-gold-glow'
                  : 'bg-[#211E1A] text-[#E8DED0]/70 hover:text-[#F7F3EC] hover:bg-[#C6A66B]/20 border border-[#C6A66B]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Service List */}
        <div ref={listRef} className="border-t border-[#C6A66B]/20">
          {filteredServices.map((service) => (
            <ServiceItem
              key={service.id}
              service={service}
              onSelectService={onSelectService}
            />
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-16 p-8 bg-[#211E1A]/80 border border-[#C6A66B]/30 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#151412] border border-[#C6A66B]/40 rounded-full text-[#C6A66B]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-xl text-[#F7F3EC] uppercase tracking-wide">
                Bespoke Group & Corporate Spa Packages
              </h4>
              <p className="font-sans text-xs text-[#E8DED0]/70 font-light mt-1">
                Custom wellness retreats tailored for bridal parties, corporate wellness days & private celebrations.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3 border border-[#C6A66B] text-[#C6A66B] text-xs font-sans tracking-widest uppercase hover:bg-[#C6A66B] hover:text-[#151412] transition-colors whitespace-nowrap"
          >
            Inquire For Groups
          </button>
        </div>

      </div>
    </section>
  );
}
