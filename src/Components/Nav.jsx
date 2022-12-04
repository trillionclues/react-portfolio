import React from 'react'
import githublogo from '../assets/icon-github.svg'
import linkedinLogo from '../assets/icon-linkedin.svg'
import twitterlogo from '../assets/icon-twitter.svg'
import femlogo from '../assets/icon-frontend-mentor.svg'

function Nav() {
  return (
    <div className='nav'>
      <a href='#'>
        <h2>
          <span>t</span>rillionclues
        </h2>
      </a>
      <ul>
        <li>
          <a target='_blank' href='https://github.com/trillionclues'>
            <img src={githublogo} alt='github' />
          </a>
        </li>
        <li>
          <a target='_blank' href='#'>
            <img src={femlogo} alt='frontendmentor' />
          </a>
        </li>
        <li>
          <a target='_blank' href='https://linkedin.com/trillionclues-excel'>
            <img src={linkedinLogo} alt='linkedin' />
          </a>
        </li>
        <li>
          <a target='_blank' href='https://twitter.com/trillionclues'>
            <img src={twitterlogo} alt='twitter' />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Nav
