import React, { useEffect, useRef } from 'react';
import { UserCheck, Sparkles, Feather, Shield } from 'lucide-react';
import { animateBatch, animateFadeUp } from '../animations/gsap';

export default function WhyAhava() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (headerRef.current) {
      animateFadeUp(headerRef.current, { y: 35, duration: 0.9 });
    }
    if (cardsRef.current.length > 0) {
      animateBatch(cardsRef.current, { y: 30, stagger: 0.15 });
    }
  }, []);

  const features = [
    {
      number: "01",
      title: "PERSONALIZED CARE",
      description: "Every treatment is tailored to your needs.",
      details: "Our therapists consult with you before every session to adjust pressure, botanicals, and targeted tension areas.",
      icon: UserCheck,
    },
    {
      number: "02",
      title: "CURATED RITUALS",
      description: "Thoughtfully designed treatments using premium techniques.",
      details: "Combining ancestral therapeutic practices with modern cellular skin science for immediate, lasting vitality.",
      icon: Sparkles,
    },
    {
      number: "03",
      title: "SERENE ENVIRONMENT",
      description: "A peaceful sanctuary away from the pace of everyday life.",
      details: "Acoustically dampened suites, warm ambient stone lighting, and pure essential oil diffusion isolate you from city noise.",
      icon: Feather,
    },
    {
      number: "04",
      title: "EXCEPTIONAL DETAIL",
      description: "Every touchpoint is designed around your comfort.",
      details: "From Egyptian cotton linens and heated massage tables to artisanal organic elixirs served post-treatment.",
      icon: Shield,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-36 bg-[#211E1A] text-[#F7F3EC] relative overflow-hidden border-t border-b border-[#C6A66B]/15"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#C6A66B]"></span>
            <span className="text-[#C6A66B] text-xs font-sans tracking-[0.3em] uppercase font-medium">
              THE AHAVA DIFFERENCE
            </span>
            <span className="w-8 h-[1px] bg-[#C6A66B]"></span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#F7F3EC] font-light">
            WHY <span className="italic text-gold-gradient font-normal">AHAVA</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#E8DED0]/80 font-light leading-relaxed">
            Crafted for those who appreciate understated luxury, authentic care, and uncompromised excellence.
          </p>
        </div>

        {/* 4 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.number}
                ref={(el) => (cardsRef.current[idx] = el)}
                className="bg-[#151412] p-8 border border-[#C6A66B]/20 rounded-sm hover:border-[#C6A66B]/60 transition-all duration-500 flex flex-col justify-between group gold-glow-hover"
              >
                <div>
                  {/* Top Meta: Number + Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-serif text-3xl text-[#C6A66B]/60 group-hover:text-[#C6A66B] transition-colors font-light">
                      {feature.number}
                    </span>
                    <div className="p-3 bg-[#211E1A] border border-[#C6A66B]/30 rounded-full text-[#C6A66B] group-hover:bg-[#C6A66B] group-hover:text-[#151412] transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl text-[#F7F3EC] uppercase tracking-wider mb-3 font-normal">
                    {feature.title}
                  </h3>

                  {/* Core Description */}
                  <p className="font-sans text-sm text-[#E8DED0] font-medium leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  {/* Extended Details */}
                  <p className="font-sans text-xs text-[#E8DED0]/65 font-light leading-relaxed border-t border-[#C6A66B]/15 pt-4">
                    {feature.details}
                  </p>
                </div>

                <div className="mt-8 pt-4 flex items-center gap-2 text-[10px] font-sans tracking-widest text-[#C6A66B] uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                  <span className="w-4 h-[1px] bg-[#C6A66B]"></span>
                  <span>SANCTUARY STANDARD</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
