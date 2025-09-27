/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'exo': ['Exo 2', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-in': 'slideIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      colors: {
        'crimson': '#DC143C',
        'dark-red': '#8B0000',
        'blood-red': '#B22222',
        'charcoal': '#36454F',
        'steel': '#1C1C1C',
      },
      boxShadow: {
        'red': '0 4px 20px rgba(220, 20, 60, 0.3)',
        'dark': '0 8px 32px rgba(0, 0, 0, 0.8)',
        'inset-dark': 'inset 0 2px 8px rgba(0, 0, 0, 0.6)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}