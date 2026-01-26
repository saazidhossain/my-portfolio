module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0F172A",
          accent: "#22D3EE",
          success: "#10B981"
        }
      },
      fontFamily: {
        geist: ["Geist", "sans-serif"],
        inter: ["Inter", "sans-serif"]
      },
      transitionDuration: {
        200: "200ms"
      }
    }
  },
  plugins: []
};
