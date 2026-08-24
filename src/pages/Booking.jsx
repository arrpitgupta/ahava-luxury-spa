import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Calendar, Clock, MessageCircle, User, Phone, Mail, MapPin, Sparkles, ChevronRight, ChevronLeft, ShieldCheck } from 'lucide-react';
import { services } from '../data/services';
import { business } from '../config/business';
import { getBookingFormWhatsAppUrl } from '../utils/whatsapp';

export default function Booking() {
  const [currentStep, setCurrentStep] = useState(2); // Start at Treatment selection like the reference site
  const [activeCategory, setActiveCategory] = useState('ALL');
  
  // Selected Reservation State
  const [selectedBranch, setSelectedBranch] = useState('HSR Layout, Sector 1, Bengaluru');
  const [selectedService, setSelectedService] = useState(services[0] || null);
  const [selectedOption, setSelectedOption] = useState(
    services[0]?.pricing ? services[0].pricing[0] : { duration: services[0]?.duration || '60 min', price: services[0]?.price || '₹2,500' }
  );

  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  
  const [timeSlot, setTimeSlot] = useState('02:00 PM');
  
  const [guestDetails, setGuestDetails] = useState({
    name: '',
    phone: '',
    email: '',
    notes: ''
  });

  useEffect(() => {
    document.title = "Book Your Spa Therapy | Ahava Luxury Spa";
  }, []);

  // Update selected duration when service changes
  const handleServiceSelect = (service, option) => {
    setSelectedService(service);
    if (option) {
      setSelectedOption(option);
    } else if (service.pricing && service.pricing.length > 0) {
      setSelectedOption(service.pricing[0]);
    } else {
      setSelectedOption({ duration: service.duration, price: service.price });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGuestDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    if (!guestDetails.name || !guestDetails.phone) {
      alert("Please enter your name and WhatsApp phone number.");
      return;
    }

    const whatsappUrl = getBookingFormWhatsAppUrl({
      branch: selectedBranch,
      serviceName: selectedService ? selectedService.name : 'Spa Therapy',
      duration: selectedOption ? selectedOption.duration : '',
      price: selectedOption ? selectedOption.price : '',
      name: guestDetails.name,
      phone: guestDetails.phone,
      email: guestDetails.email,
      date: date,
      time: timeSlot,
      message: guestDetails.notes
    });

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // Filter Categories
  const categories = [
    { id: 'ALL', label: 'All Therapies' },
    { id: 'massage', label: 'Signature Massage' },
    { id: 'couple', label: 'VIP & Couples' },
    { id: 'steam', label: 'Express & Steam' },
  ];

  const filteredServices = services.filter((s) => {
    if (activeCategory === 'ALL') return true;
    if (activeCategory === 'massage') return s.categorySlug === 'massage';
    if (activeCategory === 'couple') return s.slug === 'couple-massage' || s.slug === 'vip-room-jacuzzi';
    if (activeCategory === 'steam') return s.slug === 'steam-bath';
    return true;
  });

  const steps = [
    { number: 1, key: 'BRANCH', label: 'BRANCH' },
    { number: 2, key: 'TREATMENT', label: 'TREATMENT' },
    { number: 3, key: 'SCHEDULE', label: 'SCHEDULE' },
    { number: 4, key: 'DETAILS', label: 'DETAILS' },
    { number: 5, key: 'CONFIRM', label: 'CONFIRM' },
  ];

  const timeSlots = [
    "11:00 AM", "12:30 PM", "02:00 PM", "03:30 PM", 
    "05:00 PM", "06:30 PM", "08:00 PM", "09:00 PM"
  ];

  return (
    <div className="bg-[#151412] text-[#F7F3EC] min-h-screen pt-28 sm:pt-32 pb-24">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Section */}
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-sans tracking-[0.35em] text-[#C6A66B] uppercase font-medium">
            RESERVATIONS
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F7F3EC] uppercase font-light">
            Book Your <span className="italic text-gold-gradient font-normal">Spa Therapy</span>
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#A3998E] font-light max-w-xl mx-auto">
            Select your preferred treatment & schedule. Your reservation enquiry will be formatted directly for instant WhatsApp confirmation.
          </p>
        </div>

        {/* 5-Step Stepper Progress Bar Header */}
        <div className="mb-14 max-w-3xl mx-auto px-2">
          <div className="flex items-center justify-between relative">
            
            {/* Horizontal Connecting Line */}
            <div className="absolute left-0 right-0 top-4 h-[2px] bg-[#C6A66B]/20 -z-0"></div>

            {steps.map((step) => {
              const isCompleted = currentStep > step.number;
              const isCurrent = currentStep === step.number;

              return (
                <div
                  key={step.key}
                  onClick={() => setCurrentStep(step.number)}
                  className="relative z-10 flex flex-col items-center cursor-pointer group"
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-sans font-medium transition-all duration-300 ${
                      isCompleted
                        ? 'bg-[#C6A66B] text-[#151412]'
                        : isCurrent
                        ? 'bg-[#C6A66B] text-[#151412] ring-4 ring-[#C6A66B]/20 font-bold'
                        : 'bg-[#211E1A] text-[#A3998E] border border-[#C6A66B]/30 group-hover:border-[#C6A66B]'
                    }`}
                  >
                    {isCompleted ? <Check className="w-4 h-4 stroke-[3]" /> : step.number}
                  </div>
                  <span
                    className={`text-[9px] sm:text-[10px] font-sans tracking-widest uppercase mt-2 font-medium ${
                      isCurrent ? 'text-[#C6A66B]' : isCompleted ? 'text-[#F7F3EC]' : 'text-[#A3998E]/70'
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* STEP 1: BRANCH SELECTION */}
        {currentStep === 1 && (
          <div className="max-w-2xl mx-auto bg-[#1C1A17] border border-[#C6A66B]/30 rounded-lg p-6 sm:p-10 shadow-luxury space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-sans tracking-wider text-[#C6A66B] uppercase font-semibold">
                SELECT SANCTUARY BRANCH
              </span>
              <h2 className="font-serif text-2xl text-[#F7F3EC] uppercase">
                Choose Location
              </h2>
            </div>

            <div
              onClick={() => setSelectedBranch('HSR Layout, Sector 1, Bengaluru')}
              className="p-6 bg-[#211E1A] border-2 border-[#C6A66B] rounded-md flex items-start gap-4 cursor-pointer relative"
            >
              <div className="p-3 bg-[#C6A66B]/15 text-[#C6A66B] rounded-full shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-lg text-[#F7F3EC] uppercase font-medium">
                    HSR Layout Sanctuary
                  </h3>
                  <span className="px-2 py-0.5 bg-[#25D366]/20 text-[#25D366] text-[9px] font-sans uppercase tracking-wider rounded-full font-semibold">
                    OPEN DAILY
                  </span>
                </div>
                <p className="font-sans text-xs text-[#E8DED0]/80 font-light leading-relaxed">
                  {business.address}
                </p>
                <div className="text-xs text-[#C6A66B] font-sans">
                  Phone: {business.phone} • Operating Hours: {business.openingHours}
                </div>
              </div>
              <div className="absolute top-4 right-4 text-[#C6A66B]">
                <Check className="w-5 h-5" />
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setCurrentStep(2)}
                className="px-8 py-3.5 bg-[#C6A66B] text-[#151412] text-xs font-sans uppercase tracking-widest font-semibold hover:bg-[#d6b77c] transition-all flex items-center gap-2 rounded-sm"
              >
                <span>Continue to Treatment</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: TREATMENT SELECTION (MATCHING THE SCREENSHOT) */}
        {currentStep === 2 && (
          <div className="bg-[#1C1A17] border border-[#C6A66B]/25 rounded-xl p-6 sm:p-10 shadow-luxury space-y-8">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#C6A66B]/15 pb-6">
              <div>
                <span className="text-[10px] font-sans tracking-wider text-[#C6A66B] uppercase font-semibold block mb-1">
                  STEP 2 OF 5
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F3EC]">
                  Choose your treatment
                </h2>
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 text-xs font-sans tracking-wider uppercase rounded-full transition-all duration-300 whitespace-nowrap ${
                      activeCategory === cat.id
                        ? 'bg-[#C6A66B] text-[#151412] font-semibold shadow-gold-glow'
                        : 'bg-[#211E1A] text-[#E8DED0]/70 hover:text-[#F7F3EC] border border-[#C6A66B]/20'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Treatment Cards Grid (2 columns on desktop matching screenshot) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredServices.map((service) => {
                const isServiceSelected = selectedService?.id === service.id;

                return (
                  <div
                    key={service.id}
                    className={`p-5 bg-[#211E1A] border rounded-lg transition-all duration-300 flex flex-col justify-between space-y-4 ${
                      isServiceSelected
                        ? 'border-2 border-[#C6A66B] shadow-gold-glow bg-[#211E1A]/90'
                        : 'border-[#C6A66B]/20 hover:border-[#C6A66B]/60'
                    }`}
                  >
                    <div className="flex gap-4">
                      {/* Thumbnail Image */}
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-md overflow-hidden shrink-0 border border-[#C6A66B]/30 relative group">
                        <img
                          src={service.image}
                          onError={(e) => { e.target.src = service.fallbackImage; }}
                          alt={service.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      {/* Content */}
                      <div className="space-y-1.5 flex-1">
                        <span className="text-[9px] font-sans tracking-widest text-[#C6A66B] uppercase font-medium block">
                          {service.category}
                        </span>
                        <h3 className="font-serif text-lg sm:text-xl text-[#F7F3EC] font-light leading-snug">
                          {service.name}
                        </h3>
                        <p className="font-sans text-xs text-[#A3998E] font-light line-clamp-2">
                          {service.shortDescription || service.benefits?.[0]}
                        </p>
                      </div>
                    </div>

                    {/* Duration & Price Options Pills */}
                    <div className="space-y-2 pt-2 border-t border-[#C6A66B]/15">
                      <span className="text-[10px] font-sans tracking-wider text-[#E8DED0]/60 uppercase block">
                        Select Duration & Pricing:
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {service.pricing ? (
                          service.pricing.map((opt, idx) => {
                            const isOptionActive = isServiceSelected && selectedOption?.duration === opt.duration;

                            return (
                              <button
                                key={idx}
                                onClick={() => handleServiceSelect(service, opt)}
                                className={`px-3 py-2 text-xs font-sans rounded-md border transition-all text-center flex items-center justify-center gap-1.5 ${
                                  isOptionActive
                                    ? 'bg-[#C6A66B] text-[#151412] border-[#C6A66B] font-semibold'
                                    : 'bg-[#151412] text-[#E8DED0] border-[#C6A66B]/30 hover:border-[#C6A66B]'
                                }`}
                              >
                                <span>{opt.duration} • {opt.price}</span>
                              </button>
                            );
                          })
                        ) : (
                          <button
                            onClick={() => handleServiceSelect(service, { duration: service.duration, price: service.price })}
                            className={`col-span-2 px-3 py-2 text-xs font-sans rounded-md border transition-all text-center ${
                              isServiceSelected
                                ? 'bg-[#C6A66B] text-[#151412] border-[#C6A66B] font-semibold'
                                : 'bg-[#151412] text-[#E8DED0] border-[#C6A66B]/30 hover:border-[#C6A66B]'
                            }`}
                          >
                            <span>{service.duration} • {service.price}</span>
                          </button>
                        )}
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Step Navigation Buttons */}
            <div className="pt-6 border-t border-[#C6A66B]/15 flex items-center justify-between">
              <button
                onClick={() => setCurrentStep(1)}
                className="px-6 py-3 border border-[#C6A66B]/40 text-[#E8DED0] text-xs font-sans uppercase tracking-widest hover:text-[#C6A66B] rounded-sm flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                onClick={() => setCurrentStep(3)}
                className="px-8 py-3.5 bg-[#C6A66B] text-[#151412] text-xs font-sans uppercase tracking-widest font-semibold hover:bg-[#d6b77c] rounded-sm flex items-center gap-2 shadow-luxury"
              >
                <span>Continue to Schedule</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

        {/* STEP 3: SCHEDULE SELECTION */}
        {currentStep === 3 && (
          <div className="max-w-3xl mx-auto bg-[#1C1A17] border border-[#C6A66B]/30 rounded-xl p-6 sm:p-10 shadow-luxury space-y-8">
            
            <div>
              <span className="text-[10px] font-sans tracking-wider text-[#C6A66B] uppercase font-semibold block mb-1">
                STEP 3 OF 5
              </span>
              <h2 className="font-serif text-3xl text-[#F7F3EC] uppercase">
                Select Date & Preferred Time
              </h2>
            </div>

            {/* Selected Treatment Preview Pill */}
            {selectedService && (
              <div className="p-4 bg-[#211E1A] border border-[#C6A66B]/30 rounded-md flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#C6A66B] font-sans uppercase block">Selected Therapy:</span>
                  <div className="font-serif text-lg text-[#F7F3EC]">{selectedService.name}</div>
                </div>
                <div className="text-xs text-[#C6A66B] font-sans font-semibold px-3 py-1 bg-[#C6A66B]/15 border border-[#C6A66B]/30 rounded-full">
                  {selectedOption?.duration} • {selectedOption?.price}
                </div>
              </div>
            )}

            {/* Date Selection Input */}
            <div className="space-y-2">
              <label className="block text-xs font-sans uppercase tracking-widest text-[#E8DED0] font-medium">
                1. Select Preferred Date *
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-[#151412] border border-[#C6A66B]/40 text-[#F7F3EC] text-sm p-4 rounded-md focus:outline-none focus:border-[#C6A66B]"
              />
            </div>

            {/* Time Slot Selection Grid */}
            <div className="space-y-3">
              <label className="block text-xs font-sans uppercase tracking-widest text-[#E8DED0] font-medium">
                2. Select Preferred Time Slot *
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {timeSlots.map((slot) => {
                  const isSlotActive = timeSlot === slot;
                  return (
                    <button
                      key={slot}
                      onClick={() => setTimeSlot(slot)}
                      className={`p-3 text-xs font-sans rounded-md border text-center transition-all ${
                        isSlotActive
                          ? 'bg-[#C6A66B] text-[#151412] border-[#C6A66B] font-semibold shadow-gold-glow'
                          : 'bg-[#151412] text-[#E8DED0] border-[#C6A66B]/30 hover:border-[#C6A66B]'
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step Navigation Buttons */}
            <div className="pt-6 border-t border-[#C6A66B]/15 flex items-center justify-between">
              <button
                onClick={() => setCurrentStep(2)}
                className="px-6 py-3 border border-[#C6A66B]/40 text-[#E8DED0] text-xs font-sans uppercase tracking-widest hover:text-[#C6A66B] rounded-sm flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back to Treatments</span>
              </button>

              <button
                onClick={() => setCurrentStep(4)}
                className="px-8 py-3.5 bg-[#C6A66B] text-[#151412] text-xs font-sans uppercase tracking-widest font-semibold hover:bg-[#d6b77c] rounded-sm flex items-center gap-2 shadow-luxury"
              >
                <span>Continue to Details</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

        {/* STEP 4: GUEST DETAILS */}
        {currentStep === 4 && (
          <div className="max-w-2xl mx-auto bg-[#1C1A17] border border-[#C6A66B]/30 rounded-xl p-6 sm:p-10 shadow-luxury space-y-8">
            
            <div>
              <span className="text-[10px] font-sans tracking-wider text-[#C6A66B] uppercase font-semibold block mb-1">
                STEP 4 OF 5
              </span>
              <h2 className="font-serif text-3xl text-[#F7F3EC] uppercase">
                Guest Details
              </h2>
            </div>

            <div className="space-y-6">
              
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-sans uppercase tracking-widest text-[#E8DED0] mb-2 font-medium">
                    Full Name *
                  </label>
                  <div className="relative flex items-center">
                    <User className="w-4 h-4 text-[#C6A66B] absolute left-4 pointer-events-none" />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Ashish Bhatta"
                      value={guestDetails.name}
                      onChange={handleInputChange}
                      className="w-full bg-[#151412] border border-[#C6A66B]/40 text-[#F7F3EC] text-sm py-3.5 px-4 pl-11 rounded-md focus:outline-none focus:border-[#C6A66B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans uppercase tracking-widest text-[#E8DED0] mb-2 font-medium">
                    WhatsApp Phone Number *
                  </label>
                  <div className="relative flex items-center">
                    <Phone className="w-4 h-4 text-[#C6A66B] absolute left-4 pointer-events-none" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="090355 59695"
                      value={guestDetails.phone}
                      onChange={handleInputChange}
                      className="w-full bg-[#151412] border border-[#C6A66B]/40 text-[#F7F3EC] text-sm py-3.5 px-4 pl-11 rounded-md focus:outline-none focus:border-[#C6A66B]"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Email */}
              <div>
                <label className="block text-xs font-sans uppercase tracking-widest text-[#E8DED0] mb-2 font-medium">
                  Email Address (Optional)
                </label>
                <div className="relative flex items-center">
                  <Mail className="w-4 h-4 text-[#C6A66B] absolute left-4 pointer-events-none" />
                  <input
                    type="email"
                    name="email"
                    placeholder="ashish@example.com"
                    value={guestDetails.email}
                    onChange={handleInputChange}
                    className="w-full bg-[#151412] border border-[#C6A66B]/40 text-[#F7F3EC] text-sm py-3.5 px-4 pl-11 rounded-md focus:outline-none focus:border-[#C6A66B]"
                  />
                </div>
              </div>

              {/* Row 3: Notes */}
              <div>
                <label className="block text-xs font-sans uppercase tracking-widest text-[#E8DED0] mb-2 font-medium">
                  Special Requests / Focus Areas
                </label>
                <textarea
                  name="notes"
                  rows="3"
                  placeholder="Mention pressure preferences, physical focus areas, or special occasion notes..."
                  value={guestDetails.notes}
                  onChange={handleInputChange}
                  className="w-full bg-[#151412] border border-[#C6A66B]/40 text-[#F7F3EC] text-sm p-4 rounded-md focus:outline-none focus:border-[#C6A66B]"
                ></textarea>
              </div>

            </div>

            {/* Step Navigation Buttons */}
            <div className="pt-6 border-t border-[#C6A66B]/15 flex items-center justify-between">
              <button
                onClick={() => setCurrentStep(3)}
                className="px-6 py-3 border border-[#C6A66B]/40 text-[#E8DED0] text-xs font-sans uppercase tracking-widest hover:text-[#C6A66B] rounded-sm flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back to Schedule</span>
              </button>

              <button
                onClick={() => {
                  if (!guestDetails.name || !guestDetails.phone) {
                    alert("Please enter your name and phone number to proceed.");
                    return;
                  }
                  setCurrentStep(5);
                }}
                className="px-8 py-3.5 bg-[#C6A66B] text-[#151412] text-xs font-sans uppercase tracking-widest font-semibold hover:bg-[#d6b77c] rounded-sm flex items-center gap-2 shadow-luxury"
              >
                <span>Review Reservation</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

        {/* STEP 5: CONFIRM & SEND ON WHATSAPP */}
        {currentStep === 5 && (
          <div className="max-w-2xl mx-auto bg-[#1C1A17] border border-[#C6A66B]/40 rounded-xl p-6 sm:p-10 shadow-luxury space-y-8">
            
            <div className="text-center space-y-2">
              <div className="w-14 h-14 bg-[#25D366]/20 border border-[#25D366] rounded-full flex items-center justify-center mx-auto text-[#25D366]">
                <Sparkles className="w-7 h-7" />
              </div>
              <span className="text-[10px] font-sans tracking-wider text-[#25D366] uppercase font-semibold block">
                STEP 5 OF 5 • READY TO SEND
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F3EC]">
                Reservation Summary
              </h2>
            </div>

            {/* Summary Card */}
            <div className="p-6 bg-[#211E1A] border border-[#C6A66B]/30 rounded-lg space-y-4 font-sans text-xs">
              
              <div className="flex items-center justify-between pb-3 border-b border-[#C6A66B]/15">
                <span className="text-[#A3998E]">Sanctuary Branch:</span>
                <span className="text-[#F7F3EC] font-medium">{selectedBranch}</span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-[#C6A66B]/15">
                <span className="text-[#A3998E]">Treatment Chosen:</span>
                <span className="text-[#C6A66B] font-semibold text-sm">{selectedService?.name}</span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-[#C6A66B]/15">
                <span className="text-[#A3998E]">Duration & Price:</span>
                <span className="text-[#F7F3EC] font-medium">{selectedOption?.duration} • {selectedOption?.price}</span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-[#C6A66B]/15">
                <span className="text-[#A3998E]">Date & Time:</span>
                <span className="text-[#F7F3EC] font-medium">{date} at {timeSlot}</span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-[#C6A66B]/15">
                <span className="text-[#A3998E]">Guest Name:</span>
                <span className="text-[#F7F3EC] font-medium">{guestDetails.name}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#A3998E]">WhatsApp Phone:</span>
                <span className="text-[#F7F3EC] font-medium">{guestDetails.phone}</span>
              </div>

              {guestDetails.notes && (
                <div className="pt-2 text-[11px] text-[#A3998E] border-t border-[#C6A66B]/15">
                  <span className="text-[#C6A66B]">Notes:</span> {guestDetails.notes}
                </div>
              )}

            </div>

            {/* Direct WhatsApp Action Button */}
            <div className="space-y-4">
              <button
                onClick={handleSendWhatsApp}
                className="w-full py-4 bg-[#25D366] text-[#151412] text-xs font-sans uppercase tracking-widest font-semibold hover:bg-[#20ba5a] transition-all duration-300 shadow-luxury flex items-center justify-center gap-3 rounded-md"
              >
                <MessageCircle className="w-5 h-5 fill-[#151412]" />
                <span>CONFIRM & SEND ENQUIRY ON WHATSAPP</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#A3998E] font-sans">
                <ShieldCheck className="w-4 h-4 text-[#C6A66B]" />
                <span>No payment required. Instant confirmation via WhatsApp Concierge desk.</span>
              </div>
            </div>

            {/* Back Button */}
            <div className="pt-2 text-center">
              <button
                onClick={() => setCurrentStep(4)}
                className="text-xs font-sans text-[#A3998E] hover:text-[#C6A66B] underline transition-colors"
              >
                ← Edit Guest Details
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
