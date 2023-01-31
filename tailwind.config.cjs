/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-roboto-slab)', 'serif'],
        sans: ['Inter', 'sans-serif']
      }
    }
  }
}
