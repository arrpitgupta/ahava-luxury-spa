import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MessageCircle, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import { business } from '../config/business';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Booking', path: '/booking' },
  ];

  const handleWhatsAppClick = () => {
    const url = getWhatsAppUrl("Hello Ahava Luxury Spa, I am interested in booking a spa treatment.");
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-[#2C2621] text-[#FAF6F0] border-t border-[#C6A66B]/30 pt-20 pb-12 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-16 border-b border-[#C6A66B]/15">
          
          {/* Col 1: Brand Identity */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block focus:outline-none">
              <img
                src="/logo.png"
                alt="Ahava Luxury Spa"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </Link>

            <p className="font-serif italic text-lg text-[#E8DED0]/80 font-light">
              {business.tagline}
            </p>

            <p className="font-sans text-xs text-[#A3998E] font-light leading-relaxed max-w-sm">
              Escape the ordinary and step into a refined world of restorative body therapy, hydrating cellular facials, and timeless tranquility.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-full border border-[#C6A66B]/30 text-[#C6A66B] hover:bg-[#C6A66B] hover:text-[#151412] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={business.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2.5 rounded-full border border-[#C6A66B]/30 text-[#C6A66B] hover:bg-[#C6A66B] hover:text-[#151412] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppUrl("Hello Ahava Luxury Spa, I would like to connect on WhatsApp.")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2.5 rounded-full border border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366] hover:text-[#151412] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-lg uppercase tracking-wider text-[#C6A66B] font-light">
              Navigation
            </h4>
            <ul className="space-y-2.5 font-sans text-xs uppercase tracking-widest text-[#E8DED0]/80">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-[#C6A66B] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg uppercase tracking-wider text-[#C6A66B] font-light">
              Sanctuary Contact
            </h4>
            <div className="space-y-3 font-sans text-xs text-[#E8DED0]/80 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#C6A66B] shrink-0 mt-0.5" />
                <span>{business.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#C6A66B] shrink-0" />
                <a href={`tel:${business.phone}`} className="hover:text-[#C6A66B] transition-colors">
                  {business.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#C6A66B] shrink-0" />
                <a href={`mailto:${business.email}`} className="hover:text-[#C6A66B] transition-colors">
                  {business.email}
                </a>
              </div>
              <div className="text-[11px] text-[#A3998E] pt-1">
                Hours: {business.openingHours}
              </div>
            </div>
          </div>

          {/* Col 4: Reserve CTA Box */}
          <div className="lg:col-span-3 p-6 bg-[#1C1A17] border border-[#C6A66B]/30 rounded-sm flex flex-col justify-between space-y-5 shadow-luxury">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#25D366]/10 border border-[#25D366]/30 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
                <span className="text-[10px] font-sans tracking-wider text-[#25D366] uppercase font-semibold">
                  WhatsApp Concierge
                </span>
              </div>
              <h4 className="font-serif text-xl text-[#F7F3EC] uppercase tracking-wide pt-1">
                Instant Booking
              </h4>
              <p className="font-sans text-xs text-[#A3998E] font-light leading-relaxed">
                Direct assistance for appointments, custom rituals & private retreats.
              </p>
            </div>

            <div className="space-y-2.5">
              <Link
                to="/booking"
                className="w-full py-3 px-4 bg-[#C6A66B] text-[#151412] text-xs font-sans uppercase tracking-wider font-semibold hover:bg-[#d6b77c] transition-all flex items-center justify-center gap-2 rounded-sm shadow-gold-glow"
              >
                <span>BOOK APPOINTMENT ONLINE</span>
              </Link>

              <button
                onClick={handleWhatsAppClick}
                className="w-full py-2.5 px-4 border border-[#25D366]/60 text-[#25D366] hover:bg-[#25D366] hover:text-[#151412] text-xs font-sans uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 rounded-sm shrink-0 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>CHAT ON WHATSAPP</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#A3998E] font-light">
          <p>© 2026 {business.name}. All Rights Reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#C6A66B] hover:text-[#F7F3EC] transition-colors uppercase text-[10px] tracking-ultra sm:mr-44 md:mr-52 cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
