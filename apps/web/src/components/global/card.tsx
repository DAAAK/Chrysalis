import React from 'react';
import { ICard } from '../../types';

interface ICards extends ICard {
  type: string;
}

const Card = ({ type, name, title, text, image, description }: ICards) => {
  return (
    <div className="max-w-xs rounded overflow-hidden border border-gray-200 shadow-2xl m-4">
      {type === "about" ?
        <div>
          <img className="w-full" src={image} alt={name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            <div className="text-gray-600 text-sm mb-2">{title}</div>
            <p className="text-gray-700 text-base">{text}</p>
          </div>
        </div>
        :
        type === "services" ?
          <div>
            <img className="w-full" src={image} alt={name} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{title}</div>
              <p className="text-gray-700 text-base">{description}</p>
            </div>
          </div>
          :
          <></>
      }
    </div>
  );
};
export default Card