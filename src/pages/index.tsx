import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar";

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center  bg-sky-300 py-2>">
      <Head>
        <title>Chrysalis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <Navbar />
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="h-4 ml-2"
            width={72}
            height={16}
          />
        </a>
      </footer>
    </div>
  );
}
