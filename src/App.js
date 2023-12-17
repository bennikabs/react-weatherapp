import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  let [temperature, setTemperature] = useState();
  let [description, setDescription] = useState();
  let [humidity, setHumidity] = useState();
  let [wind, setWind] = useState();
  let [result, setResult] = useState(null);
  let [city, setCity] = useState("");
  let [icon, setIcon] = useState();

  axios.get("/user/12345", {
    validateStatus: function (status) {
      return status < 500; // Resolve only if the status code is less than 500
    },
  });
  function displayWeather(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  useEffect(() => {
    if (city) {
      let apiKey = "c68d952d49c1f7b73f7353b16aa88d42";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl).then(displayWeather);
    }
  }, [city]);

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "c68d952d49c1f7b73f7353b16aa88d42";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
    axios.get("/user/12345", {
      validateStatus: function (status) {
        return status < 500; // Resolve only if the status code is less than 500
      },
    });
    setResult(
      <ul>
        <li>Temperature: {temperature} °C</li>
        <li>Description: {description}</li>
        <li>Humidity: {humidity} %</li>
        <li>Wind: {wind} km/h</li>
        <li>
          <img src={icon} alt="weather icon" />
        </li>
      </ul>
    );
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          onChange={updateCity}
          name="city"
          placeholder="Enter a city..."
        />
        <input type="submit" value="Search" />
      </form>
      {result}
    </div>
  );
  
}
