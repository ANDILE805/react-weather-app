import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by {""}
          <a href="https://www.linkedin.com/in/andile-mbatha-a56a2915b/">
            Andile Mbatha
          </a>
          {""} and is {""}
          <a
            href="https://github.com/ANDILE805/react-weather-app"
            target="_blank"
          >
            Open sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
