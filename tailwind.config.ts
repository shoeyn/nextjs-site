import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

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
        "theme-gradient":
          "radial-gradient(at bottom left,rgba(146, 0, 255, 0.3) 0%,rgba(110, 30, 255, 0.2) 29%,rgba(9, 114, 255, 0.4) 60%,rgba(75, 0, 255, 0.3) 100%)",
      },
      colors: {
        theme1: "#9200ff",
        theme2: "#6e1eff",
        theme3: "#0972ff",
        theme4: "#4b00ff",
      },
    },
  },
  plugins: [typography],
};
export default config;
