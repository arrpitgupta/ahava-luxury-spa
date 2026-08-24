import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { services } from '../data/services';
import PageHero from '../components/PageHero';
import Breadcrumbs from '../components/Breadcrumbs';
import ServiceCard from '../components/ServiceCard';
import { Clock, ArrowLeft, MessageCircle, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import { getServiceWhatsAppUrl } from '../utils/whatsapp';

export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find target service by slug
  const service = services.find((s) => s.slug === slug);

  // Scroll to top on route render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="bg-[#FAF6F0] text-[#2C2621] min-h-screen pt-40 text-center">
        <h1 className="font-serif text-4xl mb-4">Treatment Not Found</h1>
        <Link to="/services" className="text-[#C6A66B] underline">
          Return to All Treatments
        </Link>
      </div>
    );
  }

  const handleWhatsAppClick = () => {
    const url = getServiceWhatsAppUrl(service.name, service.duration, service.price);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Find related treatments in same category or adjacent
  const relatedServices = services
    .filter(s => s.slug !== service.slug)
    .slice(0, 2);

  return (
    <div className="bg-[#FAF6F0] text-[#2C2621] min-h-screen">
      
      {/* Dynamic Hero Section */}
      <section className="relative min-h-[65vh] lg:min-h-[75vh] flex items-end bg-[#FAF6F0] overflow-hidden border-b border-[#C6A66B]/20 pb-16 pt-24">
        
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.name}
            onError={(e) => {
              if (service.fallbackImage && e.target.src !== service.fallbackImage) {
                e.target.src = service.fallbackImage;
              }
            }}
            className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6F0] via-[#FAF6F0]/70 to-[#FAF6F0]/85"></div>
        </div>

        {/* Hero Overlay Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <Breadcrumbs
            items={[
              { label: 'Services', link: '/services' },
              { label: service.name }
            ]}
          />

          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-[#C6A66B] text-[#FAF6F0] font-serif text-sm font-semibold rounded-sm">
                {service.number}
              </span>
              <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#C6A66B] font-semibold">
                {service.category}
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[#2C2621] font-light leading-[0.98]">
              {service.name}
            </h1>

            <p className="font-serif italic text-xl sm:text-2xl text-[#4A423A] font-light">
              "{service.shortDescription}"
            </p>

            {/* Duration & Price Bar */}
            <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-[#C6A66B]/25 text-sm font-sans">
              <div className="flex items-center gap-2 text-[#4A423A]">
                <Clock className="w-4 h-4 text-[#C6A66B]" />
                <span>Duration: <strong className="text-[#2C2621] font-semibold">{service.duration}</strong></span>
              </div>
              <div className="text-[#4A423A]">
                Investment: <strong className="font-serif text-2xl text-[#C6A66B] ml-2 font-normal">{service.price}</strong>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto px-9 py-4 bg-[#25D366] text-[#FAF6F0] text-xs font-sans uppercase tracking-ultra font-semibold hover:bg-[#20ba5a] transition-all duration-300 shadow-luxury flex items-center justify-center gap-3 rounded-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>BOOK THIS TREATMENT ON WHATSAPP</span>
              </button>

              <Link
                to="/services"
                className="w-full sm:w-auto px-6 py-4 border border-[#C6A66B]/40 hover:border-[#C6A66B] text-[#2C2621] hover:text-[#C6A66B] text-xs font-sans uppercase tracking-widest flex items-center justify-center gap-2 rounded-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Menu</span>
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* Main Details Body */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Main Content */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Detailed Description */}
              <div className="space-y-6 border-b border-[#C6A66B]/20 pb-12">
                <h2 className="font-serif text-3xl uppercase tracking-wide text-[#C6A66B]">
                  RITUAL OVERVIEW
                </h2>
                <p className="font-sans text-base text-[#4A423A] font-light leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Benefits Section */}
              <div className="space-y-6 border-b border-[#C6A66B]/20 pb-12">
                <h2 className="font-serif text-3xl uppercase tracking-wide text-[#C6A66B]">
                  THERAPEUTIC BENEFITS
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits?.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-[#FFFDF9] border border-[#C6A66B]/30 rounded-md flex items-start gap-3 shadow-sm"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#C6A66B] shrink-0 mt-0.5" />
                      <span className="font-sans text-xs text-[#2C2621] leading-relaxed font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What to Expect & Why Choose */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-[#C6A66B]/20 pb-12">
                <div className="p-6 bg-[#FFFDF9] border border-[#C6A66B]/30 rounded-lg space-y-3 shadow-sm">
                  <div className="flex items-center gap-2 text-[#C6A66B]">
                    <Sparkles className="w-4 h-4" />
                    <h3 className="font-serif text-xl uppercase text-[#2C2621]">WHAT TO EXPECT</h3>
                  </div>
                  <p className="font-sans text-xs text-[#4A423A] font-light leading-relaxed">
                    {service.whatToExpect}
                  </p>
                </div>

                <div className="p-6 bg-[#FFFDF9] border border-[#C6A66B]/30 rounded-lg space-y-3 shadow-sm">
                  <div className="flex items-center gap-2 text-[#C6A66B]">
                    <ShieldCheck className="w-4 h-4" />
                    <h3 className="font-serif text-xl uppercase text-[#2C2621]">WHY CHOOSE THIS</h3>
                  </div>
                  <p className="font-sans text-xs text-[#4A423A] font-light leading-relaxed">
                    {service.whyChoose}
                  </p>
                </div>
              </div>

            </div>

            {/* Right Sticky Concierge Card */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 p-8 bg-[#FFFDF9] border border-[#C6A66B]/40 rounded-lg space-y-6 shadow-luxury">
                <span className="text-[10px] font-sans tracking-ultra text-[#C6A66B] uppercase block font-semibold">
                  WHATSAPP BOOKING
                </span>
                
                <h3 className="font-serif text-2xl uppercase tracking-wide text-[#2C2621]">
                  RESERVE YOUR TIME
                </h3>

                <div className="space-y-3 border-t border-b border-[#C6A66B]/20 py-4 text-xs font-sans text-[#4A423A]">
                  <div className="flex justify-between">
                    <span>Treatment:</span>
                    <strong className="text-[#2C2621] font-semibold">{service.name}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <strong className="text-[#2C2621] font-semibold">{service.duration}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Price:</span>
                    <strong className="text-[#C6A66B] font-serif text-lg font-normal">{service.price}</strong>
                  </div>
                </div>

                <button
                  onClick={handleWhatsAppClick}
                  className="w-full py-4 bg-[#25D366] text-[#FAF6F0] text-xs font-sans uppercase tracking-ultra font-semibold hover:bg-[#20ba5a] transition-all flex items-center justify-center gap-2 rounded-md shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>BOOK ON WHATSAPP</span>
                </button>

                <p className="text-[10px] text-center text-[#786C60] font-sans font-medium">
                  Instant response via WhatsApp concierge. Flexible timing.
                </p>
              </div>
            </div>

          </div>

          {/* Related Treatments Section */}
          <div className="mt-24 pt-16 border-t border-[#C6A66B]/20">
            <h2 className="font-serif text-3xl uppercase tracking-wide text-center text-[#2C2621] mb-12">
              YOU MAY ALSO <span className="italic text-gold-gradient font-normal">LIKE</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedServices.map((rel) => (
                <ServiceCard key={rel.slug} service={rel} />
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
