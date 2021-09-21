import PropTypes from "prop-types";
import zagluhka from "./zaglushka.jpg";
import s from "./CastList.module.css";

export default function CastList({ cast }) {
  return (
    <ul className={s.CastList}>
      {cast.map((actor) => (
        <li key={actor.id}>
          {actor.profile_path !== null ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt={actor.name}
              width="120"
            />
          ) : (
            <img src={zagluhka} alt={actor.name} width="120" />
          )}

          <p>{actor.name}</p>
        </li>
      ))}
    </ul>
  );
}
CastList.propTypes = {
  cast: PropTypes.array.isRequired,
};
