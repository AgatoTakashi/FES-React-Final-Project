import { React, useEffect, useState } from 'react'
import SearchComponent from '../components/SearchComponent'
import axios from 'axios'

const Search = () => {

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    async function fetchResults() {
      const { data } = await axios.get(
        "http://www.omdbapi.com/?apikey=c706a2e0&s&s=fast"
      );
      // console.log(data.Search)
      setResults(data.Search);
      setLoading(false);
    }
    fetchResults();
  },[])

  return (
    <section id="search">
        <div className="search-container">
            <h1>Search Movies</h1>
            <SearchComponent />
            
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
              <div className="card" key={index} >
                  <img src={result.Poster} alt="Movie Poster" className="movie__poster--img" height="444" width="300" />
                  <h2 className="movie__title">{result.Title}</h2>
                  <h3 className="movie__year">{result.Year}</h3>
                  <p className="movie__id barcode">{result.imdbID}</p>
                </div>
            ))
            )
          }
        </div>
    </section>
  )
}

export default Search
