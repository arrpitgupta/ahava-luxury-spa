import React, { useEffect, useRef } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Award, HeartHandshake } from 'lucide-react';
import { animateFadeUp, animateBatch } from '../animations/gsap';

export default function About({ onOpenBooking }) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    if (imageRef.current) {
      animateFadeUp(imageRef.current, { y: 50, duration: 1.1 });
    }
    if (contentRef.current) {
      animateFadeUp(contentRef.current, { y: 40, duration: 1.0, delay: 0.2 });
    }
    if (statsRef.current.length > 0) {
      animateBatch(statsRef.current, { y: 30, stagger: 0.15 });
    }
  }, []);

  const stats = [
    {
      number: "10+",
      label: "Signature Treatments",
      icon: Award,
      desc: "Curated body rituals & holistic therapy"
    },
    {
      number: "5★",
      label: "Luxury Experience",
      icon: Sparkles,
      desc: "Impeccable editorial sanctuary standards"
    },
    {
      number: "100%",
      label: "Personalized Care",
      icon: HeartHandshake,
      desc: "Tailored to your body's energy needs"
    }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-36 bg-[#FAF6F0] text-[#2C2621] relative overflow-hidden border-t border-[#C6A66B]/20"
    >
      {/* Background ambient lighting element */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C6A66B]/10 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Editorial Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait Luxury Spa Photography with Frame */}
          <div ref={imageRef} className="lg:col-span-6 relative">
            <div className="relative z-10 aspect-[3/4] overflow-hidden rounded-sm border border-[#C6A66B]/30 shadow-luxury group">
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80"
                alt="Ahava Luxury Spa Sanctuary Experience"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter brightness-[0.95]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2621]/60 via-transparent to-transparent opacity-60"></div>
              
              {/* Subtle Floating Quote Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#FFFDF9]/95 backdrop-blur-md border border-[#C6A66B]/30 rounded-sm shadow-md">
                <p className="font-serif italic text-base text-[#2C2621]">
                  "In quiet stillness, the body restores its natural rhythm and inner vitality."
                </p>
                <span className="block text-[10px] uppercase tracking-widest text-[#C6A66B] font-sans mt-2 font-semibold">
                  — The Ahava Philosophy
                </span>
              </div>
            </div>

            {/* Decorative Offset Gold Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-[#C6A66B]/20 -z-10 hidden sm:block"></div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div ref={contentRef} className="lg:col-span-6 flex flex-col justify-center space-y-6">
            
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#C6A66B]"></span>
              <span className="text-[#C6A66B] text-xs font-sans tracking-[0.3em] uppercase font-semibold">
                THE AHAVA EXPERIENCE
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#2C2621] leading-[1.05] font-light">
              A SANCTUARY FOR <br />
              <span className="italic text-gold-gradient font-normal">BODY, MIND & SOUL</span>
            </h2>

            <div className="space-y-4 font-sans text-sm sm:text-base text-[#4A423A] leading-relaxed font-light">
              <p>
                At Ahava Luxury Spa, every detail is designed to help you slow down, reconnect and restore.
              </p>
              <p>
                From therapeutic massages to rejuvenating facials and indulgent body rituals, our treatments are created around one simple philosophy:
              </p>
              <p className="text-[#C6A66B] font-serif text-xl italic font-normal tracking-wide pl-4 border-l border-[#C6A66B]/50 py-1">
                "You deserve to feel your best."
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-transparent border border-[#C6A66B] text-[#2C2621] text-xs font-sans tracking-ultra uppercase hover:bg-[#C6A66B] hover:text-[#FAF6F0] transition-all duration-500 group rounded-sm font-semibold"
              >
                <span>DISCOVER AHAVA</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Three Animated Statistics Grid */}
        <div className="mt-24 pt-16 border-t border-[#C6A66B]/20 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                ref={(el) => (statsRef.current[idx] = el)}
                className="p-8 bg-[#FFFDF9] border border-[#C6A66B]/30 rounded-lg hover:border-[#C6A66B] transition-all duration-500 group shadow-luxury"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-4xl sm:text-5xl text-[#C6A66B] font-light">
                    {stat.number}
                  </span>
                  <div className="p-3 bg-[#FAF6F0] border border-[#C6A66B]/30 rounded-full text-[#C6A66B] group-hover:bg-[#C6A66B] group-hover:text-[#FAF6F0] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="font-serif text-xl text-[#2C2621] mb-2 uppercase tracking-wide">
                  {stat.label}
                </h3>
                <p className="font-sans text-xs text-[#4A423A] leading-relaxed font-light">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
