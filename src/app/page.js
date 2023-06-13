// import styles from "./page.module.css";
import Link from "next/link";
import { monumentExtended } from "@/shared/fontLoader";
import Navbar from "./components/nav-bar";
import Hero from "./components/hero";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="app bg-dark">
      <Navbar />
      <Hero />
    </div>
  );
}
