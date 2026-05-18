/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'mm-forest':      '#2D4A3E',
        'mm-bg':          '#F7F3EC',
        'mm-bg-alt':      '#FAFAF8',
        'mm-bronze':      '#8B6F4E',
        'mm-bronze-soft': '#D4C5B0',
        'mm-ink':         '#1A1A1A',
        'mm-card-hover':  '#E8F0EC',
      },
      fontFamily: {
        display: ['var(--mm-font-display)', 'serif'],
        body:    ['var(--mm-font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
