/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'karate-red': '#dc2626',
        'karate-black': '#111827',
        'karate-white': '#ffffff',
        'admin-blue': '#3b82f6',
        'admin-green': '#10b981',
        'admin-gray': '#6b7280',
      },
      fontFamily: {
        'kyokushin': ['Oswald', 'Bebas Neue', 'Impact', 'Arial Black', 'sans-serif'],
        'japanese': ['Noto Sans JP', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', 'sans-serif'],
        'admin': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'bounce-in': 'bounceIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
