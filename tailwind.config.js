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
          dark: '#FAF6F0',
          surface: '#FFFDF9',
          card: '#F4EDE4',
          ivory: '#2C2621',
          beige: '#4A423A',
          gold: '#C6A66B',
          'gold-light': '#D4BC8B',
          'gold-dark': '#A8884C',
          brown: '#8C7561',
          muted: '#786C60',
          border: 'rgba(198, 166, 107, 0.25)',
          'border-light': 'rgba(198, 166, 107, 0.15)',
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
        'gold-glow': '0 0 25px rgba(198, 166, 107, 0.2)',
        'luxury': '0 20px 50px rgba(44, 38, 33, 0.08)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(135deg, #2C2621 0%, #B58A4B 50%, #785A2D 100%)',
      }
    },
  },
  plugins: [],
}
