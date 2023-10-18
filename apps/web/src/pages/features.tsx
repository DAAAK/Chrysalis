import { useContext } from 'react';
import { Feature, NavBar, Footer } from '../components';
import { AuthContext } from '../components/global';

function Features() {
  const authContext = useContext(AuthContext);

  console.log(authContext);
  return (
    <div>
      <NavBar />
      <div className="flex flex-row flex-wrap justify-start">
        <Feature />
      </div>
      <Footer />
    </div>
  );
}

export default Features;
