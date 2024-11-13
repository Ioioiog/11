/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          orange: '#FFC8A2',
          'orange-light': '#FFE5D6',
          'orange-dark': '#FFB280',
          DEFAULT: '#FFC8A2',
          dark: '#1F2937',
          'gray-light': '#F3F4F6',
          'gray-medium': '#4B5563',
          'gray-dark': '#374151', // Aceasta este culoarea care va fi folosită pentru footer
        },
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards'
      }
    },
  },
  plugins: [],
}
