import React, { useState, useEffect, useRef } from 'react';
import { galleryImages } from '../data/gallery';
import { Maximize2, X, Sparkles } from 'lucide-react';
import { animateBatch, animateFadeUp } from '../animations/gsap';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    if (headerRef.current) {
      animateFadeUp(headerRef.current, { y: 40, duration: 1.0 });
    }
    if (itemsRef.current.length > 0) {
      animateBatch(itemsRef.current, { y: 30, stagger: 0.1 });
    }
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-24 lg:py-36 bg-[#151412] text-[#F7F3EC] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#C6A66B]"></span>
            <span className="text-[#C6A66B] text-xs font-sans tracking-[0.3em] uppercase font-medium">
              EDITORIAL PORTFOLIO
            </span>
            <span className="w-8 h-[1px] bg-[#C6A66B]"></span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#F7F3EC] font-light">
            THE SANCTUARY <span className="italic text-gold-gradient font-normal">ATMOSPHERE</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#E8DED0]/80 font-light leading-relaxed">
            Immerse your senses in our sanctuary spaces, natural textures, warm candle lighting, and restorative treatment rituals.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {galleryImages.map((img, idx) => (
            <div
              key={img.id}
              ref={(el) => (itemsRef.current[idx] = el)}
              onClick={() => setSelectedImage(img)}
              className={`group relative overflow-hidden rounded-sm border border-[#C6A66B]/20 cursor-pointer ${img.aspect} shadow-luxury`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 filter brightness-95 group-hover:brightness-105"
                loading="lazy"
              />

              {/* Hover Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#151412]/90 via-[#151412]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-[10px] font-sans tracking-widest text-[#C6A66B] uppercase mb-1">
                  {img.category}
                </span>
                <h3 className="font-serif text-xl text-[#F7F3EC] uppercase font-normal tracking-wide">
                  {img.title}
                </h3>
                <div className="mt-3 flex items-center gap-2 text-xs text-[#E8DED0]">
                  <Maximize2 className="w-3.5 h-3.5 text-[#C6A66B]" />
                  <span>View Full Image</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-[#151412]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] bg-[#211E1A] border border-[#C6A66B]/40 rounded-sm overflow-hidden p-2 sm:p-4 shadow-luxury"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-[#151412]/80 text-[#F7F3EC] hover:text-[#C6A66B] rounded-full border border-[#C6A66B]/30 transition-colors"
              aria-label="Close image lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full max-h-[75vh] object-contain rounded-sm"
            />

            <div className="pt-4 px-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-[#C6A66B]/20 mt-4">
              <div>
                <span className="text-[10px] font-sans tracking-ultra text-[#C6A66B] uppercase">
                  {selectedImage.category}
                </span>
                <h4 className="font-serif text-2xl text-[#F7F3EC] uppercase">
                  {selectedImage.title}
                </h4>
              </div>
              <p className="font-sans text-xs text-[#E8DED0]/70 italic">
                {selectedImage.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
