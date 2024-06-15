import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import reactGlow from "@codaworks/react-glow/tailwind";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        theme1: "#9200ff",
        theme2: "#6e1eff",
        theme3: "#0972ff",
        theme4: "#4b00ff",
      },
    },
  },
  plugins: [typography, reactGlow],
};
export default config;
