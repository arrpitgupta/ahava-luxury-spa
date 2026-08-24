import React, { useState, useEffect, useRef } from 'react';
import { testimonials } from '../data/testimonials';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { animateFadeUp } from '../animations/gsap';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      animateFadeUp(sectionRef.current, { y: 40, duration: 1.0 });
    }
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-36 bg-[#FAF6F0] text-[#2C2621] relative overflow-hidden border-t border-b border-[#C6A66B]/20"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
        
        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="w-8 h-[1px] bg-[#C6A66B]"></span>
          <span className="text-[#C6A66B] text-xs font-sans tracking-[0.3em] uppercase font-semibold">
            GUEST REVIEWS & STORIES
          </span>
          <span className="w-8 h-[1px] bg-[#C6A66B]"></span>
        </div>

        {/* Section Title */}
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#2C2621] font-light mb-16">
          WHAT OUR <span className="italic text-gold-gradient font-normal">GUESTS SAY</span>
        </h2>

        {/* Testimonial Presentation Card */}
        <div
          ref={cardRef}
          className="relative bg-[#FFFDF9] p-8 sm:p-14 border border-[#C6A66B]/30 rounded-lg shadow-luxury transition-all duration-500"
        >
          {/* Quote Icon Background */}
          <div className="absolute top-6 left-6 text-[#C6A66B]/15 pointer-events-none">
            <Quote className="w-16 h-16" />
          </div>

          {/* Star Rating */}
          <div className="flex items-center justify-center gap-1.5 mb-8 text-[#C6A66B]">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#C6A66B]" />
            ))}
          </div>

          {/* Quote Content */}
          <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-[#2C2621] leading-relaxed font-light italic mb-8 max-w-3xl mx-auto">
            "{current.quote}"
          </blockquote>

          {/* Author Meta */}
          <div className="space-y-2">
            <div className="font-sans text-xs tracking-ultra uppercase text-[#C6A66B] font-semibold">
              — {current.author}
            </div>
            <div className="font-sans text-xs text-[#786C60] font-light">
              {current.title} • {current.location} • {current.treatment}
            </div>
          </div>

          {/* Response from Owner (if available) */}
          {current.ownerResponse && (
            <div className="mt-6 p-4 bg-[#F4EDE4] border border-[#C6A66B]/25 rounded-md text-left max-w-2xl mx-auto space-y-1">
              <div className="text-[10px] font-sans tracking-ultra uppercase text-[#C6A66B] font-semibold">
                Response from the Owner
              </div>
              <p className="font-sans text-xs text-[#4A423A] font-light leading-relaxed">
                "{current.ownerResponse}"
              </p>
            </div>
          )}

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-10 pt-6 border-t border-[#C6A66B]/20">
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="p-3 rounded-full border border-[#C6A66B]/30 text-[#C6A66B] hover:bg-[#C6A66B] hover:text-[#FAF6F0] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === i ? 'w-8 bg-[#C6A66B]' : 'w-2 bg-[#C6A66B]/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="p-3 rounded-full border border-[#C6A66B]/30 text-[#C6A66B] hover:bg-[#C6A66B] hover:text-[#FAF6F0] transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
