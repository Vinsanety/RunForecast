import React from 'react';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';

class Form extends React.Component {
  render () {
    return (
      <Grid container className="weather-form-container">
        <Grid item xs={12}>
          <form className="weather-form" onSubmit={this.props.getCityWeather}>
            <h1>City weather search</h1>
            <Input
              className="weather-form-input"
              placeholder="Search city"
              type="text"
              name="city"
            />
            <button className="weather-form-btn">
              Send it!
            </button>
            <p className="weather-form-helper-text">If entering state, use a comma (example: Denver, CO)</p>
          </form>
        </Grid>
      </Grid>
    );
  }
}

export default Form;
