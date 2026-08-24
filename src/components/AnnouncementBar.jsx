import React from 'react';
import { Sparkles, PhoneCall } from 'lucide-react';
import { business } from '../config/business';

export default function AnnouncementBar({ onOpenBooking }) {
  return (
    <aside aria-label="Announcement" className="bg-[#151412] text-[#E8DED0] border-b border-[#C6A66B]/15 py-2 px-4 text-xs tracking-ultra font-sans uppercase">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="hidden sm:flex items-center gap-2 text-[#C6A66B]/80 text-[10px]">
          <Sparkles className="w-3 h-3 text-[#C6A66B]" />
          <span>SANCTUARY OF WELLNESS</span>
        </div>

        <div className="mx-auto sm:mx-0 flex items-center gap-3 text-center">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C6A66B] animate-pulse"></span>
          <span className="text-[#F7F3EC] tracking-[0.2em] text-[11px] sm:text-xs">
            ESCAPE THE ORDINARY — EXPERIENCE AHAVA
          </span>
        </div>

        <div className="hidden md:flex items-center gap-4 text-[11px]">
          <a
            href={`tel:${business.phone}`}
            className="hover:text-[#C6A66B] transition-colors flex items-center gap-1.5 text-[#E8DED0]"
          >
            <PhoneCall className="w-3 h-3 text-[#C6A66B]" />
            <span>{business.phone}</span>
          </a>
          <span className="text-[#6D5A48]">|</span>
          <button
            onClick={onOpenBooking}
            className="text-[#C6A66B] hover:text-[#F7F3EC] underline underline-offset-4 decoration-[#C6A66B]/40 transition-colors uppercase text-[10px] tracking-widest"
          >
            Reserve Online
          </button>
        </div>
      </div>
    </aside>
  );
}
