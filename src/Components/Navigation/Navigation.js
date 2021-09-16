import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
export default function Navigation() {
  return (
    <nav className={s.header}>
      <NavLink className={s.link} activeClassName={s.activeLink} exact to="/">
        Home
      </NavLink>
      <NavLink className={s.link} activeClassName={s.activeLink} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
}
