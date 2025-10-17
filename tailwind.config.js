/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ---------------------------------
           Primary Brand System (60%)
        ----------------------------------*/
        primary: {
          DEFAULT: "#E5D2B8",  // Sand Beige — site-wide background base
          dark: "#1C3B2A",     // Forest Green — headings, nav, footer
          light: "#F8EBDD",    // Optional softer beige for light sections
        },

        /* ---------------------------------
           Secondary (30%)
        ----------------------------------*/
        secondary: {
          DEFAULT: "#2E2E2E",  // Charcoal — strong neutral for text
          light: "#555555",    // Muted text or subheadings
          dark: "#1A1A1A",     // Optional for deep contrast text
        },

        /* ---------------------------------
           Accent (10%)
        ----------------------------------*/
        accent: {
          DEFAULT: "#F57C00",  // Bright orange — CTAs, highlights
          hover: "#E86E00",    // Slightly darker for hover states
          soft: "#FFD7A0",     // Optional lighter accent (hover glow)
        },

        /* ---------------------------------
           Neutral Support
        ----------------------------------*/
        neutral: {
          light: "#FFFFFF",    // Cards, content backgrounds
          dark: "#2E2E2E",     // Default readable body text
        },

        /* ---------------------------------
           Supporting / Tertiary
        ----------------------------------*/
        sky: "#AEDFF7",        // Light sky blue — optional accent
      },

      /* ---------------------------------
         Typography System
      ----------------------------------*/
      fontFamily: {
        heading: ["Poppins", "Montserrat", "sans-serif"],
        body: ["Inter", "Lato", "sans-serif"],
      },

      fontSize: {
        h1: ["3rem", { lineHeight: "1.1", fontWeight: "700" }],
        h2: ["2rem", { lineHeight: "1.3", fontWeight: "600" }],
        h3: ["1.5rem", { lineHeight: "1.4", fontWeight: "600" }],
        base: ["1rem", { lineHeight: "1.7" }],
        small: ["0.875rem", { lineHeight: "1.6" }],
      },

      /* ---------------------------------
         Shadows & Radii
      ----------------------------------*/
      boxShadow: {
        soft: "0 4px 10px rgba(0,0,0,0.06)",
        medium: "0 8px 20px rgba(0,0,0,0.1)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
