/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'geist': ['Geist Mono', 'monospace'],
      },
      colors: {
        'gruvbox': {
          'bg0': '#282828',
          'bg0-h': '#1d2021',
          'bg1': '#3c3836',
          'bg2': '#504945',
          'bg3': '#665c54',
          'bg4': '#7c6f64',
          'fg': '#ebdbb2',
          'fg4': '#a89984',
          'red': '#cc241d',
          'green': '#98971a',
          'yellow': '#d79921',
          'blue': '#458588',
          'purple': '#b16286',
          'aqua': '#689d6a',
          'orange': '#d65d0e',
        },
      },
    },
  },
  plugins: [],
}