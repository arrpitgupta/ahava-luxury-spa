/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spa: {
          dark: '#151412',
          surface: '#211E1A',
          card: '#1A1815',
          ivory: '#F7F3EC',
          beige: '#E8DED0',
          gold: '#C6A66B',
          'gold-light': '#D4BC8B',
          'gold-dark': '#A8884C',
          brown: '#6D5A48',
          muted: '#A3998E',
          border: 'rgba(198, 166, 107, 0.2)',
          'border-light': 'rgba(247, 243, 236, 0.1)',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.35em',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(198, 166, 107, 0.15)',
        'luxury': '0 20px 50px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(135deg, #C6A66B 0%, #E8DED0 50%, #C6A66B 100%)',
      }
    },
  },
  plugins: [],
}
