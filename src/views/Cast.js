import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { fetchMovieCast } from "../Services/ApiServis";

// import PropTypes from "prop-types";
import CastList from "../Components/CastList/CastList";

export default function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieCast(movieId).then((response) => setCast(response.cast));
  }, [movieId]);
  return cast && <CastList cast={cast} />;
}
// Cast.propTypes = {
//   movieId: PropTypes.string.isRequired,
// };
