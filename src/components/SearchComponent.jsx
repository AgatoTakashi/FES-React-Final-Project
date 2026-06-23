import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'

const SearchComponent = () => {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    function getInput (e) {
        setQuery(e.target.value || "");
    }

    useEffect(()=>{
    async function fetchResults(searchTerm) {

        const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=c706a2e0&s&s=${searchTerm}`
        );
        console.log(data.Search)
        setResults(data.Search);
        setLoading(false);
    }
    fetchResults();
    },[])

  return (
     <div className="input-wrap">
        <input
            id="userInput"
            type="text"
            placeholder="Type in a keyword(s)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
        <div className="search-wrap">
            <button id="submitButton" onClick={getInput} >
                <FontAwesomeIcon icon="search" />
            </button>
        </div>
    </div>
  )
}

export default SearchComponent
