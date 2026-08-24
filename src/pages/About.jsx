import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import { UserCheck, Sparkles, Feather, Shield, Droplets, Award, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function About() {
  useEffect(() => {
    document.title = "About Ahava Luxury Spa | Our Wellness Philosophy";
  }, []);

  const handleWhatsAppClick = () => {
    const url = getWhatsAppUrl("Hello Ahava Luxury Spa, I read about your philosophy and would like to book a treatment.");
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const features = [
    {
      title: "PERSONALIZED CARE",
      desc: "Every treatment is tailored to your body's energy and tension needs following an initial consultation.",
      icon: UserCheck
    },
    {
      title: "CURATED RITUALS",
      desc: "Ancestral wellness techniques combined with modern cellular bio-active skincare formulations.",
      icon: Sparkles
    },
    {
      title: "SERENE ENVIRONMENT",
      desc: "Acoustically dampened suites, warm ambient basalt stone lighting, and pure essential oil diffusion.",
      icon: Feather
    },
    {
      title: "EXCEPTIONAL DETAIL",
      desc: "Heated massage tables, 1000-thread Egyptian linens, and organic herbal infusions served post-ritual.",
      icon: Shield
    },
    {
      title: "PREMIUM PRODUCTS",
      desc: "Organic, wildcrafted botanical serums and cold-pressed essential oils free of synthetic preservatives.",
      icon: Droplets
    },
    {
      title: "EXPERIENCED THERAPISTS",
      desc: "Master practitioners certified in global massage traditions, neuromuscular therapy, and skin health.",
      icon: Award
    }
  ];

  return (
    <div className="bg-[#FAF6F0] text-[#2C2621]">

      {/* Page Hero Header */}
      <PageHero
        eyebrow="THE AHAVA EXPERIENCE"
        title="A SANCTUARY FOR"
        italicTitle="BODY, MIND & SOUL"
        description="Discover the philosophy, artistry, and deliberate craftsmanship behind Ahava Luxury Spa."
        breadcrumbs={[{ label: 'About Us' }]}
        bgImage="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Alternating Story Sections */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-28">

          {/* Story Block 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[#C6A66B] text-xs font-sans tracking-[0.3em] uppercase font-semibold">
                OUR PHILOSOPHY
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl uppercase tracking-tight font-light text-[#2C2621]">
                THE ART OF <span className="italic text-gold-gradient font-normal">SLOWING DOWN</span>
              </h2>
              <div className="space-y-4 font-sans text-sm sm:text-base text-[#4A423A] font-light leading-relaxed">
                <p>
                  At Ahava, wellness begins with creating space to breathe. In a world defined by constant acceleration and digital noise, we believe true luxury is quiet time devoted entirely to self-restoration.
                </p>
                <p>
                  Every detail of the experience is designed to help you disconnect from everyday demands and reconnect with your body's natural wisdom.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[4/3] rounded-sm overflow-hidden border border-[#C6A66B]/30 shadow-luxury">
                <img
                  src="https://res.cloudinary.com/e6ehhcen/image/upload/v1787587474/WhatsApp_Image_2026-08-24_at_9.24.08_PM.jpg"
                  alt="The Art of Slowing Down at Ahava Luxury Spa"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Story Block 2 (Reversed) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 lg:order-2 space-y-6">
              <span className="text-[#C6A66B] text-xs font-sans tracking-[0.3em] uppercase font-semibold">
                MINDFUL ENVIRONMENT
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl uppercase tracking-tight font-light text-[#2C2621]">
                SANCTUARY BY <span className="italic text-gold-gradient font-normal">DESIGN</span>
              </h2>
              <div className="space-y-4 font-sans text-sm sm:text-base text-[#4A423A] font-light leading-relaxed">
                <p>
                  From hand-carved stone basins and warm teak architectural accents to custom acoustic soundproofing and ambient candle illumination, Ahava is built as a physical refuge.
                </p>
                <p>
                  Our treatment rooms are individual temperature-controlled sanctuaries where noise fades away and time moves at a peaceful pace.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 lg:order-1">
              <div className="aspect-[4/3] rounded-sm overflow-hidden border border-[#C6A66B]/30 shadow-luxury">
                <img
                  src="https://res.cloudinary.com/e6ehhcen/image/upload/v1787575394/WhatsApp_Image_2026-08-24_at_1.37.52_PM.jpg"
                  alt="Sanctuary Architecture at Ahava"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Feature Grid: Why Ahava (6 Features) */}
      <section className="py-24 bg-[#F4EDE4] text-[#2C2621] border-t border-b border-[#C6A66B]/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#C6A66B] text-xs font-sans tracking-[0.3em] uppercase font-semibold">
              EXCELLENCE IN EVERY DETAIL
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl uppercase tracking-tight text-[#2C2621] font-light">
              THE AHAVA <span className="italic text-gold-gradient font-normal">STANDARDS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div
                  key={i}
                  className="p-8 bg-[#FFFDF9] border border-[#C6A66B]/30 rounded-lg hover:border-[#C6A66B] transition-all duration-500 gold-glow-hover shadow-luxury"
                >
                  <div className="p-3 w-12 h-12 bg-[#FAF6F0] border border-[#C6A66B]/30 rounded-full text-[#C6A66B] mb-6 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl uppercase tracking-wide text-[#2C2621] mb-3 font-normal">
                    {feat.title}
                  </h3>
                  <p className="font-sans text-xs text-[#4A423A] font-light leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* WhatsApp Action Callout */}
      <section className="py-24 bg-[#FAF6F0] text-[#2C2621] text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h3 className="font-serif text-3xl sm:text-5xl uppercase font-light text-[#2C2621]">
            READY TO EXPERIENCE <span className="italic text-gold-gradient font-normal">AHAVA?</span>
          </h3>
          <p className="font-sans text-sm text-[#4A423A] font-light">
            Contact our spa concierge on WhatsApp to arrange your custom wellness itinerary.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="px-9 py-4 bg-[#25D366] text-[#FAF6F0] text-xs font-sans uppercase tracking-ultra font-semibold hover:bg-[#20ba5a] transition-all inline-flex items-center gap-3 shadow-luxury rounded-sm"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>BOOK ON WHATSAPP</span>
          </button>
        </div>
      </section>

    </div>
  );
}
