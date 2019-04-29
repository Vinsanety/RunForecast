import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import SearchAppBar from './components/AppBar.js';
import WeatherCard from './components/WeatherCard.js';
import Form from './components/Form.js';

const API_KEY = "56e336360da929bb96ec1b44103e92aa";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    error: undefined,
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        error: "",
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        error: "Please enter a City and Country",
      });
    }
  }

  render () {
    return (
      <div className="App">
        <SearchAppBar />
        <div className="App-Grid">
          <Grid container style={{ padding: '2rem' }} spacing={16}>

            <Form getWeather={this.getWeather}/>

            <Grid item xs={12}>
              <WeatherCard
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                description={this.state.description}
                error={this.state.error}
              />
            </Grid>

          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
