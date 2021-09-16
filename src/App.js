import "./App.css";
import { Route } from "react-router";
import Navigation from "./Components/Navigation/Navigation";
import Section from "./Components/Section/Section";

function App() {
  return (
    <Section>
      <Navigation />
      <Route path="/"></Route>
    </Section>
  );
}

export default App;
