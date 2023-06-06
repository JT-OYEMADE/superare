// fontLoader.js
import { Manrope } from "next/font/google";
import localFont from "next/font/local";

export const manrope = Manrope({
  weight: "400",
  subsets: ["latin"],
});

// Additional font loading logic or configuration can be added here if needed
export const monumentExtended = localFont({
  src: [
    {
      path: "../pages/fonts/MonumentExtended-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../pages/fonts/MonumentExtended-Regular.otf",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
});
