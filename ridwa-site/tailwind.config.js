/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage:       '#3D5A45',
        terracotta: '#D4622A',
        cream:      '#FAF7F2',
        charcoal:   '#1A1A1A',
        'sage-dark':  '#2a3e2f',
        'sage-light': '#6b9377',
        'cream-mid':  '#F0EBE1',
      },
      fontFamily: {
        sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        mono:  ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
}
