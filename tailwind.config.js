import scrollbarHide from 'tailwind-scrollbar-hide'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,scss}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          blue: '#1A1C28',
          white: '#FFF9F2',
          yellow: '#F6DF75'
        },
        second: {
          yellow: '#FFB200',
          blue: '#1F4165',
        },
        third: {
          yellow: '#EFD86E',
        },
        gradient: {
          first: '#f6df75',
          second: '#ffb200',
          third: '#fbe47c',
          four: '#efd86e',
        },
      },
      fontFamily: {
        main: ['Baskerville', 'serif'],
        second: ['Bickham Script One', 'cursive'],
        third: ['Aboreto', 'sans-serif'],
      },
      maxWidth: {
        container: '1480px',
      },
      fontSize: {
        h1: ['13.6vw', { lineHeight: '100%', fontWeight: '400', fontStyle: 'normal' },],
        h2: ['50px', { lineHeight: '110%', fontWeight: 'normal', fontStyle: 'normal' },],
      },
      boxShadow: {
        custom: '0 0 20px 0 #efd86e',
      }
    },
  },
  plugins: [
    scrollbarHide
  ],
}

