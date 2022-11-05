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
      'gray-600': '#475467',
      'gray-700': '#344054',
      'primary-600': '#1570EF',
      'error': '#F83F23',
    },
    
    fontFamily: {
      inter: ['Inter', 'sans-serif'],  
    },
    extend: {
      
    },
  },
  plugins: [],
}
