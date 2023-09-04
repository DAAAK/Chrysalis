import { IFeatures } from '../../types';

const Nails = ({ data }: { data: IFeatures }) => {
  return (
    <div className="flex flex-col justify-start items-start w-full mt-5 ml-2">
      <div className="bg-gradient-to-r from-[#93d9f0] to-green-400 w-full justify-center flex">
        <h2 className="text-2xl font-bold">{data.title}</h2>
      </div>
      <ul className="list-disc ml-4 mt-4">
        {data.elements.map((element) => (
          <li key={element.nom} className="text-sm">
            {element.nom} {element.duration ? `(${element.duration})` : ''} -{' '}
            {element.price} FCFA
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nails;
