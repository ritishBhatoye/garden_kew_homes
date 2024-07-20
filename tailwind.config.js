/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#0A4A2F',
        customWhite: '#F0EDE6',
        customAccent: '#FFD700',
        customGreenLight: '#1A5A3F',
        customGreenDark: '#053A1F',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backdropFilter: ['blur'],
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      transitionProperty: {
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}