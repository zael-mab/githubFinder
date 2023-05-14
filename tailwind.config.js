/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors:{
        'prim':'#947F9B',
        'sec':'#AEA5DB'
      }
    },
  },
  daisyui: {
    // themes: [
    //   {
    //     light: {
    //       "primary": "#666666",
    //       "secondary": "#c0c6f9",
    //       "accent": "#307ad3",
    //       "neutral": "#2B2F36",
    //       "base-100": "#F0F0F0",
    //       "info": "#6C93EF",
    //       "success": "#23BE94",
    //       "warning": "#8F6E0A",
    //       "error": "#F12229",
    //     },
  },
  plugins: [require('daisyui')],
}

