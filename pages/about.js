import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import MainLayouts from "@/components/layouts/MainLayouts";
import { DarkLayout } from "@/components/layouts/DarkLayout";

const inter = Inter({ subsets: ["latin"] });

export default function AboutPage() {
  return (
    <>
     <h1>About</h1>
    </>
  );
}


AboutPage.getLayout = function getLayout(page) {
  return (
    <MainLayouts>
    <DarkLayout>
      {page}
    </DarkLayout>

  </MainLayouts>
  )
}