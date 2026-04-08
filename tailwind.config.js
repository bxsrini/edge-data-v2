/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0846AA',
          light: '#3B6FC2',
          dark: '#062F73',
        },
        accent: {
          success: '#10B981',
          warning: '#F59E0B',
          critical: '#EF4444',
        },
        surface: '#FFFFFF',
        border: '#E2E8F0',
        'text-primary': '#1E293B',
        'text-secondary': '#64748B',
      },
      backgroundColor: {
        app: '#F1F5F9',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        card: '8px',
        btn: '6px',
        input: '4px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}
