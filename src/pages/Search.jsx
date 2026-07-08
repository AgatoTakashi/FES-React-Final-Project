import { React, useEffect, useState } from 'react'
import axios from 'axios'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLocation, useNavigate } from "react-router-dom";
import imf from '../assets/ChatGPT Image Jun 24, 2026, 05_01_45 AM.png'


const Search = ({openList, setOpenList, myList}) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialQuery = params.get("query") || "";
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState(initialQuery);

  const [sortOption, setSortOption] = useState("DEFAULT");

  async function fetchResults() {

    setLoading(true);
    const { data } = await axios.get(

      `https://www.omdbapi.com/?apikey=c706a2e0&s=${query}`
    );

    setResults(data.Search || []);
    setLoading(false);
  }

  useEffect(() => {
    if (initialQuery.trim() !== "") {
      fetchResults();
    }
    window.scrollTo(0, 0)
  }, [initialQuery])

  let sortedResults = [...results];

  if (sortOption === "A_TO_Z") {
    sortedResults.sort((a, b) => a.Title.localeCompare(b.Title));
  }

  if (sortOption === "Z_TO_A") {
    sortedResults.sort((a, b) => b.Title.localeCompare(a.Title));
  }

  if (sortOption === "NEW_TO_OLD") {
    sortedResults.sort((a, b) => Number(b.Year) - Number(a.Year));
  }

  if (sortOption === "OLD_TO_NEW") {
    sortedResults.sort((a, b) => Number(a.Year) - Number(b.Year));
  }

  return (
    <>
      <Nav openList={openList} setOpenList={setOpenList} myList={myList} />
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
                  navigate(`/Search?query=${query}`);
                  fetchResults()
                }
              }}
            />
            <div className="search-wrap">
              <button id="submitButton"
                onClick={() => {
                  navigate(`/Search?query=${query}`);
                  fetchResults();
                }}
              >
                <FontAwesomeIcon icon="search" />
              </button>
            </div>
          </div>

          
          
        </div>

        <div className="results-container">
          <div className="sort__container">
            <select 
              id="filter" 
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="DEFAULT" disabled>Sort</option>
              <option value="A_TO_Z">Alphabetical A to Z</option>
              <option value="Z_TO_A">Alphabetical Z to A</option>
              <option value="NEW_TO_OLD">Newest to oldest</option>
              <option value="OLD_TO_NEW">Oldest to newest</option>
            </select>
          </div>
          <div className="cards__container">
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
                sortedResults.slice(0, 6).map((result, index) => (
                  <button onClick={() => navigate(`/Summary?id=${result.imdbID}`)} key={index}>
                    <div className="card">
                      <img src={result.Poster} alt="Movie Poster" 
                        className="movie__poster--img" 
                        height="444" width="300"
                        onError={(e) => {
                          e.target.onError = null;
                           e.target.src = imf;
                        }}
                      />
                      <h2 className="movie__title">{result.Title}</h2>
                      <h3 className="movie__year">{result.Year}</h3>
                      <p className="movie__id barcode">{result.imdbID}</p>
                    </div>
                  </button>
                ))
              )
            }
          </div>
        </div>
      </section>
      <Footer openList={openList} setOpenList={setOpenList} />
    </>
  )
}

export default Search
