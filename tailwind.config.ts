import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["var(--font-carter-One)"],
        subtitle: ["var(--font-raleway)"],
        text: ["var(--font-Archivo)"],
      },
      spacing: {
        "1": "8px",
        "2": "16px",
        "3": "24px",
        "4": "32px",
        "5": "40px",
        "6": "48px",
        "7": "56px",
        "8": "64px",
        "9": "72px",
        "10": "80px",
      },
      colors: {
        footerBlack: "#191A1A",
        primary: "#031319 ",
        segundary: "#5C9CB2 ",
      },
    },
  },
  plugins: [],
};
export default config;
