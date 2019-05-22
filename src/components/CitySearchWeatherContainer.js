import React, { Fragment } from 'react';
import WeatherCard from './WeatherCard.js';
import CityWeatherForm from './CityWeatherForm.js';

const API_KEY = "56e336360da929bb96ec1b44103e92aa";

class CitySearchWeatherContainer extends React.Component {
  state = {
    city: undefined,
    temperature: undefined,
    icon: undefined,
    description: '',
    humidity: undefined,
    windSpeed: undefined,
    cloud: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined,
  }
  getCityWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    console.log(data);
    if (data.name) {
      // Sunrise and Sunset Extrapolating
      var sunriseMil = data.sys.sunrise;
      var sunsetMil = data.sys.sunset;
      var sunrise = new Date(sunriseMil * 1000);
      var sunset = new Date(sunsetMil * 1000);
      var sunriseStr = sunrise.toLocaleTimeString();
      var sunsetStr = sunset.toLocaleTimeString();
      this.setState({
        city: data.name,
        temperature: data.main.temp,
        icon: data.weather[0].icon,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        cloud: data.clouds.all,
        sunrise: sunriseStr,
        sunset: sunsetStr,
        error: "",
      });
    } else {
      this.setState({
        city: undefined,
        temperature: undefined,
        icon: undefined,
        description: undefined,
        humidity: undefined,
        windSpeed: undefined,
        cloud: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: "Please enter a valid City (or City, State)",
      });
    };
  };

  render () {
    return (
      <Fragment>
        <CityWeatherForm getCityWeather={this.getCityWeather}/>
        <WeatherCard
          city={this.state.city}
          temperature={this.state.temperature}
          description={this.state.description}
          humidity={this.state.humidity}
          icon={this.state.icon}
          windSpeed={this.state.windSpeed}
          cloud={this.state.cloud}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          error={this.state.error}
        />
      </Fragment>
    )
  }
}

export default CitySearchWeatherContainer;
