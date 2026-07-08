import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import axios from 'axios'
// import { useLocation, useNavigate } from "react-router-dom";
import imf from '../assets/ChatGPT Image Jun 24, 2026, 05_01_45 AM.png'

const Actors = ({openList, setOpenList, myList, setMyList}) => {

    // const location = useLocation();
    const params = new URLSearchParams(location.search);
    const initialId = params.get("id") || "";
    const [loading, setLoading] = useState(true);
    const [actors, setActors] = useState([]);
    const [actress, setActress] = useState([]);
    const [id, setId] = useState(initialId);

    async function fetchSummary() {
        setLoading(true);
        // const { data } = await axios.get(`https://www.omdbapi.com/?apikey=c706a2e0&i=${id}`);
        const { data } = await axios.get(`https://xmdbapi.com/api/v1/movies/${id}?apiKey=mjX4f9pzXQ0LhEfvRJRIL3Vpmb0iJQ1oCXeWplhdBi0`);
        
        setActors(data.full_cast_and_crew.Actor);
        setActress(data.full_cast_and_crew.Actress);
        
        setLoading(false);
    }

    useEffect(()=>{
        fetchSummary();
    },[])

    // console.log(actress)

  return (
    <>
        <section id="actors">
            <div className="row">
                <h3>Actors</h3>
                <div className="profiles">
                    {actors.map((actor, id)=>(
                        <div className="actor__card" key={id}>
                            <img src={actor.profile_image? actor.profile_image : imf} className='img__actor'  />
                            <h4 className='actor__name'>{actor.name}</h4>
                        </div>
                    ))}
                </div>
                <h3>Actresses</h3>
                <div className="profiles">
                    {actress.map((actress, index)=>(
                        <div className="actor__card" key={index}>
                            <img src={actress.profile_image? actress.profile_image : imf} className='img__actor' />
                            <h4 className='actor__name'>{actress.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default Actors
