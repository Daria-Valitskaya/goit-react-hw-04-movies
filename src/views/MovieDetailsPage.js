import { useState, useEffect } from "react";
import { useParams, Route, useRouteMatch } from "react-router-dom";
import { fetchFullInfo } from "../Services/ApiServis";
import Cast from "./Cast";
import Reviews from "./Reviews";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const { path } = useRouteMatch();
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
            <h3>Description:</h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
      <hr />
      <Route path={`${path}`}>
        <Cast />
      </Route>
      <Route path={`${path}`}>
        <Reviews />
      </Route>
    </>
  );
}

// /movies/:movieId/reviews
// /movies/:movieId/cast
