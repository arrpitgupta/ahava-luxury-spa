import React from 'react';

export default function SectionHeading({ eyebrow, title, italicTitle, description, center = false }) {
  return (
    <div className={`space-y-4 max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-12 lg:mb-16`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
          <span className="w-8 h-[1px] bg-[#C6A66B]"></span>
          <span className="text-[#C6A66B] text-xs font-sans tracking-[0.3em] uppercase font-medium">
            {eyebrow}
          </span>
          {center && <span className="w-8 h-[1px] bg-[#C6A66B]"></span>}
        </div>
      )}

      <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#F7F3EC] font-light leading-[1.05]">
        {title} {italicTitle && <span className="italic text-gold-gradient font-normal">{italicTitle}</span>}
      </h2>

      {description && (
        <p className="font-sans text-sm sm:text-base text-[#E8DED0]/80 font-light leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
