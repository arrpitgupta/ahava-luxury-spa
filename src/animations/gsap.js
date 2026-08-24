import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Utility to check reduced motion
export const prefersReducedMotion = () => {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Hero Entrance Animation
export const animateHero = ({ imageRef, eyebrowRef, headingRef, descRef, buttonsRef, scrollRef }) => {
  if (prefersReducedMotion()) return;

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  if (imageRef?.current) {
    tl.fromTo(
      imageRef.current,
      { scale: 1.15, filter: 'brightness(0.7)' },
      { scale: 1.0, filter: 'brightness(0.65)', duration: 2.2, ease: 'power2.out' },
      0
    );
  }

  if (eyebrowRef?.current) {
    tl.fromTo(
      eyebrowRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      0.6
    );
  }

  if (headingRef?.current) {
    const lines = headingRef.current.querySelectorAll('.hero-line');
    if (lines.length > 0) {
      tl.fromTo(
        lines,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 1.0, stagger: 0.2 },
        0.8
      );
    } else {
      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 1.0 },
        0.8
      );
    }
  }

  if (descRef?.current) {
    tl.fromTo(
      descRef.current,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.8 },
      1.3
    );
  }

  if (buttonsRef?.current) {
    tl.fromTo(
      buttonsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      1.5
    );
  }

  if (scrollRef?.current) {
    tl.fromTo(
      scrollRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.8 },
      1.7
    );
  }

  return tl;
};

// Generic Fade-Up Animation for Sections/Cards
export const animateFadeUp = (element, options = {}) => {
  if (!element || prefersReducedMotion()) return;

  const { delay = 0, duration = 0.9, y = 40, trigger = element, start = 'top 85%' } = options;

  return gsap.fromTo(
    element,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger,
        start,
        toggleActions: 'play none none none',
      },
    }
  );
};

// Batch Stagger Animation
export const animateBatch = (elements, options = {}) => {
  if (!elements || elements.length === 0 || prefersReducedMotion()) return;

  const { stagger = 0.12, y = 30, duration = 0.8, trigger = elements[0] } = options;

  return gsap.fromTo(
    elements,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    }
  );
};

// Parallax Effect
export const initParallax = (element, speed = 0.2) => {
  if (!element || prefersReducedMotion()) return;

  return gsap.to(element, {
    yPercent: speed * 100,
    ease: 'none',
    scrollTrigger: {
      trigger: element.parentElement || element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
};

// Subtle Floating Pulse Animation
export const animatePulse = (element) => {
  if (!element || prefersReducedMotion()) return;

  return gsap.to(element, {
    scale: 1.05,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
  });
};

// Page Transition Fade
export const animatePageReveal = (containerRef) => {
  if (!containerRef?.current || prefersReducedMotion()) return;

  gsap.fromTo(
    containerRef.current,
    { opacity: 0, y: 15 },
    { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }
  );
};

// Gallery Filter Change Animation
export const animateGalleryFilter = (gridRef) => {
  if (!gridRef?.current || prefersReducedMotion()) return;

  const children = gridRef.current.children;
  if (children.length > 0) {
    gsap.fromTo(
      children,
      { opacity: 0, scale: 0.95, y: 20 },
      { opacity: 1, scale: 1.0, y: 0, duration: 0.45, stagger: 0.05, ease: 'power2.out' }
    );
  }
};

export { gsap, ScrollTrigger };
