import Link from "next/link";
import { manrope, monumentExtended } from "@/shared/fontLoader";

export const metadata = {
  title: "About ",
};
export default function About() {
  return (
    <>
      <h1 className={`${monumentExtended.className}`}>About</h1>
      <Link href="/">Go back home</Link>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
        voluptatem impedit pariatur quidem? Quos architecto perspiciatis alias,
        laboriosam sed sit!
      </p>
    </>
  );
}
