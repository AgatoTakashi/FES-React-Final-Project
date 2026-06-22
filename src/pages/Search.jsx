import React from 'react'
import SearchComponent from '../components/SearchComponent'

const Search = () => {
  return (
    <section id="search">
        <div className="search-container">
            <h1>Search Movies</h1>
            <SearchComponent />
            <select id="filter" defaultValue="DEFAULT">
                <option value="DEFAULT" disabled>Sort</option>
                <option value="A_TO_Z">Alphabetical A to Z</option>
                <option value="Z_TO_A">Alphabetical Z to A</option>
                <option value="NEW_TO_OLD">Newest to oldest</option>
                <option value="OLD_TO_NEW">Oldest to newest</option>
            </select>
        </div>
        <div className="results-container">

        </div>
    </section>
  )
}

export default Search
