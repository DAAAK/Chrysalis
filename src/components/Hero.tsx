import Image from "next/image";

import { background } from "../assets";

const Hero = (): JSX.Element => {
  return (
    <section id="home" className={`flex md:flex-row flex-col`}>
      <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center px-4 mb-2 py-[6px] bg-discount-gradient rounded-[10px]"></div>

        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="flex-1 font-semibold text-black font-poppins ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]">
            Votre beauté <br className="hidden sm:block" />{" "}
            <span className="text-gradient">Prend son</span>{" "}
          </h1>
        </div>

        <h1 className="w-full font-semibold text-black font-poppins ss:text-[68px] text-[52px] ss:leading-[100.8px] leading-[75px]">
          Envol.
        </h1>
        <p className={` max-w-[470px] mt-16 text-xl`}>
          Nous mettons à votre disposition notre expertise à travers des soins
          innovants et efficaces adaptés à vos besoins.
        </p>
      </div>

      <div className={`flex-1 flex md:my-0 my-10 relative`}>
        <Image
          src={background}
          alt=""
          width={600}
          className="relative w-[100%] h-[100%] z-[5]"
        />
      </div>
    </section>
  );
};

export default Hero;
