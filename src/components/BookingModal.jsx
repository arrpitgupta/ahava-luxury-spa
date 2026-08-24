import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Sparkles, CheckCircle2, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { services } from '../data/services';

export default function BookingModal({ isOpen, onClose, selectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceId: selectedService?.id || '08',
    date: '',
    time: '14:00',
    guests: '1 Guest',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, serviceId: selectedService.id }));
    }
  }, [selectedService]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      setSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const chosenService = services.find((s) => s.id === formData.serviceId) || services[7];

  return (
    <div className="fixed inset-0 z-50 bg-[#151412]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#211E1A] border border-[#C6A66B]/40 rounded-sm shadow-luxury overflow-hidden my-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 sm:p-8 border-b border-[#C6A66B]/20 bg-[#151412]/80">
          <div>
            <span className="text-[10px] font-sans tracking-ultra text-[#C6A66B] uppercase block">
              AHAVA LUXURY SPA
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F7F3EC] uppercase tracking-wide">
              RESERVE YOUR EXPERIENCE
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close reservation modal"
            className="p-2 text-[#F7F3EC] hover:text-[#C6A66B] rounded-full border border-[#C6A66B]/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-12 text-center space-y-6">
              <div className="w-16 h-16 bg-[#C6A66B]/20 border border-[#C6A66B] rounded-full flex items-center justify-center mx-auto text-[#C6A66B]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h4 className="font-serif text-3xl text-[#F7F3EC] uppercase tracking-wide">
                RESERVATION REQUEST RECEIVED
              </h4>

              <p className="font-sans text-sm text-[#E8DED0]/80 font-light leading-relaxed max-w-md mx-auto">
                Thank you, <span className="text-[#C6A66B] font-medium">{formData.name}</span>. Our spa concierge will contact you shortly at <span className="text-[#C6A66B]">{formData.phone}</span> to confirm your reservation for <span className="text-[#C6A66B]">{chosenService.name}</span>.
              </p>

              <div className="p-4 bg-[#151412] border border-[#C6A66B]/20 rounded-sm max-w-sm mx-auto text-xs text-[#A3998E] space-y-1">
                <div>Treatment: {chosenService.name} ({chosenService.duration})</div>
                <div>Price: {chosenService.price}</div>
                {formData.date && <div>Preferred Date: {formData.date} at {formData.time}</div>}
              </div>

              <button
                onClick={onClose}
                className="px-8 py-3 bg-[#C6A66B] text-[#151412] text-xs font-sans uppercase tracking-widest font-semibold hover:bg-[#F7F3EC] transition-colors"
              >
                CLOSE WINDOW
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-sans tracking-widest text-[#C6A66B] uppercase mb-2">
                  Select Treatment / Ritual
                </label>
                <select
                  name="serviceId"
                  value={formData.serviceId}
                  onChange={handleChange}
                  className="w-full bg-[#151412] border border-[#C6A66B]/30 text-[#F7F3EC] text-sm font-sans p-3 rounded-sm focus:outline-none focus:border-[#C6A66B]"
                >
                  {services.map((s) => (
                    s.pricing ? s.pricing.map((p, idx) => (
                      <option key={`${s.id}-${idx}`} value={s.id}>
                        {s.id} — {s.name} ({p.duration} • {p.price})
                      </option>
                    )) : (
                      <option key={s.id} value={s.id}>
                        {s.id} — {s.name} ({s.duration} • {s.price})
                      </option>
                    )
                  ))}
                </select>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans tracking-widest text-[#E8DED0]/80 uppercase mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#151412] border border-[#C6A66B]/30 text-[#F7F3EC] text-sm p-3 pl-10 rounded-sm focus:outline-none focus:border-[#C6A66B]"
                    />
                    <User className="w-4 h-4 text-[#C6A66B] absolute left-3 top-3.5" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans tracking-widest text-[#E8DED0]/80 uppercase mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="090355 59695"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#151412] border border-[#C6A66B]/30 text-[#F7F3EC] text-sm p-3 pl-10 rounded-sm focus:outline-none focus:border-[#C6A66B]"
                    />
                    <Phone className="w-4 h-4 text-[#C6A66B] absolute left-3 top-3.5" />
                  </div>
                </div>
              </div>

              {/* Email + Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans tracking-widest text-[#E8DED0]/80 uppercase mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="priya@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#151412] border border-[#C6A66B]/30 text-[#F7F3EC] text-sm p-3 pl-10 rounded-sm focus:outline-none focus:border-[#C6A66B]"
                    />
                    <Mail className="w-4 h-4 text-[#C6A66B] absolute left-3 top-3.5" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans tracking-widest text-[#E8DED0]/80 uppercase mb-1">
                    Number of Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-[#151412] border border-[#C6A66B]/30 text-[#F7F3EC] text-sm p-3 rounded-sm focus:outline-none focus:border-[#C6A66B]"
                  >
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests (Couple)">2 Guests (Couple Ritual)</option>
                    <option value="Small Group (3-5)">Small Group Retreat (3-5)</option>
                    <option value="Private Event">Private Spa Event (6+)</option>
                  </select>
                </div>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans tracking-widest text-[#E8DED0]/80 uppercase mb-1">
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
                  <label className="block text-xs font-sans tracking-widest text-[#E8DED0]/80 uppercase mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-[#151412] border border-[#C6A66B]/30 text-[#F7F3EC] text-sm p-3 rounded-sm focus:outline-none focus:border-[#C6A66B]"
                  >
                    <option value="10:00">10:00 AM — Morning Quiet</option>
                    <option value="12:00">12:00 PM — Midday Renewal</option>
                    <option value="14:00">02:00 PM — Afternoon Sanctuary</option>
                    <option value="16:00">04:00 PM — Twilight Flow</option>
                    <option value="18:00">06:00 PM — Evening Calm</option>
                    <option value="19:30">07:30 PM — Night Restorative</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-sans tracking-widest text-[#E8DED0]/80 uppercase mb-1">
                  Special Requests / Allergies / Notes
                </label>
                <textarea
                  name="message"
                  rows="2"
                  placeholder="Mention any physical tension areas, pressure preferences, or health considerations..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#151412] border border-[#C6A66B]/30 text-[#F7F3EC] text-sm p-3 rounded-sm focus:outline-none focus:border-[#C6A66B]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-[#C6A66B] text-[#151412] text-xs font-sans uppercase tracking-ultra font-semibold hover:bg-[#F7F3EC] transition-all duration-300 shadow-luxury flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>SUBMIT RESERVATION ENQUIRY</span>
              </button>

              <p className="text-[10px] text-center text-[#A3998E] font-sans">
                * No immediate payment is required. Our concierge will contact you to finalize timing & custom preferences.
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
