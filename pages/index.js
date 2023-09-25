import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <div className={styles.main}>
      <h1>Home Page</h1>
      <ul>
        <li>
          <a href="/portfolio">portfolio</a>
        </li>
        <li>
          <Link href="/about">Hello world</Link>
        </li>
        <Link href="/clients">Clients</Link>
        <li></li>
      </ul>
    </div>
  );
}
