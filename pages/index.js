import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <div className={styles.main}>
      <h1>Home Page</h1>
    </div>
  );
}
