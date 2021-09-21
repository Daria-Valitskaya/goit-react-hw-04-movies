import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Components/Button/Button";

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
        className="SearchForm-input"
      />
      <Button type={"submit"}>Search</Button>
    </form>
  );
}

SearchMovie.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
