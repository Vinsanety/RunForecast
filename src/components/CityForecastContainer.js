import React, { Fragment } from 'react';
import CityWeatherForm from './CityWeatherForm.js';

const API_KEY = "56e336360da929bb96ec1b44103e92aa";

class CityForecastContainer extends React.Component {
  state = {

  }
  getCityForecast = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const city = window.city;
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();

    if (data.name) {
      this.setState({

      });
    } else {
      this.setState({

      });
    };
  };


  render () {
    return (
      <Fragment>
      </Fragment>
    )
  }
}

export default CityForecastContainer;
