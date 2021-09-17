import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFullInfo } from "../Services/ApiServis";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchFullInfo(movieId).then((response) => {
      setMovie(response);
    });
  }, [movieId]);
  return (
    <>
      {movie && (
        <>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div>
            <h2>{movie.title}</h2>
            <p>{movie.tagline}</p>
            <h3> Gengers:</h3>
            <p>{movie.genres.map((genre) => genre.name).join(" , ")}</p>
            <h2>Description:</h2>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </>
  );
}
