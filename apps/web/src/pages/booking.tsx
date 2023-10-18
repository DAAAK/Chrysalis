import { AuthContext, Footer, NavBar } from '../components/global';

import { Calendar, SkinCare } from '../components/booking';
import { useContext } from 'react';

const Booking = () => {
  const authContext = useContext(AuthContext);

  console.log(authContext);

  return (
    <>
      <NavBar />
      <Calendar />
      <SkinCare />
      <Footer />
    </>
  );
};

export default Booking;
