import React from 'react'
import logo from '../../assets/logo.png'
import './Header.css'
const Header = () => {
  return (
    <div className='header-container'>
      <img src={logo} alt="logo" />
            <ul className='hero-menu'>
                <li>Home</li>
                <li>Program</li>
                <li>Why Us</li>
                <li>Plans</li>
                <li>Testimonials</li>
            </ul>
    </div>
  )
}

export default Header
