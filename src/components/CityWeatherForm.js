import React from 'react';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';

class CityWeatherForm extends React.Component {
  render () {
    return (
      <Grid container className="city-weather-form-container">
        <Grid item xs={12}>
          <form className="city-weather-form" onSubmit={this.props.getCityWeather}>
            <h1>City weather search</h1>
            <Input
              className="city-weather-form-input"
              placeholder="Search city"
              type="text"
              name="city"
            />
            <button className="city-weather-form-btn">
              Send it!
            </button>
            <p className="city-weather-form-helper-text">If searching City and State, use a comma with full state name (example: Denver, Colorado)</p>
          </form>
        </Grid>
      </Grid>
    );
  }
}

export default CityWeatherForm;
