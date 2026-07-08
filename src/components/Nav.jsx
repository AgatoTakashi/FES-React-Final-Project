import React from 'react'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'
import List from './List'

const Nav = ({openList, setOpenList, myList}) => {
    const [open, setOpen] = useState(false);

  return (
    <nav id="Nav">
        <div className="nav__container">
            <a href="/">
                <img src={logo} alt="" className="logo" />
            </a>
            <ul className={`nav__links ${open ? "open" : ""}`}>
                <li className="nav__list">
                    <Link to="/" className='nav__link'>Home</Link>
                    <Link to="/Search" className='nav__link'>Search</Link>
                    <div className="nav__link nav__link--list" onClick={() => {setOpenList(!openList); setOpen(!open)}}>
                        <p>My List</p>
                        {Array.isArray(myList) && myList.length > 0 && (
                            <span className="list__counter">{myList.length}</span>
                            )}
                    </div>
                </li>
            </ul>
            <div className="hamburger" onClick={() => setOpen(!open)}>
                {open? <FontAwesomeIcon icon={faX} />:<FontAwesomeIcon icon={faBars} /> }
            </div>
        </div>
    </nav>
  )
}

export default Nav
