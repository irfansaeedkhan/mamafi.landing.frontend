/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: "400px",
      smTab: "577px",
      mdTab: "769px",
      lgTab: "993px",
      smLap: "1279px",
      mdLap: "1400px",
      lgLap: "1680px",
      ...defaultTheme.screens,
    },
    colors: {
      themeDark: "#17171A",
      grayThunder: "#3B3F54",
      // grayLava: "#3B3F54",
      elevationDark: "#1B1C22",
      elevationLight: "#ff7849",
      anchor: "#2A2D3C",
      white: "#FFFFFF",
      black: "#000000",
      blackLime: "#141416",
      offWhite: "#F6F7FA",
      grayLight: "#DBDDE6",
      grayLightV2: "#A0A4BB",
      grayText: "#B7BBCC",
      yellow: "#FEBF32",
      red: "#FF6363",
      ...defaultTheme.colors,
    },
    safelist: [
      'bg-[url("/images/reputation/video-player-01.png")]',
      'bg-[url("/images/reputation/video-player-02.png")]',
      'bg-[url("/images/reputation/video-player-03.png")]',
      'bg-[url("/images/reputation/video-player-04.png")]',
    ],    
    extend: {
      height: {
        'h-fit': 'fit-content', // افزودن مقدار fit-content
      },      
      fontFamily: {
        monto: ["var(--font-monto)", "Montserrat Alternates", "sans-serif"],
        Minecraft: ["Minecraft", "sans-serif"],
      },
      backgroundImage: {
        cardNoise: "url('/images/Noise.png')",
        gradient: "linear-gradient(90deg, #FF294F 0%, #1C83FF 100%)",
      },
      boxShadow: {
        card: "1px -1px 3px 0px #3e3e3e8c",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-pseudo-elements"),
  ],
  variants: {
    extend: {
      // Enable variants for pseudo-elements
      backgroundColor: ["after"],
      backgroundImage: ["after"],
      position: ["after"],
      inset: ["after"],
      height: ["after"],
      width: ["after"],
      // Add other properties as needed
    },
  },
};
