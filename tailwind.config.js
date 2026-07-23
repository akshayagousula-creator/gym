/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#111111',
        secondary: '#E50914',
        accent: '#FFD700',
        surface: '#1b1b1b',
        muted: '#767676'
      },
      boxShadow: {
        glow: '0 20px 80px rgba(229, 9, 20, 0.18)',
      },
      backgroundImage: {
        hero: "linear-gradient(180deg, rgba(17,17,17,0.92), rgba(17,17,17,0.92)), url('https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=1600&q=80')"
      }
    }
  },
  plugins: [],
};
