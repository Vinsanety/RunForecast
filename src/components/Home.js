import React from "react";
import Grid from "@material-ui/core/Grid";
import CitySearchWeatherContainer from "./CitySearchWeatherContainer.js";

class Home extends React.Component {
  render() {
    return (
      <div className="app-grid">
        <Grid container>
          <Grid item xs={12}>
            <h1>City weather search</h1>
            <CitySearchWeatherContainer />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Home;
