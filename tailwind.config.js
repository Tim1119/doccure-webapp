/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#1b5a90",
        maroon:"#00d0f1",
        mute:"#757575"
      },
      fontFamily:{
        sans:['DM Sans',"san-serif"]
      }
    },
  },
  plugins: [],
}