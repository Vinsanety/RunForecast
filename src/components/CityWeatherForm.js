import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

class CityWeatherForm extends React.Component {
  render() {
    return (
      <Grid container className="city-weather-form-container">
        <Grid item xs={12}>
          <form
            className="city-weather-form"
            onSubmit={this.props.getCityWeather}
          >
            <TextField
              className="city-weather-form-input"
              label="City Search"
              placeholder="Enter a City, State"
              name="city"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <button className="city-weather-form-btn">Send it</button>
          </form>
        </Grid>
      </Grid>
    );
  }
}

export default CityWeatherForm;
