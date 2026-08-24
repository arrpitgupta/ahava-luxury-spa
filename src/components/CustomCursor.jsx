import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }

    setIsVisible(true);

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-interactive')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer subtle ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-300 ease-out hidden lg:block"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${isHovered ? 1.8 : 1})`,
        }}
      >
        <div
          className={`rounded-full transition-all duration-300 ${
            isHovered
              ? 'w-10 h-10 border border-[#C6A66B] bg-[#C6A66B]/10'
              : 'w-8 h-8 border border-[#C6A66B]/30'
          }`}
        />
      </div>

      {/* Inner precise dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-75 ease-out hidden lg:block"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`rounded-full transition-all duration-200 ${
            isHovered ? 'w-2 h-2 bg-[#F7F3EC]' : 'w-1.5 h-1.5 bg-[#C6A66B]'
          }`}
        />
      </div>
    </>
  );
}
