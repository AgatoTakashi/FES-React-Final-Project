import React from 'react'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav id="Nav">
        <div className="nav__container">
            <a href="/">
                <img src={logo} alt="" className="logo" />
            </a>
            <ul className="nav__links">
                <li className="nav__list">
                    <Link to="/" className='nav__link'>Home</Link>
                    <Link to="/Search" className='nav__link'>Search</Link>
                    <Link to="/List" className='nav__link'>My List</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav
