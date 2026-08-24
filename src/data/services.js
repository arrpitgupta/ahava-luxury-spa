export const categories = [
  { id: 'all', name: 'ALL TREATMENTS', slug: 'all' },
  { id: 'massage', name: 'MASSAGE THERAPIES', slug: 'massage' },
  { id: 'vip', name: 'FACILITIES & VIP SERVICES', slug: 'vip' },
];

export const services = [
  {
    id: "01",
    slug: "aroma-oil-massage",
    number: "01",
    name: "Aroma Oil Massage",
    category: "MASSAGE THERAPIES",
    categorySlug: "massage",
    shortDescription: "A soothing blend of essential oils.",
    description: "Harmonizing pure steam-distilled essential oils with smooth, therapeutic massage techniques. Designed to calm your nervous system, release muscle tightness, and restore physical and mental balance.",
    duration: "60 min / 90 min",
    price: "₹2,500 / ₹3,500",
    minPrice: 2500,
    pricing: [
      { duration: "60 min", price: "₹2,500", numericPrice: 2500 },
      { duration: "90 min", price: "₹3,500", numericPrice: 3500 }
    ],
    image: "/assets/services/aroma-oil.jpg",
    fallbackImage: "https://res.cloudinary.com/e6ehhcen/image/upload/v1787593545/WhatsApp_Image_2026-08-24_at_11.05.06_PM.jpg",
    benefits: [
      "Aromatic oil blend soothes mind & sensory noise",
      "Eases muscular tension & improves blood circulation",
      "Deeply hydrates and nourishes the skin layer",
      "Promotes deep restorative sleep"
    ],
    whatToExpect: "Your session begins with a personalized essential oil consultation, followed by a warm oil full-body application in a tranquil climate-controlled suite.",
    whyChoose: "Ideal for guests seeking stress relief, emotional relaxation, and a soothing sensory escape."
  },
  {
    id: "02",
    slug: "swedish-massage",
    number: "02",
    name: "Swedish Massage",
    category: "MASSAGE THERAPIES",
    categorySlug: "massage",
    shortDescription: "Relaxation with long, rhythmic strokes.",
    description: "Classic European massage combining long gliding strokes, kneading, and circular motions with botanical oils. Designed to ease tension, increase oxygen flow in the blood, and release stress.",
    duration: "60 min / 90 min",
    price: "₹3,000 / ₹4,000",
    minPrice: 3000,
    pricing: [
      { duration: "60 min", price: "₹3,000", numericPrice: 3000 },
      { duration: "90 min", price: "₹4,000", numericPrice: 4000 }
    ],
    image: "/assets/services/swedish-massage.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Smooth rhythmic strokes relieve overall fatigue",
      "Stimulates lymphatic circulation & flexibility",
      "Reduces cortisol stress levels",
      "Calms nervous exhaustion"
    ],
    whatToExpect: "A gentle to medium-pressure session using warm botanical massage oil tailored to your body's relaxation needs.",
    whyChoose: "Perfect for overall muscle relaxation, first-time spa visitors, or anyone needing to unwind."
  },
  {
    id: "03",
    slug: "deep-tissue-massage",
    number: "03",
    name: "Deep Tissue Massage",
    category: "MASSAGE THERAPIES",
    categorySlug: "massage",
    shortDescription: "Focuses on deeper muscle layers.",
    description: "Targeted therapeutic massage using slow, firm friction strokes to reach deep muscle fibers, tendons, and fascia. Highly effective for persistent knots and chronic stiffness.",
    duration: "60 min / 90 min",
    price: "₹3,500 / ₹4,500",
    minPrice: 3500,
    pricing: [
      { duration: "60 min", price: "₹3,500", numericPrice: 3500 },
      { duration: "90 min", price: "₹4,500", numericPrice: 4500 }
    ],
    image: "/assets/services/deep-tissue.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Releases chronic muscle knots & stubborn tension",
      "Improves joint mobility & postural alignment",
      "Accelerates post-exercise muscle recovery",
      "Relieves back, neck, and shoulder tightness"
    ],
    whatToExpect: "A firm, focused treatment utilizing concentrated thumb and forearm pressure with soothing herbal balms.",
    whyChoose: "Best for active individuals, desk workers, and guests experiencing severe muscle tightness."
  },
  {
    id: "04",
    slug: "balinese-massage",
    number: "04",
    name: "Balinese Massage",
    category: "MASSAGE THERAPIES",
    categorySlug: "massage",
    shortDescription: "Gentle stretches and acupressure.",
    description: "An ancient Indonesian healing ritual combining gentle stretching, acupressure points, skin rolling, and aromatic oils to stimulate blood flow and deep muscular harmony.",
    duration: "60 min / 90 min",
    price: "₹3,000 / ₹4,000",
    minPrice: 3000,
    pricing: [
      { duration: "60 min", price: "₹3,000", numericPrice: 3000 },
      { duration: "90 min", price: "₹4,000", numericPrice: 4000 }
    ],
    image: "/assets/services/balinese-massage.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Stimulates vital energy meridians & circulation",
      "Combines stretching with deep acupressure release",
      "Relieves joint stiffness & bodily fatigue",
      "Restores holistic vitality"
    ],
    whatToExpect: "Rhythmic palm pressure and light stretching techniques paired with warm exotic herbal oils.",
    whyChoose: "Ideal for guests seeking a balanced combination of stretching and relaxing pressure."
  },
  {
    id: "05",
    slug: "thai-traditional-massage",
    number: "05",
    name: "Thai Traditional Massage",
    category: "MASSAGE THERAPIES",
    categorySlug: "massage",
    shortDescription: "Full-body assisted yoga.",
    description: "An energizing traditional therapy blending passive assisted stretching, yoga postures, and point pressure along Sen energy lines to improve flexibility and energy flow.",
    duration: "60 min / 90 min",
    price: "₹3,000 / ₹4,000",
    minPrice: 3000,
    pricing: [
      { duration: "60 min", price: "₹3,000", numericPrice: 3000 },
      { duration: "90 min", price: "₹4,000", numericPrice: 4000 }
    ],
    image: "/assets/services/thai-massage.jpg",
    fallbackImage: "https://res.cloudinary.com/e6ehhcen/image/upload/v1787587472/WhatsApp_Image_2026-08-24_at_9.19.17_PM_2.jpg",
    benefits: [
      "Increases spinal flexibility & range of motion",
      "Relieves joint tension without oil application",
      "Energizes body systems & relieves fatigue",
      "Enhances physical posture & alignment"
    ],
    whatToExpect: "Performed over comfortable spa garments involving guided rhythmic compression and assisted stretches.",
    whyChoose: "Perfect for those who love yoga, active stretching, and revitalizing bodywork."
  },
  {
    id: "06",
    slug: "lomilomi-massage",
    number: "06",
    name: "Lomilomi Massage",
    category: "MASSAGE THERAPIES",
    categorySlug: "massage",
    shortDescription: "Relaxing strokes from a Hawaiian art form.",
    description: "A traditional Hawaiian massage technique featuring long, continuous, wave-like forearm strokes that dance gracefully across the body to release mental and physical blocks.",
    duration: "60 min / 90 min",
    price: "₹3,000 / ₹4,000",
    minPrice: 3000,
    pricing: [
      { duration: "60 min", price: "₹3,000", numericPrice: 3000 },
      { duration: "90 min", price: "₹4,000", numericPrice: 4000 }
    ],
    image: "/assets/services/lomilomi-massage.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Continuous fluid strokes create profound tranquility",
      "Nourishes emotional equilibrium & relaxation",
      "Improves circulation and lymphatic drainage",
      "Releases body tension with ocean-like rhythm"
    ],
    whatToExpect: "Generous amounts of warm coconut/nut oils applied with sweeping forearm movements.",
    whyChoose: "Recommended for total surrender to peaceful, flowing relaxation."
  },
  {
    id: "07",
    slug: "couple-massage",
    number: "07",
    name: "Couple Massage",
    category: "MASSAGE THERAPIES",
    categorySlug: "massage",
    shortDescription: "Side-by-side relaxation for two.",
    description: "Share a peaceful retreat in our private dual VIP suite. Enjoy side-by-side customized body therapies crafted to harmonize mind, body, and spirit together.",
    duration: "60 min / 90 min",
    price: "₹5,000 / ₹6,000",
    minPrice: 5000,
    pricing: [
      { duration: "60 min", price: "₹5,000", numericPrice: 5000 },
      { duration: "90 min", price: "₹6,000", numericPrice: 6000 }
    ],
    image: "/assets/services/couple-massage.jpg",
    fallbackImage: "https://res.cloudinary.com/e6ehhcen/image/upload/v1787575603/WhatsApp_Image_2026-08-24_at_1.37.52_PM_1.jpg",
    benefits: [
      "Private VIP suite setup for shared relaxation",
      "Customized pressure & massage techniques for each guest",
      "Includes complimentary relaxing refreshments",
      "Unforgettable shared wellness memory"
    ],
    whatToExpect: "Side-by-side treatments in an ambient candlelit suite with calming music and dedicated therapists.",
    whyChoose: "The ultimate choice for couples, friends, anniversaries, or special celebrations."
  },
  {
    id: "08",
    slug: "vip-room-with-jacuzzi",
    number: "08",
    name: "VIP ROOM with Jacuzzi",
    category: "FACILITIES & VIP SERVICES",
    categorySlug: "vip",
    shortDescription: "Exclusive room with private jacuzzi for two.",
    description: "Indulge in absolute luxury with our private VIP suite featuring a temperature-controlled hydrotherapy Jacuzzi tub, ambient illumination, and private relaxation lounge.",
    duration: "90 min",
    price: "₹9,000",
    minPrice: 9000,
    pricing: [
      { duration: "90 min", price: "₹9,000", numericPrice: 9000 }
    ],
    image: "/assets/services/vip-jacuzzi.jpg",
    fallbackImage: "https://res.cloudinary.com/e6ehhcen/image/upload/v1787575750/WhatsApp_Image_2026-08-24_at_1.37.58_PM.jpg",
    benefits: [
      "Exclusive access to private master VIP suite",
      "Private hydrotherapy Jacuzzi tub soak for two",
      "Deep muscle relaxation via therapeutic water jets",
      "Complimentary herbal tea & luxury suite amenities"
    ],
    whatToExpect: "An opulent private suite experience equipped with hydro-jets, rose petals, and tranquil ambiance.",
    whyChoose: "Perfect for luxury pampering, private celebrations, and hydrotherapy wellness."
  },
  {
    id: "09",
    slug: "steam-bath",
    number: "09",
    name: "Steam Bath",
    category: "FACILITIES & VIP SERVICES",
    categorySlug: "vip",
    shortDescription: "Detoxifying steam session.",
    description: "A purifying moist steam treatment designed to open skin pores, flush out toxins, improve circulation, and deeply relax respiratory and muscular channels.",
    duration: "30 min",
    price: "₹1,500",
    minPrice: 1500,
    pricing: [
      { duration: "30 min", price: "₹1,500", numericPrice: 1500 }
    ],
    image: "/assets/services/steam-bath.jpg",
    fallbackImage: "https://res.cloudinary.com/e6ehhcen/image/upload/v1787575604/WhatsApp_Image_2026-08-24_at_1.37.55_PM.jpg",
    benefits: [
      "Flushes out skin impurities & opens pores",
      "Relieves sinus congestion & clears airways",
      "Relaxes tight muscle groups prior to or after massage",
      "Boosts systemic circulation & skin glow"
    ],
    whatToExpect: "Infused eucalyptus moist steam bath followed by a refreshing cool rainfall shower.",
    whyChoose: "Ideal as a standalone detox session or prior to any body massage ritual."
  }
];

export const getServiceBySlug = (slug) => {
  return services.find(s => s.slug === slug);
};
