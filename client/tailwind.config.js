/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
blue: "#3333cc",
red: "#e60000",
secondary:"#555",
primary:"#f2f2f2",

      },
      fontFamily:{
        primary: [ 'Poppins', "sans-serif"]
      },
    },
  },
  plugins: [],
}

