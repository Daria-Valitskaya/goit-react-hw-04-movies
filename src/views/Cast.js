import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { fetchMovieCast } from "../Services/ApiServis";
// import PropTypes from "prop-types";
import zagluhka from "./zaglushka.jpg";

export default function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieCast(movieId).then((response) => setCast(response.cast));
  }, [movieId]);
  return (
    <>
      {cast && (
        <ul>
          {cast.map((actor) => (
            <li key={actor.id}>
              {actor.profile_path !== null ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  alt={actor.name}
                  width="120"
                />
              ) : (
                <img src={zagluhka} alt={actor.name} width="120" />
              )}

              <p>{actor.name}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
