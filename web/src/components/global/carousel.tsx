import React from 'react';
import { useState, useEffect } from 'react';
import { ICarousel } from '../../types';

const useCarousel = ({ data, delay }: { data: ICarousel[]; delay: number }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current + 1) % data.length);
    }, delay);

    return () => clearInterval(interval);
  }, [current, data.length, delay]);

  return [current];
};

const Carousel = ({ data, delay }: { data: ICarousel[]; delay: number }) => {
  const [current] = useCarousel({ data, delay });

  return (
    <div className="flex flex-row items-center justify-center shadow-xl border border-gray-200 rounded-lg">
      {data.map((item, index: number) => (
        <div
          key={index}
          className={`w-full h-96 carousel-item ${
            index === current ? 'block' : 'hidden'
          }`}
        >
          <img
            src={item.src}
            alt={item.alt}
            className={`w-full h-full object-cover transition-transform  ease-in-out transform`}
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
