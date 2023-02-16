/** @type {import('tailwindcss').Config} */
module.exports =  {
  
  darkMode: "class",
  content: [],

  safelist: [
    {
      pattern: /text-(red|green|blue)-(100|400)/,
      variants: ["group-hover"],
    },
    {
      pattern: /bg-(red|green|blue)-(100|400)/,
      variants: ["group-hover"],
    },
  ],
  theme: {
    screens: {
      xs: "614px",
      sm: "1002px",
      md: "1022px",
      lg: "1092px",
      xl: "1280px",
    },
    extend: {
      colors: {
       
        
      },
    },
  },
};
