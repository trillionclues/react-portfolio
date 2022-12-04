import React from 'react'
import Hero from './Components/Hero'
import Nav from './Components/Nav'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import './index.css'

function App() {
  return (
    <div className='container'>
      <Nav />
      <Hero />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
