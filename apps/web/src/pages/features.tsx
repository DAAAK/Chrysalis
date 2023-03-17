import React from 'react'
import { Feature, NavBar } from '../components';

function Features() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-row flex-wrap justify-start">
        <Feature />
      </div>
    </div>
  );
}

export default Features