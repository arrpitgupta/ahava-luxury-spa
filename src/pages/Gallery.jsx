import React, { useState, useEffect, useRef } from 'react';
import PageHero from '../components/PageHero';
import GalleryCard from '../components/GalleryCard';
import { galleryImages, galleryCategories } from '../data/gallery';
import { Maximize2, X, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { animateGalleryFilter } from '../animations/gsap';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const gridRef = useRef(null);

  useEffect(() => {
    document.title = "Ahava Luxury Spa Gallery | Inside Our Sanctuary";
  }, []);

  const handleCategoryChange = (slug) => {
    setActiveCategory(slug);
    if (gridRef.current) {
      animateGalleryFilter(gridRef);
    }
  };

  const handleWhatsAppClick = () => {
    const url = getWhatsAppUrl("Hello Ahava Luxury Spa, I saw your sanctuary gallery and would like to book a visit.");
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.categorySlug === activeCategory);

  return (
    <div className="bg-[#151412] text-[#F7F3EC] min-h-screen">

      {/* Page Hero */}
      <PageHero
        eyebrow="A VISUAL INVITATION"
        title="INSIDE"
        italicTitle="AHAVA"
        description="A quiet glimpse into the spaces, rituals and details that make Ahava a sanctuary."
        breadcrumbs={[{ label: 'Gallery' }]}
        bgImage="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Main Gallery Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          {/* Animated Category Filter Tabs */}
          <div className="flex items-center gap-3 overflow-x-auto pb-6 mb-12 scrollbar-none border-b border-[#C6A66B]/20">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.categorySlug)}
                className={`px-5 py-2 text-xs font-sans tracking-widest uppercase transition-all duration-300 whitespace-nowrap rounded-full ${activeCategory === cat.categorySlug
                    ? 'bg-[#C6A66B] text-[#151412] font-semibold shadow-gold-glow'
                    : 'bg-[#211E1A] text-[#E8DED0]/70 hover:text-[#F7F3EC] hover:bg-[#C6A66B]/20 border border-[#C6A66B]/20'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Editorial Masonry Grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start"
          >
            {filteredImages.map((item) => (
              <GalleryCard
                key={item.id}
                item={item}
                onClick={(img) => setSelectedImage(img)}
              />
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20 text-[#A3998E]">
              No images available in this category.
            </div>
          )}

        </div>
      </section>

      {/* Bottom Gallery CTA */}
      <section className="py-24 bg-[#211E1A] border-t border-[#C6A66B]/20 text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <span className="text-[#C6A66B] text-xs font-sans tracking-[0.3em] uppercase">
            SANCTUARY REFUGE
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl uppercase tracking-wide font-light">
            EXPERIENCE <span className="italic text-gold-gradient font-normal">AHAVA</span>
          </h2>
          <p className="font-sans text-base text-[#E8DED0]/85 font-light max-w-lg mx-auto">
            The best way to understand Ahava is to experience it.
          </p>

          <button
            onClick={handleWhatsAppClick}
            className="px-9 py-4 bg-[#25D366] text-[#151412] text-xs font-sans uppercase tracking-ultra font-semibold hover:bg-[#20ba5a] transition-all inline-flex items-center gap-3 shadow-luxury"
          >
            <MessageCircle className="w-4 h-4 fill-[#151412]" />
            <span>BOOK ON WHATSAPP</span>
          </button>
        </div>
      </section>

      {/* Lightbox Modal Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-[#151412]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] bg-[#211E1A] border border-[#C6A66B]/40 rounded-sm overflow-hidden p-2 sm:p-4 shadow-luxury"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-[#151412]/80 text-[#F7F3EC] hover:text-[#C6A66B] rounded-full border border-[#C6A66B]/30 transition-colors"
              aria-label="Close image lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full max-h-[75vh] object-contain rounded-sm"
            />

            <div className="pt-4 px-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-[#C6A66B]/20 mt-4">
              <div>
                <span className="text-[10px] font-sans tracking-ultra text-[#C6A66B] uppercase">
                  {selectedImage.category}
                </span>
                <h4 className="font-serif text-2xl text-[#F7F3EC] uppercase">
                  {selectedImage.title}
                </h4>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="px-4 py-2 bg-[#25D366] text-[#151412] text-[10px] font-sans uppercase tracking-widest font-semibold flex items-center gap-1.5"
              >
                <MessageCircle className="w-3 h-3 fill-[#151412]" />
                Inquire on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
