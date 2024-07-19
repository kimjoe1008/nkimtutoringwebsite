import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navbar':'#EEF7FF',
        'schedule':'#7AB2B2',
        'darkhover': '#778C8C',
      },
      boxShadow: {
        'solid-below': '0 5px 0px 0px rgb(119, 140, 140)', // Custom solid shadow below the button
      },
    },
  },
  plugins: [nextui()],
};
export default config;