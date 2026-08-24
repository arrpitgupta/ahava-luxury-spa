import React, { useState, useEffect } from 'react';
import PageHero from '../components/PageHero';
import { business } from '../config/business';
import { services } from '../data/services';
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation, Send, Instagram, Facebook } from 'lucide-react';
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
    document.title = "Contact Ahava Luxury Spa | Book Your Experience";
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
    <div className="bg-[#151412] text-[#F7F3EC] min-h-screen">
      
      {/* Page Hero */}
      <PageHero
        eyebrow="LOCATION & RESERVATIONS"
        title="COME FIND YOUR"
        italicTitle="MOMENT OF CALM"
        description="Reach out directly to our spa concierge desk for treatment inquiries, directions, or bespoke suite arrangements."
        breadcrumbs={[{ label: 'Contact' }]}
        bgImage="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Contact Cards & Info */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="space-y-4">
                <span className="text-[#C6A66B] text-xs font-sans tracking-[0.3em] uppercase">
                  CONCIERGE DESK
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl uppercase font-light">
                  VISIT <span className="italic text-gold-gradient font-normal">AHAVA</span>
                </h2>
                <p className="font-sans text-sm text-[#E8DED0]/85 font-light leading-relaxed">
                  Located in HSR Layout, Bengaluru. We invite you to arrive 15 minutes prior to your scheduled appointment.
                </p>
              </div>

              {/* Info Details */}
              <div className="space-y-6 pt-6 border-t border-[#C6A66B]/20">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#211E1A] border border-[#C6A66B]/30 rounded-full text-[#C6A66B] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg uppercase text-[#F7F3EC]">Sanctuary Address</h4>
                    <p className="font-sans text-xs text-[#E8DED0]/80 font-light mt-1 leading-relaxed">
                      {business.address}
                    </p>
                  </div>
                </div>

                {/* WhatsApp & Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#211E1A] border border-[#25D366]/40 rounded-full text-[#25D366] shrink-0">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg uppercase text-[#F7F3EC]">WhatsApp Concierge</h4>
                    <button
                      onClick={handleGeneralWhatsAppClick}
                      className="font-sans text-xs text-[#25D366] hover:underline mt-1 block font-medium"
                    >
                      Chat on WhatsApp ({business.displayPhone})
                    </button>
                  </div>
                </div>

                {/* Call */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#211E1A] border border-[#C6A66B]/30 rounded-full text-[#C6A66B] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg uppercase text-[#F7F3EC]">Telephone Desk</h4>
                    <a href={`tel:${business.phone}`} className="font-sans text-xs text-[#E8DED0] hover:text-[#C6A66B] mt-1 block">
                      {business.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#211E1A] border border-[#C6A66B]/30 rounded-full text-[#C6A66B] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg uppercase text-[#F7F3EC]">Email Inquiries</h4>
                    <a href={`mailto:${business.email}`} className="font-sans text-xs text-[#E8DED0] hover:text-[#C6A66B] mt-1 block">
                      {business.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#211E1A] border border-[#C6A66B]/30 rounded-full text-[#C6A66B] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg uppercase text-[#F7F3EC]">Sanctuary Hours</h4>
                    <p className="font-sans text-xs text-[#E8DED0]/80 font-light mt-1">
                      {business.openingHours}
                    </p>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleGeneralWhatsAppClick}
                  className="px-6 py-3.5 bg-[#25D366] text-[#151412] text-xs font-sans uppercase tracking-widest font-semibold flex items-center justify-center gap-2 rounded-sm shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-[#151412]" />
                  <span>CHAT ON WHATSAPP</span>
                </button>

                <a
                  href={`tel:${business.phone}`}
                  className="px-6 py-3.5 border border-[#C6A66B] text-[#F7F3EC] hover:text-[#C6A66B] text-xs font-sans uppercase tracking-widest flex items-center justify-center gap-2 rounded-sm"
                >
                  <Phone className="w-4 h-4 text-[#C6A66B]" />
                  <span>CALL US</span>
                </a>
              </div>

            </div>

            {/* Right Column: Interactive WhatsApp Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 bg-[#211E1A] border border-[#C6A66B]/30 rounded-sm space-y-6 shadow-luxury">
                <div>
                  <span className="text-[10px] font-sans tracking-ultra text-[#25D366] uppercase block font-semibold">
                    WHATSAPP DIRECT ENQUIRY
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl uppercase text-[#F7F3EC] mt-1">
                    SEND AN ENQUIRY
                  </h3>
                  <p className="font-sans text-xs text-[#E8DED0]/70 font-light mt-1">
                    Submitting this form formats a customized message and opens WhatsApp directly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 pt-2">
                  
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-sans uppercase tracking-widest text-[#E8DED0]/80 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Arpit Gupta"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-[#151412] border border-[#C6A66B]/30 text-[#F7F3EC] text-sm p-3 rounded-sm focus:outline-none focus:border-[#C6A66B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-sans uppercase tracking-widest text-[#E8DED0]/80 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="090355 59695"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-[#151412] border border-[#C6A66B]/30 text-[#F7F3EC] text-sm p-3 rounded-sm focus:outline-none focus:border-[#C6A66B]"
                      />
                    </div>
                  </div>

                  {/* Treatment Select */}
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-widest text-[#E8DED0]/80 mb-1">
                      Preferred Treatment / Ritual
                    </label>
                    <select
                      name="serviceName"
                      value={formData.serviceName}
                      onChange={handleChange}
                      className="w-full bg-[#151412] border border-[#C6A66B]/30 text-[#F7F3EC] text-sm p-3 rounded-sm focus:outline-none focus:border-[#C6A66B]"
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
                      <option value="Custom Group Package">Custom Group / Corporate Package</option>
                    </select>
                  </div>

                  {/* Preferred Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-sans uppercase tracking-widest text-[#E8DED0]/80 mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-[#151412] border border-[#C6A66B]/30 text-[#F7F3EC] text-sm p-3 rounded-sm focus:outline-none focus:border-[#C6A66B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-sans uppercase tracking-widest text-[#E8DED0]/80 mb-1">
                        Preferred Time Slot
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full bg-[#151412] border border-[#C6A66B]/30 text-[#F7F3EC] text-sm p-3 rounded-sm focus:outline-none focus:border-[#C6A66B]"
                      >
                        <option value="10:00 AM">10:00 AM — Morning Quiet</option>
                        <option value="12:00 PM">12:00 PM — Midday Renewal</option>
                        <option value="2:00 PM">02:00 PM — Afternoon Sanctuary</option>
                        <option value="4:00 PM">04:00 PM — Twilight Flow</option>
                        <option value="6:00 PM">06:00 PM — Evening Calm</option>
                        <option value="7:30 PM">07:30 PM — Night Restorative</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-widest text-[#E8DED0]/80 mb-1">
                      Message / Special Requests
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      placeholder="Mention pressure preferences, health considerations, or anniversary notes..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-[#151412] border border-[#C6A66B]/30 text-[#F7F3EC] text-sm p-3 rounded-sm focus:outline-none focus:border-[#C6A66B]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#25D366] text-[#151412] text-xs font-sans uppercase tracking-ultra font-semibold hover:bg-[#20ba5a] transition-all flex items-center justify-center gap-2 rounded-sm shadow-luxury"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND ENQUIRY ON WHATSAPP</span>
                  </button>

                  <p className="text-[10px] text-center text-[#A3998E] font-sans">
                    * No payment data is stored. Opens directly in your WhatsApp app or browser.
                  </p>

                </form>
              </div>
            </div>

          </div>

          {/* Configurable Map Section */}
          <div className="mt-24 pt-16 border-t border-[#C6A66B]/20 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[#C6A66B] text-xs font-sans tracking-[0.3em] uppercase">
                  FIND OUR SANCTUARY
                </span>
                <h3 className="font-serif text-2xl uppercase">SANCTUARY LOCATION MAP</h3>
              </div>
              <a
                href={business.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#C6A66B] text-[#C6A66B] hover:bg-[#C6A66B] hover:text-[#151412] text-xs uppercase tracking-widest transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>
            </div>

            <div className="w-full h-80 rounded-sm overflow-hidden border border-[#C6A66B]/30 relative bg-[#211E1A] flex items-center justify-center text-center p-8">
              <div className="space-y-3 max-w-md">
                <MapPin className="w-8 h-8 text-[#C6A66B] mx-auto animate-bounce" />
                <h4 className="font-serif text-xl uppercase text-[#F7F3EC]">{business.name}</h4>
                <p className="font-sans text-xs text-[#E8DED0]/80 font-light">{business.address}</p>
                <a
                  href={business.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C6A66B] text-xs underline underline-offset-4 block pt-2"
                >
                  Get Interactive Driving Directions
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
