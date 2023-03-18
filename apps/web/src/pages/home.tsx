import React from 'react'
import { Hero, About, Services, Team, NavBar, Footer, Contacts } from '../components'

function Home() {
  return (
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
  )
}

export default Home