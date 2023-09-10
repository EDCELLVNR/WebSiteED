import React from 'react'
import "./Home.scss"
import { AboutUs, ContactUs, Events, Gallery, Hero, Team } from '../../components'


const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Events />
      <Gallery />
      <Team />
      <ContactUs />
      {/* < />
      <Trusted />
      <Slide />
      <Rest />
      <Explore />
      <FeaturesDark /> */}
      
    </div>
  )
}

export default Home
