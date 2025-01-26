import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cardBlue: "#DDECEF",
        cardSkyBlue: "#DBF9F9",
        cardlightDarkPurple: "#D9E7F4",
        cardYellow: "#FAE27C",
        cardYellowLight: "#FEFCE8"
      },
    },
  },
  plugins: [],
} satisfies Config;
