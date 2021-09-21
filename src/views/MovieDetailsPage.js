import { useState, useEffect } from "react";
import {
  useParams,
  Route,
  useRouteMatch,
  NavLink,
  useLocation,
  useHistory,
} from "react-router-dom";
import { fetchFullInfo } from "../Services/ApiServis";
import { lazy, Suspense } from "react";
import MyLoader from "../Components/Loader/MyLoader";
import Section from "../Components/Section/Section";
import Button from "../Components/Button/Button";
import s from "./MovieDetails.module.css";
const Cast = lazy(() => import("./Cast" /* webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import("./Reviews" /* webpackChunkName: "Reviews" */)
);

export default function MovieDetailsPage() {
  const location = useLocation();
  const history = useHistory();
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const { path, url } = useRouteMatch();

  useEffect(() => {
    fetchFullInfo(movieId).then((response) => {
      setMovie(response);
    });
  }, [movieId]);
  const onGoBack = () => {
    history.push(location?.state?.from?.location ?? "/");
  };
  return (
    <Section>
      {movie && (
        <>
          <div>
            <Button onClick={onGoBack} type={"button"}>
              Go back
            </Button>
          </div>
          <div className={s.DetailsView}>
            <div className={s.ImageWrapper}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                width={300}
              />
            </div>
            <div>
              <h2>{movie.title}</h2>
              <p>{movie.tagline}</p>
              <h3> Gengers:</h3>
              <p>{movie.genres.map((genre) => genre.name).join(" , ")}</p>
              <h3>Description:</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        </>
      )}
      <hr />
      <div>
        <Section>
          <NavLink
            className={s.link}
            to={{
              pathname: `${url}/cast`,
              state: { from: location?.state?.from ?? "/" },
            }}
          >
            Cast
          </NavLink>
        </Section>
        <Section>
          <NavLink
            className={s.link}
            to={{
              pathname: `${url}/reviews`,
              state: { from: location?.state?.from ?? "/" },
            }}
          >
            Reviews
          </NavLink>
        </Section>
      </div>
      <Suspense fallback={<MyLoader />}>
        <Route path={`${path}/cast`}>
          <Cast />
        </Route>
        <Route path={`${path}/reviews`}>
          <Reviews />
        </Route>
      </Suspense>
    </Section>
  );
}
