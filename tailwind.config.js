/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f9e6d4',
        'cream-light': '#fffaf8',
        'cream-deep': '#efdfcd',
        gold: '#866739',
        'gold-soft': '#ac9778',
        'gold-deep': '#876836',
        blush: '#e0a9a4',
        'blush-deep': '#c08286',
        ink: '#2a2a2a',
        'ink-soft': '#454545',
        sage: '#747b54',
      },
      fontFamily: {
        script: ['"Imperial Script"', 'cursive'],
        serif: ['Ovo', 'serif'],
        light: ['"Cormorant Garamond"', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
        urdu: ['"Noto Nastaliq Urdu"', 'serif'],
      },
      maxWidth: {
        sheet: '440px',
      },
    },
  },
  plugins: [],
}
