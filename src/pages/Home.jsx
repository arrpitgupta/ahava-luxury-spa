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
        className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#151412] -mt-20 pt-20"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            ref={imageRef}
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=90"
            alt="Ahava Luxury Spa Sanctuary Atmosphere"
            className="w-full h-full object-cover object-center transform scale-110 filter brightness-[0.65]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151412] via-[#151412]/40 to-[#151412]/70"></div>
          <div className="absolute inset-0 bg-radial-luxury opacity-60"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center justify-center py-20">
          <div ref={eyebrowRef} className="opacity-0 mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#C6A66B]/60 hidden sm:inline-block"></span>
            <span className="text-[#C6A66B] text-xs sm:text-sm font-sans tracking-[0.35em] uppercase font-medium">
              AHAVA LUXURY SPA
            </span>
            <span className="w-8 h-[1px] bg-[#C6A66B]/60 hidden sm:inline-block"></span>
          </div>

          <h1
            ref={headingRef}
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#F7F3EC] tracking-tight leading-[0.95] uppercase font-light mb-8 max-w-4xl"
          >
            <span className="hero-line block opacity-0">WHERE BEAUTY</span>
            <span className="hero-line block opacity-0 text-gold-gradient italic font-normal">
              MEETS SERENITY
            </span>
          </h1>

          <p
            ref={descRef}
            className="opacity-0 font-sans text-sm sm:text-base md:text-lg text-[#E8DED0]/85 max-w-2xl font-light leading-relaxed mb-12 tracking-wide"
          >
            Escape the ordinary and enter a world of refined relaxation, restorative treatments and timeless wellness.
          </p>

          <div
            ref={buttonsRef}
            className="opacity-0 flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
          >
            <button
              onClick={handleWhatsAppBook}
              className="w-full sm:w-auto px-9 py-4 bg-[#25D366] text-[#151412] text-xs font-sans uppercase tracking-ultra font-semibold hover:bg-[#20ba5a] transition-all duration-500 shadow-luxury flex items-center justify-center gap-3 group"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>BOOK ON WHATSAPP</span>
            </button>

            <Link
              to="/services"
              className="w-full sm:w-auto px-9 py-4 border border-[#C6A66B]/50 hover:border-[#C6A66B] text-[#F7F3EC] hover:text-[#C6A66B] text-xs font-sans uppercase tracking-ultra font-medium transition-all duration-500 bg-[#151412]/40 backdrop-blur-sm flex items-center justify-center gap-3 group"
            >
              <Compass className="w-4 h-4 transition-transform group-hover:rotate-45" />
              <span>EXPLORE TREATMENTS</span>
            </Link>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="opacity-0 absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C6A66B]/70 font-sans">
            SCROLL
          </span>
          <div className="w-6 h-10 border border-[#C6A66B]/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-[#C6A66B] rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT PREVIEW SECTION */}
      <section className="py-24 lg:py-32 bg-[#151412] text-[#F7F3EC] relative border-t border-[#C6A66B]/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="relative z-10 aspect-[3/4] overflow-hidden rounded-sm border border-[#C6A66B]/30 shadow-luxury group">
                <img
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80"
                  alt="Ahava Luxury Spa Sanctuary Experience"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter brightness-[0.9]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151412]/80 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#211E1A]/90 backdrop-blur-md border border-[#C6A66B]/30 rounded-sm">
                  <p className="font-serif italic text-base text-[#F7F3EC]/90">
                    "In quiet stillness, the body restores its natural rhythm."
                  </p>
                  <span className="block text-[10px] uppercase tracking-widest text-[#C6A66B] font-sans mt-2">
                    — The Ahava Philosophy
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-[#C6A66B]/20 -z-10 hidden sm:block"></div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#C6A66B]"></span>
                <span className="text-[#C6A66B] text-xs font-sans tracking-[0.3em] uppercase font-medium">
                  THE AHAVA EXPERIENCE
                </span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#F7F3EC] leading-[1.05] font-light">
                A SANCTUARY FOR <br />
                <span className="italic text-gold-gradient font-normal">BODY, MIND & SOUL</span>
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#E8DED0]/85 leading-relaxed font-light">
                At Ahava Luxury Spa, every detail is designed to help you slow down, reconnect and restore. From therapeutic massages to rejuvenating facials, our treatments are created around one simple philosophy: You deserve to feel your best.
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 px-8 py-3.5 border border-[#C6A66B] text-[#F7F3EC] text-xs font-sans tracking-ultra uppercase hover:bg-[#C6A66B] hover:text-[#151412] transition-all duration-500 group"
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
      <section className="py-24 lg:py-32 bg-[#211E1A] text-[#F7F3EC] border-t border-b border-[#C6A66B]/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 pb-8 border-b border-[#C6A66B]/20">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#C6A66B]"></span>
                <span className="text-[#C6A66B] text-xs font-sans tracking-[0.3em] uppercase font-medium">
                  SIGNATURE MENU
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#F7F3EC] font-light">
                CURATED <span className="italic text-gold-gradient font-normal">TREATMENTS</span>
              </h2>
            </div>

            <Link
              to="/services"
              className="self-start md:self-auto px-8 py-3 bg-[#C6A66B] text-[#151412] text-xs font-sans uppercase tracking-ultra font-semibold hover:bg-[#F7F3EC] transition-colors flex items-center gap-2"
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
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-[#151412] py-24 text-center border-b border-[#C6A66B]/20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            ref={experienceImgRef}
            src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=2000&q=90"
            alt="Cinematic Ahava Signature Spa Ritual Sanctuary"
            className="w-full h-[120%] object-cover object-center transform -translate-y-[10%] filter brightness-[0.45] contrast-[1.05]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151412] via-[#151412]/50 to-[#151412]"></div>
          <div className="absolute inset-0 bg-radial-luxury opacity-70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#C6A66B]/40 rounded-full bg-[#151412]/60 backdrop-blur-md mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A66B]" />
            <span className="text-[#C6A66B] text-xs font-sans tracking-[0.3em] uppercase font-medium">
              THE AHAVA RITUAL
            </span>
          </div>

          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl text-[#F7F3EC] uppercase tracking-wider leading-[1.0] font-light mb-8">
            DISCONNECT. <br />
            <span className="text-gold-gradient font-normal italic">BREATHE.</span> <br />
            RESTORE.
          </h2>

          <button
            onClick={handleWhatsAppBook}
            className="px-10 py-4 bg-[#25D366] text-[#151412] text-xs font-sans uppercase tracking-ultra font-semibold hover:bg-[#20ba5a] transition-all duration-500 shadow-luxury flex items-center gap-3"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>BOOK ON WHATSAPP</span>
          </button>
        </div>
      </section>

      {/* 5. WHY AHAVA */}
      <WhyAhava />

      {/* 6. GALLERY PREVIEW */}
      <section className="py-24 bg-[#151412] text-[#F7F3EC] border-t border-[#C6A66B]/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#C6A66B]"></span>
                <span className="text-[#C6A66B] text-xs font-sans tracking-[0.3em] uppercase font-medium">
                  A VISUAL INVITATION
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#F7F3EC] font-light">
                INSIDE <span className="italic text-gold-gradient font-normal">AHAVA</span>
              </h2>
            </div>

            <Link
              to="/gallery"
              className="self-start md:self-auto px-8 py-3 border border-[#C6A66B] text-[#F7F3EC] hover:bg-[#C6A66B] hover:text-[#151412] text-xs font-sans uppercase tracking-ultra font-medium transition-colors flex items-center gap-2"
            >
              <span>VIEW FULL GALLERY</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGallery.map((item) => (
              <Link key={item.id} to="/gallery">
                <GalleryCard item={item} onClick={() => {}} />
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <Testimonials />

      {/* 8. WHATSAPP CTA BANNER */}
      <section className="relative py-28 bg-[#151412] text-[#F7F3EC] border-b border-[#C6A66B]/20 text-center">
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
          <span className="text-[#C6A66B] text-xs font-sans tracking-[0.35em] uppercase font-medium mb-6">
            INSTANT CONCIERGE ASSISTANCE
          </span>
          <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl uppercase tracking-wider text-[#F7F3EC] leading-[0.95] font-light mb-8">
            YOUR MOMENT <br />
            <span className="italic text-gold-gradient font-normal">AWAITS.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#E8DED0]/90 font-light mb-10 max-w-xl">
            Connect directly with our spa concierge on WhatsApp to reserve your treatment.
          </p>

          <button
            onClick={handleWhatsAppBook}
            className="px-10 py-4 bg-[#25D366] text-[#151412] text-xs font-sans uppercase tracking-ultra font-semibold hover:bg-[#20ba5a] transition-all duration-500 shadow-luxury flex items-center justify-center gap-3"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>BOOK ON WHATSAPP</span>
          </button>
        </div>
      </section>

      {/* 9. CONTACT PREVIEW */}
      <section className="py-24 bg-[#211E1A] text-[#F7F3EC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h3 className="font-serif text-3xl sm:text-4xl uppercase tracking-wide mb-4">
            VISIT OUR SANCTUARY
          </h3>
          <p className="font-sans text-sm text-[#E8DED0]/80 font-light mb-8 max-w-lg mx-auto">
            Located at {business.address}. Open daily {business.openingHours}.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#C6A66B] text-[#C6A66B] hover:bg-[#C6A66B] hover:text-[#151412] text-xs font-sans tracking-widest uppercase transition-colors"
          >
            <span>CONTACT AHAVA</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
