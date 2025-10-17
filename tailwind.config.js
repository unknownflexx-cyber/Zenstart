/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#05010E',
          secondary: '#1a1625',
        },
        light: {
          primary: '#ffffff',
          secondary: '#f8fafc',
        }
      },
      fontFamily: {
        'sans': ['Poppins', 'system-ui', 'sans-serif'],
        'thin': ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        'thin': '300',
        'light': '300',
      }
    },
  },
  plugins: [],
};