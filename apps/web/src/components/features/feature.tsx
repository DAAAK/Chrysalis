import { visage, corps, makeUp, onglerie, coiffure } from '../../constants';
import { Coiffure, Corps, MakeUp, Onglerie, Visage } from '../services';

const Feature = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full">
      <div className="grid md:grid-cols-2 gap-3 items-start md:space-x-8 justify-center w-full max-w-screen-lg">
        <Visage data={visage} />
        <Corps data={corps} />
        <MakeUp data={makeUp} />
        <Onglerie data={onglerie} />
        <Coiffure data={coiffure} />
      </div>
    </div>
  );
};

export default Feature;
