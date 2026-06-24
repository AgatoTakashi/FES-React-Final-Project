import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import axios from 'axios'
import { useLocation, useNavigate } from "react-router-dom";

const Summary = () => {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const initialTitle = params.get("title") || "";
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState([]);
    const [title, setTitle] = useState(initialTitle);

    async function fetchSummary() {
        setLoading(true);
        const { data } = await axios.get(`https://www.omdbapi.com/?apikey=c706a2e0&t=${title}`);
        
        setResults(data);
        setLoading(false);
    }

    useEffect(()=>{
        fetchSummary();
    },[])

  return (
    <>
    <Nav />
    <section id='summary'>
      <div className="row">
        <div className="summary__container">
            <div className="summary__left">
                <figure className="summary__img--wrapper">
                    <img src={results.Poster} alt="" className="summary__img" />
                </figure>
            </div>
            <div className="summary__right">
                <div className="summary__description">
                    <div className="summary__top">
                        <h2 className="summary__title">{results.Title}</h2>
                        <div className="summary__title--under">
                            <h4>{results.Year}</h4>
                            <h4>|</h4>
                            <h4>{results.Rated}</h4>
                            <h4>|</h4>
                            <h4>{results.Runtime}</h4>
                        </div>
                    </div>
                    <div className="summary__middle">
                        <div className="summary__middle--upper">
                            {results.Genre}
                        </div>
                        <p>{results.Plot}</p>
                    </div>
                    <div className="summary__bottom">
                        <h4>Directed by: {results.Director}</h4>
                        <h4>Written by: {results.Writer}</h4>
                        <h4>Starring: {results.Actors}</h4>
                        
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default Summary
