import React, { useState, useEffect } from 'react'
import './Header.css'
import MenuIcon from '../../../public/menu.png'
import CrossIcon from '../../../public/cross.png'
import CityFilter from './CityFilter'
import Navbar from '../Navbar/Navbar'
import CompanyLogo from '../../assets/CompanyLogo.png'

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className='header'>
      <div className='companyName'>
        <p>Weather App</p>
        <div className='companylogoWrapper'>
          <img src={CompanyLogo} alt='companyLogo' />
        </div>
      </div>
      <CityFilter />
      {windowWidth >= 1023 ? (
        <Navbar showNavbar={showNavbar} />
      ) : (
        <>
          <div className='MenuIconContainer' onClick={handleShowNavbar}>
            <img src={showNavbar ? CrossIcon : MenuIcon} alt='MenuIcon' />
          </div>
          {showNavbar && (
            <Navbar
              showNavbar={showNavbar}
              handleShowNavbar={handleShowNavbar}
            />
          )}
        </>
      )}
    </div>
  )
}

export default Header
