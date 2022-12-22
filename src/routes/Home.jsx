import React from 'react'
import Footer from '../Components/Footer'
import Skills from '../Components/Skills'
import Dropdown from './Dropdown'
import Hero from './Hero'
import Contact from './Contact'

const Home = () => {
  return (
    <div className='home__menu'>
      <Hero />
      <Dropdown />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
