import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import github from '../../assets/github.png'
const Footer = () => {
  return (
    <div className='footer-container'>
         <img src={logo} alt="" />
         <span>Web site create by RanRu : randa.chiri@gmail.com</span>
         <div className='links-contaainer'>
            <img src={linkedin} alt="" />
            <img src={instagram} alt="" />
            <img src={github} alt="" />
            
         </div>
         
    </div>
  )
}

export default Footer
