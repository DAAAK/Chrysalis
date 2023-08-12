import React from 'react';
import {
  Hero,
  About,
  Services,
  Team,
  NavBar,
  Footer,
  Contacts,
} from '../components';
import { AuthProvider } from '../components/global';

function Home() {
  return (
    <AuthProvider>
      <div className="space-y-20">
        <NavBar />
        <div>
          <Hero />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Services />
        </div>
        <div>
          <Team />
        </div>
        <div>
          <Contacts />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </AuthProvider>
  );
}

export default Home;
