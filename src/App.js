import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Section from "./Components/Section/Section";
import MyLoader from "./Components/Loader/MyLoader";

const HomePage = lazy(() =>
  import("./views/HomePage" /* webpackChunkName: "HomePage" */)
);
const MovieDetailsPage = lazy(() =>
  import("./views/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage" /* webpackChunkName: "MoviesPage" */)
);

function App() {
  return (
    <Section>
      <Navigation />
      <Suspense fallback={<MyLoader />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Section>
  );
}

export default App;
