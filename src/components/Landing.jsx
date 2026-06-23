import React from 'react'
import hero from '../assets/hero-img.svg'
import SearchComponent from './SearchComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Landing = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

  return (
    <section id="landing">
        <div className="header__container">
            <div className="header__description">
                <h1>Looking for a movie?</h1>
                <h2>Start your search now</h2>
            </div>
            <div className="input-wrap">
                <input type="text" id="userInput" placeholder="Type in a keyword(s)" value={input}
                        onChange={(e) => setInput(e.target.value)}/>
                <div className="search-wrap">
                    <button id="submitButton" onClick={() => navigate(`/Search?query=${input}`)}>
                        <FontAwesomeIcon icon="search" />
                    </button>
                </div>
            </div>
            {/* <SearchComponent /> */}
            <figure className="header__img--wrapper">
                <img src={hero} alt="" />
            </figure>
        </div>
    </section>
  )
}

export default Landing
