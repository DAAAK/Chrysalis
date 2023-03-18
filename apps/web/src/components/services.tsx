import React from 'react';
import Card from './card';
import { servicesCard } from "../constants";

const Services = () => {
    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
                    Nos services
                </h2>
                <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center align-items-center">
                    {servicesCard.map((service, index) => (
                        <Card type="services" key={index} {...service} />
                    ))}
                </div>
                <div className="mt-16 justify-center flex">
                    <a href="/features" className="text-xl font-medium text-black hover:text-[#93d9f0]">
                        En savoir plus <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Services;
