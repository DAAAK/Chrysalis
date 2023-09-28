import { AuthProvider, Footer, NavBar } from '../components/global';

import { Calendar, SkinCare } from '../components/booking';

const Booking = () => {
  return (
    <AuthProvider>
      <NavBar />
      <Calendar />
      <SkinCare />
      <Footer />
    </AuthProvider>
  );
};

export default Booking;
