import React from 'react'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Nav from './Components/Nav'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import './index.css'

function App() {
  return (
    <>
      <div className='container'>
        <Nav />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
