/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/WorkExperience.jsx",
    "./src/components/Home.jsx",
    "./src/components/navbar.jsx",
    "./src/components/Layout.jsx",
    "./src/components/About.jsx",
    "./src/components/Education.jsx",
    "./src/components/workpast/Precon.jsx",
    "./src/components/workpast/Leon.jsx",
    "./src/components/workpast/SkydiveTandem.jsx",
    "./src/components/workpast/Vidblast.jsx",
  ],
  theme: {
    extend: {
      colors: {
        "skye-blue": "rgba(5, 66, 137, 0.7)",
        "solid-blue": "rgba(5, 66, 137, 1)",
      },
      backgroundImage: {
        "back-clouds": "url('./images/clouds.jpg')",
        "back-unisa": "url('./images/unisa.jpg')",
        "back-drone": "url('./images/drone.jpg')",
        "back-pao": "url('./images/pao.jpg')",
        "back-mining": "url('./images/mining drone.jpg')",
        "back-server": "url('./images/server.jpg')",
        "back-skydiving": "url('./images/skydiving.jpg')",
        "back-electricity": "url('./images/electricity.jpg')",
        "back-close": "url('./images/close.png')",
      },
    },
  },
  plugins: [],
};
