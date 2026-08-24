import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import ServiceCard from '../components/ServiceCard';
import { getServiceBySlug, services } from '../data/services';
import { Clock, Sparkles, MessageCircle, ArrowLeft, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { getServiceWhatsAppUrl } from '../utils/whatsapp';

export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = getServiceBySlug(slug);

  useEffect(() => {
    if (service) {
      document.title = `${service.name} | Ahava Luxury Spa`;
    }
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#151412] text-[#F7F3EC] p-6 text-center">
        <h2 className="font-serif text-3xl mb-4">Treatment Not Found</h2>
        <p className="font-sans text-sm text-[#A3998E] mb-6">The requested spa ritual could not be located.</p>
        <Link
          to="/services"
          className="px-6 py-3 bg-[#C6A66B] text-[#151412] text-xs uppercase tracking-widest font-semibold"
        >
          Return to Services Menu
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
    <div className="bg-[#151412] text-[#F7F3EC] min-h-screen">
      
      {/* Dynamic Hero Section */}
      <section className="relative min-h-[65vh] lg:min-h-[75vh] flex items-end bg-[#151412] overflow-hidden border-b border-[#C6A66B]/20 pb-16 pt-24">
        
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
            className="w-full h-full object-cover filter brightness-[0.45] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151412] via-[#151412]/60 to-[#151412]/80"></div>
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
              <span className="px-3 py-1 bg-[#C6A66B] text-[#151412] font-serif text-sm font-semibold">
                {service.number}
              </span>
              <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#C6A66B]">
                {service.category}
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[#F7F3EC] font-light leading-[0.98]">
              {service.name}
            </h1>

            <p className="font-serif italic text-xl sm:text-2xl text-[#E8DED0]/90 font-light">
              "{service.shortDescription}"
            </p>

            {/* Duration & Price Bar */}
            <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-[#C6A66B]/20 text-sm font-sans">
              <div className="flex items-center gap-2 text-[#E8DED0]">
                <Clock className="w-4 h-4 text-[#C6A66B]" />
                <span>Duration: <strong className="text-[#F7F3EC]">{service.duration}</strong></span>
              </div>
              <div className="text-[#E8DED0]">
                Investment: <strong className="font-serif text-2xl text-[#C6A66B] ml-2">{service.price}</strong>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto px-9 py-4 bg-[#25D366] text-[#151412] text-xs font-sans uppercase tracking-ultra font-semibold hover:bg-[#20ba5a] transition-all duration-300 shadow-luxury flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-4 h-4 fill-[#151412]" />
                <span>BOOK THIS TREATMENT ON WHATSAPP</span>
              </button>

              <Link
                to="/services"
                className="w-full sm:w-auto px-6 py-4 border border-[#C6A66B]/30 hover:border-[#C6A66B] text-[#E8DED0] hover:text-[#C6A66B] text-xs font-sans uppercase tracking-widest flex items-center justify-center gap-2"
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
              <div className="space-y-6 border-b border-[#C6A66B]/15 pb-12">
                <h2 className="font-serif text-3xl uppercase tracking-wide text-[#C6A66B]">
                  RITUAL OVERVIEW
                </h2>
                <p className="font-sans text-base text-[#E8DED0]/90 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Benefits Section */}
              <div className="space-y-6 border-b border-[#C6A66B]/15 pb-12">
                <h2 className="font-serif text-3xl uppercase tracking-wide text-[#C6A66B]">
                  THERAPEUTIC BENEFITS
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits?.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-[#211E1A] border border-[#C6A66B]/20 rounded-sm flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#C6A66B] shrink-0 mt-0.5" />
                      <span className="font-sans text-xs text-[#E8DED0] leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What to Expect & Why Choose */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-[#C6A66B]/15 pb-12">
                <div className="p-6 bg-[#211E1A] border border-[#C6A66B]/20 rounded-sm space-y-3">
                  <div className="flex items-center gap-2 text-[#C6A66B]">
                    <Sparkles className="w-4 h-4" />
                    <h3 className="font-serif text-xl uppercase">WHAT TO EXPECT</h3>
                  </div>
                  <p className="font-sans text-xs text-[#E8DED0]/80 font-light leading-relaxed">
                    {service.whatToExpect}
                  </p>
                </div>

                <div className="p-6 bg-[#211E1A] border border-[#C6A66B]/20 rounded-sm space-y-3">
                  <div className="flex items-center gap-2 text-[#C6A66B]">
                    <ShieldCheck className="w-4 h-4" />
                    <h3 className="font-serif text-xl uppercase">WHY CHOOSE THIS</h3>
                  </div>
                  <p className="font-sans text-xs text-[#E8DED0]/80 font-light leading-relaxed">
                    {service.whyChoose}
                  </p>
                </div>
              </div>

            </div>

            {/* Right Sticky Concierge Card */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 p-8 bg-[#211E1A] border border-[#C6A66B]/40 rounded-sm space-y-6 shadow-luxury">
                <span className="text-[10px] font-sans tracking-ultra text-[#C6A66B] uppercase block">
                  WHATSAPP BOOKING
                </span>
                
                <h3 className="font-serif text-2xl uppercase tracking-wide">
                  RESERVE YOUR TIME
                </h3>

                <div className="space-y-3 border-t border-b border-[#C6A66B]/15 py-4 text-xs font-sans text-[#E8DED0]/80">
                  <div className="flex justify-between">
                    <span>Treatment:</span>
                    <strong className="text-[#F7F3EC]">{service.name}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <strong className="text-[#F7F3EC]">{service.duration}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Price:</span>
                    <strong className="text-[#C6A66B] font-serif text-lg">{service.price}</strong>
                  </div>
                </div>

                <button
                  onClick={handleWhatsAppClick}
                  className="w-full py-4 bg-[#25D366] text-[#151412] text-xs font-sans uppercase tracking-ultra font-semibold hover:bg-[#20ba5a] transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-[#151412]" />
                  <span>BOOK ON WHATSAPP</span>
                </button>

                <p className="text-[10px] text-center text-[#A3998E] font-sans">
                  Instant response via WhatsApp concierge. Flexible timing.
                </p>
              </div>
            </div>

          </div>

          {/* Related Treatments Section */}
          <div className="mt-24 pt-16 border-t border-[#C6A66B]/20">
            <h2 className="font-serif text-3xl uppercase tracking-wide text-center mb-12">
              YOU MAY ALSO <span className="italic text-gold-gradient">LIKE</span>
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
