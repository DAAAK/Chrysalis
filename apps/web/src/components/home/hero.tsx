import React from 'react'
import { carousel } from '../../constants'
import { Carousel } from '../global';

const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between px-6 py-16 md:py-20">
            <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                    Bienvenue chez <span className="text-[#93d9f0]">Chrysalis</span>
                </h1>
                <p className="text-lg mb-6 text-gray-700 mr-2">
                    Notre objectif est de mettre à votre disposition notre expertise à travers des soins innovants et efficaces, adaptés à vos besoins.
                </p>
                <button className="bg-[#93d9f0] text-black hover:text-white font-bold py-2 px-4 rounded-lg">
                    Réservez maintenant !
                </button>
            </div>
            <div className="md:w-1/2">
                <Carousel data={carousel} delay={5000} />
            </div>
        </div>
    );
}

export default Hero