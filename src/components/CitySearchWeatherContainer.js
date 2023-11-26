import React, { Fragment } from 'react';
import CityWeatherForm from './CityWeatherForm.js';
import WeatherCard from './WeatherCard.js';
import ForecastTable from './ForecastTable.js';

const API_KEY = `${process.env.REACT_APP_API_KEY}`;

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
    formHint: undefined,
    error: undefined,
    forecast: [],
  }
  getCityWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    // Current Weather API Call
    const current_weather_api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`);
    const current_weather_data = await current_weather_api_call.json();
    // Forecast Weather API Call
    const forecast_api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=imperial`);
    const forecast_data = await forecast_api_call.json();
    console.log(forecast_data.list);

    if (current_weather_data.name) {
      // Sunrise and Sunset UTC Extrapolating
      var sunriseMil = current_weather_data.sys.sunrise;
      var sunsetMil = current_weather_data.sys.sunset;
      var sunrise = new Date(sunriseMil * 1000).toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
      });
      var sunset = new Date(sunsetMil * 1000).toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
      });
      this.setState({
        city: current_weather_data.name,
        temperature: Math.round(current_weather_data.main.temp),
        icon: current_weather_data.weather[0].icon,
        description: current_weather_data.weather[0].description,
        humidity: current_weather_data.main.humidity,
        windSpeed: Math.round(current_weather_data.wind.speed),
        cloud: current_weather_data.clouds.all,
        sunrise: sunrise,
        sunset: sunset,
        formHint: "",
        error: "",
        forecast: forecast_data.list,
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
        formHint: "(example: Boulder, Colorado)",
        error: "Please enter a valid City",
        forecast: [],
      });
    };
  };

  render () {
    return (
      <Fragment>
        <CityWeatherForm
          getCityWeather={this.getCityWeather}
        />
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
          formHint={this.state.formHint}
        />
        <ForecastTable
          city={this.state.city}
          forecast={this.state.forecast}
        />
      </Fragment>
    )
  }
}

export default CitySearchWeatherContainer;
