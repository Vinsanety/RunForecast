import React from 'react';
import Grid from '@material-ui/core/Grid';
import WeatherCamContainer from './WeatherCamContainer.js';

class Cams extends React.Component {
  render () {
    return (
      <div className="app-grid weather-cam-container">
        <Grid container style={{ padding: '2rem' }}>
          <Grid item xs={12}>
            <h1>Weathercams</h1>
            <WeatherCamContainer></WeatherCamContainer>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Cams;
