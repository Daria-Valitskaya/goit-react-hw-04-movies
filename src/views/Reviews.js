import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { fetchMovieReviews } from "../Services/ApiServis";
// import PropTypes from "prop-types";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieReviews(movieId).then((response) => setReviews(response.results));
  }, [movieId]);
  return (
    <>
      <ul>
        {reviews.map((feedback) => (
          <li key={feedback.id}>
            {feedback.author !== "" ? (
              <p>{feedback.author}</p>
            ) : (
              <p>Incognito</p>
            )}
            <p>{feedback.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
