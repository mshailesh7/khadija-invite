/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#fdf2f5',
        'cream-light': '#fffbfc',
        'cream-deep': '#f8e4ea',
        gold: '#b86b7a',
        'gold-soft': '#d497a3',
        'gold-deep': '#9e5565',
        blush: '#f4a9b8',
        'blush-deep': '#e8879a',
        'pink-soft': '#fce4ec',
        'pink-mid': '#f0b4c4',
        ink: '#3d2a30',
        'ink-soft': '#5c454b',
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
