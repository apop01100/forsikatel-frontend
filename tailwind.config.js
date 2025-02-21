/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          serif: ['Playfair Display', 'serif'], // Set default to Playfair Display
          source: ['Source Sans Pro', 'sans-serif'],
        },
        colors: {
          neutral : {
            50: "#F6F7F9" ,
            100:"#EDEDF1" ,
            200:"#D6D9E1" ,
            300:"#B2B8C7" ,
            400:"#8992A7" ,
            500: "#6A748D" ,
            600: "#555E74",
            700: "#454C5F",
            800: "#3C4150",
            900: "#353945",	
          }, 
          primary : {
            50: "#FFF1F2",
            100: "#FF9DA1",
            200: "#FF656C",
            300: "#ED1B26",
            400: "#A41016",
          },
          secondary : {
            50: "#FFF4ED",
            100: "#FFCAA8",
            200: "#FFA470",
            300: "#FF5B22",
            400: "#BD2705",
          },
          success : {
            50: "#EFFFE6",
            100: "#B9FC9A",
            200: "#8CF65F",
            300: "#45D111",
          },
          error : {
            50: "#FFDDDD",
            100: "#FF5757",
            200: "#FF0000",
            300: "#B10303",
          },
        },
      },
    },
    plugins: [require('tailwind-scrollbar-hide')],
  };