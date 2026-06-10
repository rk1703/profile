/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050806", // obsidian forest black
        secondary: "#a2b5a9", // sage green-gray
        tertiary: "#0a140f", // dark emerald glass
        "virescent-green": "#10b981",
        "virescent-emerald": "#059669",
        "virescent-mint": "#34d399",
        "virescent-cyan": "#06b6d4",
        "black-100": "#08100c",
        "black-200": "#030604",
        "white-100": "#f0f5f2",
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgba(5, 20, 12, 0.4)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(to bottom, rgba(5, 8, 6, 0.95), rgba(5, 8, 6, 0.9)), url('/herobg.png')",
      },
    },
  },
  plugins: [],
}
