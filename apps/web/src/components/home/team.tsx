import { Card } from '../global';
import { teamMembersCard } from '../../constants';

const Team = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h2 className="text-3xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#93d9f0] to-green-400">
              Notre équipe
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#93d9f0] to-green-400 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Découvrez notre équipe passionnée de professionnels de la beauté,
            prête à vous chouchouter et sublimer votre beauté naturelle.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center align-items-center">
          {teamMembersCard.map((member, index) => (
            <Card type="services" key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
