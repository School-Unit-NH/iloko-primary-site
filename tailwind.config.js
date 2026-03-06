/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        iloko: {
          // red: '#D91E36',    // Main background red
          // yellow: '#FFDE00', // Emblem yellow
          // blue: '#D2E5F7',   // Book page light blue
          // green: '#9ACD32',  // Slogan banner lime green
          // white: '#FFFFFF',  // Text and center highlight
          red: '#C81C33',     // Slightly deeper red (less pink, more contrast)
          yellow: '#FFD400',  // Warmer yellow, slightly less neon
          blue: '#CFE3F6',    // Softened light blue for better harmony
          green: '#92C72E',   // Slightly deeper lime green
          white: '#FAFAFA',   // Softer white (less harsh than pure white)
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Roboto Serif"', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}
