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
      fontSize: {
        hxl: [
          "78px",
          {
            lineHeight: "120%",
            letterSpacing: "-0.08em",
            fontWeight: "800",
          },
        ],
        // "3xl": [
        //   "1.875rem",
        //   {
        //     lineHeight: "2.25rem",
        //     letterSpacing: "-0.02em",
        //     fontWeight: "700",
        //   },
        // ],
      },
      colors: {
        brightPink: "#F701F8",
        dark: "#060606",
        // "white-100": "#ffffff",
      },
      boxShadow: {
        boxNav: "inset 0px -1px 0px #000000;",
      },
    },
    screens: {
      xs: "300px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  // screens: {
  //   xs: "480px",
  //   sm: "768px",
  //   md: "1060px",
  // },

  plugins: [],
};
