import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = ({ showNavbar, handleShowNavbar }) => {
  return (
    <nav className='navbarContainer'>
      <div className={`navLinksWrapper ${showNavbar ? 'openContainer' : ''}`}>
        <NavLink
          className={`navLink ${showNavbar ? 'openLink' : ''}`}
          to=''
          onClick={handleShowNavbar}
        >
          TODAY{' '}
        </NavLink>
        <NavLink
          className={`navLink ${showNavbar ? 'openLink' : ''}`}
          to='DayForecast'
          onClick={handleShowNavbar}
        >
          NEXT HOURS{' '}
        </NavLink>
        <NavLink
          className={`navLink ${showNavbar ? 'openLink' : ''}`}
          to='WeekForecast'
          onClick={handleShowNavbar}
        >
          {' '}
          THIS WEEK{' '}
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
