import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Instagram, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { business } from '../config/business';

export default function ReelVideoSection({
  videoUrl = "https://res.cloudinary.com/e6ehhcen/video/upload/v1787575136/VID-20260824-WA0044.mp4", // Replace with user's Cloudinary link
  title = "EXPERIENCE THE ATMOSPHERE IN MOTION",
  eyebrow = "VIRTUAL SPA TOUR",
  description = "Take a peek inside our 2nd floor sanctuary in HSR Layout, Bengaluru. Step inside our tranquil VIP Jacuzzi suites, ambient stone treatment rooms, and soothing luxury atmosphere."
}) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleWhatsAppBook = () => {
    const url = getWhatsAppUrl("Hello Ahava Luxury Spa, I watched your spa video and would like to book a treatment session.");
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-24 lg:py-32 bg-[#151412] text-[#F7F3EC] relative overflow-hidden border-t border-b border-[#C6A66B]/15">

      {/* Background Radial Glow Accent */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#C6A66B]/5 rounded-full filter blur-[150px] pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Vertical 9:16 Reel Player Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-2xl overflow-hidden border-2 border-[#C6A66B]/40 shadow-luxury group bg-[#211E1A] gold-glow-hover">

              {/* HTML5 Video Element */}
              <video
                ref={videoRef}
                src={videoUrl}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
                onClick={togglePlay}
              />

              {/* Gradient Dark Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#151412] via-transparent to-[#151412]/40 pointer-events-none"></div>

              {/* Top Badge: Instagram Tag */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <div className="flex items-center gap-2 px-3 py-1 bg-[#151412]/75 backdrop-blur-md border border-[#C6A66B]/30 rounded-full">
                  <Instagram className="w-3.5 h-3.5 text-[#C6A66B]" />
                  <span className="text-[10px] font-sans tracking-wider text-[#F7F3EC] uppercase font-medium">
                    @ahavaluxuryspa
                  </span>
                </div>

                <div className="flex items-center gap-1 px-2.5 py-1 bg-[#25D366]/20 border border-[#25D366]/40 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
                  <span className="text-[9px] font-sans text-[#25D366] font-semibold tracking-wider">REEL</span>
                </div>
              </div>

              {/* Video Playback & Sound Control Overlays */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between z-10">

                {/* Play/Pause Button */}
                <button
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  className="p-3 bg-[#151412]/80 backdrop-blur-md border border-[#C6A66B]/40 rounded-full text-[#C6A66B] hover:bg-[#C6A66B] hover:text-[#151412] transition-all duration-300"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                </button>

                {/* Mute/Unmute Sound Control Button */}
                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                  className="p-3 bg-[#151412]/80 backdrop-blur-md border border-[#C6A66B]/40 rounded-full text-[#C6A66B] hover:bg-[#C6A66B] hover:text-[#151412] transition-all duration-300 flex items-center gap-1.5 text-xs font-sans"
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-4 h-4 text-[#A3998E]" />
                      <span className="text-[10px] text-[#A3998E] hidden sm:inline">Tap for Sound</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4 text-[#25D366]" />
                      <span className="text-[10px] text-[#25D366] hidden sm:inline">Sound On</span>
                    </>
                  )}
                </button>

              </div>

              {/* Center Large Play Icon when paused */}
              {!isPlaying && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center bg-[#151412]/50 backdrop-blur-xs cursor-pointer z-20"
                >
                  <div className="p-5 bg-[#C6A66B] text-[#151412] rounded-full shadow-gold-glow animate-pulse">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Right Column: Editorial Text & Highlights */}
          <div className="lg:col-span-7 space-y-8">

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#C6A66B]"></span>
                <span className="text-[#C6A66B] text-xs font-sans tracking-[0.3em] uppercase font-medium">
                  {eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#F7F3EC] font-light leading-[1.02]">
                SANCTUARY <span className="italic text-gold-gradient font-normal">IN MOTION</span>
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#E8DED0]/85 font-light leading-relaxed">
                {description}
              </p>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#C6A66B]/20">
              <div className="p-4 bg-[#211E1A] border border-[#C6A66B]/20 rounded-sm flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#C6A66B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-base text-[#F7F3EC] uppercase tracking-wide">
                    VIP Jacuzzi Suites
                  </h4>
                  <p className="font-sans text-xs text-[#A3998E] font-light mt-0.5">
                    Private hydrotherapy tubs for couples & luxury relaxation.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#211E1A] border border-[#C6A66B]/20 rounded-sm flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#C6A66B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-base text-[#F7F3EC] uppercase tracking-wide">
                    Hygiene & Pure Comfort
                  </h4>
                  <p className="font-sans text-xs text-[#A3998E] font-light mt-0.5">
                    Pristine climate-controlled rooms with Egyptian linens.
                  </p>
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={handleWhatsAppBook}
                className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-[#151412] text-xs font-sans uppercase tracking-widest font-semibold hover:bg-[#20ba5a] transition-all flex items-center justify-center gap-2.5 rounded-sm shadow-luxury"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>BOOK YOUR VISIT ON WHATSAPP</span>
              </button>

              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 border border-[#C6A66B]/40 hover:border-[#C6A66B] text-[#E8DED0] hover:text-[#C6A66B] text-xs font-sans uppercase tracking-widest flex items-center justify-center gap-2.5 rounded-sm transition-colors"
              >
                <Instagram className="w-4 h-4 shrink-0 text-[#C6A66B]" />
                <span>Follow On Instagram</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
