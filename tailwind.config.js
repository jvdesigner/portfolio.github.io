/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {

      animation: {
          fade_in_left: "fade_in_left 1s linear",
          fade_in_right: "fade_in_right 1s linear",
        },
  
        keyframes: {
  
          fade_in_left: {
            "0%": {
              opacity:"0",
              transform:"translatex(-200px)",
            },
            "100%": {
              opacity:"1",
              transform:"translatex(0px)",
            },
          },
  
           fade_in_right: {
            "0%": {
              opacity:"0",
              transform:"translatex(200px)",
            },
            "100%": {
              opacity:"1",
              transform:"translatex(0px)",
            },
          },
  
        },
       
      },
  },
  plugins: [],
}

