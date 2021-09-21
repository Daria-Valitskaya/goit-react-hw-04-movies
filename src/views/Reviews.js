import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../Services/ApiServis";
import ReviewsList from "../Components/RewievsList/ReviewsLis";
// import PropTypes from "prop-types";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieReviews(movieId).then((response) => setReviews(response.results));
  }, [movieId]);
  return <ReviewsList reviews={reviews} />;
}
// Reviews.propTypes = {
//   movieId: PropTypes.string.isRequired,
// };
