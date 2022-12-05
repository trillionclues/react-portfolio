import React from 'react'
import profileimg from '../assets/image-profile-desktop.webp'
import patterncircle from '../assets/pattern-circle.svg'
import patternrings from '../assets/pattern-rings.svg'

function Hero() {
  return (
    <div className='hero'>
      <div className='hero-content'>
        <div className='bio'>
          <h1>
            Nice to meet you!
            <br />
            I'm <span> Excel Nwa..</span>.
          </h1>
        </div>
        <p>
          Based in Lagos, Nigeria. I'm a Frontend Developer passionate about
          building accessible web interfaces that users love.
        </p>
        <div className='contact'>
          <a href='#'>
            <button>CONTACT ME</button>
          </a>
        </div>
      </div>
      <img className='hero__img' src={profileimg} alt='profile-image' />
      <img className='circle__img' src={patterncircle} alt='pattern-circle' />
      <img className='rings__img' src={patternrings} alt='pattern-rings' />
    </div>
  )
}

export default Hero
