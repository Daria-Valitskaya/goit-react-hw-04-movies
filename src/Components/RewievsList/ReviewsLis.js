import PropTypes from "prop-types";

export default function ReviewsList({ reviews }) {
  return (
    <ul>
      {reviews.map((feedback) => (
        <li key={feedback.id}>
          {feedback.author !== "" ? <p>{feedback.author}</p> : <p>Incognito</p>}
          <p>{feedback.content}</p>
        </li>
      ))}
    </ul>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};
