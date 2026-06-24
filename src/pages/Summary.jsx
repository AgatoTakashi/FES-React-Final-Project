import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import axios from 'axios'
import { useLocation, useNavigate } from "react-router-dom";
import imf from '../assets/ChatGPT Image Jun 24, 2026, 05_01_45 AM.png'

const Summary = () => {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const initialTitle = params.get("title") || "";
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState([]);
    const [title, setTitle] = useState(initialTitle);
    const genres = results.Genre?.split(",").map(g => g.trim());

    async function fetchSummary() {
        setLoading(true);
        const { data } = await axios.get(`https://www.omdbapi.com/?apikey=c706a2e0&t=${title}`);
        
        setResults(data);
        setLoading(false);
    }

    useEffect(()=>{
        fetchSummary();
        window.scrollTo(0, 0)
    },[])

  return (
    <>
        <Nav />
        <section id='summary'>
        <div className="row">
            <div className="summary__container">
                <div className="summary__left">
                    {loading
                        ? <figure className="summary__img--wrapper skeleton">
                            <img src={results.Poster} alt="" className="summary__img" 
                                onError={(e) => {
                                    e.target.onError = null;
                                    e.target.src = imf;
                                }}
                            />
                        </figure>
                        : <figure className="summary__img--wrapper">
                            <img src={results.Poster} alt="" className="summary__img" 
                                onError={(e) => {
                                    e.target.onError = null;
                                    e.target.src = imf;
                                }}
                            />
                        </figure>
                    }              
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
                                {genres?.map((g, i) => (
                                    <span key={i} className="genre">{g}</span>
                                    ))}
                            </div>
                            <div className="plot">
                                <p>{results.Plot}</p>
                            </div>
                            <button>Add to My List</button>
                        </div>
                        <div className="summary__bottom">
                            <p><strong>Directed by: </strong>{results.Director}</p>
                            <p><strong>Written by: </strong>{results.Writer}</p>
                            <p><strong>Starring: </strong>{results.Actors}</p>
                            
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
