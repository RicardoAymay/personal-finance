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
        beige:{
          100: "#F8F4F0",
          500: "#98908B"
        },
        grey:{
          900: "#201F24",
          500: "#696868",
          300: "#B3B3B3",
          100: "#F2F2F2"
        },
        secondary: {
          green:"#277C78",
          yellow:"#F2CDAC",
          cyan:"#82C9D7",
          navy:"#626070",
          red:"#C94736",
          purple:"#826CB0",
        },
        alternate: {
          purple: "#AF81BA",
          turquoise: "#597C7C",
          brown: "#93674F",
          magenta: "#934F6F",
          blue: "#3F82B2",
          navyGrey: "#97A0AC",
          armyGreen: "#7F9161",
          gold: "#CAB361",
          orange: "#BE6C49" 
        }
      },
      spacing: {
        '50': '4px',
        '100': '8px',
        '150': '12px',
        '200': '16px',
        '250': '20px',
        '300': '24px',
        '400': '32px',
        '500': '40px',
      },
      screens: {
        maxDefined: "1440px"
      }
      
    },
  },
  plugins: [],
} satisfies Config;
