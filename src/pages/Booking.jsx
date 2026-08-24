import React, { useState, useEffect } from 'react';
import PageHero from '../components/PageHero';
import { services } from '../data/services';
import { getBookingFormWhatsAppUrl } from '../utils/whatsapp';
import { Calendar, Clock, MessageCircle, Send, Sparkles, User, Phone, Mail } from 'lucide-react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceName: services[0]?.name || 'Swedish Massage',
    date: '',
    time: '14:00',
    message: '',
  });

  useEffect(() => {
    document.title = "Book Your Experience | Ahava Luxury Spa";
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

  return (
    <div className="bg-[#151412] text-[#F7F3EC] min-h-screen">
      
      {/* Page Hero */}
      <PageHero
        eyebrow="RESERVE ONLINE"
        title="BOOK YOUR"
        italicTitle="SANCTUARY RITUAL"
        description="Select your preferred treatment, date, and time. Your reservation request will be formatted directly into a WhatsApp message for instant concierge confirmation."
        breadcrumbs={[{ label: 'Booking' }]}
        bgImage="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          
          <div className="p-8 sm:p-12 bg-[#211E1A] border border-[#C6A66B]/30 rounded-sm shadow-luxury space-y-8">
            
            <div className="text-center space-y-2 border-b border-[#C6A66B]/20 pb-6">
              <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#25D366] font-semibold">
                WHATSAPP RESERVATION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl uppercase text-[#F7F3EC]">
                RESERVATION DETAILS
              </h2>
              <p className="font-sans text-xs text-[#E8DED0]/70 font-light">
                No immediate payment required. Instant confirmation via WhatsApp concierge.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-sans uppercase tracking-widest text-[#C6A66B] mb-2 font-medium">
                  Select Treatment / Ritual *
                </label>
                <select
                  name="serviceName"
                  value={formData.serviceName}
                  onChange={handleChange}
                  className="w-full bg-[#151412] border border-[#C6A66B]/30 text-[#F7F3EC] text-sm p-4 rounded-sm focus:outline-none focus:border-[#C6A66B]"
                >
                  {services.map((s) => (
                    s.pricing ? s.pricing.map((p, idx) => (
                      <option key={`${s.slug}-${idx}`} value={`${s.name} (${p.duration})`}>
                        {s.number} — {s.name} ({p.duration} • {p.price})
                      </option>
                    )) : (
                      <option key={s.slug} value={s.name}>
                        {s.number} — {s.name} ({s.duration} • {s.price})
                      </option>
                    )
                  ))}
                  <option value="Custom Group Event">Custom Private Spa Event</option>
                </select>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-sans uppercase tracking-widest text-[#E8DED0]/80 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Arpit Gupta"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#151412] border border-[#C6A66B]/30 text-[#F7F3EC] text-sm p-3.5 pl-10 rounded-sm focus:outline-none focus:border-[#C6A66B]"
                    />
                    <User className="w-4 h-4 text-[#C6A66B] absolute left-3 top-4" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans uppercase tracking-widest text-[#E8DED0]/80 mb-2">
                    Phone Number (WhatsApp) *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="090355 59695"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#151412] border border-[#C6A66B]/30 text-[#F7F3EC] text-sm p-3.5 pl-10 rounded-sm focus:outline-none focus:border-[#C6A66B]"
                    />
                    <Phone className="w-4 h-4 text-[#C6A66B] absolute left-3 top-4" />
                  </div>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-sans uppercase tracking-widest text-[#E8DED0]/80 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-[#151412] border border-[#C6A66B]/30 text-[#F7F3EC] text-sm p-3.5 rounded-sm focus:outline-none focus:border-[#C6A66B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans uppercase tracking-widest text-[#E8DED0]/80 mb-2">
                    Preferred Time Slot
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-[#151412] border border-[#C6A66B]/30 text-[#F7F3EC] text-sm p-3.5 rounded-sm focus:outline-none focus:border-[#C6A66B]"
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
                <label className="block text-xs font-sans uppercase tracking-widest text-[#E8DED0]/80 mb-2">
                  Special Requests / Allergies / Notes
                </label>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Mention pressure preferences, physical focus areas, or special occasion notes..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#151412] border border-[#C6A66B]/30 text-[#F7F3EC] text-sm p-3.5 rounded-sm focus:outline-none focus:border-[#C6A66B]"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 bg-[#25D366] text-[#151412] text-xs font-sans uppercase tracking-ultra font-semibold hover:bg-[#20ba5a] transition-all duration-300 shadow-luxury flex items-center justify-center gap-3 rounded-sm"
              >
                <MessageCircle className="w-5 h-5 fill-[#151412]" />
                <span>CONFIRM & BOOK VIA WHATSAPP</span>
              </button>

            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
