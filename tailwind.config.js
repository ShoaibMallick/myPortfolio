/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        shine: {
          '100%': {
            backgroundPosition: '200% center'
          }
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        shine: 'shine 1.2s linear infinite'
      }
    }
  },
    plugins: [],
  }
  