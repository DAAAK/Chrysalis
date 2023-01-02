import Head from "next/head";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
          <Footer />
        </div>
      </div>
    </div>
  );
}
