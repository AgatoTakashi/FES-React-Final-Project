import { React, useEffect, useState } from 'react'
import SearchComponent from '../components/SearchComponent'
import axios from 'axios'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLocation, useNavigate } from "react-router-dom";


const Search = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialQuery = params.get("query") || "";
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState(initialQuery);

  async function fetchResults() {

      setLoading(true);
      const { data } = await axios.get(
        
        `https://www.omdbapi.com/?apikey=c706a2e0&s=${query}`
      );
 
      setResults(data.Search || []);
      setLoading(false);
    }

  useEffect(()=>{
    fetchResults();
  },[])

  return (
    <>
      <Nav />
    <section id="search">
        <div className="search-container">
            <h1>Search Movies</h1>
            
            <div className="input-wrap">
              <input
                  id="userInput"
                  type="text"
                  placeholder="Type in a keyword(s)"
                  value={query}
                  onChange={((e) => setQuery(e.target.value))}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      fetchResults()
                    }
                  }}
              />
              <div className="search-wrap">
                  <button id="submitButton" 
                  onClick={fetchResults}
                  >
                      <FontAwesomeIcon icon="search" />
                  </button>
              </div>
            </div>
            
            <div className="sort-container">
              <select id="filter" defaultValue="DEFAULT">
                  <option value="DEFAULT" disabled>Sort</option>
                  <option value="A_TO_Z">Alphabetical A to Z</option>
                  <option value="Z_TO_A">Alphabetical Z to A</option>
                  <option value="NEW_TO_OLD">Newest to oldest</option>
                  <option value="OLD_TO_NEW">Oldest to newest</option>
              </select>
            </div>
        </div>

        <div className="results-container">
          {loading
            ? 
              new Array(6).fill(0).map((_, index) => (
              <div className="card-skeleton skeleton" key={index} >
                <div className="skeleton-img"></div>
                <div className="skeleton-title"></div>
              </div>
              )
            )
            : (
              results.slice(0,6).map((result, index) => (
                <button onClick={() => navigate(`/Summary?title=${result.Title}`)} key={index}>
              <div className="card">
                <img src={result.Poster} alt="Movie Poster" className="movie__poster--img" height="444" width="300" />
                <h2 className="movie__title">{result.Title}</h2>
                <h3 className="movie__year">{result.Year}</h3>
                <p className="movie__id barcode">{result.imdbID}</p>
              </div></button>
            ))
            )
          }
        </div>
    </section>
    <Footer />
    </>
  )
}

export default Search
