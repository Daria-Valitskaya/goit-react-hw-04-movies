import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Section from "./Components/Section/Section";
import HomePage from "./views/HomePage";
import MovieDetailsPage from "./views/MovieDetailsPage";
// import SearchMovie from "./views/SearchMovie";
import MoviePage from "./views/MoviesPage";

function App() {
  return (
    <Section>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <MoviePage />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
      </Switch>
    </Section>
  );
}

export default App;
