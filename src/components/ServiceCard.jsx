import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Clock, MessageCircle, Sparkles } from 'lucide-react';
import { getServiceWhatsAppUrl } from '../utils/whatsapp';

export default function ServiceCard({ service }) {
  const navigate = useNavigate();

  const handleCardClick = (e) => {
    // If user clicked the WhatsApp button directly, don't navigate
    if (e.target.closest('.whatsapp-btn')) return;
    navigate(`/services/${service.slug}`);
  };

  const handleWhatsAppBook = (e) => {
    e.stopPropagation();
    const url = getServiceWhatsAppUrl(service.name, service.duration, service.price);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative bg-[#211E1A] border border-[#C6A66B]/20 rounded-sm overflow-hidden transition-all duration-500 hover:border-[#C6A66B]/60 cursor-pointer flex flex-col justify-between gold-glow-hover"
    >
      <div>
        {/* Card Image Container with Hover Zoom */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={service.image}
            alt={service.name}
            onError={(e) => {
              if (service.fallbackImage && e.target.src !== service.fallbackImage) {
                e.target.src = service.fallbackImage;
              }
            }}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#211E1A] via-transparent to-transparent opacity-80"></div>

          {/* Number & Category Badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1 bg-[#151412]/80 backdrop-blur-md border border-[#C6A66B]/30 font-serif text-sm text-[#C6A66B]">
              {service.number}
            </span>
            <span className="px-2.5 py-1 bg-[#151412]/60 backdrop-blur-md border border-[#C6A66B]/20 text-[9px] uppercase tracking-widest text-[#E8DED0]">
              {service.category}
            </span>
          </div>

          {/* Duration Pill */}
          <div className="absolute bottom-4 right-4 flex items-center gap-1 text-[11px] font-sans text-[#E8DED0] bg-[#151412]/80 backdrop-blur-md px-2.5 py-1 border border-[#C6A66B]/20">
            <Clock className="w-3 h-3 text-[#C6A66B]" />
            <span>{service.duration}</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <Link
              to={`/services/${service.slug}`}
              className="font-serif text-2xl sm:text-3xl text-[#F7F3EC] group-hover:text-[#C6A66B] transition-colors uppercase font-light leading-snug"
            >
              {service.name}
            </Link>
            <div className="w-8 h-8 rounded-full border border-[#C6A66B]/30 flex items-center justify-center text-[#C6A66B] group-hover:bg-[#C6A66B] group-hover:text-[#151412] transition-colors shrink-0">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#E8DED0]/80 font-light leading-relaxed line-clamp-2">
            {service.shortDescription}
          </p>

          {/* Detailed Pricing Pills if multi-duration */}
          {service.pricing && service.pricing.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {service.pricing.map((p, idx) => (
                <div key={idx} className="px-2.5 py-1 bg-[#151412] border border-[#C6A66B]/30 rounded-sm text-xs font-sans text-[#E8DED0]">
                  <span className="text-[#A3998E] text-[10px] uppercase font-mono mr-1">{p.duration}:</span>
                  <span className="text-[#C6A66B] font-serif font-medium">{p.price}</span>
                </div>
              ))}
            </div>
          )}

          {/* Benefits Tags */}
          {service.benefits && service.benefits.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2 border-t border-[#C6A66B]/15">
              {service.benefits.slice(0, 2).map((benefit, i) => (
                <span key={i} className="text-[10px] text-[#A3998E] font-sans flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-[#C6A66B]" />
                  {benefit}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Card Footer with Price & WhatsApp Booking CTA */}
      <div className="p-6 sm:p-8 pt-0 flex items-center justify-between gap-4">
        <div>
          <span className="text-[10px] text-[#A3998E] uppercase tracking-widest block font-sans">
            PRICE
          </span>
          <span className="font-serif text-xl sm:text-2xl text-[#F7F3EC] group-hover:text-[#C6A66B] transition-colors">
            {service.price}
          </span>
        </div>

        <button
          onClick={handleWhatsAppBook}
          className="whatsapp-btn px-4 py-2.5 bg-[#25D366] text-[#151412] text-xs font-sans uppercase tracking-widest font-semibold hover:bg-[#20ba5a] transition-all duration-300 flex items-center gap-2 rounded-sm shadow-sm"
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span className="hidden xs:inline-block">BOOK ON WHATSAPP</span>
          <span className="xs:hidden">BOOK</span>
        </button>
      </div>

      {/* Subtle Gold Line Animation on Hover */}
      <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C6A66B] group-hover:w-full transition-all duration-700"></div>
    </div>
  );
}
