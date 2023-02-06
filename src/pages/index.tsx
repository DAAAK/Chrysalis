import Head from "next/head";
import Image from "next/image";

import { background } from "../assets";

import Navbar from "../components/navBar";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Features from "../components/features";

export default function Home(): JSX.Element {
  return (
    <div className="w-full overflow-hidden bg-sky-300">
      <Head>
        <title>Chrysalis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-6 text-center sm:px-16">
        <div className="w-full xl:max-w-[1280px]">
          <Navbar />
        </div>
      </main>

      <div className="flex items-center justify-center px-6 bg-primary sm:px-16">
        <div className="w-full xl:max-w-[1280px]">
          <Hero />
          <div className="mt-40 mb-20">
            <Image
              src={background}
              alt=""
              className="relative w-full h-40 z-[5]"
            />
          </div>
          <Features />
          <Footer />
        </div>
      </div>
    </div>
  );
}
