import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f6f7f7",
          100: "#e3e7e7",
          200: "#c7d0d0",
          500: "#546464",
          700: "#2f3d3d",
          900: "#111819",
        },
        steel: {
          50: "#f3f6f8",
          100: "#dfe7ec",
          500: "#647889",
          700: "#364653",
          900: "#17212a",
        },
        copper: {
          100: "#f2dfcd",
          500: "#b66f35",
          700: "#784421",
        },
        safety: {
          100: "#fff4cc",
          500: "#e2a400",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 60px rgba(17, 24, 25, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
