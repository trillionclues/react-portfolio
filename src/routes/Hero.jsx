import React from 'react'
import profileimg from '../assets/folio-img.jpg'
import patterncircle from '../assets/pattern-circle.svg'
import patternrings from '../assets/pattern-rings.svg'
import Skills from '../Components/Skills'

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
        <div className='button'>
          {/* <a href={`contact/1`}> */}
          <a
            href='https://drive.google.com/file/d/1o06W61Hda2jI1XD87PnJRSLTC9dO0v9B/view?usp=sharing'
            target='_blank'
          >
            <button>CONTACT ME</button>
          </a>
        </div>
      </div>
      {/* <img className='hero__img' src={profileimg} alt='profile-image' /> */}
      <img className='circle__img' src={patterncircle} alt='pattern-circle' />
      <img className='rings__img' src={patternrings} alt='pattern-rings' />
    </div>
  )
}

export default Hero
