/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B1F3A',
          deep: '#122D4E',
          blue: '#244F9E',
          cyan: '#4AA3DF',
          ice: '#EEF5FB',
          ink: '#243447',
          muted: '#66788A',
        },
        primary: {
          dark: '#0F172A',
          bg: '#F8FAFC',
          indigo: '#6366F1',
          yellow: '#FDE047',
        },
        accent: {
          pink: '#FECACA',
          green: '#A7F3D0',
          cyan: '#67E8F9',
          purple: '#C4B5FD',
        }
      },
      boxShadow: {
        'neo': '8px 8px 0 #0F172A',
        'neo-sm': '6px 6px 0 #0F172A',
        'neo-xs': '4px 4px 0 #0F172A',
        'neo-xxs': '3px 3px 0 #0F172A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
