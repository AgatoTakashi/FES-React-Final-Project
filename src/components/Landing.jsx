import React from 'react'
import hero from '../assets/hero-img.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Landing = () => {
  return (
    <section id="landing">
        <div className="header__container">
            <div className="header__description">
                <h1>Looking for a movie?</h1>
                <h2>Start your search now</h2>
            </div>
            <div className="input-wrap">
                <input type="text" id="userInput" placeholder="Type in a keyword(s)" />
                <div class="search-wrap">
                    <button onclick="submitInput()" id="submitButton">
                        <FontAwesomeIcon icon="search" />
                    </button>
                </div>
            </div>
            <figure className="header__img--wrapper">
                <img src={hero} alt="" />
            </figure>
        </div>
    </section>
  )
}

export default Landing
