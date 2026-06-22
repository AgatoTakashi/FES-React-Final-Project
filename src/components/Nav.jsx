import React from 'react'
import logo from '../assets/logo.png'

const Nav = () => {
  return (
    <nav>
        <div className="nav__container">
            <a href="/">
                <img src={logo} alt="" className="logo" />
            </a>
            <ul className="nav__links">
                <li className="nav__list">
                    <a href="/" className="nav__link">Home</a>
                    <a href="/" className="nav__link">Search</a>
                    <a href="/" className="nav__link">My List</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav
