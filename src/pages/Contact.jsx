import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { business } from '../config/business';
import { services } from '../data/services';
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation, Send, Calendar, Sparkles } from 'lucide-react';
import { getWhatsAppUrl, getBookingFormWhatsAppUrl } from '../utils/whatsapp';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceName: services[0]?.name || 'Swedish Massage',
    date: '',
    time: '14:00',
    message: '',
  });

  useEffect(() => {
    document.title = "Contact Ahava Luxury Spa | Location & Reservations";
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in your name and phone number.");
      return;
    }
    const url = getBookingFormWhatsAppUrl(formData);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleGeneralWhatsAppClick = () => {
    const url = getWhatsAppUrl("Hello Ahava Luxury Spa, I would like to chat with your concierge desk.");
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#FAF6F0] text-[#2C2621] min-h-screen">
      
      {/* Page Hero */}
      <PageHero
        eyebrow="LOCATION & RESERVATIONS"
        title="COME FIND YOUR"
        italicTitle="MOMENT OF CALM"
        description="Reach out directly to our spa concierge desk for treatment inquiries, directions, or bespoke private suite arrangements."
        breadcrumbs={[{ label: 'Contact' }]}
        bgImage="https://res.cloudinary.com/e6ehhcen/image/upload/v1787587472/WhatsApp_Image_2026-08-24_at_9.19.17_PM.jpg"
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">

          {/* Quick Banner: Jump to Multi-Step Reservation Page */}
          <div className="p-6 sm:p-8 bg-[#F4EDE4] border border-[#C6A66B]/40 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-6 shadow-luxury">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[10px] font-sans tracking-widest uppercase text-[#C6A66B] font-semibold">
                ONLINE RESERVATIONS AVAILABLE
              </span>
              <h3 className="font-serif text-xl sm:text-2xl uppercase text-[#2C2621]">
                Looking to Schedule a Specific Therapy & Time Slot?
              </h3>
              <p className="font-sans text-xs text-[#4A423A] font-light">
                Use our interactive 5-step booking portal to choose your treatment, preferred time, and send an instant WhatsApp enquiry.
              </p>
            </div>
            <Link
              to="/booking"
              className="px-6 py-3.5 bg-[#C6A66B] text-[#FAF6F0] text-xs font-sans uppercase tracking-widest font-semibold hover:bg-[#a8884c] transition-all rounded-sm shrink-0 flex items-center gap-2 shadow-gold-glow"
            >
              <Calendar className="w-4 h-4" />
              <span>OPEN BOOKING PORTAL</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Contact Cards & Info */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="space-y-4">
                <span className="text-[#C6A66B] text-xs font-sans tracking-[0.3em] uppercase font-semibold">
                  CONCIERGE DESK
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl uppercase font-light text-[#2C2621]">
                  VISIT <span className="italic text-gold-gradient font-normal">AHAVA</span>
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#4A423A] font-light leading-relaxed">
                  Located in HSR Layout, Bengaluru. We invite you to arrive 15 minutes prior to your scheduled appointment to enjoy our serene relaxation lounge.
                </p>
              </div>

              {/* Info Details Grid */}
              <div className="space-y-6 pt-6 border-t border-[#C6A66B]/20">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FFFDF9] border border-[#C6A66B]/30 rounded-full text-[#C6A66B] shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base uppercase text-[#2C2621] font-medium">Sanctuary Address</h4>
                    <p className="font-sans text-xs text-[#4A423A] font-light mt-1 leading-relaxed">
                      {business.address}
                    </p>
                    <a
                      href={business.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C6A66B] text-[11px] font-sans hover:underline mt-1.5 inline-flex items-center gap-1 font-medium"
                    >
                      <Navigation className="w-3 h-3" />
                      <span>Get Driving Directions</span>
                    </a>
                  </div>
                </div>

                {/* WhatsApp & Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FFFDF9] border border-[#25D366]/40 rounded-full text-[#25D366] shrink-0 shadow-sm">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base uppercase text-[#2C2621] font-medium">WhatsApp Concierge Desk</h4>
                    <button
                      onClick={handleGeneralWhatsAppClick}
                      className="font-sans text-xs text-[#25D366] hover:underline mt-1 block font-semibold"
                    >
                      Instant Chat ({business.displayPhone})
                    </button>
                  </div>
                </div>

                {/* Call */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FFFDF9] border border-[#C6A66B]/30 rounded-full text-[#C6A66B] shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base uppercase text-[#2C2621] font-medium">Telephone Desk</h4>
                    <a href={`tel:${business.phone}`} className="font-sans text-xs text-[#4A423A] hover:text-[#C6A66B] mt-1 block font-medium">
                      {business.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FFFDF9] border border-[#C6A66B]/30 rounded-full text-[#C6A66B] shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base uppercase text-[#2C2621] font-medium">Email Inquiries</h4>
                    <a href={`mailto:${business.email}`} className="font-sans text-xs text-[#4A423A] hover:text-[#C6A66B] mt-1 block font-medium">
                      {business.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FFFDF9] border border-[#C6A66B]/30 rounded-full text-[#C6A66B] shrink-0 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base uppercase text-[#2C2621] font-medium">Sanctuary Hours</h4>
                    <p className="font-sans text-xs text-[#4A423A] font-light mt-1">
                      {business.openingHours}
                    </p>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleGeneralWhatsAppClick}
                  className="px-6 py-3.5 bg-[#25D366] text-[#FAF6F0] text-xs font-sans uppercase tracking-widest font-semibold flex items-center justify-center gap-2 rounded-sm shadow-sm hover:bg-[#20ba5a] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>CHAT ON WHATSAPP</span>
                </button>

                <a
                  href={`tel:${business.phone}`}
                  className="px-6 py-3.5 border border-[#C6A66B] text-[#2C2621] hover:bg-[#C6A66B] hover:text-[#FAF6F0] text-xs font-sans uppercase tracking-widest flex items-center justify-center gap-2 rounded-sm transition-colors font-medium"
                >
                  <Phone className="w-4 h-4 text-[#C6A66B]" />
                  <span>CALL DESK</span>
                </a>
              </div>

            </div>

            {/* Right Column: Quick Concierge Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 bg-[#FFFDF9] border border-[#C6A66B]/30 rounded-lg space-y-6 shadow-luxury">
                <div>
                  <span className="text-[10px] font-sans tracking-wider text-[#25D366] uppercase block font-semibold">
                    INSTANT CONCIERGE ENQUIRY
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl uppercase text-[#2C2621] mt-1">
                    Send Direct Message
                  </h3>
                  <p className="font-sans text-xs text-[#4A423A] font-light mt-1">
                    Have questions about custom packages, gift vouchers, or suite bookings? Send a direct formatted message to our concierge.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 pt-2">
                  
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-sans uppercase tracking-widest text-[#4A423A] mb-1 font-medium">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Arpit Gupta"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-[#FAF6F0] border border-[#C6A66B]/40 text-[#2C2621] text-sm p-3.5 rounded-md focus:outline-none focus:border-[#C6A66B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-sans uppercase tracking-widest text-[#4A423A] mb-1 font-medium">
                        Phone Number (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="090355 59695"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-[#FAF6F0] border border-[#C6A66B]/40 text-[#2C2621] text-sm p-3.5 rounded-md focus:outline-none focus:border-[#C6A66B]"
                      />
                    </div>
                  </div>

                  {/* Treatment Select */}
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-widest text-[#4A423A] mb-1 font-medium">
                      Preferred Therapy / Topic
                    </label>
                    <select
                      name="serviceName"
                      value={formData.serviceName}
                      onChange={handleChange}
                      className="w-full bg-[#FAF6F0] border border-[#C6A66B]/40 text-[#2C2621] text-sm p-3.5 rounded-md focus:outline-none focus:border-[#C6A66B]"
                    >
                      {services.map((s) => (
                        s.pricing ? s.pricing.map((p, idx) => (
                          <option key={`${s.slug}-${idx}`} value={`${s.name} (${p.duration})`}>
                            {s.name} ({p.duration} • {p.price})
                          </option>
                        )) : (
                          <option key={s.slug} value={s.name}>
                            {s.name} ({s.duration} • {s.price})
                          </option>
                        )
                      ))}
                      <option value="Custom Group Package">Custom Private Spa Event</option>
                      <option value="Gift Voucher Enquiry">Gift Voucher Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-widest text-[#4A423A] mb-1 font-medium">
                      Message / Special Requests
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      placeholder="Mention custom requirements, time preferences, or special occasion notes..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-[#FAF6F0] border border-[#C6A66B]/40 text-[#2C2621] text-sm p-3.5 rounded-md focus:outline-none focus:border-[#C6A66B]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#25D366] text-[#FAF6F0] text-xs font-sans uppercase tracking-widest font-semibold hover:bg-[#20ba5a] transition-all flex items-center justify-center gap-2 rounded-md shadow-luxury"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND ENQUIRY ON WHATSAPP</span>
                  </button>

                </form>
              </div>
            </div>

          </div>

          {/* High-Resolution Interactive Google Map Embed Section */}
          <div className="mt-16 pt-12 border-t border-[#C6A66B]/20 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[#C6A66B] text-xs font-sans tracking-[0.3em] uppercase font-semibold">
                  FIND OUR SANCTUARY
                </span>
                <h3 className="font-serif text-2xl uppercase text-[#2C2621]">SANCTUARY LOCATION MAP</h3>
              </div>
              <a
                href={business.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#C6A66B] text-[#C6A66B] hover:bg-[#C6A66B] hover:text-[#FAF6F0] text-xs uppercase tracking-widest transition-colors rounded-sm font-semibold"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>
            </div>

            {/* Google Maps Interactive Iframe */}
            <div className="w-full h-96 rounded-lg overflow-hidden border border-[#C6A66B]/30 relative bg-[#211E1A] shadow-luxury">
              <iframe
                title="Ahava Luxury Spa Sanctuary Location"
                src="https://maps.google.com/maps?q=Ahava%20Luxury%20Spa%202630%2027th%20Main%20Rd%20HSR%20Layout%20Bengaluru&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter brightness-[0.85] contrast-[1.1] invert-[0.1]"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
