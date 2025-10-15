/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#1C3B2A',
        'sand-beige': '#E5D2B8',
        'accent-orange': '#F57C00',
        'charcoal': '#2E2E2E',
        'sky-blue': '#AEDFF7',
      },
      fontFamily: {
        heading: ['Poppins', 'Montserrat', 'sans-serif'],
        body: ['Inter', 'Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
