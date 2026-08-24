import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, Compass, Sparkles, Award, HeartHandshake, Calendar } from 'lucide-react';
import { services } from '../data/services';
import { galleryImages } from '../data/gallery';
import ServiceCard from '../components/ServiceCard';
import GalleryCard from '../components/GalleryCard';
import Testimonials from '../components/Testimonials';
import WhyAhava from '../components/WhyAhava';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { business } from '../config/business';
import { heroConfig } from '../config/hero';
import { animateHero, animateFadeUp, animateBatch, initParallax, gsap } from '../animations/gsap';

export default function Home() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);
  const scrollRef = useRef(null);
  const experienceImgRef = useRef(null);

  useEffect(() => {
    document.title = "Ahava Luxury Spa | Luxury Wellness & Spa Experience";

    // Hero Animation
    animateHero({
      imageRef,
      eyebrowRef,
      headingRef,
      descRef,
      buttonsRef,
      scrollRef,
    });

    if (experienceImgRef.current) {
      initParallax(experienceImgRef.current, 0.15);
    }
  }, []);

  const handleWhatsAppBook = () => {
    const url = getWhatsAppUrl("Hello Ahava Luxury Spa, I would like to book a luxury spa experience.");
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const featuredServices = services.slice(0, 4);
  const featuredGallery = galleryImages.slice(0, 6);

  return (
    <div ref={containerRef} className="space-y-0">

      {/* 1. HERO SECTION */}
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
              {/* <button
                onClick={handleWhatsAppBook}
                className="px-7 sm:px-8 py-3.5 sm:py-4 bg-[#C6A66B] text-[#151412] text-xs font-sans uppercase tracking-widest font-semibold hover:bg-[#d6b77c] transition-all duration-300 shadow-luxury flex items-center justify-center gap-3 rounded-sm group whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 shrink-0 transition-transform group-hover:scale-105 text-[#151412]" />
                <span>BOOK ON WHATSAPP</span>
              </button> */}

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

      {/* 2. ABOUT PREVIEW SECTION */}
      <section className="py-24 lg:py-32 bg-[#FAF6F0] text-[#2C2621] relative border-t border-[#C6A66B]/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            <div className="lg:col-span-6 relative">
              <div className="relative z-10 aspect-[3/4] overflow-hidden rounded-sm border border-[#C6A66B]/30 shadow-luxury group">
                <img
                  src="https://res.cloudinary.com/e6ehhcen/image/upload/v1787587474/WhatsApp_Image_2026-08-24_at_9.24.08_PM.jpg"
                  alt="Ahava Luxury Spa Sanctuary Experience"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter brightness-[0.95]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2621]/60 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#FFFDF9]/95 backdrop-blur-md border border-[#C6A66B]/30 rounded-sm shadow-md">
                  <p className="font-serif italic text-base text-[#2C2621]">
                    "In quiet stillness, the body restores its natural rhythm."
                  </p>
                  <span className="block text-[10px] uppercase tracking-widest text-[#C6A66B] font-sans mt-2 font-semibold">
                    — The Ahava Philosophy
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-[#C6A66B]/20 -z-10 hidden sm:block"></div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
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

              <p className="font-sans text-sm sm:text-base text-[#4A423A] leading-relaxed font-light">
                At Ahava Luxury Spa, every detail is designed to help you slow down, reconnect and restore. From therapeutic massages to rejuvenating facials, our treatments are created around one simple philosophy: You deserve to feel your best.
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 px-8 py-3.5 border border-[#C6A66B] text-[#2C2621] text-xs font-sans tracking-ultra uppercase hover:bg-[#C6A66B] hover:text-[#FAF6F0] transition-all duration-500 group rounded-sm"
                >
                  <span>ABOUT AHAVA</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SIGNATURE TREATMENTS PREVIEW */}
      <section className="py-24 lg:py-32 bg-[#F4EDE4] text-[#2C2621] border-t border-b border-[#C6A66B]/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 pb-8 border-b border-[#C6A66B]/25">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#C6A66B]"></span>
                <span className="text-[#C6A66B] text-xs font-sans tracking-[0.3em] uppercase font-semibold">
                  SIGNATURE MENU
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#2C2621] font-light">
                CURATED <span className="italic text-gold-gradient font-normal">TREATMENTS</span>
              </h2>
            </div>

            <Link
              to="/services"
              className="self-start md:self-auto px-8 py-3 bg-[#C6A66B] text-[#FAF6F0] text-xs font-sans uppercase tracking-ultra font-semibold hover:bg-[#2C2621] hover:text-[#FAF6F0] transition-colors flex items-center gap-2 rounded-sm"
            >
              <span>VIEW ALL TREATMENTS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

        </div>
      </section>

      {/* 4. SIGNATURE EXPERIENCE */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-[#FAF6F0] py-24 text-center border-b border-[#C6A66B]/20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            ref={experienceImgRef}
            src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=2000&q=90"
            alt="Cinematic Ahava Signature Spa Ritual Sanctuary"
            className="w-full h-[120%] object-cover object-center transform -translate-y-[10%] filter brightness-[0.75] contrast-[1.05]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6F0] via-[#FAF6F0]/60 to-[#FAF6F0]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#C6A66B]/40 rounded-full bg-[#FFFDF9]/80 backdrop-blur-md mb-8 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A66B]" />
            <span className="text-[#C6A66B] text-xs font-sans tracking-[0.3em] uppercase font-semibold">
              THE AHAVA RITUAL
            </span>
          </div>

          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl text-[#2C2621] uppercase tracking-wider leading-[1.0] font-light mb-8">
            DISCONNECT. <br />
            <span className="text-gold-gradient font-normal italic">BREATHE.</span> <br />
            RESTORE.
          </h2>

          <Link
            to="/booking"
            className="px-10 py-4 bg-[#C6A66B] text-[#FAF6F0] text-xs font-sans uppercase tracking-ultra font-semibold hover:bg-[#a8884c] transition-all duration-500 shadow-gold-glow flex items-center gap-3 rounded-sm"
          >
            <Calendar className="w-4 h-4 shrink-0" />
            <span>BOOK YOUR APPOINTMENT</span>
          </Link>
        </div>
      </section>

      {/* 5. WHY AHAVA */}
      <WhyAhava />

      {/* 7. TESTIMONIALS */}
      <Testimonials />

      {/* 8. CTA BANNER */}
      <section className="relative py-28 bg-[#FAF6F0] text-[#2C2621] border-b border-[#C6A66B]/20 text-center">
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
          <span className="text-[#C6A66B] text-xs font-sans tracking-[0.35em] uppercase font-semibold mb-6">
            INSTANT ONLINE RESERVATIONS
          </span>
          <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl uppercase tracking-wider text-[#2C2621] leading-[0.95] font-light mb-8">
            YOUR MOMENT <br />
            <span className="italic text-gold-gradient font-normal">AWAITS.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#4A423A] font-light mb-10 max-w-xl">
            Select your preferred treatment, date & time slot directly on our online reservation portal.
          </p>

          <Link
            to="/booking"
            className="px-10 py-4 bg-[#C6A66B] text-[#FAF6F0] text-xs font-sans uppercase tracking-ultra font-semibold hover:bg-[#a8884c] transition-all duration-500 shadow-gold-glow flex items-center justify-center gap-3 rounded-sm"
          >
            <Calendar className="w-4 h-4 shrink-0" />
            <span>BOOK ONLINE NOW</span>
          </Link>
        </div>
      </section>

      {/* 9. CONTACT PREVIEW */}
      <section className="py-24 bg-[#F4EDE4] text-[#2C2621]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h3 className="font-serif text-3xl sm:text-4xl uppercase tracking-wide mb-4">
            VISIT OUR SANCTUARY
          </h3>
          <p className="font-sans text-sm text-[#4A423A] font-light mb-8 max-w-lg mx-auto">
            Located at {business.address}. Open daily {business.openingHours}.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#C6A66B] text-[#2C2621] hover:bg-[#C6A66B] hover:text-[#FAF6F0] text-xs font-sans tracking-widest uppercase transition-colors rounded-sm"
          >
            <span>CONTACT AHAVA</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
