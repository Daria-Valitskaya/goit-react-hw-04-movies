import { Link } from "react-router-dom";
// import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { fetchByKeyword } from "../Services/ApiServis";
import SearchMovie from "./SearchMovie";

export default function MoviePage() {
  const [movies, setMovies] = useState(null);
  const [movieName, setMovieName] = useState("");
  useEffect(() => {
    if (!movieName) {
      return;
    }
    function fetchMovies() {
      fetchByKeyword(movieName).then((response) => {
        setMovies(response.results);
        if (!response.results.length) {
          alert("No matches were found! Try again");
          return;
        }
      });
    }
    fetchMovies();
  }, [movieName]);

  const searchMovieByKeyword = (movieName) => {
    setMovieName(movieName);
  };
  return (
    <>
      <SearchMovie onSubmit={searchMovieByKeyword} />
      {movies && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
