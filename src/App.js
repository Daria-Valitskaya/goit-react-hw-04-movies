import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Section from "./Components/Section/Section";
import HomePage from "./views/HomePage";
import MovieDetailsPage from "./views/MovieDetailsPage";

function App() {
  return (
    <Section>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          MoviesPage
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
      </Switch>
    </Section>
  );
}

export default App;

// В приложении должны быть следующие маршруты. Если пользователь зашел по несуществующему маршруту, его необходимо перенаправлять на домашнюю страницу.

// '/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
// /movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.
