import PropTypes from "prop-types";

export default function ReviewsList({ reviews }) {
  return (
    <ul>
      {reviews.map((feedback) => (
        <li key={feedback.id}>
          {feedback.author !== "" ? (
            <h3>{feedback.author}</h3>
          ) : (
            <h3>Incognito</h3>
          )}
          <p>{feedback.content}</p>
        </li>
      ))}
    </ul>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};
