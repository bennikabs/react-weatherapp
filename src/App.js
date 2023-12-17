import React from "react";
import Weather from "./Weather";

import axios from "axios";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/bennikabs/react-weatherapp.git"
            target="_blank"
          >
            Open SourceCode{""}
          </a>
          by{" "}
          <a href="https://vermillion-dango-08c067.netlify.app/">Benny Kabs</a>
        </footer>
      </div>
    </div>
  );
}
