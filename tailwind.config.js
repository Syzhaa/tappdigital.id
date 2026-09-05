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
          indigo: '#4F46E5', // indigo 600 modern punchy
          yellow: '#FACC15', // vibrant amber yellow
        },
        accent: {
          pink: '#FECDD3',
          green: '#A7F3D0',
          cyan: '#BAE6FD',
          purple: '#DDD6FE',
        }
      },
      boxShadow: {
        'neo': '6px 6px 0px #0F172A',
        'neo-lg': '8px 8px 0px #0F172A',
        'neo-sm': '4px 4px 0px #0F172A',
        'neo-xs': '3px 3px 0px #0F172A',
        'neo-xxs': '2px 2px 0px #0F172A',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
