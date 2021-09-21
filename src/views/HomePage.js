import { useState, useEffect } from "react";
import { fetchTrendingMovie } from "../Services/ApiServis";
import MovieList from "../Components/MovieList/MovieList";
import Section from "../Components/Section/Section";

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchTrendingMovie().then((response) => {
      setMovies(response.results);
    });
  }, []);
  return (
    <Section>
      <h1>Top of the day</h1>
      {movies && <MovieList movies={movies} />}
    </Section>
  );
}
