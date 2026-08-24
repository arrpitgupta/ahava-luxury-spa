import React, { useState, useEffect, useRef } from 'react';
import PageHero from '../components/PageHero';
import ServiceCard from '../components/ServiceCard';
import { services, categories } from '../data/services';
import { animateGalleryFilter } from '../animations/gsap';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');
  const gridRef = useRef(null);

  useEffect(() => {
    document.title = "Spa Treatments & Services | Ahava Luxury Spa";
  }, []);

  const handleCategoryChange = (slug) => {
    setActiveCategory(slug);
    if (gridRef.current) {
      animateGalleryFilter(gridRef);
    }
  };

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.categorySlug === activeCategory);

  return (
    <div className="bg-[#151412] text-[#F7F3EC] min-h-screen">
      
      {/* Page Hero */}
      <PageHero
        eyebrow="OUR TREATMENTS"
        title="RITUALS DESIGNED"
        italicTitle="AROUND YOU"
        description="Thoughtfully curated therapies designed for physical restoration, mental calm, and bio-active cellular skin renewal."
        breadcrumbs={[{ label: 'Services' }]}
        bgImage="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Main Service Directory Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-3 overflow-x-auto pb-6 mb-12 scrollbar-none border-b border-[#C6A66B]/20">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.slug)}
                className={`px-5 py-2.5 text-xs font-sans tracking-widest uppercase transition-all duration-300 whitespace-nowrap rounded-full ${
                  activeCategory === cat.slug
                    ? 'bg-[#C6A66B] text-[#151412] font-semibold shadow-gold-glow'
                    : 'bg-[#211E1A] text-[#E8DED0]/80 hover:text-[#F7F3EC] hover:bg-[#C6A66B]/20 border border-[#C6A66B]/20'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Service Cards Grid */}
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-20 text-[#A3998E]">
              No treatments found in this category.
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
