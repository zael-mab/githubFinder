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
    themes:[
      {
        light: {
          "primary": "#937F9B",
          "secondary": "#F9F871",
          "accent": "#89D47D",
          "light": "#DDF2FF",
          "neutral": "#191D24",
          "base-100": "#2A303C",
          'base-200': '#6F7788',
          'base-300': '#00767D',
          'base-400': '#F9F871',
          "info": "#6C93EF",
          "success": "#23BE94",
          "warning": "#8F6E0A",
          "error": "#F12229",
        },
      },
    ]
        
  },
  plugins: [require('daisyui')],
}

