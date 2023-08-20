import "./App.css";
import WeatherSearch from "./WeatherSearch.js";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <h2>
        <WeatherSearch />
      </h2>
      <footer>
        Created with open source code by{" "}
        <a href="https://github.com/cdavis1809?tab=repositories">
          Courtney Davis
        </a>
        .
      </footer>
    </div>
  );
}
