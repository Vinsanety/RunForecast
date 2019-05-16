import React, { Fragment } from 'react';
import WeatherCard from './WeatherCard.js';
import Form from './Form.js';

const API_KEY = "56e336360da929bb96ec1b44103e92aa";

class CitySearchWeatherContainer extends React.Component {
  state = {
    city: undefined,
    temperature: undefined,
    icon: undefined,
    humidity: undefined,
    description: undefined,
    windSpeed: undefined,
    cloud: undefined,
    error: undefined,
  }
  getCityWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    console.log(data);
    if (data.name) {
      this.setState({
        city: data.name,
        temperature: data.main.temp,
        icon: data.weather[0].icon,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        windSpeed: data.wind.speed,
        cloud: data.clouds.all,
        error: "",
      });
    } else {
      this.setState({
        city: undefined,
        temperature: undefined,
        icon: undefined,
        humidity: undefined,
        description: undefined,
        windSpeed: undefined,
        cloud: undefined,
        error: "Please enter a City",
      });
    };
  };

  render () {
    return (
      <Fragment>
        <Form getCityWeather={this.getCityWeather}/>
        <WeatherCard
          city={this.state.city}
          temperature={this.state.temperature}
          humidity={this.state.humidity}
          description={this.state.description}
          icon={this.state.icon}
          windSpeed={this.state.windSpeed}
          cloud={this.state.cloud}
          error={this.state.error}
        />
      </Fragment>
    )
  }
}

export default CitySearchWeatherContainer;
