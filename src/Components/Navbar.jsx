import React, { useState } from 'react'
import { NavLink, Routes, Route, Outlet, Link } from 'react-router-dom'

// ASSETS
import { FaAlignRight } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

function Nav() {
  // STATES
  const [menuToggle, setMenuToggle] = useState(false)
  const handleToggle = () => setMenuToggle(!menuToggle)
  const closeMobileMenu = () => setMenuToggle(false)

  return (
    <div className='nav'>
      <div className='nav__container'>
        <NavLink className='nav__logo' to='/'>
          <h2>
            <span>t</span>rillionclues
          </h2>
        </NavLink>
        <div className='menu__icon' onClick={handleToggle}>
          {menuToggle ? <FaTimes /> : <FaAlignRight />}
        </div>
      </div>

      <ul className={menuToggle ? 'nav__menu active' : 'nav__menu'}>
        <li className='nav__item'>
          <NavLink
            className={({ isActive }) =>
              'nav__links' + (isActive ? ' activated' : '')
            }
            onClick={closeMobileMenu}
            to='/projects'
          >
            Projects
          </NavLink>
        </li>
        <li className='nav__item'>
          <NavLink
            className={({ isActive }) =>
              'nav__links' + (isActive ? ' activated' : '')
            }
            onClick={closeMobileMenu}
            to='/articles'
          >
            Articles
          </NavLink>
        </li>
        <li className='nav__item'>
          <a target='_blank' href='https://github.com/trillionclues'>
            GitHub
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Nav
