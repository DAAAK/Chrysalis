import React from 'react'
import { Feature, NavBar, Footer } from '../components';
import { AuthProvider } from '../components/global';

function Features() {
  return (
    <AuthProvider>
    <div>
      <NavBar />
      <div className="flex flex-row flex-wrap justify-start">
        <Feature />
      </div>
      <Footer />
    </div>
    </AuthProvider>
  );
}

export default Features