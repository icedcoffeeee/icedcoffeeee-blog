import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.neutral[900],
        secondary: colors.neutral[600],
        tertiary: colors.neutral[400],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
