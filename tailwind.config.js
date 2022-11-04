/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { 
    colors: {
      'main-gray': 'F4F5F7', 
      'link-gray': '#EAECF0', 
      'light-gray': '#667085',
      'primary': '#101828',
      'purple': '#6938EF',
    },
    
    fontFamily: {
      inter: ['Inter', 'sans-serif'],  
    },
    extend: {
      
    },
  },
  plugins: [],
}
