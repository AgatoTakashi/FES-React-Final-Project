import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Trailers = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [trailer, setTrailer] = useState(null);
  const noTrailer =
  !trailer ||
  !trailer.url ||
  Object.keys(trailer).length === 0;


  async function fetchTrailer() {
    setLoading(true);

    const { data } = await axios.get(
      `https://xmdbapi.com/api/v1/videos/${id}?apiKey=mjX4f9pzXQ0LhEfvRJRIL3Vpmb0iJQ1oCXeWplhdBi0`
    );

    setTrailer(data.latest_trailer || null);
    setLoading(false);
  }

  useEffect(() => {
    fetchTrailer();
  }, [id]);

  return (
    <section id="trailers">
      <div className="row">
        <h2>{trailer?.name || "Trailer"}</h2>

        {loading && <p>Loading trailer...</p>}

{!loading && trailer && trailer.url && (
  <video
    width="100%"
    height="450"
    controls
    poster={trailer.thumbnail}
  >
    <source src={trailer.url} type="video/mp4" />
  </video>
)}

{!loading && (!trailer || !trailer.url || Object.keys(trailer).length === 0) && (
  <p>No trailer available for this movie.</p>
)}

      </div>
      <button 
        className="back-to-summary"
        onClick={() => navigate(`/Summary?id=${id}`)}
      >
        ← Back to Summary
      </button>

    </section>
  );
};

export default Trailers;
