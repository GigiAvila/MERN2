import React from 'react'
import '../assets/Navbar.css';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink className="navLink" to="">Ahora </NavLink>
      <NavLink className="navLink" to="DayForecast">Próximas horas </NavLink>
      <NavLink className="navLink" to="WeekForecast"> 5 días </NavLink>
    </nav>
  )
}

export default Navbar