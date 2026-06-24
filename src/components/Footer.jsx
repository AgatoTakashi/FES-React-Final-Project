import React from 'react'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <a href="/">
        <figure className="footer__img--warpper">
          <img src={logo} alt="" className="footer__img" />
        </figure>
      </a>
      <div className="footer__links--container">
        <ul className='footer__links'>
          <Link to="/" className='footer__link'>Home</Link>
          <Link to="/Search" className='footer__link'>Search</Link>
          <div className='footer__link nav__link--list'>My List</div>      
        </ul>
      </div>
      <div className="copyright__text">
        ©Copyright 2026
      </div>
    </footer>
  )
}

export default Footer
