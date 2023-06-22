import { type Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      'sidebar': '#1E213A',
      'mainPanel': '#100E1D',
      'sidebarButton': '#6E707A',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
} satisfies Config;
