import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NextLink from 'next/link';
import { NavBar } from "@/components/NavBar";
import MainLayouts from "@/components/layouts/MainLayouts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
     <MainLayouts>
     <h1>Home</h1>
        <NextLink href="/about" className={styles.title}>
          Ir a LUIS
        </NextLink>
     </MainLayouts>

    </>
  );
}
