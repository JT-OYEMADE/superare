// import styles from "./page.module.css";
import Link from "next/link";
import { monumentExtended } from "@/shared/fontLoader";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1 className={`${monumentExtended.className}`}>Home</h1>
      <Link href="/about"> Go to About</Link>
    </>
  );
}
