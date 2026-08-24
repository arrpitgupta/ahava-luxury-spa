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
    // { name: 'Booking', path: '/booking' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${useSolidBg
        ? 'bg-[#FAF6F0]/95 backdrop-blur-md border-b border-[#C6A66B]/25 py-3 sm:py-3.5 shadow-luxury'
        : 'bg-gradient-to-b from-[#FAF6F0]/90 via-[#FAF6F0]/50 to-transparent py-4 sm:py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Brand Logo */}
          <Link
            to="/"
            className="group focus:outline-none"
            aria-label="Ahava Luxury Spa Home"
          >
            <img
              src="/logo.png"
              alt="Ahava Luxury Spa"
              className="h-11 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs uppercase tracking-widest transition-colors relative py-1 ${isActive ? 'text-[#C6A66B] font-semibold' : 'text-[#2C2621]/85 hover:text-[#C6A66B]'
                    } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-[#C6A66B] ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                    } after:transition-all after:duration-300`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Primary CTA Buttons (Booking Page + WhatsApp) */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link
              to="/booking"
              className="px-5 py-2.5 bg-[#C6A66B] text-[#FAF6F0] text-xs font-sans tracking-widest uppercase font-semibold hover:bg-[#a8884c] transition-all rounded-sm shadow-gold-glow"
            >
              BOOK APPOINTMENT
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              to="/booking"
              className="sm:hidden px-3 py-1.5 bg-[#C6A66B] text-[#FAF6F0] text-[10px] uppercase tracking-widest font-semibold flex items-center gap-1 rounded-sm"
            >
              Book
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="p-2 text-[#2C2621] hover:text-[#C6A66B] focus:outline-none transition-colors"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Animated Mobile Menu Overlay */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 bg-[#FAF6F0] text-[#2C2621] z-[100] flex flex-col justify-between p-6 sm:p-8 invisible opacity-0 lg:hidden overflow-y-auto min-h-screen"
      >
        <div className="flex items-center justify-between border-b border-[#C6A66B]/20 pb-6">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            <img
              src="/logo.png"
              alt="Ahava Luxury Spa"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation menu"
            className="p-2 text-[#2C2621] hover:text-[#C6A66B] focus:outline-none transition-colors border border-[#C6A66B]/30 rounded-full"
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
                className="border-b border-[#C6A66B]/15 pb-4"
              >
                <Link
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-serif text-3xl sm:text-4xl flex items-center justify-between tracking-wide transition-colors ${isActive ? 'text-[#C6A66B] font-normal' : 'text-[#2C2621] hover:text-[#C6A66B]'
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
          <Link
            to="/booking"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-4 bg-[#C6A66B] text-[#FAF6F0] font-sans text-xs uppercase tracking-ultra font-semibold hover:bg-[#a8884c] transition-colors flex items-center justify-center gap-2 rounded-sm"
          >
            <span>BOOK APPOINTMENT</span>
          </Link>

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
