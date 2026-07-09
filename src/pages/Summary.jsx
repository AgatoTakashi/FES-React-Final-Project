import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import axios from 'axios'
import { useLocation, useNavigate } from "react-router-dom";
import imf from '../assets/ChatGPT Image Jun 24, 2026, 05_01_45 AM.png'
import Actors from '../components/Actors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Summary = ({openList, setOpenList, myList, setMyList}) => {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const initialId = params.get("id") || "";
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState([]);
    const [id, setId] = useState(initialId);
    const genres = results.Genre?.split(",").map(g => g.trim());
    const navigate = useNavigate();

    async function fetchSummary() {
        setLoading(true);
        const { data } = await axios.get(`https://www.omdbapi.com/?apikey=c706a2e0&i=${id}`);
        // const { data } = await axios.get(`https://xmdbapi.com/api/v1/movies/${id}?apiKey=mjX4f9pzXQ0LhEfvRJRIL3Vpmb0iJQ1oCXeWplhdBi0`);
        
        setResults(data);
        setLoading(false);
    }

    useEffect(() => {
        setId(initialId);
        }, [initialId]);

    useEffect(()=>{
        fetchSummary();
        window.scrollTo(0, 0)
    },[id])

    const exists = myList.some(item => item.id === results.imdbID);

  return (
    <>
        <Nav openList={openList} setOpenList={setOpenList} myList={myList} />
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
                        : <figure className="summary__img--wrapper" onClick={() => navigate(`/Trailers?id=${results.imdbID}`)}>
                            <img src={results.Poster} alt="" className="summary__img" 
                                onError={(e) => {
                                    e.target.onError = null;
                                    e.target.src = imf;
                                }}
                                
                            />
                            <FontAwesomeIcon icon={faPlay} className='play__button' />
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
                            <button onClick={() => {
                                                    
                                                    if (!exists) {
                                                        setMyList(prev => [...prev, { title: results.Title, id: results.imdbID }]);
                                                    }
                                                    setOpenList(true);
                                                }}>{exists? "Added" : "Add to My List"}</button>
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
        <Actors />
        <Footer openList={openList} setOpenList={setOpenList} />
    </>
  )
}

export default Summary
