import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import CapitalizeFirstLetter from '../UtilComponents/CapitalizeFirstLetter.js';

const API_KEY = `${process.env.REACT_APP_API_KEY}`;

function LocalWeatherContainer() {
  const [location, setLocation] = useState(null);
  const [apiResponse, setApiResonse] = useState(null);

  function handleGetLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });
    // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    // Make API call to OpenWeatherMap
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=imperial`)
      .then(response => response.json())
      .then(data => {
        setApiResonse(data);
      })
    .catch(error => console.log(error));
  }
  function error() {
    console.log("Unable to retrieve your location");
  }
  handleGetLocation();

  return (
    <div>
      {apiResponse ? (
        <Paper className="local-weather-ticker">
          <span className="local-weather-ticker-header">{apiResponse.name} local weather</span>
          <div>
            <span className="local-weather-category">Conditions</span>
            {Math.round(apiResponse.main.temp)}&deg;F
              { apiResponse.weather[0].icon &&
                <img className="weather-icon" src={"https://openweathermap.org/img/w/" + apiResponse.weather[0].icon + ".png"} alt="Weather icon">
                </img>
              }
              {
                apiResponse.weather[0].description &&
                <CapitalizeFirstLetter text={apiResponse.weather[0].description} />
              }
          </div>
          <div>
            <span className="local-weather-category">Humidity</span>
            {apiResponse.main.humidity}%
          </div>
          <div>
            <span className="local-weather-category">Wind</span>
            {Math.round(apiResponse.wind.speed)}mph
          </div>
          <div>
            <span className="local-weather-category">Cloud</span>
            {apiResponse.clouds.all}%
          </div>
        </Paper>
      ) : null}
    </div>
  );
}

export default LocalWeatherContainer;
