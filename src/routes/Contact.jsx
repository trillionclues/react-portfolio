import React from 'react'
import patternrings from '../assets/pattern-rings.svg'
import Footer from '../Components/Footer'

function Contact() {
  return (
    <>
      <div className='contact'>
        <div className='contact__content'>
          <h1>Contact</h1>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I'll get back to you as soon as possible.
          </p>
        </div>
        <form action='' method='post'>
          <div className='form-element'>
            <input
              type='text'
              name='name'
              id='name'
              required
              placeholder='Name'
            />
          </div>
          <div className='form-element'>
            <input
              type='email'
              name='email'
              id='email'
              required
              placeholder='Email'
            />
          </div>

          <textarea
            name='message'
            id='message'
            className='lastInput'
            cols='50'
            rows='7'
            placeholder='Message'
          ></textarea>

          <a href='#'>
            <button>SEND MESSAGE</button>
          </a>
        </form>

        <img className='contact__rings' src={patternrings} alt='' />
      </div>
    </>
  )
}

export default Contact
