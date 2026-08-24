import React from 'react';
import { ArrowUpRight, Clock, Sparkles } from 'lucide-react';

export default function ServiceItem({ service, onSelectService }) {
  return (
    <div
      onClick={() => onSelectService(service)}
      className="group relative border-b border-[#C6A66B]/20 py-8 lg:py-10 transition-all duration-500 hover:bg-[#211E1A]/40 px-4 sm:px-6 cursor-pointer"
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        
        {/* Left Side: Number + Title + Description */}
        <div className="flex items-start gap-6 lg:w-1/2">
          {/* Number */}
          <span className="font-serif text-2xl sm:text-3xl text-[#C6A66B] font-light tracking-widest pt-1 min-w-[40px]">
            {service.id}
          </span>

          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F7F3EC] group-hover:text-[#C6A66B] transition-colors duration-300 font-light uppercase tracking-wide">
                {service.name}
              </h3>
              <span className="text-[10px] uppercase font-sans tracking-widest text-[#C6A66B]/70 px-2 py-0.5 border border-[#C6A66B]/20 rounded-full hidden sm:inline-block">
                {service.category}
              </span>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#E8DED0]/80 font-light leading-relaxed max-w-xl">
              {service.description}
            </p>

            {/* Benefits Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {service.benefits?.map((benefit) => (
                <span
                  key={benefit}
                  className="text-[10px] text-[#A3998E] font-sans flex items-center gap-1"
                >
                  <Sparkles className="w-2.5 h-2.5 text-[#C6A66B]" />
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Middle/Right Side: Image Preview (Desktop Hover) + Meta Info + Action Arrow */}
        <div className="flex items-center justify-between lg:justify-end gap-6 lg:w-1/2 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#C6A66B]/10">
          
          {/* Small Preview Image Thumbnail */}
          <div className="relative w-24 h-16 sm:w-32 sm:h-20 rounded-sm overflow-hidden border border-[#C6A66B]/20 flex-shrink-0">
            <img
              src={service.image}
              alt={service.name}
              onError={(e) => {
                if (service.fallbackImage && e.target.src !== service.fallbackImage) {
                  e.target.src = service.fallbackImage;
                }
              }}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-115 filter brightness-90 group-hover:brightness-100"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#151412]/20 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Duration & Price */}
          <div className="text-right space-y-1">
            <div className="flex items-center justify-end gap-1.5 text-xs text-[#A3998E] font-sans">
              <Clock className="w-3 h-3 text-[#C6A66B]" />
              <span>{service.duration}</span>
            </div>
            <div className="font-serif text-2xl sm:text-3xl text-[#F7F3EC] group-hover:text-[#C6A66B] transition-colors font-light">
              {service.price}
            </div>
          </div>

          {/* Action Arrow Icon Button */}
          <div className="w-10 h-10 rounded-full border border-[#C6A66B]/30 flex items-center justify-center text-[#C6A66B] group-hover:bg-[#C6A66B] group-hover:text-[#151412] group-hover:border-[#C6A66B] transition-all duration-300 transform group-hover:scale-105 flex-shrink-0">
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>

      {/* Gold Hover Line Accent Expansion */}
      <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-[#C6A66B] to-transparent group-hover:w-full transition-all duration-700"></div>
    </div>
  );
}
