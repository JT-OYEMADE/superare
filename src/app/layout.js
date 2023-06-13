import "./globals.css";
import { manrope, monumentExtended } from "@/shared/fontLoader";

export const metadata = {
  description: "Discover and Collect Super Rare NFTs",
  title: {
    template: "%s | Superare - Buy super rare NFTs",
    default: "Superare - Buy super rare NFTs",
  },
  applicationName: "Superare",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.className}`}>
      <head />
      <body>{children}</body>
    </html>
  );
  {
    /*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */
  }
}
