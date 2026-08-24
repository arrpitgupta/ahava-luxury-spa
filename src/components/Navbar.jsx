import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Phone, MapPin } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { business } from '../config/business';
import { gsap } from '../animations/gsap';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);
  const menuItemsRef = useRef([]);

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP animation for mobile menu open/close
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      gsap.to(mobileMenuRef.current, {
        opacity: 1,
        visibility: 'visible',
        duration: 0.4,
        ease: 'power3.out',
      });

      if (menuItemsRef.current.length > 0) {
        gsap.fromTo(
          menuItemsRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            delay: 0.15,
            ease: 'power3.out',
          }
        );
      }
    } else {
      document.body.style.overflow = 'auto';
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power3.in',
        onComplete: () => {
          if (mobileMenuRef.current) {
            mobileMenuRef.current.style.visibility = 'hidden';
          }
        },
      });
    }
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleWhatsAppClick = () => {
    const url = getWhatsAppUrl("Hello Ahava Luxury Spa, I would like to book a treatment experience.");
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const useSolidBg = !isHomePage || isScrolled;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        useSolidBg
          ? 'bg-[#151412]/95 backdrop-blur-md border-b border-[#C6A66B]/20 py-3.5 shadow-luxury'
          : 'bg-gradient-to-b from-[#151412]/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Typographic Logo */}
          <Link
            to="/"
            className="group flex flex-col focus:outline-none"
            aria-label="Ahava Luxury Spa Home"
          >
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.25em] text-[#F7F3EC] group-hover:text-[#C6A66B] transition-colors font-light uppercase">
              AHAVA
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.4em] text-[#C6A66B] font-sans uppercase font-medium -mt-1">
              LUXURY SPA
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs uppercase tracking-widest transition-colors relative py-1 ${
                    isActive ? 'text-[#C6A66B] font-medium' : 'text-[#E8DED0]/85 hover:text-[#C6A66B]'
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-[#C6A66B] ${
                    isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  } after:transition-all after:duration-300`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Primary CTA Button (WhatsApp First) */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={handleWhatsAppClick}
              className="relative group px-6 py-2.5 overflow-hidden border border-[#25D366]/80 text-xs font-sans tracking-widest uppercase text-[#F7F3EC] transition-all duration-500 hover:border-[#25D366] focus:outline-none"
            >
              <span className="absolute inset-0 bg-[#25D366] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
              <span className="relative z-10 group-hover:text-[#151412] font-semibold flex items-center gap-2">
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>BOOK ON WHATSAPP</span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={handleWhatsAppClick}
              className="sm:hidden px-3 py-1.5 bg-[#25D366] text-[#151412] text-[10px] uppercase tracking-widest font-semibold flex items-center gap-1"
            >
              <MessageCircle className="w-3 h-3 fill-[#151412]" />
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="p-2 text-[#F7F3EC] hover:text-[#C6A66B] focus:outline-none transition-colors"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Animated Mobile Menu Overlay */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 bg-[#151412] z-[100] flex flex-col justify-between p-6 sm:p-8 invisible opacity-0 lg:hidden overflow-y-auto min-h-screen"
      >
        <div className="flex items-center justify-between border-b border-[#C6A66B]/20 pb-6">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex flex-col">
            <span className="font-serif text-2xl tracking-[0.25em] text-[#F7F3EC] uppercase font-light">
              AHAVA
            </span>
            <span className="text-[9px] tracking-[0.4em] text-[#C6A66B] font-sans uppercase font-medium -mt-1">
              LUXURY SPA
            </span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation menu"
            className="p-2 text-[#F7F3EC] hover:text-[#C6A66B] focus:outline-none transition-colors border border-[#C6A66B]/30 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Nav Links List */}
        <nav className="flex flex-col space-y-6 my-auto py-8">
          {navLinks.map((link, idx) => {
            const isActive = location.pathname === link.path;
            return (
              <div
                key={link.name}
                ref={(el) => (menuItemsRef.current[idx] = el)}
                className="border-b border-[#C6A66B]/10 pb-4"
              >
                <Link
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-serif text-3xl sm:text-4xl flex items-center justify-between tracking-wide transition-colors ${
                    isActive ? 'text-[#C6A66B]' : 'text-[#F7F3EC] hover:text-[#C6A66B]'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-sans text-[#C6A66B] font-light">0{idx + 1}</span>
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Mobile Menu Footer Info */}
        <div className="space-y-6 border-t border-[#C6A66B]/20 pt-6">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              handleWhatsAppClick();
            }}
            className="w-full py-4 bg-[#25D366] text-[#151412] font-sans text-xs uppercase tracking-ultra font-semibold hover:bg-[#20ba5a] transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-[#151412]" />
            <span>BOOK ON WHATSAPP</span>
          </button>

          <div className="grid grid-cols-2 gap-4 text-xs text-[#E8DED0]/70 font-sans pt-2">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#C6A66B]" />
              <span>{business.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#C6A66B]" />
              <span>HSR Layout, Bengaluru</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
