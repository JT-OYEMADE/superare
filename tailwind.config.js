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
      dropShadow: {
        faqShadow: "9px 8px 0px rgba(255, 255, 255, 0.4)",
      },
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
      // gradientColor: {
      //   customGradient: "321.2deg, #160F20 6.92%, #191020 128.11%",
      // },
      colors: {
        brightPink: "#F701F8",
        dark: "#060606",
        darkDeep: "#0B090E",
        blackBox: "#160F20",
        purpleBox: "#191020",
        // gradientColor: {
        //   100: "linear-gradient(321.2deg, #160F20 6.92%, #191020 128.11%)",
        // },
      },

      boxShadow: {
        boxNav: "inset 0px -1px 0px #000000;",
        boxSroll: "0px 4px 4px rgba(0, 0, 0, 0.25);",
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
  plugins: [require("daisyui")],
};
