/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forestGreen: '#3B6A3A',   
        earthBrown: '#A76D49',     
        goldenYellow: '#FFD700',    
        terracottaRed: '#C65D3D',  
        deepBlue: '#1E3A5F',      
        pureBlack: '#000000', 
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
