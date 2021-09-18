import { useState } from "react";
import PropTypes from "prop-types";

export default function SearchMovie({ onSubmit }) {
  const [movieName, setMovieName] = useState("");
  const onInputChange = (event) => {
    setMovieName(event.currentTarget.value.toLowerCase());
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (movieName.trim() === "") {
      alert("Please, enter smthk");
      reset();
      return;
    }
    onSubmit(movieName);
    reset();
  };

  const reset = () => {
    setMovieName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={movieName}
        onChange={onInputChange}
      />
      <button type="submit"> Search</button>
    </form>
  );
}

SearchMovie.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
