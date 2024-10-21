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
    },
  },
  plugins: [],
}