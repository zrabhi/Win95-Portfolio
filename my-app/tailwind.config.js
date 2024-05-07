/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      msserif: ["Ms Sans Serif", "sans-serif"]
    },
    extend: {
      boxShadow:{
          graysm:'1px 1px #000',
      },
      colors:{
        blue95: "#00007c",
        gray95:"#c3c3c3",
        white95:"fafafa"
      }
    },
  },
  plugins: [],
}

