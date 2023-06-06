import "./globals.css";
import { manrope, monumentExtended } from "@/shared/fontLoader";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.className}`}>
      <head />
      <body>
        <nav className={`${monumentExtended.className}`}>
          <h1 className="text-brightPink">SUPERARE</h1>
          <div>Discover and Collect Super Rare NFTs</div>
        </nav>
        {children}
      </body>
    </html>
  );
  {
    /*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */
  }
}
