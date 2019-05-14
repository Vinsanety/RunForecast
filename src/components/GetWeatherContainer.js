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
        temperature: data.main.temp,
        city: data.name,
        description: data.weather[0].description,
        error: "",
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
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
          temperature={this.state.temperature}
          city={this.state.city}
          description={this.state.description}
          error={this.state.error}
        />
      </Fragment>
    )
  }
}

export default GetWeatherContainer;
