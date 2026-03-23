/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      background: '#ffffff',
      primary: '#1C70B7',
      black: '#02081D',
      charcoal: '#02081D',
      tar: '#191919',
      teal: '#0A9396',
      orange: '#FF5E00',
      ltOrange: '#EE9B00',
      tangerine: '#FFA229',
      lightGray: '#A5A5A5',
      midnight: '#1E1E1E',
      taupe: '#E8E3DC',
      rust: '#BB3E04',
      purple: '#6E5494',
      white: '#ffffff',
      borderGray: 'rgba(0,0,0,.10)',
      backgroundGray: '#F8F9F9',
      gray: '#526471'
    },
    borderRadius: {
      DEFAULT: '4px',
      small: '4px',
      xs: '4px',
      xl: '8px',
      none: '0'
    },
    fontFamily: {
      'sans': ['"Plus Jakarta Sans"', 'Arial', 'Helvetica', 'sans-serif'],
      'header': ['"Outfit"'],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1536px'
    },
    extend: {},
  },
  plugins: [],
}
