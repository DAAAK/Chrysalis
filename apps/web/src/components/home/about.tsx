import React from 'react';
import { Card } from '../global';
import { testimonialsCard } from '../../constants';

const AboutSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#93d9f0] to-green-400 sm:text-4xl text-center">
            À Propos de nous
          </h2>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            Nous sommes un salon de santé spécialisé dans la fourniture de
            services de santé de qualité supérieure à nos clients. Notre mission
            est d'aider nos clients à atteindre une santé et un bien-être
            optimaux en leur fournissant les meilleurs soins possibles.
          </p>
          <div className="sm:mt-16 flex justify-center items-center">
            <div className="container mx-auto py-10">
              <div className="flex flex-wrap justify-center">
                {testimonialsCard.map((testimonial, index) => (
                  <Card type={'about'} key={index} {...testimonial} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
