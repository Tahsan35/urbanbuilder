import { Container } from "lucide-react";

const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
    Container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "600px",
      md: "728px",
      lg: "984px",
      xl: "1240px",
      "2xl": "1496px",
    },

    extend: {
      colors: {
        primary: "#121315",
        secondary: "#666666",
        accent: "#ffca3b",
        border: "#d7d7d7",
      },
      boxShadow: {
        DEFAULT: "0 4px 54px 10px rgba(18, 19, 21, 0.6)",
      },
    },
  },
};

export default config;
