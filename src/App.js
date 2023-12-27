import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <a
            href="https://github.com/bennikabs/react-weatherapp.git"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code{""}
          </a>{" "}
          by{" "}
          <a
            href="https://vermillion-dango-08c067.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Benny Kabs
          </a>
        </footer>
      </div>
    </div>
  );
}
