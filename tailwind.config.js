module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#f59e0b",

          "secondary": "#facc15",

          "accent": "#f59e0b",

          "neutral": "#fde68a",

          "base-100": "#f3f4f6",

          "info": "#e7e5e4",

          "success": "#a3e635",

          "warning": "#fca5a5",

          "error": "#ef4444",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"]
      },
    },
  },
  plugins: [
    require("daisyui")],
}