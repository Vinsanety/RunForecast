import React, {Fragment} from 'react';
import WeatherCard from './WeatherCard.js';
import Form from './Form.js';

const API_KEY = "56e336360da929bb96ec1b44103e92aa";

class GetWeatherContainer extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    description: undefined,
    error: undefined,
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    console.log(data);
    if (data.name) {
      this.setState({
        city: data.name,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        windSpeed: data.wind.speed,
        cloud: data.clouds.all,
        error: "",
      });
    } else {
      this.setState({
        city: undefined,
        temperature: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter a City",
      });
    };
  };

  render () {
    return (
      <Fragment>
        <Form getWeather={this.getWeather}/>
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

export default GetWeatherContainer;
