import React, { useEffect, useRef, useState } from 'react';
import { UserCheck, Sparkles, Feather, Shield, Maximize2, X, Eye } from 'lucide-react';
import { animateBatch, animateFadeUp } from '../animations/gsap';

/**
 * ============================================================================
 * WHY AHAVA SECTION - SANCTUARY PICTURES CONFIGURATION
 * ============================================================================
 * Replace the 'src' values below with your own image URLs or file paths.
 * ============================================================================
 */
export const whyAhavaSanctuaryImages = [
  {
    id: 'reception',
    title: 'Spa Reception',
    subtitle: 'Warm welcome lounge & reception sanctuary',
    src: '/images/spa_reception.jpg', // <-- REPLACE WITH YOUR SPA RECEPTION IMAGE URL HERE
    fallbackSrc: 'https://res.cloudinary.com/e6ehhcen/image/upload/v1787587472/WhatsApp_Image_2026-08-24_at_9.19.17_PM.jpg',
    alt: 'Ahava Spa Reception Lounge',
    badge: 'RECEPTION LOUNGE',
  },
  {
    id: 'treatment-room',
    title: 'Treatment Room',
    subtitle: 'Acoustically dampened serene therapy suite',
    src: '/images/treatment_room.jpg', // <-- REPLACE WITH YOUR TREATMENT ROOM IMAGE URL HERE
    fallbackSrc: 'https://res.cloudinary.com/e6ehhcen/image/upload/v1787587472/WhatsApp_Image_2026-08-24_at_9.19.17_PM_1.jpg',
    alt: 'Ahava Spa Private Treatment Suite',
    badge: 'TREATMENT SUITE',
  },
  {
    id: 'jacuzzi',
    title: 'Hydrotherapy Jacuzzi',
    subtitle: 'Warm thermal jacuzzi with ambient candlelight',
    src: '/images/jacuzzi_spa.jpg', // <-- REPLACE WITH YOUR JACUZZI IMAGE URL HERE
    fallbackSrc: 'https://res.cloudinary.com/e6ehhcen/image/upload/v1787587472/WhatsApp_Image_2026-08-24_at_9.19.17_PM_2.jpg',
    alt: 'Ahava Spa Hydrotherapy Jacuzzi',
    badge: 'LUXURY JACUZZI',
  },
];

