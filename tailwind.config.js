/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Erfasst die HTML-Datei im Root-Verzeichnis.
    "./src/**/*.{js,ts,jsx,tsx}", // Erfasst alle JavaScript-, TypeScript- und React-Dateien im src-Ordner.
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#fffffa",
        "gray-50": "#FCD5CE",
        "gray-100": "#D18965",
        "gray-500": "#5D4037",
        "primary-100": "#C8C284",
        "primary-300": "#9B9669",
        "primary-500": "#74704E",
        "secondary-400": "#FFBE66",
        "secondary-500": "#FF9810",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      }
    }, 
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [],
}

