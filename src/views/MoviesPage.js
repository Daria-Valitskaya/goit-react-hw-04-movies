import { useState, useEffect } from "react";
import { fetchByKeyword } from "../Services/ApiServis";
import SearchMovie from "./SearchMovie";
import MovieList from "../Components/MovieList/MovieList";
import Section from "../Components/Section/Section";

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
    <Section>
      <SearchMovie onSubmit={searchMovieByKeyword} />
      {movies && <MovieList movies={movies} />}
    </Section>
  );
}
