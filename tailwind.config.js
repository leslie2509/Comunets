/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
        serif: ['Merriweather', 'serif'],
      },
      boxShadow: {
        'custom': '0px -10px 15px rgba(0, 0, 0, 0.3), 0px 10px 15px rgba(0, 0, 0, 0.3)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-out',
      },
    },
  },
  plugins: [],
}
