import React from 'react';
import Breadcrumbs from './Breadcrumbs';

export default function PageHero({ eyebrow, title, italicTitle, description, breadcrumbs, bgImage }) {
  return (
    <section className="relative bg-[#FAF6F0] text-[#2C2621] pt-28 sm:pt-32 pb-20 lg:pb-28 border-b border-[#C6A66B]/25 overflow-hidden">
      {/* Background Photography Texture if provided */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt={title}
            className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6F0] via-[#FAF6F0]/80 to-[#FAF6F0]/90"></div>
        </div>
      )}

      {/* Decorative ambient radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C6A66B]/10 rounded-full filter blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Breadcrumbs */}
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}

        {/* Eyebrow Label */}
        {eyebrow && (
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#C6A66B]"></span>
            <span className="text-[#C6A66B] text-xs font-sans tracking-[0.3em] uppercase font-semibold">
              {eyebrow}
            </span>
          </div>
        )}

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[#2C2621] font-light leading-[1.0] max-w-4xl mb-6">
          {title} {italicTitle && <span className="italic text-gold-gradient font-normal">{italicTitle}</span>}
        </h1>

        {/* Supporting description */}
        {description && (
          <p className="font-sans text-sm sm:text-base md:text-lg text-[#4A423A] max-w-2xl font-light leading-relaxed tracking-wide">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
