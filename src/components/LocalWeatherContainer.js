import React from 'react';
import Paper from '@material-ui/core/Paper';
import CapitalizeFirstLetter from './CapitalizeFirstLetter.js';

const API_KEY = "56e336360da929bb96ec1b44103e92aa";
const Location =  "https://extreme-ip-lookup.com/json/";

class LocalWeatherContainer extends React.Component {
  state = {
    city: undefined,
    temperature: undefined,
    icon: undefined,
    description: '',
    humidity: undefined,
    windSpeed: undefined,
    cloud: undefined,
  };

  async componentDidMount() {
    // Get Location
    const location_call = await fetch(Location);
    const location_data = await location_call.json();
    const city = location_data.city;
    // Get Weather with location data
    const dataRes = await fetch(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`);
    const weather_data = await dataRes.json();
    if (weather_data.name) {
      this.setState({
        city: weather_data.name,
        temperature: weather_data.main.temp,
        icon: weather_data.weather[0].icon,
        description: weather_data.weather[0].description,
        humidity: weather_data.main.humidity,
        windSpeed: weather_data.wind.speed,
        cloud: weather_data.clouds.all,
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
      });
    };
  };

  render () {
    return (
      <Paper className="local-weather-ticker">
        <span className="local-weather-ticker-header">Local weather</span>
        <div>
          <span className="local-weather-category">City</span>
          {this.state.city}
        </div>
        <div>
          <span className="local-weather-category">Temp</span>
          {this.state.temperature}&deg;F
        </div>
        {/*<div>
          <img className="weather-icon" src={"https://openweathermap.org/img/w/" + this.props.icon + ".png"} alt="Weather icon">
          </img>
        </div>*/}
        <div>
          <span className="local-weather-category">Description</span>
          <CapitalizeFirstLetter text={this.state.description} />
        </div>
        <div>
          <span className="local-weather-category">Humidity</span>
          {this.state.humidity}%
        </div>
        <div>
          <span className="local-weather-category">Wind</span>
          {this.state.windSpeed}mph
        </div>
        <div>
          <span className="local-weather-category">Cloud cover</span>
          {this.state.cloud}%
        </div>
      </Paper>
    )
  }
}

export default LocalWeatherContainer;
