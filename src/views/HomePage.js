import { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { fetchTrendingMovie } from "../Services/ApiServis";

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  const { url } = useRouteMatch();

  useEffect(() => {
    fetchTrendingMovie().then((response) => {
      setMovies(response.results);
    });
  }, []);
  return (
    <>
      <h1>Top of the day</h1>
      {movies &&
        movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`${url}movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
    </>
  );
}
