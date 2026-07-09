import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Actor = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("id");

  const [loading, setLoading] = useState(true);
  const [actor, setActor] = useState(null);

  async function fetchActor() {
    setLoading(true);

    const { data } = await axios.get(
      `https://xmdbapi.com/api/v1/people/${id}?apiKey=mjX4f9pzXQ0LhEfvRJRIL3Vpmb0iJQ1oCXeWplhdBi0`
    );

    setActor(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchActor();
  }, [id]);

  const navigate = useNavigate();

  return (
    <section id="actor">
      <div className="row">

        <button className="back-to-summary" onClick={() => navigate(-1)}>
          ← Back
        </button>

        {loading && <p>Loading actor...</p>}

        {!loading && actor && (
          <div className="actor__container">
            <div className="top__profile">
                <img
                className="actor__img"
                src={actor.profile_image?.url}
                alt={actor.name}
                />
                <div className="top__profile--info">
                    <h2>{actor.name}</h2>
                    <p><strong>Birth Name:</strong> {actor.birth_name}</p>
                    <p><strong>Born:</strong> {actor.birth_date}</p>
                    <p><strong>Birthplace:</strong> {actor.birth_location}</p>
                    <p><strong>Age:</strong> {actor.age}</p>
                    <p><strong>Height:</strong> {actor.height_display}</p>
                </div>
            </div>

            <h3>Biography</h3>
            <p className="actor__bio">{actor.biography}</p>

            <h3>Professions</h3>
            <p>{actor.professions?.join(", ")}</p>

            <h3>Filmography</h3>
                <div className="filmography__container">
                    {actor.filmography?.map((item, i) => (
                        <div
                        key={i}
                        className="filmography__card"
                        onClick={() => navigate(`/Summary?id=${item.id}`)}
                        >
                            <img
                            className="filmography__img"
                            src={item.poster_url}
                            alt={item.title}
                            />

                            <p><strong>{item.title}</strong> ({item.year})</p>
                            <p>{item.category}</p>
                            {console.log(item.poster_url)}

                             {item.characters?.length > 0 && (
                                <p>as {item.characters.join(", ")}</p>
                                )}
                        </div>
                    ))}
                </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Actor;
