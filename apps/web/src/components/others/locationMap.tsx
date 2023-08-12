import React from 'react';

const LocationMap = () => {
  return (
    <div className="flex-1 flex justify-center items-center">
      <iframe
        title="location-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.549703379306!2d-4.001277485227724!3d5.332693396131663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eb9b4095e7f1%3A0xad1cca628972695a!2sInstitut%20Chrysalis!5e0!3m2!1sfr!2sus!4v1675725069927!5m2!1sfr!2sus"
        className="md:absolute h-96 md:h-3/6 md:w-3/6 md:mr-16"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export default LocationMap;
