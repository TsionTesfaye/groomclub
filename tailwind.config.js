/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue,ts}", "./index.html"],
  theme: {
    extend: {
      fontFamily:{
        body:['Gellix']
      },
      colors:{
        white:"#ffffff",
        spring_wood:"#f7f4f0",
        white_linen:"#fcf9f5",
        shark:"#2e2f33",
        sidecar:"#f3e6bc",
        beryl_green:"#dce5b8",
        zinnwaldite:"#eacbac",
        heather:"#bdccd4",
      },
      animation:{
        scroll_infinite:'scroll 20s linear infinite'
      },
      keyframes:{
        scroll:{
          to:{
            translate:'-100%',
          }
        }
      }
    },
  },
  plugins: [],
}

