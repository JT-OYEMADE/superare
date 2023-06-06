/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brightPink: "#F701F8",
      },
      // backgroundImage: (theme) => ({
      //   1: "radial-gradient(132.29% 59.65% at 163.11% 22.69%, rgba(89, 89, 253, 0.5) 0%, rgba(139, 73, 185, 0.5) 100%) filter: blur(95.1992px);",
      //   2: "radial-gradient(132.29% 59.65% at 163.11% 22.69%, rgba(89, 89, 253, 0.5) 0%, rgba(139, 73, 185, 0.5) 100%) filter: blur(95.1992px);",
      //   home: "url(ABPK-Donut-Drip-GRAD_1.png);",
      //   clonex: "url(Clone X 11.png);",
      // }),
    },
  },
  // screens: {
  //   xs: "480px",
  //   sm: "768px",
  //   md: "1060px",
  // },
  screens: {
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1440px",
  },
  plugins: [],
};
