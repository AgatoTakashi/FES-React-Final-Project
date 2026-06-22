import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchComponent = () => {
  return (
     <div className="input-wrap">
        <input type="text" id="userInput" placeholder="Type in a keyword(s)" />
        <div className="search-wrap">
            <button id="submitButton">
                <FontAwesomeIcon icon="search" />
            </button>
        </div>
    </div>
  )
}

export default SearchComponent
