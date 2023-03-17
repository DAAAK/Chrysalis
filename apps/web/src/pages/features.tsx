import React from 'react'
import { Feature, NavBar, Footer } from '../components';

function Features() {
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

export default Features