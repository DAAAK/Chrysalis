import Image from "next/image"

import { features } from "../constants"
import logo from "../assets/logo.png"

const FeatureCard = ({ title, content, index }: { icon: string, title: string, content: string, index: number }) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
        <div className={`w-[64px] h-[64px] rounded-full bg-dimBlue`}>
            <Image src={logo} alt="star" className="w-[50%] h-[50%] object-contain" />
        </div>
        <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
                {title}
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                {content}
            </p>
        </div>
    </div>
);

const Features = (): JSX.Element => (
    <section id="features" className="flex md:flex-row flex-col sm:py-16 py-6">
        <div className="flex-1 flex justify-center items-start flex-col">
            <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full">
                You do the business, <br className="sm:block hidden" /> we’ll handle
                the money.
            </h2>
            <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
                With the right credit card, you can improve your financial life by
                building credit, earning rewards and saving money. But with hundreds
                of credit cards on the market.
            </p>

            <button type="button" className="mt-10 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-red-gradient rounded-[10px] outline-none">toto</button>
        </div>

        <div className="flex-1 flex justify-center items-center flex-col md:ml-10 ml-0 md:mt-0 mt-10 relative">
            {features.map((feature, index) => (
                <FeatureCard icon={""} key={feature.id} {...feature} index={index} />
            ))}
        </div>
    </section>
);

export default Features;
