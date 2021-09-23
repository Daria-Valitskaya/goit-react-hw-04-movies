import { useState, useEffect } from "react";
import { fetchByKeyword } from "../Services/ApiServis";
import { useLocation, useHistory } from "react-router-dom";
import SearchMovie from "./SearchMovie";
import MovieList from "../Components/MovieList/MovieList";
import Section from "../Components/Section/Section";

export default function MoviePage() {
  const [movies, setMovies] = useState(null);
  const [movieName, setMovieName] = useState("");
  const history = useHistory();
  const location = useLocation();

  const searchQuery = new URLSearchParams(location.search).get("query") ?? "";
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

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }

    setMovieName(searchQuery);
  }, [searchQuery]);

  const getHistory = (movieName) => {
    history.push({
      ...location,
      search: `query=${movieName}`,
    });
  };

  const searchMovieByKeyword = (movieName) => {
    setMovieName(movieName);
    getHistory(movieName);
  };
  return (
    <Section>
      <SearchMovie onSubmit={searchMovieByKeyword} />
      {movies && <MovieList movies={movies} />}
    </Section>
  );
}