export default function WhyAhava() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const showcaseHeaderRef = useRef(null);
  const showcaseCardsRef = useRef([]);

  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (headerRef.current) {
      animateFadeUp(headerRef.current, { y: 35, duration: 0.9 });
    }
    if (cardsRef.current.length > 0) {
      animateBatch(cardsRef.current.filter(Boolean), { y: 30, stagger: 0.15 });
    }
    if (showcaseHeaderRef.current) {
      animateFadeUp(showcaseHeaderRef.current, { y: 30, duration: 0.8 });
    }
    if (showcaseCardsRef.current.length > 0) {
      animateBatch(showcaseCardsRef.current.filter(Boolean), { y: 35, stagger: 0.15 });
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
      className="py-24 lg:py-36 bg-[#F4EDE4] text-[#2C2621] relative overflow-hidden border-t border-b border-[#C6A66B]/20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-24">

        {/* Section Header */}
        <div>
          <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#C6A66B]"></span>
              <span className="text-[#C6A66B] text-xs font-sans tracking-[0.3em] uppercase font-semibold">
                THE AHAVA DIFFERENCE
              </span>
              <span className="w-8 h-[1px] bg-[#C6A66B]"></span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#2C2621] font-light">
              WHY <span className="italic text-gold-gradient font-normal">AHAVA</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#4A423A] font-light leading-relaxed">
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
                  className="bg-[#FFFDF9] p-8 border border-[#C6A66B]/30 rounded-lg hover:border-[#C6A66B] transition-all duration-500 flex flex-col justify-between group gold-glow-hover shadow-luxury"
                >
                  <div>
                    {/* Top Meta: Number + Icon */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-serif text-3xl text-[#C6A66B] group-hover:text-[#B58A4B] transition-colors font-light">
                        {feature.number}
                      </span>
                      <div className="p-3 bg-[#FAF6F0] border border-[#C6A66B]/30 rounded-full text-[#C6A66B] group-hover:bg-[#C6A66B] group-hover:text-[#FAF6F0] transition-all">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl sm:text-2xl text-[#2C2621] uppercase tracking-wider mb-3 font-normal">
                      {feature.title}
                    </h3>

                    {/* Core Description */}
                    <p className="font-sans text-sm text-[#2C2621] font-medium leading-relaxed mb-4">
                      {feature.description}
                    </p>

                    {/* Extended Details */}
                    <p className="font-sans text-xs text-[#4A423A] font-light leading-relaxed border-t border-[#C6A66B]/20 pt-4">
                      {feature.details}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 flex items-center gap-2 text-[10px] font-sans tracking-widest text-[#C6A66B] uppercase font-semibold">
                    <span className="w-4 h-[1px] bg-[#C6A66B]"></span>
                    <span>SANCTUARY STANDARD</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* 3 PICTURES SHOWCASE BELOW WHY AHAVA */}
        {/* ------------------------------------------------------------------ */}
        <div className="pt-8 border-t border-[#C6A66B]/20 space-y-12">

          {/* Showcase Section Header */}
          <div ref={showcaseHeaderRef} className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[#C6A66B]"></span>
              <span className="text-[#C6A66B] text-[11px] font-sans tracking-[0.3em] uppercase font-semibold">
                SANCTUARY ATMOSPHERE
              </span>
              <span className="w-6 h-[1px] bg-[#C6A66B]"></span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl uppercase tracking-wide text-[#2C2621] font-light">
              EXPLORE OUR <span className="italic text-gold-gradient font-normal">SPACES</span>
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#4A423A] font-light">
              Step inside our serene reception lounge, private treatment suites, and hydrotherapy jacuzzi tub.
            </p>
          </div>

          {/* 3 Picture Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyAhavaSanctuaryImages.map((imgItem, idx) => (
              <div
                key={imgItem.id}
                ref={(el) => (showcaseCardsRef.current[idx] = el)}
                onClick={() => setActiveImage(imgItem)}
                className="group relative bg-[#FFFDF9] border border-[#C6A66B]/30 hover:border-[#C6A66B] rounded-lg overflow-hidden shadow-luxury transition-all duration-500 cursor-pointer flex flex-col gold-glow-hover"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#2C2621]/10">
                  <img
                    src={imgItem.src}
                    alt={imgItem.alt}
                    onError={(e) => {
                      // Fallback to high quality stock image if local image isn't loaded yet
                      if (e.target.src !== imgItem.fallbackSrc) {
                        e.target.src = imgItem.fallbackSrc;
                      }
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.96]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C2621]/80 via-[#2C2621]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#151412]/80 backdrop-blur-xs border border-[#C6A66B]/40 rounded-full">
                    <span className="text-[#C6A66B] text-[9px] font-sans tracking-widest uppercase font-semibold">
                      {imgItem.badge}
                    </span>
                  </div>

                  {/* Expand Overlay Icon */}
                  <div className="absolute bottom-4 right-4 z-10 p-2.5 bg-[#FFFDF9]/90 backdrop-blur-md border border-[#C6A66B]/40 rounded-full text-[#2C2621] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Maximize2 className="w-4 h-4 text-[#C6A66B]" />
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 flex flex-col justify-between flex-grow bg-[#FFFDF9] border-t border-[#C6A66B]/20">
                  <div>
                    <h4 className="font-serif text-xl text-[#2C2621] uppercase tracking-wider mb-1 group-hover:text-[#C6A66B] transition-colors">
                      {imgItem.title}
                    </h4>
                    <p className="font-sans text-xs text-[#4A423A] font-light leading-relaxed">
                      {imgItem.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 flex items-center justify-between text-[10px] font-sans tracking-widest uppercase text-[#C6A66B] font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Eye className="w-3 h-3" />
                      VIEW PHOTO
                    </span>
                    <span className="w-6 h-[1px] bg-[#C6A66B]"></span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Lightbox / Fullscreen Image Preview Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-[#151412]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#FFFDF9] border border-[#C6A66B]/40 rounded-lg overflow-hidden shadow-2xl space-y-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-20 p-2.5 bg-[#151412]/80 hover:bg-[#151412] text-[#F7F3EC] hover:text-[#C6A66B] rounded-full border border-[#C6A66B]/40 transition-colors"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-[#151412]">
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                onError={(e) => {
                  if (e.target.src !== activeImage.fallbackSrc) {
                    e.target.src = activeImage.fallbackSrc;
                  }
                }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151412]/90 via-transparent to-transparent"></div>

              {/* Image Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-[#FAF6F0]">
                <span className="inline-block px-3 py-1 bg-[#C6A66B] text-[#151412] text-[10px] font-sans tracking-widest uppercase font-semibold rounded-sm mb-3">
                  {activeImage.badge}
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl uppercase tracking-wider mb-2">
                  {activeImage.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#E8DED0]/90 font-light max-w-xl">
                  {activeImage.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

