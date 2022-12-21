import React from 'react'
import githublogo from '../assets/icon-github.svg'
import linkedinLogo from '../assets/icon-linkedin.svg'
import twitterlogo from '../assets/icon-twitter.svg'
import femlogo from '../assets/icon-frontend-mentor.svg'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer__section' id='footer'>
      <div className='hr'></div>

      <div className='footer__details'>
        <NavLink className='footer__logo' to='/'>
          <h2>
            <span>t</span>rillionclues
          </h2>
        </NavLink>

        <ul className='footer__menu'>
          <li className='footer__item'>
            <a target='_blank' href='https://github.com/trillionclues'>
              <img src={githublogo} alt='github' />
            </a>
          </li>
          <li className='footer__item'>
            <a target='_blank' href='#'>
              <img src={femlogo} alt='frontendmentor' />
            </a>
          </li>
          <li className='footer__item'>
            <a target='_blank' href='https://linkedin.com/trillionclues-excel'>
              <img src={linkedinLogo} alt='linkedin' />
            </a>
          </li>
          <li className='footer__item'>
            <a target='_blank' href='https://twitter.com/trillionclues'>
              <img src={twitterlogo} alt='twitter' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
