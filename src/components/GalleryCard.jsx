import React from 'react';
import { Maximize2 } from 'lucide-react';

export default function GalleryCard({ item, onClick }) {
  return (
    <div
      onClick={() => onClick(item)}
      className={`group relative overflow-hidden rounded-sm border border-[#C6A66B]/20 cursor-pointer ${item.aspect} shadow-luxury gold-glow-hover`}
    >
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 filter brightness-95 group-hover:brightness-105"
        loading="lazy"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#151412]/90 via-[#151412]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
        <span className="text-[10px] font-sans tracking-widest text-[#C6A66B] uppercase mb-1">
          {item.category}
        </span>
        <h3 className="font-serif text-xl sm:text-2xl text-[#F7F3EC] uppercase font-normal tracking-wide">
          {item.title}
        </h3>
        <div className="mt-3 flex items-center gap-2 text-xs text-[#E8DED0]/90">
          <Maximize2 className="w-3.5 h-3.5 text-[#C6A66B]" />
          <span>Expand Image</span>
        </div>
      </div>
    </div>
  );
}
