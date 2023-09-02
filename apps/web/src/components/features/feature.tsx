import { face, body, makeUp, nails, hair } from '../../constants';
import { Hair, Body, MakeUp, Nails, Face } from '../services';

const Feature = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full">
      <div className="grid md:grid-cols-2 gap-3 items-start md:space-x-8 justify-center w-full max-w-screen-lg">
        <Face data={face} />
        <Body data={body} />
        <MakeUp data={makeUp} />
        <Nails data={nails} />
        <Hair data={hair} />
      </div>
    </div>
  );
};

export default Feature;
