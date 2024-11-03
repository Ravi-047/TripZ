/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        "Inter": ["Inter", "sans-serif"],
        "Poppins": ["Poppins", "sans-serif"],
      },
      screens: {
        "xs": "320px",
        "s": "375px",
        "mobile": "480px",
        "sm": "640px",
        "md": "768px",
        "l": "992px",
        "lg": "1024px",
        "xl": "1280px",
        "xll": "1329px",
        "2xl": "1536px",
      }
    },
  },
  plugins: [nextui(),],
}

