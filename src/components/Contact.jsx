import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, MessageCircle, Instagram, ArrowRight, ExternalLink } from 'lucide-react';
import { animateFadeUp } from '../animations/gsap';
import { business } from '../config/business';

export default function Contact({ onOpenBooking }) {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    if (leftRef.current) {
      animateFadeUp(leftRef.current, { y: 40, duration: 1.0 });
    }
    if (rightRef.current) {
      animateFadeUp(rightRef.current, { y: 40, duration: 1.0, delay: 0.2 });
    }
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 lg:py-36 bg-[#151412] text-[#F7F3EC] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Location Details */}
          <div ref={leftRef} className="lg:col-span-6 space-y-8">
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#C6A66B]"></span>
                <span className="text-[#C6A66B] text-xs font-sans tracking-[0.3em] uppercase font-medium">
                  LOCATION & HOURS
                </span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#F7F3EC] font-light leading-[1.05]">
                VISIT <span className="italic text-gold-gradient font-normal">AHAVA</span>
              </h2>

              <p className="font-serif italic text-2xl text-[#E8DED0] font-light">
                Your sanctuary awaits.
              </p>
            </div>

            {/* Address & Info Cards */}
            <div className="space-y-6 pt-4 border-t border-[#C6A66B]/20">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#211E1A] border border-[#C6A66B]/30 rounded-full text-[#C6A66B] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-lg text-[#F7F3EC] uppercase tracking-wide">
                    Sanctuary Address
                  </h4>
                  <p className="font-sans text-sm text-[#E8DED0]/80 font-light leading-relaxed">
                    {business.address}
                  </p>
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#211E1A] border border-[#C6A66B]/30 rounded-full text-[#C6A66B] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-base text-[#F7F3EC] uppercase tracking-wide">
                      Concierge Desk
                    </h4>
                    <a
                      href={`tel:${business.phone}`}
                      className="font-sans text-sm text-[#E8DED0] hover:text-[#C6A66B] transition-colors block"
                    >
                      {business.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#211E1A] border border-[#C6A66B]/30 rounded-full text-[#C6A66B] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-base text-[#F7F3EC] uppercase tracking-wide">
                      Email Inquiries
                    </h4>
                    <a
                      href={`mailto:${business.email}`}
                      className="font-sans text-sm text-[#E8DED0] hover:text-[#C6A66B] transition-colors block"
                    >
                      {business.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4 pt-2">
                <div className="p-3 bg-[#211E1A] border border-[#C6A66B]/30 rounded-full text-[#C6A66B] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-lg text-[#F7F3EC] uppercase tracking-wide">
                    Opening Hours
                  </h4>
                  <p className="font-sans text-sm text-[#E8DED0]/80 font-light">
                    Monday – Sunday <br />
                    <span className="text-[#C6A66B] font-medium">11:00 AM – 10:00 PM</span> (Last appointment 7:30 PM)
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Action Button Grid */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <a
                href={business.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#211E1A] border border-[#C6A66B]/30 rounded-sm text-center text-xs font-sans uppercase tracking-widest text-[#E8DED0] hover:border-[#C6A66B] hover:text-[#C6A66B] transition-colors flex flex-col items-center gap-1.5"
              >
                <Navigation className="w-4 h-4 text-[#C6A66B]" />
                <span>DIRECTIONS</span>
              </a>

              <a
                href={`tel:${business.phone}`}
                className="p-3 bg-[#211E1A] border border-[#C6A66B]/30 rounded-sm text-center text-xs font-sans uppercase tracking-widest text-[#E8DED0] hover:border-[#C6A66B] hover:text-[#C6A66B] transition-colors flex flex-col items-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-[#C6A66B]" />
                <span>CALL US</span>
              </a>

              <a
                href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent("Hello Ahava Luxury Spa, I would like to inquire about a spa appointment.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#211E1A] border border-[#C6A66B]/30 rounded-sm text-center text-xs font-sans uppercase tracking-widest text-[#E8DED0] hover:border-[#C6A66B] hover:text-[#C6A66B] transition-colors flex flex-col items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 text-[#C6A66B]" />
                <span>WHATSAPP</span>
              </a>

              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#211E1A] border border-[#C6A66B]/30 rounded-sm text-center text-xs font-sans uppercase tracking-widest text-[#E8DED0] hover:border-[#C6A66B] hover:text-[#C6A66B] transition-colors flex flex-col items-center gap-1.5"
              >
                <Instagram className="w-4 h-4 text-[#C6A66B]" />
                <span>INSTAGRAM</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Portrait Card with Instant Online Enquiry Trigger */}
          <div ref={rightRef} className="lg:col-span-6 relative">
            <div className="relative z-10 aspect-[4/5] rounded-sm overflow-hidden border border-[#C6A66B]/30 shadow-luxury group">
              <img
                src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1000&q=80"
                alt="Ahava Luxury Spa Grand Entrance Reception"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151412] via-[#151412]/30 to-transparent"></div>

              {/* Overlay Interactive Card */}
              <div className="absolute bottom-8 left-8 right-8 p-8 bg-[#211E1A]/95 backdrop-blur-xl border border-[#C6A66B]/40 rounded-sm space-y-4">
                <span className="text-[10px] font-sans tracking-ultra text-[#C6A66B] uppercase block">
                  CONCIERGE ASSISTANCE
                </span>
                <h3 className="font-serif text-2xl text-[#F7F3EC] uppercase tracking-wide">
                  PLAN YOUR VISIT
                </h3>
                <p className="font-sans text-xs text-[#E8DED0]/80 font-light leading-relaxed">
                  Our concierge team is available daily to curate personalized treatment itineraries and private suite arrangements.
                </p>

                <button
                  onClick={onOpenBooking}
                  className="w-full py-3.5 bg-[#C6A66B] text-[#151412] text-xs font-sans uppercase tracking-ultra font-semibold hover:bg-[#F7F3EC] transition-colors flex items-center justify-center gap-2"
                >
                  <span>RESERVE TREATMENT ONLINE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Decorative Gold Frame Offset */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border border-[#C6A66B]/20 -z-10 hidden sm:block"></div>
          </div>

        </div>

      </div>
    </section>
  );
}
