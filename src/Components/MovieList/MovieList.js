import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link
            className={s.MovieLink}
            to={{
              pathname: `/movies/${movie.id}`,
              state: { from: location },
            }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
